/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Batch Upload Processor (Vol 2)
 * ══════════════════════════════════════════════════════════
 * 
 * Gestiona la ingesta masiva de documentos desde archivos CSV.
 */

const BatchLoader = (() => {

  /**
   * Procesa un archivo CSV mediante FileReader.
   * Delimitador: ; | Internos: |
   */
  async function processCSV(file) {
    const text = await file.text();
    const lines = text.split(/\r?\n/).filter(line => line.trim());
    
    if (lines.length < 2) {
      throw new Error('El archivo CSV está vacío o le falta la cabecera.');
    }

    const headers = lines[0].split(';').map(h => h.trim());
    const rows = lines.slice(1);
    
    let imported = 0;
    let errors = 0;
    const total = rows.length;

    _showProgress(0, total);

    for (let i = 0; i < rows.length; i++) {
      const rowText = rows[i];
      const values = rowText.split(';').map(v => v.trim());
      const rowObj = {};
      headers.forEach((h, idx) => { rowObj[h] = values[idx] || ''; });

      try {
        const doc = _mapRowToDocument(rowObj);
        if (_validateDocument(doc)) {
          await NoorDB.docMeta.save(doc);
          imported++;

          // Clasificación automática (Misión Vol. 2)
          if (doc.tags.includes('Prensa') || doc.tags.includes('Cultura')) {
            await _autoCollect(doc.id, 'Revision Vol. 2');
          }
        } else {
          errors++;
          console.error('[Batch] Error de validación en fila:', i + 1, doc);
        }
      } catch (err) {
        console.error('[Batch] Fallo crítico en fila:', i + 1, err);
        errors++;
      }
      
      _showProgress(i + 1, total);
    }

    return { imported, errors, total };
  }

  /**
   * Mapea una fila de CSV a un objeto NoorDocument profesional.
   */
  function _mapRowToDocument(row) {
    // Lógica de ID único
    const docId = row.id || `doc-v2-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // 1. Lógica de Fecha (Modo Experto)
    // Si solo hay un año (ej. 950), convertir a 950-01-01
    let exactDate = row.exact_date || '';
    let year = parseInt(row.year);

    if (!exactDate && row.year) {
      exactDate = `${row.year.padStart(4, '0')}-01-01`;
    }

    // 2. Lógica de Coordenadas (lat,lng string support)
    let lat = parseFloat(row.lat);
    let lng = parseFloat(row.lng);
    const coordsStr = row.coordinates || ''; // por si viene como "37.88,-4.77"
    if (coordsStr && coordsStr.includes(',')) {
      const parts = coordsStr.split(',');
      lat = parseFloat(parts[0]);
      lng = parseFloat(parts[1]);
    }

    // 3. Generación de Thumbnails Profesionales (G: Drive Direct)
    const driveId = row.driveFileId || '';
    const thumbnail = driveId ? `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000` : '';

    return {
      id:             docId,
      title:          row.title || 'Documento sin título',
      type:           row.type || 'newspaper',
      eraId:          row.eraId || _getEraFromYear(year),
      year:           year || 0,
      exact_date:     exactDate,
      date_precision: exactDate && !exactDate.endsWith('-01-01') ? 'day' : 'year',
      language:       row.language || 'es',
      description:    row.description || 'Sin descripción.',
      
      // Chips visuales (Etiquetas | Regiones | Temas)
      themes:         row.themes ? row.themes.split('|').map(s => s.trim()).filter(Boolean) : [],
      regions:        row.regions ? row.regions.split('|').map(s => s.trim()).filter(Boolean) : [],
      tags:           row.tags ? row.tags.split('|').map(s => s.trim()).filter(Boolean) : [],
      
      media: {
        thumbnail:   thumbnail,
        pages:       [],
        pdf:         row.type === 'newspaper' ? driveId : null,
        driveFileId: driveId,
      },
      metadata: {
        creator:     row.author || row.creator || 'Investigador Noor',
        publisher:   'Archivo Noor — Volumen 2',
        format:      'application/pdf',
        identifier:  docId
      },
      coordinates: (lat && lng) ? { lat, lng, place: row.regions || '' } : null,
      _source: 'batch_v2'
    };
  }

  function _validateDocument(doc) {
    if (!doc.title || doc.year === 0) return false;
    
    // Validación estricta YYYY-MM-DD
    if (doc.exact_date && !/^(\d{4})-(\d{2})-(\d{2})$/.test(doc.exact_date)) return false;

    // CONTROL DE ERRORES: Detección de Carpetas (Misión Control)
    const FOLDER_ID_REVISTAS = '1pbzpdOKtL3b9O82Te5ioAg7V1m2I9a9T';
    if (doc.media.driveFileId === FOLDER_ID_REVISTAS) {
      console.warn(`[BatchLoader] Registro "${doc.title}" rechazado: El ID proporcionado es una Carpeta, no un archivo individual.`);
      return false;
    }
    
    return true;
  }

  /**
   * Clasifica automáticamente documentos en colecciones según etiquetas.
   */
  async function _autoCollect(docId, colName) {
    try {
      const cols = await NoorDB.collections.getAll();
      let col = cols.find(c => c.name === colName);
      
      if (!col) {
        col = { 
          id: `col-${colName.toLowerCase().replace(/\s+/g, '-')}`,
          name: colName, 
          description: 'Ingesta automática desde Carpeta 01_REVISTAS', 
          docIds: [],
          color: '#c9a84c'
        };
      }
      
      if (!col.docIds.includes(docId)) {
        col.docIds.push(docId);
        await NoorDB.collections.save(col);
        console.log(`[BatchLoader] Doc ${docId} clasificado en: ${colName}`);
      }
    } catch (err) {
      console.warn('[BatchLoader] No se pudo auto-clasificar:', err);
    }
  }

  function _getEraFromYear(year) {
    if (!window.NoorSchema) return 'S19';
    const eras = window.NoorSchema.HISTORICAL_ERAS;
    for (const key in eras) {
      const [start, end] = eras[key].range;
      if (year >= start && year <= end) return key;
    }
    return 'S19';
  }

  function _showProgress(current, total) {
    const msg = document.getElementById('batch-results-msg');
    const panel = document.getElementById('batch-results-panel');
    if (panel) panel.style.display = 'block';
    if (msg) {
      const percent = Math.round((current / total) * 100);
      msg.innerHTML = `
        <div style="font-size:0.75rem;margin-bottom:0.5rem">
          ⏳ Procesando documentos: ${current} / ${total} (${percent}%)
        </div>
        <div style="width:100%;height:3px;background:rgba(255,255,255,0.1);border-radius:10px;overflow:hidden">
          <div style="width:${percent}%;height:100%;background:var(--color-gold);transition:width 0.2s"></div>
        </div>
      `;
    }
  }

  return { processCSV };
})();

window.BatchLoader = BatchLoader;
