/**
 * ROUTER MODULE
 * Gestión de URL y navegación sin recarga (History API).
 * Permite que cada vista/filtro tenga su propia URL compartible.
 *
 * EJEMPLOS DE URL:
 *   /#/era/S10              → Documentos del Siglo X
 *   /#/era/S10?theme=CUL   → Siglo X, solo Cultural
 *   /#/doc/doc-s10-001     → Visor de documento específico
 *   /#/search?q=almanzor   → Resultados de búsqueda
 */

const NoorRouter = (() => {
  function _parseHash() {
    const hash = window.location.hash.replace('#', '') || '/';
    const [path, queryString] = hash.split('?');
    const params = new URLSearchParams(queryString || '');
    const segments = path.split('/').filter(Boolean);
    return { path, segments, params };
  }

  function _applyRouteToState(route) {
    const { segments, params } = route;

    // Limpiar filtros previos al navegar
    NoorState.dispatch('RESET_FILTERS');

    if (segments[0] === 'era' && segments[1]) {
      NoorState.dispatch('SET_FILTER', { key: 'eraIds', value: [segments[1]] });
    }

    if (segments[0] === 'doc' && segments[1]) {
      const doc = (window.NoorMockData?.documents || []).find(d => d.id === segments[1]);
      if (doc) NoorState.dispatch('SELECT_DOCUMENT', doc);
    }

    if (segments[0] === 'search' || params.get('q')) {
      NoorState.dispatch('SET_FILTER', { key: 'query', value: params.get('q') || '' });
    }

    if (params.get('theme')) {
      NoorState.dispatch('SET_FILTER', { key: 'themes', value: [params.get('theme')] });
    }

    if (params.get('region')) {
      NoorState.dispatch('SET_FILTER', { key: 'regions', value: [params.get('region')] });
    }
  }

  return {
    /**
     * Inicializa el router y escucha cambios de hash.
     */
    init() {
      window.addEventListener('hashchange', () => {
        _applyRouteToState(_parseHash());
      });

      // Aplicar ruta inicial
      _applyRouteToState(_parseHash());
      console.log('[Router] ✓ Inicializado en:', window.location.hash || '/');
    },

    /**
     * navigate(path)
     * Navega programáticamente actualizando el hash.
     *
     * @param {string} path - ej: '/era/S10' o '/search?q=almanzor'
     */
    navigate(path) {
      window.location.hash = path;
    },

    /**
     * buildUrl(filters)
     * Genera una URL compartible a partir del estado de filtros actual.
     */
    buildUrl(filters) {
      const params = new URLSearchParams();
      if (filters.query)           params.set('q', filters.query);
      if (filters.themes.length)   params.set('theme', filters.themes.join(','));
      if (filters.regions.length)  params.set('region', filters.regions.join(','));

      const base = filters.eraIds.length ? `/era/${filters.eraIds.join(',')}` : '/';
      const query = params.toString() ? `?${params.toString()}` : '';
      return `#${base}${query}`;
    },
  };
})();

window.NoorRouter = NoorRouter;
