/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Timeline Component (Línea de Tiempo)
 * ══════════════════════════════════════════════════════════
 *
 * FUNCIONALIDADES:
 *   ✓ Dual-handle range slider (711–1900)
 *   ✓ Segmentos de color por época histórica
 *   ✓ Marcadores de eventos históricos sobre el track
 *   ✓ Sincronización bidireccional con NoorState
 *   ✓ Tooltips contextuales en los eventos
 *   ✓ Contador reactivo de documentos en el rango
 *   ✓ Botón "Ver en mapa" para cambiar al modo geográfico
 */

const MIN_YEAR = 711;
const MAX_YEAR = 2100;
const YEAR_SPAN = MAX_YEAR - MIN_YEAR;

/**
 * initTimeline()
 * Inyecta el componente de línea de tiempo en el contenedor dado.
 * @param {string} mountId - id del elemento contenedor
 */
function initTimeline(mountId = 'timeline-mount') {
  const el = document.getElementById(mountId);
  if (!el) return;

  el.innerHTML = _buildTimelineHTML();

  // Registrar interacciones
  _bindTimelineEvents();

  // Suscribir al estado para actualizar el contador
  NoorState.subscribe('*', (state) => {
    _syncFromState(state.filters.yearRange);
    _updateDocCount();
  });

  // Estado inicial
  const state = NoorState.getState();
  _setHandlePositions(state.filters.yearRange[0], state.filters.yearRange[1]);
  _updateDocCount();

  console.log('[Timeline] ✓ Inicializado.');
}

// ─────────────────────────────────────────────────────────
// CONSTRUCCIÓN DEL HTML
// ─────────────────────────────────────────────────────────

function _buildTimelineHTML() {
  const { HISTORICAL_ERAS } = window.NoorSchema;
  const events = window.NoorMockData?.events || [];

  // ── Etiquetas de año en el track ──
  const yearLabels = [711, 900, 1100, 1300, 1492, 1700, 1900, 2030];
  const labelsHTML = yearLabels.map(y => {
    const pct = ((y - MIN_YEAR) / YEAR_SPAN) * 100;
    const isMajor = [711, 1000, 1492, 1900].includes(y);
    return `
      <div class="timeline-year-label ${isMajor ? 'major' : ''}"
           style="position:absolute;left:${pct}%;transform:translateX(-50%);bottom:0"
      >${y}</div>
    `;
  }).join('');

  // ── Segmentos de épocas ──
  const erasHTML = Object.values(HISTORICAL_ERAS).map(era => {
    const [start, end] = era.range;
    const leftPct  = ((start - MIN_YEAR) / YEAR_SPAN) * 100;
    const widthPct = ((end - start) / YEAR_SPAN) * 100;
    return `
      <div
        class="timeline-era-segment"
        title="${era.label} (${start}–${end})"
        data-era-id="${era.id}"
        data-era-start="${start}"
        data-era-end="${end}"
        style="
          position:absolute;
          left:${leftPct}%;
          width:${widthPct}%;
          height:100%;
          background:${era.color};
          border-radius:2px;
        "
        role="button"
        tabindex="0"
        aria-label="Filtrar por ${era.label}"
      ></div>
    `;
  }).join('');

  // ── Marcadores de eventos/documentos ──
  const docs = NoorState.getState().documents || [];
  const eventsHTML = docs.map(evt => {
    const pct   = ((evt.year - MIN_YEAR) / YEAR_SPAN) * 100;
    const color = window.NoorSchema.HISTORICAL_ERAS[evt.eraId]?.color || 'var(--color-gold)';
    const size = 8;
    return `
      <div
        class="timeline-event-dot"
        data-event-id="${evt.id}"
        style="left:${pct}%;background:${color};width:${size}px;height:${size}px;"
        title="${evt.title}"
        role="button"
        tabindex="0"
        aria-label="Documento: ${evt.title} (${evt.year})"
      ></div>
    `;
  }).join('');

  return `
    <div class="timeline-container" id="timeline-root" role="region" aria-label="Línea de tiempo histórica">

      <!-- Etiquetas de años (encima de todo) -->
      <div class="timeline-year-labels" style="position:relative;height:20px;margin-bottom:0.35rem">
        ${labelsHTML}
      </div>

      <!-- Barra de épocas -->
      <div class="timeline-eras-row" style="position:relative;height:12px;margin-bottom:4px" id="timeline-eras-row">
        ${erasHTML}
      </div>

      <!-- Track principal con handles y marcadores de eventos -->
      <div class="timeline-track-wrapper" id="timeline-track-wrapper">

        <!-- Track de fondo -->
        <div class="timeline-track" id="timeline-track">
          <div class="timeline-range-fill" id="timeline-range-fill"></div>
        </div>

        <!-- Marcadores de eventos sobre el track -->
        <div class="timeline-event-markers" id="timeline-event-markers">
          ${eventsHTML}
        </div>

        <!-- Handle izquierdo (año inicio) -->
        <div class="timeline-handle" id="handle-from" role="slider"
             aria-label="Año de inicio" aria-valuemin="${MIN_YEAR}" aria-valuemax="${MAX_YEAR}"
             aria-valuenow="${MIN_YEAR}" tabindex="0">
          <div class="timeline-handle__label" id="handle-from-label">${MIN_YEAR}</div>
        </div>

        <!-- Handle derecho (año fin) -->
        <div class="timeline-handle" id="handle-to" role="slider"
             aria-label="Año de fin" aria-valuemin="${MIN_YEAR}" aria-valuemax="${MAX_YEAR}"
             aria-valuenow="${MAX_YEAR}" tabindex="0">
          <div class="timeline-handle__label" id="handle-to-label">${MAX_YEAR}</div>
        </div>

      </div>

      <!-- Info row: rango seleccionado + conteo + botón de mapa -->
      <div class="timeline-info-row">
        <span class="timeline-range-display">
          Mostrando: <strong id="tl-year-from">${MIN_YEAR}</strong>
          — <strong id="tl-year-to">${MAX_YEAR}</strong>
        </span>
        <span class="timeline-doc-count" id="tl-doc-count">
          <strong>—</strong> documentos en el rango
        </span>
        <button class="timeline-map-link" id="tl-goto-map" aria-label="Ver en el mapa">
          <i data-lucide="map" width="12" height="12"></i>
          Ver en mapa
        </button>
      </div>

      <!-- Tooltip de evento (invisible por defecto) -->
      <div id="timeline-tooltip" class="timeline-event-tooltip" style="display:none;position:absolute;z-index:50"></div>

    </div>
  `;
}

