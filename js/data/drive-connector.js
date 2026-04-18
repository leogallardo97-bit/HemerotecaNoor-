/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Google Drive Connector (Producción)
 * ══════════════════════════════════════════════════════════
 *
 * MODOS DE OPERACIÓN:
 *   DEV_MODE = true  → Usa datos de mock-data.js (sin credenciales)
 *   DEV_MODE = false → Conecta con Google Drive API v3
 *
 * ════════════════════════════════════════════════════════════
 * ► CÓMO OBTENER TUS CREDENCIALES DE GOOGLE (paso a paso):
 * ════════════════════════════════════════════════════════════
 *
 * PASO 1 — Crear un proyecto en Google Cloud Console
 *   1. Ve a: https://console.cloud.google.com/
 *   2. Haz clic en "Nuevo Proyecto"
 *   3. Nombre: "Archivo Noor" → Crear
 *
 * PASO 2 — Activar la Google Drive API
 *   1. En el menú izquierdo: APIs y Servicios → Biblioteca
 *   2. Busca "Google Drive API" → Activar
 *
 * PASO 3 — Crear API Key (para leer archivos públicos)
 *   1. APIs y Servicios → Credenciales → Crear Credenciales → Clave de API
 *   2. Haz clic en "Restringir clave":
 *      • Restricción de aplicación: "Referentes HTTP"
 *        - Añade: https://TU-USUARIO.github.io/*
 *        - Añade: http://localhost:*
 *      • Restricción de API: "Google Drive API"
 *   3. Copia la clave → pégala en API_KEY abajo
 *
 * PASO 4 — Crear OAuth 2.0 Client ID (para leer archivos privados)
 *   1. Credenciales → Crear Credenciales → ID de cliente de OAuth
 *   2. Tipo: "Aplicación web"
 *   3. Orígenes JS autorizados: https://TU-USUARIO.github.io
 *   4. URI de redirección: https://TU-USUARIO.github.io/archivo-noor/
 *   5. Copia el Client ID → pégalo en CLIENT_ID abajo
 *
 * PASO 5 — Obtener el ID de tu carpeta de Drive
 *   1. Abre "Carpeta noor 2026 / Archivo noor" en drive.google.com
 *   2. La URL tendrá este formato:
 *      https://drive.google.com/drive/folders/[ROOT_FOLDER_ID]
 *   3. Copia ese ID → pégalo en ROOT_FOLDER_ID abajo
 *
 * PASO 6 — Para usar archivos privados:
 *   En Google Drive, comparte la carpeta "Archivo noor" como
 *   "Cualquier persona con el enlace puede ver". Así la API Key
 *   será suficiente sin necesidad de que el usuario inicie sesión.
 *
 * ════════════════════════════════════════════════════════════
 */

