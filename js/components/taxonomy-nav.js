/**
 * TAXONOMY NAV COMPONENT
 * Barra de navegación por Épocas, Temas, Regiones y Tipos de Documento.
 * Cada pestaña tiene un dropdown con las sub-categorías.
 */
function renderTaxonomyNav() {
  const el = document.getElementById('app-taxonomy-nav');
  if (!el) return;

  const { HISTORICAL_ERAS, THEMATIC_DIMENSIONS, REGIONS, DOCUMENT_TYPES } = window.NoorSchema;

  // Contar documentos por época (para los badges)
  const counts = {};
  const allDocs = (window.NoorMockData && Array.isArray(window.NoorMockData)) ? window.NoorMockData : [];
  allDocs.forEach(function(doc) {
    if (doc.eraId) {
      counts[doc.eraId] = (counts[doc.eraId] || 0) + 1;
    }
  });

  // ── Construir ítems del dropdown de Épocas ──
  const erasItems = Object.values(HISTORICAL_ERAS).map(function(era) {
    return `
    <a href="#"
       class="taxonomy-dropdown__item"
       data-filter-key="eraIds"
       data-filter-value="${era.id}"
       aria-label="Filtrar por ${era.label}"
    >
      <span style="display:flex;align-items:center;gap:0.5rem;">
        <span style="width:8px;height:8px;border-radius:50%;background:${era.color};flex-shrink:0"></span>
        ${era.label}
      </span>
      <span class="taxonomy-dropdown__count">${counts[era.id] || 0} docs</span>
    </a>
  `; }).join('');

  // ── Construir ítems del dropdown de Temas ──
  const themesItems = Object.values(THEMATIC_DIMENSIONS).map(function(t) {
    return `
    <a href="#"
       class="taxonomy-dropdown__item"
       data-filter-key="themes"
       data-filter-value="${t.id}"
    >
      <span>${t.label}</span>
    </a>
  `; }).join('');

  // ── Construir ítems del dropdown de Tipos ──
  const typesItems = Object.values(DOCUMENT_TYPES).map(function(type) {
    return `
    <a href="#"
       class="taxonomy-dropdown__item"
       data-filter-key="types"
       data-filter-value="${type}"
    >
      <span style="text-transform:capitalize">${type}</span>
    </a>
  `; }).join('');

  // ── Construir ítems del dropdown de Regiones ──
  const regionsItems = Object.values(REGIONS).map(function(region) {
    const regionKey = Object.keys(REGIONS).find(function(k) { return REGIONS[k] === region; });
    return `
    <a href="#"
       class="taxonomy-dropdown__item"
       data-filter-key="regions"
       data-filter-value="${regionKey}"
    >
      <span>${region}</span>
    </a>
  `; }).join('');

  // ── Construir ítems del dropdown de Secciones ──
  const localSections = window.NoorLocalDB?.sections || [];
  const sectionsItems = localSections.map(function(sec) {
    return `
    <a href="#"
       class="taxonomy-dropdown__item"
       data-filter-key="sections"
       data-filter-value="${sec.label}"
    >
      <span>${sec.label.replace(/^\d+_/, '')}</span>
    </a>
  `; }).join('');

  el.innerHTML = `
    <nav class="taxonomy-nav" aria-label="Taxonomía histórica">
      <span class="taxonomy-nav__label" aria-hidden="true">Explorar:</span>

      <div class="taxonomy-nav__items">

        <!-- Épocas -->
        <div class="taxonomy-nav__item">
          <button class="taxonomy-nav__btn active" id="tax-tab-eras" data-tab="eras">
            <i data-lucide="clock" width="13" height="13"></i>
            Épocas
            <span class="taxonomy-nav__pill">${Object.keys(HISTORICAL_ERAS).length}</span>
          </button>
          <div class="taxonomy-dropdown" id="dropdown-eras">
            <a href="#" class="taxonomy-dropdown__item" data-action="reset-era">
              <span style="display:flex;align-items:center;gap:0.5rem;">
                <i data-lucide="x" width="11" height="11" style="color:var(--color-sepia)"></i>
                Todas las épocas
              </span>
            </a>
            ${erasItems}
          </div>
        </div>

        <!-- Temas -->
        <div class="taxonomy-nav__item">
          <button class="taxonomy-nav__btn" id="tax-tab-themes" data-tab="themes">
            <i data-lucide="tag" width="13" height="13"></i>
            Temas
            <span class="taxonomy-nav__pill">${Object.keys(THEMATIC_DIMENSIONS).length}</span>
          </button>
          <div class="taxonomy-dropdown" id="dropdown-themes">
            ${themesItems}
          </div>
        </div>

        <!-- Regiones -->
        <div class="taxonomy-nav__item">
          <button class="taxonomy-nav__btn" id="tax-tab-regions" data-tab="regions">
            <i data-lucide="map-pin" width="13" height="13"></i>
            Regiones
          </button>
          <div class="taxonomy-dropdown" id="dropdown-regions">
            ${regionsItems}
          </div>
        </div>

        <!-- Tipos de Documento -->
        <div class="taxonomy-nav__item">
          <button class="taxonomy-nav__btn" id="tax-tab-types" data-tab="types">
            <i data-lucide="file-text" width="13" height="13"></i>
            Fuentes
          </button>
          <div class="taxonomy-dropdown" id="dropdown-types">
            ${typesItems}
          </div>
        </div>

        <!-- Secciones del Archivo -->
        <div class="taxonomy-nav__item">
          <button class="taxonomy-nav__btn" id="tax-tab-sections" data-tab="sections">
            <i data-lucide="library" width="13" height="13"></i>
            Secciones
          </button>
          <div class="taxonomy-dropdown" id="dropdown-sections">
            ${sectionsItems}
          </div>
        </div>

      </div>
    </nav>
  `;

  // Inicializar íconos
  if (window.lucide) lucide.createIcons();

  // ── Lógica de filtrado al hacer click en dropdown ──
  el.addEventListener('click', function(e) {
    const item = e.target.closest('[data-filter-key]');
    if (!item) return;
    e.preventDefault();

    const key = item.dataset.filterKey;
    const value = item.dataset.filterValue;

    NoorState.dispatch('TOGGLE_FILTER_VALUE', { key: key, value: value });
    item.classList.toggle('active');
  });

  // ── Reset épocas ──
  el.querySelector('[data-action="reset-era"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    NoorState.dispatch('SET_FILTER', { key: 'eraIds', value: [] });
  });
}
