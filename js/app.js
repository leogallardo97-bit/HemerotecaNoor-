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

// ── Captura de Errores Globales ──
window.onerror = function(msg, url, lineNo, columnNo, error) {
  const meta = `[Error Fatal] ${msg}\nArchivo: ${url}\nLínea: ${lineNo}`;
  console.error(meta, error);
  return false;
};

/**
 * window.forceOpen(driveId)
 * SISTEMA DE EMERGENCIA: Apertura directa del visor.
 */
window.forceOpen = function(idOrDriveId) {
  console.log('[Noor-SOS] Ejecutando apertura de emergencia:', idOrDriveId);
  
  const state = (window.NoorState && window.NoorState.getState) ? window.NoorState.getState() : { documents: [] };
  let doc = state.documents.find(d => 
    d.id === idOrDriveId || 
    (d.media && d.media.driveFileId === idOrDriveId) || 
    d.driveId === idOrDriveId
  );
  
  if (!doc && window.NoorMockData) {
    doc = window.NoorMockData.find(d => d.id === idOrDriveId || d.driveId === idOrDriveId);
  }

  if (!doc && idOrDriveId && idOrDriveId.length > 20) {
    doc = {
      id: 'SOS-' + idOrDriveId,
      title: 'Documento Recuperado (S.O.S)',
      driveId: idOrDriveId,
      type: 'newspaper',
      _source: 'emergency'
    };
  }

  if (doc && window.DocumentViewer) {
    window.DocumentViewer.open(doc);
    
    const driveIdForBack = doc.driveId || (doc.media && doc.media.driveFileId);
    if (driveIdForBack && !driveIdForBack.startsWith('v2-')) {
        setTimeout(() => {
            const overlay = document.getElementById('viewer-overlay');
            if (overlay && (!overlay.classList.contains('open') || window.getComputedStyle(overlay).opacity === '0')) {
                console.warn('[Noor-SOS] Modal no manifestado. Intentando apertura externa...');
                window.open(`https://drive.google.com/file/d/${driveIdForBack}/preview`, '_blank');
            }
        }, 2000);
    }
  } else {
    if (idOrDriveId && idOrDriveId.length > 20 && !idOrDriveId.startsWith('v2-')) {
      window.open(`https://drive.google.com/file/d/${idOrDriveId}/preview`, '_blank');
    } else {
      alert("Error Crítico: No se pudo localizar el recurso para el ID " + idOrDriveId);
    }
  }
};

// ── Delegación Universal de Clics (Anti-Errores de DOM) ──
document.addEventListener('click', (e) => {
  if (e.target.closest('.doc-card__report-btn') || e.target.closest('.vbtn-report')) return;

  const card = e.target.closest('.doc-card');
  if (card) {
    const id = card.dataset.driveId || card.dataset.docId;
    console.log('[Noor-SOS] Clic detectado en:', id);
    window.forceOpen(id);
  }
});

(async function initNoorApp() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║    ARCHIVO NOOR — v1.0.0 (Fase 5 ✓)    ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('[App] Iniciando...');

  // ── Limpieza Critica de Service Worker (Plan de Emergencia) ──
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for(let registration of registrations) {
        registration.unregister().then(() => console.log('[SW] ✗ Antiguo ServiceWorker desregistrado.'));
      }
    });
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
    // ── Paso 2: Inicializar persistencia y conectores ──
    await NoorDB.init();
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

  // ── Fase 4: Panel de notas + Admin Dashboard ──
  await ResearchPanel.init();
  await NoorAdmin.init();
  
  // ── Ayuda y Guía ──
  if (window.HelpModal) window.HelpModal.init();

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

  // ── Vincular botones del header (Pre-render para mayor reactividad) ──
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('#nav-acceder');
    if (btn) {
      e.preventDefault();
      console.log('[App] Solicitando acceso al Admin...');
      if (window.NoorAdmin) {
        NoorAdmin.toggle(true);
      } else {
        console.warn('[App] El módulo Admin no está listo aún.');
      }
    }
  });

  document.getElementById('nav-colecciones')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.NoorExplore) NoorExplore.toggle();
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

// ── SISTEMA DE MANIOBRA FINAL (Simplificación Extrema) ──
window.onclick = (e) => {
  const card = e.target.closest('.doc-card');
  if (card) {
    const driveId = card.dataset.driveId;
    const docId = card.dataset.docId;
    const targetId = driveId || docId;

    console.log('[SOS-CLICK] Clic Manual Detectado:', targetId);
    alert('Clic detectado en: ' + targetId);

    // Forzar Apertura del Visor (Brute Force)
    const modal = document.getElementById('app-viewer-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.cssText = "display: flex !important; visibility: visible !important; opacity: 1 !important; pointer-events: all !important;";
        
        // Inyectar Iframe de Drive Directo
        if (targetId && !targetId.startsWith('v2-')) {
            modal.innerHTML = `
                <div style="position:relative; width:100%; height:100%; background:#000;">
                    <button onclick="this.parentElement.parentElement.style.display='none'" 
                            style="position:absolute; top:20px; right:20px; z-index:10001; background:red; color:white; border:none; padding:10px 20px; cursor:pointer; font-weight:bold; border-radius:4px;">
                        CERRAR VISOR
                    </button>
                    <iframe src="https://drive.google.com/file/d/${targetId}/preview" 
                            style="width:100%; height:100%; border:none;" 
                            allow="autoplay"></iframe>
                </div>
            `;
        } else {
            console.warn('[SOS] No hay Drive ID válido o es un mock v2. Usando fallback...');
            window.open(`https://drive.google.com/file/d/${targetId}/preview`, '_blank');
        }
    }
  }
};

})(); // Fin de IIFE
