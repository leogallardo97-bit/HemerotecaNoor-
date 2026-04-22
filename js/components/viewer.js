/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — DocumentViewer (Fase 2)
 * ══════════════════════════════════════════════════════════
 *
 * MÓDULO: Visor de documentos históricos
 *
 * CAPACIDADES:
 *   ✓ OpenSeadragon — zoom fluido para imágenes de alta resolución
 *   ✓ Filtros de imagen — brillo/contraste para manuscritos
 *   ✓ Paginación interna — navegar entre páginas de un documento
 *   ✓ Transcripción side-by-side — texto junto a la imagen
 *   ✓ Vista doble / solo imagen / solo transcripción
 *   ✓ Sidebar de metadatos — información técnica del documento
 *   ✓ Integración con Drive — carga imágenes por File ID
 *   ✓ Sincronizado con NoorState — abre automáticamente al seleccionar
 *
 * DEPENDENCIAS:
 *   - OpenSeadragon (cargado dinámicamente si no está disponible)
 *   - NoorState (js/core/state.js)
 *   - NoorSchema (js/data/schema.js)
 *   - DriveConnector (js/data/drive-connector.js)
 */

// ─────────────────────────────────────────────────────────
// CONSTANTES INTERNAS
// ─────────────────────────────────────────────────────────

/** URL CDN de OpenSeadragon */
const OSD_CDN = 'https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js';

/** Valores por defecto de los filtros de imagen para manuscritos */
const DEFAULT_IMAGE_FILTERS = {
  brightness: 108,   // +8% sobre neutro (100)
  contrast:   110,   // +10% sobre neutro (100)
  saturate:   85,    // -15% (reduce amarillentos)
  sepia:      0,
};

/** Modos de vista del visor */
const VIEW_MODES = {
  IMAGE_ONLY:      'image_only',
  TRANSCRIPT_ONLY: 'transcript_only',
  SIDE_BY_SIDE:    'side_by_side',
};

// ─────────────────────────────────────────────────────────
// ESTADO LOCAL DEL VISOR (privado)
// ─────────────────────────────────────────────────────────

const _viewerState = {
  isOpen: false,
  document: null,           // NoorDocument actual
  currentPage: 0,           // índice de página actual (0-based)
  totalPages: 0,
  viewMode: VIEW_MODES.IMAGE_ONLY,
  imageFilters: { ...DEFAULT_IMAGE_FILTERS },
  rotation: 0,              // grados de rotación: 0, 90, 180, 270
  osdViewer: null,          // instancia de OpenSeadragon
  isLoading: false,
  _savedScroll: 0,           // Misión: Modo Lectura Continua
};
  showMeta: true,
  highlightQuery: '',       // término de búsqueda a resaltar en transcripción
  isPreviewOnly: false,     // Activa el modo Visor Seguro (Google Drive Preview)
};

// ─────────────────────────────────────────────────────────
// INICIALIZACIÓN DEL COMPONENTE
// ─────────────────────────────────────────────────────────

/**
 * initViewer()
 * Punto de entrada: inyecta el HTML del visor en #app-viewer-modal
 * y suscribe el componente al estado global para abrirse
 * automáticamente cuando se selecciona un documento.
 */
async function initViewer() {
  const mountEl = document.getElementById('app-viewer-modal');
  if (!mountEl) return;

  // ── Inyectar estructura HTML del visor ──
  mountEl.innerHTML = _buildViewerHTML();
  mountEl.className = ''; // quitar 'hidden'

  // ── Registrar todos los event listeners ──
  _bindViewerEvents();

  // ── Cargar OpenSeadragon si no está cargado ──
  await _ensureOSDLoaded();

  // ── Suscribir al estado global ──
  // El visor ya no se abre automáticamente. Es activado por ArticleView.
  NoorState.subscribe('SELECT_DOCUMENT', (state) => {
    if (!state.selectedDocument) {
      closeViewer();
    }
  });

  // Sincronizar el término de búsqueda para resaltado en transcripción
  // Sincronizar el término de búsqueda para resaltado en transcripción
  NoorState.subscribe('SET_FILTER', (state) => {
    if (state.filters.query !== _viewerState.highlightQuery) {
      _viewerState.highlightQuery = state.filters.query;
      if (_viewerState.isOpen) {
        if (typeof _renderTranscriptionText === 'function') {
           _renderTranscriptionText();
        }
      }
    }
  });

  // ── Listener de tecla Escape y click fuera del modal ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && _viewerState.isOpen) closeViewer();
  });

  mountEl.addEventListener('click', (e) => {
    if (e.target === mountEl || e.target.classList.contains('viewer-modal')) {
      closeViewer();
    }
  });

  console.log('[DocumentViewer] ✓ Visor inicializado.');
}

// ─────────────────────────────────────────────────────────
// API PÚBLICA DEL VISOR
// ─────────────────────────────────────────────────────────

/**
 * openViewer(doc)
 * Abre el visor con el documento dado.
 * @param {NoorDocument} doc
 */
async function openViewer(doc) {
  if (!doc) return;

  _viewerState.document   = doc;
  _viewerState.isOpen     = true;
  _viewerState.currentPage = 0;
  _viewerState.rotation   = 0;

  // Modo Lectura Continua: Guardar posición actual
  _viewerState._savedScroll = window.scrollY;
  _viewerState.imageFilters = { ...DEFAULT_IMAGE_FILTERS };

  // Determinar el número de páginas
  _viewerState.totalPages = (doc.media?.pages?.length) || 1;

  // Misión Crítica: ¿Debe usar el Visor Seguro (Google Drive)?
  // Si viene de la colección 01_REVISTAS o es un PDF de Drive, usamos el Previewer
  const isRevista = doc.id.startsWith('v2-') || 
                    doc.id.startsWith('rev-v2') || 
                    doc.id.startsWith('local-rev') ||
                    (doc.localPath && doc.localPath.toUpperCase().includes('REVISTAS'));
                    
  const hasDriveId = (doc.media?.driveFileId && !doc.media.driveFileId.startsWith('PLACEHOLDER')) || 
                    doc.driveId || 
                    doc.media?.pdf;
  
  _viewerState.isPreviewOnly = isRevista && hasDriveId;
  _viewerState.showMeta = !_viewerState.isPreviewOnly; // Ocultar metadatos por defecto en modo seguro para ganar espacio

  // Si el documento tiene transcripción, activar side-by-side por defecto
  const hasTranscript = doc.transcription?.pages?.length > 0 || doc.transcription?.fullText;
  _viewerState.viewMode = hasTranscript ? VIEW_MODES.SIDE_BY_SIDE : VIEW_MODES.IMAGE_ONLY;

  // Mostrar el overlay
  const overlay = document.getElementById('viewer-overlay');
  const shellBody = document.querySelector('.viewer-body');

  if (overlay) {
    overlay.classList.add('open');
    overlay.classList.toggle('viewer-overlay--preview-mode', _viewerState.isPreviewOnly);
  }
  if (shellBody) {
    shellBody.classList.toggle('viewer-body--preview', _viewerState.isPreviewOnly);
  }
  document.body.style.overflow = 'hidden';

  // Re-renderizar con el nuevo documento
  _renderViewerContent();
  await _loadPage(0);
}

