/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — State Manager (Estado Global)
 * ══════════════════════════════════════════════════════════
 *
 * Sistema de gestión de estado reactivo inspirado en Flux/Redux,
 * sin dependencias externas. Actúa como única fuente de verdad.
 *
 * PATRÓN: Observer (publish/subscribe)
 */

const NoorState = (() => {
  // ── Estado inicial ──
  let _state = {
    // Datos cargados
    documents: [],
    events: [],
    isLoading: false,
    isSyncing: false,
    error: null,

    // Filtros activos (basado en FilterStateSchema)
    filters: {
      query: '',
      eraIds: [],
      themes: [],
      regions: [],
      types: [],
      languages: [],
      sections: [],
      yearRange: [711, 2100],
      sortBy: 'year_asc',
      viewMode: 'grid',
      page: 1,
      perPage: 24,
    },

    // UI state
    activeTaxonomyTab: 'eras', // 'eras' | 'themes' | 'regions' | 'types'
    filtersOpen: false,        // Mobile: panel abierto
    selectedDocument: null,    // Para el visor (Fase 2)
  };

  // ── Suscriptores (observadores) ──
  const _subscribers = {};

  // ── API pública ──
  return {
    /**
     * getState()
     * Retorna una copia inmutable del estado actual.
     */
    getState() {
      return JSON.parse(JSON.stringify(_state));
    },

    /**
     * dispatch(action, payload)
     * Actualiza el estado y notifica a los suscriptores.
     *
     * Acciones disponibles:
     *   SET_DOCUMENTS, SET_LOADING, SET_ERROR,
     *   SET_FILTER, RESET_FILTERS, SET_VIEW_MODE,
     *   SET_ACTIVE_TAX_TAB, TOGGLE_FILTERS,
     *   SELECT_DOCUMENT, SET_SORT
     */
    dispatch(action, payload) {
      switch (action) {
        case 'SET_DOCUMENTS':
          // Enriquecimiento de Datos: Generar etiquetas de década automáticamente
          const enrichedDocs = (payload || []).map(doc => {
            // Auto-categorización por ID o Ruta
            if (!doc.category) {
              if (doc.id && (doc.id.startsWith('v2-') || doc.id.startsWith('rev-v2') || doc.id.startsWith('local-rev'))) {
                doc.category = '01_REVISTAS';
              } else if (doc.id && (doc.id.startsWith('local-lib') || doc.type === 'book')) {
                doc.category = '02_LIBROS';
              } else if (doc.id && (doc.id.startsWith('local-rec'))) {
                doc.category = '03_RECETARIO';
              } else if (doc.localPath) {
                if (doc.localPath.includes('01_REVISTAS')) doc.category = '01_REVISTAS';
                if (doc.localPath.includes('02_LIBROS'))   doc.category = '02_LIBROS';
                if (doc.localPath.includes('03_RECETARIO')) doc.category = '03_RECETARIO';
              }
            }
            if (!doc.language) doc.language = 'es';

            if (doc.year) {
              const decade = `Década ${Math.floor(doc.year / 10) * 10}`;
              if (!doc.tags) doc.tags = [];
              if (!doc.tags.includes(decade)) {
                doc.tags.push(decade);
              }
            }
            return doc;
          });
          _state.documents = enrichedDocs;
          _state.isLoading = false;
          break;

        case 'SET_EVENTS':
          _state.events = payload;
          break;

        case 'SET_LOADING':
          _state.isLoading = payload;
          break;

        case 'SET_SYNCING':
          _state.isSyncing = payload;
          break;

        case 'SET_ERROR':
          _state.error = payload;
          _state.isLoading = false;
          console.error('[NoorState] Error:', payload);
          break;

        case 'SET_FILTER':
          // payload = { key: 'eraIds', value: ['S10', 'S11'] }
          _state.filters[payload.key] = payload.value;
          _state.filters.page = 1; // reset paginación al filtrar
          break;

        case 'TOGGLE_FILTER_VALUE':
          // payload = { key: 'themes', value: 'CUL' }
          const arr = [..._state.filters[payload.key]];
          const idx = arr.indexOf(payload.value);
          if (idx === -1) arr.push(payload.value);
          else arr.splice(idx, 1);
          _state.filters[payload.key] = arr;
          _state.filters.page = 1;
          break;

        case 'RESET_FILTERS':
          _state.filters = {
            query: '',
            eraIds: [],
            themes: [],
            regions: [],
            types: [],
            languages: [],
            yearRange: [711, 2100],
            sortBy: 'year_asc',
            viewMode: _state.filters.viewMode, // preserva modo de vista
            sections: [],
            page: 1,
            perPage: 24,
          };
          break;

        case 'SET_VIEW_MODE':
          _state.filters.viewMode = payload; // 'grid' | 'list'
          break;

        case 'SET_SORT':
          _state.filters.sortBy = payload;
          _state.filters.page = 1;
          break;

        case 'SET_PAGE':
          _state.filters.page = payload;
          break;

        case 'SET_ACTIVE_TAX_TAB':
          _state.activeTaxonomyTab = payload;
          break;

        case 'TOGGLE_FILTERS':
          _state.filtersOpen = !_state.filtersOpen;
          break;

        case 'SELECT_DOCUMENT':
          _state.selectedDocument = payload; // null para cerrar
          break;

        default:
          console.warn('[NoorState] Acción desconocida:', action);
          return;
      }

      // Notificar a todos los suscriptores
      this._notify(action);
    },

    /**
     * subscribe(eventName, callback)
     * Escucha cambios de estado.
     *
     * @param {string}   eventName - acción o '*' para todo
     * @param {Function} callback  - recibe el nuevo estado
     * @returns {Function} unsubscribe function
     */
    subscribe(eventName, callback) {
      if (!_subscribers[eventName]) _subscribers[eventName] = [];
      _subscribers[eventName].push(callback);
      return () => {
        _subscribers[eventName] = _subscribers[eventName].filter(cb => cb !== callback);
      };
    },

    _notify(action) {
      const state = this.getState();
      // Notificar suscriptores de esta acción específica
      (_subscribers[action] || []).forEach(cb => cb(state));
      // Notificar suscriptores globales
      (_subscribers['*'] || []).forEach(cb => cb(state, action));
    },

    /**
     * getFilteredDocuments()
     * Aplica todos los filtros activos y retorna los documentos filtrados.
     * Este es el motor de búsqueda del cliente.
     *
     * @returns {{ results: NoorDocument[], total: number, totalPages: number }}
     */
    getFilteredDocuments() {
      const { documents, filters } = _state;
      let results = [...documents];

      // ── Filtro de texto libre ──
      if (filters.query.trim()) {
        const q = filters.query.toLowerCase();
        results = results.filter(doc =>
          doc.title.toLowerCase().includes(q) ||
          (doc.description || '').toLowerCase().includes(q) ||
          (doc.tags || []).some(t => t.toLowerCase().includes(q)) ||
          ((doc.metadata && doc.metadata.creator) || '').toLowerCase().includes(q) ||
          (doc.localPath || '').toLowerCase().includes(q) ||
          (doc.regions || []).some(rKey => {
            const label = window.NoorSchema.REGIONS[rKey] || '';
            return label.toLowerCase().includes(q) || rKey.toLowerCase().includes(q);
          })
        );
      }

      // ── Filtro por épocas ──
      if (filters.eraIds.length > 0) {
        results = results.filter(doc => filters.eraIds.includes(doc.eraId));
      }

      // ── Filtro por temas ──
      if (filters.themes.length > 0) {
        results = results.filter(doc =>
          filters.themes.some(theme => (doc.themes || []).includes(theme))
        );
      }

      // ── Filtro por regiones ──
      if (filters.regions.length > 0) {
        results = results.filter(doc =>
          filters.regions.some(region => (doc.regions || []).includes(region))
        );
      }

      // ── Filtro por tipo de documento ──
      if (filters.types.length > 0) {
        results = results.filter(doc => filters.types.includes(doc.type));
      }

      // ── Filtro por idioma ──
      if (filters.languages.length > 0) {
        results = results.filter(doc => filters.languages.includes(doc.language));
      }

      // ── Filtro por secciones (01_REVISTAS, etc) ──
      if (filters.sections.length > 0) {
        results = results.filter(doc => {
          return filters.sections.some(secName => 
            (doc.localPath && doc.localPath.includes(secName)) || 
            (doc.header && doc.header.includes(secName)) ||
            (doc.parentFolder && doc.parentFolder.includes(secName)) ||
            (doc.category && doc.category.includes(secName)) ||
            (doc.id && doc.id.startsWith('v2-') && secName === '01_REVISTAS') // Fallback para mock v2
          );
        });
      }

      // ── Filtro por rango de año ──
      const [yearFrom, yearTo] = filters.yearRange;
      results = results.filter(doc => doc.year >= yearFrom && doc.year <= yearTo);

      // ── Ordenamiento ──
      switch (filters.sortBy) {
        case 'year_asc':   results.sort((a, b) => a.year - b.year); break;
        case 'year_desc':  results.sort((a, b) => b.year - a.year); break;
        case 'title':      results.sort((a, b) => a.title.localeCompare(b.title, 'es')); break;
        case 'relevance':  break; // Por defecto, sin reordenar
      }

      // ── Paginación ──
      const total = results.length;
      const totalPages = Math.ceil(total / filters.perPage);
      const start = (filters.page - 1) * filters.perPage;
      const paginatedResults = results.slice(start, start + filters.perPage);

      if (total === 0 && _state.documents.length > 0) {
        console.warn('[NoorState] Grid vacío pero hay docs. Aplicando diagnóstico...');
        console.log('Filtros activos:', JSON.stringify(filters));
        console.log('Ejemplo doc 0:', JSON.stringify(_state.documents[0]));
      }

      return { results: paginatedResults, total, totalPages };
    },
  };
})();

window.NoorState = NoorState;
console.log('[NoorState] ✓ State Manager inicializado.');
