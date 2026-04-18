/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Esquema de Datos (Schema)
 * ══════════════════════════════════════════════════════════
 *
 * Este archivo define las FORMAS (shapes) de los datos que
 * fluyen por la aplicación. Sirve como contrato entre el
 * backend (Google Drive / API) y los componentes UI.
 *
 * ESTRUCTURA DE ENTIDADES PRINCIPALES:
 *   - Document     → Un documento / recorte / publicación histórica
 *   - Event        → Un evento histórico (puede agrupar documentos)
 *   - TaxonomyNode → Nodo del árbol de navegación (época / tema)
 *   - FilterState  → Estado actual de los filtros de búsqueda
 */

// ─────────────────────────────────────────────────────────────
// CONSTANTES DEL SISTEMA
// ─────────────────────────────────────────────────────────────

/** Tipos de documento soportados */
const DOCUMENT_TYPES = {
  NEWSPAPER:  'newspaper',   // Periódico / hemeroteca
  CHRONICLE:  'chronicle',   // Crónica histórica
  DECREE:     'decree',      // Decreto / documento oficial
  MANUSCRIPT: 'manuscript',  // Manuscrito
  MAP:        'map',         // Mapa histórico
  IMAGE:      'image',       // Imagen / grabado
  MIXED:      'mixed',       // Recopilación mixta
};

/** Épocas históricas del proyecto Noor (Al-Ándalus: S.VIII–XIX) */
const HISTORICAL_ERAS = {
  S08: { id: 'S08', label: 'Siglo VIII',  range: [711, 800],  color: '#8b6914' },
  S09: { id: 'S09', label: 'Siglo IX',   range: [800, 900],  color: '#9a7a2e' },
  S10: { id: 'S10', label: 'Siglo X',    range: [900, 1000], color: '#c9a84c' },
  S11: { id: 'S11', label: 'Siglo XI',   range: [1000,1100], color: '#d4a54a' },
  S12: { id: 'S12', label: 'Siglo XII',  range: [1100,1200], color: '#c9a84c' },
  S13: { id: 'S13', label: 'Siglo XIII', range: [1200,1300], color: '#b8956a' },
  S14: { id: 'S14', label: 'Siglo XIV',  range: [1300,1400], color: '#a07850' },
  S15: { id: 'S15', label: 'Siglo XV',   range: [1400,1492], color: '#8b6030' },
  S16: { id: 'S16', label: 'Siglo XVI',  range: [1492,1600], color: '#7a5020' },
  S17: { id: 'S17', label: 'Siglo XVII', range: [1600,1700], color: '#6b4010' },
  S18: { id: 'S18', label: 'Siglo XVIII',range: [1700,1800], color: '#5a3010' },
  S19: { id: 'S19', label: 'Siglo XIX',  range: [1800,1900], color: '#4a2010' },
};

/** Dimensiones temáticas (multidimensional) */
const THEMATIC_DIMENSIONS = {
  POL:  { id: 'POL',  label: 'Político',  icon: 'landmark' },
  SOC:  { id: 'SOC',  label: 'Social',    icon: 'users' },
  CUL:  { id: 'CUL',  label: 'Cultural',  icon: 'book-open' },
  ECO:  { id: 'ECO',  label: 'Económico', icon: 'coins' },
  REL:  { id: 'REL',  label: 'Religioso', icon: 'scroll' },
  MIL:  { id: 'MIL',  label: 'Militar',   icon: 'swords' },
  SCI:  { id: 'SCI',  label: 'Científico',icon: 'flask-conical' },
  ART:  { id: 'ART',  label: 'Artístico', icon: 'palette' },
};

/** Regiones geográficas de Al-Ándalus */
const REGIONS = {
  QURTUBA:         'Córdoba (Qurtuba)',
  ISHBILIYYA:      'Sevilla (Ishbiliyya)',
  TULAYTULAY:      'Toledo (Tulayṭula)',
  GARNATA:         'Granada (Garnāṭa)',
  SARAQUSTA:       'Zaragoza (Saraqusṭa)',
  MALAGA:          'Málaga',
  ALMERIA:         'Almería',
  BALANSIYA:       'Valencia (Balansiya)',
  NORTH_AFRICA:    'Norte de África',
  GENERAL:         'Al-Ándalus (general)',
  MADINAT_AL_ZAHRA:'Madīnat al-Zahrāʾ (sitio)',
  ALHAMBRA:        'La Alhambra (sitio)',
};

