/**
 * HEADER COMPONENT
 * Barra superior: logo, búsqueda rápida, navegación de usuario.
 */
function renderHeader() {
  const el = document.getElementById('app-header');
  if (!el) return;

  el.innerHTML = `
    <header class="noor-header">
      <!-- Logo -->
      <a href="#" class="noor-logo" id="logo-link" aria-label="Archivo Noor — Inicio">
        <span class="noor-logo__name">Archivo Noor</span>
        <span class="noor-logo__sub">Hemeroteca Histórica Digital</span>
      </a>

      <div class="noor-divider" aria-hidden="true"></div>

      <!-- Búsqueda rápida del header -->
      <div class="header-search">
        <i data-lucide="search" width="14" height="14" class="header-search__icon" aria-hidden="true"></i>
        <input
          type="search"
          id="header-search-input"
          class="header-search__input"
          placeholder="Buscar documentos, eventos, personas…"
          autocomplete="off"
          aria-label="Búsqueda rápida"
        />
      </div>

      <!-- Navegación de usuario -->
      <nav class="header-nav" aria-label="Navegación principal">
        <a href="#" class="header-nav__btn" id="nav-colecciones">
          <i data-lucide="library" width="14" height="14"></i>
          Colecciones
        </a>
        <a href="#" class="header-nav__btn" id="nav-eventos">
          <i data-lucide="calendar-days" width="14" height="14"></i>
          Eventos
        </a>
        <a href="#" class="header-nav__btn" id="nav-mapas">
          <i data-lucide="map" width="14" height="14"></i>
          Mapas
        </a>

        <div class="noor-divider" aria-hidden="true" style="margin: 0 0.25rem;"></div>

        <button class="header-nav__btn" id="nav-drive-status" title="Estado de conexión con Google Drive">
          <i data-lucide="hard-drive" width="14" height="14"></i>
          <span id="drive-status-label" style="font-size:0.72rem; color: var(--color-sepia);">DEV</span>
        </button>

        <a href="#" class="header-nav__btn header-nav__btn--cta" id="nav-acceder">
          <i data-lucide="log-in" width="14" height="14"></i>
          Accede con tu cuenta
        </a>
      </nav>
    </header>
  `;

  // Inicializar íconos Lucide en este componente
  if (window.lucide) lucide.createIcons();

  // ── Lógica de búsqueda rápida ──
  const searchInput = document.getElementById('header-search-input');
  let _searchTimer;

  searchInput?.addEventListener('input', (e) => {
    clearTimeout(_searchTimer);
    _searchTimer = setTimeout(() => {
      NoorState.dispatch('SET_FILTER', { key: 'query', value: e.target.value });
      // Sincronizar con el campo de búsqueda principal
      const heroInput = document.getElementById('search-hero-input');
      if (heroInput) heroInput.value = e.target.value;
    }, 320); // debounce 320ms
  });

  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') NoorState.dispatch('SET_FILTER', { key: 'query', value: e.target.value });
  });
}
