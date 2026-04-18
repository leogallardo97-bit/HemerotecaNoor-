/**
 * RESULTS GRID COMPONENT
 * Grid de documentos con tarjetas, toolbar de ordenamiento/vista,
 * estados de carga (skeleton) y paginación.
 */

// ── Mapa de iconos Lucide por tipo de documento ──
const DOC_TYPE_ICONS = {
  newspaper:  'newspaper',
  chronicle:  'scroll',
  decree:     'file-badge',
  manuscript: 'book-open',
  map:        'map',
  image:      'image',
  mixed:      'layers',
};

// ── Mapa de idiomas ──
const LANG_LABELS = { ar: 'AR', la: 'LA', es: 'ES', he: 'HE', ber: 'BER' };

/**
 * Renderiza la toolbar (conteo, toggle de vista, selector de orden)
 */
function renderResultsToolbar() {
  const container = document.getElementById('results-toolbar-container');
  if (!container) return;

  function buildToolbar(state) {
    const { results, total } = NoorState.getFilteredDocuments();
    const filters = state.filters;

    container.innerHTML = `
      <div class="results-toolbar">
        <!-- Conteo de resultados -->
        <p class="results-toolbar__count">
          <strong>${total}</strong> documento${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}
        </p>

        <div style="display:flex;gap:0.75rem;align-items:center">
          <!-- Botón de filtros mobile -->
          <button
            class="header-nav__btn"
            id="toggle-filters-mobile"
            style="display:none"
            aria-label="Abrir / Cerrar filtros"
          >
            <i data-lucide="sliders-horizontal" width="14" height="14"></i>
            Filtros
          </button>

          <!-- Selector de orden -->
          <select class="sort-select" id="sort-select" aria-label="Ordenar resultados">
            <option value="year_asc"  ${filters.sortBy === 'year_asc'  ? 'selected' : ''}>Año ↑ (más antiguo)</option>
            <option value="year_desc" ${filters.sortBy === 'year_desc' ? 'selected' : ''}>Año ↓ (más reciente)</option>
            <option value="title"     ${filters.sortBy === 'title'     ? 'selected' : ''}>Título A–Z</option>
            <option value="relevance" ${filters.sortBy === 'relevance' ? 'selected' : ''}>Relevancia</option>
          </select>

          <!-- Toggle de vista -->
          <div class="view-toggle" role="group" aria-label="Modo de visualización">
            <button
              class="view-toggle__btn ${filters.viewMode === 'grid' ? 'active' : ''}"
              id="view-grid-btn"
              title="Vista en cuadrícula"
              aria-pressed="${filters.viewMode === 'grid'}"
            >
              <i data-lucide="layout-grid" width="14" height="14"></i>
            </button>
            <button
              class="view-toggle__btn ${filters.viewMode === 'list' ? 'active' : ''}"
              id="view-list-btn"
              title="Vista en lista"
              aria-pressed="${filters.viewMode === 'list'}"
            >
              <i data-lucide="list" width="14" height="14"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();

    // Eventos
    document.getElementById('sort-select')?.addEventListener('change', (e) => {
      NoorState.dispatch('SET_SORT', e.target.value);
    });
    document.getElementById('view-grid-btn')?.addEventListener('click', () => {
      NoorState.dispatch('SET_VIEW_MODE', 'grid');
    });
    document.getElementById('view-list-btn')?.addEventListener('click', () => {
      NoorState.dispatch('SET_VIEW_MODE', 'list');
    });
    document.getElementById('toggle-filters-mobile')?.addEventListener('click', () => {
      NoorState.dispatch('TOGGLE_FILTERS');
      document.getElementById('filters-panel')?.classList.toggle('open');
    });
  }

  buildToolbar(NoorState.getState());
  NoorState.subscribe('*', buildToolbar);
}

/**
 * Renderiza el grid de documentos.
 */
function renderResultsGrid() {
  const container = document.getElementById('documents-grid-container');
  if (!container) return;

  function buildGrid(state) {
    if (state.isLoading) {
      // ── Estado de carga: Skeleton Cards ──
      container.innerHTML = `
        <div class="documents-grid" aria-busy="true" aria-label="Cargando documentos">
          ${Array.from({ length: 8 }, () => `
            <div class="skeleton-card" aria-hidden="true">
              <div class="skeleton-card__img"></div>
              <div class="skeleton-card__body">
                <div class="skeleton-line" style="width:40%"></div>
                <div class="skeleton-line" style="width:85%"></div>
                <div class="skeleton-line"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      return;
    }

    const { results, total, totalPages } = NoorState.getFilteredDocuments();
    const { HISTORICAL_ERAS } = window.NoorSchema;
    const viewMode = state.filters.viewMode;

    if (results.length === 0) {
      container.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4rem 2rem;gap:1rem;color:rgba(229,229,229,0.3)">
          <i data-lucide="search-x" width="48" height="48" style="opacity:0.3"></i>
          <p style="font-family:var(--font-serif);font-size:1.1rem">No se encontraron documentos</p>
          <p style="font-size:0.8rem">Prueba a modificar los filtros o el término de búsqueda.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      renderPagination(0, 0, state.filters.page);
      return;
    }

    container.innerHTML = `
      <div class="documents-grid ${viewMode === 'list' ? 'list-view' : ''}" role="list" aria-label="${total} documentos">
        ${results.map(doc => buildDocumentCard(doc, HISTORICAL_ERAS)).join('')}
      </div>
    `;

    if (window.lucide) lucide.createIcons();

    // Evento click en tarjeta → abre el visor (Fase 2)
    container.querySelectorAll('.doc-card').forEach(card => {
      card.addEventListener('click', () => {
        const docId = card.dataset.docId;
        const doc = (window.NoorMockData?.documents || []).find(d => d.id === docId);
        if (doc) {
          NoorState.dispatch('SELECT_DOCUMENT', doc);
          // El visor será renderizado en Fase 2
          console.log('[Noor] Documento seleccionado para el visor:', doc.title);
        }
      });
    });

    renderPagination(total, totalPages, state.filters.page);
  }

  buildGrid(NoorState.getState());
  NoorState.subscribe('*', buildGrid);
}

/**
 * Construye el HTML de una tarjeta de documento.
 */
function buildDocumentCard(doc, eras) {
  const era  = eras[doc.eraId] || {};
  const icon = DOC_TYPE_ICONS[doc.type] || 'file';
  const lang = LANG_LABELS[doc.language] || doc.language.toUpperCase();

  // Thumbnail: si tiene Drive ID, intenta URL de miniatura; si no, placeholder
  const hasThumbnail = doc.media?.driveFileId && !doc.media.driveFileId.startsWith('PLACEHOLDER');
  const thumbUrl = hasThumbnail
    ? window.DriveConnector?.getPublicFileUrl(doc.media.driveFileId, 'thumbnail')
    : '';

  const thumbHtml = thumbUrl
    ? `<img src="${thumbUrl}" alt="Portada: ${doc.title}" loading="lazy" />`
    : `
      <div class="doc-card__thumb-placeholder">
        <i data-lucide="${icon}" width="32" height="32"></i>
        <span style="font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase">${doc.type}</span>
      </div>
    `;

  const tagHtml = doc.tags.slice(0, 2).map(tag => `
    <span class="doc-card__tag">${tag}</span>
  `).join('');

  return `
    <article
      class="doc-card"
      data-doc-id="${doc.id}"
      role="listitem"
      tabindex="0"
      aria-label="${doc.title}, ${doc.year}"
    >
      <div class="doc-card__thumb">
        ${thumbHtml}
        <span class="doc-card__type-badge">${doc.type}</span>
      </div>
      <div class="doc-card__body">
        <p class="doc-card__date">
          <span style="color:${era.color || 'var(--color-sepia)'}">${era.label || doc.eraId}</span>
          · ${doc.year}
        </p>
        <h3 class="doc-card__title">${doc.title}</h3>
        <div class="doc-card__meta">
          <span>${lang}</span>
          <span>·</span>
          ${tagHtml}
        </div>
      </div>
    </article>
  `;
}

/**
 * Renderiza los controles de paginación.
 */
function renderPagination(total, totalPages, currentPage) {
  const container = document.getElementById('pagination-container');
  if (!container || totalPages <= 1) {
    if (container) container.innerHTML = '';
    return;
  }

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '…') {
      pages.push('…');
    }
  }

  container.innerHTML = `
    <nav class="pagination" aria-label="Paginación de resultados">
      <button
        class="pagination__btn"
        id="page-prev"
        ${currentPage === 1 ? 'disabled' : ''}
        aria-label="Página anterior"
      >
        <i data-lucide="chevron-left" width="14" height="14"></i>
      </button>

      ${pages.map(p => p === '…'
        ? `<span class="pagination__dots">…</span>`
        : `<button
              class="pagination__btn ${p === currentPage ? 'active' : ''}"
              data-page="${p}"
              aria-label="Página ${p}"
              aria-current="${p === currentPage ? 'page' : 'false'}"
            >${p}</button>`
      ).join('')}

      <button
        class="pagination__btn"
        id="page-next"
        ${currentPage === totalPages ? 'disabled' : ''}
        aria-label="Página siguiente"
      >
        <i data-lucide="chevron-right" width="14" height="14"></i>
      </button>
    </nav>
  `;

  if (window.lucide) lucide.createIcons();

  container.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      NoorState.dispatch('SET_PAGE', parseInt(btn.dataset.page));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.getElementById('page-prev')?.addEventListener('click', () => {
    if (currentPage > 1) {
      NoorState.dispatch('SET_PAGE', currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.getElementById('page-next')?.addEventListener('click', () => {
    if (currentPage < totalPages) {
      NoorState.dispatch('SET_PAGE', currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}
