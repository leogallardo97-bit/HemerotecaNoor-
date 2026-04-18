/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Map Component (Fase 3)
 * ══════════════════════════════════════════════════════════
 *
 * FUNCIONALIDADES:
 *   ✓ Leaflet.js con tiles históricos (ESRI World Shaded Relief + filtro sepia)
 *   ✓ Marcadores por ciudad/región vinculados a documentos
 *   ✓ Agrupación de documentos por localización
 *   ✓ Popup con lista de documentos y botón "Filtrar galería"
 *   ✓ Resaltado de marcadores al pasar el filtro de época
 *   ✓ Marcadores de sitios arqueológicos (Alhambra, Madīnat al-Zahrāʾ)
 *   ✓ Sincronización total con NoorState
 *   ✓ Leyenda contextual
 *
 * TILES UTILIZADOS:
 *   - ESRI World Shaded Relief (base neutral + filtro CSS sepia) vía CDN
 *   - Fallback: OpenStreetMap estándar con filtro CSS
 */

const MAP_TILE_OPTIONS = {
  // ── Opción 1: ESRI Shaded Relief (sin clave, uso libre, sin etiquetas) ──
  ESRI_SHADED: {
    url:   'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
    attrs: 'Tiles &copy; Esri &mdash; Source: Esri',
    max:   13,
  },
  // ── Opción 2: Stadia Alidade Smooth (tonos neutros, sin clave en localhost) ──
  STADIA: {
    url:   'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
    attrs: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>',
    max:   20,
  },
  // ── Opción 3: CartoDB Dark Matter ──
  CARTO_DARK: {
    url:   'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attrs: '&copy; <a href="https://carto.com/">CartoDB</a>',
    max:   19,
  },
};

/** Tile activo (cambiar aquí para probar distintas opciones) */
const ACTIVE_TILE = MAP_TILE_OPTIONS.ESRI_SHADED;

/** URL del CDN de Leaflet */
const LEAFLET_CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
const LEAFLET_JS_URL  = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.js';

// ─────────────────────────────────────────────────────────
// ESTADO INTERNO DEL MAPA
// ─────────────────────────────────────────────────────────

const _mapState = {
  map:            null,   // instancia de Leaflet
  markersLayer:   null,   // LayerGroup con marcadores de documentos
  sitesLayer:     null,   // LayerGroup con sitios arqueológicos
  popupOpen:      null,   // marcador con popup abierto
  activeRegions:  [],     // regiones actualmente en el filtro
};

// ─────────────────────────────────────────────────────────
// INICIALIZACIÓN
// ─────────────────────────────────────────────────────────

/**
 * initMap(mountId)
 * Carga Leaflet desde CDN (si no está) y monta el mapa.
 * @param {string} mountId - id del <div> donde montar el mapa
 */
async function initMap(mountId = 'noor-map') {
  // Asegurar que el elemento existe
  const el = document.getElementById(mountId);
  if (!el) {
    console.warn('[Map] El elemento #' + mountId + ' no existe.');
    return;
  }

  // Cargar Leaflet si no está disponible
  await _ensureLeafletLoaded();

  // Inicializar el mapa centrado en Al-Ándalus
  const { center, zoom, maxBounds } = window.GeoData.AL_ANDALUS_BOUNDS;

  _mapState.map = L.map(mountId, {
    center,
    zoom,
    maxZoom: 14,
    minZoom: 4,
    maxBounds: L.latLngBounds(maxBounds),
    zoomControl: true,
  });

  // ── Tile layer con filtro CSS sepia (histórico) ──
  L.tileLayer(ACTIVE_TILE.url, {
    maxZoom:     ACTIVE_TILE.max,
    attribution: ACTIVE_TILE.attrs,
    // El filtro sepia se aplica vía CSS en viewer.css (.leaflet-tile)
  }).addTo(_mapState.map);

  // ── Grupos de marcadores ──
  _mapState.markersLayer = L.layerGroup().addTo(_mapState.map);
  _mapState.sitesLayer   = L.layerGroup().addTo(_mapState.map);

  // ── Leyenda ──
  _renderLegend();

  // ── Pintar todos los marcadores ──
  _renderAllMarkers();

  // ── Suscribir al estado ──
  NoorState.subscribe('*', (state) => {
    _highlightMarkersForFilters(state.filters);
  });

  // Forzar invalidación de tamaño (en caso de que el contenedor
  // estuviera oculto cuando se montó el mapa)
  setTimeout(() => _mapState.map?.invalidateSize(), 300);

  console.log('[Map] ✓ Mapa de Al-Ándalus inicializado.');
}