/**
 * closeViewer()
 * Cierra el visor y limpia los recursos de OpenSeadragon.
 */
  // capturar el ID antes de limpiar para el cross-linking
  const closedId = _viewerState.document?.id;

  _viewerState.isOpen   = false;
  _viewerState.document = null;

  const overlay = document.getElementById('viewer-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';

  // Modo Lectura Continua: Restaurar posición exacta
  window.scrollTo({
    top: _viewerState._savedScroll,
    behavior: 'instant'
  });

  // Destruir la instancia de OSD para liberar memoria
  if (_viewerState.osdViewer) {
    _viewerState.osdViewer.destroy();
    _viewerState.osdViewer = null;
  }

  // Notificar al estado global
  NoorState.dispatch('SELECT_DOCUMENT', null);

  // Cross-linking: Notificar que se ha cerrado un documento para resaltarlo en la galería
  if (closedId) {
    window.dispatchEvent(new CustomEvent('noor-return-to-gallery', {
      detail: { docId: closedId }
    }));
  }
}

// ─────────────────────────────────────────────────────────
// CONSTRUCCIÓN DEL HTML BASE DEL VISOR
// ─────────────────────────────────────────────────────────

function _buildViewerHTML() {
  return `
    <div id="viewer-overlay" class="viewer-overlay" role="dialog" aria-modal="true" aria-label="Visor de documento">

      <div class="viewer-shell">

        <!-- ══ TOPBAR ══ -->
        <div class="viewer-topbar">

          <!-- Ícono de tipo de documento -->
          <div style="flex-shrink:0; color: var(--color-gold); opacity:0.7">
            <i data-lucide="scroll" width="18" height="18"></i>
          </div>

          <!-- Título -->
          <div class="viewer-topbar__title">
            <span class="viewer-topbar__name" id="vt-doc-title">—</span>
            <span class="viewer-topbar__meta" id="vt-doc-meta">—</span>
          </div>

          <!-- ─ Grupo: Zoom ─ -->
          <div class="viewer-toolbar-group">
            <button class="vbtn" id="vbtn-zoom-in"  data-tip="Acercar"  aria-label="Acercar">
              <i data-lucide="zoom-in" width="15" height="15"></i>
            </button>
            <button class="vbtn" id="vbtn-zoom-out" data-tip="Alejar"   aria-label="Alejar">
              <i data-lucide="zoom-out" width="15" height="15"></i>
            </button>
            <button class="vbtn" id="vbtn-zoom-fit" data-tip="Ajustar"  aria-label="Ajustar a pantalla">
              <i data-lucide="maximize-2" width="15" height="15"></i>
            </button>
          </div>

          <!-- ─ Grupo: Rotación ─ -->
          <div class="viewer-toolbar-group">
            <button class="vbtn" id="vbtn-rotate-l" data-tip="Rotar izquierda" aria-label="Rotar a la izquierda">
              <i data-lucide="rotate-ccw" width="15" height="15"></i>
            </button>
            <button class="vbtn" id="vbtn-rotate-r" data-tip="Rotar derecha"   aria-label="Rotar a la derecha">
              <i data-lucide="rotate-cw" width="15" height="15"></i>
            </button>
          </div>

          <!-- ─ Grupo: Vista ─ -->
          <div class="viewer-toolbar-group">
            <div class="view-mode-toggle" role="group" aria-label="Modo de vista">
              <button class="vbtn" id="vmode-image"      data-tip="Solo imagen"         data-mode="image_only">
                <i data-lucide="image" width="14" height="14"></i>
              </button>
              <button class="vbtn" id="vmode-split"      data-tip="Vista doble"         data-mode="side_by_side">
                <i data-lucide="columns-2" width="14" height="14"></i>
              </button>
              <button class="vbtn" id="vmode-transcript" data-tip="Solo transcripción"  data-mode="transcript_only">
                <i data-lucide="file-text" width="14" height="14"></i>
              </button>
            </div>
          </div>

          <!-- ─ Grupo: Extras ─ -->
          <div class="viewer-toolbar-group">
            <button class="vbtn" id="vbtn-fullscreen" data-tip="Pantalla completa" aria-label="Pantalla completa">
              <i data-lucide="expand" width="15" height="15"></i>
            </button>
            <button class="vbtn" id="vbtn-toggle-meta" data-tip="Metadatos" aria-label="Mostrar/Ocultar metadatos">
              <i data-lucide="panel-right" width="15" height="15"></i>
            </button>
            <button class="vbtn" id="vbtn-download" data-tip="Descargar" aria-label="Descargar documento">
              <i data-lucide="download" width="15" height="15"></i>
            </button>
            <div class="viewer-toolbar-sep"></div>
            <a href="https://docs.google.com/forms/d/e/TU_ID_AQUI/viewform" 
               target="_blank"
               class="vbtn" 
               id="vbtn-report" 
               data-tip="Informar error / sugerencia" 
               aria-label="Informar error">
              <i data-lucide="message-square-warning" width="15" height="15"></i>
            </a>
          </div>

          <div class="viewer-toolbar-sep"></div>

          <!-- Botón cerrar -->
          <button class="vbtn" id="viewer-close-btn" data-tip="Cerrar visor" aria-label="Cerrar visor">
            <i data-lucide="x" width="16" height="16"></i>
          </button>

        </div>
        <!-- /TOPBAR -->

        <!-- ══ CUERPO DEL VISOR ══ -->
        <div class="viewer-body" id="viewer-body">

          <!-- Panel de páginas (miniaturas, izquierda) -->
          <aside class="viewer-pages-panel" id="viewer-pages-panel" aria-label="Páginas del documento">
            <!-- Generado en _renderPageThumbs() -->
          </aside>

          <!-- Área de contenido central (imagen + transcripción) -->
          <div id="viewer-content-area" style="display:flex;flex-direction:column;overflow:hidden;min-height:0;">

            <!-- Imagen y transcripción (se reconfiguran según viewMode) -->
            <div id="viewer-split-container" style="flex:1;display:flex;min-height:0;overflow:hidden;">

              <!-- OpenSeadragon canvas -->
              <div class="viewer-canvas-area" id="viewer-canvas-area">
                <div id="osd-container" aria-label="Visor de imagen del documento"></div>
                <!-- Spinner de carga -->
                <div class="viewer-loading-overlay hidden" id="viewer-loading" style="background: var(--color-ink-900); z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                  <div class="skeleton-card" style="width:100%; max-width:500px; height:80vh; border-radius:8px; display:flex; flex-direction:column; padding:2rem; box-sizing:border-box;">
                    <div class="skeleton-card__img" style="flex:1; border-radius:4px; margin-bottom:1rem;"></div>
                    <div class="skeleton-line" style="width:80%;"></div>
                    <div class="skeleton-line" style="width:50%;"></div>
                    <div style="font-family:var(--font-serif); font-size:0.8rem; color:var(--color-sepia); text-align:center; margin-top:1rem; opacity:0.6;">Descargando documento seguro de Google Drive...</div>
                  </div>
                </div>
              </div>

              <!-- Panel de transcripción -->
              <div class="transcription-panel" id="transcription-panel">
                <div class="transcription-header">
                  <span class="transcription-header__title">
                    <i data-lucide="scroll-text" width="11" height="11" style="display:inline;margin-right:4px"></i>
                    Transcripción
                  </span>
                  <div style="display:flex;gap:4px">
                    <button class="vbtn" id="copy-transcript-btn" data-tip="Copiar texto" style="width:26px;height:26px">
                      <i data-lucide="copy" width="12" height="12"></i>
                    </button>
                    <span id="transcript-lang-badge" style="font-size:0.6rem;padding:2px 6px;border:1px solid rgba(201,168,76,0.25);border-radius:3px;color:var(--color-sepia);align-self:center"></span>
                  </div>
                </div>
                <div class="transcription-body">
                  <div id="transcription-text-container" class="transcription-text">
                    <!-- Generado en _renderTranscriptionText() -->
                  </div>
                </div>
              </div>

            </div>
            <!-- /split-container -->

            <!-- Barra de filtros de imagen -->
            <div class="image-filters-bar" id="image-filters-bar">
              <span style="font-size:0.6rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(184,149,106,0.6);margin-right:0.25rem">Imagen:</span>

              <div class="filter-control">
                <label for="filter-brightness">Brillo</label>
                <input type="range" id="filter-brightness" min="50" max="200" value="108" aria-label="Ajustar brillo" />
              </div>

              <div class="filter-control">
                <label for="filter-contrast">Contraste</label>
                <input type="range" id="filter-contrast" min="50" max="250" value="110" aria-label="Ajustar contraste" />
              </div>

              <div class="filter-control">
                <label for="filter-saturate">Saturación</label>
                <input type="range" id="filter-saturate" min="0" max="200" value="85" aria-label="Ajustar saturación" />
              </div>

              <div class="filter-control">
                <button id="filter-reset-btn" aria-label="Restablecer filtros">↺ Restablecer</button>
              </div>

              <!-- Preajuste "manuscrito" -->
              <div class="filter-control" style="margin-left:auto">
                <button id="filter-preset-manuscript" aria-label="Preajuste para manuscritos">
                  📜 Manuscrito
                </button>
                <button id="filter-preset-clear" aria-label="Sin filtros" style="margin-left:4px">
                  🔲 Neutro
                </button>
              </div>
            </div>

            <!-- Barra de zoom -->
            <div class="viewer-zoom-bar">
              <button class="vbtn" id="vbtn-zoom-minus" aria-label="Reducir zoom" style="width:28px;height:28px">
                <i data-lucide="minus" width="13" height="13"></i>
              </button>
              <input type="range" id="zoom-slider" min="0" max="100" value="0" aria-label="Nivel de zoom" />
              <button class="vbtn" id="vbtn-zoom-plus" aria-label="Aumentar zoom" style="width:28px;height:28px">
                <i data-lucide="plus" width="13" height="13"></i>
              </button>
              <span class="zoom-level-display" id="zoom-level-label">—</span>
            </div>

          </div>
          <!-- /viewer-content-area -->

          <!-- Panel de metadatos (derecha) -->
          <aside class="viewer-meta-panel" id="viewer-meta-panel" aria-label="Metadatos del documento">
            <!-- Generado en _renderMetaPanel() -->
          </aside>

        </div>
        <!-- /CUERPO -->

        <!-- ══ BARRA INFERIOR (paginación rápida) ══ -->
        <div class="viewer-bottombar">
          <button class="viewer-nav-btn" id="vbtn-prev-page" aria-label="Página anterior">
            <i data-lucide="chevron-left" width="13" height="13"></i>
            Anterior
          </button>
          <span class="viewer-page-indicator">
            Página <strong id="current-page-num">1</strong>
            de <strong id="total-pages-num">1</strong>
          </span>
          <button class="viewer-nav-btn" id="vbtn-next-page" aria-label="Página siguiente">
            Siguiente
            <i data-lucide="chevron-right" width="13" height="13"></i>
          </button>
        </div>

      </div>
      <!-- /viewer-shell -->

    </div>
    <!-- /viewer-overlay -->
  `;
}

