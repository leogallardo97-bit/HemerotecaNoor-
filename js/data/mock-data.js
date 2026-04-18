/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Datos Mock (Desarrollo)
 * ══════════════════════════════════════════════════════════
 *
 * PROPÓSITO: Datos de ejemplo que replican la estructura real
 * que vendrá de Google Drive. Permite desarrollar y visualizar
 * la UI sin necesidad de conexión a Drive.
 *
 * INSTRUCCIÓN PARA EL OPERADOR:
 * Cuando tengas los datos reales, SOLO debes crear archivos
 * `metadatos.json` en cada carpeta de Drive con esta misma
 * estructura. El DriveConnector los leerá automáticamente.
 *
 * FORMATO DEL ARCHIVO metadatos.json POR SIGLO:
 * {
 *   "era": "S10",
 *   "generatedAt": "2026-04-17",
 *   "documents": [ <array de NoorDocument> ]
 * }
 */

window.NoorMockData = {
  documents: [
    // ─────────────────────────────────────────────────────
    // SIGLO X — Califato de Córdoba (Apogeo)
    // ─────────────────────────────────────────────────────
    {
      id: 'doc-s10-001',
      title: 'Tratado de las Excelencias de Córdoba',
      type: 'manuscript',
      eraId: 'S10',
      year: 978,
      themes: ['POL', 'CUL'],
      regions: ['QURTUBA'],
      description: 'Manuscrito que describe la grandeza del Califato Omeya bajo Abd al-Rahman III y Al-Hakam II, detallando la administración de Madinat al-Zahra.',
      source: 'Biblioteca Nacional de España',
      language: 'ar',
      media: {
        thumbnail: '', // @PLACEHOLDER: driveThumbId
        pages: [],     // @PLACEHOLDER: array de driveFileIds de páginas
        pdf: '',       // @PLACEHOLDER: driveFileId del PDF
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S10_001',
      },
      metadata: {
        creator: 'Autor anónimo (atribuido a la cancillería califal)',
        contributor: 'Leonardo Gallardo (digitalización)',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'application/pdf',
        identifier: 'NOOR-S10-001',
        scanResolution: '400dpi',
        condition: 'bueno',
      },
      /**
       * TRANSCRIPCIÓN — Ejemplo con texto en árabe clásico (nasj)
       * Transcripción manual de folio único. Reemplaza con el texto real
       * cuando tengas el escaneo del documento en Drive.
       */
      transcription: {
        fullText: `بسم الله الرحمن الرحيم

فضائل قرطبة وما اشتملت عليه من العلوم والصناعات

اعلم -أيدك الله- أن قرطبة، حرسها الله، كانت في أيام الخلافة الأموية مقصد العلماء ومنتهى آمال الشعراء والمتفقهين. وكان الخليفة الناصر عبد الرحمن بن محمد -رحمه الله- يستقدم أهل الفضل من سائر البلدان، ويُجزل لهم العطاء، ويُدني مجلسهم.

وكان في داره من الكتب ما يجاوز أربعمائة ألف مجلد، معلمة بأسمائها وأصنافها، مما يدل على سعة علمه وشرف همته.

وأما مدينة الزهراء -حفظها الله- فإنها كانت أثراً من آثار الملك عجيباً، تزاحمت فيها المحاريب والأطواق والفسيفساء والرخام المجلوب من أقاصي الأرض...

[Continúa en folio 2r — pendiente de transcripción]`,
        transcribedBy: 'Leonardo Gallardo',
        transcribedAt: '2026-04-17',
        notes: 'Escritura nasj andalusí del s. X tardío. El término "أيدك الله" es fórmula de cortesía al destinatario. Las páginas 2r-4v están pendientes de transcribir.',
        method: 'manual',
        confidence: 0.88,
        script: 'nasj',
      },
      eventIds: ['evt-califato-cordoba'],
      tags: ['califato', 'cordoba', 'omeya', 'abd al-rahman', 'arquitectura', 'madinat al-zahra'],
    },
    {
      id: 'doc-s10-002',
      title: 'Kitab al-Agani — Selección de Cantos',
      type: 'manuscript',
      eraId: 'S10',
      year: 967,
      themes: ['CUL', 'ART'],
      regions: ['QURTUBA', 'GENERAL'],
      description: 'Antología de canciones y poemas de la corte califal de Córdoba. Testimonia el apogeo cultural andalusí del siglo X.',
      source: 'Biblioteca de El Escorial',
      language: 'ar',
      media: {
        thumbnail: '',
        pages: [],   // Documento de 3 páginas (ejemplo multipágina)
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S10_002',
      },
      metadata: {
        creator: 'Abu al-Faraj al-Isfahani (adaptación andalusí)',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'image/jpeg',
        identifier: 'NOOR-S10-002',
        scanResolution: '300dpi',
        condition: 'regular',
      },
      /**
       * TRANSCRIPCIÓN MULTIPÁGINA — Ejemplo con 3 páginas independientes.
       * El array pages[] debe tener la misma longitud que media.pages[].
       * Navegar entre páginas en el visor actualiza automáticamente la
       * transcripción mostrada en el panel derecho.
       */
      transcription: {
        pages: [
          // Página 1 — Introducción
          `كتاب الأغاني الأندلسي
انتخاب من أشعار الأندلس وأخبار مغنيها

قال أبو الفرج الأصفهاني -رحمه الله-: لما بلغني أن الخليفة الحكم المستنصر بالله يطلب نسخة من كتابنا هذا، بادرت إلى إرسال خمسين مجلداً من جملة مؤلفاتنا، وأضفت إليه ما خصّه الله به من شعراء الأندلس ومطربيها...

وكان في بلاط قرطبة من المغنين والمغنيات ما لا يُحصى عدده، وكان الخليفة يُدني منه الشعراء ويُجري عليهم الأرزاق الوافرة...`,

          // Página 2 — Primera canción
          `باب في ذكر زرياب الأندلسي وما انتهى إليه من الفنون

كان زرياب -واسمه علي بن نافع- قادماً من بغداد، فأكرم استقباله الأمير عبد الرحمن الثاني -رحمه الله-، وأنزله منزلة سنية.

وقد أدخل إلى الأندلس من الغناء والموسيقى والآداب ما لم يُسبق إليه، وكان يُجيد العزف على العود بوتر خامس ابتدعه من أمعاء الأسد إذ وجد أوتار العود في زمانه ضعيفة اللحن.

ومن أشعاره المغناة في البلاط:
يا ليلة الأنس لا تنقضِ
وأنت من دهري الأحظى
كم فيك من بدر قد أضحكا
وكم نجوم بك قد أوضا`,

          // Página 3 — Colofón
          `خاتمة المنتخب

وهذا ما تيسّر من انتخاب أغاني الأندلس وأخبار مغنيها في عصر الخلافة. وقد أحصينا في هذا المجلد سبعة وأربعين لحناً موزعة على المقامات التالية: الرصد، والحجاز، والعراق، والزيدان، وما يجري مجراها.

وقد كتب هذا المجلد الوراق محمد بن عيسى القرطبي بإذن من خزانة الحكم المستنصر بالله سنة سبع وخمسين وثلاثمائة للهجرة.

تمّ بحمد الله وحسن توفيقه.`
        ],
        transcribedBy: 'Leonardo Gallardo',
        transcribedAt: '2026-04-17',
        notes: 'Ms. de 3 folios en escritura nasj. El nombre "زرياب" (Ziryab) aparece también como "زرياب" con variante كاف coloquial andalusí. La fecha del colofón corresponde a 967 CE.',
        method: 'manual',
        confidence: 0.95,
        script: 'nasj',
      },
      eventIds: [],
      tags: ['poesía', 'música', 'cultura', 'corte califal', 'siglo X', 'ziryab', 'agani'],
    },
    {
      id: 'doc-s10-003',
      title: 'Crónica del Reinado de Hisham II',
      type: 'chronicle',
      eraId: 'S10',
      year: 995,
      themes: ['POL', 'MIL'],
      regions: ['QURTUBA', 'GENERAL'],
      description: 'Crónica que documenta el régimen de Almanzor como hayib efectivo del califato y sus campañas militares al norte.',
      source: 'Archivo General de Simancas',
      language: 'la',
      media: {
        thumbnail: '',
        pages: [],
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S10_003',
      },
      metadata: {
        creator: 'Cronista anónimo leonés',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'application/pdf',
        identifier: 'NOOR-S10-003',
      },
      eventIds: ['evt-almanzor'],
      tags: ['almanzor', 'hisham II', 'califato', 'campaña militar', 'hay ib'],
    },

    // ─────────────────────────────────────────────────────
    // SIGLO XI — Taifas y Reinos de Fitnah
    // ─────────────────────────────────────────────────────
    {
      id: 'doc-s11-001',
      title: 'El Collar de la Paloma (Tawq al-Hamama)',
      type: 'manuscript',
      eraId: 'S11',
      year: 1022,
      themes: ['CUL', 'SOC'],
      regions: ['GARNATA', 'GENERAL'],
      description: 'Tratado sobre el amor de Ibn Hazm de Córdoba, paradigma de la literatura andalusí clásica. Refleja la sociedad de los reinos de taifas.',
      source: 'Universidad de Leiden, MS 2172',
      language: 'ar',
      media: {
        thumbnail: '',
        pages: [],
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S11_001',
      },
      metadata: {
        creator: 'Ibn Hazm al-Andalusi',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'image/tiff',
        identifier: 'NOOR-S11-001',
      },
      eventIds: ['evt-taifas'],
      tags: ['ibn hazm', 'amor', 'literatura', 'taifas', 'sociedad', 'siglo XI'],
    },
    {
      id: 'doc-s11-002',
      title: 'Decreto de Fundación del Reino de Granada Zirí',
      type: 'decree',
      eraId: 'S11',
      year: 1013,
      themes: ['POL', 'SOC'],
      regions: ['GARNATA'],
      description: 'Documento que atestigua el establecimiento de la Taifa de Granada bajo la dinastía bereber Zirí.',
      source: 'Archivo de la Alhambra',
      language: 'ar',
      media: {
        thumbnail: '',
        pages: [],
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S11_002',
      },
      metadata: {
        creator: 'Cancillería de Zawi ibn Ziri',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'image/jpeg',
        identifier: 'NOOR-S11-002',
      },
      eventIds: ['evt-taifas'],
      tags: ['granada', 'ziri', 'taifa', 'decreto', 'fundación'],
    },

    // ─────────────────────────────────────────────────────
    // SIGLO XII — Almorávides y Almohades
    // ─────────────────────────────────────────────────────
    {
      id: 'doc-s12-001',
      title: 'Kitab al-Mugrib fi Hula al-Maghrib',
      type: 'manuscript',
      eraId: 'S12',
      year: 1149,
      themes: ['CUL', 'POL', 'SCI'],
      regions: ['GENERAL', 'NORTH_AFRICA'],
      description: 'Antología geográfica y literaria del Occidente islámico, compilada por Ibn Said al-Maghribi.',
      source: 'Biblioteca Bodleiana, Oxford',
      language: 'ar',
      media: {
        thumbnail: '',
        pages: [],
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S12_001',
      },
      metadata: {
        creator: 'Ibn Said al-Maghribi',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'image/tiff',
        identifier: 'NOOR-S12-001',
      },
      eventIds: ['evt-almohades'],
      tags: ['geografía', 'literatura', 'magreb', 'almohades', 'siglo XII'],
    },

    // ─────────────────────────────────────────────────────
    // SIGLO XIII — Decadencia y Resistencia
    // ─────────────────────────────────────────────────────
    {
      id: 'doc-s13-001',
      title: 'Relato de la Batalla de Las Navas de Tolosa',
      type: 'chronicle',
      eraId: 'S13',
      year: 1212,
      themes: ['MIL', 'POL', 'REL'],
      regions: ['GENERAL'],
      description: 'Narración cronística de la derrota almohade y su impacto en el balance político de la Península Ibérica.',
      source: 'Biblioteca Nacional, Madrid',
      language: 'la',
      media: {
        thumbnail: '',
        pages: [],
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S13_001',
      },
      metadata: {
        creator: 'Rodrigo Jiménez de Rada (atribuido)',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'application/pdf',
        identifier: 'NOOR-S13-001',
      },
      eventIds: ['evt-navas-tolosa'],
      tags: ['navas de tolosa', 'almohades', 'cruzada', 'batalla', 'siglo XIII', 'derrota'],
    },

    // ─────────────────────────────────────────────────────
    // SIGLO XIV — Esplendor Nazarí
    // ─────────────────────────────────────────────────────
    {
      id: 'doc-s14-001',
      title: 'Muqaddimah — Prolegómenos de Ibn Jaldún',
      type: 'manuscript',
      eraId: 'S14',
      year: 1377,
      themes: ['SCI', 'POL', 'SOC'],
      regions: ['GENERAL', 'NORTH_AFRICA'],
      description: 'Introducción a la obra histórica universal de Ibn Jaldún, considerada el primer tratado de sociología y filosofía de la historia.',
      source: 'Bibliothèque nationale de France, MS arabe 2197',
      language: 'ar',
      media: {
        thumbnail: '',
        pages: [],
        pdf: '',
        driveFileId: 'PLACEHOLDER_DRIVE_ID_S14_001',
      },
      metadata: {
        creator: 'Ibn Jaldún',
        contributor: '',
        publisher: 'Archivo Noor, 2026',
        rights: 'Dominio Público',
        format: 'image/tiff',
        identifier: 'NOOR-S14-001',
      },
      eventIds: ['evt-nazari'],
      tags: ['ibn jaldun', 'muqaddimah', 'sociología', 'historia', 'nazarí', 'siglo XIV'],
    },
  ],

  events: [
    {
      id: 'evt-califato-cordoba',
      title: 'Califato de Córdoba (929–1031)',
      year: 929,
      eraId: 'S10',
      themes: ['POL', 'CUL'],
      description: 'Período de máximo esplendor cultural y político de Al-Ándalus, con Abd al-Rahman III como primer califa.',
      documentIds: ['doc-s10-001', 'doc-s10-002', 'doc-s10-003'],
      regions: ['QURTUBA', 'GENERAL'],
      importance: 'critical',
    },
    {
      id: 'evt-almanzor',
      title: 'Regencia de Almanzor (978–1002)',
      year: 978,
      eraId: 'S10',
      themes: ['POL', 'MIL'],
      description: 'Almanzor (Ibn Abi Amir) gobierna como hayib efectivo, realizando más de 50 campañas militares.',
      documentIds: ['doc-s10-003'],
      regions: ['QURTUBA', 'GENERAL'],
      importance: 'high',
    },
    {
      id: 'evt-taifas',
      title: 'Reinos de Taifas (1031–1090)',
      year: 1031,
      eraId: 'S11',
      themes: ['POL', 'SOC', 'CUL'],
      description: 'Fragmentación del califato en múltiples reinos independientes. Paradójicamente, período de gran florecimiento cultural.',
      documentIds: ['doc-s11-001', 'doc-s11-002'],
      regions: ['GENERAL'],
      importance: 'critical',
    },
    {
      id: 'evt-almohades',
      title: 'Dominio Almohade (1147–1228)',
      year: 1147,
      eraId: 'S12',
      themes: ['POL', 'REL', 'MIL'],
      description: 'Movimiento beréber norteafricano que reimplantó un califato ortodoxo en Al-Ándalus.',
      documentIds: ['doc-s12-001'],
      regions: ['GENERAL', 'NORTH_AFRICA'],
      importance: 'high',
    },
    {
      id: 'evt-navas-tolosa',
      title: 'Batalla de Las Navas de Tolosa (1212)',
      year: 1212,
      eraId: 'S13',
      themes: ['MIL', 'POL', 'REL'],
      description: 'Derrota decisiva almohade que acelera la reconquista cristiana del sur peninsular.',
      documentIds: ['doc-s13-001'],
      regions: ['GENERAL'],
      importance: 'critical',
    },
    {
      id: 'evt-nazari',
      title: 'Reino Nazarí de Granada (1238–1492)',
      year: 1238,
      eraId: 'S13',
      themes: ['POL', 'CUL', 'ART'],
      description: 'Último reducto del Al-Ándalus islámico. Período de máxima expresión artística con la construcción de la Alhambra.',
      documentIds: ['doc-s14-001'],
      regions: ['GARNATA'],
      importance: 'critical',
    },
  ],
};

console.log(
  `[NoorMockData] ✓ ${window.NoorMockData.documents.length} documentos | ${window.NoorMockData.events.length} eventos cargados.`
);
