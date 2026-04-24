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
          "driveId": "1nv3iaDi-AGf1AgQFuvHGnjfspR7D4fU7",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1nv3iaDi-AGf1AgQFuvHGnjfspR7D4fU7&sz=w1000",
                "pdf": "1nv3iaDi-AGf1AgQFuvHGnjfspR7D4fU7"
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
          "driveId": "19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq&sz=w1000",
                "pdf": "19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq"
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
          "driveId": "19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq",
          "media": {
                "driveFileId": "19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq",
                "thumbnail": "https://drive.google.com/thumbnail?id=19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq&sz=w1000",
                "pdf": "19NrwfI4ZTf5Cw6NJR2xiOGTNJOXmNpuq"
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
          "driveId": "1ULUtHgHblS3xWUX8X9SWDx_L_JgY6s2s",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1ULUtHgHblS3xWUX8X9SWDx_L_JgY6s2s&sz=w1000",
                "pdf": "1ULUtHgHblS3xWUX8X9SWDx_L_JgY6s2s"
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
          "driveId": "1Cnd5MsKYl8757hOCJiyMQHMlrCOBcynW",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1Cnd5MsKYl8757hOCJiyMQHMlrCOBcynW&sz=w1000",
                "pdf": "1Cnd5MsKYl8757hOCJiyMQHMlrCOBcynW"
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
          "driveId": "17YrIFsXnYMblvLNDURp_h9iABt7vY6yv",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=17YrIFsXnYMblvLNDURp_h9iABt7vY6yv&sz=w1000",
                "pdf": "17YrIFsXnYMblvLNDURp_h9iABt7vY6yv"
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
          "driveId": "17YrIFsXnYMblvLNDURp_h9iABt7vY6yv",
          "media": {
                "driveFileId": "17YrIFsXnYMblvLNDURp_h9iABt7vY6yv",
                "thumbnail": "https://drive.google.com/thumbnail?id=17YrIFsXnYMblvLNDURp_h9iABt7vY6yv&sz=w1000",
                "pdf": "17YrIFsXnYMblvLNDURp_h9iABt7vY6yv"
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
          "driveId": "1w-Rw4yu_hK2vbefVRQXrXfpo8To8iDs4",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1w-Rw4yu_hK2vbefVRQXrXfpo8To8iDs4&sz=w1000",
                "pdf": "1w-Rw4yu_hK2vbefVRQXrXfpo8To8iDs4"
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
          "driveId": "1v8J0gK2c39AyhICu_-dzd0YH2Rt0gFMq",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1v8J0gK2c39AyhICu_-dzd0YH2Rt0gFMq&sz=w1000",
                "pdf": "1v8J0gK2c39AyhICu_-dzd0YH2Rt0gFMq"
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
          "driveId": "1r_an4B3rbm_O923g3h4RLZyWVXfPjhZO",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1r_an4B3rbm_O923g3h4RLZyWVXfPjhZO&sz=w1000",
                "pdf": "1r_an4B3rbm_O923g3h4RLZyWVXfPjhZO"
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
          "driveId": "1Fv_ekWfAgUrpMgLVTYJwO03VttF4jk4R",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1Fv_ekWfAgUrpMgLVTYJwO03VttF4jk4R&sz=w1000",
                "pdf": "1Fv_ekWfAgUrpMgLVTYJwO03VttF4jk4R"
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
          "driveId": "1_ZO5DTmZ9MvT1mZwNkL5hgCnD9DBJfoT",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1_ZO5DTmZ9MvT1mZwNkL5hgCnD9DBJfoT&sz=w1000",
                "pdf": "1_ZO5DTmZ9MvT1mZwNkL5hgCnD9DBJfoT"
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
          "driveId": "1kkf0EUf0QMJ-k9oTGn9G-mgTDrvhGvoS",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1kkf0EUf0QMJ-k9oTGn9G-mgTDrvhGvoS&sz=w1000",
                "pdf": "1kkf0EUf0QMJ-k9oTGn9G-mgTDrvhGvoS"
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
          "driveId": "1gsBwFPpQ1CMDrYdAlbJMb48PQVGYv_MO",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1gsBwFPpQ1CMDrYdAlbJMb48PQVGYv_MO&sz=w1000",
                "pdf": "1gsBwFPpQ1CMDrYdAlbJMb48PQVGYv_MO"
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
          "driveId": "1PFHMAXgFENrbckDgSwS3gCYYMt2OtK1x",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1PFHMAXgFENrbckDgSwS3gCYYMt2OtK1x&sz=w1000",
                "pdf": "1PFHMAXgFENrbckDgSwS3gCYYMt2OtK1x"
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
          "driveId": "1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx&sz=w1000",
                "pdf": "1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx"
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
          "driveId": "1p0XaUJeZVKY9ocVNbp0TWXKQanTupZKn",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1p0XaUJeZVKY9ocVNbp0TWXKQanTupZKn&sz=w1000",
                "pdf": "1p0XaUJeZVKY9ocVNbp0TWXKQanTupZKn"
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
          "driveId": "16lWeGEP_TVD7NEoevJucnOYirywrXLCD",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=16lWeGEP_TVD7NEoevJucnOYirywrXLCD&sz=w1000",
                "pdf": "16lWeGEP_TVD7NEoevJucnOYirywrXLCD"
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
          "driveId": "1dQXL0wlPraBOJpXaZzC2vCLdvZB5CBfP",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1dQXL0wlPraBOJpXaZzC2vCLdvZB5CBfP&sz=w1000",
                "pdf": "1dQXL0wlPraBOJpXaZzC2vCLdvZB5CBfP"
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
          "driveId": "1__aLYJyXPelO4xF8junDNpBWbT8N-2W-",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1__aLYJyXPelO4xF8junDNpBWbT8N-2W-&sz=w1000",
                "pdf": "1__aLYJyXPelO4xF8junDNpBWbT8N-2W-"
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
          "driveId": "1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx",
          "media": {
                "driveFileId": "1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx",
                "thumbnail": "https://drive.google.com/thumbnail?id=1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx&sz=w1000",
                "pdf": "1c33Jz1Ya0jL8YaEDax6VSyHX_p6cRDCx"
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
          "driveId": "1nt7tSE3_vpSblXJoGRZnKoOeFFGhj370",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1nt7tSE3_vpSblXJoGRZnKoOeFFGhj370&sz=w1000",
                "pdf": "1nt7tSE3_vpSblXJoGRZnKoOeFFGhj370"
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
          "driveId": "1ktLHeP2HF9O03Bb8bRZsCDuwYOzdAE-4",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1ktLHeP2HF9O03Bb8bRZsCDuwYOzdAE-4&sz=w1000",
                "pdf": "1ktLHeP2HF9O03Bb8bRZsCDuwYOzdAE-4"
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
          "driveId": "1UOQCs2ajNJMlOFh46-lqumwUzjaIPVNF",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1UOQCs2ajNJMlOFh46-lqumwUzjaIPVNF&sz=w1000",
                "pdf": "1UOQCs2ajNJMlOFh46-lqumwUzjaIPVNF"
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
          "driveId": "18qy3CJNcfj4OSfeIwp4IjyY3b_-bMhXH",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=18qy3CJNcfj4OSfeIwp4IjyY3b_-bMhXH&sz=w1000",
                "pdf": "18qy3CJNcfj4OSfeIwp4IjyY3b_-bMhXH"
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
          "driveId": "16AVIGFYlSELwh0HK-mbW-HQ84T-CGXLa",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=16AVIGFYlSELwh0HK-mbW-HQ84T-CGXLa&sz=w1000",
                "pdf": "16AVIGFYlSELwh0HK-mbW-HQ84T-CGXLa"
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
          "driveId": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr&sz=w1000",
                "pdf": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr"
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
          "driveId": "1JW8mn2o35sI4DaPQOM_rFqAunPw9aq7Q",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1JW8mn2o35sI4DaPQOM_rFqAunPw9aq7Q&sz=w1000",
                "pdf": "1JW8mn2o35sI4DaPQOM_rFqAunPw9aq7Q"
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
          "driveId": "1oqHuswInOoIPcl6c4PamhUSmmoNXTSaf",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1oqHuswInOoIPcl6c4PamhUSmmoNXTSaf&sz=w1000",
                "pdf": "1oqHuswInOoIPcl6c4PamhUSmmoNXTSaf"
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
          "driveId": "1sq-NpgfpGfxReapg5UMgMUx5JJMcmEXX",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1sq-NpgfpGfxReapg5UMgMUx5JJMcmEXX&sz=w1000",
                "pdf": "1sq-NpgfpGfxReapg5UMgMUx5JJMcmEXX"
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
          "driveId": "1MQVfyqjE9WlzsKn5Q-9bh4CY6mqzfLhv",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1MQVfyqjE9WlzsKn5Q-9bh4CY6mqzfLhv&sz=w1000",
                "pdf": "1MQVfyqjE9WlzsKn5Q-9bh4CY6mqzfLhv"
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
          "driveId": "1NP6cvSC5JfXa48fNzDSOer0IgFt2Tvtn",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1NP6cvSC5JfXa48fNzDSOer0IgFt2Tvtn&sz=w1000",
                "pdf": "1NP6cvSC5JfXa48fNzDSOer0IgFt2Tvtn"
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
          "driveId": "1N-OuEOlTzghRrANBRBshsZ0m9mreoT5g",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1N-OuEOlTzghRrANBRBshsZ0m9mreoT5g&sz=w1000",
                "pdf": "1N-OuEOlTzghRrANBRBshsZ0m9mreoT5g"
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
          "driveId": "19EoMcKWeBaf1kcTsvbWDRjAm8mv2jrLe",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=19EoMcKWeBaf1kcTsvbWDRjAm8mv2jrLe&sz=w1000",
                "pdf": "19EoMcKWeBaf1kcTsvbWDRjAm8mv2jrLe"
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
          "driveId": "1HeSdTH9P9OxWpwoVvvd6QIgFu2UfBO9A",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1HeSdTH9P9OxWpwoVvvd6QIgFu2UfBO9A&sz=w1000",
                "pdf": "1HeSdTH9P9OxWpwoVvvd6QIgFu2UfBO9A"
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
          "driveId": "1_gf0Ssig4L1oUwRjznnH1824Mg3HCC4h",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1_gf0Ssig4L1oUwRjznnH1824Mg3HCC4h&sz=w1000",
                "pdf": "1_gf0Ssig4L1oUwRjznnH1824Mg3HCC4h"
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
          "driveId": "1qHH5Egea_6j3nZ6hgH1CZymnPHMrAhQV",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1qHH5Egea_6j3nZ6hgH1CZymnPHMrAhQV&sz=w1000",
                "pdf": "1qHH5Egea_6j3nZ6hgH1CZymnPHMrAhQV"
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
          "driveId": "1u6VzMkkpfc3aguTBDKAMspRLxylFN-SI",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1u6VzMkkpfc3aguTBDKAMspRLxylFN-SI&sz=w1000",
                "pdf": "1u6VzMkkpfc3aguTBDKAMspRLxylFN-SI"
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
          "driveId": "15hKSobMnMHf17EL9sO2vaackcJAwb-BJ",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=15hKSobMnMHf17EL9sO2vaackcJAwb-BJ&sz=w1000",
                "pdf": "15hKSobMnMHf17EL9sO2vaackcJAwb-BJ"
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
          "driveId": "1VZRw2ldfgmiJDXsZgualRNn3HxuT5dn0",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1VZRw2ldfgmiJDXsZgualRNn3HxuT5dn0&sz=w1000",
                "pdf": "1VZRw2ldfgmiJDXsZgualRNn3HxuT5dn0"
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
          "driveId": "1b9QQzelTT_IOVBNTxMs_1CX7cpIG9-cu",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1b9QQzelTT_IOVBNTxMs_1CX7cpIG9-cu&sz=w1000",
                "pdf": "1b9QQzelTT_IOVBNTxMs_1CX7cpIG9-cu"
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
          "driveId": "1bQBshJ8o2uABBVPNH-cwT8VqcjC-vZ0y",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1bQBshJ8o2uABBVPNH-cwT8VqcjC-vZ0y&sz=w1000",
                "pdf": "1bQBshJ8o2uABBVPNH-cwT8VqcjC-vZ0y"
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
          "driveId": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr",
          "media": {
                "driveFileId": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr",
                "thumbnail": "https://drive.google.com/thumbnail?id=1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr&sz=w1000",
                "pdf": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr"
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
          "driveId": "1wCFW3ySIuOdwu7gcPn6NvOZdDpEZTlOR",
          "media": {
                "driveFileId": "1wCFW3ySIuOdwu7gcPn6NvOZdDpEZTlOR",
                "thumbnail": "https://drive.google.com/thumbnail?id=1wCFW3ySIuOdwu7gcPn6NvOZdDpEZTlOR&sz=w1000",
                "pdf": "1wCFW3ySIuOdwu7gcPn6NvOZdDpEZTlOR"
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
          "driveId": "18E63iSYLpFXcNgvwkh8bOi93wLk9TPzs",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=18E63iSYLpFXcNgvwkh8bOi93wLk9TPzs&sz=w1000",
                "pdf": "18E63iSYLpFXcNgvwkh8bOi93wLk9TPzs"
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
          "driveId": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr&sz=w1000",
                "pdf": "1RVAUTqgpSqhJLE79iCmVJBp4fpGMCsZr"
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
          "driveId": "1eRo6KEGQgkseqLPl4jkhs2qKan1g1LDV",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1eRo6KEGQgkseqLPl4jkhs2qKan1g1LDV&sz=w1000",
                "pdf": "1eRo6KEGQgkseqLPl4jkhs2qKan1g1LDV"
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
          "driveId": "1DnVAPw1M8pDMBvZ3m0ePXf7MuBY0cy0t",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1DnVAPw1M8pDMBvZ3m0ePXf7MuBY0cy0t&sz=w1000",
                "pdf": "1DnVAPw1M8pDMBvZ3m0ePXf7MuBY0cy0t"
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
          "driveId": "1H4uJcB-lrjNn6otDdQTnJnT0lhU_Og5o",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1H4uJcB-lrjNn6otDdQTnJnT0lhU_Og5o&sz=w1000",
                "pdf": "1H4uJcB-lrjNn6otDdQTnJnT0lhU_Og5o"
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
          "driveId": "1LeUyoHIHA75kubZniA9e5UypaESGgU14",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1LeUyoHIHA75kubZniA9e5UypaESGgU14&sz=w1000",
                "pdf": "1LeUyoHIHA75kubZniA9e5UypaESGgU14"
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
          "driveId": "1su__rMifUX1PGwMAYX5EmI6g5Pn3YAqL",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1su__rMifUX1PGwMAYX5EmI6g5Pn3YAqL&sz=w1000",
                "pdf": "1su__rMifUX1PGwMAYX5EmI6g5Pn3YAqL"
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
          "driveId": "18CAczn7zW29nQaHL53ouAhbrneIXsZxk",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=18CAczn7zW29nQaHL53ouAhbrneIXsZxk&sz=w1000",
                "pdf": "18CAczn7zW29nQaHL53ouAhbrneIXsZxk"
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
          "driveId": "19EoMcKWeBaf1kcTsvbWDRjAm8mv2jrLe",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=19EoMcKWeBaf1kcTsvbWDRjAm8mv2jrLe&sz=w1000",
                "pdf": "19EoMcKWeBaf1kcTsvbWDRjAm8mv2jrLe"
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
          "driveId": "1B9MDPQFztoQorbSS069EMfxFDt951CPt",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1B9MDPQFztoQorbSS069EMfxFDt951CPt&sz=w1000",
                "pdf": "1B9MDPQFztoQorbSS069EMfxFDt951CPt"
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
          "driveId": "1XQrRJiss6jqm0l2tFVlk7K5CKsAZFyQp",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1XQrRJiss6jqm0l2tFVlk7K5CKsAZFyQp&sz=w1000",
                "pdf": "1XQrRJiss6jqm0l2tFVlk7K5CKsAZFyQp"
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
          "driveId": "1KE-4NejgT_lFohaPlZY6cAC3JhZcyAxj",
          "media": {
                "thumbnail": "https://drive.google.com/thumbnail?id=1KE-4NejgT_lFohaPlZY6cAC3JhZcyAxj&sz=w1000",
                "pdf": "1KE-4NejgT_lFohaPlZY6cAC3JhZcyAxj"
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
      "media": { "driveFileId": "1WCTpTYpya0_p2qN1oirSEBKvQA8o3Lab", "pdf": "1WCTpTYpya0_p2qN1oirSEBKvQA8o3Lab", "thumbnail": "https://drive.google.com/thumbnail?id=1WCTpTYpya0_p2qN1oirSEBKvQA8o3Lab&sz=w1000" }
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
      "media": { "driveFileId": "1uy8r9hbYnAhZsoFmuj627rFiOqBq__j1", "pdf": "1uy8r9hbYnAhZsoFmuj627rFiOqBq__j1", "thumbnail": "https://drive.google.com/thumbnail?id=1uy8r9hbYnAhZsoFmuj627rFiOqBq__j1&sz=w1000" }
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
      "media": { "driveFileId": "1RZDWypDQd3g6z5oB-wctVuGZ03dXXMpY", "pdf": "1RZDWypDQd3g6z5oB-wctVuGZ03dXXMpY", "thumbnail": "https://drive.google.com/thumbnail?id=1RZDWypDQd3g6z5oB-wctVuGZ03dXXMpY&sz=w1000" }
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
      "media": { "driveFileId": "1Kjrxt6LTyWvraVrrJj-LWC71Sld4drrt", "pdf": "1Kjrxt6LTyWvraVrrJj-LWC71Sld4drrt", "thumbnail": "https://drive.google.com/thumbnail?id=1Kjrxt6LTyWvraVrrJj-LWC71Sld4drrt&sz=w1000" }
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
      "media": { "driveFileId": "1IJAFnXRId8vWArpPr7mpVtLRR8Qh3OWB", "pdf": "1IJAFnXRId8vWArpPr7mpVtLRR8Qh3OWB", "thumbnail": "https://drive.google.com/thumbnail?id=1IJAFnXRId8vWArpPr7mpVtLRR8Qh3OWB&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1O8eTos0Bm4puIFvkpJ5NPjdu2ZylLIjw", "pdf": "1O8eTos0Bm4puIFvkpJ5NPjdu2ZylLIjw", "thumbnail": "https://drive.google.com/thumbnail?id=1O8eTos0Bm4puIFvkpJ5NPjdu2ZylLIjw&sz=w1000" }
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
      "media": { "driveFileId": "1gvNR2hB188wdLrj3VbYvTfkng2qSVrUD", "pdf": "1gvNR2hB188wdLrj3VbYvTfkng2qSVrUD", "thumbnail": "https://drive.google.com/thumbnail?id=1gvNR2hB188wdLrj3VbYvTfkng2qSVrUD&sz=w1000" }
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
      "media": { "driveFileId": "1pdKHhsEm46JlzV2rtDlKW0BgOIxVzvmH", "pdf": "1pdKHhsEm46JlzV2rtDlKW0BgOIxVzvmH", "thumbnail": "https://drive.google.com/thumbnail?id=1pdKHhsEm46JlzV2rtDlKW0BgOIxVzvmH&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "14d4NqIJFXFJZfvJPSS7ja9eASIWSFOmz", "pdf": "14d4NqIJFXFJZfvJPSS7ja9eASIWSFOmz", "thumbnail": "https://drive.google.com/thumbnail?id=14d4NqIJFXFJZfvJPSS7ja9eASIWSFOmz&sz=w1000" }
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
      "media": { "driveFileId": "1UxlMo03v_tG0Lxn-QtLXYEWWb8n2iURs", "pdf": "1UxlMo03v_tG0Lxn-QtLXYEWWb8n2iURs", "thumbnail": "https://drive.google.com/thumbnail?id=1UxlMo03v_tG0Lxn-QtLXYEWWb8n2iURs&sz=w1000" }
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
      "media": { "driveFileId": "1-3N0MbDVxO4VMiqH9YVWzzTXttivL70d", "pdf": "1-3N0MbDVxO4VMiqH9YVWzzTXttivL70d", "thumbnail": "https://drive.google.com/thumbnail?id=1-3N0MbDVxO4VMiqH9YVWzzTXttivL70d&sz=w1000" }
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
      "media": { "driveFileId": "1_2a6iO4ear609GKmTzJztQ0zZ7-d_OZs", "pdf": "1_2a6iO4ear609GKmTzJztQ0zZ7-d_OZs", "thumbnail": "https://drive.google.com/thumbnail?id=1_2a6iO4ear609GKmTzJztQ0zZ7-d_OZs&sz=w1000" }
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
      "media": { "driveFileId": "1083XTXtrhGD8ex16gCp0EAQ2_81jJxbk", "pdf": "1083XTXtrhGD8ex16gCp0EAQ2_81jJxbk", "thumbnail": "https://drive.google.com/thumbnail?id=1083XTXtrhGD8ex16gCp0EAQ2_81jJxbk&sz=w1000" }
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
      "media": { "driveFileId": "1d-AOU8GA6jpKAE02a6nCmeBFBbjNm6pu", "pdf": "1d-AOU8GA6jpKAE02a6nCmeBFBbjNm6pu", "thumbnail": "https://drive.google.com/thumbnail?id=1d-AOU8GA6jpKAE02a6nCmeBFBbjNm6pu&sz=w1000" }
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
      "media": { "driveFileId": "1aXyvvcdZ2dJ5E3BUBrap-ZAibgzC1vYn", "pdf": "1aXyvvcdZ2dJ5E3BUBrap-ZAibgzC1vYn", "thumbnail": "https://drive.google.com/thumbnail?id=1aXyvvcdZ2dJ5E3BUBrap-ZAibgzC1vYn&sz=w1000" }
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
      "media": { "driveFileId": "1wxJIiQL1rQa-sk1c4FZQTGts6WDT_bL2", "pdf": "1wxJIiQL1rQa-sk1c4FZQTGts6WDT_bL2", "thumbnail": "https://drive.google.com/thumbnail?id=1wxJIiQL1rQa-sk1c4FZQTGts6WDT_bL2&sz=w1000" }
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
      "media": { "driveFileId": "1SAYM-BC-ImEsiapah8Cx4B31ZU7JLFq8", "pdf": "1SAYM-BC-ImEsiapah8Cx4B31ZU7JLFq8", "thumbnail": "https://drive.google.com/thumbnail?id=1SAYM-BC-ImEsiapah8Cx4B31ZU7JLFq8&sz=w1000" }
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
      "media": { "driveFileId": "1grSvHktxELiDN5xdJgCg6yRNh3piAay7", "pdf": "1grSvHktxELiDN5xdJgCg6yRNh3piAay7", "thumbnail": "https://drive.google.com/thumbnail?id=1grSvHktxELiDN5xdJgCg6yRNh3piAay7&sz=w1000" }
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
      "media": { "driveFileId": "1UlZqvt3fw499qleiz4H8QBJFK89HIHMZ", "pdf": "1UlZqvt3fw499qleiz4H8QBJFK89HIHMZ", "thumbnail": "https://drive.google.com/thumbnail?id=1UlZqvt3fw499qleiz4H8QBJFK89HIHMZ&sz=w1000" }
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
      "media": { "driveFileId": "1lZQJVsi0QEIqkEzeY0oeEq6NiDC-mi28", "pdf": "1lZQJVsi0QEIqkEzeY0oeEq6NiDC-mi28", "thumbnail": "https://drive.google.com/thumbnail?id=1lZQJVsi0QEIqkEzeY0oeEq6NiDC-mi28&sz=w1000" }
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
      "media": { "driveFileId": "1C8KLTPPuoGaOXvmVy3DqDgte4Kap2EcM", "pdf": "1C8KLTPPuoGaOXvmVy3DqDgte4Kap2EcM", "thumbnail": "https://drive.google.com/thumbnail?id=1C8KLTPPuoGaOXvmVy3DqDgte4Kap2EcM&sz=w1000" }
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
      "media": { "driveFileId": "10nPm_LTOH2nWXjhTg-fQIhpJB5nncsfP", "pdf": "10nPm_LTOH2nWXjhTg-fQIhpJB5nncsfP", "thumbnail": "https://drive.google.com/thumbnail?id=10nPm_LTOH2nWXjhTg-fQIhpJB5nncsfP&sz=w1000" }
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
      "media": { "driveFileId": "13WeFW6qrhFzDlqJ5NCeOWEyVJTaEvs9-", "pdf": "13WeFW6qrhFzDlqJ5NCeOWEyVJTaEvs9-", "thumbnail": "https://drive.google.com/thumbnail?id=13WeFW6qrhFzDlqJ5NCeOWEyVJTaEvs9-&sz=w1000" }
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
      "media": { "driveFileId": "1X5A0VZt8C-_sGqBHwnb8d5zxOn_4K0bF", "pdf": "1X5A0VZt8C-_sGqBHwnb8d5zxOn_4K0bF", "thumbnail": "https://drive.google.com/thumbnail?id=1X5A0VZt8C-_sGqBHwnb8d5zxOn_4K0bF&sz=w1000" }
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
      "media": { "driveFileId": "1XSFLW4zZj37FPMst38g6ngP7lUyldMbC", "pdf": "1XSFLW4zZj37FPMst38g6ngP7lUyldMbC", "thumbnail": "https://drive.google.com/thumbnail?id=1XSFLW4zZj37FPMst38g6ngP7lUyldMbC&sz=w1000" }
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
      "media": { "driveFileId": "1GM-uvF8sKX9Naz00uYcHFu8xg-mHeIry", "pdf": "1GM-uvF8sKX9Naz00uYcHFu8xg-mHeIry", "thumbnail": "https://drive.google.com/thumbnail?id=1GM-uvF8sKX9Naz00uYcHFu8xg-mHeIry&sz=w1000" }
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
      "media": { "driveFileId": "1U19-koFgZNDbA__rpSyZpUAp_4IP8b9N", "pdf": "1U19-koFgZNDbA__rpSyZpUAp_4IP8b9N", "thumbnail": "https://drive.google.com/thumbnail?id=1U19-koFgZNDbA__rpSyZpUAp_4IP8b9N&sz=w1000" }
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
      "media": { "driveFileId": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "pdf": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "thumbnail": "https://drive.google.com/thumbnail?id=1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz&sz=w1000" }
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
      "media": { "driveFileId": "1sEf0iLixpdd--wC3LprdfF8SXLYpnKSr", "pdf": "1sEf0iLixpdd--wC3LprdfF8SXLYpnKSr", "thumbnail": "https://drive.google.com/thumbnail?id=1sEf0iLixpdd--wC3LprdfF8SXLYpnKSr&sz=w1000" }
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
      "media": { "driveFileId": "1O4bt1joKi6rq_Oi5cx0UNhJwm4Qjqtzb", "pdf": "1O4bt1joKi6rq_Oi5cx0UNhJwm4Qjqtzb", "thumbnail": "https://drive.google.com/thumbnail?id=1O4bt1joKi6rq_Oi5cx0UNhJwm4Qjqtzb&sz=w1000" }
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
      "media": { "driveFileId": "1akGsvtRtEyNdE963puPWu3g1JJiCttBo", "pdf": "1akGsvtRtEyNdE963puPWu3g1JJiCttBo", "thumbnail": "https://drive.google.com/thumbnail?id=1akGsvtRtEyNdE963puPWu3g1JJiCttBo&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1dE2jTZTIWJd5j1m95utH5yHCDg2uxf4O", "pdf": "1dE2jTZTIWJd5j1m95utH5yHCDg2uxf4O", "thumbnail": "https://drive.google.com/thumbnail?id=1dE2jTZTIWJd5j1m95utH5yHCDg2uxf4O&sz=w1000" }
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
      "media": { "driveFileId": "1vfgnqEdLUfPdbnV2-CTPcOSH-1vavaZq", "pdf": "1vfgnqEdLUfPdbnV2-CTPcOSH-1vavaZq", "thumbnail": "https://drive.google.com/thumbnail?id=1vfgnqEdLUfPdbnV2-CTPcOSH-1vavaZq&sz=w1000" }
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
      "media": { "driveFileId": "1WM8D9OwjxwX7rqvLBqWkGRuW9XngOE_R", "pdf": "1WM8D9OwjxwX7rqvLBqWkGRuW9XngOE_R", "thumbnail": "https://drive.google.com/thumbnail?id=1WM8D9OwjxwX7rqvLBqWkGRuW9XngOE_R&sz=w1000" }
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
      "media": { "driveFileId": "1dPDwYVjH6HmfoqJCiGlbRQ6p-BUXaMb2", "pdf": "1dPDwYVjH6HmfoqJCiGlbRQ6p-BUXaMb2", "thumbnail": "https://drive.google.com/thumbnail?id=1dPDwYVjH6HmfoqJCiGlbRQ6p-BUXaMb2&sz=w1000" }
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
      "media": { "driveFileId": "1_GnEd9fgWpiJIw2n8CB1AOG7XnTIO07P", "pdf": "1_GnEd9fgWpiJIw2n8CB1AOG7XnTIO07P", "thumbnail": "https://drive.google.com/thumbnail?id=1_GnEd9fgWpiJIw2n8CB1AOG7XnTIO07P&sz=w1000" }
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
      "media": { "driveFileId": "1m747WQFzD6s5ujyl2WsukmrjNLkRoVLA", "pdf": "1m747WQFzD6s5ujyl2WsukmrjNLkRoVLA", "thumbnail": "https://drive.google.com/thumbnail?id=1m747WQFzD6s5ujyl2WsukmrjNLkRoVLA&sz=w1000" }
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
      "media": { "driveFileId": "1sATfyazQkfQlNtFPBsHYFrbGTHEXb0zh", "pdf": "1sATfyazQkfQlNtFPBsHYFrbGTHEXb0zh", "thumbnail": "https://drive.google.com/thumbnail?id=1sATfyazQkfQlNtFPBsHYFrbGTHEXb0zh&sz=w1000" }
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
      "media": { "driveFileId": "1AbM02uDUz9vhzkULdRwirKZhT2DVOyAp", "pdf": "1AbM02uDUz9vhzkULdRwirKZhT2DVOyAp", "thumbnail": "https://drive.google.com/thumbnail?id=1AbM02uDUz9vhzkULdRwirKZhT2DVOyAp&sz=w1000" }
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
      "media": { "driveFileId": "1At0QrXoOEwhA5yY9RfecCj_3wuVqlW4K", "pdf": "1At0QrXoOEwhA5yY9RfecCj_3wuVqlW4K", "thumbnail": "https://drive.google.com/thumbnail?id=1At0QrXoOEwhA5yY9RfecCj_3wuVqlW4K&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1o015YhSe74y_1aPQFw6gEF7uOshATG9S", "pdf": "1o015YhSe74y_1aPQFw6gEF7uOshATG9S", "thumbnail": "https://drive.google.com/thumbnail?id=1o015YhSe74y_1aPQFw6gEF7uOshATG9S&sz=w1000" }
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
      "media": { "driveFileId": "1nBqt-Uy9JwSkEyzSXkX7O5asI_6DXSa9", "pdf": "1nBqt-Uy9JwSkEyzSXkX7O5asI_6DXSa9", "thumbnail": "https://drive.google.com/thumbnail?id=1nBqt-Uy9JwSkEyzSXkX7O5asI_6DXSa9&sz=w1000" }
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
      "media": { "driveFileId": "1hc-pMBPuj-LsLsFM7ss0xg_0aes_MBQN", "pdf": "1hc-pMBPuj-LsLsFM7ss0xg_0aes_MBQN", "thumbnail": "https://drive.google.com/thumbnail?id=1hc-pMBPuj-LsLsFM7ss0xg_0aes_MBQN&sz=w1000" }
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
      "media": { "driveFileId": "1Ko_uXKnmvp_xMedLzI0eQ_eFApiT9p_Y", "pdf": "1Ko_uXKnmvp_xMedLzI0eQ_eFApiT9p_Y", "thumbnail": "https://drive.google.com/thumbnail?id=1Ko_uXKnmvp_xMedLzI0eQ_eFApiT9p_Y&sz=w1000" }
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
      "media": { "driveFileId": "1Q5-6wOqPEG5GT18wFyZ5jIwAddR8ih_z", "pdf": "1Q5-6wOqPEG5GT18wFyZ5jIwAddR8ih_z", "thumbnail": "https://drive.google.com/thumbnail?id=1Q5-6wOqPEG5GT18wFyZ5jIwAddR8ih_z&sz=w1000" }
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
      "media": { "driveFileId": "1FjDJaFOZ43N0PMB4B7SShcZ6nuPV2WDa", "pdf": "1FjDJaFOZ43N0PMB4B7SShcZ6nuPV2WDa", "thumbnail": "https://drive.google.com/thumbnail?id=1FjDJaFOZ43N0PMB4B7SShcZ6nuPV2WDa&sz=w1000" }
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
      "media": { "driveFileId": "1R7jJn8_PVDo3_vnD17F3kXvqw3OBpUH1", "pdf": "1R7jJn8_PVDo3_vnD17F3kXvqw3OBpUH1", "thumbnail": "https://drive.google.com/thumbnail?id=1R7jJn8_PVDo3_vnD17F3kXvqw3OBpUH1&sz=w1000" }
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
      "media": { "driveFileId": "1Ju3vVoeDq6Hzcl5hmtY2Vo6nRPRnLtZC", "pdf": "1Ju3vVoeDq6Hzcl5hmtY2Vo6nRPRnLtZC", "thumbnail": "https://drive.google.com/thumbnail?id=1Ju3vVoeDq6Hzcl5hmtY2Vo6nRPRnLtZC&sz=w1000" }
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
      "media": { "driveFileId": "1qNop5Bco4wjYcVE3XKNLDIzmiPw6DMwi", "pdf": "1qNop5Bco4wjYcVE3XKNLDIzmiPw6DMwi", "thumbnail": "https://drive.google.com/thumbnail?id=1qNop5Bco4wjYcVE3XKNLDIzmiPw6DMwi&sz=w1000" }
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
      "media": { "driveFileId": "1JJHJMSC0zUP9Mxyd4gWlEDfMpn1rj8yT", "pdf": "1JJHJMSC0zUP9Mxyd4gWlEDfMpn1rj8yT", "thumbnail": "https://drive.google.com/thumbnail?id=1JJHJMSC0zUP9Mxyd4gWlEDfMpn1rj8yT&sz=w1000" }
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
      "media": { "driveFileId": "1WrWjHDh_J8YtPN7mgptL6iU107gCp7Em", "pdf": "1WrWjHDh_J8YtPN7mgptL6iU107gCp7Em", "thumbnail": "https://drive.google.com/thumbnail?id=1WrWjHDh_J8YtPN7mgptL6iU107gCp7Em&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1U2Q-8ysVaZAMXbf1fpXtphUsvXmnnaXp", "pdf": "1U2Q-8ysVaZAMXbf1fpXtphUsvXmnnaXp", "thumbnail": "https://drive.google.com/thumbnail?id=1U2Q-8ysVaZAMXbf1fpXtphUsvXmnnaXp&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1OkYiJiXgwZrL_1tAkWvbBmZPfBt9HnCo", "pdf": "1OkYiJiXgwZrL_1tAkWvbBmZPfBt9HnCo", "thumbnail": "https://drive.google.com/thumbnail?id=1OkYiJiXgwZrL_1tAkWvbBmZPfBt9HnCo&sz=w1000" }
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
      "media": { "driveFileId": "1Vfs_oGMoC1MX4epIICCOUM8um1A8TYpa", "pdf": "1Vfs_oGMoC1MX4epIICCOUM8um1A8TYpa", "thumbnail": "https://drive.google.com/thumbnail?id=1Vfs_oGMoC1MX4epIICCOUM8um1A8TYpa&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "19qNLbYvL0r_xwEgWjzMPqwlYvtqKzPWo", "pdf": "19qNLbYvL0r_xwEgWjzMPqwlYvtqKzPWo", "thumbnail": "https://drive.google.com/thumbnail?id=19qNLbYvL0r_xwEgWjzMPqwlYvtqKzPWo&sz=w1000" }
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
      "media": { "driveFileId": "1lhOo5wRUQugrXJ5lPkTFiBKeVA_jFgYP", "pdf": "1lhOo5wRUQugrXJ5lPkTFiBKeVA_jFgYP", "thumbnail": "https://drive.google.com/thumbnail?id=1lhOo5wRUQugrXJ5lPkTFiBKeVA_jFgYP&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1dRa-50FMr7nCT_lv3XOgXj8vByfez1c2", "pdf": "1dRa-50FMr7nCT_lv3XOgXj8vByfez1c2", "thumbnail": "https://drive.google.com/thumbnail?id=1dRa-50FMr7nCT_lv3XOgXj8vByfez1c2&sz=w1000" }
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
      "media": { "driveFileId": "1Hqc-aOfa7b1dATyyy-vg714yjXIEITAp", "pdf": "1Hqc-aOfa7b1dATyyy-vg714yjXIEITAp", "thumbnail": "https://drive.google.com/thumbnail?id=1Hqc-aOfa7b1dATyyy-vg714yjXIEITAp&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1QO0ocy2j0TsJbFBviN2ATTtcqOPUfJsQ", "pdf": "1QO0ocy2j0TsJbFBviN2ATTtcqOPUfJsQ", "thumbnail": "https://drive.google.com/thumbnail?id=1QO0ocy2j0TsJbFBviN2ATTtcqOPUfJsQ&sz=w1000" }
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
      "media": { "driveFileId": "19l6H3GCYeBRmapcOS8qZZc4gx7zitoFN", "pdf": "19l6H3GCYeBRmapcOS8qZZc4gx7zitoFN", "thumbnail": "https://drive.google.com/thumbnail?id=19l6H3GCYeBRmapcOS8qZZc4gx7zitoFN&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1UekxzxlJG8oFw2NO44xZnfySky9IC_gB", "pdf": "1UekxzxlJG8oFw2NO44xZnfySky9IC_gB", "thumbnail": "https://drive.google.com/thumbnail?id=1UekxzxlJG8oFw2NO44xZnfySky9IC_gB&sz=w1000" }
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
      "media": { "driveFileId": "1U8xr51X7pBxWIyrtFCxVCJmlDGFX9zaW", "pdf": "1U8xr51X7pBxWIyrtFCxVCJmlDGFX9zaW", "thumbnail": "https://drive.google.com/thumbnail?id=1U8xr51X7pBxWIyrtFCxVCJmlDGFX9zaW&sz=w1000" }
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
      "media": { "driveFileId": "1KiKNb4WGd1YwojFLscxXzgRgd4Aj9aLJ", "pdf": "1KiKNb4WGd1YwojFLscxXzgRgd4Aj9aLJ", "thumbnail": "https://drive.google.com/thumbnail?id=1KiKNb4WGd1YwojFLscxXzgRgd4Aj9aLJ&sz=w1000" }
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
      "media": { "driveFileId": "1CFbVX25XKIp8nEDAGONm1SfYiJ6Yd1XX", "pdf": "1CFbVX25XKIp8nEDAGONm1SfYiJ6Yd1XX", "thumbnail": "https://drive.google.com/thumbnail?id=1CFbVX25XKIp8nEDAGONm1SfYiJ6Yd1XX&sz=w1000" }
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
      "media": { "driveFileId": "1xeHfFnJCg0EU2DWFxI6AXxsZbM34X4vZ", "pdf": "1xeHfFnJCg0EU2DWFxI6AXxsZbM34X4vZ", "thumbnail": "https://drive.google.com/thumbnail?id=1xeHfFnJCg0EU2DWFxI6AXxsZbM34X4vZ&sz=w1000" }
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
      "media": { "driveFileId": "1FsE0FJOZwKZ9Mi1yasHDlvFsgbWlgt6O", "pdf": "1FsE0FJOZwKZ9Mi1yasHDlvFsgbWlgt6O", "thumbnail": "https://drive.google.com/thumbnail?id=1FsE0FJOZwKZ9Mi1yasHDlvFsgbWlgt6O&sz=w1000" }
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
      "media": { "driveFileId": "1ulW0Dt5Mo4ys7ToFlN54NvxI4LhAjnMr", "pdf": "1ulW0Dt5Mo4ys7ToFlN54NvxI4LhAjnMr", "thumbnail": "https://drive.google.com/thumbnail?id=1ulW0Dt5Mo4ys7ToFlN54NvxI4LhAjnMr&sz=w1000" }
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
      "media": { "driveFileId": "1MxAFN0OAx7iSiphB-a6m-743ypGLRL1B", "pdf": "1MxAFN0OAx7iSiphB-a6m-743ypGLRL1B", "thumbnail": "https://drive.google.com/thumbnail?id=1MxAFN0OAx7iSiphB-a6m-743ypGLRL1B&sz=w1000" }
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
      "media": { "driveFileId": "1RU53gT1U4qapiMaeAGfYHQCjOeLFf5nB", "pdf": "1RU53gT1U4qapiMaeAGfYHQCjOeLFf5nB", "thumbnail": "https://drive.google.com/thumbnail?id=1RU53gT1U4qapiMaeAGfYHQCjOeLFf5nB&sz=w1000" }
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
      "media": { "driveFileId": "1BY4i0uiHd6DA-ONzAjrazbg_GXHwzq48", "pdf": "1BY4i0uiHd6DA-ONzAjrazbg_GXHwzq48", "thumbnail": "https://drive.google.com/thumbnail?id=1BY4i0uiHd6DA-ONzAjrazbg_GXHwzq48&sz=w1000" }
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
      "media": { "driveFileId": "1JdKkNwwmT6cHv6IpfmqPsItjip-cwQHq", "pdf": "1JdKkNwwmT6cHv6IpfmqPsItjip-cwQHq", "thumbnail": "https://drive.google.com/thumbnail?id=1JdKkNwwmT6cHv6IpfmqPsItjip-cwQHq&sz=w1000" }
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
      "media": { "driveFileId": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "pdf": "1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz", "thumbnail": "https://drive.google.com/thumbnail?id=1HkU5i8nVfOaiWzvef0QR0U7p5-5qXtCz&sz=w1000" }
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
      "media": { "driveFileId": "1FALBPnXsvYbudMkrdcX4rgKIQK_pOX2D", "pdf": "1FALBPnXsvYbudMkrdcX4rgKIQK_pOX2D", "thumbnail": "https://drive.google.com/thumbnail?id=1FALBPnXsvYbudMkrdcX4rgKIQK_pOX2D&sz=w1000" }
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
      "media": { "driveFileId": "17XRYOJvWNKRXmu8S8tsTwKHbisbVgKBh", "pdf": "17XRYOJvWNKRXmu8S8tsTwKHbisbVgKBh", "thumbnail": "https://drive.google.com/thumbnail?id=17XRYOJvWNKRXmu8S8tsTwKHbisbVgKBh&sz=w1000" }
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
      "media": { "driveFileId": "1_LPApF333YP4RwPw8OqRYmb4QU6d9kW8", "pdf": "1_LPApF333YP4RwPw8OqRYmb4QU6d9kW8", "thumbnail": "https://drive.google.com/thumbnail?id=1_LPApF333YP4RwPw8OqRYmb4QU6d9kW8&sz=w1000" }
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
      "media": { "driveFileId": "1lG0dGCxHxzRKtkaQyI4cikf-vgInEljv", "pdf": "1lG0dGCxHxzRKtkaQyI4cikf-vgInEljv", "thumbnail": "https://drive.google.com/thumbnail?id=1lG0dGCxHxzRKtkaQyI4cikf-vgInEljv&sz=w1000" }
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
      "media": { "driveFileId": "14aPMiGSdcklp6eIr3Pz-uYgWy9B8cXho", "pdf": "14aPMiGSdcklp6eIr3Pz-uYgWy9B8cXho", "thumbnail": "https://drive.google.com/thumbnail?id=14aPMiGSdcklp6eIr3Pz-uYgWy9B8cXho&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1uWpktL6SqP_SIzbCKJqpHQsvQ1GJiUY3", "pdf": "1uWpktL6SqP_SIzbCKJqpHQsvQ1GJiUY3", "thumbnail": "https://drive.google.com/thumbnail?id=1uWpktL6SqP_SIzbCKJqpHQsvQ1GJiUY3&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1txdagN75dY9ozmGVqHxBZ_YphXqp7dtW", "pdf": "1txdagN75dY9ozmGVqHxBZ_YphXqp7dtW", "thumbnail": "https://drive.google.com/thumbnail?id=1txdagN75dY9ozmGVqHxBZ_YphXqp7dtW&sz=w1000" }
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
      "media": { "driveFileId": "1MP0BDhVWASiVWt0NaAHWjh1NuifPDN_m", "pdf": "1MP0BDhVWASiVWt0NaAHWjh1NuifPDN_m", "thumbnail": "https://drive.google.com/thumbnail?id=1MP0BDhVWASiVWt0NaAHWjh1NuifPDN_m&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1tIyYK0xdNZPzKXH7lsI715tL-VBZgDpQ", "pdf": "1tIyYK0xdNZPzKXH7lsI715tL-VBZgDpQ", "thumbnail": "https://drive.google.com/thumbnail?id=1tIyYK0xdNZPzKXH7lsI715tL-VBZgDpQ&sz=w1000" }
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
      "media": { "driveFileId": "1nE43lYQmLlvDcQjCsqLSPy_i8iQmwW1U", "pdf": "1nE43lYQmLlvDcQjCsqLSPy_i8iQmwW1U", "thumbnail": "https://drive.google.com/thumbnail?id=1nE43lYQmLlvDcQjCsqLSPy_i8iQmwW1U&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "150tkYjk8FWnq97WaL145osU3Hkaxch5n", "pdf": "150tkYjk8FWnq97WaL145osU3Hkaxch5n", "thumbnail": "https://drive.google.com/thumbnail?id=150tkYjk8FWnq97WaL145osU3Hkaxch5n&sz=w1000" }
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
      "media": { "driveFileId": "1ezucqyg_x-_zE3yOFg6cfeJkFkZIwj2D", "pdf": "1ezucqyg_x-_zE3yOFg6cfeJkFkZIwj2D", "thumbnail": "https://drive.google.com/thumbnail?id=1ezucqyg_x-_zE3yOFg6cfeJkFkZIwj2D&sz=w1000" }
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
      "media": { "driveFileId": "1FEOkTpLmOTR-rlJMSdMyfOXJ_GtS9lPk", "pdf": "1FEOkTpLmOTR-rlJMSdMyfOXJ_GtS9lPk", "thumbnail": "https://drive.google.com/thumbnail?id=1FEOkTpLmOTR-rlJMSdMyfOXJ_GtS9lPk&sz=w1000" }
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
      "media": { "driveFileId": "1mMvBStVPNfeqW5uPMhLglRY_Xjyg3vkZ", "pdf": "1mMvBStVPNfeqW5uPMhLglRY_Xjyg3vkZ", "thumbnail": "https://drive.google.com/thumbnail?id=1mMvBStVPNfeqW5uPMhLglRY_Xjyg3vkZ&sz=w1000" }
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
      "media": { "driveFileId": "1Ok13xjt4BXqTXBpD8q4JK2_3osxbz7iE", "pdf": "1Ok13xjt4BXqTXBpD8q4JK2_3osxbz7iE", "thumbnail": "https://drive.google.com/thumbnail?id=1Ok13xjt4BXqTXBpD8q4JK2_3osxbz7iE&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1FH3L9q_uy2IHolzlFHHiEUrEc_BnxSld", "pdf": "1FH3L9q_uy2IHolzlFHHiEUrEc_BnxSld", "thumbnail": "https://drive.google.com/thumbnail?id=1FH3L9q_uy2IHolzlFHHiEUrEc_BnxSld&sz=w1000" }
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
      "media": { "driveFileId": "1eiLewzs6kwhNgIWoRoejIhL3yDFpgaxD", "pdf": "1eiLewzs6kwhNgIWoRoejIhL3yDFpgaxD", "thumbnail": "https://drive.google.com/thumbnail?id=1eiLewzs6kwhNgIWoRoejIhL3yDFpgaxD&sz=w1000" }
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
      "media": { "driveFileId": "1GsvRIOwBxFg6Ur1duXkvlqiuLJdgODsn", "pdf": "1GsvRIOwBxFg6Ur1duXkvlqiuLJdgODsn", "thumbnail": "https://drive.google.com/thumbnail?id=1GsvRIOwBxFg6Ur1duXkvlqiuLJdgODsn&sz=w1000" }
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
      "media": { "driveFileId": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "pdf": "11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_", "thumbnail": "https://drive.google.com/thumbnail?id=11uBVcYMrYFboIwiuZQQEAFyj6zGkIOz_&sz=w1000" }
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
      "media": { "driveFileId": "1FMUQlo9VT-hDVfWV51cvRjCAmcu411NN", "pdf": "1FMUQlo9VT-hDVfWV51cvRjCAmcu411NN", "thumbnail": "https://drive.google.com/thumbnail?id=1FMUQlo9VT-hDVfWV51cvRjCAmcu411NN&sz=w1000" }
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
      "media": { "driveFileId": "1QbGmo7SN7vAlDvqnVJY1GCFZ2WS89XrJ", "pdf": "1QbGmo7SN7vAlDvqnVJY1GCFZ2WS89XrJ", "thumbnail": "https://drive.google.com/thumbnail?id=1QbGmo7SN7vAlDvqnVJY1GCFZ2WS89XrJ&sz=w1000" }
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
      "media": { "driveFileId": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "thumbnail": "https://drive.google.com/thumbnail?id=1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29&sz=w1000" }
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
      "media": { "driveFileId": "1OKp7A2ZwfGBj2oGNFSW3ebhk0_uzW4QK", "pdf": "1OKp7A2ZwfGBj2oGNFSW3ebhk0_uzW4QK", "thumbnail": "https://drive.google.com/thumbnail?id=1OKp7A2ZwfGBj2oGNFSW3ebhk0_uzW4QK&sz=w1000" }
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
      "media": { "driveFileId": "17KQtBp_jIpxqtAQpLRYIEPWzLHlGRkAI", "pdf": "17KQtBp_jIpxqtAQpLRYIEPWzLHlGRkAI", "thumbnail": "https://drive.google.com/thumbnail?id=17KQtBp_jIpxqtAQpLRYIEPWzLHlGRkAI&sz=w1000" }
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
      "media": { "driveFileId": "1v6Um3toQ5kmt1S0xPsltu2I0Y8F2BEVf", "pdf": "1v6Um3toQ5kmt1S0xPsltu2I0Y8F2BEVf", "thumbnail": "https://drive.google.com/thumbnail?id=1v6Um3toQ5kmt1S0xPsltu2I0Y8F2BEVf&sz=w1000" }
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
      "media": { "driveFileId": "1lQN1iwkUyzI6D2slJi5qAfI50IUS6TS7", "pdf": "1lQN1iwkUyzI6D2slJi5qAfI50IUS6TS7", "thumbnail": "https://drive.google.com/thumbnail?id=1lQN1iwkUyzI6D2slJi5qAfI50IUS6TS7&sz=w1000" }
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
      "media": { "driveFileId": "1hBsyXnNdkG6YIcC1Sx7SF7_N_8I6vZf1", "pdf": "1hBsyXnNdkG6YIcC1Sx7SF7_N_8I6vZf1", "thumbnail": "https://drive.google.com/thumbnail?id=1hBsyXnNdkG6YIcC1Sx7SF7_N_8I6vZf1&sz=w1000" }
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
      "media": { "driveFileId": "16ZtpAHihjaRiraeflHhFop6q3mDLLEOl", "pdf": "16ZtpAHihjaRiraeflHhFop6q3mDLLEOl", "thumbnail": "https://drive.google.com/thumbnail?id=16ZtpAHihjaRiraeflHhFop6q3mDLLEOl&sz=w1000" }
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
      "media": { "driveFileId": "1AZw4wTTEHzhR92r7fadZ2MT1r83jq6fy", "pdf": "1AZw4wTTEHzhR92r7fadZ2MT1r83jq6fy", "thumbnail": "https://drive.google.com/thumbnail?id=1AZw4wTTEHzhR92r7fadZ2MT1r83jq6fy&sz=w1000" }
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
      "media": { "driveFileId": "1O9i9UNCENIv49z9iBCH0vtHOli50OBjS", "pdf": "1O9i9UNCENIv49z9iBCH0vtHOli50OBjS", "thumbnail": "https://drive.google.com/thumbnail?id=1O9i9UNCENIv49z9iBCH0vtHOli50OBjS&sz=w1000" }
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
      "media": { "driveFileId": "1zUdwe_vTwXW7HtzKWRlmoCcQB4x3Fw17", "pdf": "1zUdwe_vTwXW7HtzKWRlmoCcQB4x3Fw17", "thumbnail": "https://drive.google.com/thumbnail?id=1zUdwe_vTwXW7HtzKWRlmoCcQB4x3Fw17&sz=w1000" }
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
      "media": { "driveFileId": "14kaNDaTg8N_OY2YPpCkn8ET-Qn8ilde_", "pdf": "14kaNDaTg8N_OY2YPpCkn8ET-Qn8ilde_", "thumbnail": "https://drive.google.com/thumbnail?id=14kaNDaTg8N_OY2YPpCkn8ET-Qn8ilde_&sz=w1000" }
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
      "media": { "driveFileId": "1gQTPRLILjm4wXIypStTdc8UrIdgPze20", "pdf": "1gQTPRLILjm4wXIypStTdc8UrIdgPze20", "thumbnail": "https://drive.google.com/thumbnail?id=1gQTPRLILjm4wXIypStTdc8UrIdgPze20&sz=w1000" }
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
      "media": { "driveFileId": "1lo08F-22ajw3yX2PxsWAAn-c2WG_ZTHh", "pdf": "1lo08F-22ajw3yX2PxsWAAn-c2WG_ZTHh", "thumbnail": "https://drive.google.com/thumbnail?id=1lo08F-22ajw3yX2PxsWAAn-c2WG_ZTHh&sz=w1000" }
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
      "media": { "driveFileId": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "thumbnail": "https://drive.google.com/thumbnail?id=1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29&sz=w1000" }
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
      "media": { "driveFileId": "1VAv2SrdW4TULsRKKgysYkoBiReqKbYeM", "pdf": "1VAv2SrdW4TULsRKKgysYkoBiReqKbYeM", "thumbnail": "https://drive.google.com/thumbnail?id=1VAv2SrdW4TULsRKKgysYkoBiReqKbYeM&sz=w1000" }
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
      "media": { "driveFileId": "1SCq2m6r91PDWPZRezFJ4hnLJPpo-PEBD", "pdf": "1SCq2m6r91PDWPZRezFJ4hnLJPpo-PEBD", "thumbnail": "https://drive.google.com/thumbnail?id=1SCq2m6r91PDWPZRezFJ4hnLJPpo-PEBD&sz=w1000" }
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
      "media": { "driveFileId": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "pdf": "1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29", "thumbnail": "https://drive.google.com/thumbnail?id=1pNbTAxwjTXgRba2rJ80PgL-Zry6ErJ29&sz=w1000" }
    }
  ]
};
