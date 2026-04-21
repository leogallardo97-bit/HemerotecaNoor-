/**
 * NOOR ARCHIVE — LOCAL INGESTION BRIDGE (V3)
 * Soporte para Revistas, Libros y Periódicos.
 */

window.NoorLocalDB = {
  active: true,
  lastUpdate: new Date().toISOString(),
  sections: [
    { id: 'sec-01', label: '01_REVISTAS', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/01_REVISTAS' },
    { id: 'sec-02', label: '02_LIBROS', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS' },
    { id: 'sec-05', label: '05_PERIODICOS', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS' }
  ],
  documents: [
    // --- 01_REVISTAS ---
    {
      id: 'local-rev-2008-01',
      title: 'Revista Crítica: Comer (Senzone)',
      year: 2008,
      type: 'newspaper',
      eraId: 'CONTEMPORARY',
      language: 'es',
      source: 'Revista Crítica',
      tags: ['Senzone', 'Paco Morales'],
      localPath: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/01_REVISTAS/01_(2008)_REV_Revista_Crítica_Comer-Senzone_Paco_Morales.pdf',
      media: { thumbnail: 'img/thumbnails/sec-01.jpg' }
    },
    // --- 02_LIBROS ---
    {
      id: 'local-lib-2011-01',
      title: 'Catálogo Patrimonial Documental',
      year: 2011,
      type: 'manuscript',
      eraId: 'CONTEMPORARY',
      language: 'es',
      source: 'Hemeroteca Histórica',
      tags: ['Catálogo', 'Patrimonio'],
      localPath: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/01_Hemeroteca Histórica — Catálogo Patrimonial Documental.pdf',
      media: { thumbnail: 'img/thumbnails/local-lib-2011-01.jpg' }
    },
    {
      id: 'local-lib-2007-01',
      title: 'Intervención Documental INT_2007',
      year: 2007,
      type: 'manuscript',
      eraId: 'CONTEMPORARY',
      language: 'es',
      source: 'Archivo Noor',
      tags: ['Técnico', 'Investigación'],
      localPath: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2007_373.pdf',
      media: { thumbnail: 'img/thumbnails/local-lib-2007-01.jpg' }
    },
    // --- 05_PERIODICOS ---
    {
      id: 'local-per-2016-01',
      title: 'ABC: Gastronomía e Inicios de Noor',
      year: 2016,
      type: 'newspaper',
      eraId: 'CONTEMPORARY',
      language: 'es',
      source: 'ABC',
      tags: ['ABC', 'Noor', 'Paco Morales'],
      localPath: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-11-25_PER_elMundo-ABC_Gastronomía_10_Inicios_Noor_Paco_Morales.pdf',
      media: { thumbnail: '' }
    },
    {
      id: 'local-per-2023-01',
      title: 'El Día de Córdoba: Noor 3 Estrellas Michelín',
      year: 2023,
      type: 'newspaper',
      eraId: 'CONTEMPORARY',
      language: 'es',
      source: 'El Día de Córdoba',
      tags: ['Estrellas Michelín', 'Hito', 'Córdoba'],
      localPath: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2023-11-29_PER_El-Día-Cordoba_Portada_12_13_Paco-Morales-Noor-3-Estrellas.pdf',
      media: { thumbnail: 'img/thumbnails/local-per-2023-01.jpg' }
    },
    {
      id: 'local-per-2007-01',
      title: 'El País: Hotel Hospes y Senzone',
      year: 2007,
      type: 'newspaper',
      eraId: 'CONTEMPORARY',
      language: 'es',
      source: 'El País',
      tags: ['El País', 'Hospes', 'Senzone'],
      localPath: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2007-12-22_PER_01_ElPais_11_Hotel_Hospes_.pdf',
      media: { thumbnail: 'img/thumbnails/local-per-2007-01.jpg' }
    }
  ]
};
