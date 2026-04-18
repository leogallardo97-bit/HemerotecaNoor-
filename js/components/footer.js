/**
 * FOOTER COMPONENT
 */
function renderFooter() {
  const el = document.getElementById('app-footer');
  if (!el) return;

  el.innerHTML = `
    <footer class="noor-footer" role="contentinfo" aria-label="Pie de página">
      <div class="noor-footer__grid">
        <!-- Columna: Marca -->
        <div>
          <p class="noor-footer__brand-name">Archivo Noor</p>
          <p class="noor-footer__brand-desc">
            Hemeroteca histórica digital dedicada al estudio de Al-Ándalus y su legado cultural, político y científico.
            Un proyecto de investigación doctoral sobre el patrimonio documental andalusí.
          </p>
        </div>

        <!-- Columna: Explorar -->
        <div>
          <p class="noor-footer__col-title">Explorar</p>
          <a href="#" class="noor-footer__link">Por Épocas</a>
          <a href="#" class="noor-footer__link">Por Temáticas</a>
          <a href="#" class="noor-footer__link">Por Regiones</a>
          <a href="#" class="noor-footer__link">Línea de Tiempo</a>
          <a href="#" class="noor-footer__link">Mapa Histórico</a>
        </div>

        <!-- Columna: Colecciones -->
        <div>
          <p class="noor-footer__col-title">Colecciones</p>
          <a href="#" class="noor-footer__link">Califato de Córdoba</a>
          <a href="#" class="noor-footer__link">Reinos de Taifas</a>
          <a href="#" class="noor-footer__link">Al-Ándalus Científico</a>
          <a href="#" class="noor-footer__link">Reino Nazarí</a>
          <a href="#" class="noor-footer__link">Manuscritos Árabes</a>
        </div>

        <!-- Columna: Proyecto -->
        <div>
          <p class="noor-footer__col-title">Proyecto</p>
          <a href="#" class="noor-footer__link">Sobre Noor</a>
          <a href="#" class="noor-footer__link">Metodología</a>
          <a href="#" class="noor-footer__link">Fuentes y Archivos</a>
          <a href="#" class="noor-footer__link">Contacto</a>
        </div>
      </div>

      <div class="noor-footer__bottom">
        <span>© 2026 Archivo Noor — Proyecto de Investigación Doctoral</span>
        <span>Contenidos bajo licencia Creative Commons BY-NC-SA 4.0</span>
      </div>
    </footer>
  `;
}
