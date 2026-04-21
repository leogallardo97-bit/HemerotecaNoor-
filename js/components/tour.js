/**
 * NOOR ARCHIVE — GUIDED TOUR (V1)
 * Powered by Shepherd.js
 */

const NoorTour = (() => {
  let tour = null;

  function init() {
    // Solo mostrar si es la primera vez que entran al sitio (o tras reset)
    const hasSeenTour = localStorage.getItem('noor_tour_seen');
    if (hasSeenTour) return;

    _createTour();
    
    // Pequeño delay para asegurar que el DOM esté listo y animaciones iniciales terminen
    setTimeout(() => {
      tour.start();
      localStorage.setItem('noor_tour_seen', 'true');
    }, 2000);
  }

  function _createTour() {
    tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'noor-tour-theme',
        scrollTo: { behavior: 'smooth', block: 'center' },
        cancelIcon: { enabled: true }
      }
    });

    // --- PASO 1: BUSCADOR ---
    tour.addStep({
      id: 'step-search',
      text: '<strong>Buscador Deep-Search:</strong> Prueba a escribir "Qurtuba" o "Jayal" aquí. Los resultados se filtran al instante.',
      attachTo: { element: '#search-hero-input', on: 'bottom' },
      buttons: [
        { text: 'Siguiente', action: tour.next, classes: 'shepherd-button-primary' }
      ]
    });

    // --- PASO 2: MAPA HISTÓRICO ---
    tour.addStep({
      id: 'step-map',
      text: '<strong>Mapa Histórico:</strong> Nuestro punto fuerte para la <strong>Geopolítica</strong>. Descubre dónde se crearon los documentos y visualiza los núcleos de poder andalusí en el territorio.',
      attachTo: { element: '.explore-tab[data-tab="map"]', on: 'bottom' },
      buttons: [
        { text: 'Atrás', action: tour.back, classes: 'shepherd-button-secondary' },
        { text: 'Siguiente', action: tour.next, classes: 'shepherd-button-primary' }
      ]
    });

    // --- PASO 3: LÍNEA DE TIEMPO ---
    tour.addStep({
      id: 'step-timeline',
      text: '<strong>Línea de Tiempo:</strong> A diferencia del mapa, aquí exploras la <strong>Evolución Cronológica</strong>. Desplázate por los siglos para entender el contexto histórico de cada manuscrito.',
      attachTo: { element: '.explore-tab[data-tab="timeline"]', on: 'bottom' },
      buttons: [
        { text: 'Atrás', action: tour.back, classes: 'shepherd-button-secondary' },
        { text: 'Siguiente', action: tour.next, classes: 'shepherd-button-primary' }
      ]
    });

    // --- PASO 4: EL CUADERNO ---
    tour.addStep({
      id: 'step-card',
      text: '<strong>El Cuaderno:</strong> Haz clic en cualquier tarjeta para abrir el visor interactivo, usar el zoom y consultar metadatos.',
      attachTo: { element: '#documents-grid-container', on: 'top' },
      buttons: [
        { text: 'Atrás', action: tour.back, classes: 'shepherd-button-secondary' },
        { text: 'Finalizar', action: tour.complete, classes: 'shepherd-button-primary' }
      ]
    });
  }

  return { init };
})();

// Estilos dinámicos para el tour para que encajen con la estética Noor
const tourStyles = `
  .noor-tour-theme {
    background: var(--color-ink);
    border: 1px solid var(--color-gold);
    color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.8);
    font-family: var(--font-sans);
  }
  .noor-tour-theme .shepherd-text {
    line-height: 1.6;
    font-size: 0.95rem;
  }
  .noor-tour-theme .shepherd-button-primary {
    background: var(--color-gold) !important;
    color: var(--color-ink) !important;
    font-weight: 600;
    border-radius: 4px;
    padding: 0.4rem 1rem;
    border: none;
    cursor: pointer;
  }
  .noor-tour-theme .shepherd-button-secondary {
    background: transparent !important;
    color: var(--color-sepia) !important;
    border: 1px solid var(--color-sepia) !important;
    border-radius: 4px;
    padding: 0.4rem 1rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  .shepherd-modal-overlay-container {
    opacity: 0.4 !important;
  }
`;

const styleEl = document.createElement('style');
styleEl.textContent = tourStyles;
document.head.appendChild(styleEl);

window.NoorTour = NoorTour;
