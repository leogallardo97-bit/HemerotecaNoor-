/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Explore Component (Orquestador Fase 3)
 * ══════════════════════════════════════════════════════════
 *
 * Integra la LÍNEA DE TIEMPO y el MAPA en una sección unificada
 * de exploración, accesible desde el Header y la taxonomía.
 *
 * MODOS DE EXPLORACIÓN:
 *   1. Timeline  → Línea de tiempo + lista lateral de documentos
 *   2. Map       → Mapa histórico de Al-Ándalus a pantalla completa
 *   3. Combined  → Timeline encima + mapa abajo (desktop)
 *
 * FLUJO DE DATOS:
 *   Usuario mueve slider / clickea mapa
 *     ↓
 *   NoorState.dispatch(SET_FILTER / TOGGLE_FILTER_VALUE)
 *     ↓
 *   results-grid.js se actualiza automáticamente (suscriptor de state)
 *     ↓
 *   map.js resalta marcadores relevantes (suscriptor de state)
 */

// Estado interno del componente de exploración
const _exploreState = {
  isVisible: false,
  activeTab: 'combined',   // 'timeline' | 'map' | 'combined'
  mapInitialized: false,
  timelineInitialized: false,
};

/**
 * initExplore()
 * Inyecta la sección de exploración y la hace interactiva.
 * Se llama desde app.js después de que el DOM principal está listo.
 */
function initExplore() {
  const mountEl = document.getElementById('app-explore');
  if (!mountEl) return;

  mountEl.innerHTML = _buildExploreHTML();

  _bindExploreEvents();

  // Iniciar en modo "combinado" por defecto
  _switchTab('combined');

  console.log('[Explore] ✓ Sección de exploración inicializada.');
}

// ─────────────────────────────────────────────────────────
// CONSTRUCCIÓN DEL HTML
// ─────────────────────────────────────────────────────────

function _buildExploreHTML() {
  return `
    <section class="explore-section" id="explore-root" aria-label="Exploración histórica">

      <!-- Cabecera de la sección -->
      <div class="explore-header">
        <i data-lucide="compass" width="13" height="13" style="color:var(--color-sepia)"></i>
        <span class="explore-header__label">Explorar el Archivo</span>

        <!-- Tabs de modo de exploración -->
        <div class="explore-tabs" role="tablist" aria-label="Modo de exploración">
          <button class="explore-tab active"
                  data-explore-tab="combined"
                  role="tab"
                  aria-selected="true"
                  aria-controls="explore-content">
            <i data-lucide="layout-panel-top" width="12" height="12"></i>
            Combinado
          </button>
          <button class="explore-tab"
                  data-explore-tab="timeline"
                  role="tab"
                  aria-selected="false">
            <i data-lucide="git-branch-plus" width="12" height="12"></i>
            Línea de Tiempo
          </button>
          <button class="explore-tab"
                  data-explore-tab="map"
                  role="tab"
                  aria-selected="false">
            <i data-lucide="map" width="12" height="12"></i>
            Mapa Histórico
          </button>
        </div>

        <!-- Botón de colapsar sección -->
        <button
          class="header-nav__btn"
          id="explore-collapse-btn"
          style="margin-left:auto"
          aria-label="Colapsar sección de exploración"
        >
          <i data-lucide="chevron-up" width="13" height="13"></i>
          Colapsar
        </button>
      </div>

      <!-- Contenido dinámico según el tab activo -->
      <div id="explore-content" style="flex:1;display:flex;flex-direction:column;overflow:hidden;min-height:0">

        <!-- ── Tab: Combinado ──
             Timeline encima, sidebar de docs a la izquierda, mapa a la derecha -->
        <div id="explore-tab-combined" style="display:none;flex:1;flex-direction:column;min-height:0;overflow:hidden">
          <!-- Timeline en la parte superior -->
          <div id="timeline-mount"></div>

          <!-- Split: sidebar de docs | mapa -->
          <div class="explore-split" style="flex:1;overflow:hidden">

            <!-- Sidebar: lista de documentos filtrados -->
            <div class="explore-split__sidebar">
              <h3>
                <i data-lucide="list" width="11" height="11" style="display:inline;margin-right:4px"></i>
                Documentos en rango
              </h3>
              <div class="explore-split__doc-list" id="explore-doc-list">
                <!-- Generado reactivamente por _renderExploreDocList() -->
              </div>
            </div>

            <!-- Mapa principal -->
            <div class="map-container">
              <!-- Controles de filtro sobre el mapa -->
              <div class="map-controls-bar" id="map-controls-bar">
                <i data-lucide="filter" width="11" height="11" style="color:var(--color-sepia)"></i>
                <button class="map-filter-chip active" data-map-layer="cities" aria-pressed="true">
                  Ciudades
                </button>
                <button class="map-filter-chip active" data-map-layer="sites" aria-pressed="true">
                  Sitios históricos
                </button>
                <button class="map-filter-chip" id="map-reset-btn">
                  Restablecer vista
                </button>
              </div>

              <div id="noor-map" role="application" aria-label="Mapa histórico de Al-Ándalus"></div>
            </div>

          </div>
        </div>

        <!-- ── Tab: Solo Timeline ── -->
        <div id="explore-tab-timeline" style="display:none;flex:1;overflow-y:auto">
          <div id="timeline-mount-alt"></div>

          <!-- Aquí los documentos filtrados en lista completa -->
          <div style="padding:0 1.5rem 1.5rem">
            <p style="font-size:0.58rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-sepia);margin-bottom:0.75rem;padding-top:1rem;border-top:var(--border-ornate)">
              Documentos en el rango seleccionado
            </p>
            <div id="timeline-doc-list-full" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0.75rem">
              <!-- Llenado reactivo -->
            </div>
          </div>
        </div>

        <!-- ── Tab: Solo Mapa ── -->
        <div id="explore-tab-map" style="display:none;flex:1;min-height:0;overflow:hidden">
          <div class="map-container" style="height:100%">
            <div class="map-controls-bar" id="map-controls-bar-2">
              <i data-lucide="filter" width="11" height="11" style="color:var(--color-sepia)"></i>
              <button class="map-filter-chip active" data-map-layer2="cities" aria-pressed="true">
                Ciudades
              </button>
              <button class="map-filter-chip" id="map-reset-btn-2">
                Restablecer vista
              </button>
            </div>
            <div id="noor-map-alt" role="application" aria-label="Mapa histórico (pantalla completa)"></div>
          </div>
        </div>

      </div>
    </section>
  `;
}