// ─────────────────────────────────────────────────────────
// RENDERIZADO DE CONTENIDO DINÁMICO
// ─────────────────────────────────────────────────────────

/**
 * Actualiza los títulos, metadatos y paneles con el documento actual.
 */
function _renderViewerContent() {
  const doc = _viewerState.document;
  if (!doc) return;

  const { HISTORICAL_ERAS, THEMATIC_DIMENSIONS } = window.NoorSchema;
  const era = HISTORICAL_ERAS[doc.eraId] || {};

  // ── Topbar ──
  const titleEl = document.getElementById('vt-doc-title');
  const metaEl  = document.getElementById('vt-doc-meta');
  if (titleEl) titleEl.textContent = doc.title;
  if (metaEl)  metaEl.textContent  = `${era.label || doc.eraId}  ·  ${doc.year}  ·  ${doc.source || 'Fuente desconocida'}`;

  // ── Miniaturas de páginas ──
  _renderPageThumbs();

  // ── Panel de metadatos ──
  _renderMetaPanel();

  // ── Transcripción ──
  _renderTranscriptionText();

  // ── Modo de vista ──
  _applyViewMode(_viewerState.viewMode);

  // ── Paginación inferior ──
  _updatePageIndicator();

  // ── Misión Crítica: Ajustar UI para Modo Seguro (Preview Only) ──
  const toolbarButtons = ['vbtn-zoom-in', 'vbtn-zoom-out', 'vbtn-zoom-fit', 'vbtn-rotate-l', 'vbtn-rotate-r', 'vmode-image', 'vmode-split', 'vmode-transcript', 'vbtn-download'];
  toolbarButtons.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = _viewerState.isPreviewOnly ? 'none' : '';
  });

  // El botón Plan B siempre visible en modo preview
  const planBBtn = document.getElementById('vbtn-plan-b');
  if (planBBtn) {
    planBBtn.style.display = _viewerState.isPreviewOnly ? 'flex' : 'none';
  }

  // Forzar ocultación de panel de metadatos si es modo seguro
  const metaPanel = document.getElementById('viewer-meta-panel');
  if (metaPanel) {
    metaPanel.style.display = _viewerState.showMeta ? '' : 'none';
  }
  const toggleMetaBtn = document.getElementById('vbtn-toggle-meta');
  if (toggleMetaBtn) {
    toggleMetaBtn.classList.toggle('active', _viewerState.showMeta);
  }

  // ── Reinicializar íconos Lucide ──
  if (window.lucide) lucide.createIcons();
}

