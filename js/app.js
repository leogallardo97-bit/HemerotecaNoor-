/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Bootstrap / Punto de Entrada de la App
 * ══════════════════════════════════════════════════════════
 *
 * Este archivo orquesta la inicialización de todos los módulos
 * en el orden correcto. Es equivalente al main.jsx de React.
 *
 * FLUJO DE INICIALIZACIÓN:
 *   1. DriveConnector.initialize()  → Carga datos (dev: mock, prod: Drive)
 *   2. NoorState.dispatch()         → Carga documentos en el estado global
 *   3. Renderiza todos los componentes UI
 *   4. NoorRouter.init()            → Activa la navegación por URL
 */

(async function initNoorApp() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║    ARCHIVO NOOR — v1.0.0 (Fase 5 ✓)    ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('[App] Iniciando...');

  // ── Service Worker (caché offline + producción) ──
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('[SW] ✓ Registrado. Scope:', reg.scope))
      .catch(err => console.warn('[SW] No se pudo registrar:', err));
  }

  // ── Inicializar autenticación del Admin ──
  await NoorAuth.init();

  // ── Pre-conectar CDNs para mejorar velocidad de carga ──
  ['https://cdn.jsdelivr.net', 'https://unpkg.com',
   'https://tiles.stadiamaps.com', 'https://accounts.google.com'].forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect'; link.href = origin; link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // ── Paso 1: Mostrar estado de carga inicial ──
  NoorState.dispatch('SET_LOADING', true);

  try {
    // ── Paso 2: Inicializar el conector de datos ──
    await DriveConnector.initialize();

    // ── Paso 3: Cargar documentos y eventos ──
    const documents = await DriveConnector.fetchMasterIndex();
    NoorState.dispatch('SET_DOCUMENTS', documents);
    NoorState.dispatch('SET_EVENTS', window.NoorMockData?.events || []);

    console.log(`[App] ✓ ${documents.length} documentos cargados en el estado.`);

  } catch (err) {
    NoorState.dispatch('SET_ERROR', err.message || 'Error al cargar los datos.');
    console.error('[App] ✗ Error de carga:', err);
  }

  // ── Paso 4: Renderizar componentes UI (en orden) ──
  console.log('[App] Renderizando componentes UI...');

  renderHeader();       // #app-header
  renderTaxonomyNav();  // #app-taxonomy-nav
  renderSearchBar();    // #app-search-bar
  NoorExplore.init();   // #app-explore (Fase 3)
  renderFiltersPanel();
  renderFooter();

  // ── Fase 2: Visor de documentos ──
  await DocumentViewer.init();

  // ── Fase 4: Panel de notas + Admin Dashboard (con protección de contraseña) ──
  await ResearchPanel.init();
  await NoorAdmin.init();

  // ── Reemplazar el toggle del admin para requerir autenticación ──
  const _originalToggle = NoorAdmin.toggle;
  NoorAdmin.toggle = async function(show) {
    if (show === false) { _originalToggle(false); return; }
    if (NoorAuth.isAuthenticated()) {
      _originalToggle(true);
    } else {
      const ok = await NoorAuth.showLoginPrompt();
      if (ok) _originalToggle(true);
    }
  };

  // ── Vincular botones del header ──
  document.getElementById('nav-colecciones')?.addEventListener('click', (e) => {
    e.preventDefault();
    NoorExplore.toggle();
  });
  document.getElementById('nav-acceder')?.addEventListener('click', (e) => {
    e.preventDefault();
    NoorAdmin.toggle(true);
  });
  // Botón de notas desde el visor (añadido dinámicamente en vbtn-notes)
  document.addEventListener('click', (e) => {
    if (e.target.closest('#vbtn-notes')) {
      ResearchPanel.open();
    }
  });

  // ── Paso 5: Inicializar el router (parsea el hash actual) ──
  NoorRouter.init();

  // ── Suscribirse a cambios en la selección de documentos para mostrar la vista editorial ──
  NoorState.subscribe('selectedDocument', (state) => {
    if (state.selectedDocument) {
      ArticleView.render(state.selectedDocument);
    }
  });

  NoorState.dispatch('SET_LOADING', false);
  console.log('[App] ✓ Interfaz completamente inicializada con vista editorial.');
  
  // ── Iniciar Tour Guiado (Solo primera visita) ──
  if (window.NoorTour) NoorTour.init();

  console.log('[App] Admin Dashboard: Ctrl+Shift+A');
  console.log('[App] Drive Connector: js/data/drive-connector.js');

})();
