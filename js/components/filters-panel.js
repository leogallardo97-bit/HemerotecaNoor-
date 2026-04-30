/**
 * FILTERS PANEL COMPONENT
 * Panel lateral izquierdo con filtros facetados: épocas, temas,
 * tipos de documento, idioma y rango de fechas.
 */
function renderFiltersPanel() {
  const panelEl = document.getElementById('app-results-layout');
  if (!panelEl) return;

  const { HISTORICAL_ERAS, THEMATIC_DIMENSIONS, DOCUMENT_TYPES } = window.NoorSchema;
  const documents = NoorState.getState().documents;
  const localSections = window.NoorLocalDB?.sections || [];

  // Calculadores de conteo (para mostrar cuántos docs tiene cada filtro)
  function countBySection(sectionLabel) { 
    return documents.filter(doc =>
      doc.category === sectionLabel ||
      (doc.localPath && doc.localPath.includes(sectionLabel)) ||
      (doc.id && doc.id.startsWith('v2-') && sectionLabel === '01_REVISTAS')
    ).length;
  }
  function countByEra(eraId) { return documents.filter(d => d.eraId === eraId).length; }
  function countByTheme(themeId) { return documents.filter(d => (d.themes || []).includes(themeId)).length; }
  function countByType(type) { return documents.filter(d => d.type === type).length; }
  function countByLang(lang) { return documents.filter(d => d.language === lang).length; }

  const langs = { ar: 'Árabe', la: 'Latín', es: 'Castellano', he: 'Hebreo', ber: 'Bereber' };

  panelEl.innerHTML = `
    <div class="results-layout">

      <!-- ─── PANEL DE FILTROS ─── -->
      <aside class="filters-panel" id="filters-panel" aria-label="Filtros de búsqueda">
        <p class="filters-panel__title">Refinar búsqueda</p>

        <!-- Grupo: Secciones Drive (DINÁMICO) -->
        <div class="filter-group">
          <p class="filter-group__label">Secciones Drive</p>
          ${[...localSections].sort((a, b) => {
            const numA = parseInt(a.label.substring(0, 2), 10) || 0;
            const numB = parseInt(b.label.substring(0, 2), 10) || 0;
            return numA - numB;
          }).map(sec => {
            // Sanitización para ID seguro en HTML
            const safeId = sec.label.toLowerCase()
              .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
              .replace(/ñ/g, 'n').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
            
            // Renderizado genérico para secciones con subcategorías (Taxonomía Anidada)
            const subcategories = [...new Set(documents.filter(d => d.category === sec.label && d.subcategory).map(d => d.subcategory))].sort();
            
            if (subcategories.length > 0) {
              return `
                <div class="filter-accordion" id="accordion-${safeId}">
                  <div class="filter-option" 
                       id="filter-section-${safeId}"
                       data-filter-key="sections" 
                       data-filter-value="${sec.label}" 
                       role="checkbox" 
                       tabindex="0" 
                       aria-checked="false">
                    <label class="filter-option__label" style="cursor:pointer">
                      <span class="filter-option__checkbox"></span>
                      <span style="color:var(--color-gold-light); font-weight: 600">${sec.label}</span>
                    </label>
                    <div style="display:flex; align-items:center; gap:0.5rem">
                      <span class="filter-option__count">${countBySection(sec.label)}</span>
                      <button class="accordion-toggle" onclick="event.stopPropagation(); this.closest('.filter-accordion').classList.toggle('open')">▼</button>
                    </div>
                  </div>
                  <div class="accordion-content">
                    ${subcategories.map(sub => `
                      <div class="filter-option subcategory" 
                           data-filter-key="subcategories" 
                           data-filter-value="${sub}"
                           role="checkbox" 
                           tabindex="0" 
                           aria-checked="false">
                        <label class="filter-option__label" style="cursor:pointer; padding-left: 1.25rem; font-size: 0.75rem">
                          <span class="filter-option__checkbox"></span>
                          ${sub.replace(/^\d+_/g, '').replace(/_/g, ' ')}
                        </label>
                        <span class="filter-option__count">${documents.filter(d => d.subcategory === sub).length}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }

            return `
              <div class="filter-option" 
                   id="filter-section-${safeId}"
                   data-filter-key="sections" 
                   data-filter-value="${sec.label}" 
                   role="checkbox" 
                   tabindex="0" 
                   aria-checked="false">
                <label class="filter-option__label" style="cursor:pointer">
                  <span class="filter-option__checkbox"></span>
                  <span style="color:var(--color-gold-light); font-weight: 600">${sec.label}</span>
                </label>
                <span class="filter-option__count">${countBySection(sec.label)}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div style="height:1px;background:rgba(201,168,76,0.12);margin:0.5rem 0 1rem"></div>

        <!-- Grupo: Épocas -->
        <div class="filter-group">
          <p class="filter-group__label">Épocas</p>
          ${Object.values(HISTORICAL_ERAS).map(era => `
            <div class="filter-option" data-filter-key="eraIds" data-filter-value="${era.id}" role="checkbox" tabindex="0" aria-checked="false">
              <label class="filter-option__label" style="cursor:pointer">
                <span class="filter-option__checkbox"></span>
                <span style="display:flex;align-items:center;gap:0.4rem">
                  <span style="width:7px;height:7px;border-radius:50%;background:${era.color};flex-shrink:0"></span>
                  ${era.label}
                </span>
              </label>
              <span class="filter-option__count">${countByEra(era.id)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Separador -->
        <div style="height:1px;background:rgba(201,168,76,0.12);margin:0.5rem 0 1rem"></div>

        <!-- Grupo: Dimensiones Temáticas -->
        <div class="filter-group">
          <p class="filter-group__label">Temáticas</p>
          ${Object.values(THEMATIC_DIMENSIONS).map(t => `
            <div class="filter-option" data-filter-key="themes" data-filter-value="${t.id}" role="checkbox" tabindex="0" aria-checked="false">
              <label class="filter-option__label" style="cursor:pointer">
                <span class="filter-option__checkbox"></span>
                ${t.label}
              </label>
              <span class="filter-option__count">${countByTheme(t.id)}</span>
            </div>
          `).join('')}
        </div>

        <div style="height:1px;background:rgba(201,168,76,0.12);margin:0.5rem 0 1rem"></div>

        <!-- Grupo: Tipo de Fuente -->
        <div class="filter-group">
          <p class="filter-group__label">Tipo de Fuente</p>
          ${Object.values(DOCUMENT_TYPES).map(type => `
            <div class="filter-option" data-filter-key="types" data-filter-value="${type}" role="checkbox" tabindex="0" aria-checked="false">
              <label class="filter-option__label" style="cursor:pointer;text-transform:capitalize">
                <span class="filter-option__checkbox"></span>
                ${type}
              </label>
              <span class="filter-option__count">${countByType(type)}</span>
            </div>
          `).join('')}
        </div>

        <div style="height:1px;background:rgba(201,168,76,0.12);margin:0.5rem 0 1rem"></div>

        <!-- Grupo: Idioma Original -->
        <div class="filter-group">
          <p class="filter-group__label">Idioma Original</p>
          ${Object.entries(langs).map(([code, name]) => `
            <div class="filter-option" data-filter-key="languages" data-filter-value="${code}" role="checkbox" tabindex="0" aria-checked="false">
              <label class="filter-option__label" style="cursor:pointer">
                <span class="filter-option__checkbox"></span>
                ${name}
              </label>
              <span class="filter-option__count">${countByLang(code)}</span>
            </div>
          `).join('')}
        </div>

        <div style="height:1px;background:rgba(201,168,76,0.12);margin:0.5rem 0 1rem"></div>

        <!-- Grupo: Rango de Fechas -->
        <div class="filter-group">
          <p class="filter-group__label">Rango de Fechas</p>
          <div class="date-range">
            <input
              type="range"
              id="year-from"
              min="711" max="2100"
              value="711"
              step="1"
              aria-label="Año inicial"
              style="width:100%; margin-bottom:0.5rem"
            />
            <input
              type="range"
              id="year-to"
              min="711" max="2100"
              value="2100"
              step="1"
              aria-label="Año final"
              style="width:100%"
            />
            <div class="date-range__labels">
              <span id="year-from-label">711</span>
              <span id="year-to-label">2100</span>
            </div>
          </div>
        </div>

      </aside>

      <!-- ─── ÁREA DE RESULTADOS ─── -->
      <div class="results-main">
        <div id="results-toolbar-container"></div>
        <div id="documents-grid-container"></div>
        <div id="pagination-container"></div>
      </div>

    </div>
  `;

  // ── Lógica de filtros checkbox ──
  panelEl.querySelectorAll('.filter-option').forEach(option => {
    function toggle() {
      const key   = option.dataset.filterKey;
      const value = option.dataset.filterValue;
      NoorState.dispatch('TOGGLE_FILTER_VALUE', { key, value });
    }
    option.addEventListener('click', toggle);
    option.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } });
  });

  // ── Lógica del range slider de fechas ──
  const fromSlider = document.getElementById('year-from');
  const toSlider   = document.getElementById('year-to');
  const fromLabel  = document.getElementById('year-from-label');
  const toLabel    = document.getElementById('year-to-label');

  function updateDateRange() {
    const from = parseInt(fromSlider.value);
    const to   = parseInt(toSlider.value);
    if (from > to) { fromSlider.value = to; }
    fromLabel.textContent = fromSlider.value;
    toLabel.textContent   = toSlider.value;
    NoorState.dispatch('SET_FILTER', {
      key: 'yearRange',
      value: [parseInt(fromSlider.value), parseInt(toSlider.value)]
    });
  }

  fromSlider?.addEventListener('input', updateDateRange);
  toSlider?.addEventListener('input', updateDateRange);

  // ── Sincronizar estado visual de checkboxes con el state ──
  NoorState.subscribe('*', (state) => {
    const filters = state.filters;
    const currentDocuments = state.documents; // Use updated docs

    // Helpers inside state callback for realtime updates
    const getCount = (key, value) => {
      if (key === 'sections') { 
        return currentDocuments.filter(doc =>
          doc.category === value ||
          (doc.localPath && doc.localPath.includes(value)) ||
          (doc.id && doc.id.startsWith('v2-') && value === '01_REVISTAS')
        ).length;
      }
      if (key === 'eraIds') return currentDocuments.filter(d => d.eraId === value).length;
      if (key === 'themes') return currentDocuments.filter(d => (d.themes || []).includes(value)).length;
      if (key === 'types') return currentDocuments.filter(d => d.type === value).length;
      if (key === 'languages') return currentDocuments.filter(d => d.language === value).length;
      if (key === 'subcategories') return currentDocuments.filter(d => d.subcategory === value).length;
      return 0;
    };

    panelEl.querySelectorAll('.filter-option').forEach(option => {
      const key   = option.dataset.filterKey;
      const value = option.dataset.filterValue;
      
      // Update check state
      const activeValues = filters[key] || [];
      const isChecked = Array.isArray(activeValues) && activeValues.includes(value);
      option.classList.toggle('checked', isChecked);
      option.setAttribute('aria-checked', isChecked.toString());
      
      // Update dynamic count
      const countEl = option.querySelector('.filter-option__count');
      if (countEl) countEl.textContent = getCount(key, value);
    });
  });

  // Renderizar el grid y toolbar (que viven dentro del results-main)
  renderResultsGrid();
  renderResultsToolbar();
}
