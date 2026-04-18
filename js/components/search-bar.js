/**
 * SEARCH BAR COMPONENT
 * Barra de búsqueda avanzada con chips de filtros activos.
 */
function renderSearchBar() {
  const el = document.getElementById('app-search-bar');
  if (!el) return;

  el.innerHTML = `
    <section class="search-hero" aria-label="Búsqueda avanzada">
      <p class="search-hero__title">Archivo Noor — Búsqueda Documental</p>
      <form class="search-hero__form" id="search-hero-form" role="search">
        <input
          type="search"
          id="search-hero-input"
          class="search-hero__input"
          placeholder="Buscar por título, autor, año, región, evento histórico…"
          autocomplete="off"
          aria-label="Búsqueda principal"
        />
        <button type="submit" class="search-hero__btn" id="search-hero-btn">
          Buscar
        </button>
      </form>

      <!-- Chips de filtros activos -->
      <div class="active-filters" id="active-filters-container" aria-label="Filtros activos"></div>
    </section>
  `;

  const form = document.getElementById('search-hero-form');
  const input = document.getElementById('search-hero-input');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    NoorState.dispatch('SET_FILTER', { key: 'query', value: input.value });
    // Sincronizar con el header
    const headerInput = document.getElementById('header-search-input');
    if (headerInput) headerInput.value = input.value;
  });

  // Actualizar chips cuando cambian los filtros
  NoorState.subscribe('*', (state) => {
    renderActiveFilterChips(state.filters);
    // Mantener el input sincronizado
    if (input && input !== document.activeElement) {
      input.value = state.filters.query;
    }
  });
}

/**
 * Renderiza los chips de filtros activos debajo de la barra de búsqueda.
 */
function renderActiveFilterChips(filters) {
  const container = document.getElementById('active-filters-container');
  if (!container) return;

  const { HISTORICAL_ERAS, THEMATIC_DIMENSIONS, REGIONS, DOCUMENT_TYPES } = window.NoorSchema;
  const chips = [];

  // Chip de query
  if (filters.query) {
    chips.push({ label: `"${filters.query}"`, key: 'query', value: '' });
  }

  // Chips de épocas
  filters.eraIds.forEach(id => {
    const era = HISTORICAL_ERAS[id];
    if (era) chips.push({ label: era.label, key: 'eraIds', value: id, isArray: true });
  });

  // Chips de temas
  filters.themes.forEach(id => {
    const t = THEMATIC_DIMENSIONS[id];
    if (t) chips.push({ label: t.label, key: 'themes', value: id, isArray: true });
  });

  // Chips de tipos
  filters.types.forEach(type => {
    chips.push({ label: type, key: 'types', value: type, isArray: true });
  });

  // Chips de idiomas
  filters.languages.forEach(lang => {
    chips.push({ label: `Idioma: ${lang}`, key: 'languages', value: lang, isArray: true });
  });

  if (chips.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = chips.map(chip => `
    <button
      class="filter-chip"
      data-chip-key="${chip.key}"
      data-chip-value="${chip.value}"
      data-chip-array="${chip.isArray || false}"
      aria-label="Eliminar filtro: ${chip.label}"
    >
      ${chip.label}
      <span class="filter-chip__remove" aria-hidden="true">×</span>
    </button>
  `).join('');

  // También agregar botón "Limpiar todo" si hay más de 1 filtro
  if (chips.length > 1) {
    container.innerHTML += `
      <button class="filter-chip" id="clear-all-filters" style="border-color: rgba(255,255,255,0.1); color: rgba(229,229,229,0.4);">
        Limpiar todo <span class="filter-chip__remove">×</span>
      </button>
    `;
    document.getElementById('clear-all-filters')?.addEventListener('click', () => {
      NoorState.dispatch('RESET_FILTERS');
      const input = document.getElementById('search-hero-input');
      if (input) input.value = '';
    });
  }

  // Eventos de click en chips
  container.querySelectorAll('[data-chip-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.chipKey;
      const value = btn.dataset.chipValue;
      const isArray = btn.dataset.chipArray === 'true';

      if (isArray) {
        NoorState.dispatch('TOGGLE_FILTER_VALUE', { key, value });
      } else {
        NoorState.dispatch('SET_FILTER', { key, value: '' });
        const input = document.getElementById('search-hero-input');
        if (input) input.value = '';
        const headerInput = document.getElementById('header-search-input');
        if (headerInput) headerInput.value = '';
      }
    });
  });
}