/**
 * Renderiza las miniaturas del panel lateral de páginas.
 */
function _renderPageThumbs() {
  const doc = _viewerState.document;
  const panel = document.getElementById('viewer-pages-panel');
  if (!panel || !doc) return;

  const pages = doc.media?.pages || [doc.media?.driveFileId].filter(Boolean);
  if (pages.length === 0) {
    panel.innerHTML = '<p style="font-size:0.65rem;color:rgba(229,229,229,0.2);text-align:center;padding:1rem">Sin páginas</p>';
    return;
  }

  panel.innerHTML = pages.map((pageId, idx) => {
    // Obtener URL de miniatura desde Drive o usar placeholder
    const thumbUrl = pageId && !pageId.startsWith('PLACEHOLDER')
      ? DriveConnector.getThumbnailUrl(pageId, 200)
      : '';

    const isActive = idx === _viewerState.currentPage;
    return `
      <div
        class="page-thumb ${isActive ? 'active' : ''}"
        data-page-idx="${idx}"
        role="button"
        tabindex="0"
        aria-label="Ir a página ${idx + 1}"
        aria-pressed="${isActive}"
      >
        ${thumbUrl
          ? `<img src="${thumbUrl}" alt="Miniatura página ${idx + 1}" />`
          : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:rgba(201,168,76,0.2)">
               <i data-lucide="file" width="20" height="20"></i>
             </div>`
        }
        <span class="page-thumb__num">${idx + 1}</span>
      </div>
    `;
  }).join('');

  // Eventos
  panel.querySelectorAll('[data-page-idx]').forEach(thumb => {
    thumb.addEventListener('click', () => {
      _loadPage(parseInt(thumb.dataset.pageIdx));
    });
    thumb.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        _loadPage(parseInt(thumb.dataset.pageIdx));
      }
    });
  });
}

/**
 * Renderiza el panel de metadatos lateral derecho.
 */
function _renderMetaPanel() {
  const doc   = _viewerState.document;
  const panel = document.getElementById('viewer-meta-panel');
  if (!panel || !doc) return;

  const { HISTORICAL_ERAS, THEMATIC_DIMENSIONS, REGIONS, DOCUMENT_TYPES } = window.NoorSchema;
  const era    = HISTORICAL_ERAS[doc.eraId] || {};
  const themes = (doc.themes || []).map(id => THEMATIC_DIMENSIONS[id]?.label || id);
  const regions= (doc.regions || []).map(key => REGIONS[key] || key);
  const langMap = { ar: 'Árabe', la: 'Latín', es: 'Castellano', he: 'Hebreo', ber: 'Bereber' };

  panel.innerHTML = `
    <!-- Cabecera del panel -->
    <div class="meta-panel-header">
      <p class="meta-panel-header__label">Ficha Técnica</p>
      <span class="meta-panel-header__doctype">
        <i data-lucide="file-text" width="11" height="11"></i>
        ${doc.type}
      </span>
    </div>

    <!-- ─ Sección: Identificación ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Identificación</p>

      <div class="meta-field">
        <p class="meta-field__label">Título</p>
        <p class="meta-field__value serif">${doc.title}</p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Época</p>
        <p class="meta-field__value gold">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${era.color || 'var(--color-sepia)'};margin-right:5px;vertical-align:middle"></span>
          ${era.label || doc.eraId}
        </p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Año</p>
        <p class="meta-field__value">${doc.year}${doc.yearEnd ? ` – ${doc.yearEnd}` : ''}</p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Idioma original</p>
        <p class="meta-field__value">${langMap[doc.language] || doc.language}</p>
      </div>
    </div>

    <!-- ─ Sección: Origen ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Procedencia</p>

      <div class="meta-field">
        <p class="meta-field__label">Archivo / Fuente</p>
        <p class="meta-field__value">${doc.source || '—'}</p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Autor / Creador</p>
        <p class="meta-field__value">${doc.metadata?.creator || '—'}</p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Editor / Institución</p>
        <p class="meta-field__value">${doc.metadata?.publisher || '—'}</p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Derechos</p>
        <p class="meta-field__value">${doc.metadata?.rights || '—'}</p>
      </div>

      <div class="meta-field">
        <p class="meta-field__label">Referencia</p>
        <p class="meta-field__value" style="font-size:0.7rem;font-family:monospace;color:var(--color-sepia)">
          ${doc.metadata?.identifier || doc.id}
        </p>
      </div>
    </div>

    <!-- ─ Sección: Dimensiones ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Dimensiones Temáticas</p>
      <div class="meta-tags">
        ${themes.map(t => `<span class="theme-badge">${t}</span>`).join('') || '<span style="font-size:0.72rem;color:rgba(229,229,229,0.25)">No especificado</span>'}
      </div>
    </div>

    <!-- ─ Sección: Regiones ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Regiones</p>
      <div class="meta-tags">
        ${regions.map(r => `<span class="meta-tag">${r}</span>`).join('') || '—'}
      </div>
    </div>

    <!-- ─ Sección: Descripción ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Descripción</p>
      <p style="font-size:0.79rem;line-height:1.7;color:rgba(229,229,229,0.65)">${doc.description || '—'}</p>
    </div>

    <!-- ─ Sección: Palabras clave ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Palabras clave</p>
      <div class="meta-tags">
        ${(doc.tags || []).map(tag => `
          <button
            class="meta-tag"
            data-tag-search="${tag}"
            aria-label="Buscar por: ${tag}"
          >${tag}</button>
        `).join('')}
      </div>
    </div>

    <!-- ─ Sección: Archivo Drive ─ -->
    ${doc.media?.driveFileId ? `
    <div class="meta-section">
      <p class="meta-section__title">Acceso al Archivo</p>
      <div style="display:flex;flex-direction:column;gap:0.4rem;padding:0.25rem 0">
        ${!doc.media.driveFileId.startsWith('PLACEHOLDER') ? `
          <a
            href="${DriveConnector.getViewUrl(doc.media.driveFileId)}"
            target="_blank"
            rel="noopener noreferrer"
            class="meta-action-btn meta-action-btn--primary"
            aria-label="Ver en Google Drive"
          >
            <i data-lucide="external-link" width="13" height="13"></i>
            Ver en Google Drive
          </a>
          <a
            href="${DriveConnector.getDownloadUrl(doc.media.driveFileId)}"
            target="_blank"
            rel="noopener noreferrer"
            class="meta-action-btn"
            aria-label="Descargar archivo original"
          >
            <i data-lucide="download" width="13" height="13"></i>
            Descargar original
          </a>
        ` : `
          <p style="font-size:0.72rem;color:rgba(229,229,229,0.25)">
            <i data-lucide="link-2-off" width="11" height="11" style="display:inline"></i>
            Archivo pendiente de vincular con Drive
          </p>
        `}
      </div>
    </div>
    ` : ''}

    <!-- ─ Sección: Transcripción ─ -->
    <div class="meta-section">
      <p class="meta-section__title">Transcripción</p>
      ${doc.transcription ? `
        <p style="font-size:0.75rem;color:rgba(229,229,229,0.5);margin-bottom:0.5rem">
          <i data-lucide="check-circle" width="11" height="11" style="display:inline;color:var(--color-gold)"></i>
          Disponible — ${doc.transcription.pages?.length || 1} página${(doc.transcription.pages?.length || 1) > 1 ? 's' : ''}
        </p>
        <button class="meta-action-btn" id="meta-toggle-transcript" aria-label="Ver transcripción">
          <i data-lucide="columns-2" width="13" height="13"></i>
          Ver transcripción
        </button>
      ` : `
        <p style="font-size:0.72rem;color:rgba(229,229,229,0.25)">
          No disponible para este documento.
        </p>
      `}
    </div>

  `;

  // ── Eventos del panel de metadatos ──

  // Búsqueda por tag
  panel.querySelectorAll('[data-tag-search]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tagSearch;
      NoorState.dispatch('SET_FILTER', { key: 'query', value: tag });
      closeViewer();
    });
  });

  // Botón "Ver transcripción" desde el panel de metadatos
  document.getElementById('meta-toggle-transcript')?.addEventListener('click', () => {
    _applyViewMode(VIEW_MODES.SIDE_BY_SIDE);
  });

  if (window.lucide) lucide.createIcons();
}

/**
 * Renderiza el texto de transcripción con resaltado de búsqueda.
 */
function _renderTranscriptionText() {
  const doc       = _viewerState.document;
  const container = document.getElementById('transcription-text-container');
  if (!container) return;

  // Actualizar badge de idioma
  const langBadge = document.getElementById('transcript-lang-badge');
  if (langBadge) langBadge.textContent = (doc?.language || '').toUpperCase();

  if (!doc?.transcription) {
    container.innerHTML = `
      <div class="transcription-empty">
        <i data-lucide="file-question" width="36" height="36"></i>
        <p>No hay transcripción disponible para este documento.</p>
        <p style="font-size:0.72rem;opacity:0.7">
          Puedes añadir la transcripción en el campo <code>transcription</code>
          del archivo <code>metadatos.json</code> correspondiente en Google Drive.
        </p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Obtener texto de la página actual (si hay transcripción por páginas) o el texto completo
  const transcript    = doc.transcription;
  const currentPageTx = transcript.pages?.[_viewerState.currentPage] || transcript.fullText || '';
  const isRTL         = (doc.language === 'ar' || doc.language === 'he');

  // Resaltar el término de búsqueda si existe
  let displayText = currentPageTx;
  if (_viewerState.highlightQuery) {
    const regex = new RegExp(`(${_escapeRegex(_viewerState.highlightQuery)})`, 'gi');
    displayText = displayText.replace(regex, '<span class="highlight">$1</span>');
  }

  container.innerHTML = `
    <div class="transcription-text" dir="${isRTL ? 'rtl' : 'ltr'}" lang="${doc.language}">
      ${displayText || '<em style="color:rgba(229,229,229,0.25)">Página sin transcripción.</em>'}
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

// ─────────────────────────────────────────────────────────
// OPENSDADRAGON — CARGA Y NAVEGACIÓN DE IMÁGENES
// ─────────────────────────────────────────────────────────

/**
 * Carga y muestra la página indicada en OpenSeadragon o PDF.js
 * @param {number} pageIdx - índice 0-based
 */
async function _loadPage(pageIdx) {
  const doc = _viewerState.document;
  if (!doc) return;

  const pages = doc.media?.pages || [];
  const fileId = pages[pageIdx] || doc.media?.driveFileId || doc.driveId || doc.media?.pdf || '';

  _viewerState.currentPage = pageIdx;
  _viewerState.totalPages   = Math.max(pages.length, 1);

  // Actualizar UI de paginación
  _updatePageIndicator();
  _updatePageThumbs();
  _renderTranscriptionText(); // actualizar transcripción de la nueva página

  _setLoading(true);

  // ── CASO: VISOR SEGURO (Google Drive Preview) ──
  if (_viewerState.isPreviewOnly && fileId) {
    const container = document.getElementById('osd-container');
    if (container) {
      container.style.position = 'relative';
      container.innerHTML = `
        <div style="position: absolute; top: 15px; left: 50%; transform: translateX(-50%); z-index: 100; background: rgba(13, 13, 13, 0.9); backdrop-filter: blur(4px); color: #e5e5e5; padding: 12px 24px; border-radius: 8px; border: 1px solid var(--color-gold-light); display: flex; align-items: center; gap: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
          <i data-lucide="info" width="18" height="18" style="color: var(--color-gold-light)"></i>
          <span style="font-size: 0.9rem;">Si el documento no carga, debes darle permisos públicos en tu Drive, o ábrelo con tu sesión:</span>
          <a href="https://drive.google.com/file/d/${fileId}/view" target="_blank" style="background: var(--color-sepia); color: #000; padding: 6px 14px; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 0.85rem; display: flex; align-items: center; gap: 6px; transition: opacity 0.2s;">
            <i data-lucide="external-link" width="14" height="14"></i>
            Abrir Secure View
          </a>
        </div>
        <iframe 
          src="https://drive.google.com/file/d/${fileId}/preview" 
          width="100%" height="100%" 
          style="border:none; background:#000; width:100%; height:100%;" 
          allow="autoplay">
        </iframe>
      `;
      if (window.lucide) window.lucide.createIcons();
      _setLoading(false);
      return; 
    }
  }

  // Comprobar si el documento es un PDF local o PDF de Drive
  const isPDF = doc.type === 'newspaper' || (doc.localPath && doc.localPath.toLowerCase().endsWith('.pdf'));

  if (isPDF) {
    try {
      let pdfUrl = '';
      if (doc.localPath) {
        // PDF en disco duro local
        pdfUrl = doc.localPath.startsWith('http') ? doc.localPath : 'file:///' + doc.localPath.replace(/\\/g, '/');
      } else if (fileId && window.DriveConnector) {
        // Obtenemos el PDF original de Drive convirtiéndolo a BLOB
        // Esto salva el bloqueo de CORS al que se enfrenta PDF.js y se guarda en caché local
        pdfUrl = await window.DriveConnector.getPDFBlobUrl(fileId);
      }
      
      if (pdfUrl) {
         await _loadPDFJS(pdfUrl, pageIdx + 1);
      } else {
         throw new Error("No hay un identificador válido para el documento PDF");
      }
    } catch(err) {
      console.error("[Viewer] PDF_Error:", err);
      // Fallback a OpenSeadragon si la carga PDF falla (muestra el Thumbnail en HQ)
      let fallbackImgUrl = '';
      if (fileId && !fileId.startsWith('PLACEHOLDER')) {
        fallbackImgUrl = doc.media.thumbnail || DriveConnector.getThumbnailUrl(fileId, 1000);
      }
      await _loadOSD(fallbackImgUrl);
      _applyImageFilters();
    }
  } else {
    // Si es imagen de Drive, cargamos OSD
    let imageUrl = '';
    if (fileId && !fileId.startsWith('PLACEHOLDER')) {
      imageUrl = DriveConnector.getThumbnailUrl(fileId, 1000);
    }
    await _loadOSD(imageUrl);
    _applyImageFilters();
  }

  _setLoading(false);
}

/**
 * Carga/actualiza la instancia de OpenSeadragon con la URL dada.
 * @param {string} imageUrl - URL de la imagen a cargar
 */
async function _loadOSD(imageUrl) {
  if (!window.OpenSeadragon) {
    console.warn('[Viewer] OpenSeadragon no disponible todavía.');
    return;
  }

  const container = document.getElementById('osd-container');
  if (!container) return;

  // Limpiar contenedor si había un canvas de PDF.js previo
  container.innerHTML = '';
  _viewerState.pdfDoc = null;

  // Si ya hay una instancia, destruirla
  if (_viewerState.osdViewer) {
    _viewerState.osdViewer.destroy();
    _viewerState.osdViewer = null;
  }

  // URL de imagen de placeholder si no hay Drive ID real
  const src = imageUrl || _buildPlaceholderSVGUrl(_viewerState.document?.title || 'Documento');

  _viewerState.osdViewer = OpenSeadragon({
    element: container,
    prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/',

    // La imagen a cargar
    tileSources: {
      type:   'image',
      url:    src,
      buildPyramid: false,
    },

    // ── Comportamiento de navegación ──
    animationTime:         1.2,
    blendTime:             0.1,
    constrainDuringPan:    true,
    maxZoomPixelRatio:     4,
    minZoomLevel:          0.1,
    visibilityRatio:       0.5,
    zoomPerScrollFactor:   1.2,
    zoomPerClick:          2.0,
    defaultZoomLevel:      0,

    // ── Ocultar controles nativos (usamos los nuestros) ──
    showNavigationControl: false,
    showZoomControl:       false,
    showHomeControl:       false,
    showFullPageControl:   false,
    showRotationControl:   false,

    // ── Rotación y otros ──
    degrees: _viewerState.rotation,

    // ── Estilo del canvas ──
    backgroundColor: '#0a0a0a',
  });

  // Evento: actualizar slider y label de zoom cuando cambia
  _viewerState.osdViewer.addHandler('zoom', ({ zoom }) => {
    const levelEl = document.getElementById('zoom-level-label');
    const slider  = document.getElementById('zoom-slider');
    if (levelEl) levelEl.textContent = `${Math.round(zoom * 100)}%`;
    if (slider) {
      // Mapear zoom (0.1 – 4) a slider (0 – 100)
      const norm = (Math.log(zoom) - Math.log(0.1)) / (Math.log(4) - Math.log(0.1));
      slider.value = Math.max(0, Math.min(100, norm * 100));
    }
  });

  _viewerState.osdViewer.addHandler('open', () => {
    _setLoading(false);
    _applyImageFilters();
  });
}

/**
 * Carga un archivo en el visualizador PDF interactivo de PDF.js
 */
async function _loadPDFJS(pdfUrl, initialPageNum = 1) {
  if (!window.pdfjsLib) {
    console.warn('[Viewer] pdfjsLib no disponible.');
    return;
  }
  
  const container = document.getElementById('osd-container');
  if (!container) return;
  
  // Limpiar visor viejo
  if (_viewerState.osdViewer) {
    _viewerState.osdViewer.destroy();
    _viewerState.osdViewer = null;
  }
  
  container.innerHTML = '<canvas id="pdf-canvas" style="border: 1px solid rgba(255,255,255,0.1); margin:auto; display:block; max-width:100%; max-height:100%; object-fit:contain;"></canvas>';
  const canvas = document.getElementById('pdf-canvas');
  const ctx = canvas.getContext('2d');
  
  try {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    _viewerState.pdfDoc = await loadingTask.promise;
    
    // Actualizar páginas totales si no estaban
    if (_viewerState.totalPages <= 1) {
       _viewerState.totalPages = _viewerState.pdfDoc.numPages;
       _updatePageIndicator();
    }
    
    await _renderPDFPage(initialPageNum);
  } catch (err) {
    console.error('[Viewer] Error cargando PDF:', err);
    container.innerHTML = '<p style="color:white; text-align:center; padding-top:20%">Error cargando el Documento PDF local.</p>';
  }
}

async function _renderPDFPage(pageNum) {
  if (!_viewerState.pdfDoc) return;
  
  const canvas = document.getElementById('pdf-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const page = await _viewerState.pdfDoc.getPage(pageNum);
  
  // Nivel de zoom de prueba (podría ser reactivo al slider de zoom)
  let scale = 1.5; 
  const viewport = page.getViewport({ scale: scale, rotation: _viewerState.rotation });
  
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  
  const renderContext = {
    canvasContext: ctx,
    viewport: viewport
  };
  
  await page.render(renderContext).promise;
}

// ─────────────────────────────────────────────────────────
// FILTROS DE IMAGEN (CSS sobre el canvas)
// ─────────────────────────────────────────────────────────

/**
 * Aplica los filtros CSS actuales al canvas de OpenSeadragon.
 */
function _applyImageFilters() {
  const f = _viewerState.imageFilters;
  const filterValue = [
    `brightness(${f.brightness}%)`,
    `contrast(${f.contrast}%)`,
    `saturate(${f.saturate}%)`,
    f.sepia > 0 ? `sepia(${f.sepia}%)` : '',
  ].filter(Boolean).join(' ');

  // Aplicar vía variable CSS al contenedor OSD
  const container = document.getElementById('osd-container');
  if (container) container.style.setProperty('--osd-filter', filterValue);

  // OpenSeadragon renderiza dentro de un canvas, necesitamos aplicar
  // el filtro al wrapper del canvas
  const osdCanvas = container?.querySelector('.openseadragon-canvas');
  if (osdCanvas) osdCanvas.style.filter = filterValue;
}

// ─────────────────────────────────────────────────────────
// MODOS DE VISTA
// ─────────────────────────────────────────────────────────

function _applyViewMode(mode) {
  _viewerState.viewMode = mode;

  const canvasArea      = document.getElementById('viewer-canvas-area');
  const transcriptPanel = document.getElementById('transcription-panel');
  const splitContainer  = document.getElementById('viewer-split-container');

  if (!canvasArea || !transcriptPanel || !splitContainer) return;

  switch (mode) {
    case VIEW_MODES.IMAGE_ONLY:
      splitContainer.style.gridTemplateColumns = '1fr';
      canvasArea.style.display      = 'flex';
      transcriptPanel.style.display = 'none';
      break;

    case VIEW_MODES.SIDE_BY_SIDE:
      splitContainer.style.display             = 'grid';
      splitContainer.style.gridTemplateColumns = '1fr 1fr';
      canvasArea.style.display      = 'flex';
      transcriptPanel.style.display = 'flex';
      break;

    case VIEW_MODES.TRANSCRIPT_ONLY:
      splitContainer.style.display             = 'grid';
      splitContainer.style.gridTemplateColumns = '1fr';
      canvasArea.style.display      = 'none';
      transcriptPanel.style.display = 'flex';
      transcriptPanel.style.width   = '100%';
      break;
  }

  // Actualizar estado activo de los botones de vista
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  // OSD necesita invalidarse al cambiar tamaño
  setTimeout(() => _viewerState.osdViewer?.viewport?.goHome(true), 50);
}

// ─────────────────────────────────────────────────────────
// EVENT LISTENERS DEL VISOR
// ─────────────────────────────────────────────────────────

function _bindViewerEvents() {
  const get = (id) => document.getElementById(id);

  // ── Plan B (Apertura de Emergencia) ──
  get('vbtn-plan-b')?.addEventListener('click', () => {
    const doc = _viewerState.document;
    const driveId = doc?.driveId || doc?.media?.driveFileId || doc?.media?.pdf;
    if (driveId) {
      console.log('[Noor-SOS] Ejecutando Plan B para:', driveId);
      window.open(`https://drive.google.com/file/d/${driveId}/preview`, '_blank');
    } else {
      alert('No se detectó un ID de Drive válido para este documento.');
    }
  });

  // ── Cerrar ──
  get('viewer-close-btn')?.addEventListener('click', closeViewer);
  get('viewer-overlay')?.addEventListener('click', (e) => {
    if (e.target === get('viewer-overlay')) closeViewer();
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && _viewerState.isOpen) closeViewer();
  });

  // ── Zoom ──
  get('vbtn-zoom-in')?.addEventListener('click',  () => {
    if (_viewerState.osdViewer) _viewerState.osdViewer.viewport.zoomBy(1.5, null, true);
    else if (_viewerState.pdfDoc) { _viewerState.pdfScale = (_viewerState.pdfScale || 1.5) + 0.25; _renderPDFPage(_viewerState.currentPage + 1); }
  });
  get('vbtn-zoom-out')?.addEventListener('click', () => {
    if (_viewerState.osdViewer) _viewerState.osdViewer.viewport.zoomBy(0.7, null, true);
    else if (_viewerState.pdfDoc) { _viewerState.pdfScale = Math.max(0.5, (_viewerState.pdfScale || 1.5) - 0.25); _renderPDFPage(_viewerState.currentPage + 1); }
  });
  get('vbtn-zoom-fit')?.addEventListener('click', () => {
    if (_viewerState.osdViewer) _viewerState.osdViewer.viewport.goHome(true);
    else if (_viewerState.pdfDoc) { _viewerState.pdfScale = 1.0; _renderPDFPage(_viewerState.currentPage + 1); }
  });
  get('vbtn-zoom-minus')?.addEventListener('click',() => {
    if (_viewerState.osdViewer) _viewerState.osdViewer.viewport.zoomBy(0.7, null, true);
    else if (_viewerState.pdfDoc) { _viewerState.pdfScale = Math.max(0.5, (_viewerState.pdfScale || 1.5) - 0.25); _renderPDFPage(_viewerState.currentPage + 1); }
  });
  get('vbtn-zoom-plus')?.addEventListener('click', () => {
    if (_viewerState.osdViewer) _viewerState.osdViewer.viewport.zoomBy(1.5, null, true);
    else if (_viewerState.pdfDoc) { _viewerState.pdfScale = (_viewerState.pdfScale || 1.5) + 0.25; _renderPDFPage(_viewerState.currentPage + 1); }
  });

  // Slider de zoom
  get('zoom-slider')?.addEventListener('input', (e) => {
    const norm  = parseInt(e.target.value) / 100;
    if (_viewerState.osdViewer?.viewport) {
      const zoom  = Math.exp(norm * (Math.log(4) - Math.log(0.1)) + Math.log(0.1));
      _viewerState.osdViewer.viewport.zoomTo(zoom, null, true);
    } else if (_viewerState.pdfDoc) {
      _viewerState.pdfScale = 0.5 + (norm * 3.0); // De 0.5x a 3.5x
      _renderPDFPage(_viewerState.currentPage + 1);
    }
  });

  // Scroll to zoom (Rueda del ratón)
  const canvasArea = get('viewer-canvas-area');
  if (canvasArea) {
    canvasArea.addEventListener('wheel', (e) => {
      // Solo manejamos el scroll manual para PDF.js, OSD lo hace nativo
      if (_viewerState.pdfDoc) {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault(); // Evitar zoom del navegador
          const zoomAmount = e.deltaY < 0 ? 0.15 : -0.15;
          _viewerState.pdfScale = Math.max(0.5, Math.min(3.5, (_viewerState.pdfScale || 1.5) + zoomAmount));
          _renderPDFPage(_viewerState.currentPage + 1);
          
          // Sincronizar el slider visual
          const slider = get('zoom-slider');
          if (slider) {
            const norm = (_viewerState.pdfScale - 0.5) / 3.0;
            slider.value = norm * 100;
          }
        }
      }
    }, { passive: false });
  }

  // ── Rotación ──
  get('vbtn-rotate-l')?.addEventListener('click', () => {
    _viewerState.rotation = ((_viewerState.rotation - 90) + 360) % 360;
    _viewerState.osdViewer?.viewport?.setRotation(_viewerState.rotation);
  });
  get('vbtn-rotate-r')?.addEventListener('click', () => {
    _viewerState.rotation = (_viewerState.rotation + 90) % 360;
    _viewerState.osdViewer?.viewport?.setRotation(_viewerState.rotation);
  });

  // ── Pantalla completa ──
  get('vbtn-fullscreen')?.addEventListener('click', () => {
    const overlay = get('viewer-overlay');
    if (!document.fullscreenElement) {
      overlay?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  // ── Mostrar/ocultar panel de metadatos ──
  get('vbtn-toggle-meta')?.addEventListener('click', () => {
    _viewerState.showMeta = !_viewerState.showMeta;
    const panel = get('viewer-meta-panel');
    if (panel) panel.style.display = _viewerState.showMeta ? '' : 'none';
    get('vbtn-toggle-meta')?.classList.toggle('active', _viewerState.showMeta);
  });

  // ── Descarga ──
  get('vbtn-download')?.addEventListener('click', () => {
    const doc = _viewerState.document;
    if (!doc?.media?.driveFileId || doc.media.driveFileId.startsWith('PLACEHOLDER')) return;
    const url = DriveConnector.getDownloadUrl(doc.media.driveFileId);
    window.open(url, '_blank');
  });

  // ── Modos de vista ──
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => _applyViewMode(btn.dataset.mode));
  });

  // ── Paginación ──
  get('vbtn-prev-page')?.addEventListener('click', () => {
    if (_viewerState.currentPage > 0) _loadPage(_viewerState.currentPage - 1);
  });
  get('vbtn-next-page')?.addEventListener('click', () => {
    if (_viewerState.currentPage < _viewerState.totalPages - 1) {
      _loadPage(_viewerState.currentPage + 1);
    }
  });

  // Teclado: flechas para navegar páginas
  document.addEventListener('keydown', (e) => {
    if (!_viewerState.isOpen) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (_viewerState.currentPage < _viewerState.totalPages - 1) {
        _loadPage(_viewerState.currentPage + 1);
      }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (_viewerState.currentPage > 0) _loadPage(_viewerState.currentPage - 1);
    }
  });

  // ── Filtros de imagen ──
  const filterIds = ['filter-brightness', 'filter-contrast', 'filter-saturate'];
  filterIds.forEach(id => {
    get(id)?.addEventListener('input', (e) => {
      const key = id.replace('filter-', '');
      _viewerState.imageFilters[key] = parseInt(e.target.value);
      _applyImageFilters();
    });
  });

  // Restablecer filtros
  get('filter-reset-btn')?.addEventListener('click', () => {
    _viewerState.imageFilters = { ...DEFAULT_IMAGE_FILTERS };
    _syncFilterSliders();
    _applyImageFilters();
  });

  // Preajuste: Manuscrito (alto contraste, baja saturación)
  get('filter-preset-manuscript')?.addEventListener('click', () => {
    _viewerState.imageFilters = { brightness: 115, contrast: 135, saturate: 60, sepia: 5 };
    _syncFilterSliders();
    _applyImageFilters();
  });

  // Preajuste: Neutro
  get('filter-preset-clear')?.addEventListener('click', () => {
    _viewerState.imageFilters = { brightness: 100, contrast: 100, saturate: 100, sepia: 0 };
    _syncFilterSliders();
    _applyImageFilters();
  });

  // ── Copiar transcripción ──
  get('copy-transcript-btn')?.addEventListener('click', async () => {
    const textEl = document.querySelector('#transcription-text-container .transcription-text');
    if (!textEl) return;
    try {
      await navigator.clipboard.writeText(textEl.textContent);
      const btn = get('copy-transcript-btn');
      if (btn) {
        btn.setAttribute('data-tip', '¡Copiado!');
        setTimeout(() => btn.setAttribute('data-tip', 'Copiar texto'), 2000);
      }
    } catch {
      console.warn('[Viewer] No se pudo copiar al portapapeles.');
    }
  });
}