// ─────────────────────────────────────────────────────────
// RENDERIZADO DE MARCADORES
// ─────────────────────────────────────────────────────────

/**
 * Agrupa los documentos por región y pinta un marcador por localización.
 * Cada marcador abre un popup con los documentos disponibles.
 */
function _renderAllMarkers() {
  if (!_mapState.map) return;

  const { GEO_LOCATIONS } = window.GeoData;
  const { HISTORICAL_ERAS } = window.NoorSchema;
  const allDocs = window.NoorMockData?.documents || [];

  // Limpiar marcadores previos
  _mapState.markersLayer.clearLayers();
  _mapState.sitesLayer.clearLayers();

  // ── Marcadores de CIUDADES y REGIONES con documentos ──
  Object.entries(GEO_LOCATIONS).forEach(([regionKey, geo]) => {
    if (geo.type === 'site') return; // los sitios van en otra capa

    // Documentos que tienen esta región
    const relatedDocs = allDocs.filter(doc => doc.regions.includes(regionKey));

    // Marcador de ciudad siempre pintado (aunque no tenga docs aún)
    const marker = _createCityMarker(geo, regionKey, relatedDocs, HISTORICAL_ERAS);
    _mapState.markersLayer.addLayer(marker);
  });

  // ── Marcadores de SITIOS ARQUEOLÓGICOS ──
  Object.entries(GEO_LOCATIONS).forEach(([regionKey, geo]) => {
    if (geo.type !== 'site') return;
    const marker = _createSiteMarker(geo);
    _mapState.sitesLayer.addLayer(marker);
  });
}

/**
 * Crea el marcador de una ciudad/región con IconSVG personalizado.
 */
function _createCityMarker(geo, regionKey, relatedDocs, eras) {
  const hasDocuments = relatedDocs.length > 0;
  const peakEra      = eras[geo.peak] || {};
  const color        = hasDocuments ? (peakEra.color || '#c9a84c') : 'rgba(101,80,42,0.5)';
  const size         = hasDocuments ? (relatedDocs.length > 3 ? 28 : 22) : 16;

  // Icono SVG del marcador
  const svgIcon = L.divIcon({
    className: '',
    html: `
      <div style="
        width:${size}px; height:${size}px;
        border-radius:50%;
        background:${color};
        border:2px solid ${hasDocuments ? 'rgba(201,168,76,0.6)' : 'rgba(101,80,42,0.3)'};
        box-shadow:0 0 ${hasDocuments ? '10px' : '4px'} ${color.replace(')', ',0.4)')};
        display:flex; align-items:center; justify-content:center;
        font-size:${size > 22 ? '0.65rem' : '0.55rem'};
        font-weight:700;
        color:rgba(13,13,13,0.9);
        cursor:pointer;
        transition:all 0.2s;
        font-family:'Inter',sans-serif;
      " class="noor-city-marker" data-region="${regionKey}">
        ${hasDocuments ? relatedDocs.length : ''}
      </div>
    `,
    iconSize:   [size, size],
    iconAnchor: [size / 2, size / 2],
  });

  const marker = L.marker([geo.lat, geo.lng], { icon: svgIcon, title: geo.name });

  // ── Popup del marcador ──
  const popupContent = _buildCityPopup(geo, regionKey, relatedDocs);
  marker.bindPopup(popupContent, {
    maxWidth:    280,
    minWidth:    220,
    className:   'noor-popup',
    closeButton: true,
    offset:      L.point(0, -size / 2),
  });

  // Guardar referencia de región para resaltado
  marker._noorRegionKey = regionKey;
  marker._noorHasDocs   = hasDocuments;

  return marker;
}

/**
 * Construye el HTML del popup de una ciudad con sus documentos.
 */
