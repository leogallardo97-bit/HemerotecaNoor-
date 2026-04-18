/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Admin Dashboard (Panel de Gestión)
 * ══════════════════════════════════════════════════════════
 *
 * Panel de administración para el investigador-archivista.
 * Permite añadir/editar documentos conectando IDs de Google
 * Drive sin tocar el código fuente.
 *
 * FLUJO:
 *   1. Abre el Admin (Ctrl+Shift+A o botón en el header)
 *   2. Rellena el formulario de ingesta
 *   3. El sistema genera el objeto NoorDocument
 *   4. Al guardar, se persiste en IndexedDB (NoorDB.docMeta)
 *   5. El portal lo combina con mock-data en tiempo real
 *   6. Puedes exportar el JSON generado para incorporarlo al
 *      metadatos.json de Drive en producción.
 *
 * ACCESO: Ctrl+Shift+A desde cualquier pantalla.
 */

// ─────────────────────────────────────────────────────────
// ESTADO INTERNO
// ─────────────────────────────────────────────────────────
const _adminState = {
  isOpen:       false,
  activeSection: 'dashboard',
  editingDocId:  null,
  pageIds:       [''],  // IDs de las páginas del documento en ingesta
};

// ─────────────────────────────────────────────────────────
// INICIALIZACIÓN
// ─────────────────────────────────────────────────────────

async function initAdmin() {
  await NoorDB.init();

  const mount = document.getElementById('app-admin');
  if (!mount) return;
  mount.innerHTML = _buildAdminHTML();

  _bindAdminEvents();

  // Atajo de teclado: Ctrl+Shift+A → abrir admin
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      toggleAdmin();
    }
  });

  console.log('[Admin] ✓ Panel de administración inicializado. Acceso: Ctrl+Shift+A');
}

// ─────────────────────────────────────────────────────────
// CONSTRUCCIÓN DEL HTML
// ─────────────────────────────────────────────────────────