// ─────────────────────────────────────────────────────────
// LÓGICA DEL DUAL-HANDLE SLIDER
// ─────────────────────────────────────────────────────────

/**
 * Convierte un año (711–1900) a posición porcentual (0–1).
 */
function _yearToFraction(year) {
  return Math.max(0, Math.min(1, (year - MIN_YEAR) / YEAR_SPAN));
}

/**
 * Convierte una fracción (0–1) a año.
 */
function _fractionToYear(f) {
  return Math.round(MIN_YEAR + f * YEAR_SPAN);
}

/**
 * Posiciona visualmente los handles y la barra de rango.
 */
function _setHandlePositions(fromYear, toYear) {
  const fromFrac = _yearToFraction(fromYear);
  const toFrac   = _yearToFraction(toYear);

  const handleFrom = document.getElementById('handle-from');
  const handleTo   = document.getElementById('handle-to');
  const fill       = document.getElementById('timeline-range-fill');
  const fromLabel  = document.getElementById('handle-from-label');
  const toLabel    = document.getElementById('handle-to-label');
  const fromDisp   = document.getElementById('tl-year-from');
  const toDisp     = document.getElementById('tl-year-to');

  if (handleFrom) {
    handleFrom.style.left = `${fromFrac * 100}%`;
    handleFrom.setAttribute('aria-valuenow', fromYear);
  }
  if (handleTo) {
    handleTo.style.left = `${toFrac * 100}%`;
    handleTo.setAttribute('aria-valuenow', toYear);
  }
  if (fill) {
    fill.style.left  = `${fromFrac * 100}%`;
    fill.style.width = `${(toFrac - fromFrac) * 100}%`;
  }
  if (fromLabel) fromLabel.textContent = fromYear;
  if (toLabel)   toLabel.textContent   = toYear;
  if (fromDisp)  fromDisp.textContent  = fromYear;
  if (toDisp)    toDisp.textContent    = toYear;

  // Resaltar épocas dentro del rango
  document.querySelectorAll('.timeline-era-segment').forEach(seg => {
    const eraStart = parseInt(seg.dataset.eraStart);
    const eraEnd   = parseInt(seg.dataset.eraEnd);
    const inRange  = eraEnd > fromYear && eraStart < toYear;
    seg.classList.toggle('in-range', inRange);
  });
}

/**
 * Actualiza el contador de documentos en el rango actual.
 */
function _updateDocCount() {
  const countEl = document.getElementById('tl-doc-count');
  if (!countEl) return;
  const { total } = NoorState.getFilteredDocuments();
  countEl.innerHTML = `<strong>${total}</strong> documento${total !== 1 ? 's' : ''} en el rango`;
}

/**
 * Sincroniza la posición visual de los handles desde el estado.
 */
function _syncFromState([fromYear, toYear]) {
  _setHandlePositions(fromYear, toYear);
}

// ─────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────