// ─────────────────────────────────────────────────────────
// UTILIDADES INTERNAS
// ─────────────────────────────────────────────────────────

function _updatePageIndicator() {
  const cur   = document.getElementById('current-page-num');
  const total = document.getElementById('total-pages-num');
  const prevBtn = document.getElementById('vbtn-prev-page');
  const nextBtn = document.getElementById('vbtn-next-page');

  if (cur)   cur.textContent   = _viewerState.currentPage + 1;
  if (total) total.textContent = _viewerState.totalPages;
  if (prevBtn) prevBtn.disabled = _viewerState.currentPage === 0;
  if (nextBtn) nextBtn.disabled = _viewerState.currentPage >= _viewerState.totalPages - 1;
}

function _updatePageThumbs() {
  document.querySelectorAll('.page-thumb').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === _viewerState.currentPage);
    thumb.setAttribute('aria-pressed', (idx === _viewerState.currentPage).toString());
  });
}

function _setLoading(isLoading) {
  const overlay = document.getElementById('viewer-loading');
  if (overlay) overlay.classList.toggle('hidden', !isLoading);
}

function _syncFilterSliders() {
  const f = _viewerState.imageFilters;
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  setVal('filter-brightness', f.brightness);
  setVal('filter-contrast',   f.contrast);
  setVal('filter-saturate',   f.saturate);
}

