/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Help Modal Component
 * ══════════════════════════════════════════════════════════
 */

const HelpModal = (() => {
  let _isOpen = false;

  function init() {
    const container = document.createElement('div');
    container.id = 'help-modal-container';
    container.className = 'help-modal-overlay';
    container.innerHTML = `
      <div class="help-modal-content anim-slide-up">
        <header class="help-modal-header">
          <div class="header-titles">
            <h1 class="help-title">Guía del Investigador</h1>
            <p class="help-subtitle">Archivo Noor — Volumen 2 (Hemeroteca Digital)</p>
          </div>
          <button class="help-close" id="help-close-btn">&times;</button>
        </header>

        <div class="help-modal-body">
          <section class="help-section">
            <h3 class="help-section-title"><i data-lucide="map-pin"></i> Exploración Geo-Temporal</h3>
            <p>Utiliza el <strong>Mapa Histórico</strong> para localizar el origen de los documentos y la <strong>Línea de Tiempo</strong> para navegar cronológicamente por el Siglo XX y épocas andalusíes.</p>
          </section>

          <section class="help-section">
            <h3 class="help-section-title"><i data-lucide="eye"></i> Herramientas del Visor</h3>
            <p>Dentro del visor de documentos, puedes:</p>
            <ul>
              <li><strong>Contraste:</strong> Ajusta el control deslizante para mejorar la legibilidad de manuscritos antiguos.</li>
              <li><strong>Pantalla Completa:</strong> Usa el icono de expansión para una lectura inmersiva.</li>
              <li><strong>Colecciones:</strong> Añade documentos a tus carpetas personales de investigación.</li>
            </ul>
          </section>

          <section class="help-section">
            <h3 class="help-section-title"><i data-lucide="alert-triangle"></i> Revisión Colaborativa</h3>
            <p>Si encuentras un error en los metadatos o una página dañada, utiliza el botón <strong>"Reportar error"</strong> en el pie del documento. Tus sugerencias son vitales para el equipo doctoral.</p>
          </section>
        </div>

        <footer class="help-modal-footer">
          <button class="help-btn-primary" id="help-modal-got-it">Comprendido</button>
        </footer>
      </div>
    `;
    document.body.appendChild(container);

    // Eventos
    document.getElementById('help-close-btn').addEventListener('click', toggle);
    document.getElementById('help-modal-got-it').addEventListener('click', toggle);
    container.addEventListener('click', (e) => { if(e.target === container) toggle(); });
    
    // Lucide
    if (window.lucide) lucide.createIcons();
  }

  function toggle() {
    const container = document.getElementById('help-modal-container');
    if (!container) return;
    _isOpen = !_isOpen;
    container.classList.toggle('active', _isOpen);
    
    // Guardar que el usuario ya lo vio
    if (!_isOpen) localStorage.setItem('noor_help_seen', 'true');
  }

  return { init, toggle };
})();

window.HelpModal = HelpModal;