function _buildAdminHTML() {
  const { HISTORICAL_ERAS, THEMATIC_DIMENSIONS, REGIONS, DOCUMENT_TYPES } = window.NoorSchema;

  const eraOptions = Object.entries(HISTORICAL_ERAS)
    .map(([id, era]) => `<option value="${id}">${era.label}</option>`)
    .join('');

  const typeOptions = Object.entries(DOCUMENT_TYPES)
    .map(([, val]) => `<option value="${val}">${val}</option>`)
    .join('');

  const langOptions = [
    ['ar', 'Árabe'], ['la', 'Latín'], ['es', 'Castellano'],
    ['he', 'Hebreo'], ['ber', 'Bereber'], ['fr', 'Francés'], ['en', 'Inglés'],
  ].map(([v, l]) => `<option value="${v}">${l}</option>`).join('');

  const regionChecks = Object.entries(REGIONS).map(([key, label]) => `
    <label style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.72rem;color:rgba(229,229,229,0.6);margin:0.25rem">
      <input type="checkbox" name="region" value="${key}" style="accent-color:var(--color-gold)">
      ${label}
    </label>
  `).join('');

  const themeChecks = Object.entries(THEMATIC_DIMENSIONS).map(([key, dim]) => `
    <label style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.72rem;color:rgba(229,229,229,0.6);margin:0.25rem">
      <input type="checkbox" name="theme" value="${key}" style="accent-color:${dim.color}">
      ${dim.label}
    </label>
  `).join('');

  return `
    <div class="admin-overlay" id="admin-overlay" role="dialog" aria-modal="true" aria-label="Panel de Administración">
      <div class="admin-shell">

        <!-- TOPBAR -->
        <div class="admin-topbar">
          <i data-lucide="shield" width="16" height="16" style="color:var(--color-gold)"></i>
          <span class="admin-topbar__logo">Archivo Noor</span>
          <span class="admin-topbar__badge">Admin</span>
          <span style="font-size:0.65rem;color:rgba(229,229,229,0.25);margin-left:0.5rem">
            Ctrl+Shift+A para abrir/cerrar
          </span>
          <button class="vbtn" id="admin-close" aria-label="Cerrar admin" style="margin-left:auto">
            <i data-lucide="x" width="15" height="15"></i>
          </button>
        </div>

        <div class="admin-body">

          <!-- SIDEBAR -->
          <nav class="admin-sidebar" aria-label="Navegación del admin">
            <div class="admin-nav-group">
              <p class="admin-nav-label">General</p>
              <button class="admin-nav-item active" data-admin-section="dashboard">
                <i data-lucide="layout-dashboard" width="14" height="14"></i>
                Dashboard
              </button>
              <button class="admin-nav-item" data-admin-section="ingest">
                <i data-lucide="plus-circle" width="14" height="14"></i>
                Añadir Documento
              </button>
              <button class="admin-nav-item" data-admin-section="documents">
                <i data-lucide="files" width="14" height="14"></i>
                Gestionar Documentos
              </button>
            </div>
            <div class="admin-nav-group">
              <p class="admin-nav-label">Datos</p>
              <button class="admin-nav-item" data-admin-section="sync">
                <i data-lucide="refresh-cw" width="14" height="14"></i>
                Sincronización Drive
              </button>
              <button class="admin-nav-item" data-admin-section="export">
                <i data-lucide="download" width="14" height="14"></i>
                Exportar JSON
              </button>
              <button class="admin-nav-item" data-admin-section="help">
                <i data-lucide="help-circle" width="14" height="14"></i>
                Guía de uso
              </button>
            </div>
          </nav>

          <!-- MAIN CONTENT -->
          <main class="admin-main">

            <!-- ═══ Dashboard ═══ -->
            <section class="admin-section active" id="admin-section-dashboard">
              <h1 class="admin-section-title">Dashboard del Archivo</h1>
              <p class="admin-section-sub">
                Vista general del estado del Archivo Noor. Los documentos añadidos aquí
                se combinan con los datos base en tiempo real.
              </p>

              <div class="admin-stats" id="admin-stats-cards">
                <div class="admin-stat-card">
                  <p class="admin-stat-card__num" id="stat-total">—</p>
                  <p class="admin-stat-card__label">Total Documentos</p>
                </div>
                <div class="admin-stat-card">
                  <p class="admin-stat-card__num" id="stat-admin">—</p>
                  <p class="admin-stat-card__label">Añadidos por ti</p>
                </div>
                <div class="admin-stat-card">
                  <p class="admin-stat-card__num" id="stat-notes">—</p>
                  <p class="admin-stat-card__label">Notas guardadas</p>
                </div>
                <div class="admin-stat-card">
                  <p class="admin-stat-card__num" id="stat-collections">—</p>
                  <p class="admin-stat-card__label">Colecciones</p>
                </div>
              </div>

              <div style="background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.15);border-radius:5px;padding:1rem 1.25rem">
                <p style="font-size:0.72rem;color:var(--color-gold);font-weight:600;margin-bottom:0.35rem">
                  ¿Cómo conectar tus archivos de Drive?
                </p>
                <p style="font-size:0.78rem;color:rgba(229,229,229,0.55);line-height:1.7">
                  1. Abre el archivo en <strong style="color:var(--color-parchment)">drive.google.com</strong><br>
                  2. Click derecho → <em>Obtener enlace</em> → copia la parte del ID:<br>
                  &nbsp;&nbsp;&nbsp;<code style="font-size:0.72rem;background:rgba(0,0,0,0.3);padding:1px 5px;border-radius:2px">
                    drive.google.com/file/d/<strong style="color:var(--color-gold)">TU_FILE_ID</strong>/view
                  </code><br>
                  3. Pega ese ID en el campo <em>Drive File ID</em> del formulario de ingesta.
                </p>
              </div>
            </section>

            <!-- ═══ Formulario de Ingesta ═══ -->
            <section class="admin-section" id="admin-section-ingest">
              <h1 class="admin-section-title">Añadir / Editar Documento</h1>
              <p class="admin-section-sub">
                Rellena los campos para añadir un documento al Archivo Noor.
                Los campos marcados con <span style="color:var(--color-gold)">*</span>
                son obligatorios. El documento aparecerá automáticamente en la galería.
              </p>

              <form class="ingest-form" id="ingest-form" novalidate>

                <!-- ID (autogenerado o editable) -->
                <div class="form-field">
                  <label class="form-field__label" for="f-id">ID del documento</label>
                  <input class="form-input" id="f-id" type="text"
                         placeholder="doc-s10-001 (autogenerado si vacío)"
                         aria-describedby="f-id-hint" />
                  <p class="form-field__hint" id="f-id-hint">Slug único sin espacios. Ej: doc-s12-045</p>
                </div>

                <!-- Tipo -->
                <div class="form-field">
                  <label class="form-field__label" for="f-type">
                    Tipo <span>*</span>
                  </label>
                  <select class="form-select" id="f-type" required>
                    ${typeOptions}
                  </select>
                </div>

                <!-- Título -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label" for="f-title">
                    Título <span>*</span>
                  </label>
                  <input class="form-input" id="f-title" type="text"
                         placeholder="Ej: Kitab al-Agani — Selección de Cantos" required />
                </div>

                <!-- Época -->
                <div class="form-field">
                  <label class="form-field__label" for="f-era">
                    Época histórica <span>*</span>
                  </label>
                  <select class="form-select" id="f-era" required>
                    ${eraOptions}
                  </select>
                </div>

                <!-- Año -->
                <div class="form-field">
                  <label class="form-field__label" for="f-year">
                    Año (aprox.) <span>*</span>
                  </label>
                  <input class="form-input" id="f-year" type="number"
                         min="600" max="1950" placeholder="978" required />
                </div>

                <!-- Fecha exacta -->
                <div class="form-field">
                  <label class="form-field__label" for="f-exact-date">Fecha exacta</label>
                  <input class="form-input" id="f-exact-date" type="text"
                         placeholder="0978-03-15 (opcional)" />
                  <p class="form-field__hint">Formato ISO 8601. Ej: 1492-01-02</p>
                </div>

                <!-- Idioma -->
                <div class="form-field">
                  <label class="form-field__label" for="f-lang">Idioma original</label>
                  <select class="form-select" id="f-lang">
                    ${langOptions}
                  </select>
                </div>

                <!-- Fuente -->
                <div class="form-field">
                  <label class="form-field__label" for="f-source">Archivo / Fuente</label>
                  <input class="form-input" id="f-source" type="text"
                         placeholder="Ej: Biblioteca Nacional de España" />
                </div>

                <!-- Autor -->
                <div class="form-field">
                  <label class="form-field__label" for="f-creator">Autor / Creador</label>
                  <input class="form-input" id="f-creator" type="text"
                         placeholder="Anónimo / Nombre del autor" />
                </div>

                <!-- Drive File ID principal -->
                <div class="form-field">
                  <label class="form-field__label" for="f-drive-id">
                    Drive File ID (imagen principal)
                  </label>
                  <div class="drive-input-wrapper">
                    <input class="form-input" id="f-drive-id" type="text"
                           placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs"
                           aria-describedby="f-drive-id-hint" />
                    <i data-lucide="external-link" class="drive-input-icon" width="13" height="13"
                       id="drive-preview-btn" title="Abrir en Drive"></i>
                  </div>
                  <p class="form-field__hint" id="f-drive-id-hint">
                    ID del archivo en Google Drive (parte del enlace después de /d/)
                  </p>
                </div>

                <!-- Páginas adicionales -->
                <div class="form-field">
                  <label class="form-field__label">Páginas adicionales (Drive IDs)</label>
                  <div class="pages-input-list" id="pages-input-list">
                    <div class="page-input-row">
                      <input class="form-input" type="text" placeholder="Drive File ID — Página 1" data-page-idx="0" />
                      <button type="button" data-remove-page="0" title="Eliminar página">
                        <i data-lucide="x" width="12" height="12"></i>
                      </button>
                    </div>
                  </div>
                  <button type="button" class="add-page-btn" id="add-page-btn">
                    + Añadir página
                  </button>
                </div>

                <!-- Coordenadas -->
                <div class="form-field">
                  <label class="form-field__label" for="f-lat">Latitud</label>
                  <input class="form-input" id="f-lat" type="number" step="any"
                         placeholder="37.8882" />
                </div>
                <div class="form-field">
                  <label class="form-field__label" for="f-lng">Longitud</label>
                  <input class="form-input" id="f-lng" type="number" step="any"
                         placeholder="-4.7794" />
                </div>

                <!-- Descripción -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label" for="f-desc">Descripción <span>*</span></label>
                  <textarea class="form-textarea" id="f-desc" rows="3"
                            placeholder="Descripción académica del documento. Se mostrará en la tarjeta y en el panel de metadatos."
                            required></textarea>
                </div>

                <!-- Tags -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label" for="f-tags">Palabras clave (separadas por comas)</label>
                  <input class="form-input" id="f-tags" type="text"
                         placeholder="califato, cordoba, manuscrito, omeya" />
                </div>

                <!-- Regiones -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label">Regiones</label>
                  <div style="display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.25rem">
                    ${regionChecks}
                  </div>
                </div>

                <!-- Dimensiones temáticas -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label">Dimensiones Temáticas</label>
                  <div style="display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.25rem">
                    ${themeChecks}
                  </div>
                </div>

                <!-- Transcripción -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label" for="f-transcript">
                    Transcripción (texto completo)
                  </label>
                  <textarea class="form-textarea" id="f-transcript" rows="6"
                            placeholder="Pega aquí la transcripción del documento. Para documentos multipágina, separa las páginas con una línea ---PAGINA---"></textarea>
                  <p class="form-field__hint">
                    Separa páginas con <code>---PAGINA---</code>. El árabe se renderizará automáticamente en RTL.
                  </p>
                </div>

                <!-- Notas del transcriptor -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label" for="f-transcript-notes">
                    Notas del transcriptor
                  </label>
                  <textarea class="form-textarea" id="f-transcript-notes" rows="2"
                            placeholder="Abreviaturas, dudas, script de escritura..."></textarea>
                </div>

                <!-- Preview del JSON -->
                <div class="form-field ingest-form__full">
                  <label class="form-field__label" style="margin-bottom:0.5rem">
                    Preview del documento generado
                  </label>
                  <div class="json-preview-panel">
                    <div class="json-preview-panel__header">
                      <span class="json-preview-panel__label">JSON generado</span>
                      <button type="button" class="note-btn" id="refresh-preview-btn" style="font-size:0.65rem;padding:2px 8px">
                        <i data-lucide="refresh-cw" width="10" height="10"></i> Actualizar
                      </button>
                    </div>
                    <pre class="json-preview__code" id="json-preview">
— Rellena el formulario y pulsa "Actualizar" —
                    </pre>
                  </div>
                </div>

                <!-- Acciones del formulario -->
                <div class="form-actions">
                  <button type="button" class="form-btn form-btn--primary" id="f-save-btn">
                    <i data-lucide="save" width="14" height="14"></i>
                    Guardar en el Archivo
                  </button>
                  <button type="button" class="form-btn form-btn--export" id="f-export-json-btn">
                    <i data-lucide="file-json" width="14" height="14"></i>
                    Copiar JSON
                  </button>
                  <button type="button" class="form-btn form-btn--secondary" id="f-reset-btn">
                    <i data-lucide="rotate-ccw" width="14" height="14"></i>
                    Limpiar
                  </button>
                </div>

              </form>
            </section>

            <!-- ═══ Gestión de Documentos ═══ -->
            <section class="admin-section" id="admin-section-documents">
              <h1 class="admin-section-title">Documentos del Archivo</h1>
              <p class="admin-section-sub">
                Todos los documentos combinados. Los creados por ti aparecen marcados con
                <span class="admin-doc-status admin-doc-status--ok">Admin</span>.
              </p>

              <div id="admin-doc-table-wrapper">
                <p style="color:rgba(229,229,229,0.3);font-size:0.8rem">Cargando documentos...</p>
              </div>
            </section>

            <!-- ═══ Sincronización Google Drive ═══ -->
            <section class="admin-section" id="admin-section-sync">
              <h1 class="admin-section-title">Google Drive Sync Engine</h1>
              <p class="admin-section-sub">
                Configura tu conexión y sincroniza automáticamente los documentos de tu carpeta de Drive.
              </p>

              <div style="max-width:480px; display:grid; gap:1.5rem">
                <!-- Config de Credenciales -->
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:1.25rem">
                  <h3 style="font-size:0.85rem;color:var(--color-gold);margin-bottom:1rem;display:flex;align-items:center;gap:0.5rem">
                    <i data-lucide="key" width="14"></i> Credenciales Google Cloud
                  </h3>
                  
                  <div class="form-field">
                    <label class="form-field__label">Google API Key</label>
                    <input class="form-input" id="cfg-api-key" type="password" placeholder="AIzaSy..." />
                  </div>
                  
                  <div class="form-field">
                    <label class="form-field__label">OAuth Client ID</label>
                    <input class="form-input" id="cfg-client-id" type="text" placeholder="12345-abc.apps.googleusercontent.com" />
                  </div>
                  
                  <div class="form-field">
                    <label class="form-field__label">Root Folder ID</label>
                    <input class="form-input" id="cfg-folder-id" type="text" placeholder="ID de la carpeta 'Archivo noor'" />
                  </div>

                  <button class="form-btn form-btn--secondary" id="save-cfg-btn" style="width:100%;margin-top:0.5rem">
                    Guardar Configuración
                  </button>
                </div>

                <!-- Acción de Sync -->
                <div style="background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.2);border-radius:8px;padding:1.5rem;text-align:center">
                   <h3 style="font-size:0.9rem;color:var(--color-parchment);margin-bottom:0.5rem">Sincronización de Hemeroteca</h3>
                   <p style="font-size:0.72rem;color:rgba(229,229,229,0.5);margin-bottom:1.25rem">
                     Escanea la carpeta en busca de archivos <code>YYYY-MM-DD_Ubicacion_Cabecera.pdf</code>
                   </p>
                   
                   <button class="form-btn form-btn--primary" id="sync-drive-now-btn" style="width:100%; height:45px; font-size:0.9rem">
                     <i data-lucide="refresh-cw" width="18" height="18" id="sync-icon"></i>
                     <span id="sync-btn-text">Sincronizar Ahora</span>
                   </button>
                   
                   <p id="sync-status-msg" style="font-size:0.65rem;margin-top:0.75rem;color:var(--color-gold);display:none">
                     Sincronizando con Google Drive...
                   </p>
                </div>
              </div>
            </section>

            <!-- ═══ Exportar JSON ═══ -->
            <section class="admin-section" id="admin-section-export">
              <h1 class="admin-section-title">Exportar Datos</h1>
              <p class="admin-section-sub">
                Genera los archivos JSON listos para copiar en la estructura de Google Drive.
              </p>

              <div style="display:grid;gap:1rem;max-width:480px">

                <div style="background:rgba(255,255,255,0.02);border:var(--border-ornate);border-radius:5px;padding:1rem">
                  <p style="font-size:0.82rem;color:var(--color-parchment);font-weight:600;margin-bottom:0.4rem">
                    📄 metadatos.json
                  </p>
                  <p style="font-size:0.75rem;color:rgba(229,229,229,0.45);line-height:1.6;margin-bottom:0.75rem">
                    Exporta los documentos que has creado en el Admin como
                    <code>metadatos.json</code>, listo para subir a la carpeta de Drive.
                  </p>
                  <button class="form-btn form-btn--primary" id="export-meta-btn">
                    <i data-lucide="download" width="13" height="13"></i>
                    Descargar metadatos.json
                  </button>
                </div>

                <div style="background:rgba(255,255,255,0.02);border:var(--border-ornate);border-radius:5px;padding:1rem">
                  <p style="font-size:0.82rem;color:var(--color-parchment);font-weight:600;margin-bottom:0.4rem">
                    📦 Backup completo
                  </p>
                  <p style="font-size:0.75rem;color:rgba(229,229,229,0.45);line-height:1.6;margin-bottom:0.75rem">
                    Notas + colecciones + documentos del admin en un único archivo.
                    Importable desde el Panel de Notas → "Restaurar backup".
                  </p>
                  <button class="form-btn form-btn--secondary" id="export-backup-btn">
                    <i data-lucide="database" width="13" height="13"></i>
                    Descargar backup-noor.json
                  </button>
                </div>

              </div>
            </section>

            <!-- ═══ Guía de uso ═══ -->
            <section class="admin-section" id="admin-section-help">
              <h1 class="admin-section-title">Guía de Ingesta</h1>
              <div style="max-width:640px;font-size:0.83rem;color:rgba(229,229,229,0.55);line-height:1.9">

                <h2 style="font-family:var(--font-serif);font-size:1rem;color:var(--color-sepia);margin-bottom:0.75rem">
                  Flujo de trabajo recomendado
                </h2>

                <ol style="padding-left:1.25rem;margin-bottom:1.5rem">
                  <li><strong style="color:var(--color-parchment)">Digitaliza</strong> el documento con tu escáner o cámara a 300-400 DPI.</li>
                  <li><strong style="color:var(--color-parchment)">Sube</strong> el archivo (JPEG/PDF) a la carpeta <code>Carpeta noor 2026 / Archivo noor / SigloXX</code> en Google Drive.</li>
                  <li><strong style="color:var(--color-parchment)">Obtén el ID</strong>: abre el archivo en Drive → click derecho → <em>Obtener enlace</em>. Copia el ID de la URL.</li>
                  <li>Abre este panel y ve a <strong>Añadir Documento</strong>.</li>
                  <li>Rellena los campos, pega el ID, y <strong style="color:var(--color-gold)">Guarda</strong>.</li>
                  <li>El documento aparecerá inmediatamente en la galería y en el mapa (si tiene coordenadas).</li>
                  <li>Opcional: ve a <strong>Exportar JSON</strong> → descarga el <code>metadatos.json</code> y súbelo a Drive para que sea la fuente de verdad permanente.</li>
                </ol>

                <h2 style="font-family:var(--font-serif);font-size:1rem;color:var(--color-sepia);margin-bottom:0.75rem">
                  Formato de la URL de Google Drive
                </h2>
                <code style="background:rgba(0,0,0,0.3);padding:0.5rem;border-radius:3px;display:block;font-size:0.72rem;color:rgba(229,229,229,0.7)">
                  https://drive.google.com/file/d/<span style="color:var(--color-gold);font-weight:700">[FILE_ID]</span>/view
                </code>

                <h2 style="font-family:var(--font-serif);font-size:1rem;color:var(--color-sepia);margin:1.25rem 0 0.75rem">
                  Atajo de teclado
                </h2>
                <p><kbd style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:2px 7px;border-radius:3px;font-size:0.75rem">Ctrl</kbd> + <kbd style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:2px 7px;border-radius:3px;font-size:0.75rem">Shift</kbd> + <kbd style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);padding:2px 7px;border-radius:3px;font-size:0.75rem">A</kbd> — Abrir/cerrar el Admin Dashboard</p>
              </div>
            </section>

          </main>
        </div>
      </div>

      <!-- Toast de notificación -->
      <div class="admin-toast" id="admin-toast"></div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────
// LÓGICA DEL FORMULARIO DE INGESTA
// ─────────────────────────────────────────────────────────

/**
 * Genera el objeto NoorDocument a partir de los valores del formulario.
 */
function _buildDocumentFromForm() {
  const get  = (id) => document.getElementById(id)?.value?.trim() || '';
  const getN = (id) => parseFloat(document.getElementById(id)?.value) || null;

  const rawTranscript = get('f-transcript');
  let transcription   = null;
  if (rawTranscript) {
    const separator = '---PAGINA---';
    if (rawTranscript.includes(separator)) {
      transcription = {
        pages:          rawTranscript.split(separator).map(p => p.trim()),
        transcribedBy:  'Leonardo Gallardo',
        transcribedAt:  new Date().toISOString().slice(0, 10),
        notes:          get('f-transcript-notes'),
        method:         'manual',
        confidence:     0.9,
      };
    } else {
      transcription = {
        fullText:       rawTranscript,
        transcribedBy:  'Leonardo Gallardo',
        transcribedAt:  new Date().toISOString().slice(0, 10),
        notes:          get('f-transcript-notes'),
        method:         'manual',
        confidence:     0.9,
      };
    }
  }

  // Páginas Drive
  const pageInputs = document.querySelectorAll('[data-page-idx]');
  const pages = [...pageInputs].map(input => input.value.trim()).filter(Boolean);

  // Regiones y temas
  const regions = [...document.querySelectorAll('[name="region"]:checked')].map(cb => cb.value);
  const themes  = [...document.querySelectorAll('[name="theme"]:checked')].map(cb => cb.value);

  // Tags
  const tags = get('f-tags').split(',').map(t => t.trim()).filter(Boolean);

  // ID
  const docId = get('f-id') || `doc-${get('f-era').toLowerCase()}-${Date.now()}`;

  return {
    id:             docId,
    title:          get('f-title'),
    type:           get('f-type'),
    eraId:          get('f-era'),
    year:           getN('f-year') || 0,
    exact_date:     get('f-exact-date') || null,
    date_precision: get('f-exact-date') ? 'day' : 'year',
    language:       get('f-lang'),
    source:         get('f-source'),
    description:    get('f-desc'),
    themes,
    regions,
    tags,
    media: {
      thumbnail:   '',
      pages:       pages,
      pdf:         '',
      driveFileId: get('f-drive-id') || `PLACEHOLDER_${docId}`,
    },
    metadata: {
      creator:     get('f-creator'),
      contributor: '',
      publisher:   'Archivo Noor, 2026',
      rights:      'Dominio Público',
      format:      'image/jpeg',
      identifier:  docId,
      scanResolution: '',
      condition:   '',
    },
    coordinates: {
      lat:   getN('f-lat'),
      lng:   getN('f-lng'),
      place: '',
    },
    transcription,
    eventIds: [],
  };
}

/**
 * Renderiza el JSON del documento en el panel de preview.
 */
function _updatePreview() {
  const previewEl = document.getElementById('json-preview');
  if (!previewEl) return;

  try {
    const doc  = _buildDocumentFromForm();
    const json = JSON.stringify(doc, null, 2);
    previewEl.textContent = json;
  } catch {
    previewEl.textContent = '— Error generando el JSON —';
  }
}

// ─────────────────────────────────────────────────────────
// GESTIÓN DE LA TABLA DE DOCUMENTOS
// ─────────────────────────────────────────────────────────

async function _loadDocumentsTable() {
  const wrapper = document.getElementById('admin-doc-table-wrapper');
  if (!wrapper) return;

  const allDocs   = await NoorDB.docMeta.getMergedWithMock();
  const adminDocs = await NoorDB.docMeta.getAll();
  const adminIds  = new Set(adminDocs.map(d => d.id));

  wrapper.innerHTML = `
    <table class="admin-doc-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Época</th>
          <th>Año</th>
          <th>Estado Drive</th>
          <th>Fuente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${allDocs.map(doc => {
          const hasRealDriveId = doc.media?.driveFileId && !doc.media.driveFileId.startsWith('PLACEHOLDER');
          const isAdmin = adminIds.has(doc.id);
          const statusClass = isAdmin ? 'admin-doc-status--ok' : (hasRealDriveId ? 'admin-doc-status--ok' : 'admin-doc-status--pending');
          const statusLabel = isAdmin ? 'Admin' : (hasRealDriveId ? 'Drive OK' : 'Pendiente');

          return `
            <tr>
              <td style="font-family:monospace;font-size:0.68rem;color:var(--color-sepia)">${doc.id}</td>
              <td style="font-family:var(--font-serif);color:var(--color-parchment)">${doc.title}</td>
              <td>${doc.eraId}</td>
              <td style="color:var(--color-gold)">${doc.year ?? '—'}</td>
              <td><span class="admin-doc-status ${statusClass}">${statusLabel}</span></td>
              <td style="font-size:0.72rem">${doc._source === 'admin' ? '🛡️ Admin' : '📦 Base'}</td>
              <td>
                <div style="display:flex;gap:0.3rem">
                  ${isAdmin ? `
                    <button class="note-btn" data-admin-edit="${doc.id}" style="font-size:0.65rem;padding:2px 8px">
                      <i data-lucide="pencil" width="10" height="10"></i>
                    </button>
                    <button class="note-btn note-btn--danger" data-admin-delete="${doc.id}" style="font-size:0.65rem;padding:2px 8px">
                      <i data-lucide="trash-2" width="10" height="10"></i>
                    </button>
                  ` : `<span style="font-size:0.68rem;color:rgba(229,229,229,0.2)">mock</span>`}
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  // Editar
  wrapper.querySelectorAll('[data-admin-edit]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const doc = await NoorDB.docMeta.get(btn.dataset.adminEdit);
      if (doc) _populateFormWithDoc(doc);
    });
  });

  // Eliminar
  wrapper.querySelectorAll('[data-admin-delete]').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (confirm(`¿Eliminar "${btn.dataset.adminDelete}" de tu archivo local?`)) {
        await NoorDB.docMeta.delete(btn.dataset.adminDelete);
        _showToast('Documento eliminado.', 'success');
        _loadDocumentsTable();
        _loadDashboardStats();
      }
    });
  });

  if (window.lucide) lucide.createIcons();
}

/**
 * Precarga el formulario con los datos de un documento para editarlo.
 */
function _populateFormWithDoc(doc) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('f-id',      doc.id);
  set('f-title',   doc.title);
  set('f-type',    doc.type);
  set('f-era',     doc.eraId);
  set('f-year',    doc.year);
  set('f-lang',    doc.language);
  set('f-source',  doc.source);
  set('f-desc',    doc.description);
  set('f-tags',    (doc.tags || []).join(', '));
  set('f-drive-id', doc.media?.driveFileId);
  set('f-lat',     doc.coordinates?.lat);
  set('f-lng',     doc.coordinates?.lng);
  set('f-exact-date', doc.exact_date);
  set('f-creator', doc.metadata?.creator);

  if (doc.transcription) {
    const text = doc.transcription.fullText || (doc.transcription.pages || []).join('\n---PAGINA---\n');
    set('f-transcript', text);
    set('f-transcript-notes', doc.transcription.notes);
  }

  // Checkboxes de regiones
  document.querySelectorAll('[name="region"]').forEach(cb => {
    cb.checked = (doc.regions || []).includes(cb.value);
  });
  document.querySelectorAll('[name="theme"]').forEach(cb => {
    cb.checked = (doc.themes || []).includes(cb.value);
  });

  _adminState.editingDocId = doc.id;
  _switchAdminSection('ingest');
  _updatePreview();
}

// ─────────────────────────────────────────────────────────
// STATS DEL DASHBOARD
// ─────────────────────────────────────────────────────────

async function _loadDashboardStats() {
  const [adminDocs, notesList, cols] = await Promise.all([
    NoorDB.docMeta.getAll(),
    NoorDB.notes.getAll(),
    NoorDB.collections.getAll(),
  ]);
  const mockDocs = window.NoorMockData?.documents || [];

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('stat-total',       mockDocs.length + adminDocs.length);
  setEl('stat-admin',       adminDocs.length);
  setEl('stat-notes',       notesList.length);
  setEl('stat-collections', cols.length);
}

// ─────────────────────────────────────────────────────────
// API PÚBLICA: ABRIR/CERRAR
// ─────────────────────────────────────────────────────────

function toggleAdmin(show) {
  const overlay = document.getElementById('admin-overlay');
  if (!overlay) return;
  _adminState.isOpen = show ?? !_adminState.isOpen;
  overlay.classList.toggle('open', _adminState.isOpen);
  if (_adminState.isOpen) {
    _loadDashboardStats();
    if (window.lucide) lucide.createIcons();
  }
}

function _switchAdminSection(section) {
  _adminState.activeSection = section;

  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.adminSection === section);
  });
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === `admin-section-${section}`);
  });

  if (section === 'documents') _loadDocumentsTable();
  if (section === 'sync') {
    document.getElementById('cfg-api-key').value = DriveConnector.CONFIG.API_KEY || '';
    document.getElementById('cfg-client-id').value = DriveConnector.CONFIG.CLIENT_ID || '';
    document.getElementById('cfg-folder-id').value = DriveConnector.CONFIG.ROOT_FOLDER_ID || '';
  }
}

function _showToast(msg, type = 'success') {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = (type === 'success' ? '✓ ' : '✗ ') + msg;
  toast.className   = `admin-toast admin-toast--${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────

function _bindAdminEvents() {
  // Cerrar
  document.getElementById('admin-close')?.addEventListener('click', () => toggleAdmin(false));
  document.getElementById('admin-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('admin-overlay')) toggleAdmin(false);
  });

  // Navegación del sidebar
  document.querySelectorAll('[data-admin-section]').forEach(btn => {
    btn.addEventListener('click', () => _switchAdminSection(btn.dataset.adminSection));
  });

  // — CONFIGURACIÓN DRIVE —
  document.getElementById('save-cfg-btn')?.addEventListener('click', async () => {
    const config = {
      API_KEY: document.getElementById('cfg-api-key').value,
      CLIENT_ID: document.getElementById('cfg-client-id').value,
      ROOT_FOLDER_ID: document.getElementById('cfg-folder-id').value,
    };
    await DriveConnector.updateConfig(config);
    _showToast('Configuración guardada.', 'success');
  });

  // — SINCRONIZACIÓN —
  document.getElementById('sync-drive-now-btn')?.addEventListener('click', async () => {
    try {
      await DriveConnector.syncHemeroteca();
      _showToast('Sincronización completada con éxito.');
      _loadDashboardStats();
    } catch (err) {
      _showToast('Error en la sincronización.', 'danger');
    }
  });

  // Suscribirse al estado isSyncing para feedback visual
  NoorState.subscribe('SET_SYNCING', (state) => {
    const btn = document.getElementById('sync-drive-now-btn');
    const icon = document.getElementById('sync-icon');
    const text = document.getElementById('sync-btn-text');
    const msg = document.getElementById('sync-status-msg');
    
    if (btn && state.isSyncing) {
      btn.disabled = true;
      icon.classList.add('animate-spin');
      text.textContent = 'Procesando...';
      if(msg) msg.style.display = 'block';
    } else if (btn) {
      btn.disabled = false;
      icon.classList.remove('animate-spin');
      text.textContent = 'Sincronizar Ahora';
      if(msg) msg.style.display = 'none';
    }
  });

  // Añadir página
  let pageCount = 1;
  document.getElementById('add-page-btn')?.addEventListener('click', () => {
    const list = document.getElementById('pages-input-list');
    const row  = document.createElement('div');
    row.className = 'page-input-row';
    row.innerHTML = `
      <input class="form-input" type="text" placeholder="Drive File ID — Página ${pageCount + 1}" data-page-idx="${pageCount}" />
      <button type="button" data-remove-page="${pageCount}" title="Eliminar página">
        <i data-lucide="x" width="12" height="12"></i>
      </button>
    `;
    row.querySelector('[data-remove-page]').addEventListener('click', () => row.remove());
    list?.appendChild(row);
    pageCount++;
    if (window.lucide) lucide.createIcons();
  });

  // Preview Drive
  document.getElementById('drive-preview-btn')?.addEventListener('click', () => {
    const id = document.getElementById('f-drive-id')?.value?.trim();
    if (id && !id.startsWith('PLACEHOLDER')) {
      window.open(`https://drive.google.com/file/d/${id}/view`, '_blank');
    }
  });

  // Actualizar preview JSON
  document.getElementById('refresh-preview-btn')?.addEventListener('click', _updatePreview);

  // Auto-update preview on input change (debounced)
  let previewTimer;
  document.getElementById('ingest-form')?.addEventListener('input', () => {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(_updatePreview, 800);
  });

  // Guardar documento
  document.getElementById('f-save-btn')?.addEventListener('click', async () => {
    const title = document.getElementById('f-title')?.value?.trim();
    const year  = document.getElementById('f-year')?.value?.trim();
    const desc  = document.getElementById('f-desc')?.value?.trim();

    if (!title || !year || !desc) {
      _showToast('Rellena los campos obligatorios (*)', 'error');
      return;
    }

    const doc = _buildDocumentFromForm();
    await NoorDB.docMeta.save(doc);
    _showToast(`"${doc.title}" guardado en el Archivo.`, 'success');
    _loadDashboardStats();
    _updatePreview();
  });

  // Copiar JSON
  document.getElementById('f-export-json-btn')?.addEventListener('click', () => {
    const json = document.getElementById('json-preview')?.textContent;
    if (json) {
      navigator.clipboard.writeText(json).then(() => {
        _showToast('JSON copiado al portapapeles.', 'success');
      });
    }
  });

  // Limpiar formulario
  document.getElementById('f-reset-btn')?.addEventListener('click', () => {
    document.getElementById('ingest-form')?.reset();
    _adminState.editingDocId = null;
    document.getElementById('json-preview').textContent = '— Formulario limpiado —';
  });

  // Exportar metadatos.json
  document.getElementById('export-meta-btn')?.addEventListener('click', async () => {
    const docs = await NoorDB.docMeta.getAll();
    const content = JSON.stringify({ documents: docs }, null, 2);
    _downloadAdminFile(content, 'metadatos.json', 'application/json');
    _showToast('metadatos.json descargado.', 'success');
  });

  // Exportar backup completo
  document.getElementById('export-backup-btn')?.addEventListener('click', async () => {
    const data = await NoorDB.exportAll();
    _downloadAdminFile(JSON.stringify(data, null, 2), `backup-noor-${_dateSlug()}.json`, 'application/json');
    _showToast('Backup descargado.', 'success');
  });
}

function _downloadAdminFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
function _dateSlug() {
  return new Date().toISOString().replace(/[:.T]/g, '-').slice(0, 16);
}

window.NoorAdmin = { init: initAdmin, toggle: toggleAdmin };
console.log('[Admin] ✓ Módulo definido. Acceso: Ctrl+Shift+A');