// ─────────────────────────────────────────────────────────
// LÓGICA DE TABS
// ─────────────────────────────────────────────────────────

async function _switchTab(tab) {
  _exploreState.activeTab = tab;

  // Ocultar todos los paneles
  ['combined', 'timeline', 'map'].forEach(t => {
    const el = document.getElementById(`explore-tab-${t}`);
    if (el) el.style.display = 'none';
  });

  // Mostrar el panel activo
  const activeEl = document.getElementById(`explore-tab-${tab}`);
  if (activeEl) activeEl.style.display = 'flex';

  // Actualizar estilos de tabs
  document.querySelectorAll('[data-explore-tab]').forEach(btn => {
    const isActive = btn.dataset.exploreTab === tab;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive.toString());
  });

  // Inicializar la timeline y el mapa según el tab
  if ((tab === 'combined' || tab === 'timeline') && !_exploreState.timelineInitialized) {
    const mountId = tab === 'combined' ? 'timeline-mount' : 'timeline-mount-alt';
    initTimeline(mountId);
    _exploreState.timelineInitialized = true;
  }

  if ((tab === 'combined' || tab === 'map') && !_exploreState.mapInitialized) {
    const mapId = tab === 'map' ? 'noor-map-alt' : 'noor-map';
    await NoorMap.init(mapId);
    _bindPopupEvents();
    _exploreState.mapInitialized = true;
  }

  // Re-renderizar lista de documentos
  _renderExploreDocList();

  // Invalidar tamaño del mapa al cambiar tabs
  setTimeout(() => window.NoorMap?.refresh?.(), 200);

  if (window.lucide) lucide.createIcons();
}

// ─────────────────────────────────────────────────────────
// LISTA DE DOCUMENTOS EN EL SIDEBAR
// ─────────────────────────────────────────────────────────