const DriveConnector = (() => {

  // ──────────────────────────────────────────────────────
  // ► CONFIGURACIÓN — EDITA ESTAS LÍNEAS ◄
  // ──────────────────────────────────────────────────────

  const CONFIG = {
    /**
     * Cambiar a false cuando quieras usar Google Drive real.
     * Con true, la web usa los datos de mock-data.js.
     */
    DEV_MODE: true,

    /**
     * Tu API Key de Google Cloud Console.
     * Sólo necesaria en producción (DEV_MODE = false).
     * Instrucciones: ver Paso 3 arriba.
     * @example 'AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
     */
    API_KEY: 'REEMPLAZA_CON_TU_API_KEY',

    /**
     * Tu OAuth 2.0 Client ID.
     * Necesario solo si los archivos no son públicos.
     * @example '123456789-abc.apps.googleusercontent.com'
     */
    CLIENT_ID: 'REEMPLAZA_CON_TU_CLIENT_ID',

    /**
     * ID de tu carpeta raíz "Archivo noor" en Google Drive.
     * Obtenerlo de la URL de la carpeta en Drive.
     * @example '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74od6ZoWb5'
     */
    ROOT_FOLDER_ID: 'REEMPLAZA_CON_EL_ID_DE_TU_CARPETA',

    /**
     * Nombre del archivo de índice maestro en la raíz de tu carpeta.
     * Este archivo debe contener el JSON con todos los documentos.
     */
    INDEX_FILE_NAME: 'index.json',

    /**
     * Caché de metadatos en localStorage (minutos).
     * Reduce las llamadas a la API. 0 = sin caché.
     */
    CACHE_MINUTES: 30,
  };

  // ──────────────────────────────────────────────────────
  // INTERNOS
  // ──────────────────────────────────────────────────────

  const DRIVE_API_BASE  = 'https://www.googleapis.com/drive/v3';
  const DRIVE_FILES_URL = 'https://drive.google.com/uc?export=view';
  const DRIVE_THUMB_URL = 'https://drive.google.com/thumbnail';
  const CACHE_KEY       = 'noor_drive_cache';

  let _gisLoaded   = false;
  let _isAuthed    = false;
  let _accessToken = null;

  // ──────────────────────────────────────────────────────
  // CONSTRUCCIÓN DE URLs DE ARCHIVOS DRIVE
  // ──────────────────────────────────────────────────────

  /**
   * Genera distintos tipos de URL para un archivo de Drive.
   *
   * @param {string} fileId  - ID del archivo en Google Drive
   * @param {'view'|'thumbnail'|'download'|'embed'} type
   * @returns {string} URL pública del archivo
   */
  function getPublicFileUrl(fileId, type = 'view') {
    if (!fileId || fileId.startsWith('PLACEHOLDER')) return '';

    switch (type) {
      case 'thumbnail':
        // Miniatura de 320px de ancho (ajustar sz= para tamaño)
        return `${DRIVE_THUMB_URL}?id=${fileId}&sz=w320`;

      case 'download':
        // Descarga directa del archivo original
        return `https://drive.google.com/uc?export=download&id=${fileId}`;

      case 'embed':
        // iframe embebido (útil para PDFs)
        return `https://drive.google.com/file/d/${fileId}/preview`;

      case 'view':
      default:
        // Vista directa en Google Drive (abre en navegador)
        return `https://drive.google.com/file/d/${fileId}/view`;
    }
  }

  /**
   * Genera la URL directa de la imagen para OpenSeadragon.
   * Usa la vista pública de Drive como fuente de tile.
   *
   * IMPORTANTE: Para que esto funcione, el archivo debe estar
   * compartido como "Cualquier persona con el enlace puede ver".
   */
  function getImageUrl(fileId, maxSize = 2048) {
    if (!fileId || fileId.startsWith('PLACEHOLDER')) return '';
    return `${DRIVE_THUMB_URL}?id=${fileId}&sz=w${maxSize}`;
  }

  // ──────────────────────────────────────────────────────
  // FETCHING DE METADATOS DESDE DRIVE
  // ──────────────────────────────────────────────────────

  /**
   * fetchDocuments()
   * Punto de entrada principal. En DEV_MODE devuelve datos mock.
   * En producción, llama a la Drive API para obtener el índice.
   *
   * @returns {Promise<NoorDocument[]>}
   */
  async function fetchDocuments() {
    if (CONFIG.DEV_MODE) {
      console.log('[DriveConnector] Modo DEV: usando datos de mock-data.js');
      return window.NoorMockData?.documents || [];
    }

    // Intentar desde caché
    const cached = _getCache();
    if (cached) {
      console.log('[DriveConnector] ✓ Documentos cargados desde caché local.');
      return cached;
    }

    try {
      // 1. Obtener el archivo index.json desde la carpeta de Drive
      const indexFileId = await _findFileInFolder(CONFIG.ROOT_FOLDER_ID, CONFIG.INDEX_FILE_NAME);
      if (!indexFileId) {
        console.warn('[DriveConnector] index.json no encontrado en Drive. Usando mock data.');
        return window.NoorMockData?.documents || [];
      }

      // 2. Descargar el contenido del index.json
      const indexData = await _downloadJSON(indexFileId);
      const documents = indexData.documents || [];

      // Guardar en caché
      _setCache(documents);
      console.log(`[DriveConnector] ✓ ${documents.length} documentos cargados desde Drive.`);
      return documents;

    } catch (err) {
      console.error('[DriveConnector] Error al conectar con Drive. Fallback a mock data:', err);
      return window.NoorMockData?.documents || [];
    }
  }

  /**
   * Busca un archivo por nombre dentro de una carpeta de Drive.
   * @returns {Promise<string|null>} File ID o null
   */
  async function _findFileInFolder(folderId, fileName) {
    const query    = `'${folderId}' in parents and name='${fileName}' and trashed=false`;
    const url      = `${DRIVE_API_BASE}/files?q=${encodeURIComponent(query)}&key=${CONFIG.API_KEY}&fields=files(id,name)`;
    const response = await fetch(url);
    const data     = await response.json();
    return data.files?.[0]?.id || null;
  }

  /**
   * Descarga el contenido JSON de un archivo de Drive.
   * @param {string} fileId
   * @returns {Promise<object>}
   */
  async function _downloadJSON(fileId) {
    const url      = `${DRIVE_API_BASE}/files/${fileId}?alt=media&key=${CONFIG.API_KEY}`;
    const response = await fetch(url, _getAuthHeaders());
    if (!response.ok) throw new Error(`HTTP ${response.status} al descargar ${fileId}`);
    return response.json();
  }

  /**
   * Lista todos los archivos dentro de una subcarpeta de Drive.
   * Útil para cargar todas las páginas de un documento multipágina.
   *
   * @param {string} folderId
   * @returns {Promise<Array<{id, name, mimeType}>>}
   */
  async function listFolderFiles(folderId) {
    if (!folderId || folderId.startsWith('PLACEHOLDER')) return [];

    const query    = `'${folderId}' in parents and trashed=false`;
    const fields   = 'files(id,name,mimeType,thumbnailLink,modifiedTime)';
    const url      = `${DRIVE_API_BASE}/files?q=${encodeURIComponent(query)}&fields=${fields}&key=${CONFIG.API_KEY}&orderBy=name`;
    const response = await fetch(url, _getAuthHeaders());

    if (!response.ok) {
      console.error('[DriveConnector] Error al listar carpeta:', response.status);
      return [];
    }

    const data = await response.json();
    return data.files || [];
  }

  // ──────────────────────────────────────────────────────
  // CACHÉ LOCAL
  // ──────────────────────────────────────────────────────

  function _setCache(data) {
    if (!CONFIG.CACHE_MINUTES) return;
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      expiresAt: Date.now() + CONFIG.CACHE_MINUTES * 60 * 1000,
    }));
  }

  function _getCache() {
    try {
      const raw  = localStorage.getItem(CACHE_KEY);
      if (!raw)  return null;
      const obj  = JSON.parse(raw);
      if (Date.now() > obj.expiresAt) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
      return obj.data;
    } catch { return null; }
  }

  /**
   * Invalida la caché manualmente (útil desde el Admin).
   */
  function clearCache() {
    localStorage.removeItem(CACHE_KEY);
    console.log('[DriveConnector] Caché invalidada.');
  }

  // ──────────────────────────────────────────────────────
  // AUTENTICACIÓN OAuth 2.0 (para archivos privados)
  // ──────────────────────────────────────────────────────

  /**
   * Carga la Google Identity Services library para OAuth.
   * Solo necesario si los archivos NO son públicos.
   */
  async function initAuth() {
    if (CONFIG.DEV_MODE || _gisLoaded) return;

    return new Promise((resolve) => {
      const script  = document.createElement('script');
      script.src    = 'https://accounts.google.com/gsi/client';
      script.onload = () => {
        _gisLoaded = true;
        google.accounts.oauth2.initTokenClient({
          client_id: CONFIG.CLIENT_ID,
          scope:     'https://www.googleapis.com/auth/drive.readonly',
          callback:  (tokenResponse) => {
            _accessToken = tokenResponse.access_token;
            _isAuthed    = true;
            console.log('[DriveConnector] ✓ Autenticado con Google Drive.');
          },
        });
        resolve();
      };
      document.head.appendChild(script);
    });
  }

  function _getAuthHeaders() {
    if (_isAuthed && _accessToken) {
      return { headers: { Authorization: `Bearer ${_accessToken}` } };
    }
    return {};
  }

  // ──────────────────────────────────────────────────────
  // ESTADO DE CONFIGURACIÓN
  // ──────────────────────────────────────────────────────

  /**
   * Comprueba si el conector está configurado para producción.
   */
  function isConfigured() {
    return !CONFIG.DEV_MODE &&
           CONFIG.API_KEY       !== 'REEMPLAZA_CON_TU_API_KEY' &&
           CONFIG.ROOT_FOLDER_ID !== 'REEMPLAZA_CON_EL_ID_DE_TU_CARPETA';
  }

  function getMode() {
    return CONFIG.DEV_MODE ? 'DEV' : (isConfigured() ? 'PROD' : 'UNCONFIGURED');
  }

  // API pública
  return {
    fetchDocuments,
    getPublicFileUrl,
    getImageUrl,
    listFolderFiles,
    clearCache,
    initAuth,
    isConfigured,
    getMode,
    CONFIG,  // Expuesto para que el Admin pueda leerlo
  };
})();

window.DriveConnector = DriveConnector;
console.log(`[DriveConnector] ✓ Modo: ${DriveConnector.getMode()}`);