/**
 * Mapa de coordenadas de referencia por región.
 * Sincronizado con js/data/geo-data.js para uso interno.
 * El mapa usa GeoData.GEO_LOCATIONS para la localización precisa.
 */
const REGION_DEFAULT_COORDS = {
  QURTUBA:      { lat: 37.8882, lng: -4.7794 },
  ISHBILIYYA:   { lat: 37.3891, lng: -5.9845 },
  TULAYTULAY:   { lat: 39.8628, lng: -4.0273 },
  GARNATA:      { lat: 37.1764, lng: -3.5986 },
  SARAQUSTA:    { lat: 41.6488, lng: -0.8891 },
  MALAGA:       { lat: 36.7201, lng: -4.4203 },
  ALMERIA:      { lat: 36.8340, lng: -2.4637 },
  BALANSIYA:    { lat: 39.4699, lng: -0.3763 },
  NORTH_AFRICA: { lat: 33.8869, lng: -5.3626 },
  GENERAL:      { lat: 37.5,    lng: -4.0    },
};

// ─────────────────────────────────────────────────────────────
// PLANTILLAS DE ENTIDADES (para validar datos entrantes)
// ─────────────────────────────────────────────────────────────

/**
 * NoorTranscription — Transcripción de un documento manuscrito
 *
 * CAMPO CLAVE para manuscritos donde el OCR automático falla.
 * La transcripción se introduce MANUALMENTE en el metadatos.json
 * de cada carpeta de siglo en Google Drive.
 *
 * @typedef {Object} NoorTranscription
 * @property {string}   fullText      - Transcripción completa (si es de 1 página)
 * @property {string[]} pages         - Array de textos, uno por página del documento
 * @property {string}   transcribedBy - Nombre del transcriptor
 * @property {string}   transcribedAt - Fecha de transcripción (ISO 8601)
 * @property {string}   notes         - Notas del transcriptor (abreviaturas, dudas)
 * @property {'manual'|'ocr'|'hybrid'} method - Método de transcripción
 * @property {number}   confidence    - Confianza (0–1). 1 = revisada por experto.
 * @property {string}   script        - Sistema de escritura (nasj, kufic, carolingio, etc.)
 */

/**
 * Document — Entidad base de todo documento histórico
 *
 * @typedef {Object} NoorDocument
 * @property {string}   id          - UUID/slug único
 * @property {string}   title       - Título del documento
 * @property {string}   type        - DOCUMENT_TYPES value
 * @property {string}   eraId       - HISTORICAL_ERAS key
 * @property {number}   year        - Año de origen (aprox.)
 * @property {string[]} themes      - Array de THEMATIC_DIMENSIONS keys
 * @property {string[]} regions     - Array de REGIONS keys
 * @property {string}   description - Descripción/resumen del documento
 * @property {string}   source      - Institución / archivo origen
 * @property {string}   language    - Idioma original (ar, es, la, he, ber)
 * @property {NoorMedia}        media        - Archivos multimedia asociados
 * @property {NoorMeta}         metadata     - Metadatos Dublin Core
 * @property {NoorTranscription} transcription - Transcripción manual del manuscrito
 * @property {string[]}         eventIds     - Eventos históricos relacionados
 * @property {string[]}         tags         - Etiquetas adicionales de búsqueda
 * @property {string}           driveId      - Google Drive file ID (PLACEHOLDER)
 */
