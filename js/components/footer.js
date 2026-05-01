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
            Hemeroteca digital y espacio de divulgación histórica del Universo Noor. Trazamos la evolución cultural, social y política de Al-Ándalus a través de la gastronomía, conectando el arraigo a la tierra y la trayectoria culinaria de Paco Morales con la investigación documental de acceso abierto.
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
          <a href="https://noorrestaurant.es/" class="noor-footer__link" target="_blank" rel="noopener noreferrer">Contacto</a>
        </div>
      </div>

      <div class="noor-footer__bottom">
        <div style="display:flex; align-items:center; gap:0.5rem">
          <span style="display:inline-block; width:8px; height:8px; background:var(--color-gold); border-radius:50%; box-shadow: 0 0 8px var(--color-gold); animation: pulse 2s infinite"></span>
          <span style="font-size:0.65rem; text-transform:uppercase; letter-spacing:0.1em; color:rgba(229,229,229,0.5)">Sincronizado con Google Drive (Vol. 2)</span>
        </div>
        <span>© 2026 Universo Noor — Hemeroteca Histórica.</span>
        <span>Contenidos bajo licencia Creative Commons BY-NC-SA 4.0</span>
      </div>

    </footer>
  `;
}