function _escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Genera un SVG de placeholder cuando no hay imagen disponible en Drive.
 * Muestra el título del documento y un icono ornamental.
 */
function _buildPlaceholderSVGUrl(title) {
  const safe  = title.substring(0, 48).replace(/[<>&"]/g, '');
  const svg   = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100"
         viewBox="0 0 800 1100" style="background:#111">
      <rect width="800" height="1100" fill="#0f0f0f"/>
      <rect x="40" y="40" width="720" height="1020"
            fill="none" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
      <rect x="55" y="55" width="690" height="990"
            fill="none" stroke="rgba(201,168,76,0.08)" stroke-width="1"/>
      <text x="400" y="420" fill="rgba(201,168,76,0.12)"
            font-size="160" text-anchor="middle" font-family="serif">𝓝</text>
      <text x="400" y="570" fill="rgba(184,149,106,0.5)"
            font-size="18" text-anchor="middle" font-family="Georgia, serif"
            letter-spacing="4">${safe}</text>
      <text x="400" y="610" fill="rgba(184,149,106,0.25)"
            font-size="11" text-anchor="middle" font-family="monospace"
            letter-spacing="2">IMAGEN PENDIENTE DE VINCULAR CON GOOGLE DRIVE</text>
    </svg>
  `;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/**
 * Carga OpenSeadragon desde CDN si no está disponible.
 */
async function _ensureOSDLoaded() {
  if (window.OpenSeadragon) return;

  return new Promise((resolve, reject) => {
    const script  = document.createElement('script');
    script.src    = OSD_CDN;
    script.onload = () => {
      console.log('[DocumentViewer] ✓ OpenSeadragon cargado desde CDN.');
      resolve();
    };
    script.onerror = () => {
      console.error('[DocumentViewer] ✗ No se pudo cargar OpenSeadragon.');
      reject(new Error('OSD load failed'));
    };
    document.head.appendChild(script);
  });
}

// ─────────────────────────────────────────────────────────
// EXPORTAR
// ─────────────────────────────────────────────────────────

window.DocumentViewer = { init: initViewer, open: openViewer, close: closeViewer };
console.log('[DocumentViewer] ✓ Módulo definido. Pendiente de inicialización.');