function _bindTimelineEvents() {
  const wrapper = document.getElementById('timeline-track-wrapper');
  const handleFrom = document.getElementById('handle-from');
  const handleTo   = document.getElementById('handle-to');

  if (!wrapper || !handleFrom || !handleTo) return;

  let dragging = null; // 'from' | 'to'

  // Estado actual del rango
  let fromYear = MIN_YEAR;
  let toYear   = MAX_YEAR;

  function getYearFromClientX(clientX) {
    const rect = wrapper.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return _fractionToYear(frac);
  }

  function startDrag(handle, e) {
    e.preventDefault();
    dragging = handle;
    document.getElementById(`handle-${handle}`)?.classList.add('dragging');
  }

  function onMove(clientX) {
    if (!dragging) return;
    const year = getYearFromClientX(clientX);

    if (dragging === 'from') {
      fromYear = Math.min(year, toYear - 10);
    } else {
      toYear = Math.max(year, fromYear + 10);
    }

    _setHandlePositions(fromYear, toYear);
  }

  function endDrag() {
    if (!dragging) return;
    document.getElementById(`handle-${dragging}`)?.classList.remove('dragging');
    dragging = null;

    // Despachar al estado global (DEBOUNCE: actualizar solo al soltar)
    NoorState.dispatch('SET_FILTER', { key: 'yearRange', value: [fromYear, toYear] });
    _updateDocCount();
  }

  // Mouse events
  handleFrom.addEventListener('mousedown', (e) => startDrag('from', e));
  handleTo.addEventListener('mousedown', (e) => startDrag('to', e));
  document.addEventListener('mousemove', (e) => onMove(e.clientX));
  document.addEventListener('mouseup', endDrag);

  // Touch events (móvil)
  handleFrom.addEventListener('touchstart', (e) => startDrag('from', e), { passive: false });
  handleTo.addEventListener('touchstart', (e) => startDrag('to', e), { passive: false });
  document.addEventListener('touchmove', (e) => {
    if (e.touches[0]) onMove(e.touches[0].clientX);
  }, { passive: true });
  document.addEventListener('touchend', endDrag);

  // Sincronización de fromYear/toYear cuando cambia el estado externamente
  NoorState.subscribe('*', (state) => {
    [fromYear, toYear] = state.filters.yearRange;
  });

  // ── Clic en un segmento de época → filtrar por esa época ──
  document.getElementById('timeline-eras-row')?.addEventListener('click', (e) => {
    const seg = e.target.closest('[data-era-id]');
    if (!seg) return;
    const eraId    = seg.dataset.eraId;
    const eraStart = parseInt(seg.dataset.eraStart);
    const eraEnd   = parseInt(seg.dataset.eraEnd);
    fromYear = eraStart;
    toYear   = eraEnd;
    _setHandlePositions(fromYear, toYear);
    NoorState.dispatch('SET_FILTER', { key: 'yearRange', value: [fromYear, toYear] });
    NoorState.dispatch('TOGGLE_FILTER_VALUE', { key: 'eraIds', value: eraId });
    _updateDocCount();
  });

  // ── Marcadores de eventos con tooltip ──
  const tooltip    = document.getElementById('timeline-tooltip');
  // Usamos los documentos en estado, no mockData options.
  
  document.querySelectorAll('.timeline-event-dot').forEach(dot => {
    dot.addEventListener('mouseenter', (e) => {
      const evtId = dot.dataset.eventId;
      const docsData = NoorState.getState().documents || [];
      const evt   = docsData.find(ev => ev.id === evtId);
      if (!evt || !tooltip) return;

      const wrapperRect = document.getElementById('timeline-track-wrapper').getBoundingClientRect();
      const dotRect     = dot.getBoundingClientRect();
      const relLeft     = dotRect.left - wrapperRect.left + dotRect.width / 2;

      tooltip.style.display = 'block';
      tooltip.style.left    = `${relLeft}px`;
      tooltip.style.transform = 'translateX(-50%)';
      tooltip.innerHTML = `
        <p class="timeline-event-tooltip__year">${evt.year}</p>
        <p class="timeline-event-tooltip__title">${evt.title}</p>
        <p class="timeline-event-tooltip__desc">${evt.source || evt.type || 'Documento histórico'}</p>
      `;
    });

    dot.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.style.display = 'none';
    });

    // Clic en evento → abrir visor
    dot.addEventListener('click', () => {
      const evtId = dot.dataset.eventId;
      const docsData = NoorState.getState().documents || [];
      const evt   = docsData.find(ev => ev.id === evtId);
      if (!evt) return;
      NoorState.dispatch('SELECT_DOCUMENT', evt);
    });
  });

  // ── Teclado: flechas sobre los handles ──
  [handleFrom, handleTo].forEach((handle, idx) => {
    handle.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 50 : 10;
      if (e.key === 'ArrowLeft') {
        if (idx === 0) fromYear = Math.max(MIN_YEAR, fromYear - step);
        else           toYear   = Math.max(fromYear + 10, toYear - step);
      } else if (e.key === 'ArrowRight') {
        if (idx === 0) fromYear = Math.min(toYear - 10, fromYear + step);
        else           toYear   = Math.min(MAX_YEAR, toYear + step);
      } else return;
      e.preventDefault();
      _setHandlePositions(fromYear, toYear);
      NoorState.dispatch('SET_FILTER', { key: 'yearRange', value: [fromYear, toYear] });
    });
  });

  // ── Botón "Ver en mapa" ──
  document.getElementById('tl-goto-map')?.addEventListener('click', () => {
    // Cambiar al tab de mapa
    const mapTab = document.querySelector('[data-explore-tab="map"]');
    if (mapTab) mapTab.click();
  });
}

window.initTimeline = initTimeline;
console.log('[Timeline] ✓ Módulo definido.');
