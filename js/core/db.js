/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — NoorDB (IndexedDB Wrapper)
 * ══════════════════════════════════════════════════════════
 *
 * Base de datos local del investigador. Persiste en el
 * navegador sin necesidad de servidor ni cuenta de usuario.
 *
 * STORES (tablas):
 *   notes        → Notas de investigación por documento
 *   collections  → Colecciones/grupos de documentos favoritos
 *   doc_meta     → Caché local de metadatos enriquecidos por el admin
 *   user_prefs   → Preferencias de interfaz
 *
 * USO:
 *   await NoorDB.init()
 *   await NoorDB.notes.save({ docId, content, tags })
 *   await NoorDB.collections.getAll()
 */

const NoorDB = (() => {
  const DB_NAME    = 'noor-archive-db';
  const DB_VERSION = 2;
  let _db = null;

  // ─── Definición de stores ───
  const STORES = {
    NOTES:       'notes',
    COLLECTIONS: 'collections',
    DOC_META:    'doc_meta',
    USER_PREFS:  'user_prefs',
  };

  // ─────────────────────────────────────────────────────────
  // INICIALIZACIÓN
  // ─────────────────────────────────────────────────────────

  /**
   * init()
   * Abre la conexión a IndexedDB y crea los stores si no existen.
   * @returns {Promise<IDBDatabase>}
   */
  function init() {
    return new Promise((resolve, reject) => {
      if (_db) { resolve(_db); return; }

      const req = indexedDB.open(DB_NAME, DB_VERSION);

      req.onupgradeneeded = (e) => {
        const db = e.target.result;

        // ── Store: notes ──
        if (!db.objectStoreNames.contains(STORES.NOTES)) {
          const store = db.createObjectStore(STORES.NOTES, {
            keyPath: 'id', autoIncrement: true,
          });
          store.createIndex('docId', 'docId', { unique: false });
          store.createIndex('updatedAt', 'updatedAt', { unique: false });
        }

        // ── Store: collections ──
        if (!db.objectStoreNames.contains(STORES.COLLECTIONS)) {
          const store = db.createObjectStore(STORES.COLLECTIONS, {
            keyPath: 'id',
          });
          store.createIndex('name', 'name', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
        }

        // ── Store: doc_meta (documentos creados/editados por el admin) ──
        if (!db.objectStoreNames.contains(STORES.DOC_META)) {
          db.createObjectStore(STORES.DOC_META, { keyPath: 'id' });
        }

        // ── Store: user_prefs ──
        if (!db.objectStoreNames.contains(STORES.USER_PREFS)) {
          db.createObjectStore(STORES.USER_PREFS, { keyPath: 'key' });
        }
      };

      req.onsuccess = (e) => {
        _db = e.target.result;
        console.log(`[NoorDB] ✓ Base de datos "${DB_NAME}" abierta (v${DB_VERSION}).`);
        resolve(_db);
      };

      req.onerror = (e) => {
        console.error('[NoorDB] ✗ Error al abrir IndexedDB:', e.target.error);
        reject(e.target.error);
      };
    });
  }

  // ─────────────────────────────────────────────────────────
  // OPERACIONES GENÉRICAS SOBRE STORES
  // ─────────────────────────────────────────────────────────

  function _transaction(storeName, mode = 'readonly') {
    if (!_db) throw new Error('[NoorDB] La base de datos no está inicializada. Llama a NoorDB.init() primero.');
    return _db.transaction([storeName], mode).objectStore(storeName);
  }

  function _promisify(req) {
    return new Promise((res, rej) => {
      req.onsuccess = (e) => res(e.target.result);
      req.onerror   = (e) => rej(e.target.error);
    });
  }

  function _getAll(storeName) {
    return _promisify(_transaction(storeName).getAll());
  }

  function _get(storeName, key) {
    return _promisify(_transaction(storeName).get(key));
  }

  function _put(storeName, data) {
    return _promisify(_transaction(storeName, 'readwrite').put(data));
  }

  function _delete(storeName, key) {
    return _promisify(_transaction(storeName, 'readwrite').delete(key));
  }

  function _getAllByIndex(storeName, indexName, value) {
    return new Promise((res, rej) => {
      const store  = _transaction(storeName);
      const index  = store.index(indexName);
      const req    = index.getAll(value);
      req.onsuccess = (e) => res(e.target.result);
      req.onerror   = (e) => rej(e.target.error);
    });
  }

  // ─────────────────────────────────────────────────────────
  // NOTES API
  // ─────────────────────────────────────────────────────────

  const notes = {
    /**
     * Guarda o actualiza una nota de investigación.
     * @param {{ id?, docId, content, tags }} note
     */
    save(note) {
      const data = {
        ...note,
        updatedAt: new Date().toISOString(),
        createdAt: note.createdAt || new Date().toISOString(),
      };
      return _put(STORES.NOTES, data);
    },

    /** Obtiene todas las notas de un documento. */
    getByDoc(docId) {
      return _getAllByIndex(STORES.NOTES, 'docId', docId);
    },

    /** Obtiene todas las notas del investigador. */
    getAll() {
      return _getAll(STORES.NOTES);
    },

    /** Elimina una nota por ID. */
    delete(id) {
      return _delete(STORES.NOTES, id);
    },

    /** Busca notas que contengan el texto dado. */
    async search(query) {
      const all = await this.getAll();
      const q   = query.toLowerCase();
      return all.filter(n =>
        n.content.toLowerCase().includes(q) ||
        (n.tags || []).some(t => t.toLowerCase().includes(q))
      );
    },
  };

  // ─────────────────────────────────────────────────────────
  // COLLECTIONS API
  // ─────────────────────────────────────────────────────────

  const collections = {
    /**
     * Crea o actualiza una colección.
     * @param {{ id, name, description, docIds, color }} col
     */
    save(col) {
      const data = {
        ...col,
        id:        col.id || `col_${Date.now()}`,
        docIds:    col.docIds || [],
        color:     col.color || '#c9a84c',
        updatedAt: new Date().toISOString(),
        createdAt: col.createdAt || new Date().toISOString(),
      };
      return _put(STORES.COLLECTIONS, data);
    },

    getAll() { return _getAll(STORES.COLLECTIONS); },
    get(id)  { return _get(STORES.COLLECTIONS, id); },
    delete(id){ return _delete(STORES.COLLECTIONS, id); },

    /** Añade o quita un documento de una colección. */
    async toggleDoc(collectionId, docId) {
      const col = await this.get(collectionId);
      if (!col) throw new Error(`Colección ${collectionId} no encontrada.`);
      const docIds = col.docIds || [];
      const idx    = docIds.indexOf(docId);
      if (idx === -1) docIds.push(docId);
      else            docIds.splice(idx, 1);
      return this.save({ ...col, docIds });
    },

    /** Comprueba si un doc está en alguna colección. */
    async isDocFavorited(docId) {
      const all = await this.getAll();
      return all.some(col => (col.docIds || []).includes(docId));
    },

    /** Obtiene las colecciones que contienen un documento. */
    async getCollectionsForDoc(docId) {
      const all = await this.getAll();
      return all.filter(col => (col.docIds || []).includes(docId));
    },
  };

  // ─────────────────────────────────────────────────────────
  // DOC_META API (Admin: documentos creados/editados)
  // ─────────────────────────────────────────────────────────

  const docMeta = {
    /**
     * Guarda un documento creado/editado en el Admin Dashboard.
     * Estos se combinan con los mock-data en tiempo de ejecución.
     */
    save(doc) {
      const data = {
        ...doc,
        _source:   'admin',
        updatedAt: new Date().toISOString(),
        createdAt: doc.createdAt || new Date().toISOString(),
      };
      return _put(STORES.DOC_META, data);
    },

    getAll() { return _getAll(STORES.DOC_META); },
    get(id)  { return _get(STORES.DOC_META, id); },
    delete(id){ return _delete(STORES.DOC_META, id); },

    /**
     * Devuelve TODOS los documentos (mock + admin) combinados.
     * Los documentos del admin sobreescriben los mock si tienen el mismo ID.
     */
    async getMergedWithMock() {
      const mockDocs  = window.NoorMockData?.documents || [];
      const adminDocs = await this.getAll();

      const merged = [...mockDocs];
      adminDocs.forEach(adminDoc => {
        const idx = merged.findIndex(d => d.id === adminDoc.id);
        if (idx !== -1) merged[idx] = adminDoc; // sobreescribir mock existente
        else            merged.push(adminDoc);  // añadir nuevo
      });

      return merged;
    },
  };

  // ─────────────────────────────────────────────────────────
  // USER_PREFS API
  // ─────────────────────────────────────────────────────────

  const userPrefs = {
    set(key, value) { return _put(STORES.USER_PREFS, { key, value }); },
    async get(key, defaultValue = null) {
      const result = await _get(STORES.USER_PREFS, key);
      return result ? result.value : defaultValue;
    },
    delete(key) { return _delete(STORES.USER_PREFS, key); },
  };

  // ─────────────────────────────────────────────────────────
  // EXPORTACIÓN MASIVA (para backup)
  // ─────────────────────────────────────────────────────────

  /**
   * exportAll()
   * Genera un objeto JSON con todo el contenido de la base de datos.
   * Usar para backup antes de limpiar el navegador.
   */
  async function exportAll() {
    const [allNotes, allCollections, allDocMeta] = await Promise.all([
      notes.getAll(),
      collections.getAll(),
      docMeta.getAll(),
    ]);

    return {
      exportedAt:  new Date().toISOString(),
      version:     DB_VERSION,
      notes:       allNotes,
      collections: allCollections,
      docMeta:     allDocMeta,
    };
  }

  /**
   * importAll(data)
   * Restaura los datos desde un backup JSON.
   * @param {object} data - resultado de exportAll()
   */
  async function importAll(data) {
    const { notes: n = [], collections: c = [], docMeta: d = [] } = data;
    await Promise.all([
      ...n.map(note => notes.save(note)),
      ...c.map(col  => collections.save(col)),
      ...d.map(doc  => docMeta.save(doc)),
    ]);
    console.log(`[NoorDB] ✓ Importación completada: ${n.length} notas, ${c.length} colecciones, ${d.length} docs.`);
  }

  // API pública
  return { init, notes, collections, docMeta, userPrefs, exportAll, importAll, STORES };
})();

window.NoorDB = NoorDB;
console.log('[NoorDB] ✓ Módulo definido.');
