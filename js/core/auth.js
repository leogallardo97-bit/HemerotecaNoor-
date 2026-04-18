/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Admin Auth (Protección por Contraseña)
 * ══════════════════════════════════════════════════════════
 *
 * Añade una capa de autenticación por PIN/contraseña antes
 * del Admin Dashboard. La contraseña se hashea con SHA-256
 * y se almacena en IndexedDB (no texto plano, no localStorage).
 *
 * PRIMER USO:
 *   Al abrir el admin por primera vez, se pedirá crear contraseña.
 *   Contraseña por defecto (antes de configurar): noor2026
 *
 * CAMBIAR CONTRASEÑA:
 *   Admin → Configuración → Cambiar contraseña
 */

const NoorAuth = (() => {
  const PREF_KEY      = 'admin_password_hash';
  const DEFAULT_PASS  = 'noor2026';   // ← contraseña inicial
  let _authenticated  = false;

  // ─────────────────────────────────────────────────────
  // HASHING — SHA-256 via Web Crypto API (nativo, sin deps)
  // ─────────────────────────────────────────────────────

  async function _sha256(str) {
    const buf    = new TextEncoder().encode(str);
    const hash   = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // ─────────────────────────────────────────────────────
  // INICIALIZACIÓN
  // ─────────────────────────────────────────────────────

  /**
   * init()
   * Comprueba si ya hay una contraseña configurada.
   * Si no, establece la contraseña por defecto.
   */
  async function init() {
    await NoorDB.init();
    const stored = await NoorDB.userPrefs.get(PREF_KEY);
    if (!stored) {
      // Primera vez: guardar contraseña por defecto hasheada
      const hash = await _sha256(DEFAULT_PASS);
      await NoorDB.userPrefs.set(PREF_KEY, hash);
      console.log('[NoorAuth] Contraseña inicial configurada (noor2026). Cámbiala en Ajustes del Admin.');
    }
  }

  // ─────────────────────────────────────────────────────
  // VERIFICACIÓN
  // ─────────────────────────────────────────────────────

  /**
   * verify(password)
   * Comprueba si la contraseña introducida es correcta.
   * @returns {Promise<boolean>}
   */
  async function verify(password) {
    const stored    = await NoorDB.userPrefs.get(PREF_KEY);
    const inputHash = await _sha256(password);
    const ok        = stored === inputHash;
    if (ok) _authenticated = true;
    return ok;
  }

  /**
   * changePassword(current, newPassword)
   * Cambia la contraseña si la actual es correcta.
   */
  async function changePassword(current, newPassword) {
    const ok = await verify(current);
    if (!ok) throw new Error('Contraseña actual incorrecta.');
    if (newPassword.length < 6) throw new Error('La nueva contraseña debe tener al menos 6 caracteres.');
    const hash = await _sha256(newPassword);
    await NoorDB.userPrefs.set(PREF_KEY, hash);
    console.log('[NoorAuth] ✓ Contraseña actualizada.');
  }

  function isAuthenticated() { return _authenticated; }
  function logout() { _authenticated = false; }

  // ─────────────────────────────────────────────────────
  // PROMPT DE LOGIN (HTML generado inline)
  // ─────────────────────────────────────────────────────

  /**
   * showLoginPrompt()
   * Muestra un modal de login y devuelve true si el usuario
   * se autentica correctamente.
   * @returns {Promise<boolean>}
   */
  function showLoginPrompt() {
    return new Promise((resolve) => {
      // Crear el modal de login
      const modal = document.createElement('div');
      modal.id    = 'auth-modal';
      modal.style.cssText = `
        position:fixed;inset:0;z-index:9999;
        background:rgba(0,0,0,0.96);
        display:flex;align-items:center;justify-content:center;
        font-family:var(--font-sans, Inter, sans-serif);
      `;
      modal.innerHTML = `
        <div style="
          background:rgba(14,14,14,0.99);
          border:1px solid rgba(201,168,76,0.3);
          border-top:3px solid #c9a84c;
          border-radius:8px;
          padding:2rem;
          width:340px;
          text-align:center;
        ">
          <div style="font-size:2rem;margin-bottom:0.5rem">🛡️</div>
          <p style="
            font-family:'Playfair Display',serif;
            font-size:1.1rem;color:#f0e2cc;
            margin-bottom:0.25rem;
          ">Admin — Archivo Noor</p>
          <p style="font-size:0.72rem;color:rgba(184,149,106,0.6);margin-bottom:1.5rem;letter-spacing:0.08em">
            ACCESO RESTRINGIDO
          </p>

          <input
            id="auth-password-input"
            type="password"
            placeholder="Contraseña del administrador"
            style="
              width:100%;padding:0.65rem;margin-bottom:0.75rem;
              background:rgba(255,255,255,0.05);
              border:1px solid rgba(201,168,76,0.25);
              border-radius:4px;color:#e5e5e5;font-size:0.85rem;
              outline:none;box-sizing:border-box;
              font-family:var(--font-sans, Inter, sans-serif);
            "
            autocomplete="current-password"
            aria-label="Contraseña del administrador"
          />

          <div id="auth-error" style="
            font-size:0.72rem;color:#c94c4c;margin-bottom:0.75rem;
            min-height:1.2em;
          "></div>

          <button id="auth-submit" style="
            width:100%;padding:0.65rem;
            background:#c9a84c;color:#0d0d0d;
            border:none;border-radius:4px;
            font-size:0.85rem;font-weight:600;
            cursor:pointer;
            font-family:var(--font-sans, Inter, sans-serif);
          ">
            Entrar al Admin
          </button>

          <button id="auth-cancel" style="
            width:100%;margin-top:0.5rem;padding:0.5rem;
            background:none;border:none;
            color:rgba(229,229,229,0.3);font-size:0.72rem;
            cursor:pointer;
          ">
            Cancelar
          </button>

          <p style="font-size:0.6rem;color:rgba(229,229,229,0.2);margin-top:1rem">
            Contraseña por defecto: <code style="color:rgba(201,168,76,0.5)">noor2026</code>
            — Cámbiala en Ajustes del Admin
          </p>
        </div>
      `;

      document.body.appendChild(modal);

      const input  = modal.querySelector('#auth-password-input');
      const errEl  = modal.querySelector('#auth-error');
      const submit = modal.querySelector('#auth-submit');
      const cancel = modal.querySelector('#auth-cancel');

      // Auto-focus
      setTimeout(() => input?.focus(), 50);

      async function tryLogin() {
        const password = input.value;
        if (!password) return;

        submit.textContent = 'Verificando...';
        submit.disabled    = true;

        const ok = await verify(password);

        if (ok) {
          modal.remove();
          resolve(true);
        } else {
          errEl.textContent    = '✗ Contraseña incorrecta. Inténtalo de nuevo.';
          input.value          = '';
          input.focus();
          submit.textContent   = 'Entrar al Admin';
          submit.disabled      = false;

          // Shake animation
          modal.querySelector('div').style.animation = 'none';
          setTimeout(() => { modal.querySelector('div').style.animation = ''; }, 10);
        }
      }

      submit.addEventListener('click', tryLogin);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryLogin(); });
      cancel.addEventListener('click', () => { modal.remove(); resolve(false); });

      // Cerrar con Escape
      const escHandler = (e) => {
        if (e.key === 'Escape') { modal.remove(); resolve(false); document.removeEventListener('keydown', escHandler); }
      };
      document.addEventListener('keydown', escHandler);
    });
  }

  return { init, verify, changePassword, showLoginPrompt, isAuthenticated, logout };
})();

window.NoorAuth = NoorAuth;
console.log('[NoorAuth] ✓ Módulo de autenticación cargado.');
