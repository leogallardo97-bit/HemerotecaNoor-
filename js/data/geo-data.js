/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Base de Datos Geográfica de Al-Ándalus
 * ══════════════════════════════════════════════════════════
 *
 * Coordenadas históricas de las principales ciudades y regiones
 * de Al-Ándalus (711–1492). Las coordenadas corresponden a las
 * ciudades modernas que heredaron el emplazamiento histórico.
 *
 * USO: El MapComponent lee este objeto para posicionar marcadores
 * en Leaflet cuando un documento tiene un campo `regions[]`.
 *
 * PARA AÑADIR NUEVAS LOCALIDADES:
 *   1. Añade la entrada en GEO_LOCATIONS con la clave REGIONS.
 *   2. La clave debe coincidir exactamente con las de NoorSchema.REGIONS.
 *   3. El mapa la pintará automáticamente.
 */

const GEO_LOCATIONS = {
  // ── Ciudades principales de Al-Ándalus ──
  QURTUBA: {
    name:     'Córdoba (Qurtuba)',
    nameAr:   'قرطبة',
    lat:      37.8882,
    lng:      -4.7794,
    type:     'city',
    peak:     'S10',         // siglo de mayor relevancia
    desc:     'Capital del Califato Omeya de Al-Ándalus. Sede de los principales centros de conocimiento de Occidente en el s. X.',
    zoom:     10,
  },
  ISHBILIYYA: {
    name:     'Sevilla (Ishbiliyya)',
    nameAr:   'إشبيلية',
    lat:      37.3891,
    lng:      -5.9845,
    type:     'city',
    peak:     'S12',
    desc:     'Segunda ciudad de Al-Ándalus. Capital del reino taifa abbadí y, posteriormente, sede almohade.',
    zoom:     10,
  },
  TULAYTULAY: {
    name:     'Toledo (Tulayṭula)',
    nameAr:   'طليطلة',
    lat:      39.8628,
    lng:      -4.0273,
    type:     'city',
    peak:     'S11',
    desc:     'Ciudad multiconfesional. Centro de intercambio cultural entre las tres culturas hasta su conquista en 1085.',
    zoom:     10,
  },
  GARNATA: {
    name:     'Granada (Garnāṭa)',
    nameAr:   'غرناطة',
    lat:      37.1764,
    lng:      -3.5986,
    type:     'city',
    peak:     'S14',
    desc:     'Capital del último reino musulmán de la Península Ibérica (1238–1492). Sede de la Alhambra.',
    zoom:     10,
  },
  SARAQUSTA: {
    name:     'Zaragoza (Saraqusṭa)',
    nameAr:   'سرقسطة',
    lat:      41.6488,
    lng:      -0.8891,
    type:     'city',
    peak:     'S11',
    desc:     'Capital del taifa hudí en el s. XI. Importante centro científico con la Banu Hud.',
    zoom:     10,
  },
  MALAGA: {
    name:     'Málaga',
    nameAr:   'مالقة',
    lat:      36.7201,
    lng:      -4.4203,
    type:     'city',
    peak:     'S13',
    desc:     'Puerto estratégico y centro comercial del sureste andalusí.',
    zoom:     10,
  },
  ALMERIA: {
    name:     'Almería',
    nameAr:   'المرية',
    lat:      36.8340,
    lng:      -2.4637,
    type:     'city',
    peak:     'S10',
    desc:     'Principal puerto de Al-Ándalus en el s. X. Centro de exportación de seda y artesanías.',
    zoom:     10,
  },
  BALANSIYA: {
    name:     'Valencia (Balansiya)',
    nameAr:   'بلنسية',
    lat:      39.4699,
    lng:      -0.3763,
    type:     'city',
    peak:     'S11',
    desc:     'Capital del taifa Banū Āmirids. Ciudad de huertos y acequias influenciada por la Acequia Mayor.',
    zoom:     10,
  },
  NORTH_AFRICA: {
    name:     'Norte de África',
    nameAr:   'شمال أفريقيا',
    lat:      33.8869,
    lng:      -5.3626,
    type:     'region',
    peak:     'S12',
    desc:     'Marruecos y Magreb. Origen de la dinastía almorávide (1086) y almohade (1147), que renovaron Al-Ándalus.',
    zoom:     6,
  },
  GENERAL: {
    name:     'Al-Ándalus (general)',
    nameAr:   'الأندلس',
    lat:      37.5,
    lng:      -4.0,
    type:     'region',
    peak:     'S10',
    desc:     'Territorio general de Al-Ándalus en la Península Ibérica.',
    zoom:     6,
  },

  // ── Sitios arqueológicos y monumentales ──
  MADINAT_AL_ZAHRA: {
    name:     'Madīnat al-Zahrāʾ',
    nameAr:   'مدينة الزهراء',
    lat:      37.8953,
    lng:      -4.8472,
    type:     'site',
    peak:     'S10',
    desc:     'Palacio-ciudad construido por Abd al-Rahman III ca. 936. Símbolo máximo del Califato de Córdoba.',
    zoom:     12,
  },
  ALHAMBRA: {
    name:     'La Alhambra',
    nameAr:   'قصر الحمراء',
    lat:      37.1771,
    lng:      -3.5886,
    type:     'site',
    peak:     'S14',
    desc:     'Complejo palatino nazarí (s. XIV). Cumbre del arte islámico occidental.',
    zoom:     13,
  },
};

/**
 * Límites geográficos aproximados de Al-Ándalus para centrar el mapa.
 * Corresponden al período de máxima extensión (s. VIII).
 */
const AL_ANDALUS_BOUNDS = {
  center: [37.8, -4.0],  // centro aproximado (sobre Córdoba)
  zoom:    6,             // zoom inicial para ver la península
  maxBounds: [           // limitar el scroll del mapa
    [28.0, -12.0],       // SW — sur de Marruecos
    [46.0,  6.0],        // NE — Pirineos / sur de Francia
  ],
};

window.GeoData = { GEO_LOCATIONS, AL_ANDALUS_BOUNDS };
console.log(`[GeoData] ✓ ${Object.keys(GEO_LOCATIONS).length} localizaciones históricas cargadas.`);
