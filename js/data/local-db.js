/**
 * NOOR ARCHIVE — LOCAL INGESTION BRIDGE (V3)
 * Soporte para Revistas, Libros y Periódicos.
 */

window.NoorLocalDB = {
  active: true,
  lastUpdate: new Date().toISOString(),
  sections: [
    { id: 'sec-03', label: '03_RECETARIO', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO' },
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
        // --- Ingesta Masiva 02_LIBROS (v1.4) ---
    {
          "id": "local-lib-TAP_2017_024",
          "title": "Spainmedia Magazines/ Tapas Magazine",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Gastronomía",
                "Alta Cocina",
                "Chef",
                "Innovación",
                "Andalucía",
                "Patrimonio Culinario"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/TAP_2017_024.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Paco Morales (Restaurante Noor, Córdoba). Chef of the Year. Portada minimalista con retrato del chef en entorno de cocina de vanguardia. la langosta en la cabeza. Gastronomía; Alta Cocina; Chef; Innovación; Andalucía; Patrimonio Culinario"
    },
    {
          "id": "local-lib-INT_2017_060",
          "title": "Robb Report",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Padre e Hijo"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_060.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Robb Report- Arzak - Juan Mari y Elena. Paco Morales Padre e Hijo"
    },
    {
          "id": "local-lib-INT_2017_061",
          "title": "Meridiani",
          "year": 2019,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Un banchetto Imperiale"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_061.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Encuestre. Un banchetto Imperiale"
    },
    {
          "id": "local-lib-INT_2011_1.834",
          "title": "El País Semanal (EPS)",
          "year": 2011,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2011_1.834.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Especial Gastronomía: \"Un voto por la buena cocina\". Paco Morales Ferrero"
    },
    {
          "id": "local-lib-INT_2012_009",
          "title": "Gastrónomo",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales un enamorado de las Verduras"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2012_009.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Paco Morales un enamorado de las Verduras. Paco Morales un enamorado de las Verduras"
    },
    {
          "id": "local-lib-INT_2018_010",
          "title": "Look Your style",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales mi cocina es algo excitante"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_010.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Verano de sol. Paco Morales mi cocina es algo excitante"
    },
    {
          "id": "local-lib-INT_2018_011",
          "title": "Falstaff Karriere",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "chefs alps Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_011.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Dont Waste. chefs alps Paco Morales"
    },
    {
          "id": "local-lib-INT_2017_AN",
          "title": "Conde Nast Traveler",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor  Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_AN.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Guia Gastronómica. Noor  Paco Morales"
    },
    {
          "id": "local-lib-INT_2017_45",
          "title": "Forbes",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Noor"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_45.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Las 50 españolas más poderosas. Paco Morales Noor"
    },
    {
          "id": "local-lib-INT_2017_64",
          "title": "Robb Report",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Chef del año  Paco morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_64.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Las mejores ginebras. Chef del año  Paco morales"
    },
    {
          "id": "local-lib-INT_2011_237",
          "title": "vino + Gastronomía",
          "year": 2011,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Aduriz/Mugaritz"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2011_237.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "El salsifi fosilizado aliñado. Aduriz/Mugaritz"
    },
    {
          "id": "local-lib-TAP_2010_411_412",
          "title": "Gourmets",
          "year": 2010,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco morales sumario"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/TAP_2010_411_412.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Paco Morales Vuela solo. Paco morales sumario"
    },
    {
          "id": "local-lib-TAP_2017_369",
          "title": "Sobremesa",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Al Andalus"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/TAP_2017_369.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Noor Regreso al_Andalus. Noor Al Andalus"
    },
    {
          "id": "local-lib-INT_2013_06",
          "title": "Gastronoautas",
          "year": 2013,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Deliciosa Vanguardia"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2013_06.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Destinos donde saboraear la noche de fin de año. Deliciosa Vanguardia"
    },
    {
          "id": "local-lib-INT_2012_09",
          "title": "De Autor",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales la estrella Más Joven"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2012_09.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Soluciones financieras con metodología Time. Paco Morales la estrella Más Joven"
    },
    {
          "id": "local-lib-INT_2012_55",
          "title": "Condé Nast traveler",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2012_55.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "20 Hoteles con encanto. -"
    },
    {
          "id": "local-lib-INT_2008_228",
          "title": "vino + Gastronomía",
          "year": 2008,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2008_228.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "el bulli con su paisaje. -"
    },
    {
          "id": "local-lib-INT_2014_148",
          "title": "Saber y sabor",
          "year": 2014,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco morales la Trapo"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2014_148.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "oilmotion carles tejedor. Paco morales la Trapo"
    },
    {
          "id": "local-lib-INT_2012_876",
          "title": "Inversion",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "En busca de la perfección Gastronómica"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2012_876.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Inversion y finanzas. En busca de la perfección Gastronómica"
    },
    {
          "id": "local-lib-INT_2010_00",
          "title": "Turrón en la cocina",
          "year": 2010,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Hotel Ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2010_00.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Recetas de los mejores cocineros. Paco Morales Hotel Ferrero"
    },
    {
          "id": "local-lib-INT_2016_55",
          "title": "Robb Report",
          "year": 2016,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales un paseo por al Andalus"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2016_55.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Risto Mejide. Paco Morales un paseo por al Andalus"
    },
    {
          "id": "local-lib-INT_2014_76",
          "title": "Travel Leisure",
          "year": 2014,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "al Trapo Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2014_76.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "gourmets awards. al Trapo Paco Morales"
    },
    {
          "id": "local-lib-INT_2022_106",
          "title": "Regal",
          "year": 2022,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor recetas del palacio Árabe"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2022_106.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Mijotés de Printemps. Noor recetas del palacio Árabe"
    },
    {
          "id": "local-lib-INT_2017_29",
          "title": "Apicius",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_29.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Best in the world. Noor Paco Morales"
    },
    {
          "id": "local-lib-TAP_2011_464",
          "title": "Dominical",
          "year": 2011,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales El Cuchillo sobre la cabeza"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/TAP_2011_464.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Dominical. Paco Morales El Cuchillo sobre la cabeza"
    },
    {
          "id": "local-lib-INT_2018_249",
          "title": "GQ Gentlenmen´s Quarterly",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "La buena vida homenaje al origen"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_249.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Justin Oshea. La buena vida homenaje al origen"
    },
    {
          "id": "local-lib-INT_2019_00",
          "title": "South Art Culture Gastronomy",
          "year": 2019,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor restaurant Contemporany Nasri Cooking"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2019_00.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "SOUTH Art culture , gastronomy, lifestyle. Noor restaurant Contemporany Nasri Cooking"
    },
    {
          "id": "local-lib-INT_2019_22",
          "title": "Look your Style",
          "year": 2019,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor legado andalusí"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2019_22.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Cuerpo Sano. Noor legado andalusí"
    },
    {
          "id": "local-lib-INT_2003_60",
          "title": "Pizza y Restauración",
          "year": 2003,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "maquinaria"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2003_60.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Pizza y Restauración carlos arguiñano. maquinaria"
    },
    {
          "id": "local-lib-INT_2018_05",
          "title": "Falstaff Karriere",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco morales revista en alemán"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_05.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Andreas Döllerer (un famoso chef austriaco).. Paco morales revista en alemán"
    },
    {
          "id": "local-lib-INT_2018_04",
          "title": "Der Feinschmecker",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco morales noor"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_04.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Osterkuche. Paco morales noor"
    },
    {
          "id": "local-lib-INT_2018_90",
          "title": "Bazar España",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Alma Andalusí"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_90.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Cambio de Marcha. Paco Morales Alma Andalusí"
    },
    {
          "id": "local-lib-INT_2010_235",
          "title": "Vino + Gastronomía",
          "year": 2010,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Hotel Ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2010_235.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Los mejores Vinos. Paco Morales Hotel Ferrero"
    },
    {
          "id": "local-lib-INT_2009_02",
          "title": "Andalucía Sabor",
          "year": 2009,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Hotel Ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2009_02.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "El Nuevo Descubrimiento. Paco Morales Hotel Ferrero"
    },
    {
          "id": "local-lib-INT_2012_02",
          "title": "Der Feinschmecker",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Hotel Ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2012_02.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Neue Szene - Treffs in Hamburg. Paco Morales Hotel Ferrero"
    },
    {
          "id": "local-lib-INT_2010_72",
          "title": "Gentleman",
          "year": 2010,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales hotel ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2010_72.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "La edad de oro de la cocina española. Paco Morales hotel ferrero"
    },
    {
          "id": "local-lib-INT_2012_00",
          "title": "La vanguardia - Magazine",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Hotel ferrero"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2012_00.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Ruido una plaga moderna. Paco Morales Hotel ferrero"
    },
    {
          "id": "local-lib-INT_2008_10",
          "title": "Lo mejor de la gastronomía",
          "year": 2008,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Senzone"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2008_10.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Empezar de cero. Paco Morales Senzone"
    },
    {
          "id": "local-lib-INT_2010_108",
          "title": "Cocina Futuro",
          "year": 2010,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Las Ostras"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2010_108.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Bacalao . Avellanas . Algas .Cocinando con. Las Ostras"
    },
    {
          "id": "local-lib-INT_2009_10",
          "title": "El Forum de Todos Catalunya",
          "year": 2009,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco morales Senzone"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2009_10.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "El Forum de todos. Paco morales Senzone"
    },
    {
          "id": "local-lib-INT_2007_373",
          "title": "Gourmets",
          "year": 2007,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Aduriz/Mugaritz"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2007_373.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Roma citta del gusto. Aduriz/Mugaritz"
    },
    {
          "id": "local-lib-INT_2016_113",
          "title": "AD Ediciones Condé Nast",
          "year": 2016,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Noor"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2016_113.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "La casa suave. Paco Morales Noor"
    },
    {
          "id": "local-lib-INT_2020_00",
          "title": "Cónde Nast Traveler",
          "year": 2020,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2020_00.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Un viaje gastronomico por españa y portugal. Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2020_00",
          "title": "La vanguardia - La Guía Comer",
          "year": 2020,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2020_00.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "\"La Guía Comer 2020: 100 restaurantes que no te puedes perder\". Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2019_01",
          "title": "conde Nast Traveler",
          "year": 2019,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2019_01.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Un viaje Gastronómico por españa y Portugal. Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2019_00",
          "title": "Oliva Tessen",
          "year": 2020,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2019_00.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "the delicate pleasure of extra vigin olive oil. Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2018_12",
          "title": "ECOS einfach besser spanish",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_12.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Die sprache der spanishen kushe. Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2017_49",
          "title": "hsm Madrid",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_49.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Miguel Ángel Muñoz. Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2018_177",
          "title": "VInos y restaurantes",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor PAco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_177.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Gastronomía y Vinos exqusitos  Extremadura. Noor PAco Morales"
    },
    {
          "id": "local-lib-INT_2011_241",
          "title": "vino + gastronomía",
          "year": 2012,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2011_241.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "la nana de la cebolla, creada por fernando josé del cerro. -"
    },
    {
          "id": "local-lib-INT_2016_221",
          "title": "GC Gentleman Querterly",
          "year": 2016,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Noor Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2016_221.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Llega la nueva generación , solo ellos pueden salvar a Hollywood de la crisis. Noor Paco Morales"
    },
    {
          "id": "local-lib-INT_2015_06",
          "title": "Time OUT Tokyo",
          "year": 2015,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2015_06.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Cheap eats just int time for spring. -"
    },
    {
          "id": "local-lib-INT_2009_02",
          "title": "Guia Metropoli",
          "year": 2009,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Senzone Paco Morales"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2009_02.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Comer y Beber en Madrid 2009. Senzone Paco Morales"
    },
    {
          "id": "local-lib-INT_2017_229",
          "title": "GQ Gentlenmen´s Quarterly",
          "year": 2017,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Noor"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2017_229.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Y otras cosas que volverán a estar de moda este 2017. Paco Morales Noor"
    },
    {
          "id": "local-lib-INT_2018_160",
          "title": "Gentleman",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Noor"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_160.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "La Leyenda Continua. Paco Morales Noor"
    },
    {
          "id": "local-lib-INT_2018_01",
          "title": "Thynsen en el plato",
          "year": 2018,
          "type": "book",
          "eraId": "S21",
          "language": "es",
          "source": "Archivo Digital Noor",
          "tags": [
                "Paco Morales Noor"
          ],
          "regions": [
                "QURTUBA"
          ],
          "coordinates": [
                37.8847,
                -4.7791
          ],
          "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS/INT_2018_01.pdf",
          "driveId": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa&sz=w1000",
                "pdf": "1i163IvoRbIyIIkWeUcStD8OKE8b5UHqa"
          },
          "description": "Dishing Uo the Thyssen. Paco Morales Noor"
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
    },
    {
      "id": "local-rec-03_Menu_Torralbenc_Picnic_Hotel", "driveId": "1WCTpTYpya0_p2qN1oirSEBKvQA8o3Lab", "category": "03_RECETARIO",
      "title": "03_Menu_Torralbenc_Picnic_Hotel",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/03_Menu_Torralbenc_Picnic_Hotel.pdf",
      "media": { "pdf": "1WCTpTYpya0_p2qN1oirSEBKvQA8o3Lab", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMCJtjDQ71Ud13pOKfcKcbaObUh5g3grixY7YqnPR9TPeRF7ccKSkS0gPa0oz8vk59Z_hKZ2UW2874SYpEVwq71nGJnzVs5Gry0yd0=s1024" }
    },
    {
      "id": "local-rec-03_Menu_Mayusculas_Restaurante_Carta", "driveId": "1uy8r9hbYnAhZsoFmuj627rFiOqBq__j1", "category": "03_RECETARIO",
      "title": "03_Menu_Mayusculas_Restaurante_Carta",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/03_Menu_Mayusculas_Restaurante_Carta.pdf",
      "media": { "pdf": "1uy8r9hbYnAhZsoFmuj627rFiOqBq__j1", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNc251vuNhWaBZ1sbYFS6zIX3iRZpOLkiY1aX45OC3oFsu6QHlFRBb1h-rREjgLRAwm-gxEHV7pboOphYNAPHtVtBDBmswfQrkHQ64=s1024" }
    },
    {
      "id": "local-rec-03_Menu_No10_Taberna_Cordoba", "driveId": "1RZDWypDQd3g6z5oB-wctVuGZ03dXXMpY", "category": "03_RECETARIO",
      "title": "03_Menu_No10_Taberna_Cordoba",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/03_Menu_No10_Taberna_Cordoba.pdf",
      "media": { "pdf": "1RZDWypDQd3g6z5oB-wctVuGZ03dXXMpY", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOE9SskG13qhHe6kQdOc2lJ5sLULLBSTGCCUZTYmgaln6X78tuRRRFBvrVUaSvrqT4CD33WOpoSIH-qsBiEMeCErl3y0dT57l-kevI=s1024" }
    },
    {
      "id": "local-rec-03_Sugerencias_Maridaje_Vinos_Pescaito", "driveId": "1Kjrxt6LTyWvraVrrJj-LWC71Sld4drrt", "category": "03_RECETARIO",
      "title": "03_Sugerencias_Maridaje_Vinos_Pescaito",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/03_Sugerencias_Maridaje_Vinos_Pescaito.pdf",
      "media": { "pdf": "1Kjrxt6LTyWvraVrrJj-LWC71Sld4drrt", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPYoj0l30EIW5gQKZL1hKr8cjIITeLyKl2fSE3bpN08ubiMO9pllXusiTuGTikYYuFbAqGOqpS3Z_-z6f21-Qo-uJ4PIKlbM1SjmUA=s1024" }
    },
    {
      "id": "local-rec-Menu_Noor_Restaurante_PacoMorales", "driveId": "1IJAFnXRId8vWArpPr7mpVtLRR8Qh3OWB", "category": "03_RECETARIO",
      "title": "Menu_Noor_Restaurante_PacoMorales",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/Menu_Noor_Restaurante_PacoMorales.pdf",
      "media": { "pdf": "1IJAFnXRId8vWArpPr7mpVtLRR8Qh3OWB", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPjwNC_vNNaWzWgaVkyHS3N9mWeYIqvHY-zcUUNbKBzPOH7gs5ecPW6mebPP3KPodlLVrw9M9rVWMxVCvDo0W8lB0YtadFHqTIJJaU=s1024" }
    },
    {
      "id": "local-rec-2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03 (1)",
      "year": 2021,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2015_01_01_Menu_Suculencia_Casa_Gerardo", "driveId": "1O8eTos0Bm4puIFvkpJ5NPjdu2ZylLIjw", "category": "03_RECETARIO",
      "title": "2015-01-01_Menu_Suculencia_Casa-Gerardo",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015-01-01_Menu_Suculencia_Casa-Gerardo.pdf",
      "media": { "pdf": "1O8eTos0Bm4puIFvkpJ5NPjdu2ZylLIjw", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNrgefba6Ul8G9f7jg4AkUcBenAtLZ3A5L-E6Up0JuihokoE9sefksLahR44GOVnoSj9OkmuGsQBEjF7DFql19jjnbB58lHjsJD6-pZ=s1024" }
    },
    {
      "id": "local-rec-24_I_Congreso_Internacional_Halal_Cordoba_Programa_Seccion_03", "driveId": "1gvNR2hB188wdLrj3VbYvTfkng2qSVrUD", "category": "03_RECETARIO",
      "title": "24_I_Congreso_Internacional_Halal_Cordoba_Programa_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/24_I_Congreso_Internacional_Halal_Cordoba_Programa_Seccion_03.pdf",
      "media": { "pdf": "1gvNR2hB188wdLrj3VbYvTfkng2qSVrUD", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNpmAbTC5xo7W3F7GZHuhjGY1_h1KLUVJhkUX6dHPP36HKvrG5-mxJWjtS9SGVnyqW77Fb7RkPfDO1yr1iaE9zjgusoVQpTLUA9KOw=s1024" }
    },
    {
      "id": "local-rec-2026_03_14_Carta_Senzone", "driveId": "1pdKHhsEm46JlzV2rtDlKW0BgOIxVzvmH", "category": "03_RECETARIO",
      "title": "2026-03-14_Carta_Senzone",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-14_Carta_Senzone.pdf",
      "media": { "pdf": "1pdKHhsEm46JlzV2rtDlKW0BgOIxVzvmH", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPSXZzgAJ1RnhDkp6CuwdlR5t3FWOGBEtRsZh_VTVKNyGZujO16AplZqU1c0ceBp_ZIaQepX4U6bvRXf9T-MSctbopj0cqagB2PdiqZ=s1024" }
    },
    {
      "id": "local-rec-2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03_(2)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03 (2)",
      "year": 2021,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03 (2).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-10_Malaga_Gastronomy_Festival_Cocinando_entre_amigos_Bardal_Noor_Seccion_03", "driveId": "14d4NqIJFXFJZfvJPSS7ja9eASIWSFOmz", "category": "03_RECETARIO",
      "title": "10_Malaga_Gastronomy_Festival_Cocinando_entre_amigos_Bardal_Noor_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/10_Malaga_Gastronomy_Festival_Cocinando_entre_amigos_Bardal_Noor_Seccion_03.pdf",
      "media": { "pdf": "14d4NqIJFXFJZfvJPSS7ja9eASIWSFOmz", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNQx1GPNXfNRKsuH1C-h89YxYLWDcuGVzHPuvM-pvrjqMhvhTIqrIKTXc1X2WUO6qwsDd-Dxd0spjr_e9KDLOnLrmHY_DjnkhQ3VuQ=s1024" }
    },
    {
      "id": "local-rec-2014_Menu_Degustacion_Olive_Sanuki_Wagyu_Ricardo_Sanz_Seccion_03", "driveId": "1UxlMo03v_tG0Lxn-QtLXYEWWb8n2iURs", "category": "03_RECETARIO",
      "title": "2014_Menu_Degustacion_Olive_Sanuki_Wagyu_Ricardo_Sanz_Seccion_03",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014_Menu_Degustacion_Olive_Sanuki_Wagyu_Ricardo_Sanz_Seccion_03.pdf",
      "media": { "pdf": "1UxlMo03v_tG0Lxn-QtLXYEWWb8n2iURs", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNYf25TkmmaAzX9tVOFfi6PFIztdNisejkBHjaDFqHYMQUMFmo1jDX2ksF4kP4edz655ohtSA2SFZxHYdDo1aJy37Nh3vK83-tbgt4=s1024" }
    },
    {
      "id": "local-rec-24_Menu_Territorio_Casa_Marcial_Nacho_Manzano_Seccion_03", "driveId": "1-3N0MbDVxO4VMiqH9YVWzzTXttivL70d", "category": "03_RECETARIO",
      "title": "24_Menu_Territorio_Casa_Marcial_Nacho_Manzano_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/24_Menu_Territorio_Casa_Marcial_Nacho_Manzano_Seccion_03.pdf",
      "media": { "pdf": "1-3N0MbDVxO4VMiqH9YVWzzTXttivL70d", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMu_YO22jpjQ5Vtsjl4_ox1oNvAibBnrbL9M0ACLsWTZCpiOL7c7tisQRUVxLF8abELQJRJj7z1PJsFndSsXj8spTrEgFJTifqp8Nw=s1024" }
    },
    {
      "id": "local-rec-2016_08_24_Menu_Territorio_Casa_Marcial", "driveId": "1_2a6iO4ear609GKmTzJztQ0zZ7-d_OZs", "category": "03_RECETARIO",
      "title": "2016-08-24_Menu_Territorio_Casa-Marcial",
      "year": 2016,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2016-08-24_Menu_Territorio_Casa-Marcial.pdf",
      "media": { "pdf": "1_2a6iO4ear609GKmTzJztQ0zZ7-d_OZs", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPghEpyRSKRtW9veCmMgXIl2Ty7JopnsCoHVaeouFa8FEKqMmrdbx1DXUaLpMFH7kHR4ajcEtfxv-6Mc826YSvmYl6tt5neAAYDHaQ_=s1024" }
    },
    {
      "id": "local-rec-11_Menu_Degustacion_Lasarte_Martin_Berasategui_Seccion_03", "driveId": "1083XTXtrhGD8ex16gCp0EAQ2_81jJxbk", "category": "03_RECETARIO",
      "title": "11_Menu_Degustacion_Lasarte_Martin_Berasategui_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/11_Menu_Degustacion_Lasarte_Martin_Berasategui_Seccion_03.pdf",
      "media": { "pdf": "1083XTXtrhGD8ex16gCp0EAQ2_81jJxbk", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOaQd97nFjULumq8iwcPSxp0ZIa1iDuv6e9FwJxR6NqRTgaTc2vhkO7mPTxQGbUMfIXXe6MLUrYYREXvl8oQqq2DE1galzO5khiKNA=s1024" }
    },
    {
      "id": "local-rec-18_Diario_de_Navegacion_y_Mareas_Aponiente_Angel_Leon_Seccion_03", "driveId": "1d-AOU8GA6jpKAE02a6nCmeBFBbjNm6pu", "category": "03_RECETARIO",
      "title": "18_Diario_de_Navegacion_y_Mareas_Aponiente_Angel_Leon_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/18_Diario_de_Navegacion_y_Mareas_Aponiente_Angel_Leon_Seccion_03.pdf",
      "media": { "pdf": "1d-AOU8GA6jpKAE02a6nCmeBFBbjNm6pu", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNyh_8K_2qdj5mSV7NiZ-bf5-83ewAjmMioWh4jScl1sYwjzRjbgqC2QjIcYHBCPFMbC3K3CmjLNgkXxrxLSpPLrtL0S9NUAx7Ux7c=s1024" }
    },
    {
      "id": "local-rec-2016_06_07_Menu_Degustacion_Dstage", "driveId": "1aXyvvcdZ2dJ5E3BUBrap-ZAibgzC1vYn", "category": "03_RECETARIO",
      "title": "2016-06-07_Menu_Degustacion_Dstage",
      "year": 2016,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2016-06-07_Menu_Degustacion_Dstage.pdf",
      "media": { "pdf": "1aXyvvcdZ2dJ5E3BUBrap-ZAibgzC1vYn", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBObP1LjNHfOin9DszWZR2d-RdaiiEPFfVUsQ8meo_B7_AARFxIvh50llkYjvuAE48rLaWB6zREM7XOxzpjYZt0xIFTbyPQQfefnEUPy=s1024" }
    },
    {
      "id": "local-rec-2016_08_25_Menu_Suculencia_Casa_Gerardo", "driveId": "1wxJIiQL1rQa-sk1c4FZQTGts6WDT_bL2", "category": "03_RECETARIO",
      "title": "2016-08-25_Menu_Suculencia_Casa-Gerardo",
      "year": 2016,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2016-08-25_Menu_Suculencia_Casa-Gerardo.pdf",
      "media": { "pdf": "1wxJIiQL1rQa-sk1c4FZQTGts6WDT_bL2", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNFoVpHrjqDfkJLTimg12iR9TCkYo5YfDJM36uyh8M7Ksu_SVA_U4PZPwBarRVHf0UWlPh-O0bsIeVG2-p2Njcg_Gxck0Nij93RlOyR=s1024" }
    },
    {
      "id": "local-rec-2015_Menu_Especial_del_Dia_Disfrutar_Barcelona_Seccion_03", "driveId": "1SAYM-BC-ImEsiapah8Cx4B31ZU7JLFq8", "category": "03_RECETARIO",
      "title": "2015_Menu_Especial_del_Dia_Disfrutar_Barcelona_Seccion_03",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015_Menu_Especial_del_Dia_Disfrutar_Barcelona_Seccion_03.pdf",
      "media": { "pdf": "1SAYM-BC-ImEsiapah8Cx4B31ZU7JLFq8", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNokb5tZEOT0C4Cnphqhhox_sgPSbVH8LKp7qc3tUpibRJ4eaihnZlzl-HVxq5GNhvUStatak-QB8IWJGYlTgl7M2Sg5ubZ-4wRCN4=s1024" }
    },
    {
      "id": "local-rec-11_Evento_Infusion_Fondazione_Bisazza_Paco_Morales_Virgilio_Martinez_Seccion_03", "driveId": "1grSvHktxELiDN5xdJgCg6yRNh3piAay7", "category": "03_RECETARIO",
      "title": "11_Evento_Infusion_Fondazione_Bisazza_Paco_Morales_Virgilio_Martinez_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/11_Evento_Infusion_Fondazione_Bisazza_Paco_Morales_Virgilio_Martinez_Seccion_03.pdf",
      "media": { "pdf": "1grSvHktxELiDN5xdJgCg6yRNh3piAay7", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPbDKm3lhEsrNmR403_zjGZagznuZXlPymGtcrYXcgjDv0y2PK_l11w44by0FN9fev__oLovYdgF-od33fGH4MbLV9cAdzFA4VyCXU=s1024" }
    },
    {
      "id": "local-rec-2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03", "driveId": "1UlZqvt3fw499qleiz4H8QBJFK89HIHMZ", "category": "03_RECETARIO",
      "title": "2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03",
      "year": 2021,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2021_Menu_Retrospectiva_Noor_Restaurant_Paco_Morales_Seccion_03.pdf",
      "media": { "pdf": "1UlZqvt3fw499qleiz4H8QBJFK89HIHMZ", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOquqiHix1P7p5T5Ya1vWIuYANRkZ3JvoV1YlVXcyXIKV1vQLvDE2gUOcMNCFbOUSIWkC43478bASRAFYSDwC7TqRbIoOFfoOfZKHw=s1024" }
    },
    {
      "id": "local-rec-2019_11_26_Menu_Especial_Disfrutar_Barcelona", "driveId": "1lZQJVsi0QEIqkEzeY0oeEq6NiDC-mi28", "category": "03_RECETARIO",
      "title": "2019-11-26_Menu_Especial_Disfrutar-Barcelona",
      "year": 2019,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2019-11-26_Menu_Especial_Disfrutar-Barcelona.pdf",
      "media": { "pdf": "1lZQJVsi0QEIqkEzeY0oeEq6NiDC-mi28", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOv6J8DFimACP6LIu1n2CMTIDeM-Fade3e7pIbYETuLrVEa9epvqiyq92BigcnNamRGINg7cxERm7pG33fvuKplJ1lbtyD7pSJ2yMM0=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Degustacion_Jordnaer", "driveId": "1C8KLTPPuoGaOXvmVy3DqDgte4Kap2EcM", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Degustacion_Jordnaer",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Degustacion_Jordnaer.pdf",
      "media": { "pdf": "1C8KLTPPuoGaOXvmVy3DqDgte4Kap2EcM", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPO1gJkoSbMNWhC3EeEAPjNsw2Jz1qv1-JALhfK3W37wVOa5ItFTkfyDiXBHb6NAv5VB-bzzaQalXcYxL9IxyZbqdBedk73RTAff_jJ=s1024" }
    },
    {
      "id": "local-rec-2017_Menu_Colaboracion_Paco_Morales_Daniel_Chavez_OLA_Singapore_Seccion_03", "driveId": "10nPm_LTOH2nWXjhTg-fQIhpJB5nncsfP", "category": "03_RECETARIO",
      "title": "2017_Menu_Colaboracion_Paco_Morales_Daniel_Chavez_OLA_Singapore_Seccion_03",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017_Menu_Colaboracion_Paco_Morales_Daniel_Chavez_OLA_Singapore_Seccion_03.pdf",
      "media": { "pdf": "10nPm_LTOH2nWXjhTg-fQIhpJB5nncsfP", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPknvFiWI_0_p9dRVLP36iAlwlPZmQq6kG4Vorkq7WOrVs4qHiBsxA_-DPcAgRzCv8fk0w1ByLWlvUBxnUEll_w0roA_hrO6JtV9pY=s1024" }
    },
    {
      "id": "local-rec-2017_04_25_Gran_Menu_Restaurante_Santceloni_Seccion_03", "driveId": "13WeFW6qrhFzDlqJ5NCeOWEyVJTaEvs9-", "category": "03_RECETARIO",
      "title": "2017-04-25_Gran_Menu_Restaurante_Santceloni_Seccion_03",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017-04-25_Gran_Menu_Restaurante_Santceloni_Seccion_03.pdf",
      "media": { "pdf": "13WeFW6qrhFzDlqJ5NCeOWEyVJTaEvs9-", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOMaTpHgkzJobi_WW0f3PhjZZjeZSus175Ryq2mhJGPA3J7b8t9HmpZ3M3uScdwi9fDN0SRB0RftYyFsqbUveYPWtUum9UF1QyrZb8=s1024" }
    },
    {
      "id": "local-rec-2014_Menu_Caleidoscopio_Dani_Garcia_Puente_Romano_Seccion_03", "driveId": "1X5A0VZt8C-_sGqBHwnb8d5zxOn_4K0bF", "category": "03_RECETARIO",
      "title": "2014_Menu_Caleidoscopio_Dani_Garcia_Puente_Romano_Seccion_03",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014_Menu_Caleidoscopio_Dani_Garcia_Puente_Romano_Seccion_03.pdf",
      "media": { "pdf": "1X5A0VZt8C-_sGqBHwnb8d5zxOn_4K0bF", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBM-CfrOenvQb4HyvezCmEwf2DbkdjSHHMZ_rkFTKkiOmSAfPXm7EfqKk5w1YB9BkrISr_MxhjVE5cX_j59vyCt9Nm78-GoIWnE8zVs=s1024" }
    },
    {
      "id": "local-rec-2018_08_15_Menu_Degustacion_SUD777", "driveId": "1XSFLW4zZj37FPMst38g6ngP7lUyldMbC", "category": "03_RECETARIO",
      "title": "2018-08-15_Menu_Degustacion_SUD777",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2018-08-15_Menu_Degustacion_SUD777.pdf",
      "media": { "pdf": "1XSFLW4zZj37FPMst38g6ngP7lUyldMbC", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOcshAMEsxnfasfFRmpsZUL-UZfe_auypQGwCXchn9hc5VIbM_YfzMk7lSoZr3-e4Q9ZGTiLaH710SeTnvyILf9Mf37gU34qkZ-OI4d=s1024" }
    },
    {
      "id": "local-rec-2019_Menu_Degustacion_Restaurante_Pujol_Enrique_Olvera_Seccion_03", "driveId": "1GM-uvF8sKX9Naz00uYcHFu8xg-mHeIry", "category": "03_RECETARIO",
      "title": "2019_Menu_Degustacion_Restaurante_Pujol_Enrique_Olvera_Seccion_03",
      "year": 2019,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2019_Menu_Degustacion_Restaurante_Pujol_Enrique_Olvera_Seccion_03.pdf",
      "media": { "pdf": "1GM-uvF8sKX9Naz00uYcHFu8xg-mHeIry", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBO6KYDI76HhFPVbYo5we4p76xp2rrNy1-LPVoXliRFWSyRCOfcy68biJiMGuSWWbW6n9Dp0FPRePbgs1JjvK640idgixGRhhy-wHJg=s1024" }
    },
    {
      "id": "local-rec-2007_Armonia_de_Vinos_Aponiente_Maestro_Sierra_Seccion_03", "driveId": "1U19-koFgZNDbA__rpSyZpUAp_4IP8b9N", "category": "03_RECETARIO",
      "title": "2007_Armonia_de_Vinos_Aponiente_Maestro_Sierra_Seccion_03",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2007_Armonia_de_Vinos_Aponiente_Maestro_Sierra_Seccion_03.pdf",
      "media": { "pdf": "1U19-koFgZNDbA__rpSyZpUAp_4IP8b9N", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNvGWEDxq6W-js5ut1e8r2MPYN_uG7gToVu3nTctnSUqwov2dfmJHPnI3m9eFNTeVCwpPcv3PJRExOmfklr745JQb0W7YKBgyPN87I=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Puerto_Escondido_Aponiente.pdf", "driveId": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Puerto-Escondido_Aponiente.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Puerto-Escondido_Aponiente.pdf.pdf",
      "media": { "pdf": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMDjH8BERThQVomKFy7nhgQ6nQ29aT-r6scmudEYcNLk8p471TS35FHp_Nd_QkbaxaZsRyxG43emGN-wTTUuRZIjLiCld7NaXSHO7DY=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Diseno_Tecnico_Taller_Paco_Roncero", "driveId": "1sEf0iLixpdd--wC3LprdfF8SXLYpnKSr", "category": "03_RECETARIO",
      "title": "2026-03-18_Diseno-Tecnico_Taller-Paco-Roncero",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Diseno-Tecnico_Taller-Paco-Roncero.pdf",
      "media": { "pdf": "1sEf0iLixpdd--wC3LprdfF8SXLYpnKSr", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPmgA0zwnsRgUXZeSafAK-naKV9Nb1aH3KlEOrQSm25X92JpVBbf9pIySe_n8uRwx0ZkHpGHbkW7XzgXJxWKfNtS4GSQePdBBGmnC3K=s1024" }
    },
    {
      "id": "local-rec-2015_Menu_New_Anatolian_Kitchen_Mikla_Restaurant_Seccion_03", "driveId": "1O4bt1joKi6rq_Oi5cx0UNhJwm4Qjqtzb", "category": "03_RECETARIO",
      "title": "2015_Menu_New_Anatolian_Kitchen_Mikla_Restaurant_Seccion_03",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015_Menu_New_Anatolian_Kitchen_Mikla_Restaurant_Seccion_03.pdf",
      "media": { "pdf": "1O4bt1joKi6rq_Oi5cx0UNhJwm4Qjqtzb", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN0sPhAiJA6ei61olhCNbfSkrtVb1fMedZH0zVQn-qlRi56SWZQLocUqv9kErOdK5fI3ufirxK16epZkXypDaopej68mQSc9M3-BOM=s1024" }
    },
    {
      "id": "local-rec-2018_01_09_Menu_Tradicion_Lobito_de_Mar", "driveId": "1akGsvtRtEyNdE963puPWu3g1JJiCttBo", "category": "03_RECETARIO",
      "title": "2018-01-09_Menu_Tradicion_Lobito-de-Mar",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2018-01-09_Menu_Tradicion_Lobito-de-Mar.pdf",
      "media": { "pdf": "1akGsvtRtEyNdE963puPWu3g1JJiCttBo", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPL-1hc0TuxdV7PoW7H9dYqOCu4Yb3Sc-HxWAYbbiWS8dUvzptfpw_JYV_l32B9PINqMf4vX8zVdjaz-mY3YtGy8QFZRtIyiKXCK_c1=s1024" }
    },
    {
      "id": "local-rec-2017_12_11_Menu_Noches_Alhambra_Noor_Paco_Morales.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2017-12-11_Menu_Noches-Alhambra_Noor-Paco-Morales.pdf",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017-12-11_Menu_Noches-Alhambra_Noor-Paco-Morales.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Xow_DiverXO_Dabiz_Munoz.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Xow_DiverXO-Dabiz-Munoz.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Xow_DiverXO-Dabiz-Munoz.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-14_Menu_Ria_Formosa_Sao_Gabriel_Creative_Cuisine_Seccion_03", "driveId": "1dE2jTZTIWJd5j1m95utH5yHCDg2uxf4O", "category": "03_RECETARIO",
      "title": "14_Menu_Ria_Formosa_Sao_Gabriel_Creative_Cuisine_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/14_Menu_Ria_Formosa_Sao_Gabriel_Creative_Cuisine_Seccion_03.pdf",
      "media": { "pdf": "1dE2jTZTIWJd5j1m95utH5yHCDg2uxf4O", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPlX7lP2Q-R9esoGXHq7Bq2HyhxzwK4fqBZU9KkE8CSibsowmxZKkYN4EUeiH5tp_BJ43l8qYaF34EbQb9NHl409Lce0Qy-oYsZ8dg=s1024" }
    },
    {
      "id": "local-rec-2017_01_01_Menu_Historias_Miramar_Paco_Perez", "driveId": "1vfgnqEdLUfPdbnV2-CTPcOSH-1vavaZq", "category": "03_RECETARIO",
      "title": "2017-01-01_Menu_Historias_Miramar-Paco-Perez",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017-01-01_Menu_Historias_Miramar-Paco-Perez.pdf",
      "media": { "pdf": "1vfgnqEdLUfPdbnV2-CTPcOSH-1vavaZq", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPP6jxByvoakVe8fgeOc8b5TPtAVxvbTdmPDldQ7Z8IzioHhW3-bj833i3Lwc0U5kwa_8VHI2I-hPZ4ZZhosupvWI20PboGrBxbSxnZ=s1024" }
    },
    {
      "id": "local-rec-2017_Filosofia_y_Tradiciones_Restaurante_Neolokal_Seccion_03", "driveId": "1WM8D9OwjxwX7rqvLBqWkGRuW9XngOE_R", "category": "03_RECETARIO",
      "title": "2017_Filosofia_y_Tradiciones_Restaurante_Neolokal_Seccion_03",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017_Filosofia_y_Tradiciones_Restaurante_Neolokal_Seccion_03.pdf",
      "media": { "pdf": "1WM8D9OwjxwX7rqvLBqWkGRuW9XngOE_R", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPdI-TFi0fP4VdwwwfTgzc6Li9SyQ1AFcP-PlGSJGyeHq9xwxRlO8rk34QS_5TWfdIUCorhtI9i6zNHahHCBCiYDgegovlDLWK24QE=s1024" }
    },
    {
      "id": "local-rec-27_Story_Cards_Anatolian_Culinary_Neolokal_Seccion_03", "driveId": "1dPDwYVjH6HmfoqJCiGlbRQ6p-BUXaMb2", "category": "03_RECETARIO",
      "title": "27_Story_Cards_Anatolian_Culinary_Neolokal_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/27_Story_Cards_Anatolian_Culinary_Neolokal_Seccion_03.pdf",
      "media": { "pdf": "1dPDwYVjH6HmfoqJCiGlbRQ6p-BUXaMb2", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPsVMFqNaJWT_VgHqOGcAwY04-TM9u77L292a_Io20-JNDFHBHct_2Vi7qVrc8YZo692C4jQrCKXvEL5Ss9R5Izhyu6VSxYinV83xc=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Degustacion_Noor_Restaurant", "driveId": "1_GnEd9fgWpiJIw2n8CB1AOG7XnTIO07P", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Degustacion_Noor-Restaurant",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Degustacion_Noor-Restaurant.pdf",
      "media": { "pdf": "1_GnEd9fgWpiJIw2n8CB1AOG7XnTIO07P", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPRUDtb-nz6NpDGhkV-n_ls68zGr8AWChAkkRf7NxoqBa0JnrBsejd2catbLRFf2pzmUGtb8175v-Z-A1-nhEtOjr0XXLfnPGVjnFtR=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Mar_de_Fondo_Aponiente_Angel_Leon", "driveId": "1m747WQFzD6s5ujyl2WsukmrjNLkRoVLA", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Mar-de-Fondo_Aponiente-Angel-Leon",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Mar-de-Fondo_Aponiente-Angel-Leon.pdf",
      "media": { "pdf": "1m747WQFzD6s5ujyl2WsukmrjNLkRoVLA", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMXDUMXYD74UMrvvZAiJDWGYDfeQdx6UZqVZVs3Jv5_PcoiwdzJGyBova3vs2-STpC_7PHcTsd-BAdg_IB7GONKB2SA_26xDR98BSVz=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Dining_Room_Jatak_Copenhagen", "driveId": "1sATfyazQkfQlNtFPBsHYFrbGTHEXb0zh", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Dining-Room_Jatak-Copenhagen",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Dining-Room_Jatak-Copenhagen.pdf",
      "media": { "pdf": "1sATfyazQkfQlNtFPBsHYFrbGTHEXb0zh", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOJPwmGi65dSPMqMZ9iQvMMF_LIYh-jpFgLSLvD0b3zXRy-rwunkLaT4OhhI3HAxovIYDqLGNyF7ErRzcohv1gw2x0e6784VHcn-iDg=s1024" }
    },
    {
      "id": "local-rec-2019_05_07_Menu_Esencia_Q19_Madrid_Seccion_03", "driveId": "1AbM02uDUz9vhzkULdRwirKZhT2DVOyAp", "category": "03_RECETARIO",
      "title": "2019-05-07_Menu_Esencia_Q19_Madrid_Seccion_03",
      "year": 2019,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2019-05-07_Menu_Esencia_Q19_Madrid_Seccion_03.pdf",
      "media": { "pdf": "1AbM02uDUz9vhzkULdRwirKZhT2DVOyAp", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOR_WisjaTwfsqcR3rClSqwuD-Ohw8qGkGQAFODnuOx4ynQizx8tzFrds0f0fmhGOVvxv2AtMY9NdswlV8BIVSyReyubnI6RzpE01m8=s1024" }
    },
    {
      "id": "local-rec-2022_Dining_Room_Menu_Jatak_Copenhagen_Seccion_03", "driveId": "1At0QrXoOEwhA5yY9RfecCj_3wuVqlW4K", "category": "03_RECETARIO",
      "title": "2022_Dining_Room_Menu_Jatak_Copenhagen_Seccion_03",
      "year": 2022,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2022_Dining_Room_Menu_Jatak_Copenhagen_Seccion_03.pdf",
      "media": { "pdf": "1At0QrXoOEwhA5yY9RfecCj_3wuVqlW4K", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOSSEIosZANJeLiZforn-ECR43fZlXw4srtefVRY6VbM_FBAsYZGJzVWzsamj9_JHwgikjJru3J7uAs9Ni8TLWfqvKzYSnHhfurYLQc=s1024" }
    },
    {
      "id": "local-rec-06_Gran_Menu_Degustacion_Martin_Berasategui_Seccion_03_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "06_Gran_Menu_Degustacion_Martin_Berasategui_Seccion_03 (1)",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/06_Gran_Menu_Degustacion_Martin_Berasategui_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Alkimia_Jordi_Vila", "driveId": "1o015YhSe74y_1aPQFw6gEF7uOshATG9S", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Alkimia_Jordi-Vila",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Alkimia_Jordi-Vila.pdf",
      "media": { "pdf": "1o015YhSe74y_1aPQFw6gEF7uOshATG9S", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNMF_ndfz1YxQkL6_3pXxVW5DsEgZlFvQj4kvSTuJCzL61o4gL5I2v54q16QmLQSsoClUScnzkiLQ7sLt8OgFVM7vENeAeOgWXImO3f=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Sea_Food_Alchemist_Rasmus_Munk", "driveId": "1nBqt-Uy9JwSkEyzSXkX7O5asI_6DXSa9", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Sea-Food_Alchemist-Rasmus-Munk",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Sea-Food_Alchemist-Rasmus-Munk.pdf",
      "media": { "pdf": "1nBqt-Uy9JwSkEyzSXkX7O5asI_6DXSa9", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBP_pjoY13PHquKEXOxjwvTcCoTe8LVtwMgPIgx_Kel-NRNTUH8mBUoDO4F3xC9ehGzZpMNNPGt5LZIctPmorQtyWRMActYb9iZUjfey=s1024" }
    },
    {
      "id": "local-rec-2021_Menu_Flos_Cibarium_Restaurante_Terra_Olea_Seccion_03", "driveId": "1hc-pMBPuj-LsLsFM7ss0xg_0aes_MBQN", "category": "03_RECETARIO",
      "title": "2021_Menu_Flos_Cibarium_Restaurante_Terra_Olea_Seccion_03",
      "year": 2021,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2021_Menu_Flos_Cibarium_Restaurante_Terra_Olea_Seccion_03.pdf",
      "media": { "pdf": "1hc-pMBPuj-LsLsFM7ss0xg_0aes_MBQN", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPnl7chqFFucZ8IjbRivQSdWSRdfCGOYH4CkPBtgLkQXbQLnijIch2_VfIva84ifAz-3MTxHVxhnD1I1hzvYTMNgvFNLFcPZOZ0moI=s1024" }
    },
    {
      "id": "local-rec-2017_Menus_Taifa_Bereber_Eslava_Andalusi_Noor_Paco_Morales_Seccion_03", "driveId": "1Ko_uXKnmvp_xMedLzI0eQ_eFApiT9p_Y", "category": "03_RECETARIO",
      "title": "2017_Menus_Taifa_Bereber_Eslava_Andalusi_Noor_Paco_Morales_Seccion_03",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017_Menus_Taifa_Bereber_Eslava_Andalusi_Noor_Paco_Morales_Seccion_03.pdf",
      "media": { "pdf": "1Ko_uXKnmvp_xMedLzI0eQ_eFApiT9p_Y", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOkG9Lf_wDsTnV1rXvGEaJtPkkzTo6ab1kAKJqbKCs91v0NJimsqyEix32yzr9YaJMyH8iqBXCYwtLs0gXYq0dZO5Gs-YKJkU2Ck50=s1024" }
    },
    {
      "id": "local-rec-2016_09_18_Menu_Qurtuba_Noor_Restaurant", "driveId": "1Q5-6wOqPEG5GT18wFyZ5jIwAddR8ih_z", "category": "03_RECETARIO",
      "title": "2016-09-18_Menu_Qurtuba_Noor-Restaurant",
      "year": 2016,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2016-09-18_Menu_Qurtuba_Noor-Restaurant.pdf",
      "media": { "pdf": "1Q5-6wOqPEG5GT18wFyZ5jIwAddR8ih_z", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNHwybIt3MbTAZEMyGPCtESZGRAwbAKRmup9noi2jf2WpIyiUulstquK5CIVQ-o0bAKzKe3VMfs3tmK3VvXeFvDHZRU9xXi9ts4RNbg=s1024" }
    },
    {
      "id": "local-rec-2020_Menu_Reino_Nazari_Noor_Restaurant_Paco_Morales_Seccion_03", "driveId": "1FjDJaFOZ43N0PMB4B7SShcZ6nuPV2WDa", "category": "03_RECETARIO",
      "title": "2020_Menu_Reino_Nazari_Noor_Restaurant_Paco_Morales_Seccion_03",
      "year": 2020,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2020_Menu_Reino_Nazari_Noor_Restaurant_Paco_Morales_Seccion_03.pdf",
      "media": { "pdf": "1FjDJaFOZ43N0PMB4B7SShcZ6nuPV2WDa", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNGJtGt86Cu7luSJSUDA1EHbMVO1ck4JaCsOwjRi7uV3ijyWSgGDzfQDrvI2SMZ1xZPd8SmGKDD_rfnLYY76LqJsmtAFb7EzBT6BMs=s1024" }
    },
    {
      "id": "local-rec-19_Menu_Degustacion_Restaurante_Noor_Paco_Morales_Seccion_03", "driveId": "1R7jJn8_PVDo3_vnD17F3kXvqw3OBpUH1", "category": "03_RECETARIO",
      "title": "19_Menu_Degustacion_Restaurante_Noor_Paco_Morales_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/19_Menu_Degustacion_Restaurante_Noor_Paco_Morales_Seccion_03.pdf",
      "media": { "pdf": "1R7jJn8_PVDo3_vnD17F3kXvqw3OBpUH1", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPSJOjTFwNydbkyaq-exL1zbjpz5jqWAdyDdGxU9RFstjXw640cGht4l2_IrLumg0NQbD0oxsM4niqB3ZuHQVX9NLPl-nVVbDc1BrQ=s1024" }
    },
    {
      "id": "local-rec-2015_10_06_Menu_Mugaritz_Andoni_Luis_Aduriz", "driveId": "1Ju3vVoeDq6Hzcl5hmtY2Vo6nRPRnLtZC", "category": "03_RECETARIO",
      "title": "2015-10-06_Menu_Mugaritz_Andoni-Luis-Aduriz",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015-10-06_Menu_Mugaritz_Andoni-Luis-Aduriz.pdf",
      "media": { "pdf": "1Ju3vVoeDq6Hzcl5hmtY2Vo6nRPRnLtZC", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOc5Cw0qUY-KVqqUHHay6fKSQOLKXUNBIwbko8zM8XUSEvfS5Od3oFQWORmxetWd2g1euwyeHbCEhZGruaGLGkI3ES9VyniHQfgJLmC=s1024" }
    },
    {
      "id": "local-rec-2020_03_18_Menu_Temporada_5_Noor_Paco_Morales", "driveId": "1qNop5Bco4wjYcVE3XKNLDIzmiPw6DMwi", "category": "03_RECETARIO",
      "title": "2020-03-18_Menu_Temporada-5_Noor-Paco-Morales",
      "year": 2020,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2020-03-18_Menu_Temporada-5_Noor-Paco-Morales.pdf",
      "media": { "pdf": "1qNop5Bco4wjYcVE3XKNLDIzmiPw6DMwi", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN48O2EZuLJzlCor3wGrMEbBAk2_3XO1aLDLeJ_t9SWcaRePYm7iBMCcyVX3KQcG2E4zoCB50QH3PwHFkCX20xM393h3r2mvn1qNpda=s1024" }
    },
    {
      "id": "local-rec-06_Gran_Menu_Degustacion_Martin_Berasategui_Seccion_03", "driveId": "1JJHJMSC0zUP9Mxyd4gWlEDfMpn1rj8yT", "category": "03_RECETARIO",
      "title": "06_Gran_Menu_Degustacion_Martin_Berasategui_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/06_Gran_Menu_Degustacion_Martin_Berasategui_Seccion_03.pdf",
      "media": { "pdf": "1JJHJMSC0zUP9Mxyd4gWlEDfMpn1rj8yT", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNurDk27aB_u_Y9PvM7QrWXCWB52GrB1ZAKG2xnVPx6lK_vzBYkWNEIjjrYuVR_zsoZkfNNVK5NzZSNU4tFNCe__ryoH0NY5mgDoUA=s1024" }
    },
    {
      "id": "local-rec-06_Menu_Amor_por_la_Cocina_Luca_Fantin_Bulgari_Tokyo_Seccion_03", "driveId": "1WrWjHDh_J8YtPN7mgptL6iU107gCp7Em", "category": "03_RECETARIO",
      "title": "06_Menu_Amor_por_la_Cocina_Luca_Fantin_Bulgari_Tokyo_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/06_Menu_Amor_por_la_Cocina_Luca_Fantin_Bulgari_Tokyo_Seccion_03.pdf",
      "media": { "pdf": "1WrWjHDh_J8YtPN7mgptL6iU107gCp7Em", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBO2oijzTH-yb4ZEGB2nRn85nrCVK3klzbB7mUY6z2u3Wh5HXo95D5Ng8pteAuKhnbrJxzuCflwCIsKS0oOvAQdpSPDPGUi9FWGith8=s1024" }
    },
    {
      "id": "local-rec-2008_08_05_Menu_Clasicos_Calima_Dani_Garcia.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2008-08-05_Menu_Clasicos_Calima-Dani-Garcia.pdf",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2008-08-05_Menu_Clasicos_Calima-Dani-Garcia.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2013_Menu_Antojos_de_un_Marinero_en_Tierra_Aponiente_Seccion_03", "driveId": "1U2Q-8ysVaZAMXbf1fpXtphUsvXmnnaXp", "category": "03_RECETARIO",
      "title": "2013_Menu_Antojos_de_un_Marinero_en_Tierra_Aponiente_Seccion_03",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2013_Menu_Antojos_de_un_Marinero_en_Tierra_Aponiente_Seccion_03.pdf",
      "media": { "pdf": "1U2Q-8ysVaZAMXbf1fpXtphUsvXmnnaXp", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBP23fe4x7ga1fbcXjv4oQ41zp97Gr7O0pFlsURPKnHDYHe0tA8vUAtq7YA9lJnW81kpvfJpabEWcOCivankLjr_4A2jWOYYXDvdVPA=s1024" }
    },
    {
      "id": "local-rec-2015_Menu_Carta_Fruits_de_Mer_Balthazar_Seccion_03.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2015_Menu_Carta_Fruits_de_Mer_Balthazar_Seccion_03.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015_Menu_Carta_Fruits_de_Mer_Balthazar_Seccion_03.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2009_02_07_Grand_Menu_Charlie_Trotters_Seccion_03_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2009-02-07_Grand_Menu_Charlie_Trotters_Seccion_03 (1)",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2009-02-07_Grand_Menu_Charlie_Trotters_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2009_02_07_Menu_Grand_Menu_Charlie_Trotters", "driveId": "1OkYiJiXgwZrL_1tAkWvbBmZPfBt9HnCo", "category": "03_RECETARIO",
      "title": "2009-02-07_Menu_Grand-Menu_Charlie-Trotters",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2009-02-07_Menu_Grand-Menu_Charlie-Trotters.pdf",
      "media": { "pdf": "1OkYiJiXgwZrL_1tAkWvbBmZPfBt9HnCo", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMpVwBGDWlAzNjnsRgDpEey1DZd57OrFiVHGAEiCRzYOvqAxBnISeSbj7LkeFkSK6yR2Wr2c66NcVu0LlbQGddxxmEMleg9SPQZLf4z=s1024" }
    },
    {
      "id": "local-rec-23_Menu_Degustacion_Mugaritz_Andoni_Luis_Aduriz_Seccion_03", "driveId": "1Vfs_oGMoC1MX4epIICCOUM8um1A8TYpa", "category": "03_RECETARIO",
      "title": "23_Menu_Degustacion_Mugaritz_Andoni_Luis_Aduriz_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/23_Menu_Degustacion_Mugaritz_Andoni_Luis_Aduriz_Seccion_03.pdf",
      "media": { "pdf": "1Vfs_oGMoC1MX4epIICCOUM8um1A8TYpa", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBObR7RD_6Vgy8jlLaFXRCsAnd4QnssBCHA9GEESwhKGVPiNcuUJaepyO-HuflbB6__QmE-LEdDgkEzb94fbMD4GmsRsacvcTYg-noI=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Gastronomico_Casa_Marcial.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Gastronomico_Casa-Marcial.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Gastronomico_Casa-Marcial.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2004_Tasting_Menu_Auberge_du_Soleil_Robert_Curry_Seccion_03", "driveId": "19qNLbYvL0r_xwEgWjzMPqwlYvtqKzPWo", "category": "03_RECETARIO",
      "title": "2004_Tasting_Menu_Auberge_du_Soleil_Robert_Curry_Seccion_03",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2004_Tasting_Menu_Auberge_du_Soleil_Robert_Curry_Seccion_03.pdf",
      "media": { "pdf": "19qNLbYvL0r_xwEgWjzMPqwlYvtqKzPWo", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMWP51ngQwpsgQ4ozPYvhvLj6Bs94CTuEYu7PfUERN2Zfptg6JyYvInXP8Vp8mVp0jVGw6jF_pw6iKD0j8yklNZdKillhi6ySLSEoHB=s1024" }
    },
    {
      "id": "local-rec-2009_02_06_Menu_Tour_Alinea_Grant_Achatz", "driveId": "1lhOo5wRUQugrXJ5lPkTFiBKeVA_jFgYP", "category": "03_RECETARIO",
      "title": "2009-02-06_Menu_Tour_Alinea-Grant-Achatz",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2009-02-06_Menu_Tour_Alinea-Grant-Achatz.pdf",
      "media": { "pdf": "1lhOo5wRUQugrXJ5lPkTFiBKeVA_jFgYP", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN_YcR1i5f7Q6y7KR6SWlAcokymk9uWros9XCg2rf5WCME9NMpSN_sO5BjdYRZkbhO-ocbMjA_VWwZUh47nse0ScCBCpKIrYUzfBrTo=s1024" }
    },
    {
      "id": "local-rec-2009_02_06_Menu_Tour_Alinea_Grant_Achatz_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2009-02-06_Menu_Tour_Alinea-Grant-Achatz (1)",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2009-02-06_Menu_Tour_Alinea-Grant-Achatz (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-17_Menu_Degustacion_El_Celler_de_Can_Roca_Seccion_03", "driveId": "1dRa-50FMr7nCT_lv3XOgXj8vByfez1c2", "category": "03_RECETARIO",
      "title": "17_Menu_Degustacion_El_Celler_de_Can_Roca_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/17_Menu_Degustacion_El_Celler_de_Can_Roca_Seccion_03.pdf",
      "media": { "pdf": "1dRa-50FMr7nCT_lv3XOgXj8vByfez1c2", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOqcD94QRkIw45dxmRvf6VnejPeZ9KK_9KpafZF1HPQAFSZZEmZZBvhbXWMt5JEhtb23TrSGsCY6UGcMrztwugDck915MTijwP2yKg=s1024" }
    },
    {
      "id": "local-rec-2015_Menu_Suculencia_Casa_Gerardo_Marcos_Moran_Seccion_03", "driveId": "1Hqc-aOfa7b1dATyyy-vg714yjXIEITAp", "category": "03_RECETARIO",
      "title": "2015_Menu_Suculencia_Casa_Gerardo_Marcos_Moran_Seccion_03",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015_Menu_Suculencia_Casa_Gerardo_Marcos_Moran_Seccion_03.pdf",
      "media": { "pdf": "1Hqc-aOfa7b1dATyyy-vg714yjXIEITAp", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOxd5vLcynZrrpT-_22qsxT3TrKJVpAvyrJmkfF2wLMUSrR6S_JAAAdjOLX4M_6Y56_AHYcfxW0ldXJ4HBNy2kVSQFr_iOTcDEidEA=s1024" }
    },
    {
      "id": "local-rec-2013_Menu_Antojos_de_un_Marinero_en_Tierra_Aponiente_Seccion_03_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2013_Menu_Antojos_de_un_Marinero_en_Tierra_Aponiente_Seccion_03 (1)",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2013_Menu_Antojos_de_un_Marinero_en_Tierra_Aponiente_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Clasicos_Calima_Dani_Garcia", "driveId": "1QO0ocy2j0TsJbFBviN2ATTtcqOPUfJsQ", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Clasicos_Calima-Dani-Garcia",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Clasicos_Calima-Dani-Garcia.pdf",
      "media": { "pdf": "1QO0ocy2j0TsJbFBviN2ATTtcqOPUfJsQ", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBP67-uIFwQqDkM_d-da6U_XYIYpDaOjaNAy_IqsLaJ2MFm5oaZdTJ8CaIC2GXktxdTPmBIDnbhyEIE-_1m8WgU51MErYXSEHpgDaAqV=s1024" }
    },
    {
      "id": "local-rec-22_Factura_Menu_Decouverte_et_Nature_Bras_Laguiole_Seccion_03", "driveId": "19l6H3GCYeBRmapcOS8qZZc4gx7zitoFN", "category": "03_RECETARIO",
      "title": "22_Factura_Menu_Decouverte_et_Nature_Bras_Laguiole_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/22_Factura_Menu_Decouverte_et_Nature_Bras_Laguiole_Seccion_03.pdf",
      "media": { "pdf": "19l6H3GCYeBRmapcOS8qZZc4gx7zitoFN", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMF7U2ITws9v2He-BOLos9nlFZmPOpI_Nwa7JTyq910dnUSDTKmR2Vax1TRWKErSF3U7sBAbolaNmJ__IpiPLW8eFVu6HgOgub7OR9F=s1024" }
    },
    {
      "id": "local-rec-05_Menu_Cocina_Tradicion_Calima_Dani_Garcia_Seccion_03_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "05_Menu_Cocina_Tradicion_Calima_Dani_Garcia_Seccion_03 (1)",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/05_Menu_Cocina_Tradicion_Calima_Dani_Garcia_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2009_02_07_Grand_Menu_Charlie_Trotters_Seccion_03", "driveId": "1UekxzxlJG8oFw2NO44xZnfySky9IC_gB", "category": "03_RECETARIO",
      "title": "2009-02-07_Grand_Menu_Charlie_Trotters_Seccion_03",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2009-02-07_Grand_Menu_Charlie_Trotters_Seccion_03.pdf",
      "media": { "pdf": "1UekxzxlJG8oFw2NO44xZnfySky9IC_gB", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMjkIF9vfNhUSKqdLXVdrv7nJdMPWbI5rNJq74DWqTm_3rd3cDSnggDUMlAOg04-2GvJuSHxsuZpg-Vcrogc0YG6QQEiWD02fApdcc=s1024" }
    },
    {
      "id": "local-rec-2010_Menu_Degustacion_Restaurant_Lameloise_Seccion_03", "driveId": "1U8xr51X7pBxWIyrtFCxVCJmlDGFX9zaW", "category": "03_RECETARIO",
      "title": "2010_Menu_Degustacion_Restaurant_Lameloise_Seccion_03",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2010_Menu_Degustacion_Restaurant_Lameloise_Seccion_03.pdf",
      "media": { "pdf": "1U8xr51X7pBxWIyrtFCxVCJmlDGFX9zaW", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNIDHw_fX5CQWfgNdSXu3CQydfOb4spucl7N3qwc4J1QNKJ3x9QksmRLY3zyNa47wKOljJIbWlGvo1ZGWnqfWw9Wxkw73JWSFG0Hho=s1024" }
    },
    {
      "id": "local-rec-03_Menu_Endemica_Borago_Rodolfo_Guzman_Seccion_03{", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "03_Menu_Endemica_Borago_Rodolfo_Guzman_Seccion_03{",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/03_Menu_Endemica_Borago_Rodolfo_Guzman_Seccion_03{.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-28_Paco_Morales_A_Michelin_Experience_Chengdu_Menu_Tapas_Seccion_03", "driveId": "1KiKNb4WGd1YwojFLscxXzgRgd4Aj9aLJ", "category": "03_RECETARIO",
      "title": "28_Paco_Morales_A_Michelin_Experience_Chengdu_Menu_Tapas_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/28_Paco_Morales_A_Michelin_Experience_Chengdu_Menu_Tapas_Seccion_03.pdf",
      "media": { "pdf": "1KiKNb4WGd1YwojFLscxXzgRgd4Aj9aLJ", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOBfpywFpGx2AEpuTrrkGM0yr74RmgT-jihPNFM8iwgntXVtV0aRIl_4VZm2WuI0tzQG6B8gG8ZPBWvNAbr3qAgH7CR9BFBhCqlqpQ=s1024" }
    },
    {
      "id": "local-rec-2011_Menu_Degustacion_elBulli_Ferran_Adria_Seccion_03", "driveId": "1CFbVX25XKIp8nEDAGONm1SfYiJ6Yd1XX", "category": "03_RECETARIO",
      "title": "2011_Menu_Degustacion_elBulli_Ferran_Adria_Seccion_03",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2011_Menu_Degustacion_elBulli_Ferran_Adria_Seccion_03.pdf",
      "media": { "pdf": "1CFbVX25XKIp8nEDAGONm1SfYiJ6Yd1XX", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMq9-DWaeJRaOLVTROGa-5zU2LsHseqhGasxy1Rk5CmNGohkGujnQBEsJW2F8jbOvSezmRICc3jvP1ivCJIC1yxRRnDeErzyjwpPw=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Navidad_FinDeAño_Alotrapo", "driveId": "1xeHfFnJCg0EU2DWFxI6AXxsZbM34X4vZ", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Navidad-FinDeAño_Alotrapo",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Navidad-FinDeAño_Alotrapo.pdf",
      "media": { "pdf": "1xeHfFnJCg0EU2DWFxI6AXxsZbM34X4vZ", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOrJwtUwCW1ryVRKKEi4qvZZK8GAB3uUswdbuX-g2-nTGd2AjbqeghpmdlUpszRzSRnX3UBZBUdeVbgk2hBNHtuv9NiwGWcWbXhiKym=s1024" }
    },
    {
      "id": "local-rec-18_Charity_Gala_Dinner_UNICEF_Hotel_Arts_Barcelona_Seccion_03", "driveId": "1FsE0FJOZwKZ9Mi1yasHDlvFsgbWlgt6O", "category": "03_RECETARIO",
      "title": "18_Charity_Gala_Dinner_UNICEF_Hotel_Arts_Barcelona_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/18_Charity_Gala_Dinner_UNICEF_Hotel_Arts_Barcelona_Seccion_03.pdf",
      "media": { "pdf": "1FsE0FJOZwKZ9Mi1yasHDlvFsgbWlgt6O", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN4zGCNwKczf607KRNLNnss3lKU2KGwrDJszD7TvwrHzmdeghHet-Mk_665lZW0HhTTsj16DEBfMzNTe8C_esMEYimdRG7fSIMDuZ4=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Carta_Restaurante_Cambio_de_Tercio", "driveId": "1ulW0Dt5Mo4ys7ToFlN54NvxI4LhAjnMr", "category": "03_RECETARIO",
      "title": "2026-03-18_Carta_Restaurante_Cambio-de-Tercio",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Carta_Restaurante_Cambio-de-Tercio.pdf",
      "media": { "pdf": "1ulW0Dt5Mo4ys7ToFlN54NvxI4LhAjnMr", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMquGeBRPYy-SDSYDO01CI4ziLo71PKyCFPq4EUK1X7v_eP5HZKZQCCaK1Ty6GsxhRPpzqimkoDvr9tkFJjyqFR0paB-9RGrGHLrNC_=s1024" }
    },
    {
      "id": "local-rec-05_41_Experience_Albert_Adria_Menu_Degustacion_Seccion_03", "driveId": "1MxAFN0OAx7iSiphB-a6m-743ypGLRL1B", "category": "03_RECETARIO",
      "title": "05_41_Experience_Albert_Adria_Menu_Degustacion_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/05_41_Experience_Albert_Adria_Menu_Degustacion_Seccion_03.pdf",
      "media": { "pdf": "1MxAFN0OAx7iSiphB-a6m-743ypGLRL1B", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOlUNIMZ7ZnCxJ1LtQTN0ufYCJo2khV9XDVMlQsZr1bWZ1xQOLMqVf5DtzDFk3zS8kIWpjGDk0OYbbnIqQa3s11cI2nR_4kMgtC75g=s1024" }
    },
    {
      "id": "local-rec-05_Menu_Cocina_Tradicion_Calima_Dani_Garcia_Seccion_03", "driveId": "1RU53gT1U4qapiMaeAGfYHQCjOeLFf5nB", "category": "03_RECETARIO",
      "title": "05_Menu_Cocina_Tradicion_Calima_Dani_Garcia_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/05_Menu_Cocina_Tradicion_Calima_Dani_Garcia_Seccion_03.pdf",
      "media": { "pdf": "1RU53gT1U4qapiMaeAGfYHQCjOeLFf5nB", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBP5CKLXyGhL12_howBqeZEvbUO6ZvN5GsN-SYXaIftH8F1YFGfNGGovRh1w5xUgnI6H4B1JNuHdpk1vMO7IgYtOuLieRh6HipG_GQk=s1024" }
    },
    {
      "id": "local-rec-2011_Carta_Maset_Ferrero_Paco_Morales_Seccion_03", "driveId": "1BY4i0uiHd6DA-ONzAjrazbg_GXHwzq48", "category": "03_RECETARIO",
      "title": "2011_Carta_Maset_Ferrero_Paco_Morales_Seccion_03",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2011_Carta_Maset_Ferrero_Paco_Morales_Seccion_03.pdf",
      "media": { "pdf": "1BY4i0uiHd6DA-ONzAjrazbg_GXHwzq48", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMVL0Jep7ZvgpzJ4KTxYTknOBJ1vAhgOj4xOkBYdEHDsi9ZNlXO0iuLRqrs8SP5ddaCZjgLv4KQKFLMgTvwznSSR_Oqe8X4TSiSF5-R=s1024" }
    },
    {
      "id": "local-rec-2016_Menu_Cena_Paco_Morales_Puerta_del_Perdon_Seccion_03", "driveId": "1JdKkNwwmT6cHv6IpfmqPsItjip-cwQHq", "category": "03_RECETARIO",
      "title": "2016_Menu_Cena_Paco_Morales_Puerta_del_Perdon_Seccion_03",
      "year": 2016,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2016_Menu_Cena_Paco_Morales_Puerta_del_Perdon_Seccion_03.pdf",
      "media": { "pdf": "1JdKkNwwmT6cHv6IpfmqPsItjip-cwQHq", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBP-puhHOKINYpclqP2rzbHPAPt5ubz_KLPXETRWoli5ICGyerMIVRh8BnDCix1BG7nIvV-ee-9A22tnX3cBbs5jDHCAVpJQLaQIjbg=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Puerto_Escondido_Aponiente", "driveId": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Puerto-Escondido_Aponiente",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Puerto-Escondido_Aponiente.pdf",
      "media": { "pdf": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMDjH8BERThQVomKFy7nhgQ6nQ29aT-r6scmudEYcNLk8p471TS35FHp_Nd_QkbaxaZsRyxG43emGN-wTTUuRZIjLiCld7NaXSHO7DY=s1024" }
    },
    {
      "id": "local-rec-2015_Menu_Dinner_Paco_Morales_The_White_Rabbit_Singapore_Seccion_03", "driveId": "1FALBPnXsvYbudMkrdcX4rgKIQK_pOX2D", "category": "03_RECETARIO",
      "title": "2015_Menu_Dinner_Paco_Morales_The_White_Rabbit_Singapore_Seccion_03",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015_Menu_Dinner_Paco_Morales_The_White_Rabbit_Singapore_Seccion_03.pdf",
      "media": { "pdf": "1FALBPnXsvYbudMkrdcX4rgKIQK_pOX2D", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPkMIP_lP1RbxkFfTFfXtN9J8g9RAVyz_KslmtA5TytL6MSNhsauATX_MSfPRCNCqWTFsELl-7zVrJi19nqhFLvLi-04SAKV_rXGK2v=s1024" }
    },
    {
      "id": "local-rec-2015_06_29_Menu_Apicius_Session_Alotrapo", "driveId": "17XRYOJvWNKRXmu8S8tsTwKHbisbVgKBh", "category": "03_RECETARIO",
      "title": "2015-06-29_Menu_Apicius-Session_Alotrapo",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015-06-29_Menu_Apicius-Session_Alotrapo.pdf",
      "media": { "pdf": "17XRYOJvWNKRXmu8S8tsTwKHbisbVgKBh", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOi8yZ5K0jcla31KzeoTUL67EfXzIGDOYIuwIP4gt3WX9aGqz2ii7gF-HVtZeiy1Iz6gYa5f-clzWLtnHQStawascU00Hi9F9Ix9zTX=s1024" }
    },
    {
      "id": "local-rec-2015_06_06_Menu_Amor_Cocina_Luca_Fantin", "driveId": "1_LPApF333YP4RwPw8OqRYmb4QU6d9kW8", "category": "03_RECETARIO",
      "title": "2015-06-06_Menu_Amor-Cocina_Luca-Fantin",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015-06-06_Menu_Amor-Cocina_Luca-Fantin.pdf",
      "media": { "pdf": "1_LPApF333YP4RwPw8OqRYmb4QU6d9kW8", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN24kNBYaY8yKR1JKyZiIx8Mo7KnEdZZ4J_rxkpH-aYckYkqWzwDgnffnOA7Yf9Pz4hlrjIJ3czru_x5MAkJSYXujsXB9AyfCylKbiE=s1024" }
    },
    {
      "id": "local-rec-05_Menu_Degustacion_Paco_Morales_Iberostar_On_Tour_Seccion_03", "driveId": "1lG0dGCxHxzRKtkaQyI4cikf-vgInEljv", "category": "03_RECETARIO",
      "title": "05_Menu_Degustacion_Paco_Morales_Iberostar_On_Tour_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/05_Menu_Degustacion_Paco_Morales_Iberostar_On_Tour_Seccion_03.pdf",
      "media": { "pdf": "1lG0dGCxHxzRKtkaQyI4cikf-vgInEljv", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPphYLvEVmnNDO6TnQPs-_EiFgv8ep5fUS4mUAXMh_LlpjPxmCKjfpxg1tfkgxrwHYPpMvV189NR6LAcFr5Y1s_1u2lrqalwULEUOo=s1024" }
    },
    {
      "id": "local-rec-2005_Tasting_Menu_and_Wine_The_Fat_Duck_Seccion_03", "driveId": "14aPMiGSdcklp6eIr3Pz-uYgWy9B8cXho", "category": "03_RECETARIO",
      "title": "2005_Tasting_Menu_and_Wine_The_Fat_Duck_Seccion_03",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2005_Tasting_Menu_and_Wine_The_Fat_Duck_Seccion_03.pdf",
      "media": { "pdf": "14aPMiGSdcklp6eIr3Pz-uYgWy9B8cXho", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNVnqX2kEXn_MvDW2BFT93YU7scx5LsA-rsxy76UMJt8UDDKpuWqvsU3DyFWqhIm1jWTzNY21pnSJqdIIAGQpXT-vLZVclfdfBvW1c=s1024" }
    },
    {
      "id": "local-rec-2014_Menu_Degustacion_Olive_Sanuki_Wagyu_Ricardo_Sanz_Seccion_03_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2014_Menu_Degustacion_Olive_Sanuki_Wagyu_Ricardo_Sanz_Seccion_03 (1)",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014_Menu_Degustacion_Olive_Sanuki_Wagyu_Ricardo_Sanz_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2026_03_14_Catalogo_Collections_Multi_Chef", "driveId": "1uWpktL6SqP_SIzbCKJqpHQsvQ1GJiUY3", "category": "03_RECETARIO",
      "title": "2026-03-14_Catalogo_Collections_Multi-Chef",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-14_Catalogo_Collections_Multi-Chef.pdf",
      "media": { "pdf": "1uWpktL6SqP_SIzbCKJqpHQsvQ1GJiUY3", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNaVIsUrv60vLQ60GLXxTH2ZR_b7lY2AZDpQ0UwZiUjU8yvDY4Kom7YDKcli3wV-X0M0-8w9tX0Yce1ypnTF6pdx5MJnYAQGNhpJflN=s1024" }
    },
    {
      "id": "local-rec-02_Jornadas_Gastronomicas_A_Cuatro_Manos_Dani_Garcia_Andoni_Luis_Aduriz_Seccion_03.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "02_Jornadas_Gastronomicas_A_Cuatro_Manos_Dani_Garcia_Andoni_Luis_Aduriz_Seccion_03.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/02_Jornadas_Gastronomicas_A_Cuatro_Manos_Dani_Garcia_Andoni_Luis_Aduriz_Seccion_03.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2013_04_13_Menu_Mugaritz_Andoni_Luis_Aduriz", "driveId": "1txdagN75dY9ozmGVqHxBZ_YphXqp7dtW", "category": "03_RECETARIO",
      "title": "2013-04-13_Menu_Mugaritz_Andoni-Luis-Aduriz",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2013-04-13_Menu_Mugaritz_Andoni-Luis-Aduriz.pdf",
      "media": { "pdf": "1txdagN75dY9ozmGVqHxBZ_YphXqp7dtW", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOVvar2X6QPMy_W1ECyqbWqF864Uq1Hdaq_d69oyPBR5QgvJh98JMG8du8iyP6q_Il7hN6Go9jTx-2yKaJjyvQq-j08yssnOR3pK1ck=s1024" }
    },
    {
      "id": "local-rec-2017_Noor_Menu_Largo_Andalusi_Cordoba", "driveId": "1MP0BDhVWASiVWt0NaAHWjh1NuifPDN_m", "category": "03_RECETARIO",
      "title": "2017_Noor_Menu-Largo-Andalusi_Cordoba",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017_Noor_Menu-Largo-Andalusi_Cordoba.pdf",
      "media": { "pdf": "1MP0BDhVWASiVWt0NaAHWjh1NuifPDN_m", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNMdobt7MjyxF5JMctNZAsa_UiWkfgHEA6LlMV02nj2cWYDI5O9ygvjjUOoPOjoMkbkLhYV6nf9krYXHjlviJsP3fS9JFUp0JZSarE=s1024" }
    },
    {
      "id": "local-rec-2017_Noor_Menu_Largo_Andalusi_Cordoba_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2017_Noor_Menu-Largo-Andalusi_Cordoba (1)",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017_Noor_Menu-Largo-Andalusi_Cordoba (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2006_10_31_The_French_Laundry_Chefs_Tasting_Menu_Napa_Valley", "driveId": "1tIyYK0xdNZPzKXH7lsI715tL-VBZgDpQ", "category": "03_RECETARIO",
      "title": "2006-10-31_The-French-Laundry_Chefs-Tasting-Menu_Napa-Valley",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2006-10-31_The-French-Laundry_Chefs-Tasting-Menu_Napa-Valley.pdf",
      "media": { "pdf": "1tIyYK0xdNZPzKXH7lsI715tL-VBZgDpQ", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOMpfIApGtYSehsLQGvf1XOp3iThbKZ6gPtXql08A_f1vPQ_9Nh-hygyb9frFoi3tVgGjBfwgT3VDDRB2e10vPIugeRHw7RhBQW2PE=s1024" }
    },
    {
      "id": "local-rec-2011_Bar_Ferrero_Carta_Taberna_y_Arroces_Bocairent", "driveId": "1nE43lYQmLlvDcQjCsqLSPy_i8iQmwW1U", "category": "03_RECETARIO",
      "title": "2011_Bar-Ferrero_Carta-Taberna-y-Arroces_Bocairent",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2011_Bar-Ferrero_Carta-Taberna-y-Arroces_Bocairent.pdf",
      "media": { "pdf": "1nE43lYQmLlvDcQjCsqLSPy_i8iQmwW1U", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPA-V_FMv9d8tvL7Hpw_fFeWZEmFmU2lscVtMKgSLZnw2ID5Bpmy1EJEnG8OVSkAKzgs3rEf6f7BTgEfMILIlm_D0U8GbunBkUb2T0=s1024" }
    },
    {
      "id": "local-rec-2010_01_Paco_Morales_Hotel_Ferrero_Stratford_Chefs_School_Canada_(1)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2010-01_Paco-Morales_Hotel-Ferrero_Stratford-Chefs-School_Canada (1)",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2010-01_Paco-Morales_Hotel-Ferrero_Stratford-Chefs-School_Canada (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2016_Aponiente_Maridaje_Vinos_de_Jerez_El_Puerto", "driveId": "150tkYjk8FWnq97WaL145osU3Hkaxch5n", "category": "03_RECETARIO",
      "title": "2016_Aponiente_Maridaje-Vinos-de-Jerez_El-Puerto",
      "year": 2016,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2016_Aponiente_Maridaje-Vinos-de-Jerez_El-Puerto.pdf",
      "media": { "pdf": "150tkYjk8FWnq97WaL145osU3Hkaxch5n", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBM0tRHIWIt-Zi-zVEazB1YtKwxO0FElQjYhc_xSWH7ltiLKbsYYHMzs0Zmkao8vwGoMin9iOKS_Sw0BXvkVFvvPkW39wl5-vbpweX8=s1024" }
    },
    {
      "id": "local-rec-2006_El_Poblet_Quique_Dacosta_Menu_Universo_Local_Denia", "driveId": "1ezucqyg_x-_zE3yOFg6cfeJkFkZIwj2D", "category": "03_RECETARIO",
      "title": "2006_El-Poblet-Quique-Dacosta_Menu-Universo-Local_Denia",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2006_El-Poblet-Quique-Dacosta_Menu-Universo-Local_Denia.pdf",
      "media": { "pdf": "1ezucqyg_x-_zE3yOFg6cfeJkFkZIwj2D", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNY25-EP8K0ft6ate89X2D2nGm1BbsWEFX5N5WdM7CPyujsva1Gy1_5Dlji2CM_ZSVT2NuzAKn6xciCHkfHvWf9H6BomtZ07z69f6s=s1024" }
    },
    {
      "id": "local-rec-2012_Carracuca_Carta_Tasca_y_Tapeo_Alicante", "driveId": "1FEOkTpLmOTR-rlJMSdMyfOXJ_GtS9lPk", "category": "03_RECETARIO",
      "title": "2012_Carracuca_Carta-Tasca-y-Tapeo_Alicante",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2012_Carracuca_Carta-Tasca-y-Tapeo_Alicante.pdf",
      "media": { "pdf": "1FEOkTpLmOTR-rlJMSdMyfOXJ_GtS9lPk", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMZpNK7U4HexSPH7lJDhsDvRUbX5DknzPm8az8q3mGo1Tyh2Z-Ko7aMwhBxKyo6iJRUMa_Os1w1G_LZw8izUoZlh0K9lqJVnLZjhLs=s1024" }
    },
    {
      "id": "local-rec-2012_Carracusa_Carta_Sala_y_Vinos_Alicante", "driveId": "1mMvBStVPNfeqW5uPMhLglRY_Xjyg3vkZ", "category": "03_RECETARIO",
      "title": "2012_Carracusa_Carta-Sala-y-Vinos_Alicante",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2012_Carracusa_Carta-Sala-y-Vinos_Alicante.pdf",
      "media": { "pdf": "1mMvBStVPNfeqW5uPMhLglRY_Xjyg3vkZ", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOGY33vHicxEZVWwtGl4xHw9uGm8lWmGSTCt3fo_rS7imbaPpqpcVq5HzOkhsA1mRW4oSCxgK9YS8lYzdQ_4JaOXwovGmluE8-tlLE=s1024" }
    },
    {
      "id": "local-rec-2010_Maison_Lameloise_Dossier_Presentacion_Chagny_Francia", "driveId": "1Ok13xjt4BXqTXBpD8q4JK2_3osxbz7iE", "category": "03_RECETARIO",
      "title": "2010_Maison-Lameloise_Dossier-Presentacion_Chagny-Francia",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2010_Maison-Lameloise_Dossier-Presentacion_Chagny-Francia.pdf",
      "media": { "pdf": "1Ok13xjt4BXqTXBpD8q4JK2_3osxbz7iE", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPq3Q9VEbVjH9jae5nYtoYG1DR93deZYHVq6JL-TX3ZYXXt3fnr8AuSktl_YHACMlG6AnaJv3xbtkacfVLhUipcfDEu72zur7pIZSk=s1024" }
    },
    {
      "id": "local-rec-2017_Noor_Menu_Largo_Andalusi_Cordoba_(2)", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2017_Noor_Menu-Largo-Andalusi_Cordoba (2)",
      "year": 2017,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2017_Noor_Menu-Largo-Andalusi_Cordoba (2).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2013_01_20_Menu_Evento_Ramses_Ricard_Camarena.pdf", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2013-01-20_Menu_Evento_Ramses-Ricard-Camarena.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2013-01-20_Menu_Evento_Ramses-Ricard-Camarena.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPoI6OPw_PesRRmhIgSvRH6Lm1IyAGBOKsOp3U6bDMatjD2r-mlZI5LcTLglHJ3R5Fjt6bHpwOU5x6myHWmRTU26GbxoZxLvj1Hbm4_=s1024" }
    },
    {
      "id": "local-rec-2014_Menu_La_Casa_de_los_Caramelos_La_Salita_Begona_Rodrigo_Seccion_03", "driveId": "1FH3L9q_uy2IHolzlFHHiEUrEc_BnxSld", "category": "03_RECETARIO",
      "title": "2014_Menu_La_Casa_de_los_Caramelos_La_Salita_Begona_Rodrigo_Seccion_03",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014_Menu_La_Casa_de_los_Caramelos_La_Salita_Begona_Rodrigo_Seccion_03.pdf",
      "media": { "pdf": "1FH3L9q_uy2IHolzlFHHiEUrEc_BnxSld", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMroKwM9wjKYxC7dpX_F1S21AbdNKxWV_a-qXDwHdJMp92BTNART2jNdr4YW1JRV2JxDy-sgtQE6oRVzjKNr9kNHordpmJHvO5LcQ=s1024" }
    },
    {
      "id": "local-rec-2014_Menu_La_Casa_de_los_Caramelos_La_Salita_Seccion_03", "driveId": "1eiLewzs6kwhNgIWoRoejIhL3yDFpgaxD", "category": "03_RECETARIO",
      "title": "2014_Menu_La_Casa_de_los_Caramelos_La_Salita_Seccion_03",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014_Menu_La_Casa_de_los_Caramelos_La_Salita_Seccion_03.pdf",
      "media": { "pdf": "1eiLewzs6kwhNgIWoRoejIhL3yDFpgaxD", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOzTqsHEcRTGDD4TK8xb7JOqBZAqGyg5Vn-H4K3fmnzlewE-Ikc31RvOsu0No8j0NToWePwL1Jtkh9yHd6JzbAJ6iPi6oVNfkUd-Z4=s1024" }
    },
    {
      "id": "local-rec-2010_Menu_Degustacion_Restaurant_l_Arnsbourg_Hôtel_K_Seccion_03", "driveId": "1GsvRIOwBxFg6Ur1duXkvlqiuLJdgODsn", "category": "03_RECETARIO",
      "title": "2010_Menu_Degustacion_Restaurant_l_Arnsbourg_Hôtel_K_Seccion_03",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2010_Menu_Degustacion_Restaurant_l_Arnsbourg_Hôtel_K_Seccion_03.pdf",
      "media": { "pdf": "1GsvRIOwBxFg6Ur1duXkvlqiuLJdgODsn", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNqQKHWsKJHme6_nwBK7wETbGTxC6bcPnrXEIOyvWqVdSlygFhRzFqaxzihgNSEWZsAMWBUm215U586PfQCoJoTtjbxgCXCtOkeSPU=s1024" }
    },
    {
      "id": "local-rec-2011_Noma_Menu_Degustacion_Copenhague", "driveId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "category": "03_RECETARIO",
      "title": "2011_Noma_Menu-Degustacion_Copenhague",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2011_Noma_Menu-Degustacion_Copenhague.pdf",
      "media": { "pdf": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBONtgTXnMTxkN_wybBkkDlfoopZgYbkEbo9wiHhyXCzTkHsG57ot7fiMbtdQYMNtXr-CYc32ZXhd7xuRhr0340FzCHcZoMpX7c0w0M=s1024" }
    },
    {
      "id": "local-rec-13_Factura_Menu_Pierre_Gagnaire_Paris_Seccion_03", "driveId": "1FMUQlo9VT-hDVfWV51cvRjCAmcu411NN", "category": "03_RECETARIO",
      "title": "13_Factura_Menu_Pierre_Gagnaire_Paris_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/13_Factura_Menu_Pierre_Gagnaire_Paris_Seccion_03.pdf",
      "media": { "pdf": "1FMUQlo9VT-hDVfWV51cvRjCAmcu411NN", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPDVwpcJbmgIBCtxV8VhxXqHvERAkXr0YmG8oI4Sz8nrHD5Sfcg4juPAcjp4ot1YJOYMYGnCYYCVzHH_tOhSoJMcL1QS7XI8q4Zng=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Invierno_Pierre_Gagnaire", "driveId": "1QbGmo7SN7vAlDvqnVJY1GCFZ2WS89XrJ", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Invierno_Pierre-Gagnaire",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Invierno_Pierre-Gagnaire.pdf",
      "media": { "pdf": "1QbGmo7SN7vAlDvqnVJY1GCFZ2WS89XrJ", "thumbnail": "https://drive.google.com/thumbnail?id=1QbGmo7SN7vAlDvqnVJY1GCFZ2WS89XrJ&sz=w1000" }
    },
    {
      "id": "local-rec-11_Evento_Infusion_Fondazione_Bisazza_Paco_Morales_Virgilio_Martinez_Seccion_03_(1)", "driveId": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "category": "03_RECETARIO",
      "title": "11_Evento_Infusion_Fondazione_Bisazza_Paco_Morales_Virgilio_Martinez_Seccion_03 (1)",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/11_Evento_Infusion_Fondazione_Bisazza_Paco_Morales_Virgilio_Martinez_Seccion_03 (1).pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMJgB0ctNRymUv62Xk9Igf79_jUKEli70Hjfsyqn3uB4pqamscFb16IBDogK3UE4gAR3o246miKdg93qhP2O9SloCMOrPcC2QJMZLRP=s1024" }
    },
    {
      "id": "local-rec-2008_Menu_Zuberoa_Arbelaitz_X_Congreso_LMG_Seccion_03", "driveId": "1OKp7A2ZwfGBj2oGNFSW3ebhk0_uzW4QK", "category": "03_RECETARIO",
      "title": "2008_Menu_Zuberoa_Arbelaitz_X_Congreso_LMG_Seccion_03",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2008_Menu_Zuberoa_Arbelaitz_X_Congreso_LMG_Seccion_03.pdf",
      "media": { "pdf": "1OKp7A2ZwfGBj2oGNFSW3ebhk0_uzW4QK", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMhTiO-rtE_trUFTVbyA-HMnanXr0TYtgxAEMcIn1EmSedGTRPupkGYyBEE8Yn4bRobbmDBsqG17kwUpzOdf6xds9A-qKlDLdjmZvk=s1024" }
    },
    {
      "id": "local-rec-23_Comunicado_Autorizacion_Plancton_Marino_Angel_Leon_Seccion_03", "driveId": "17KQtBp_jIpxqtAQpLRYIEPWzLHlGRkAI", "category": "03_RECETARIO",
      "title": "23_Comunicado_Autorizacion_Plancton_Marino_Angel_Leon_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/23_Comunicado_Autorizacion_Plancton_Marino_Angel_Leon_Seccion_03.pdf",
      "media": { "pdf": "17KQtBp_jIpxqtAQpLRYIEPWzLHlGRkAI", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBM4gm14RLqsNDnwrE2hUKiCbBNhD9RG8BnnyGliktn188XcjOd93G2MjsXQ4cKVEfZraMNWvl4ivtqrCFB7e1R17TSK2FjlGonm2Fk=s1024" }
    },
    {
      "id": "local-rec-2014_09_23_Carta_Anuncio_Plancton_Aponiente", "driveId": "1v6Um3toQ5kmt1S0xPsltu2I0Y8F2BEVf", "category": "03_RECETARIO",
      "title": "2014-09-23_Carta_Anuncio-Plancton_Aponiente",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014-09-23_Carta_Anuncio-Plancton_Aponiente.pdf",
      "media": { "pdf": "1v6Um3toQ5kmt1S0xPsltu2I0Y8F2BEVf", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN7Qrblg3A38cuwg-YeTVFNcKrjH51FlUZsryNt51cqG0VPZEFW5KL-tfHtZ-JAlOwzHb0h1y42ea5hiI9s7CAXMSY6JPSzgVLO5B7y=s1024" }
    },
    {
      "id": "local-rec-2012_11_08_Menu_Degustacion_Millesime_Mexico_Seccion_03", "driveId": "1lQN1iwkUyzI6D2slJi5qAfI50IUS6TS7", "category": "03_RECETARIO",
      "title": "2012-11-08_Menu_Degustacion_Millesime_Mexico_Seccion_03",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2012-11-08_Menu_Degustacion_Millesime_Mexico_Seccion_03.pdf",
      "media": { "pdf": "1lQN1iwkUyzI6D2slJi5qAfI50IUS6TS7", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPCJyzOaQ7M9JZMLNgprVE2FBNGP7UaSRN9iM8Usbddvk0i1oP7cjM5suYspG-mT2jqUXSc0lC_v_b752jZEFTNOpOGAVqdFYHCyrY=s1024" }
    },
    {
      "id": "local-rec-09_Factura_Menu_Dans_les_jardins_en_hiver_Arpege_Seccion_03", "driveId": "1hBsyXnNdkG6YIcC1Sx7SF7_N_8I6vZf1", "category": "03_RECETARIO",
      "title": "09_Factura_Menu_Dans_les_jardins_en_hiver_Arpege_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/09_Factura_Menu_Dans_les_jardins_en_hiver_Arpege_Seccion_03.pdf",
      "media": { "pdf": "1hBsyXnNdkG6YIcC1Sx7SF7_N_8I6vZf1", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBN1tovDI4iscyP4l_eg3HCluV0nCjEfUDyswK9VNjUio_l9YECBaYksrR7W84zA2KqfEr8uPUd5aAdI3F4w0gPrlEtrh-57cSFARCg=s1024" }
    },
    {
      "id": "local-rec-28_Menu_Paco_Morales_Al_Trapo_Rusia_Seccion_03", "driveId": "16ZtpAHihjaRiraeflHhFop6q3mDLLEOl", "category": "03_RECETARIO",
      "title": "28_Menu_Paco_Morales_Al_Trapo_Rusia_Seccion_03",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/28_Menu_Paco_Morales_Al_Trapo_Rusia_Seccion_03.pdf",
      "media": { "pdf": "16ZtpAHihjaRiraeflHhFop6q3mDLLEOl", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBNm3sJaA3hZ-LIKVEm6AdC-Tb0YCu-DoGwFCSKv3TSJwYf6Zf462Ze4-XAoyBJV9FqmEWoTSOAqqeE3CDUzDmccpWL3ayymft-VYs8=s1024" }
    },
    {
      "id": "local-rec-2015_02_28_Menu_Paco_Morales_Al_Trapo_Rusia_Seccion_03", "driveId": "1AZw4wTTEHzhR92r7fadZ2MT1r83jq6fy", "category": "03_RECETARIO",
      "title": "2015-02-28_Menu_Paco_Morales_Al_Trapo_Rusia_Seccion_03",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015-02-28_Menu_Paco_Morales_Al_Trapo_Rusia_Seccion_03.pdf",
      "media": { "pdf": "1AZw4wTTEHzhR92r7fadZ2MT1r83jq6fy", "thumbnail": "https://drive.google.com/thumbnail?id=1AZw4wTTEHzhR92r7fadZ2MT1r83jq6fy&sz=w1000" }
    },
    {
      "id": "local-rec-2014_03_29_Michelin_Experience_Paco_Morales_Shangri_La_Chengdu_Seccion_03", "driveId": "1O9i9UNCENIv49z9iBCH0vtHOli50OBjS", "category": "03_RECETARIO",
      "title": "2014-03-29_Michelin_Experience_Paco_Morales_Shangri-La_Chengdu_Seccion_03",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014-03-29_Michelin_Experience_Paco_Morales_Shangri-La_Chengdu_Seccion_03.pdf",
      "media": { "pdf": "1O9i9UNCENIv49z9iBCH0vtHOli50OBjS", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOTJ8keD_4Cd5GU9pK2sAUlHCV6cv8ufeqntvGePYN15vP2ORJ3Xc7M_bDL1pm5GzFdFccKu7Q7qO-xsoZdWl8LoJ2HfNcyrtUDKKw=s1024" }
    },
    {
      "id": "local-rec-2026_06_10_Menu_Degustacion_Lasarte_Berasategui", "driveId": "1zUdwe_vTwXW7HtzKWRlmoCcQB4x3Fw17", "category": "03_RECETARIO",
      "title": "2026-06-10_Menu_Degustacion_Lasarte-Berasategui",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-06-10_Menu_Degustacion_Lasarte-Berasategui.pdf",
      "media": { "pdf": "1zUdwe_vTwXW7HtzKWRlmoCcQB4x3Fw17", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMp8JYBIWshIW7ppswYc2PWXOPU-rkXYXx3I1DYJ0bLMbCQQh00DiuHJlRUFihoimSlGeteH3ireaBRBSZ67fKFGzMRSoBZ7ffdv7B9=s1024" }
    },
    {
      "id": "local-rec-2014_01_01_Gran_Menu_Mar_de_Sentimientos_Aponiente", "driveId": "14kaNDaTg8N_OY2YPpCkn8ET-Qn8ilde_", "category": "03_RECETARIO",
      "title": "2014-01-01_Gran-Menu_Mar-de-Sentimientos_Aponiente",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2014-01-01_Gran-Menu_Mar-de-Sentimientos_Aponiente.pdf",
      "media": { "pdf": "14kaNDaTg8N_OY2YPpCkn8ET-Qn8ilde_", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMHJg2ldxVUdLSAHMKaObucAJ81h-_vX6gFGe81Lmz5i2jWwunwTKDbxZZQ_GWs7zDTT2Tq7RV15UPVMxBDPC2FMZtJe0fIC0PjfKuA=s1024" }
    },
    {
      "id": "local-rec-2015_Menu_Room_Service_Hotel_Condes_Barcelona_Seccion_03", "driveId": "1gQTPRLILjm4wXIypStTdc8UrIdgPze20", "category": "03_RECETARIO",
      "title": "2015_Menu_Room_Service_Hotel_Condes_Barcelona_Seccion_03",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2015_Menu_Room_Service_Hotel_Condes_Barcelona_Seccion_03.pdf",
      "media": { "pdf": "1gQTPRLILjm4wXIypStTdc8UrIdgPze20", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMUfn9qAhPLdJgAPSn8FqsLp9s0obiIKRVs75C_r6im2FmIDAIVYsXBRteWHAjmk4I0LDOFQHGYKfBsr0rQYZnkZC113ft4KSK4fk0=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Carta_Tapas_Alotrapo_Madrid", "driveId": "1lo08F-22ajw3yX2PxsWAAn-c2WG_ZTHh", "category": "03_RECETARIO",
      "title": "2026-03-18_Carta_Tapas_Alotrapo-Madrid",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Carta_Tapas_Alotrapo-Madrid.pdf",
      "media": { "pdf": "1lo08F-22ajw3yX2PxsWAAn-c2WG_ZTHh", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOAAmDteCX-8Z61q3DUQTMXQjol3ktpyucKYnJL82j1BnGkBIvlnXUBT9G-4yb6vNlnotHseiBHjaobvxIi-z9Iyccs3-_JSgzVg59i=s1024" }
    },
    {
      "id": "local-rec-2026_03_18_Menu_Brunch_Bocablo_Paco_Morales.pdf", "driveId": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "category": "03_RECETARIO",
      "title": "2026-03-18_Menu_Brunch_Bocablo-Paco-Morales.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-18_Menu_Brunch_Bocablo-Paco-Morales.pdf.pdf",
      "media": { "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBMJgB0ctNRymUv62Xk9Igf79_jUKEli70Hjfsyqn3uB4pqamscFb16IBDogK3UE4gAR3o246miKdg93qhP2O9SloCMOrPcC2QJMZLRP=s1024" }
    },
    {
      "id": "local-rec-2026_03_17_Carta_Taberna_El_Convent", "driveId": "1VAv2SrdW4TULsRKKgysYkoBiReqKbYeM", "category": "03_RECETARIO",
      "title": "2026-03-17_Carta_Taberna_El-Convent",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-17_Carta_Taberna_El-Convent.pdf",
      "media": { "pdf": "1VAv2SrdW4TULsRKKgysYkoBiReqKbYeM", "thumbnail": "https://drive.google.com/thumbnail?id=1VAv2SrdW4TULsRKKgysYkoBiReqKbYeM&sz=w1000" }
    },
    {
      "id": "local-rec-2026_03_17_Menu_El_Convent.Al_Trapo", "driveId": "1SCq2m6r91PDWPZRezFJ4hnLJPpo-PEBD", "category": "03_RECETARIO",
      "title": "2026-03-17_Menu_El-Convent.Al_Trapo",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2026-03-17_Menu_El-Convent.Al_Trapo.pdf",
      "media": { "pdf": "1SCq2m6r91PDWPZRezFJ4hnLJPpo-PEBD", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBOVA1X8pYL_cHwkEHuNqWMoPFdl3w8iyEHDtBN-CSS5E2WlZKKSJQwO8KlwCn506g9kRM8Bd_HlVMjokPkRNJjdsKa-vRZ-otuCC95R=s1024" }
    },
    {
      "id": "local-rec-2010_01_Paco_Morales_Stratford_Chefs_School_Canada", "driveId": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "category": "03_RECETARIO",
      "title": "2010-01_Paco-Morales_Stratford-Chefs-School_Canada",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Recetario", "03_RECETARIO"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO/2010-01_Paco-Morales_Stratford-Chefs-School_Canada.pdf",
      "media": { "pdf": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "thumbnail": "https://lh3.googleusercontent.com/drive-storage/AJQWtBPWMI-Z5SQxUviLTtsQ26ddYELczkhLSuLUEQ6in-RGZC4R6nsiq1V-LQetUMg1kZxhR20dLJ56J1g5XLvW7k44oq8mC4_MuMdQSog=s1024" }
    }
  ]
};