const DocumentTemplate = {
  id: '',
  title: '',
  type: DOCUMENT_TYPES.NEWSPAPER,
  eraId: 'S10',
  year: null,
  yearEnd: null,        // para rangos
  themes: [],
  regions: [],
  description: '',
  source: '',
  language: 'ar',
  media: {
    thumbnail: '',      // URL o Drive ID de la imagen de portada
    pages: [],          // Array de DriveFileIds (uno por página escaneada)
    pdf: '',            // DriveFileId del PDF original
    driveFileId: '',    // ← PLACEHOLDER: ID del archivo en Google Drive
  },
  metadata: {
    creator: '',            // Autor/Creador
    contributor: '',        // Colaborador / compilador moderno
    publisher: '',          // Editorial / institución
    rights: '',             // Licencia / copyright
    format: '',             // image/jpeg, application/pdf, etc.
    identifier: '',         // ISBN, ref. de archivo
    scanResolution: '',     // ej: '400dpi' — importante para manuscritos
    condition: '',          // Estado físico: bueno|regular|deteriorado
  },
  /**
   * GEOLOCALIZACIÓN — Para el mapa (Fase 3)
   *
   * Si el documento tiene una localización precisa (ej: lugar de creación,
   * archivo de origen, o lugar del evento descrito), agrégalo aquí.
   * Si no, se infiere de regions[] usando REGION_DEFAULT_COORDS.
   *
   * @property {number|null} lat   - Latitud decimal (ej: 37.8882)
   * @property {number|null} lng   - Longitud decimal (ej: -4.7794)
   * @property {string}      place - Nombre del lugar preciso
   */
  coordinates: {
    lat:   null,   // @PLACEHOLDER: latitud
    lng:   null,   // @PLACEHOLDER: longitud
    place: '',     // ej: 'Madinat al-Zahra, Córdoba'
  },
  /**
   * FECHA EXACTA — Para la línea de tiempo (Fase 3)
   *
   * Si el documento tiene fecha precisa (más allá del año),
   * usa exact_date. Permite ordenamiento fino en la timeline.
   *
   * @property {string|null} exact_date - ISO 8601 (ej: '0978-03-15')
   * @property {string}      precision  - 'year'|'month'|'day'|'circa'
   */
  exact_date: null,    // @PLACEHOLDER: '0978-03-15' o null si solo se conoce el año
  date_precision: 'year', // 'year'|'month'|'day'|'circa'
  /**
   * TRANSCRIPCIÓN MANUAL — rellenar en metadatos.json
   *
   * Si el documento tiene UNA SOLA PÁGINA → usa fullText.
   * Si tiene VARIAS PÁGINAS → usa pages[] (un string por página).
   * El campo pages[] debe tener la misma longitud que media.pages[].
   */
  transcription: null,  // null = no disponible | NoorTranscription = disponible
  /* Ejemplo de transcripción:
  transcription: {
    fullText: 'بسم الله الرحمن الرحيم...',  // para doc de 1 página
    pages: [                                  // para doc multipágina
      'بسم الله الرحمن الرحيم...',           // página 1
      'واعلم أن الملك يدور على...',           // página 2
    ],
    transcribedBy: 'Leonardo Gallardo',
    transcribedAt: '2026-04-17',
    notes: 'Escritura nasj del s. X. Abreviatura ق.م = قبل الميلاد',
    method: 'manual',
    confidence: 0.92,
    script: 'nasj',
  }
  */
  eventIds: [],
  tags: [],
  createdAt: null,
  updatedAt: null,
};

/**
 * HistoricalEvent — Evento histórico (agrupa documentos)
 *
 * @typedef {Object} NoorEvent
 * @property {string}   id          - UUID/slug único
 * @property {string}   title       - Nombre del evento
 * @property {number}   year        - Año del evento
 * @property {string}   eraId       - Época asociada
 * @property {string[]} themes      - Dimensiones temáticas
 * @property {string}   description - Descripción del evento
 * @property {string[]} documentIds - Documentos que evidencian el evento
 * @property {string[]} regions     - Regiones involucradas
 */
const EventTemplate = {
  id: '',
  title: '',
  year: null,
  eraId: '',
  themes: [],
  description: '',
  documentIds: [],
  regions: [],
  importance: 'medium', // low | medium | high | critical
};

// ─────────────────────────────────────────────────────────────
// ESTADO DE FILTROS (Filter State Machine)
// ─────────────────────────────────────────────────────────────

/**
 * FilterState — Estado global de búsqueda y filtrado.
 * Se exporta al StateManager (core/state.js)
 */
const FilterStateSchema = {
  query: '',              // Texto libre de búsqueda
  eraIds: [],            // Épocas seleccionadas
  themes: [],            // Temas seleccionados
  regions: [],           // Regiones seleccionadas
  types: [],             // Tipos de documento seleccionados
  languages: [],         // Idiomas seleccionados
  yearRange: [711, 1900],// Rango de años [desde, hasta]
  sortBy: 'year_asc',   // year_asc | year_desc | relevance | title
  viewMode: 'grid',      // grid | list
  page: 1,
  perPage: 24,
};

// Exportar para uso global
window.NoorSchema = {
  DOCUMENT_TYPES,
  HISTORICAL_ERAS,
  THEMATIC_DIMENSIONS,
  REGIONS,
  DocumentTemplate,
  EventTemplate,
  FilterStateSchema,
};

console.log('[Noor Schema] ✓ Entidades cargadas:', Object.keys(window.NoorSchema));