function _renderExploreDocList() {
  const sidebarList = document.getElementById('explore-doc-list');
  const fullList    = document.getElementById('timeline-doc-list-full');

  const { results, total } = NoorState.getFilteredDocuments();
  const { HISTORICAL_ERAS } = window.NoorSchema;

  const cardsHTML = results.map(doc => {
    const era = HISTORICAL_ERAS[doc.eraId] || {};
    return `
      <div class="explore-doc-card"
           data-doc-id="${doc.id}"
           role="button"
           tabindex="0"
           aria-label="Abrir documento: ${doc.title}">
        <span class="explore-doc-card__year" style="color:${era.color || 'var(--color-gold)'}">
          ${doc.year}
        </span>
        <div class="explore-doc-card__info">
          <p class="explore-doc-card__title">${doc.title}</p>
          <p class="explore-doc-card__meta">${doc.source || doc.type}</p>
        </div>
      </div>
    `;
  }).join('');

  const emptyHTML = `
    <p style="font-size:0.73rem;color:rgba(229,229,229,0.2);text-align:center;padding:2rem 1rem;font-style:italic">
      Sin documentos en el rango seleccionado.
    </p>
  `;

  if (sidebarList) sidebarList.innerHTML = results.length > 0 ? cardsHTML : emptyHTML;
  if (fullList)    fullList.innerHTML    = results.length > 0 ? cardsHTML : emptyHTML;

  // Vincular clicks → abrir visor
  document.querySelectorAll('.explore-doc-card').forEach(card => {
    function openDoc() {
      const docId = card.dataset.docId;
      const doc   = (window.NoorMockData?.documents || []).find(d => d.id === docId);
      if (doc) NoorState.dispatch('SELECT_DOCUMENT', doc);
    }
    card.addEventListener('click', openDoc);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openDoc(); });
  });
}

// ─────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────

function _bindExploreEvents() {
  // Tabs
  document.querySelectorAll('[data-explore-tab]').forEach(btn => {
    btn.addEventListener('click', () => _switchTab(btn.dataset.exploreTab));
  });

  // Colapsar sección
  document.getElementById('explore-collapse-btn')?.addEventListener('click', () => {
    const content = document.getElementById('explore-content');
    const btn     = document.getElementById('explore-collapse-btn');
    if (!content || !btn) return;
    const isCollapsed = content.style.display === 'none';
    content.style.display    = isCollapsed ? 'flex' : 'none';
    btn.setAttribute('aria-label', isCollapsed ? 'Colapsar' : 'Expandir sección');
    const icon = btn.querySelector('[data-lucide]');
    if (icon) { icon.setAttribute('data-lucide', isCollapsed ? 'chevron-up' : 'chevron-down'); lucide.createIcons(); }
  });

  // Botones de reset de vista del mapa
  ['map-reset-btn', 'map-reset-btn-2'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => {
      const { center, zoom } = window.GeoData.AL_ANDALUS_BOUNDS;
      window._leafletMapInstance?.flyTo(center, zoom, { duration: 1 });
    });
  });

  // Botones de control de capas del mapa
  document.querySelectorAll('[data-map-layer], [data-map-layer2]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      btn.setAttribute('aria-pressed', btn.classList.contains('active').toString());
      const layer = btn.dataset.mapLayer || btn.dataset.mapLayer2;
      const layerGroup = layer === 'sites' ? window.NoorMap?._sitesLayer : window.NoorMap?._markersLayer;
      // Mostrar/ocultar la capa
      if (layerGroup && window._mapInstance) {
        if (btn.classList.contains('active')) {
          layerGroup.addTo(window._mapInstance);
        } else {
          layerGroup.removeFrom(window._mapInstance);
        }
      }
    });
  });

  // Actualizar lista de docs cuando cambia el estado
  NoorState.subscribe('*', () => {
    if (_exploreState.isVisible) _renderExploreDocList();
  });
}

/**
 * Muestra u oculta la sección de exploración.
 */
function toggleExploreSection(show) {
  const el = document.getElementById('explore-root');
  if (!el) return;
  _exploreState.isVisible = show ?? !_exploreState.isVisible;
  el.style.display = _exploreState.isVisible ? 'grid' : 'none';
  if (_exploreState.isVisible && !_exploreState.mapInitialized) {
    // Inicializar mapa la primera vez que se muestra
    _switchTab(_exploreState.activeTab);
  }
}

window.NoorExplore = { init: initExplore, toggle: toggleExploreSection };
console.log('[Explore] ✓ Módulo definido.');