function _buildCityPopup(geo, regionKey, docs) {
  const docsHTML = docs.length > 0
    ? docs.map(doc => `
        <div class="map-popup__doc-item" data-doc-id="${doc.id}" role="button" tabindex="0">
          <div>
            <p class="map-popup__doc-title">${doc.title}</p>
            <p class="map-popup__doc-year">${doc.year} · ${doc.type}</p>
          </div>
        </div>
      `).join('')
    : `<p style="font-size:0.72rem;color:rgba(229,229,229,0.25);padding:0.75rem 1rem;font-style:italic">
         Sin documentos en el rango actual.
       </p>`;

  return `
    <div class="map-popup">
      <div class="map-popup__header">
        <p class="map-popup__region">${geo.nameAr || ''}</p>
        <p style="font-family:'Playfair Display',serif;font-size:0.9rem;color:#f0e2cc;font-weight:600">
          ${geo.name}
        </p>
        <p style="font-size:0.68rem;color:rgba(184,149,106,0.6);margin-top:0.25rem;line-height:1.4">
          ${geo.desc}
        </p>
      </div>
      <div class="map-popup__docs">${docsHTML}</div>
      ${docs.length > 0 ? `
        <div class="map-popup__footer">
          <button class="map-popup__filter-btn" data-region-filter="${regionKey}">
            Filtrar galería por esta región
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Crea el marcador de un sitio arqueológico (Alhambra, Madinat al-Zahra).
 */
function _createSiteMarker(geo) {
  const siteIcon = L.divIcon({
    className: '',
    html: `
      <div title="${geo.name}" style="
        font-size:16px; line-height:1; cursor:pointer;
        filter:drop-shadow(0 0 4px rgba(201,168,76,0.6));
      ">⬟</div>
    `,
    iconSize:   [20, 20],
    iconAnchor: [10, 10],
  });

  const marker = L.marker([geo.lat, geo.lng], { icon: siteIcon, title: geo.name });
  marker.bindTooltip(`<span style="font-size:0.72rem">${geo.name}</span>`, {
    direction: 'top',
    className: 'noor-tooltip',
  });

  return marker;
}

// ─────────────────────────────────────────────────────────
// EVENTOS EN LOS POPUPS (delegación desde el mapa)
// ─────────────────────────────────────────────────────────

/**
 * Vincula los eventos de click dentro de los popups de Leaflet.
 * Leaflet genera el DOM del popup dinámicamente, así que usamos
 * delegación sobre el contenedor del mapa.
 */
function _bindPopupEvents() {
  const mapEl = document.getElementById('noor-map');
  if (!mapEl) return;

  mapEl.addEventListener('click', (e) => {
    // Clic en un documento del popup → abrir el visor
    const docItem = e.target.closest('[data-doc-id]');
    if (docItem) {
      const docId = docItem.dataset.docId;
      const doc   = (window.NoorMockData?.documents || []).find(d => d.id === docId);
      if (doc) {
        NoorState.dispatch('SELECT_DOCUMENT', doc);
        _mapState.map?.closePopup();
      }
    }

    // Clic en "Filtrar galería por esta región"
    const filterBtn = e.target.closest('[data-region-filter]');
    if (filterBtn) {
      const regionKey = filterBtn.dataset.regionFilter;
      NoorState.dispatch('TOGGLE_FILTER_VALUE', { key: 'regions', value: regionKey });
      _mapState.map?.closePopup();
      // Volver a la galería: scroll arriba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Keydown para accesibilidad en items del popup
  mapEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const docItem = e.target.closest('[data-doc-id]');
    if (docItem) docItem.click();
  });
}

// ─────────────────────────────────────────────────────────
// LEYENDA
// ─────────────────────────────────────────────────────────

function _renderLegend() {
  if (!_mapState.map) return;

  const legend = L.control({ position: 'bottomright' });

  legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'map-legend');
    div.innerHTML = `
      <p class="map-legend__title">Leyenda</p>

      <div class="map-legend__item">
        <div class="map-legend__dot" style="background:var(--color-gold)"></div>
        Ciudad con documentos
      </div>
      <div class="map-legend__item">
        <div class="map-legend__dot" style="background:rgba(101,80,42,0.5)"></div>
        Ciudad sin documentos aún
      </div>
      <div class="map-legend__item">
        <span style="font-size:12px;margin-right:2px">⬟</span>
        Sitio arqueológico
      </div>

      <div style="margin-top:0.5rem;padding-top:0.5rem;border-top:1px solid rgba(201,168,76,0.12)">
        <p class="map-legend__title">Filtro de imagen</p>
        <input type="range" id="map-sepia-slider" min="0" max="80" value="55"
               style="width:100%;accent-color:var(--color-gold);margin-top:4px"
               aria-label="Intensidad del filtro sepia"/>
        <p style="font-size:0.58rem;color:rgba(184,149,106,0.5);margin-top:3px">
          Tono histórico
        </p>
      </div>
    `;
    // Prevenir que los clicks en la leyenda pasen al mapa
    L.DomEvent.disableClickPropagation(div);
    return div;
  };

  legend.addTo(_mapState.map);

  // Sepia slider: ajusta el filtro CSS sobre los tiles
  // (el slider se crea dinámicamente por Leaflet, usar delay)
  setTimeout(() => {
    document.getElementById('map-sepia-slider')?.addEventListener('input', (e) => {
      const v = parseInt(e.target.value);
      document.querySelectorAll('#noor-map .leaflet-tile').forEach(tile => {
        tile.style.filter = `sepia(${v}%) brightness(${110 - v * 0.4}%) contrast(${100 + v * 0.15}%)`;
      });
    });
  }, 500);
}

