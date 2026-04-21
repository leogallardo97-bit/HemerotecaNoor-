/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Esquema de Datos (Schema)
 * ══════════════════════════════════════════════════════════
 *
 * Este archivo define las FORMAS (shapes) de los datos que
 * fluyen por la aplicación. Sirve como contrato entre el
 * backend (Google Drive / API) y los componentes UI.
 */

// ─────────────────────────────────────────────────────────────
// CONSTANTES DEL SISTEMA
// ─────────────────────────────────────────────────────────────

/** Tipos de documento soportados */
const DOCUMENT_TYPES = {
  NEWSPAPER:  'newspaper',
  CHRONICLE:  'chronicle',
  DECREE:     'decree',
  MANUSCRIPT: 'manuscript',
  MAP:        'map',
  IMAGE:      'image',
  MIXED:      'mixed',
};

/** Épocas históricas del proyecto Noor (Al-Ándalus hasta S. XXI) */
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
  S20: { id: 'S20', label: 'Siglo XX',   range: [1900, 2000],color: '#3a1010' },
  S21: { id: 'S21', label: 'Siglo XXI',  range: [2000, 2100],color: '#2a0a0a' },
};

/** Dimensiones temáticas */
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

/** Regiones geográficas */
const REGIONS = {
  QURTUBA:         'Córdoba / Qurtuba',
  ISHBILIYYA:      'Sevilla / Ishbiliyya',
  TULAYTULAY:      'Toledo / Tulayṭula',
  GARNATA:         'Granada / Garnāṭa',
  SARAQUSTA:       'Zaragoza / Saraqusṭa',
  MALAGA:          'Málaga / Mālaqa',
  ALMERIA:         'Almería / Al-Mariyya',
  BALANSIYA:       'Valencia / Balansiya',
  NORTH_AFRICA:    'Norte de África',
  GENERAL:         'Al-Ándalus (General)',
  MADINAT_AL_ZAHRA:'Madīnat al-Zahrāʾ (Sitio)',
  ALHAMBRA:        'La Alhambra (Sitio)',
};

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

const DocumentTemplate = {
  id: '',
  title: '',
  type: DOCUMENT_TYPES.NEWSPAPER,
  eraId: 'S21',
  year: null,
  yearEnd: null,
  themes: [],
  regions: [],
  description: '',
  source: '',
  language: 'es',
  media: {
    thumbnail: '',
    pages: [],
    pdf: '',
    driveFileId: '',
  },
  metadata: {
    creator: '',
    contributor: '',
    publisher: '',
    rights: '',
    format: '',
    identifier: '',
    scanResolution: '',
    condition: '',
  },
  coordinates: {
    lat:   null,
    lng:   null,
    place: '',
  },
  exact_date: null,
  date_precision: 'year',
  transcription: null,
  eventIds: [],
  tags: [],
  createdAt: null,
  updatedAt: null,
};

const EventTemplate = {
  id: '', title: '', year: null, eraId: '', themes: [], description: '', documentIds: [], regions: [], importance: 'medium'
};

const FilterStateSchema = {
  query: '',
  eraIds: [],
  themes: [],
  regions: [],
  types: [],
  languages: [],
  yearRange: [711, 2100],
  sortBy: 'year_asc',
  viewMode: 'grid',
  page: 1,
  perPage: 24,
};

window.NoorSchema = {
  DOCUMENT_TYPES,
  HISTORICAL_ERAS,
  THEMATIC_DIMENSIONS,
  REGIONS,
  DocumentTemplate,
  EventTemplate,
  FilterStateSchema,
};

console.log('[Noor Schema] ✓ Esquema modernizado (S.VIII - S.XXI) cargado.');
