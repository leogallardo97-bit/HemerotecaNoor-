/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Google Drive Connector (Sync Engine v2)
 * ══════════════════════════════════════════════════════════
 *
 * Puente reactivo entre Google Drive API v3 y NoorDB (IndexedDB).
 * Autenticación vía GIS (Google Identity Services) y GAPI.
 */

const DriveConnector = (() => {

  // ─── CONFIGURACIÓN DE SEGURIDAD ───
  const CONFIG = {
    API_KEY:        'AIzaSyDsU6PU46SENJQAw35YQOI8OAMfHAoEUBs', 
    CLIENT_ID:      '179753785194-cdifma8lo1kkpu13uuc56j0fficqnfat.apps.googleusercontent.com',
    ROOT_FOLDER_ID: '1agtxU8HX-71HgmS3XfSWIqULSK1bK66d',
    SCOPES:         'https://www.googleapis.com/auth/drive.metadata.readonly',
    DISCOVERY_DOCS: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  };

  let gapiInited = false;
  let gisInited  = false;
  let tokenClient;

  // ─────────────────────────────────────────────────────────────
  // 1. CARGA DINÁMICA DE LIBRERÍAS (GAPI & GIS)
  // ─────────────────────────────────────────────────────────────

  async function loadScripts() {
    if (gapiInited && gisInited) return;

    return new Promise((resolve, reject) => {
      // Cargar GAPI
      const gapiScript = document.createElement('script');
      gapiScript.src = 'https://apis.google.com/js/api.js';
      gapiScript.onload = () => {
        gapi.load('client', async () => {
          await gapi.client.init({
            apiKey: CONFIG.API_KEY,
            discoveryDocs: CONFIG.DISCOVERY_DOCS,
          });
          gapiInited = true;
          _checkReady(resolve);
        });
      };
      
      // Cargar GIS
      const gisScript = document.createElement('script');
      gisScript.src = 'https://accounts.google.com/gsi/client';
      gisScript.onload = () => {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CONFIG.CLIENT_ID,
          scope: CONFIG.SCOPES,
          callback: '', // se define en el momento del sync
        });
        gisInited = true;
        _checkReady(resolve);
      };

      document.head.appendChild(gapiScript);
      document.head.appendChild(gisScript);
    });
  }

  function _checkReady(resolve) {
    if (gapiInited && gisInited) resolve();
  }

  // ─────────────────────────────────────────────────────────────
  // 2. LÓGICA DE SINCRONIZACIÓN (Drive → IndexedDB)
  // ─────────────────────────────────────────────────────────────

  /**
   * syncHemeroteca()
   * Dispara el flujo de autenticación y descarga de archivos.
   */
  async function syncHemeroteca() {
    try {
      NoorState.dispatch('SET_SYNCING', true);
      if (!gapiInited) await loadScripts();

      let response;
      const listParams = {
        q: `'${CONFIG.ROOT_FOLDER_ID}' in parents and trashed = false`,
        fields: 'files(id, name, webViewLink, thumbnailLink, mimeType, size, createdTime)',
        pageSize: 1000
      };

      // Si no tenemos token, intentamos usar la API Key para carpetas públicas
      const token = gapi.client.getToken();
      if (!token) {
        console.log('[DriveConnector] Intentando acceso público vía API Key...');
        // GAPI permite usar 'key' en la query si no hay auth
        listParams.key = CONFIG.API_KEY;
        response = await gapi.client.drive.files.list(listParams);
      } else {
        response = await gapi.client.drive.files.list(listParams);
      }

      const files = response.result.files || [];
      const documents = [];

      for (const file of files) {
        const doc = _parseFileNameToDocument(file);
        if (doc) {
          await NoorDB.docMeta.save(doc);
          documents.push(doc);
        }
      }

      // Actualizar estado global y forzar re-renderizado
      const allDocs = await NoorDB.docMeta.getMergedWithMock();
      NoorState.dispatch('SET_DOCUMENTS', allDocs);
      
      console.log(`[DriveConnector] ✓ Sincronización completa. ${documents.length} archivos procesados.`);
      return documents;

    } catch (err) {
      console.error('[DriveConnector] ✗ Error de sincronización:', err);
      NoorState.dispatch('SET_ERROR', 'Error al sincronizar con Drive: ' + err.message);
      throw err;
    } finally {
      NoorState.dispatch('SET_SYNCING', false);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 3. PARSEO DE METADATOS POR NOMBRE
  // ─────────────────────────────────────────────────────────────

  /**
   * _parseFileNameToDocument()
   * Extrae metadatos del patrón: YYYY-MM-DD_Ubicacion_Cabecera.pdf
   */
  function _parseFileNameToDocument(file) {
    // Regex: 1936-07-18_Cordoba_Diario-Liberal.pdf
    const pattern = /^(\d{4})-(\d{2})-(\d{2})_([^_]+)_([^_.]+)\.(pdf|jpg|jpeg|png)$/i;
    const match = file.name.match(pattern);

    if (!match) {
      console.warn(`[DriveConnector] Archivo ignora patrón: ${file.name}`);
      return null;
    }

    const [full, yearStr, month, day, location, header, ext] = match;
    const year = parseInt(yearStr);
    
    // Mapeo automático de Era
    const eraId = _getEraFromYear(year);

    // Mapeo automático de Región (intenta coincidir con NoorSchema.REGIONS)
    const regionKey = _guessRegionKey(location);

    return {
      id: file.id, // Usamos el Drive ID como ID único
      title: `${header.replace(/-/g, ' ')} — ${day}/${month}/${year}`,
      type: ext.toLowerCase() === 'pdf' ? 'newspaper' : 'image',
      eraId: eraId,
      year: year,
      exact_date: `${yearStr}-${month}-${day}`,
      regions: [regionKey],
      themes: ['POL'], // Tema por defecto si no se indica
      description: `Archivo digitalizado: ${header}. Ubicación original: ${location}.`,
      media: {
        thumbnail: file.thumbnailLink,
        pdf: ext.toLowerCase() === 'pdf' ? file.id : null,
        driveFileId: file.id,
        webViewLink: file.webViewLink
      },
      coordinates: NoorSchema.REGION_DEFAULT_COORDS[regionKey] || null,
      tags: [header, location, ext],
      _source: 'drive'
    };
  }

  function _getEraFromYear(year) {
    const eras = window.NoorSchema.HISTORICAL_ERAS;
    for (const key in eras) {
      const [start, end] = eras[key].range;
      if (year >= start && year <= end) return key;
    }
    return 'S19'; // Fallback
  }

  function _guessRegionKey(location) {
    const loc = location.toUpperCase();
    if (loc.includes('CORDOBA') || loc.includes('QURTUBA')) return 'QURTUBA';
    if (loc.includes('SEVILLA') || loc.includes('ISHBILIYYA')) return 'ISHBILIYYA';
    if (loc.includes('TOLEDO')) return 'TULAYTULAY';
    if (loc.includes('GRANADA')) return 'GARNATA';
    return 'GENERAL';
  }

  // ─────────────────────────────────────────────────────────────
  // 4. MÉTODOS DE UTILIDAD
  // ─────────────────────────────────────────────────────────────

  async function updateConfig(newConfig) {
    Object.assign(CONFIG, newConfig);
    // Guardar en persistencia local para no pedirlo siempre
    if (newConfig.API_KEY) await NoorDB.userPrefs.set('drive_api_key', newConfig.API_KEY);
    if (newConfig.CLIENT_ID) await NoorDB.userPrefs.set('drive_client_id', newConfig.CLIENT_ID);
    if (newConfig.ROOT_FOLDER_ID) await NoorDB.userPrefs.set('drive_root_id', newConfig.ROOT_FOLDER_ID);
  }

  async function initialize() {
    // Cargar config guardada de IndexedDB (prioridad) o usar los hardcoded del CONFIG
    CONFIG.API_KEY = await NoorDB.userPrefs.get('drive_api_key', CONFIG.API_KEY);
    CONFIG.CLIENT_ID = await NoorDB.userPrefs.get('drive_client_id', CONFIG.CLIENT_ID);
    CONFIG.ROOT_FOLDER_ID = await NoorDB.userPrefs.get('drive_root_id', CONFIG.ROOT_FOLDER_ID);

    // Rellenar automáticamente los inputs del Admin si existen
    _populateAdminInputs();

    console.log('[DriveConnector] ✓ Módulo inicializado con credenciales.');
  }

  function _populateAdminInputs() {
    const apiIn = document.getElementById('cfg-api-key');
    const cliIn = document.getElementById('cfg-client-id');
    const folIn = document.getElementById('cfg-folder-id');
    if (apiIn) apiIn.value = CONFIG.API_KEY || '';
    if (cliIn) cliIn.value = CONFIG.CLIENT_ID || '';
    if (folIn) folIn.value = CONFIG.ROOT_FOLDER_ID || '';
  }

  /**
   * fetchMasterIndex()
   * Método compatible con app.js para la carga inicial.
   * Devuelve los documentos mezclados (Mock + Admin/Drive persistidos).
   */
  async function fetchMasterIndex() {
    return await NoorDB.docMeta.getMergedWithMock();
  }

  // API Pública
  return {
    initialize,
    fetchMasterIndex,
    syncHemeroteca,
    updateConfig,
    CONFIG
  };

})();

window.DriveConnector = DriveConnector;