// ─────────────────────────────────────────────────────────
// RESALTADO EN TIEMPO REAL
// ─────────────────────────────────────────────────────────

/**
 * Resalta los marcadores que corresponden a los filtros activos.
 * @param {object} filters - estado de filtros de NoorState
 */
function _highlightMarkersForFilters(filters) {
  const activeRegions = filters.regions || [];
  const [fromYear, toYear] = filters.yearRange || [MIN_YEAR, MAX_YEAR];
  const allDocs = window.NoorMockData?.documents || [];

  _mapState.markersLayer?.eachLayer((marker) => {
    const regionKey = marker._noorRegionKey;
    if (!regionKey) return;

    // Calcular si hay docs en el rango de años para esta región
    const docsInRange = allDocs.filter(doc =>
      doc.regions.includes(regionKey) &&
      doc.year >= fromYear &&
      doc.year <= toYear
    );

    const isActiveRegion = activeRegions.includes(regionKey);
    const hasDocsInRange = docsInRange.length > 0;

    // Actualizar la opacidad visual del marcador
    const markerEl = marker.getElement()?.querySelector('.noor-city-marker');
    if (markerEl) {
      markerEl.style.opacity = hasDocsInRange ? '1' : '0.25';
      markerEl.style.boxShadow = isActiveRegion
        ? '0 0 16px rgba(201,168,76,0.7), 0 0 0 3px rgba(201,168,76,0.3)'
        : '';
      markerEl.textContent = hasDocsInRange ? docsInRange.length : '';
    }
  });
}

// ─────────────────────────────────────────────────────────
// UTILIDADES
// ─────────────────────────────────────────────────────────

/**
 * Centra el mapa en una región específica.
 * @param {string} regionKey - clave de GEO_LOCATIONS
 */
function focusMapOnRegion(regionKey) {
  const geo = window.GeoData.GEO_LOCATIONS[regionKey];
  if (!geo || !_mapState.map) return;
  _mapState.map.flyTo([geo.lat, geo.lng], geo.zoom || 9, { duration: 1.2 });
}

/**
 * Carga Leaflet desde CDN si no está disponible.
 */
async function _ensureLeafletLoaded() {
  if (window.L) return; // ya cargado

  // Cargar CSS de Leaflet
  return new Promise((resolve, reject) => {
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link  = document.createElement('link');
      link.rel    = 'stylesheet';
      link.href   = LEAFLET_CSS_URL;
      document.head.appendChild(link);
    }

    if (window.L) { resolve(); return; }

    const script  = document.createElement('script');
    script.src    = LEAFLET_JS_URL;
    script.onload = () => {
      console.log('[Map] ✓ Leaflet cargado desde CDN.');
      resolve();
    };
    script.onerror = () => {
      console.error('[Map] ✗ No se pudo cargar Leaflet.');
      reject(new Error('Leaflet load failed'));
    };
    document.head.appendChild(script);
  });
}

// Exportar
window.NoorMap = { init: initMap, focusRegion: focusMapOnRegion, refresh: _renderAllMarkers };
console.log('[Map] ✓ Módulo definido.');
