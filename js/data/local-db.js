/**
 * NOOR ARCHIVE — LOCAL INGESTION BRIDGE (V3)
 * Soporte para Revistas, Libros y Periódicos.
 */

window.NoorLocalDB = {
  active: true,
  lastUpdate: new Date().toISOString(),
  sections: [
    { id: 'sec-03', label: '03_RECETARIO',     path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/03_RECETARIO' },
    { id: 'sec-01', label: '01_REVISTAS',      path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/01_REVISTAS' },
    { id: 'sec-02', label: '02_LIBROS',        path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/02_LIBROS' },
    { id: 'sec-04', label: '04_CONTENIDO_WEB', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/04_CONTENIDO_WEB (Artículos y Blogs)' },
    { id: 'sec-05', label: '05_PERIODICOS',    path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS' },
    { id: 'sec-06', label: '06_PRODUCTO_CONTEXTUALIZACION', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION' },
    { id: 'sec-07', label: '07_CD_VID_Digital', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital' },
    { id: 'sec-08', label: '08_Producto_Recetarios',  path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios' },
    { id: 'sec-09', label: '09_Tarjetero', path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/09_Tarjetero' },
    { id: 'sec-10', label: '10_Artículos_Imagen',  path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen' },
    { id: 'sec-11', label: '11_Sin clasificar',    path: 'G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar' }
  ],
  documents: [
    // --- 01_REVISTAS ---
    {
      id: 'local-rev-2008-01',
      category: "01_REVISTAS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
      category: "02_LIBROS",
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
    },

    // ─── 04_CONTENIDO_WEB ──────────────────────────────────────────────────────
    {
      "id": "local-art-2007-cronicas-web",
      "driveId": "1KwJkT714M37rXg3OsFeK211tFhJiNiAw",
      "category": "04_CONTENIDO_WEB",
      "title": "Noticias Web — Crónicas",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Artículo", "Blog", "Noticias", "Paco Morales", "04_CONTENIDO_WEB"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/04_CONTENIDO_WEB (Artículos y Blogs)/2007 8_NOT_Noticias_Web_Crónicas.pdf",
      "description": "Crónicas y noticias web sobre Paco Morales. Año 2007.",
      "media": { "driveFileId": "1KwJkT714M37rXg3OsFeK211tFhJiNiAw", "pdf": "1KwJkT714M37rXg3OsFeK211tFhJiNiAw", "thumbnail": "https://drive.google.com/thumbnail?id=1KwJkT714M37rXg3OsFeK211tFhJiNiAw&sz=w1000" }
    },
    {
      "id": "local-art-2007-blog-los3cerditos",
      "driveId": "103_o6hXzPXHKfFTIYqE6CIyQOvmsYLAf",
      "category": "04_CONTENIDO_WEB",
      "title": "Blog Los 3 Cerditos",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Artículo", "Blog", "Los 3 Cerditos", "Paco Morales", "04_CONTENIDO_WEB"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/04_CONTENIDO_WEB (Artículos y Blogs)/2007_NOT_Noticia_Blog_Los3cerditos.pdf",
      "description": "Noticia en blog Los 3 Cerditos sobre Paco Morales. Año 2007.",
      "media": { "driveFileId": "103_o6hXzPXHKfFTIYqE6CIyQOvmsYLAf", "pdf": "103_o6hXzPXHKfFTIYqE6CIyQOvmsYLAf", "thumbnail": "https://drive.google.com/thumbnail?id=103_o6hXzPXHKfFTIYqE6CIyQOvmsYLAf&sz=w1000" }
    },
    {
      "id": "local-art-2010-blog-larazon",
      "driveId": "14-nKCPsCftgmeDBsZmO04DfeQfTnUgaL",
      "category": "04_CONTENIDO_WEB",
      "title": "Noticia Blog — La Razón",
      "year": 2010,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Artículo", "Blog", "La Razón", "Paco Morales", "04_CONTENIDO_WEB"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/04_CONTENIDO_WEB (Artículos y Blogs)/2010_08_03_NOT_Noticia_Blog_LaRazon.pdf",
      "description": "Noticia publicada en blog La Razón sobre Paco Morales. Agosto 2010.",
      "media": { "driveFileId": "14-nKCPsCftgmeDBsZmO04DfeQfTnUgaL", "pdf": "14-nKCPsCftgmeDBsZmO04DfeQfTnUgaL", "thumbnail": "https://drive.google.com/thumbnail?id=14-nKCPsCftgmeDBsZmO04DfeQfTnUgaL&sz=w1000" }
    },
    {
      "id": "local-art-2012-blog-laverdad",
      "driveId": "1ZclBk3o_Y7Qic6hxRrbI-R7HR_neN7SD",
      "category": "04_CONTENIDO_WEB",
      "title": "Blog La Verdad",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Artículo", "Blog", "La Verdad", "Paco Morales", "04_CONTENIDO_WEB"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/04_CONTENIDO_WEB (Artículos y Blogs)/2012_10_03_NOT_LaVerdad_Blog_.pdf",
      "description": "Noticia publicada en el blog La Verdad sobre Paco Morales. Octubre 2012.",
      "media": { "driveFileId": "1ZclBk3o_Y7Qic6hxRrbI-R7HR_neN7SD", "pdf": "1ZclBk3o_Y7Qic6hxRrbI-R7HR_neN7SD", "thumbnail": "https://drive.google.com/thumbnail?id=1ZclBk3o_Y7Qic6hxRrbI-R7HR_neN7SD&sz=w1000" }
    },
    {
      "id": "local-art-2012-palacete-laseda",
      "driveId": "13vuTSGtcXr4jRZdSzCt3OlVa9LvVjw2e",
      "category": "04_CONTENIDO_WEB",
      "title": "Palacete La Seda — Murcia.com",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Artículo", "Noticia Web", "Murcia", "Palacete La Seda", "Paco Morales", "04_CONTENIDO_WEB"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/04_CONTENIDO_WEB (Artículos y Blogs)/2012_NOT_Noticia_PacoMorales_PalaceteLaSeda_Murcia.com.pdf.pdf",
      "description": "Noticia en Murcia.com sobre Paco Morales en el Palacete La Seda. 2012.",
      "media": { "driveFileId": "13vuTSGtcXr4jRZdSzCt3OlVa9LvVjw2e", "pdf": "13vuTSGtcXr4jRZdSzCt3OlVa9LvVjw2e", "thumbnail": "https://drive.google.com/thumbnail?id=13vuTSGtcXr4jRZdSzCt3OlVa9LvVjw2e&sz=w1000" }
    },
    // --- 05_PERIODICOS ---
    {
      "id": "local-per-01_05_2007_20_12_PER_Dosier_Prensa_18_Pa",
      "driveId": "1Q1YruLZXIn5amdSxi3CN4ZN0qH-81W5O",
      "category": "05_PERIODICOS",
      "title": "01_05_2007-20-12_PER_Dosier_Prensa_18_Paco-Morales-Francisco",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/01_05_2007-20-12_PER_Dosier_Prensa_18_Paco-Morales-Francisco.pdf",
      "media": { "driveFileId": "1Q1YruLZXIn5amdSxi3CN4ZN0qH-81W5O", "pdf": "1Q1YruLZXIn5amdSxi3CN4ZN0qH-81W5O", "thumbnail": "https://drive.google.com/thumbnail?id=1Q1YruLZXIn5amdSxi3CN4ZN0qH-81W5O&sz=w1000" }
    },
    {
      "id": "local-per-05_2006_03_06_PER_20minutos_C_rdoba_18_P",
      "driveId": "1Z2rWmumyQ5odaLCrC6yf60Yr8xJk8Zlm",
      "category": "05_PERIODICOS",
      "title": "05_2006-03-06_PER_20minutos-Córdoba_18_Paco-Morales-Francisco",
      "year": 2006,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2006-03-06_PER_20minutos-Córdoba_18_Paco-Morales-Francisco.pdf",
      "media": { "driveFileId": "1Z2rWmumyQ5odaLCrC6yf60Yr8xJk8Zlm", "pdf": "1Z2rWmumyQ5odaLCrC6yf60Yr8xJk8Zlm", "thumbnail": "https://drive.google.com/thumbnail?id=1Z2rWmumyQ5odaLCrC6yf60Yr8xJk8Zlm&sz=w1000" }
    },
    {
      "id": "local-per-05_2007_10_22_PER_01_La_Razon_85_Paco_Mo",
      "driveId": "13wlflb1YX5XmNS19jomC6Pwl2KbY3jCu",
      "category": "05_PERIODICOS",
      "title": "05_2007-10-22_PER_01_La_Razon_85_Paco-Morales",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2007-10-22_PER_01_La_Razon_85_Paco-Morales.pdf",
      "media": { "driveFileId": "13wlflb1YX5XmNS19jomC6Pwl2KbY3jCu", "pdf": "13wlflb1YX5XmNS19jomC6Pwl2KbY3jCu", "thumbnail": "https://drive.google.com/thumbnail?id=13wlflb1YX5XmNS19jomC6Pwl2KbY3jCu&sz=w1000" }
    },
    {
      "id": "local-per-05_2007_11_24_PER_01_En_Libertad_Paco_Mo",
      "driveId": "1NpY7R8pf72zYXqlvG4OTj62MikncJIe_",
      "category": "05_PERIODICOS",
      "title": "05_2007-11-24_PER_01_En_Libertad_Paco-Morales",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2007-11-24_PER_01_En_Libertad_Paco-Morales.pdf",
      "media": { "driveFileId": "1NpY7R8pf72zYXqlvG4OTj62MikncJIe_", "pdf": "1NpY7R8pf72zYXqlvG4OTj62MikncJIe_", "thumbnail": "https://drive.google.com/thumbnail?id=1NpY7R8pf72zYXqlvG4OTj62MikncJIe_&sz=w1000" }
    },
    {
      "id": "local-per-05_2007_12_22_PER_01_ElPais_11_Hotel_Hos",
      "driveId": "1CV9317OajMMmEa96GuCz6BOmtsbRr6T4",
      "category": "05_PERIODICOS",
      "title": "05_2007-12-22_PER_01_ElPais_11_Hotel_Hospes_",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2007-12-22_PER_01_ElPais_11_Hotel_Hospes_.pdf",
      "media": { "driveFileId": "1CV9317OajMMmEa96GuCz6BOmtsbRr6T4", "pdf": "1CV9317OajMMmEa96GuCz6BOmtsbRr6T4", "thumbnail": "https://drive.google.com/thumbnail?id=1CV9317OajMMmEa96GuCz6BOmtsbRr6T4&sz=w1000" }
    },
    {
      "id": "local-per-05_2007__PER_Gastronom_a_73_Senzone_Paco",
      "driveId": "1Pr86gRM9mQC7a8UpL6owrE-ozAZf3XEY",
      "category": "05_PERIODICOS",
      "title": "05_2007-_PER_Gastronomía_73_Senzone_Paco-Morales_",
      "year": 2007,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2007-_PER_Gastronomía_73_Senzone_Paco-Morales_.pdf",
      "media": { "driveFileId": "1Pr86gRM9mQC7a8UpL6owrE-ozAZf3XEY", "pdf": "1Pr86gRM9mQC7a8UpL6owrE-ozAZf3XEY", "thumbnail": "https://drive.google.com/thumbnail?id=1Pr86gRM9mQC7a8UpL6owrE-ozAZf3XEY&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_02_19_PER_01_ElMundo_16_Senzone",
      "driveId": "1nOm8KXZt-m6wWNx8tsX2I_um3D984dIM",
      "category": "05_PERIODICOS",
      "title": "05_2008-02-19_PER_01_ElMundo_16_Senzone_Paco-Morales",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008-02-19_PER_01_ElMundo_16_Senzone_Paco-Morales.pdf",
      "media": { "driveFileId": "1nOm8KXZt-m6wWNx8tsX2I_um3D984dIM", "pdf": "1nOm8KXZt-m6wWNx8tsX2I_um3D984dIM", "thumbnail": "https://drive.google.com/thumbnail?id=1nOm8KXZt-m6wWNx8tsX2I_um3D984dIM&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_06_13_PER_01_ElPais_113_Paco_Mor",
      "driveId": "1uAv6MOY1EJx3dz1p_26ZDVYkILWoxlqu",
      "category": "05_PERIODICOS",
      "title": "05_2008-06-13_PER_01_ElPais_113_Paco-Morales",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008-06-13_PER_01_ElPais_113_Paco-Morales.pdf",
      "media": { "driveFileId": "1uAv6MOY1EJx3dz1p_26ZDVYkILWoxlqu", "pdf": "1uAv6MOY1EJx3dz1p_26ZDVYkILWoxlqu", "thumbnail": "https://drive.google.com/thumbnail?id=1uAv6MOY1EJx3dz1p_26ZDVYkILWoxlqu&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_07_19_PER_01_La_Libertad_11_Hote",
      "driveId": "1EKRxYRFkpQS2p7NRvSW9eRtEfxg2cxMM",
      "category": "05_PERIODICOS",
      "title": "05_2008-07-19_PER_01_La_Libertad_11_Hotel_Hospes_Paco-Morales",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008-07-19_PER_01_La_Libertad_11_Hotel_Hospes_Paco-Morales.pdf",
      "media": { "driveFileId": "1EKRxYRFkpQS2p7NRvSW9eRtEfxg2cxMM", "pdf": "1EKRxYRFkpQS2p7NRvSW9eRtEfxg2cxMM", "thumbnail": "https://drive.google.com/thumbnail?id=1EKRxYRFkpQS2p7NRvSW9eRtEfxg2cxMM&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_10_29_PER_01_ABC_8_Paco_Morales",
      "driveId": "1HhGOxODDC54tfx-O4j3q6YjdlSEyR7wf",
      "category": "05_PERIODICOS",
      "title": "05_2008-10-29_PER_01_ABC_8_Paco-Morales",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008-10-29_PER_01_ABC_8_Paco-Morales.pdf",
      "media": { "driveFileId": "1HhGOxODDC54tfx-O4j3q6YjdlSEyR7wf", "pdf": "1HhGOxODDC54tfx-O4j3q6YjdlSEyR7wf", "thumbnail": "https://drive.google.com/thumbnail?id=1HhGOxODDC54tfx-O4j3q6YjdlSEyR7wf&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_10_30_PER_01_ABC_95_Noor_Paco_Mo",
      "driveId": "1mg4mQfU5ZsdBdkPwzet7Tw7_rH45ORx_",
      "category": "05_PERIODICOS",
      "title": "05_2008-10-30_PER_01_ABC_95_Noor_Paco-Morales",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008-10-30_PER_01_ABC_95_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1mg4mQfU5ZsdBdkPwzet7Tw7_rH45ORx_", "pdf": "1mg4mQfU5ZsdBdkPwzet7Tw7_rH45ORx_", "thumbnail": "https://drive.google.com/thumbnail?id=1mg4mQfU5ZsdBdkPwzet7Tw7_rH45ORx_&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_10_30_PER_01_ABC_Senzone_63_Noor",
      "driveId": "1j_BjES6VjqLgY3V6IIOd2axnccZ2NGpN",
      "category": "05_PERIODICOS",
      "title": "05_2008-10-30_PER_01_ABC_Senzone_63_Noor_Paco-Morales_pdf.",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008-10-30_PER_01_ABC_Senzone_63_Noor_Paco-Morales_pdf..pdf",
      "media": { "driveFileId": "1j_BjES6VjqLgY3V6IIOd2axnccZ2NGpN", "pdf": "1j_BjES6VjqLgY3V6IIOd2axnccZ2NGpN", "thumbnail": "https://drive.google.com/thumbnail?id=1j_BjES6VjqLgY3V6IIOd2axnccZ2NGpN&sz=w1000" }
    },
    {
      "id": "local-per-05_2008_PER_Recorte_Senzone_Hotel_Hospes",
      "driveId": "13yNfY5tn1NYm5QDautzGed67Q-CxFD5t",
      "category": "05_PERIODICOS",
      "title": "05_2008_PER_Recorte-Senzone_Hotel_Hospes_Francisco_Morales",
      "year": 2008,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2008_PER_Recorte-Senzone_Hotel_Hospes_Francisco_Morales.pdf",
      "media": { "driveFileId": "13yNfY5tn1NYm5QDautzGed67Q-CxFD5t", "pdf": "13yNfY5tn1NYm5QDautzGed67Q-CxFD5t", "thumbnail": "https://drive.google.com/thumbnail?id=13yNfY5tn1NYm5QDautzGed67Q-CxFD5t&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_01_10_PER_01_ElPa_s_7_Senzone_Pa",
      "driveId": "1GSs9BGIsS_xsncxaURW_biUVpGXpeOCO",
      "category": "05_PERIODICOS",
      "title": "05_2009-01-10_PER_01_ElPaís_7_Senzone_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-01-10_PER_01_ElPaís_7_Senzone_Paco-Morales.pdf",
      "media": { "driveFileId": "1GSs9BGIsS_xsncxaURW_biUVpGXpeOCO", "pdf": "1GSs9BGIsS_xsncxaURW_biUVpGXpeOCO", "thumbnail": "https://drive.google.com/thumbnail?id=1GSs9BGIsS_xsncxaURW_biUVpGXpeOCO&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_01_20_PER_01_Madrid_2_Paco_Moral",
      "driveId": "18tasjsAy3c8sDMfnapjgzhkYmUzpypeU",
      "category": "05_PERIODICOS",
      "title": "05_2009-01-20_PER_01_Madrid_2_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-01-20_PER_01_Madrid_2_Paco-Morales.pdf",
      "media": { "driveFileId": "18tasjsAy3c8sDMfnapjgzhkYmUzpypeU", "pdf": "18tasjsAy3c8sDMfnapjgzhkYmUzpypeU", "thumbnail": "https://drive.google.com/thumbnail?id=18tasjsAy3c8sDMfnapjgzhkYmUzpypeU&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_01_20_PER_elMundo_La_Raz_n_Vivir",
      "driveId": "1teYdybghhHqGxXkBNKdqXOtqdFGbOnvQ",
      "category": "05_PERIODICOS",
      "title": "05_2009-01-20_PER_elMundo-La_Razón_Vivireldía_63_Noor_Paco-Morales_Madrid_Fusión",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-01-20_PER_elMundo-La_Razón_Vivireldía_63_Noor_Paco-Morales_Madrid_Fusión.pdf",
      "media": { "driveFileId": "1teYdybghhHqGxXkBNKdqXOtqdFGbOnvQ", "pdf": "1teYdybghhHqGxXkBNKdqXOtqdFGbOnvQ", "thumbnail": "https://drive.google.com/thumbnail?id=1teYdybghhHqGxXkBNKdqXOtqdFGbOnvQ&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_03_14_PER_elPeriodic_dOntinyent",
      "driveId": "1AEwzlIjqDUCNbCq5VgiVwk1oyT3J673a",
      "category": "05_PERIODICOS",
      "title": "05_2009-03-14_PER_elPeriodic_dOntinyent_28_Paco-Morales_Senzone",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-03-14_PER_elPeriodic_dOntinyent_28_Paco-Morales_Senzone.pdf",
      "media": { "driveFileId": "1AEwzlIjqDUCNbCq5VgiVwk1oyT3J673a", "pdf": "1AEwzlIjqDUCNbCq5VgiVwk1oyT3J673a", "thumbnail": "https://drive.google.com/thumbnail?id=1AEwzlIjqDUCNbCq5VgiVwk1oyT3J673a&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_03_20_PER_01_El_Peri_dico_de_Vil",
      "driveId": "1HU7eObeENiPjel4i0f83Y8W6kreMZY-a",
      "category": "05_PERIODICOS",
      "title": "05_2009-03-20_PER_01_El_Periódico_de_Vilena_7_Hotel_Ferrero_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-03-20_PER_01_El_Periódico_de_Vilena_7_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1HU7eObeENiPjel4i0f83Y8W6kreMZY-a", "pdf": "1HU7eObeENiPjel4i0f83Y8W6kreMZY-a", "thumbnail": "https://drive.google.com/thumbnail?id=1HU7eObeENiPjel4i0f83Y8W6kreMZY-a&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_03_27_PER_01_El_Peri_dico_de_Vil",
      "driveId": "1dwk_5S_OxEd9Sz2lPCtNLB5Dl_WEYV-X",
      "category": "05_PERIODICOS",
      "title": "05_2009-03-27_PER_01_El_Periódico_de_Villena_4_Hotel_Ferrero_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-03-27_PER_01_El_Periódico_de_Villena_4_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1dwk_5S_OxEd9Sz2lPCtNLB5Dl_WEYV-X", "pdf": "1dwk_5S_OxEd9Sz2lPCtNLB5Dl_WEYV-X", "thumbnail": "https://drive.google.com/thumbnail?id=1dwk_5S_OxEd9Sz2lPCtNLB5Dl_WEYV-X&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_03_29_PER_01_Ciudad_de_Alcoy_25",
      "driveId": "1eCWZlG6tQyAPNHFQ9b4-7Bp_CLh6p_P9",
      "category": "05_PERIODICOS",
      "title": "05_2009-03-29_PER_01_Ciudad_de_Alcoy_25_Senzone_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-03-29_PER_01_Ciudad_de_Alcoy_25_Senzone_Paco-Morales.pdf",
      "media": { "driveFileId": "1eCWZlG6tQyAPNHFQ9b4-7Bp_CLh6p_P9", "pdf": "1eCWZlG6tQyAPNHFQ9b4-7Bp_CLh6p_P9", "thumbnail": "https://drive.google.com/thumbnail?id=1eCWZlG6tQyAPNHFQ9b4-7Bp_CLh6p_P9&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_06_28_PER_01_Cinco_dias_49_Hotel",
      "driveId": "1j3q8vh4I-t1UOTPAfAiwHa5r6HoUxhXU",
      "category": "05_PERIODICOS",
      "title": "05_2009-06-28_PER_01_Cinco_dias_49_Hotel_Ferrero_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-06-28_PER_01_Cinco_dias_49_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1j3q8vh4I-t1UOTPAfAiwHa5r6HoUxhXU", "pdf": "1j3q8vh4I-t1UOTPAfAiwHa5r6HoUxhXU", "thumbnail": "https://drive.google.com/thumbnail?id=1j3q8vh4I-t1UOTPAfAiwHa5r6HoUxhXU&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_08_02_PER_01_La_Raz_n_73_Paco_Mo",
      "driveId": "1y-GkP3Hp9ceqse_xj6776W52ednBV5Cg",
      "category": "05_PERIODICOS",
      "title": "05_2009-08-02_PER_01_La_Razón_73_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-08-02_PER_01_La_Razón_73_Paco-Morales.pdf",
      "media": { "driveFileId": "1y-GkP3Hp9ceqse_xj6776W52ednBV5Cg", "pdf": "1y-GkP3Hp9ceqse_xj6776W52ednBV5Cg", "thumbnail": "https://drive.google.com/thumbnail?id=1y-GkP3Hp9ceqse_xj6776W52ednBV5Cg&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_09_06_PER_01_El_Pais_14_Hotel_Fe",
      "driveId": "1qeju7SFbV1Xi1ZUVRWO7PwEsx-E-SzaJ",
      "category": "05_PERIODICOS",
      "title": "05_2009-09-06_PER_01_El_Pais_14_Hotel_Ferrero_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-09-06_PER_01_El_Pais_14_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1qeju7SFbV1Xi1ZUVRWO7PwEsx-E-SzaJ", "pdf": "1qeju7SFbV1Xi1ZUVRWO7PwEsx-E-SzaJ", "thumbnail": "https://drive.google.com/thumbnail?id=1qeju7SFbV1Xi1ZUVRWO7PwEsx-E-SzaJ&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_10_03_PER_01_LasProvincias_71_Ho",
      "driveId": "1uM6MTdAhRu6EipjjmZI6r-0er7KhWD5m",
      "category": "05_PERIODICOS",
      "title": "05_2009-10-03_PER_01_LasProvincias_71_Hotel_Ferrero_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009-10-03_PER_01_LasProvincias_71_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1uM6MTdAhRu6EipjjmZI6r-0er7KhWD5m", "pdf": "1uM6MTdAhRu6EipjjmZI6r-0er7KhWD5m", "thumbnail": "https://drive.google.com/thumbnail?id=1uM6MTdAhRu6EipjjmZI6r-0er7KhWD5m&sz=w1000" }
    },
    {
      "id": "local-per-05_2009_PER_01_Metropoli_10_Comer_Paco_M",
      "driveId": "1eqqp8dh4lsIXluTgA8DYffIrPSAEs_5a",
      "category": "05_PERIODICOS",
      "title": "05_2009_PER_01_Metropoli_10_Comer_Paco-Morales",
      "year": 2009,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2009_PER_01_Metropoli_10_Comer_Paco-Morales.pdf",
      "media": { "driveFileId": "1eqqp8dh4lsIXluTgA8DYffIrPSAEs_5a", "pdf": "1eqqp8dh4lsIXluTgA8DYffIrPSAEs_5a", "thumbnail": "https://drive.google.com/thumbnail?id=1eqqp8dh4lsIXluTgA8DYffIrPSAEs_5a&sz=w1000" }
    },
    {
      "id": "local-per-05_2010_03_18_01_PER_01_El_Economista_39",
      "driveId": "1kLxAQ6j9Wl0j-Qo9Xo5LDbnRTJpis9eE",
      "category": "05_PERIODICOS",
      "title": "05_2010-03-18_01_PER_01_El_Economista_39__Hotel_Ferrero_Paco-Morales",
      "year": 2010,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2010-03-18_01_PER_01_El_Economista_39__Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1kLxAQ6j9Wl0j-Qo9Xo5LDbnRTJpis9eE", "pdf": "1kLxAQ6j9Wl0j-Qo9Xo5LDbnRTJpis9eE", "thumbnail": "https://drive.google.com/thumbnail?id=1kLxAQ6j9Wl0j-Qo9Xo5LDbnRTJpis9eE&sz=w1000" }
    },
    {
      "id": "local-per-05_2010_11_27_PER_01_el_Peri_dic_d_Ontin",
      "driveId": "1j8aLaJMUFtXCm_Yi7lZk0t-4V9T0NIiE",
      "category": "05_PERIODICOS",
      "title": "05_2010-11-27_PER_01_el_Periòdic_d,Ontinyent_5_Hotel_Ferrero_Paco-Morales",
      "year": 2010,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2010-11-27_PER_01_el_Periòdic_d,Ontinyent_5_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1j8aLaJMUFtXCm_Yi7lZk0t-4V9T0NIiE", "pdf": "1j8aLaJMUFtXCm_Yi7lZk0t-4V9T0NIiE", "thumbnail": "https://drive.google.com/thumbnail?id=1j8aLaJMUFtXCm_Yi7lZk0t-4V9T0NIiE&sz=w1000" }
    },
    {
      "id": "local-per-05_2010_12_18_PER_01_ElPais_14_Paco_Mora",
      "driveId": "1cIyXxhe7WACOMBg79YgrDKICTilRGxU0",
      "category": "05_PERIODICOS",
      "title": "05_2010-12-18_PER_01_ElPais_14_Paco-Morales",
      "year": 2010,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2010-12-18_PER_01_ElPais_14_Paco-Morales.pdf",
      "media": { "driveFileId": "1cIyXxhe7WACOMBg79YgrDKICTilRGxU0", "pdf": "1cIyXxhe7WACOMBg79YgrDKICTilRGxU0", "thumbnail": "https://drive.google.com/thumbnail?id=1cIyXxhe7WACOMBg79YgrDKICTilRGxU0&sz=w1000" }
    },
    {
      "id": "local-per-05_2011_01_09_PER_Diario_c_rdoba_4_5_Fra",
      "driveId": "13WEmfXnbSyFQW8BoPE8E9cCl-dBWSwCA",
      "category": "05_PERIODICOS",
      "title": "05_2011-01-09_PER_Diario_córdoba_4_5_Francisco-Morales_",
      "year": 2011,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2011-01-09_PER_Diario_córdoba_4_5_Francisco-Morales_.pdf",
      "media": { "driveFileId": "13WEmfXnbSyFQW8BoPE8E9cCl-dBWSwCA", "pdf": "13WEmfXnbSyFQW8BoPE8E9cCl-dBWSwCA", "thumbnail": "https://drive.google.com/thumbnail?id=13WEmfXnbSyFQW8BoPE8E9cCl-dBWSwCA&sz=w1000" }
    },
    {
      "id": "local-per-05_2011_07_17_PER_LaRaz_n_68_Paco_Morale",
      "driveId": "1Ymn8vhOrHCbCvInBR9nVVrd9WIyp3ndh",
      "category": "05_PERIODICOS",
      "title": "05_2011-07-17_PER_LaRazón_68_Paco-Morales_",
      "year": 2011,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2011-07-17_PER_LaRazón_68_Paco-Morales_.pdf",
      "media": { "driveFileId": "1Ymn8vhOrHCbCvInBR9nVVrd9WIyp3ndh", "pdf": "1Ymn8vhOrHCbCvInBR9nVVrd9WIyp3ndh", "thumbnail": "https://drive.google.com/thumbnail?id=1Ymn8vhOrHCbCvInBR9nVVrd9WIyp3ndh&sz=w1000" }
    },
    {
      "id": "local-per-05_2011_08_16_PER_01_Levante_14_Paco_Mor",
      "driveId": "1ikeQSH64-bBUO_VV7a31jL4Kl9YcL7I0",
      "category": "05_PERIODICOS",
      "title": "05_2011-08-16_PER_01_Levante_14_Paco-Morales_Ferrán",
      "year": 2011,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2011-08-16_PER_01_Levante_14_Paco-Morales_Ferrán.pdf",
      "media": { "driveFileId": "1ikeQSH64-bBUO_VV7a31jL4Kl9YcL7I0", "pdf": "1ikeQSH64-bBUO_VV7a31jL4Kl9YcL7I0", "thumbnail": "https://drive.google.com/thumbnail?id=1ikeQSH64-bBUO_VV7a31jL4Kl9YcL7I0&sz=w1000" }
    },
    {
      "id": "local-per-05_2011_08_29_PER_01_Las_Provincias_60_P",
      "driveId": "1WMw6x_UP63RZLnt5Roetv_RH_t1fRH43",
      "category": "05_PERIODICOS",
      "title": "05_2011-08-29_PER_01_Las_Provincias_60_Paco-Morales",
      "year": 2011,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2011-08-29_PER_01_Las_Provincias_60_Paco-Morales.pdf",
      "media": { "driveFileId": "1WMw6x_UP63RZLnt5Roetv_RH_t1fRH43", "pdf": "1WMw6x_UP63RZLnt5Roetv_RH_t1fRH43", "thumbnail": "https://drive.google.com/thumbnail?id=1WMw6x_UP63RZLnt5Roetv_RH_t1fRH43&sz=w1000" }
    },
    {
      "id": "local-per-05_2011_09_02_PER_ElPa_s_de_43_Paco_Mora",
      "driveId": "14JaBkcWIng1PMc67oPfzG-QUIrRvqaMA",
      "category": "05_PERIODICOS",
      "title": "05_2011-09-02_PER_ElPaís_de_43_Paco-Morales_",
      "year": 2011,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2011-09-02_PER_ElPaís_de_43_Paco-Morales_.pdf",
      "media": { "driveFileId": "14JaBkcWIng1PMc67oPfzG-QUIrRvqaMA", "pdf": "14JaBkcWIng1PMc67oPfzG-QUIrRvqaMA", "thumbnail": "https://drive.google.com/thumbnail?id=14JaBkcWIng1PMc67oPfzG-QUIrRvqaMA&sz=w1000" }
    },
    {
      "id": "local-per-05_2012_01_03_PER_ElPa_s_Contraportada_P",
      "driveId": "1JkYZCul8TX2CSr2y0ThleFUQrmtQOHs8",
      "category": "05_PERIODICOS",
      "title": "05_2012-01-03_PER_ElPaís_Contraportada_Paco-Morales_restaurante_móvil",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2012-01-03_PER_ElPaís_Contraportada_Paco-Morales_restaurante_móvil.pdf",
      "media": { "driveFileId": "1JkYZCul8TX2CSr2y0ThleFUQrmtQOHs8", "pdf": "1JkYZCul8TX2CSr2y0ThleFUQrmtQOHs8", "thumbnail": "https://drive.google.com/thumbnail?id=1JkYZCul8TX2CSr2y0ThleFUQrmtQOHs8&sz=w1000" }
    },
    {
      "id": "local-per-05_2012_01_17_PER_01_ElPais_14_Paco_Mora",
      "driveId": "1NcYhBDyWaKufRWzVsQEhD4J0xvy3udYJ",
      "category": "05_PERIODICOS",
      "title": "05_2012-01-17_PER_01_ElPais_14_Paco-Morales",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2012-01-17_PER_01_ElPais_14_Paco-Morales.pdf",
      "media": { "driveFileId": "1NcYhBDyWaKufRWzVsQEhD4J0xvy3udYJ", "pdf": "1NcYhBDyWaKufRWzVsQEhD4J0xvy3udYJ", "thumbnail": "https://drive.google.com/thumbnail?id=1NcYhBDyWaKufRWzVsQEhD4J0xvy3udYJ&sz=w1000" }
    },
    {
      "id": "local-per-05_2012_02_19_PER_elMundo_11_Paco_Morale",
      "driveId": "1dHMPtrExm79EHSClpc8y4ga8f26FOjL1",
      "category": "05_PERIODICOS",
      "title": "05_2012-02-19_PER_elMundo_11_Paco-Morales_",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2012-02-19_PER_elMundo_11_Paco-Morales_.pdf",
      "media": { "driveFileId": "1dHMPtrExm79EHSClpc8y4ga8f26FOjL1", "pdf": "1dHMPtrExm79EHSClpc8y4ga8f26FOjL1", "thumbnail": "https://drive.google.com/thumbnail?id=1dHMPtrExm79EHSClpc8y4ga8f26FOjL1&sz=w1000" }
    },
    {
      "id": "local-per-05_2012_04_27_PER_las_provincias_Paco_Mo",
      "driveId": "1CB8NcSVPWzZt-V81oObAhyNLg_uCQvWX",
      "category": "05_PERIODICOS",
      "title": "05_2012-04-27_PER_las_provincias_Paco-Morales_",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2012-04-27_PER_las_provincias_Paco-Morales_.pdf",
      "media": { "driveFileId": "1CB8NcSVPWzZt-V81oObAhyNLg_uCQvWX", "pdf": "1CB8NcSVPWzZt-V81oObAhyNLg_uCQvWX", "thumbnail": "https://drive.google.com/thumbnail?id=1CB8NcSVPWzZt-V81oObAhyNLg_uCQvWX&sz=w1000" }
    },
    {
      "id": "local-per-05_2012_05_17_PER_01_ElPais_49_Tendencia",
      "driveId": "14hUksIPMRKnuGr79koYf6XqD1djtVzsG",
      "category": "05_PERIODICOS",
      "title": "05_2012-05_17_PER_01_ElPais_49_Tendencias_Paco-Morales_food_Printing",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2012-05_17_PER_01_ElPais_49_Tendencias_Paco-Morales_food_Printing.pdf",
      "media": { "driveFileId": "14hUksIPMRKnuGr79koYf6XqD1djtVzsG", "pdf": "14hUksIPMRKnuGr79koYf6XqD1djtVzsG", "thumbnail": "https://drive.google.com/thumbnail?id=14hUksIPMRKnuGr79koYf6XqD1djtVzsG&sz=w1000" }
    },
    {
      "id": "local-per-05_2012_07_28_PER_01__Topchefs__14_Paco",
      "driveId": "1zI-E50oc2chg85BG3yowT0jEfDgqGQyX",
      "category": "05_PERIODICOS",
      "title": "05_2012-07-28_PER_01_ Topchefs _14_Paco-Morales",
      "year": 2012,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2012-07-28_PER_01_ Topchefs _14_Paco-Morales.pdf",
      "media": { "driveFileId": "1zI-E50oc2chg85BG3yowT0jEfDgqGQyX", "pdf": "1zI-E50oc2chg85BG3yowT0jEfDgqGQyX", "thumbnail": "https://drive.google.com/thumbnail?id=1zI-E50oc2chg85BG3yowT0jEfDgqGQyX&sz=w1000" }
    },
    {
      "id": "local-per-05_2013_01_30_PER_01_El_Comercio_C2_Per",
      "driveId": "1nTnF0q37-I2m7GYsXwUa7sDJfIodxdUW",
      "category": "05_PERIODICOS",
      "title": "05_2013-01-30_PER_01_El_Comercio_C2_Perú_Paco-Morales",
      "year": 2013,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2013-01-30_PER_01_El_Comercio_C2_Perú_Paco-Morales.pdf",
      "media": { "driveFileId": "1nTnF0q37-I2m7GYsXwUa7sDJfIodxdUW", "pdf": "1nTnF0q37-I2m7GYsXwUa7sDJfIodxdUW", "thumbnail": "https://drive.google.com/thumbnail?id=1nTnF0q37-I2m7GYsXwUa7sDJfIodxdUW&sz=w1000" }
    },
    {
      "id": "local-per-05_2013_02_05_PER_01_ElPais_52_Paco_Mora",
      "driveId": "1mQUn8uwhhZWL9XMz9GMJN_30JygivAJK",
      "category": "05_PERIODICOS",
      "title": "05_2013-02-05_PER_01_ElPais_52_Paco-Morales",
      "year": 2013,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2013-02-05_PER_01_ElPais_52_Paco-Morales.pdf",
      "media": { "driveFileId": "1mQUn8uwhhZWL9XMz9GMJN_30JygivAJK", "pdf": "1mQUn8uwhhZWL9XMz9GMJN_30JygivAJK", "thumbnail": "https://drive.google.com/thumbnail?id=1mQUn8uwhhZWL9XMz9GMJN_30JygivAJK&sz=w1000" }
    },
    {
      "id": "local-per-05_2013_12_22_PER_elDia_DeC_rdoba_Portad",
      "driveId": "1lh3Q3Nin5ZblduS-xLPBBfGqZMapXIz7",
      "category": "05_PERIODICOS",
      "title": "05_2013-12-22_PER_elDia-DeCórdoba_Portada_12_13 _Noor_Paco-Morales-",
      "year": 2013,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2013-12-22_PER_elDia-DeCórdoba_Portada_12_13 _Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1lh3Q3Nin5ZblduS-xLPBBfGqZMapXIz7", "pdf": "1lh3Q3Nin5ZblduS-xLPBBfGqZMapXIz7", "thumbnail": "https://drive.google.com/thumbnail?id=1lh3Q3Nin5ZblduS-xLPBBfGqZMapXIz7&sz=w1000" }
    },
    {
      "id": "local-per-05_2014_07_11_PER_01_ABC_91_INICIOS_NOOR",
      "driveId": "1sxVCNBwzxs1JwIsGOqSvKTIJifePZ4UX",
      "category": "05_PERIODICOS",
      "title": "05_2014-07-11_PER_01_ABC_91_INICIOS_NOOR_Paco-Morales",
      "year": 2014,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2014-07-11_PER_01_ABC_91_INICIOS_NOOR_Paco-Morales.pdf",
      "media": { "driveFileId": "1sxVCNBwzxs1JwIsGOqSvKTIJifePZ4UX", "pdf": "1sxVCNBwzxs1JwIsGOqSvKTIJifePZ4UX", "thumbnail": "https://drive.google.com/thumbnail?id=1sxVCNBwzxs1JwIsGOqSvKTIJifePZ4UX&sz=w1000" }
    },
    {
      "id": "local-per-05_2014_07_20_PER_Diario_C_rdoba_18__Ape",
      "driveId": "137QVN4s6utntxhqF95CpnP5qT-QEZx9A",
      "category": "05_PERIODICOS",
      "title": "05_2014-07-20_PER_Diario-Córdoba_18 _Apertura_Noor_Paco-Morales-",
      "year": 2014,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2014-07-20_PER_Diario-Córdoba_18 _Apertura_Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "137QVN4s6utntxhqF95CpnP5qT-QEZx9A", "pdf": "137QVN4s6utntxhqF95CpnP5qT-QEZx9A", "thumbnail": "https://drive.google.com/thumbnail?id=137QVN4s6utntxhqF95CpnP5qT-QEZx9A&sz=w1000" }
    },
    {
      "id": "local-per-05_2014_11_30_PER_diario_C_rdoba_18_19_N",
      "driveId": "1asuxDuvjt7BIHOmH3JwEz7f8ZqafVJYh",
      "category": "05_PERIODICOS",
      "title": "05_2014-11-30_PER_diario-Córdoba_18_19_Noor_Paco-Morales-",
      "year": 2014,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2014-11-30_PER_diario-Córdoba_18_19_Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1asuxDuvjt7BIHOmH3JwEz7f8ZqafVJYh", "pdf": "1asuxDuvjt7BIHOmH3JwEz7f8ZqafVJYh", "thumbnail": "https://drive.google.com/thumbnail?id=1asuxDuvjt7BIHOmH3JwEz7f8ZqafVJYh&sz=w1000" }
    },
    {
      "id": "local-per-05_2015_01_16_PER_ElPais_Elviajero_3__In",
      "driveId": "1Py3-fAFQhX-f-X70iyztItIwuERm0X_E",
      "category": "05_PERIODICOS",
      "title": "05_2015-01-16_PER_ElPais_Elviajero_3 _IniciosNoor_Paco-Morales-",
      "year": 2015,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2015-01-16_PER_ElPais_Elviajero_3 _IniciosNoor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1Py3-fAFQhX-f-X70iyztItIwuERm0X_E", "pdf": "1Py3-fAFQhX-f-X70iyztItIwuERm0X_E", "thumbnail": "https://drive.google.com/thumbnail?id=1Py3-fAFQhX-f-X70iyztItIwuERm0X_E&sz=w1000" }
    },
    {
      "id": "local-per-05_2015_02_05_PER_elDia_C_rdoba_Portada",
      "driveId": "1pMnEiHvLeQJRNZjQdZ13hJ-117ZIbjSI",
      "category": "05_PERIODICOS",
      "title": "05_2015-02-05_PER_elDia-Córdoba_Portada_15_Paco-Morales-MadridFusion",
      "year": 2015,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2015-02-05_PER_elDia-Córdoba_Portada_15_Paco-Morales-MadridFusion.pdf",
      "media": { "driveFileId": "1pMnEiHvLeQJRNZjQdZ13hJ-117ZIbjSI", "pdf": "1pMnEiHvLeQJRNZjQdZ13hJ-117ZIbjSI", "thumbnail": "https://drive.google.com/thumbnail?id=1pMnEiHvLeQJRNZjQdZ13hJ-117ZIbjSI&sz=w1000" }
    },
    {
      "id": "local-per-05_2015_03_27_PER_ElD_a_DeC_rdoba_10_Ini",
      "driveId": "1ISXT4U-v-QRhHcA1npiQhOAC8dgQ2NZl",
      "category": "05_PERIODICOS",
      "title": "05_2015-03-27_PER_ElDía_DeCórdoba_10_IniciosNoor_Paco-Morales-",
      "year": 2015,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2015-03-27_PER_ElDía_DeCórdoba_10_IniciosNoor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1ISXT4U-v-QRhHcA1npiQhOAC8dgQ2NZl", "pdf": "1ISXT4U-v-QRhHcA1npiQhOAC8dgQ2NZl", "thumbnail": "https://drive.google.com/thumbnail?id=1ISXT4U-v-QRhHcA1npiQhOAC8dgQ2NZl&sz=w1000" }
    },
    {
      "id": "local-per-05_2015_07_25_PER_DiarioC_rdoba_13_Calif",
      "driveId": "1Cx8TyHDz1txKmGnIVj2qW3t-YLbxUm99",
      "category": "05_PERIODICOS",
      "title": "05_2015-07-25_PER_DiarioCórdoba_13_Califaro_Andoni",
      "year": 2015,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2015-07-25_PER_DiarioCórdoba_13_Califaro_Andoni.pdf",
      "media": { "driveFileId": "1Cx8TyHDz1txKmGnIVj2qW3t-YLbxUm99", "pdf": "1Cx8TyHDz1txKmGnIVj2qW3t-YLbxUm99", "thumbnail": "https://drive.google.com/thumbnail?id=1Cx8TyHDz1txKmGnIVj2qW3t-YLbxUm99&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_01_24_PER_elDia_Portada_13_Noor",
      "driveId": "1R9xkZ2j9hQQj7kufRRLqXYkohc1v6zfL",
      "category": "05_PERIODICOS",
      "title": "05_2016-01-24_PER_elDia_Portada_13_Noor_Paco-Morales",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-01-24_PER_elDia_Portada_13_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1R9xkZ2j9hQQj7kufRRLqXYkohc1v6zfL", "pdf": "1R9xkZ2j9hQQj7kufRRLqXYkohc1v6zfL", "thumbnail": "https://drive.google.com/thumbnail?id=1R9xkZ2j9hQQj7kufRRLqXYkohc1v6zfL&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_01_26_PER_elMundo_36_Noor_Paco_M",
      "driveId": "1RuovaA1N1o_T-3-qXuWXxcZ2Sd8MGDhx",
      "category": "05_PERIODICOS",
      "title": "05_2016-01-26_PER_elMundo_36_Noor_Paco-Morales_M.Fusión",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-01-26_PER_elMundo_36_Noor_Paco-Morales_M.Fusión.pdf",
      "media": { "driveFileId": "1RuovaA1N1o_T-3-qXuWXxcZ2Sd8MGDhx", "pdf": "1RuovaA1N1o_T-3-qXuWXxcZ2Sd8MGDhx", "thumbnail": "https://drive.google.com/thumbnail?id=1RuovaA1N1o_T-3-qXuWXxcZ2Sd8MGDhx&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_03_14_PER_diario_C_rdoba_Contrap",
      "driveId": "1l9sVQlkdRfRxB5UugMXt8Gn7MpldLVQk",
      "category": "05_PERIODICOS",
      "title": "05_2016-03-14_PER_diario-Córdoba_Contraportada_64 _Noor_Paco-Morales-",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-03-14_PER_diario-Córdoba_Contraportada_64 _Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1l9sVQlkdRfRxB5UugMXt8Gn7MpldLVQk", "pdf": "1l9sVQlkdRfRxB5UugMXt8Gn7MpldLVQk", "thumbnail": "https://drive.google.com/thumbnail?id=1l9sVQlkdRfRxB5UugMXt8Gn7MpldLVQk&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_03_24_PER_El_Mundo_Comer_7__Noor",
      "driveId": "1aew1TI6G0GcBN8-Kb9lBPCobTUfmUds-",
      "category": "05_PERIODICOS",
      "title": "05_2016-03-24_PER_El_Mundo_Comer_7 _Noor_Paco-Morales-",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-03-24_PER_El_Mundo_Comer_7 _Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1aew1TI6G0GcBN8-Kb9lBPCobTUfmUds-", "pdf": "1aew1TI6G0GcBN8-Kb9lBPCobTUfmUds-", "thumbnail": "https://drive.google.com/thumbnail?id=1aew1TI6G0GcBN8-Kb9lBPCobTUfmUds-&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_03_25_PER_El_Pais_10_11_Noor_Pac",
      "driveId": "17wuM9LPhLRr45Tr5CAHY-Yy46O3lUjoN",
      "category": "05_PERIODICOS",
      "title": "05_2016-03-25_PER_El_Pais_10_11_Noor_Paco-Morales-",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-03-25_PER_El_Pais_10_11_Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "17wuM9LPhLRr45Tr5CAHY-Yy46O3lUjoN", "pdf": "17wuM9LPhLRr45Tr5CAHY-Yy46O3lUjoN", "thumbnail": "https://drive.google.com/thumbnail?id=17wuM9LPhLRr45Tr5CAHY-Yy46O3lUjoN&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_04_03_PER_elMundo_10_11_Noor_Pac",
      "driveId": "1Sjg__2e1gQejo_W_h-k6XMOiL2A5eSr9",
      "category": "05_PERIODICOS",
      "title": "05_2016-04-03_PER_elMundo_10_11_Noor_Paco-Morales_siglox",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-04-03_PER_elMundo_10_11_Noor_Paco-Morales_siglox.pdf",
      "media": { "driveFileId": "1Sjg__2e1gQejo_W_h-k6XMOiL2A5eSr9", "pdf": "1Sjg__2e1gQejo_W_h-k6XMOiL2A5eSr9", "thumbnail": "https://drive.google.com/thumbnail?id=1Sjg__2e1gQejo_W_h-k6XMOiL2A5eSr9&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_10_20_PER_elD_a_de_c_rdoba_Contr",
      "driveId": "14DNYTdK7r4ZIOO0Y1qfZhfXwr9fdtrmU",
      "category": "05_PERIODICOS",
      "title": "05_2016-10-20_PER_elDía_de_córdoba_Contraportada_Noor_Paco-Morales_",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-10-20_PER_elDía_de_córdoba_Contraportada_Noor_Paco-Morales_.pdf",
      "media": { "driveFileId": "14DNYTdK7r4ZIOO0Y1qfZhfXwr9fdtrmU", "pdf": "14DNYTdK7r4ZIOO0Y1qfZhfXwr9fdtrmU", "thumbnail": "https://drive.google.com/thumbnail?id=14DNYTdK7r4ZIOO0Y1qfZhfXwr9fdtrmU&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_11_25_PER_Diario_C_rdoba_69_Noor",
      "driveId": "1i--8wei2R5jZj7vCQtm2F1rNs8VYK1GP",
      "category": "05_PERIODICOS",
      "title": "05_2016-11-25_PER_Diario_Córdoba_69_Noor_Paco-Morales",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-11-25_PER_Diario_Córdoba_69_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1i--8wei2R5jZj7vCQtm2F1rNs8VYK1GP", "pdf": "1i--8wei2R5jZj7vCQtm2F1rNs8VYK1GP", "thumbnail": "https://drive.google.com/thumbnail?id=1i--8wei2R5jZj7vCQtm2F1rNs8VYK1GP&sz=w1000" }
    },
    {
      "id": "local-per-05_2016_11_25_PER_elMundo_ABC_Gastronom",
      "driveId": "12SEacNNvkYQMGMSFHDeIaIbcOe-qaIcZ",
      "category": "05_PERIODICOS",
      "title": "05_2016-11-25_PER_elMundo-ABC_Gastronomía_10_Inicios_Noor_Paco-Morales",
      "year": 2016,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2016-11-25_PER_elMundo-ABC_Gastronomía_10_Inicios_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "12SEacNNvkYQMGMSFHDeIaIbcOe-qaIcZ", "pdf": "12SEacNNvkYQMGMSFHDeIaIbcOe-qaIcZ", "thumbnail": "https://drive.google.com/thumbnail?id=12SEacNNvkYQMGMSFHDeIaIbcOe-qaIcZ&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_02_17_PER_elD_a_deC_rdoba_23_Noo",
      "driveId": "1W4e2e5zux65rgp-lGcXy3tuz5GuMaPkx",
      "category": "05_PERIODICOS",
      "title": "05_2017-02-17_PER_elDía_deCórdoba_23_Noor_Paco-Morales",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-02-17_PER_elDía_deCórdoba_23_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1W4e2e5zux65rgp-lGcXy3tuz5GuMaPkx", "pdf": "1W4e2e5zux65rgp-lGcXy3tuz5GuMaPkx", "thumbnail": "https://drive.google.com/thumbnail?id=1W4e2e5zux65rgp-lGcXy3tuz5GuMaPkx&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_02_28_PER_elDia_DeC_rdoba_15__No",
      "driveId": "1PfLzdwz2TtkDbUBuwArOMX-Yd2bztn_t",
      "category": "05_PERIODICOS",
      "title": "05_2017-02-28_PER_elDia-DeCórdoba_15 _Noor_Paco-Morales-tres-culturas",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-02-28_PER_elDia-DeCórdoba_15 _Noor_Paco-Morales-tres-culturas.pdf",
      "media": { "driveFileId": "1PfLzdwz2TtkDbUBuwArOMX-Yd2bztn_t", "pdf": "1PfLzdwz2TtkDbUBuwArOMX-Yd2bztn_t", "thumbnail": "https://drive.google.com/thumbnail?id=1PfLzdwz2TtkDbUBuwArOMX-Yd2bztn_t&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_03_15_PER_01_DiarioC_rdoba_27_Pa",
      "driveId": "1tpvQWHctnvll8bu-jwFM8x7SLpjRBbCX",
      "category": "05_PERIODICOS",
      "title": "05_2017-03-15_PER_01_DiarioCórdoba_27_Paco-Morales",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-03-15_PER_01_DiarioCórdoba_27_Paco-Morales.pdf",
      "media": { "driveFileId": "1tpvQWHctnvll8bu-jwFM8x7SLpjRBbCX", "pdf": "1tpvQWHctnvll8bu-jwFM8x7SLpjRBbCX", "thumbnail": "https://drive.google.com/thumbnail?id=1tpvQWHctnvll8bu-jwFM8x7SLpjRBbCX&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_03_17_PER_elMundo_ElD_a_25_Inici",
      "driveId": "1qJkXftgukNmIymm8qrGfEtjmCJya_Or5",
      "category": "05_PERIODICOS",
      "title": "05_2017-03-17_PER_elMundo_ElDía_25_IniciosNoor_Paco-Morales",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-03-17_PER_elMundo_ElDía_25_IniciosNoor_Paco-Morales.pdf",
      "media": { "driveFileId": "1qJkXftgukNmIymm8qrGfEtjmCJya_Or5", "pdf": "1qJkXftgukNmIymm8qrGfEtjmCJya_Or5", "thumbnail": "https://drive.google.com/thumbnail?id=1qJkXftgukNmIymm8qrGfEtjmCJya_Or5&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_06_11_PER_diario_C_rdoba_Contrap",
      "driveId": "1l3vw6u_I1f23OG_ejex2vTgK6IEj9eME",
      "category": "05_PERIODICOS",
      "title": "05_2017-06-11_PER_diario-Córdoba_Contraportada_60 _Noor_Paco-Morales-",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-06-11_PER_diario-Córdoba_Contraportada_60 _Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1l3vw6u_I1f23OG_ejex2vTgK6IEj9eME", "pdf": "1l3vw6u_I1f23OG_ejex2vTgK6IEj9eME", "thumbnail": "https://drive.google.com/thumbnail?id=1l3vw6u_I1f23OG_ejex2vTgK6IEj9eME&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_07_13_PER_elMundo_Uve_Gastronom",
      "driveId": "1XgWxsOddX-gNAiwhTe7EiSYrVbnNCSnf",
      "category": "05_PERIODICOS",
      "title": "05_2017-07-13_PER_elMundo-Uve_Gastronomía_38_Noor_Paco-Morales",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-07-13_PER_elMundo-Uve_Gastronomía_38_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1XgWxsOddX-gNAiwhTe7EiSYrVbnNCSnf", "pdf": "1XgWxsOddX-gNAiwhTe7EiSYrVbnNCSnf", "thumbnail": "https://drive.google.com/thumbnail?id=1XgWxsOddX-gNAiwhTe7EiSYrVbnNCSnf&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_10_17_PER_Diario_C_rdoba_14_45_N",
      "driveId": "1lq2-K3lKaiF3L9i2kuAZ2RV8XynQYoHB",
      "category": "05_PERIODICOS",
      "title": "05_2017-10-17_PER_Diario_Córdoba_14_45_Noor_Paco-Morales",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-10-17_PER_Diario_Córdoba_14_45_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1lq2-K3lKaiF3L9i2kuAZ2RV8XynQYoHB", "pdf": "1lq2-K3lKaiF3L9i2kuAZ2RV8XynQYoHB", "thumbnail": "https://drive.google.com/thumbnail?id=1lq2-K3lKaiF3L9i2kuAZ2RV8XynQYoHB&sz=w1000" }
    },
    {
      "id": "local-per-05_2017_9_16_PER_ABC_Andaluc_a_2_28_29_N",
      "driveId": "1_5sfzYMGifv9pUn-ZHDYNfDugKXep1Ux",
      "category": "05_PERIODICOS",
      "title": "05_2017-9-16_PER_ABC-Andalucía_2_28_29_Noor_Paco-Morales-proyecto_cultural",
      "year": 2017,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2017-9-16_PER_ABC-Andalucía_2_28_29_Noor_Paco-Morales-proyecto_cultural.pdf",
      "media": { "driveFileId": "1_5sfzYMGifv9pUn-ZHDYNfDugKXep1Ux", "pdf": "1_5sfzYMGifv9pUn-ZHDYNfDugKXep1Ux", "thumbnail": "https://drive.google.com/thumbnail?id=1_5sfzYMGifv9pUn-ZHDYNfDugKXep1Ux&sz=w1000" }
    },
    {
      "id": "local-per-05_2019_02_06_PER_Diario_Cordoba_10_Paco",
      "driveId": "1i50qNq5fyrX2h00KjLLbzxaukNhOa6iB",
      "category": "05_PERIODICOS",
      "title": "05_2019-02-06_PER_Diario-Cordoba_10_Paco-Morales-Noor-NoPregon",
      "year": 2019,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2019-02-06_PER_Diario-Cordoba_10_Paco-Morales-Noor-NoPregon.pdf",
      "media": { "driveFileId": "1i50qNq5fyrX2h00KjLLbzxaukNhOa6iB", "pdf": "1i50qNq5fyrX2h00KjLLbzxaukNhOa6iB", "thumbnail": "https://drive.google.com/thumbnail?id=1i50qNq5fyrX2h00KjLLbzxaukNhOa6iB&sz=w1000" }
    },
    {
      "id": "local-per-05_2019_02_26_PER_Diario_Cordoba_18_Paco",
      "driveId": "1FyRPReo20cb-W5Zj7z-hKCMUCwgp0cqT",
      "category": "05_PERIODICOS",
      "title": "05_2019-02-26_PER_Diario-Cordoba_18_Paco-Morales-Noor-3-Soles",
      "year": 2019,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2019-02-26_PER_Diario-Cordoba_18_Paco-Morales-Noor-3-Soles.pdf",
      "media": { "driveFileId": "1FyRPReo20cb-W5Zj7z-hKCMUCwgp0cqT", "pdf": "1FyRPReo20cb-W5Zj7z-hKCMUCwgp0cqT", "thumbnail": "https://drive.google.com/thumbnail?id=1FyRPReo20cb-W5Zj7z-hKCMUCwgp0cqT&sz=w1000" }
    },
    {
      "id": "local-per-05_2019_09_02_PER_Diario_Cordoba_52_Paco",
      "driveId": "1E-LdUkmkCCTlNAY1ClLaPQNGG9g9pAnY",
      "category": "05_PERIODICOS",
      "title": "05_2019-09-02_PER_Diario-Cordoba_52_Paco-Morales-Noor-Pregón",
      "year": 2019,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2019-09-02_PER_Diario-Cordoba_52_Paco-Morales-Noor-Pregón.pdf",
      "media": { "driveFileId": "1E-LdUkmkCCTlNAY1ClLaPQNGG9g9pAnY", "pdf": "1E-LdUkmkCCTlNAY1ClLaPQNGG9g9pAnY", "thumbnail": "https://drive.google.com/thumbnail?id=1E-LdUkmkCCTlNAY1ClLaPQNGG9g9pAnY&sz=w1000" }
    },
    {
      "id": "local-per-05_2019_09_20_PER_Andaluc_a_Gourmet_Port",
      "driveId": "1I03lTaNeqz3anjAMgcWj1_1yrAOVOIIB",
      "category": "05_PERIODICOS",
      "title": "05_2019-09-20_PER_Andalucía_Gourmet_Portada_2_Noor_Paco-Morales",
      "year": 2019,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2019-09-20_PER_Andalucía_Gourmet_Portada_2_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "1I03lTaNeqz3anjAMgcWj1_1yrAOVOIIB", "pdf": "1I03lTaNeqz3anjAMgcWj1_1yrAOVOIIB", "thumbnail": "https://drive.google.com/thumbnail?id=1I03lTaNeqz3anjAMgcWj1_1yrAOVOIIB&sz=w1000" }
    },
    {
      "id": "local-per-05_2019_11_21_PER_diario_C_rdoba_Portada",
      "driveId": "12Cxqt-0T1_4dEyzZImEPMIsi1JCEppeU",
      "category": "05_PERIODICOS",
      "title": "05_2019-11-21_PER_diario-Córdoba_Portada_Contraportada _Noor_Paco-Morales-segunda_estrella",
      "year": 2019,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2019-11-21_PER_diario-Córdoba_Portada_Contraportada _Noor_Paco-Morales-segunda_estrella.pdf",
      "media": { "driveFileId": "12Cxqt-0T1_4dEyzZImEPMIsi1JCEppeU", "pdf": "12Cxqt-0T1_4dEyzZImEPMIsi1JCEppeU", "thumbnail": "https://drive.google.com/thumbnail?id=12Cxqt-0T1_4dEyzZImEPMIsi1JCEppeU&sz=w1000" }
    },
    {
      "id": "local-per-05_2019_11_21_PER_elD_a_DeC_rdoba_Portad",
      "driveId": "1rF_CIWm_pAIGE6ETDXuljZXCoIE3L43f",
      "category": "05_PERIODICOS",
      "title": "05_2019-11-21_PER_elDía-DeCórdoba_Portada_16 _Noor_Paco-Morales-Dos_Estrellas",
      "year": 2019,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2019-11-21_PER_elDía-DeCórdoba_Portada_16 _Noor_Paco-Morales-Dos_Estrellas.pdf",
      "media": { "driveFileId": "1rF_CIWm_pAIGE6ETDXuljZXCoIE3L43f", "pdf": "1rF_CIWm_pAIGE6ETDXuljZXCoIE3L43f", "thumbnail": "https://drive.google.com/thumbnail?id=1rF_CIWm_pAIGE6ETDXuljZXCoIE3L43f&sz=w1000" }
    },
    {
      "id": "local-per-05_2021_08_21_PER_El_Mundo_Portada_Papel",
      "driveId": "1EllbV41dLOWBzl1rEWeWJ19vt1Z_654h",
      "category": "05_PERIODICOS",
      "title": "05_2021-08-21_PER_El_Mundo_Portada_Papel_20_35 _Noor_Paco-Morales-",
      "year": 2021,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2021-08-21_PER_El_Mundo_Portada_Papel_20_35 _Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "1EllbV41dLOWBzl1rEWeWJ19vt1Z_654h", "pdf": "1EllbV41dLOWBzl1rEWeWJ19vt1Z_654h", "thumbnail": "https://drive.google.com/thumbnail?id=1EllbV41dLOWBzl1rEWeWJ19vt1Z_654h&sz=w1000" }
    },
    {
      "id": "local-per-05_2021_13_11_PER_Fugas_Andaluzia_Portad",
      "driveId": "13ISZ8cQucVd-G5thYNneeAtqrHTDxMOP",
      "category": "05_PERIODICOS",
      "title": "05_2021-13-11_PER_Fugas_Andaluzia_Portada_4 _5_Noor_Paco-Morales-",
      "year": 2021,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2021-13-11_PER_Fugas_Andaluzia_Portada_4 _5_Noor_Paco-Morales-.pdf",
      "media": { "driveFileId": "13ISZ8cQucVd-G5thYNneeAtqrHTDxMOP", "pdf": "13ISZ8cQucVd-G5thYNneeAtqrHTDxMOP", "thumbnail": "https://drive.google.com/thumbnail?id=13ISZ8cQucVd-G5thYNneeAtqrHTDxMOP&sz=w1000" }
    },
    {
      "id": "local-per-05_2023_07_11_PER_01_ElPais_14_Hotel_Fer",
      "driveId": "1DkJWEJDKKgrF_wFW9c-HzQymAWecjuqM",
      "category": "05_PERIODICOS",
      "title": "05_2023-07-11_PER_01_ElPais_14_Hotel_Ferrero_Paco-Morales",
      "year": 2023,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2023-07-11_PER_01_ElPais_14_Hotel_Ferrero_Paco-Morales.pdf",
      "media": { "driveFileId": "1DkJWEJDKKgrF_wFW9c-HzQymAWecjuqM", "pdf": "1DkJWEJDKKgrF_wFW9c-HzQymAWecjuqM", "thumbnail": "https://drive.google.com/thumbnail?id=1DkJWEJDKKgrF_wFW9c-HzQymAWecjuqM&sz=w1000" }
    },
    {
      "id": "local-per-05_2023_11_29_PER_El_D_a_Cordoba_Portada",
      "driveId": "1-bP3pyOE9CytCcDxtsp1P8ui-_qlH3So",
      "category": "05_PERIODICOS",
      "title": "05_2023-11-29_PER_El-Día-Cordoba_Portada_12_13_Paco-Morales-Noor-3-Estrellas",
      "year": 2023,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2023-11-29_PER_El-Día-Cordoba_Portada_12_13_Paco-Morales-Noor-3-Estrellas.pdf",
      "media": { "driveFileId": "1-bP3pyOE9CytCcDxtsp1P8ui-_qlH3So", "pdf": "1-bP3pyOE9CytCcDxtsp1P8ui-_qlH3So", "thumbnail": "https://drive.google.com/thumbnail?id=1-bP3pyOE9CytCcDxtsp1P8ui-_qlH3So&sz=w1000" }
    },
    {
      "id": "local-per-05_2024_10_09_PER_01_ElPais_14_Noor_Paco",
      "driveId": "19l1ovW61kQNLw0hBbxMAAaVgBbMWCuYD",
      "category": "05_PERIODICOS",
      "title": "05_2024-10-09_PER_01_ElPais_14_Noor_Paco-Morales",
      "year": 2024,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/05_2024-10-09_PER_01_ElPais_14_Noor_Paco-Morales.pdf",
      "media": { "driveFileId": "19l1ovW61kQNLw0hBbxMAAaVgBbMWCuYD", "pdf": "19l1ovW61kQNLw0hBbxMAAaVgBbMWCuYD", "thumbnail": "https://drive.google.com/thumbnail?id=19l1ovW61kQNLw0hBbxMAAaVgBbMWCuYD&sz=w1000" }
    },
    {
      "id": "local-per-S_I",
      "driveId": "1sUdRZzuZBz3FUq62zh8NCHQ-GVPBEIYp",
      "category": "05_PERIODICOS",
      "title": "S I",
      "year": 2000,
      "type": "article",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Periódicos", "Prensa", "05_PERIODICOS"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/05_PERIODICOS/S I.pdf",
      "media": { "driveFileId": "1sUdRZzuZBz3FUq62zh8NCHQ-GVPBEIYp", "pdf": "1sUdRZzuZBz3FUq62zh8NCHQ-GVPBEIYp", "thumbnail": "https://drive.google.com/thumbnail?id=1sUdRZzuZBz3FUq62zh8NCHQ-GVPBEIYp&sz=w1000" }
    },
    // --- 06_PRODUCTO_CONTEXTUALIZACION ---
    {
      "id": "local-ctx-06_1981_DIG_La_Cuisine_Algerienne_Rescat",
      "driveId": "1d0XUYRWUDV2IREFNsOgr5dFutVsR3Flu",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_1981_DIG_La_Cuisine_Algerienne_Rescate",
      "year": 1981,
      "type": "book",
      "eraId": "CONTEMPORARY",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_1981_DIG_La_Cuisine_Algerienne_Rescate.pdf",
      "media": { "driveFileId": "1d0XUYRWUDV2IREFNsOgr5dFutVsR3Flu", "pdf": "1d0XUYRWUDV2IREFNsOgr5dFutVsR3Flu", "thumbnail": "https://drive.google.com/thumbnail?id=1d0XUYRWUDV2IREFNsOgr5dFutVsR3Flu&sz=w1000" }
    },
    {
      "id": "local-ctx-06_1998_DIG_Etnobot_nica_Rescate",
      "driveId": "1CiYfmtje7HKgOmBNR2oHEt3kIIIb2fbZ",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_1998_DIG_Etnobotánica_Rescate",
      "year": 1998,
      "type": "book",
      "eraId": "CONTEMPORARY",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_1998_DIG_Etnobotánica_Rescate.pdf",
      "media": { "driveFileId": "1CiYfmtje7HKgOmBNR2oHEt3kIIIb2fbZ", "pdf": "1CiYfmtje7HKgOmBNR2oHEt3kIIIb2fbZ", "thumbnail": "https://drive.google.com/thumbnail?id=1CiYfmtje7HKgOmBNR2oHEt3kIIIb2fbZ&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2000_DIG_Contextualizaci_n_Bot_nica_e",
      "driveId": "1N8AI8_tLwxJwomutM0Y-Pk1XMM1JM6n1",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2000_DIG_Contextualización_Botánica económica y Etnobotánica",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2000_DIG_Contextualización_Botánica económica y Etnobotánica.pdf",
      "media": { "driveFileId": "1N8AI8_tLwxJwomutM0Y-Pk1XMM1JM6n1", "pdf": "1N8AI8_tLwxJwomutM0Y-Pk1XMM1JM6n1", "thumbnail": "https://drive.google.com/thumbnail?id=1N8AI8_tLwxJwomutM0Y-Pk1XMM1JM6n1&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2000_DIG_Sabores__rabe",
      "driveId": "1q9X_pcZXMOoavZrlL_PZ_kT4cFdvxZ3L",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2000_DIG_Sabores_Árabe_",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2000_DIG_Sabores_Árabe_.pdf",
      "media": { "driveFileId": "1q9X_pcZXMOoavZrlL_PZ_kT4cFdvxZ3L", "pdf": "1q9X_pcZXMOoavZrlL_PZ_kT4cFdvxZ3L", "thumbnail": "https://drive.google.com/thumbnail?id=1q9X_pcZXMOoavZrlL_PZ_kT4cFdvxZ3L&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2000_Meigasil_Cocina_Arabe_Paso_a_Pas",
      "driveId": "19KVOliCv6cgdcRHTCnj-4eyhX2j8pq_n",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2000_Meigasil_Cocina-Arabe-Paso-a-Paso_S-XX",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2000_Meigasil_Cocina-Arabe-Paso-a-Paso_S-XX.pdf",
      "media": { "driveFileId": "19KVOliCv6cgdcRHTCnj-4eyhX2j8pq_n", "pdf": "19KVOliCv6cgdcRHTCnj-4eyhX2j8pq_n", "thumbnail": "https://drive.google.com/thumbnail?id=19KVOliCv6cgdcRHTCnj-4eyhX2j8pq_n&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2003_DIG_Cocina_Marroqu",
      "driveId": "14uMpKa-zBD7eWQTWOvO2XgFVoACK96PB",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2003_DIG_Cocina_Marroquí",
      "year": 2003,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2003_DIG_Cocina_Marroquí.pdf",
      "media": { "driveFileId": "14uMpKa-zBD7eWQTWOvO2XgFVoACK96PB", "pdf": "14uMpKa-zBD7eWQTWOvO2XgFVoACK96PB", "thumbnail": "https://drive.google.com/thumbnail?id=14uMpKa-zBD7eWQTWOvO2XgFVoACK96PB&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2004_DIG_Cocina_Turca",
      "driveId": "1HeH1b5ha7Xzn2-E33rPbCIitn01UoIXK",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2004_DIG_Cocina_Turca",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2004_DIG_Cocina_Turca.pdf",
      "media": { "driveFileId": "1HeH1b5ha7Xzn2-E33rPbCIitn01UoIXK", "pdf": "1HeH1b5ha7Xzn2-E33rPbCIitn01UoIXK", "thumbnail": "https://drive.google.com/thumbnail?id=1HeH1b5ha7Xzn2-E33rPbCIitn01UoIXK&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2004_DIG_Recetario_Cocina_Turca",
      "driveId": "1l712o07C94NTcpLy-W274swQoGfVOAZ3",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2004_DIG_Recetario_Cocina_Turca",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2004_DIG_Recetario_Cocina_Turca.pdf",
      "media": { "driveFileId": "1l712o07C94NTcpLy-W274swQoGfVOAZ3", "pdf": "1l712o07C94NTcpLy-W274swQoGfVOAZ3", "thumbnail": "https://drive.google.com/thumbnail?id=1l712o07C94NTcpLy-W274swQoGfVOAZ3&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2005_06_09_DIG_Nuevas_Tecnolog_as_Cen",
      "driveId": "1r45-hCXHCX_rF2nU2SQQXCXU_lmFfGwK",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2005_06_09_DIG_Nuevas_Tecnologías_Centro_Tec_Innovación_Paco_Morales",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2005_06_09_DIG_Nuevas_Tecnologías_Centro_Tec_Innovación_Paco_Morales.Pdf",
      "media": { "driveFileId": "1r45-hCXHCX_rF2nU2SQQXCXU_lmFfGwK", "pdf": "1r45-hCXHCX_rF2nU2SQQXCXU_lmFfGwK", "thumbnail": "https://drive.google.com/thumbnail?id=1r45-hCXHCX_rF2nU2SQQXCXU_lmFfGwK&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2005_10_DIG_Mapa_Procesos",
      "driveId": "1zo3ccWuHV-cbHUUDlP65K7t21bfX1mUQ",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2005_10_DIG_Mapa_Procesos",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2005_10_DIG_Mapa_Procesos.pdf",
      "media": { "driveFileId": "1zo3ccWuHV-cbHUUDlP65K7t21bfX1mUQ", "pdf": "1zo3ccWuHV-cbHUUDlP65K7t21bfX1mUQ", "thumbnail": "https://drive.google.com/thumbnail?id=1zo3ccWuHV-cbHUUDlP65K7t21bfX1mUQ&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2005_Behnke_Cocina_Oriente_Medio_Guia",
      "driveId": "1UJx9TSqPLlt-ddxU_bwdvSJ-ouwPQhaY",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2005_Behnke_Cocina-Oriente-Medio-Guia_S-XXI",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2005_Behnke_Cocina-Oriente-Medio-Guia_S-XXI.pdf",
      "media": { "driveFileId": "1UJx9TSqPLlt-ddxU_bwdvSJ-ouwPQhaY", "pdf": "1UJx9TSqPLlt-ddxU_bwdvSJ-ouwPQhaY", "thumbnail": "https://drive.google.com/thumbnail?id=1UJx9TSqPLlt-ddxU_bwdvSJ-ouwPQhaY&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2005_DIG_Recetario_Cocina__rabe",
      "driveId": "1tfrIplfoSNIsImBeb3aeTrYc-5q6t0T_",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2005_DIG_Recetario_Cocina_Árabe",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2005_DIG_Recetario_Cocina_Árabe.pdf",
      "media": { "driveFileId": "1tfrIplfoSNIsImBeb3aeTrYc-5q6t0T_", "pdf": "1tfrIplfoSNIsImBeb3aeTrYc-5q6t0T_", "thumbnail": "https://drive.google.com/thumbnail?id=1tfrIplfoSNIsImBeb3aeTrYc-5q6t0T_&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2005_Estudio_Tejidos_Al_Andalus_Parte",
      "driveId": "1jehOid_alnkWJRDIukBHemi9TqwPVQtG",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2005_Estudio_Tejidos_Al-Andalus_Partearroyo.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2005_Estudio_Tejidos_Al-Andalus_Partearroyo.pdf.pdf",
      "media": { "driveFileId": "1jehOid_alnkWJRDIukBHemi9TqwPVQtG", "pdf": "1jehOid_alnkWJRDIukBHemi9TqwPVQtG", "thumbnail": "https://drive.google.com/thumbnail?id=1jehOid_alnkWJRDIukBHemi9TqwPVQtG&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2006_08_29_DIG_Contextualizaci_n_Alga",
      "driveId": "1z1yEea1IBwr93j0BIN_o1fSz_T8mJhD7",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2006_08_29_DIG_Contextualización_Algas",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2006_08_29_DIG_Contextualización_Algas.pdf",
      "media": { "driveFileId": "1z1yEea1IBwr93j0BIN_o1fSz_T8mJhD7", "pdf": "1z1yEea1IBwr93j0BIN_o1fSz_T8mJhD7", "thumbnail": "https://drive.google.com/thumbnail?id=1z1yEea1IBwr93j0BIN_o1fSz_T8mJhD7&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2006_09_22_DIG_Andoni_Procesos",
      "driveId": "1fyRs1756TUN5hyG7pw2AIDC6vZTg9rMM",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2006_09_22_DIG_Andoni_Procesos",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2006_09_22_DIG_Andoni_Procesos.pdf",
      "media": { "driveFileId": "1fyRs1756TUN5hyG7pw2AIDC6vZTg9rMM", "pdf": "1fyRs1756TUN5hyG7pw2AIDC6vZTg9rMM", "thumbnail": "https://drive.google.com/thumbnail?id=1fyRs1756TUN5hyG7pw2AIDC6vZTg9rMM&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2006_DIG_Procedimientos",
      "driveId": "1GGVnAtfZUVUvCiezoyuRdl2YhxgaPOK7",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2006_DIG_Procedimientos",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2006_DIG_Procedimientos.pdf",
      "media": { "driveFileId": "1GGVnAtfZUVUvCiezoyuRdl2YhxgaPOK7", "pdf": "1GGVnAtfZUVUvCiezoyuRdl2YhxgaPOK7", "thumbnail": "https://drive.google.com/thumbnail?id=1GGVnAtfZUVUvCiezoyuRdl2YhxgaPOK7&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2006_DIG_Worlds_of_Flavor_Programa",
      "driveId": "1dSv9jwG_wv80RWUDedyMoh00oRekC5N2",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2006_DIG_Worlds_of_Flavor_Programa",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2006_DIG_Worlds_of_Flavor_Programa.pdf",
      "media": { "driveFileId": "1dSv9jwG_wv80RWUDedyMoh00oRekC5N2", "pdf": "1dSv9jwG_wv80RWUDedyMoh00oRekC5N2", "thumbnail": "https://drive.google.com/thumbnail?id=1dSv9jwG_wv80RWUDedyMoh00oRekC5N2&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2006_Samira_Reposteria_Argelina_Tradi",
      "driveId": "13qwSVDcaukzeHrovVyMiU76RFd-T-hsF",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2006_Samira_Reposteria-Argelina-Tradicional_S-XXI",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2006_Samira_Reposteria-Argelina-Tradicional_S-XXI.pdf",
      "media": { "driveFileId": "13qwSVDcaukzeHrovVyMiU76RFd-T-hsF", "pdf": "13qwSVDcaukzeHrovVyMiU76RFd-T-hsF", "thumbnail": "https://drive.google.com/thumbnail?id=13qwSVDcaukzeHrovVyMiU76RFd-T-hsF&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2007_Digital_INTA_Usos_Industriales_H",
      "driveId": "1b3mSwOtLoSAMPj-hgcD_1QZQ3u5WFKAo",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2007_Digital_INTA_Usos_Industriales_Humanos_Maiz_Sorgo",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2007_Digital_INTA_Usos_Industriales_Humanos_Maiz_Sorgo.pdf",
      "media": { "driveFileId": "1b3mSwOtLoSAMPj-hgcD_1QZQ3u5WFKAo", "pdf": "1b3mSwOtLoSAMPj-hgcD_1QZQ3u5WFKAo", "thumbnail": "https://drive.google.com/thumbnail?id=1b3mSwOtLoSAMPj-hgcD_1QZQ3u5WFKAo&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2007_Recetario_Mugaritz__pdf",
      "driveId": "1RgdjzWIi0GrFDJHz-rgAmgo0j_he-zSd",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2007_Recetario_Mugaritz .pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2007_Recetario_Mugaritz .pdf.pdf",
      "media": { "driveFileId": "1RgdjzWIi0GrFDJHz-rgAmgo0j_he-zSd", "pdf": "1RgdjzWIi0GrFDJHz-rgAmgo0j_he-zSd", "thumbnail": "https://drive.google.com/thumbnail?id=1RgdjzWIi0GrFDJHz-rgAmgo0j_he-zSd&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2008_Alinea_Tecnicas_Mugaritz_Cocina",
      "driveId": "1Sp7aCbMXLGOTzjQswVCS4wN2tVckZEbv",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2008_Alinea_Tecnicas_Mugaritz_Cocina-Vanguardia_S-XXI",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2008_Alinea_Tecnicas_Mugaritz_Cocina-Vanguardia_S-XXI.pdf",
      "media": { "driveFileId": "1Sp7aCbMXLGOTzjQswVCS4wN2tVckZEbv", "pdf": "1Sp7aCbMXLGOTzjQswVCS4wN2tVckZEbv", "thumbnail": "https://drive.google.com/thumbnail?id=1Sp7aCbMXLGOTzjQswVCS4wN2tVckZEbv&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2008_Digital_Paco_Morales_Restaurante",
      "driveId": "1iVCESRG09nnmwyw5C3uXUJ5KyguXKiE-",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2008_Digital_Paco_Morales_Restaurante_Ferrero",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2008_Digital_Paco_Morales_Restaurante_Ferrero.pdf",
      "media": { "driveFileId": "1iVCESRG09nnmwyw5C3uXUJ5KyguXKiE-", "pdf": "1iVCESRG09nnmwyw5C3uXUJ5KyguXKiE-", "thumbnail": "https://drive.google.com/thumbnail?id=1iVCESRG09nnmwyw5C3uXUJ5KyguXKiE-&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2008_Mugaritz_Manual_Agentes_Textura",
      "driveId": "16bu22v3XwSibEjSJFtM18zyZGHLOkkDO",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2008_Mugaritz_Manual-Agentes-Textura_S-XXI",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2008_Mugaritz_Manual-Agentes-Textura_S-XXI.pdf",
      "media": { "driveFileId": "16bu22v3XwSibEjSJFtM18zyZGHLOkkDO", "pdf": "16bu22v3XwSibEjSJFtM18zyZGHLOkkDO", "thumbnail": "https://drive.google.com/thumbnail?id=16bu22v3XwSibEjSJFtM18zyZGHLOkkDO&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2009_DIG_Amilosa_Amilopectina",
      "driveId": "1680vV6wx0276BNQBwpA8V6ySXQe5N46G",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2009_DIG_Amilosa_Amilopectina",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2009_DIG_Amilosa_Amilopectina.pdf",
      "media": { "driveFileId": "1680vV6wx0276BNQBwpA8V6ySXQe5N46G", "pdf": "1680vV6wx0276BNQBwpA8V6ySXQe5N46G", "thumbnail": "https://drive.google.com/thumbnail?id=1680vV6wx0276BNQBwpA8V6ySXQe5N46G&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2009_DIG_Liquenes_Comestibles",
      "driveId": "1P1eZ-zrW2PQ6zGeH8ebtIqzeRbRU-gA8",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2009_DIG_Liquenes_Comestibles",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2009_DIG_Liquenes_Comestibles.pdf",
      "media": { "driveFileId": "1P1eZ-zrW2PQ6zGeH8ebtIqzeRbRU-gA8", "pdf": "1P1eZ-zrW2PQ6zGeH8ebtIqzeRbRU-gA8", "thumbnail": "https://drive.google.com/thumbnail?id=1P1eZ-zrW2PQ6zGeH8ebtIqzeRbRU-gA8&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2010_Anonimo_Historia_Cultivo_Te_S_VI",
      "driveId": "1F2zVqW9xQ8kQze9d06jRP7wvTmm-pjsc",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2010_Anonimo_Historia-Cultivo-Te_S-VIII-XIX",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2010_Anonimo_Historia-Cultivo-Te_S-VIII-XIX.pdf",
      "media": { "driveFileId": "1F2zVqW9xQ8kQze9d06jRP7wvTmm-pjsc", "pdf": "1F2zVqW9xQ8kQze9d06jRP7wvTmm-pjsc", "thumbnail": "https://drive.google.com/thumbnail?id=1F2zVqW9xQ8kQze9d06jRP7wvTmm-pjsc&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2010_Mugaritz_Estudio_Tecnico_Azafran",
      "driveId": "1b93jEbRUU4Ivz9g4FFN2pRfZm7u2VAcs",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2010_Mugaritz_Estudio-Tecnico-Azafran_S-XXI",
      "year": 2010,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2010_Mugaritz_Estudio-Tecnico-Azafran_S-XXI.pdf",
      "media": { "driveFileId": "1b93jEbRUU4Ivz9g4FFN2pRfZm7u2VAcs", "pdf": "1b93jEbRUU4Ivz9g4FFN2pRfZm7u2VAcs", "thumbnail": "https://drive.google.com/thumbnail?id=1b93jEbRUU4Ivz9g4FFN2pRfZm7u2VAcs&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2011_DIG_Contextualizaci_n_Aromas_Sab",
      "driveId": "1TKN9zzFmxnbaa4D-zXE5Gf3VEh68no9d",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2011_DIG_Contextualización_Aromas_Sabores_Cocina_Marroqui",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2011_DIG_Contextualización_Aromas_Sabores_Cocina_Marroqui.pdf",
      "media": { "driveFileId": "1TKN9zzFmxnbaa4D-zXE5Gf3VEh68no9d", "pdf": "1TKN9zzFmxnbaa4D-zXE5Gf3VEh68no9d", "thumbnail": "https://drive.google.com/thumbnail?id=1TKN9zzFmxnbaa4D-zXE5Gf3VEh68no9d&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2011_DIG_Formaci_n_manipulador__de_al",
      "driveId": "1pvPrHms53ycWnLLSy9VemO0N9-dU0qjVf5RpFpW_sj8",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2011_DIG_Formación_manipulador _de_alimentos.gdoc",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2011_DIG_Formación_manipulador _de_alimentos.gdoc",
      "media": { "driveFileId": "1pvPrHms53ycWnLLSy9VemO0N9-dU0qjVf5RpFpW_sj8", "pdf": "1pvPrHms53ycWnLLSy9VemO0N9-dU0qjVf5RpFpW_sj8", "thumbnail": "https://drive.google.com/thumbnail?id=1pvPrHms53ycWnLLSy9VemO0N9-dU0qjVf5RpFpW_sj8&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2011_DIG_Formaci_n_manipulador__de_al",
      "driveId": "1Ssxs-jGLuPdgrgN6yMDAZ-x1xIeZXwOo",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2011_DIG_Formación_manipulador _de_alimentos",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2011_DIG_Formación_manipulador _de_alimentos.pdf",
      "media": { "driveFileId": "1Ssxs-jGLuPdgrgN6yMDAZ-x1xIeZXwOo", "pdf": "1Ssxs-jGLuPdgrgN6yMDAZ-x1xIeZXwOo", "thumbnail": "https://drive.google.com/thumbnail?id=1Ssxs-jGLuPdgrgN6yMDAZ-x1xIeZXwOo&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2011_DIG_La_Neo_tapa",
      "driveId": "1zMtSGQwq0OidXqmvPUxjGc11K0D3KSrN",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2011_DIG_La_Neo_tapa",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2011_DIG_La_Neo_tapa.pdf",
      "media": { "driveFileId": "1zMtSGQwq0OidXqmvPUxjGc11K0D3KSrN", "pdf": "1zMtSGQwq0OidXqmvPUxjGc11K0D3KSrN", "thumbnail": "https://drive.google.com/thumbnail?id=1zMtSGQwq0OidXqmvPUxjGc11K0D3KSrN&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2011_Morales_Taller_Texturas_Paco_Mor",
      "driveId": "110NiGemE1BtpVElpoEDlAwRs9QIm-pOI",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2011_Morales_Taller-Texturas-Paco-Morales_S-XXI",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2011_Morales_Taller-Texturas-Paco-Morales_S-XXI.pdf",
      "media": { "driveFileId": "110NiGemE1BtpVElpoEDlAwRs9QIm-pOI", "pdf": "110NiGemE1BtpVElpoEDlAwRs9QIm-pOI", "thumbnail": "https://drive.google.com/thumbnail?id=110NiGemE1BtpVElpoEDlAwRs9QIm-pOI&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2012_Digital_Moset_Valencia_Open_Pedi",
      "driveId": "1FH9PfhaUL-_2KJQh1x-WNjJwoSCF-fm4",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2012_Digital_Moset_Valencia_Open_Pedidos_Ventas",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2012_Digital_Moset_Valencia_Open_Pedidos_Ventas.pdf",
      "media": { "driveFileId": "1FH9PfhaUL-_2KJQh1x-WNjJwoSCF-fm4", "pdf": "1FH9PfhaUL-_2KJQh1x-WNjJwoSCF-fm4", "thumbnail": "https://drive.google.com/thumbnail?id=1FH9PfhaUL-_2KJQh1x-WNjJwoSCF-fm4&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2012_Digital_Panes_Tradicionales_Magr",
      "driveId": "1oBcZvs3BqcGt5_UO_NL8hQWTkHsmu_N1",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2012_Digital_Panes_Tradicionales_Magreb (1)",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2012_Digital_Panes_Tradicionales_Magreb (1).pdf",
      "media": { "driveFileId": "1oBcZvs3BqcGt5_UO_NL8hQWTkHsmu_N1", "pdf": "1oBcZvs3BqcGt5_UO_NL8hQWTkHsmu_N1", "thumbnail": "https://drive.google.com/thumbnail?id=1oBcZvs3BqcGt5_UO_NL8hQWTkHsmu_N1&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2012_Digital_Panes_Tradicionales_Magr",
      "driveId": "1BUB6y7Z5p2BOouMo_qPyoB6RvIookydS",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2012_Digital_Panes_Tradicionales_Magreb",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2012_Digital_Panes_Tradicionales_Magreb.pdf",
      "media": { "driveFileId": "1BUB6y7Z5p2BOouMo_qPyoB6RvIookydS", "pdf": "1BUB6y7Z5p2BOouMo_qPyoB6RvIookydS", "thumbnail": "https://drive.google.com/thumbnail?id=1BUB6y7Z5p2BOouMo_qPyoB6RvIookydS&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2014_19_07_DIG_Men__Contextualizaci_n",
      "driveId": "1xKgxffrbBwdoQn26snvPsHMpbLhvLcRT",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2014_19_07_DIG_Menú_Contextualización",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2014_19_07_DIG_Menú_Contextualización.pdf",
      "media": { "driveFileId": "1xKgxffrbBwdoQn26snvPsHMpbLhvLcRT", "pdf": "1xKgxffrbBwdoQn26snvPsHMpbLhvLcRT", "thumbnail": "https://drive.google.com/thumbnail?id=1xKgxffrbBwdoQn26snvPsHMpbLhvLcRT&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2015_10_DIG_Recetario_Varios",
      "driveId": "1EyK6iNOR1z85KuKvO8bKBzedDnqVUL52",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2015_10_DIG_Recetario_Varios",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2015_10_DIG_Recetario_Varios.pdf",
      "media": { "driveFileId": "1EyK6iNOR1z85KuKvO8bKBzedDnqVUL52", "pdf": "1EyK6iNOR1z85KuKvO8bKBzedDnqVUL52", "thumbnail": "https://drive.google.com/thumbnail?id=1EyK6iNOR1z85KuKvO8bKBzedDnqVUL52&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2015_DIG_ActaReunion_PacoMorales_Ferr",
      "driveId": "1Xe_IUcyzHtfHJUHDwFxkHLZbrPL7mOg4",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2015_DIG_ActaReunion_PacoMorales_FerranAdria_ProyectoNoor_Bullilab",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2015_DIG_ActaReunion_PacoMorales_FerranAdria_ProyectoNoor_Bullilab.pdf",
      "media": { "driveFileId": "1Xe_IUcyzHtfHJUHDwFxkHLZbrPL7mOg4", "pdf": "1Xe_IUcyzHtfHJUHDwFxkHLZbrPL7mOg4", "thumbnail": "https://drive.google.com/thumbnail?id=1Xe_IUcyzHtfHJUHDwFxkHLZbrPL7mOg4&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2015_Tecnico_Manual_Salsas_Hosteleria",
      "driveId": "1fZ4cWynvZL5GfdjYCFdzXAOHYZlultjH",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2015_Tecnico_Manual-Salsas-Hosteleria_.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2015_Tecnico_Manual-Salsas-Hosteleria_.pdf.pdf",
      "media": { "driveFileId": "1fZ4cWynvZL5GfdjYCFdzXAOHYZlultjH", "pdf": "1fZ4cWynvZL5GfdjYCFdzXAOHYZlultjH", "thumbnail": "https://drive.google.com/thumbnail?id=1fZ4cWynvZL5GfdjYCFdzXAOHYZlultjH&sz=w1000" }
    },
    {
      "id": "local-ctx-06_2015_Tecnico_Mugaritz_Manual_Consomes",
      "driveId": "1MCSEuF-oV9RNP_XJEWnnASpo1KXXT0YB",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_2015_Tecnico_Mugaritz_Manual-Consomes-Potajes-Cremas_S-XXI",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_2015_Tecnico_Mugaritz_Manual-Consomes-Potajes-Cremas_S-XXI.pdf",
      "media": { "driveFileId": "1MCSEuF-oV9RNP_XJEWnnASpo1KXXT0YB", "pdf": "1MCSEuF-oV9RNP_XJEWnnASpo1KXXT0YB", "thumbnail": "https://drive.google.com/thumbnail?id=1MCSEuF-oV9RNP_XJEWnnASpo1KXXT0YB&sz=w1000" }
    },
    {
      "id": "local-ctx-06_Copia_de_01_2005_10_DIG_Dosier_de_pre",
      "driveId": "1p-6GXL77NAbFfL3sOb2YE7recJQutBcK",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_Copia de 01_2005_10_DIG_Dosier_de_prensa",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_Copia de 01_2005_10_DIG_Dosier_de_prensa.pdf",
      "media": { "driveFileId": "1p-6GXL77NAbFfL3sOb2YE7recJQutBcK", "pdf": "1p-6GXL77NAbFfL3sOb2YE7recJQutBcK", "thumbnail": "https://drive.google.com/thumbnail?id=1p-6GXL77NAbFfL3sOb2YE7recJQutBcK&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_2003_La_Cuisine_Libanese_Rescate",
      "driveId": "18MbTqW3FNUGnnCZtXY1alB0KyBfnVTvL",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_2003_La_Cuisine_Libanese_Rescate.pdf3",
      "year": 2003,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_2003_La_Cuisine_Libanese_Rescate.pdf3",
      "media": { "driveFileId": "18MbTqW3FNUGnnCZtXY1alB0KyBfnVTvL", "pdf": "18MbTqW3FNUGnnCZtXY1alB0KyBfnVTvL", "thumbnail": "https://drive.google.com/thumbnail?id=18MbTqW3FNUGnnCZtXY1alB0KyBfnVTvL&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Abderraman_lll_Cabrito_Pastor",
      "driveId": "1ltFCmTHWH9KSN3hezLSYiVyQl1cka5xJ",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Abderraman_lll_Cabrito_Pastor",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Abderraman_lll_Cabrito_Pastor.pdf",
      "media": { "driveFileId": "1ltFCmTHWH9KSN3hezLSYiVyQl1cka5xJ", "pdf": "1ltFCmTHWH9KSN3hezLSYiVyQl1cka5xJ", "thumbnail": "https://drive.google.com/thumbnail?id=1ltFCmTHWH9KSN3hezLSYiVyQl1cka5xJ&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Albar_n_Gumendi_Producto",
      "driveId": "1Fd-zsFuGLuGJ9mCFhWj9XtPZjgHIsiR1",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Albarán_Gumendi_Producto",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Albarán_Gumendi_Producto.Pdf",
      "media": { "driveFileId": "1Fd-zsFuGLuGJ9mCFhWj9XtPZjgHIsiR1", "pdf": "1Fd-zsFuGLuGJ9mCFhWj9XtPZjgHIsiR1", "thumbnail": "https://drive.google.com/thumbnail?id=1Fd-zsFuGLuGJ9mCFhWj9XtPZjgHIsiR1&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_CONTEXTUALIZACI_N_AGRICULTURA_AL",
      "driveId": "1bmJQ4mjJmpDGMB9BcskThvifysMZ3SX4",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_CONTEXTUALIZACIÓN_AGRICULTURA_AL_ANDALUS",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_CONTEXTUALIZACIÓN_AGRICULTURA_AL_ANDALUS.pdf",
      "media": { "driveFileId": "1bmJQ4mjJmpDGMB9BcskThvifysMZ3SX4", "pdf": "1bmJQ4mjJmpDGMB9BcskThvifysMZ3SX4", "thumbnail": "https://drive.google.com/thumbnail?id=1bmJQ4mjJmpDGMB9BcskThvifysMZ3SX4&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Cocina_contextualizaci_n_Kosher_m",
      "driveId": "1FStAAp1gQJCR5lufzGj2FxUQuaGDhl4X",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Cocina_contextualización_Kosher_magrebí.pdf.",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Cocina_contextualización_Kosher_magrebí.pdf..pdf",
      "media": { "driveFileId": "1FStAAp1gQJCR5lufzGj2FxUQuaGDhl4X", "pdf": "1FStAAp1gQJCR5lufzGj2FxUQuaGDhl4X", "thumbnail": "https://drive.google.com/thumbnail?id=1FStAAp1gQJCR5lufzGj2FxUQuaGDhl4X&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Colaboraci_n_Grupos_investigaci_n",
      "driveId": "1GWcIZA6-tDS2i25g4sYMXKWRkzTtYIzN",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Colaboración_Grupos_investigación",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Colaboración_Grupos_investigación.pdf",
      "media": { "driveFileId": "1GWcIZA6-tDS2i25g4sYMXKWRkzTtYIzN", "pdf": "1GWcIZA6-tDS2i25g4sYMXKWRkzTtYIzN", "thumbnail": "https://drive.google.com/thumbnail?id=1GWcIZA6-tDS2i25g4sYMXKWRkzTtYIzN&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Contextualizaci_n_Al_Andalus",
      "driveId": "1bR5kjsOKuX-TKCUf9bOP7rTZli026YXQ",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Contextualización_Al_Andalus",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Contextualización_Al_Andalus.pdf",
      "media": { "driveFileId": "1bR5kjsOKuX-TKCUf9bOP7rTZli026YXQ", "pdf": "1bR5kjsOKuX-TKCUf9bOP7rTZli026YXQ", "thumbnail": "https://drive.google.com/thumbnail?id=1bR5kjsOKuX-TKCUf9bOP7rTZli026YXQ&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Contextualizaci_n_Herencia__rabep",
      "driveId": "1jG0KIWoq9NPiXI5SX8yhjavAf5aJU8LK",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Contextualización_Herencia_Árabepdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Contextualización_Herencia_Árabepdf.pdf",
      "media": { "driveFileId": "1jG0KIWoq9NPiXI5SX8yhjavAf5aJU8LK", "pdf": "1jG0KIWoq9NPiXI5SX8yhjavAf5aJU8LK", "thumbnail": "https://drive.google.com/thumbnail?id=1jG0KIWoq9NPiXI5SX8yhjavAf5aJU8LK&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Contextualizaci_n_Servicio_porla",
      "driveId": "1xr1c5Ibf2DxV3lA90KYiaZI-u6Dn7fFk",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Contextualización_Servicio_porla_historia",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Contextualización_Servicio_porla_historia.pdf",
      "media": { "driveFileId": "1xr1c5Ibf2DxV3lA90KYiaZI-u6Dn7fFk", "pdf": "1xr1c5Ibf2DxV3lA90KYiaZI-u6Dn7fFk", "thumbnail": "https://drive.google.com/thumbnail?id=1xr1c5Ibf2DxV3lA90KYiaZI-u6Dn7fFk&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_ESCANDALLO_COSTES_PLATOS_MUGARITZ",
      "driveId": "1-V5tUa6jiBRFemM9wpF0GO-7Hzq5ohNm",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_ESCANDALLO_COSTES_PLATOS_MUGARITZ",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_ESCANDALLO_COSTES_PLATOS_MUGARITZ.pdf",
      "media": { "driveFileId": "1-V5tUa6jiBRFemM9wpF0GO-7Hzq5ohNm", "pdf": "1-V5tUa6jiBRFemM9wpF0GO-7Hzq5ohNm", "thumbnail": "https://drive.google.com/thumbnail?id=1-V5tUa6jiBRFemM9wpF0GO-7Hzq5ohNm&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_EVENTO_MENU_BODA_MAITE_ION",
      "driveId": "1sdNgyVnvi70iMqDOCAIPs_y70vyGY7rw",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_EVENTO_MENU_BODA_MAITE_ION",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_EVENTO_MENU_BODA_MAITE_ION.pdf",
      "media": { "driveFileId": "1sdNgyVnvi70iMqDOCAIPs_y70vyGY7rw", "pdf": "1sdNgyVnvi70iMqDOCAIPs_y70vyGY7rw", "thumbnail": "https://drive.google.com/thumbnail?id=1sdNgyVnvi70iMqDOCAIPs_y70vyGY7rw&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_El_Agua_Los_T__s",
      "driveId": "1_Ey9vFLW9Z4QiRltcwtE9wUosOnhigs1",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_El_Agua_Los_Té_s",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_El_Agua_Los_Té_s.pdf",
      "media": { "driveFileId": "1_Ey9vFLW9Z4QiRltcwtE9wUosOnhigs1", "pdf": "1_Ey9vFLW9Z4QiRltcwtE9wUosOnhigs1", "thumbnail": "https://drive.google.com/thumbnail?id=1_Ey9vFLW9Z4QiRltcwtE9wUosOnhigs1&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_INULINA_CONTEXTUALIZACION",
      "driveId": "1nP5ph6SpEycx6M7OOiU26fPOyhOfhww9",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_INULINA_CONTEXTUALIZACION",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_INULINA_CONTEXTUALIZACION.pdf",
      "media": { "driveFileId": "1nP5ph6SpEycx6M7OOiU26fPOyhOfhww9", "pdf": "1nP5ph6SpEycx6M7OOiU26fPOyhOfhww9", "thumbnail": "https://drive.google.com/thumbnail?id=1nP5ph6SpEycx6M7OOiU26fPOyhOfhww9&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_INVESTIGACION_EXTRACCION_AZAFRAN",
      "driveId": "15CdsvlGpkMyiSsUEXXIQvtTaqt4m9572",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_INVESTIGACION_EXTRACCION_AZAFRAN",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_INVESTIGACION_EXTRACCION_AZAFRAN.pdf",
      "media": { "driveFileId": "15CdsvlGpkMyiSsUEXXIQvtTaqt4m9572", "pdf": "15CdsvlGpkMyiSsUEXXIQvtTaqt4m9572", "thumbnail": "https://drive.google.com/thumbnail?id=15CdsvlGpkMyiSsUEXXIQvtTaqt4m9572&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_LISTADO_BOTANICO_VEGETALES_FLORES",
      "driveId": "1Dp24VeM5sdFInBqLa48l-pB3gmSFlomh",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_LISTADO_BOTANICO_VEGETALES_FLORES",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_LISTADO_BOTANICO_VEGETALES_FLORES.pdf",
      "media": { "driveFileId": "1Dp24VeM5sdFInBqLa48l-pB3gmSFlomh", "pdf": "1Dp24VeM5sdFInBqLa48l-pB3gmSFlomh", "thumbnail": "https://drive.google.com/thumbnail?id=1Dp24VeM5sdFInBqLa48l-pB3gmSFlomh&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_La_Rega___Contextualizaci_n",
      "driveId": "1gi1qJGhZyJm8lMPThB8LQKKlBdb_XDWk",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_La_Regañá_Contextualización",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_La_Regañá_Contextualización.pdf",
      "media": { "driveFileId": "1gi1qJGhZyJm8lMPThB8LQKKlBdb_XDWk", "pdf": "1gi1qJGhZyJm8lMPThB8LQKKlBdb_XDWk", "thumbnail": "https://drive.google.com/thumbnail?id=1gi1qJGhZyJm8lMPThB8LQKKlBdb_XDWk&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Listado_de_Restaurantes",
      "driveId": "15vzFEwjTMo5EHbkXtFSWnq3EO8Gl1Ayr",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Listado_de_Restaurantes",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Listado_de_Restaurantes.Pdf",
      "media": { "driveFileId": "15vzFEwjTMo5EHbkXtFSWnq3EO8Gl1Ayr", "pdf": "15vzFEwjTMo5EHbkXtFSWnq3EO8Gl1Ayr", "thumbnail": "https://drive.google.com/thumbnail?id=15vzFEwjTMo5EHbkXtFSWnq3EO8Gl1Ayr&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Noor_Vajilla",
      "driveId": "1caEK11Wrgbd2x4rDolZfqBKtOc31Vhpp",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Noor_Vajilla",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Noor_Vajilla.pdf",
      "media": { "driveFileId": "1caEK11Wrgbd2x4rDolZfqBKtOc31Vhpp", "pdf": "1caEK11Wrgbd2x4rDolZfqBKtOc31Vhpp", "thumbnail": "https://drive.google.com/thumbnail?id=1caEK11Wrgbd2x4rDolZfqBKtOc31Vhpp&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_PERFIL_PACO_MORALES_NORDIC_CHALLE",
      "driveId": "19ULBCa4tkf-_hs3-fMep2fMXAyrhZ9Tl",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_PERFIL_PACO_MORALES_NORDIC_CHALLENGE",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_PERFIL_PACO_MORALES_NORDIC_CHALLENGE.pdf",
      "media": { "driveFileId": "19ULBCa4tkf-_hs3-fMep2fMXAyrhZ9Tl", "pdf": "19ULBCa4tkf-_hs3-fMep2fMXAyrhZ9Tl", "thumbnail": "https://drive.google.com/thumbnail?id=19ULBCa4tkf-_hs3-fMep2fMXAyrhZ9Tl&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Primeros_Ingredientes_Al_Andalus",
      "driveId": "1fWJR279w7sJnk4806ji5-ayjN4ItkpeL",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Primeros_Ingredientes_Al_Andalus",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Primeros_Ingredientes_Al_Andalus.pdf",
      "media": { "driveFileId": "1fWJR279w7sJnk4806ji5-ayjN4ItkpeL", "pdf": "1fWJR279w7sJnk4806ji5-ayjN4ItkpeL", "thumbnail": "https://drive.google.com/thumbnail?id=1fWJR279w7sJnk4806ji5-ayjN4ItkpeL&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_RECETARIO_DULCE_VANIDAD_Y_PUDING",
      "driveId": "1ywnI-E0X559vo50jwrlLl_Zl9NHSp9Ld",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_RECETARIO_DULCE_VANIDAD_Y_PUDING",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_RECETARIO_DULCE_VANIDAD_Y_PUDING.pdf",
      "media": { "driveFileId": "1ywnI-E0X559vo50jwrlLl_Zl9NHSp9Ld", "pdf": "1ywnI-E0X559vo50jwrlLl_Zl9NHSp9Ld", "thumbnail": "https://drive.google.com/thumbnail?id=1ywnI-E0X559vo50jwrlLl_Zl9NHSp9Ld&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Recetas_Varias",
      "driveId": "1cgaMxmbeNrSTnjVSvgVzx6pnVVlOh_SM",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Recetas_Varias",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Recetas_Varias.pdf",
      "media": { "driveFileId": "1cgaMxmbeNrSTnjVSvgVzx6pnVVlOh_SM", "pdf": "1cgaMxmbeNrSTnjVSvgVzx6pnVVlOh_SM", "thumbnail": "https://drive.google.com/thumbnail?id=1cgaMxmbeNrSTnjVSvgVzx6pnVVlOh_SM&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Siglo_Xl_Almor_vides_Contextualiz",
      "driveId": "1T8wCq38gqIeY-OxAsAfHQuHS-aMTmxp-",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Siglo_Xl_Almorávides_Contextualización",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Siglo_Xl_Almorávides_Contextualización.pdf",
      "media": { "driveFileId": "1T8wCq38gqIeY-OxAsAfHQuHS-aMTmxp-", "pdf": "1T8wCq38gqIeY-OxAsAfHQuHS-aMTmxp-", "thumbnail": "https://drive.google.com/thumbnail?id=1T8wCq38gqIeY-OxAsAfHQuHS-aMTmxp-&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Siglo_Xl_Almor_vides_Contextualiz",
      "driveId": "11ZWUtbTvRW4xi_DGRCr7uhSEG6lte1IPGudFGxGsZ7s",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Siglo_Xl_Almorávides_Contextualización.pdf.gdoc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Siglo_Xl_Almorávides_Contextualización.pdf.gdoc",
      "media": { "driveFileId": "11ZWUtbTvRW4xi_DGRCr7uhSEG6lte1IPGudFGxGsZ7s", "pdf": "11ZWUtbTvRW4xi_DGRCr7uhSEG6lte1IPGudFGxGsZ7s", "thumbnail": "https://drive.google.com/thumbnail?id=11ZWUtbTvRW4xi_DGRCr7uhSEG6lte1IPGudFGxGsZ7s&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_Siglo_Xl_Men__Wusul",
      "driveId": "1cpCAo6qQOZFbmT8Fr-WdDmHXkinXW_aH",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_Siglo_Xl_Menú_Wusul",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_Siglo_Xl_Menú_Wusul.pdf",
      "media": { "driveFileId": "1cpCAo6qQOZFbmT8Fr-WdDmHXkinXW_aH", "pdf": "1cpCAo6qQOZFbmT8Fr-WdDmHXkinXW_aH", "thumbnail": "https://drive.google.com/thumbnail?id=1cpCAo6qQOZFbmT8Fr-WdDmHXkinXW_aH&sz=w1000" }
    },
    {
      "id": "local-ctx-06_DIG_contextualizaci_n_Espelta_pdf",
      "driveId": "1c9oz7GvqTcILXlw8XtosCpTNkXF-zxsT",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_DIG_contextualización_Espelta.pdf.",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_DIG_contextualización_Espelta.pdf..pdf",
      "media": { "driveFileId": "1c9oz7GvqTcILXlw8XtosCpTNkXF-zxsT", "pdf": "1c9oz7GvqTcILXlw8XtosCpTNkXF-zxsT", "thumbnail": "https://drive.google.com/thumbnail?id=1c9oz7GvqTcILXlw8XtosCpTNkXF-zxsT&sz=w1000" }
    },
    {
      "id": "local-ctx-06_FICHA_TECNICA_GLUCIDOS_MUCILAGOS",
      "driveId": "1f2wfZwDdR1Mj9Lj34nloBY_WG1AmCD3x",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "06_FICHA_TECNICA_GLUCIDOS_MUCILAGOS",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/06_FICHA_TECNICA_GLUCIDOS_MUCILAGOS.pdf",
      "media": { "driveFileId": "1f2wfZwDdR1Mj9Lj34nloBY_WG1AmCD3x", "pdf": "1f2wfZwDdR1Mj9Lj34nloBY_WG1AmCD3x", "thumbnail": "https://drive.google.com/thumbnail?id=1f2wfZwDdR1Mj9Lj34nloBY_WG1AmCD3x&sz=w1000" }
    },
    {
      "id": "local-ctx-Adobe_Scan_07_mar_2026__6",
      "driveId": "1ISnrnVNuIsdC4EU1vqSnnpJGTqwyW6FC",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "Adobe Scan 07 mar 2026 (6)",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/Adobe Scan 07 mar 2026 (6).pdf",
      "media": { "driveFileId": "1ISnrnVNuIsdC4EU1vqSnnpJGTqwyW6FC", "pdf": "1ISnrnVNuIsdC4EU1vqSnnpJGTqwyW6FC", "thumbnail": "https://drive.google.com/thumbnail?id=1ISnrnVNuIsdC4EU1vqSnnpJGTqwyW6FC&sz=w1000" }
    },
    {
      "id": "local-ctx-Adobe_Scan_10_mar_2026__2",
      "driveId": "1V63ECTaCxXYVYgDCLQaaZKkff-syUSQ1",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "Adobe Scan 10 mar 2026 (2)",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/Adobe Scan 10 mar 2026 (2).pdf",
      "media": { "driveFileId": "1V63ECTaCxXYVYgDCLQaaZKkff-syUSQ1", "pdf": "1V63ECTaCxXYVYgDCLQaaZKkff-syUSQ1", "thumbnail": "https://drive.google.com/thumbnail?id=1V63ECTaCxXYVYgDCLQaaZKkff-syUSQ1&sz=w1000" }
    },
    {
      "id": "local-ctx-TRANSCRIPT_06_DIG_Siglo_Xl_Almor_vides_C",
      "driveId": "1pAgEZUBF_xxW84cyOKeYw1xj2Zm2pnZb",
      "category": "06_PRODUCTO_CONTEXTUALIZACION",
      "title": "TRANSCRIPT_06_DIG_Siglo_Xl_Almorávides_Contextualización",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": ["Contextualización", "Producto", "06_PRODUCTO_CONTEXTUALIZACION"],
      "regions": ["QURTUBA"],
      "coordinates": [37.8847, -4.7791],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/06_PRODUCTO_CONTEXTUALIZACION/TRANSCRIPT_06_DIG_Siglo_Xl_Almorávides_Contextualización.docx",
      "media": { "driveFileId": "1pAgEZUBF_xxW84cyOKeYw1xj2Zm2pnZb", "pdf": "1pAgEZUBF_xxW84cyOKeYw1xj2Zm2pnZb", "thumbnail": "https://drive.google.com/thumbnail?id=1pAgEZUBF_xxW84cyOKeYw1xj2Zm2pnZb&sz=w1000" }
    }
  ,
    {
      "id": "local-07_cd_vid_digital-07_VID_84_Tex__Lyo_Ing_mp4",
      "driveId": "14EQlZ1sOWvZChE3TWq7ojh3gsb_HddiV",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_84_Tex _Lyo_Ing.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_84_Tex _Lyo_Ing.mp4",
      "media": {
            "driveFileId": "14EQlZ1sOWvZChE3TWq7ojh3gsb_HddiV",
            "pdf": "14EQlZ1sOWvZChE3TWq7ojh3gsb_HddiV",
            "thumbnail": "https://drive.google.com/thumbnail?id=14EQlZ1sOWvZChE3TWq7ojh3gsb_HddiV&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_HotelFerrero_Jornada_HD_mp4__mp4",
      "driveId": "1b1bg3qquJYkiHE2L7KVbRRakirqRFy1t",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_HotelFerrero_Jornada_HD_mp4..mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_HotelFerrero_Jornada_HD_mp4..mp4",
      "media": {
            "driveFileId": "1b1bg3qquJYkiHE2L7KVbRRakirqRFy1t",
            "pdf": "1b1bg3qquJYkiHE2L7KVbRRakirqRFy1t",
            "thumbnail": "https://drive.google.com/thumbnail?id=1b1bg3qquJYkiHE2L7KVbRRakirqRFy1t&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_HotelFerrero_Manzana_al_horno_HD_mp4__mp4",
      "driveId": "1FcPcv8JDRKWoTabXI_N2FCpPPf4KrItz",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_HotelFerrero_Manzana_al_horno_HD_mp4..mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_HotelFerrero_Manzana_al_horno_HD_mp4..mp4",
      "media": {
            "driveFileId": "1FcPcv8JDRKWoTabXI_N2FCpPPf4KrItz",
            "pdf": "1FcPcv8JDRKWoTabXI_N2FCpPPf4KrItz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FcPcv8JDRKWoTabXI_N2FCpPPf4KrItz&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_HotelFerrero_Mollejas_de_Cordero_HD2_mp4_mp4",
      "driveId": "1YBwnzNB8UohRZdzSZYGYFQrFtgmzgqZY",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_HotelFerrero_Mollejas_de_Cordero_HD2_mp4.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_HotelFerrero_Mollejas_de_Cordero_HD2_mp4.mp4",
      "media": {
            "driveFileId": "1YBwnzNB8UohRZdzSZYGYFQrFtgmzgqZY",
            "pdf": "1YBwnzNB8UohRZdzSZYGYFQrFtgmzgqZY",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YBwnzNB8UohRZdzSZYGYFQrFtgmzgqZY&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_HotelFerrero_Mollejas_de_Cordero_HD_mp4__mp4",
      "driveId": "1MaZge4cLfP9_KZOTOX8Zxq6PIYlT-LsC",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_HotelFerrero_Mollejas_de_Cordero_HD_mp4..mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_HotelFerrero_Mollejas_de_Cordero_HD_mp4..mp4",
      "media": {
            "driveFileId": "1MaZge4cLfP9_KZOTOX8Zxq6PIYlT-LsC",
            "pdf": "1MaZge4cLfP9_KZOTOX8Zxq6PIYlT-LsC",
            "thumbnail": "https://drive.google.com/thumbnail?id=1MaZge4cLfP9_KZOTOX8Zxq6PIYlT-LsC&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Hotel_Ferrero_Pureza_Creatividad_Naturalism_HD_mp4__1__mp4",
      "driveId": "1KlocxnYE-9tG9AH4yOUGjlxLociD8skJ",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Hotel_Ferrero_Pureza_Creatividad_Naturalism_HD_mp4 (1).mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Hotel_Ferrero_Pureza_Creatividad_Naturalism_HD_mp4 (1).mp4",
      "media": {
            "driveFileId": "1KlocxnYE-9tG9AH4yOUGjlxLociD8skJ",
            "pdf": "1KlocxnYE-9tG9AH4yOUGjlxLociD8skJ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KlocxnYE-9tG9AH4yOUGjlxLociD8skJ&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Hotel_Hospes_Senzone_Madrid__mp4",
      "driveId": "1mYl__Kjyz9XxcrxuG55W7t_92rxCQx8r",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Hotel_Hospes_Senzone_Madrid .mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Hotel_Hospes_Senzone_Madrid .mp4",
      "media": {
            "driveFileId": "1mYl__Kjyz9XxcrxuG55W7t_92rxCQx8r",
            "pdf": "1mYl__Kjyz9XxcrxuG55W7t_92rxCQx8r",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mYl__Kjyz9XxcrxuG55W7t_92rxCQx8r&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Hotel_ferrero_internet_mp4",
      "driveId": "1gO6WO_85v_DEvoDj-yh9tJFoTQ1KGDZR",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Hotel_ferrero_internet.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Hotel_ferrero_internet.mp4",
      "media": {
            "driveFileId": "1gO6WO_85v_DEvoDj-yh9tJFoTQ1KGDZR",
            "pdf": "1gO6WO_85v_DEvoDj-yh9tJFoTQ1KGDZR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gO6WO_85v_DEvoDj-yh9tJFoTQ1KGDZR&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Madrid_Fusion_2012_mp4",
      "driveId": "1AGZDLiYEtjrwP5L9kE37OuNZb2eR3DAm",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Madrid_Fusion_2012.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Madrid_Fusion_2012.mp4",
      "media": {
            "driveFileId": "1AGZDLiYEtjrwP5L9kE37OuNZb2eR3DAm",
            "pdf": "1AGZDLiYEtjrwP5L9kE37OuNZb2eR3DAm",
            "thumbnail": "https://drive.google.com/thumbnail?id=1AGZDLiYEtjrwP5L9kE37OuNZb2eR3DAm&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Madrid_Fusi_n_Tuberculos_mp4",
      "driveId": "16eruMhz71H8-Wq51rzkg0BcQO0GXwf2z",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Madrid_Fusión_Tuberculos.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Madrid_Fusión_Tuberculos.mp4",
      "media": {
            "driveFileId": "16eruMhz71H8-Wq51rzkg0BcQO0GXwf2z",
            "pdf": "16eruMhz71H8-Wq51rzkg0BcQO0GXwf2z",
            "thumbnail": "https://drive.google.com/thumbnail?id=16eruMhz71H8-Wq51rzkg0BcQO0GXwf2z&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Memeoria_visual_algarbia_mp4",
      "driveId": "1pE8jIveoNe9rLMTiMI1DmRbBvA-6uJ2U",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Memeoria_visual_algarbia.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Memeoria_visual_algarbia.mp4",
      "media": {
            "driveFileId": "1pE8jIveoNe9rLMTiMI1DmRbBvA-6uJ2U",
            "pdf": "1pE8jIveoNe9rLMTiMI1DmRbBvA-6uJ2U",
            "thumbnail": "https://drive.google.com/thumbnail?id=1pE8jIveoNe9rLMTiMI1DmRbBvA-6uJ2U&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Paco_Morales_Al_trapo_mp4",
      "driveId": "15KBWZV_NhfaP3URg33mWrQV19018SvXU",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Paco_Morales_Al_trapo.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Paco_Morales_Al_trapo.mp4",
      "media": {
            "driveFileId": "15KBWZV_NhfaP3URg33mWrQV19018SvXU",
            "pdf": "15KBWZV_NhfaP3URg33mWrQV19018SvXU",
            "thumbnail": "https://drive.google.com/thumbnail?id=15KBWZV_NhfaP3URg33mWrQV19018SvXU&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_Tapas__Y__Barras__Cordoba_mp4",
      "driveId": "1XzMVmbTUTRcbR_G6FT4I4M19atxknb9Y",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_Tapas _Y _Barras _Cordoba.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Tapas _Y _Barras _Cordoba.mp4",
      "media": {
            "driveFileId": "1XzMVmbTUTRcbR_G6FT4I4M19atxknb9Y",
            "pdf": "1XzMVmbTUTRcbR_G6FT4I4M19atxknb9Y",
            "thumbnail": "https://drive.google.com/thumbnail?id=1XzMVmbTUTRcbR_G6FT4I4M19atxknb9Y&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-07_VID_madrid_fusion_2012_mp4",
      "driveId": "1HQ3F4uG7ZYZpr3d7ksZbxphBK-BDsNqO",
      "category": "07_CD_VID_Digital",
      "title": "07_VID_madrid fusion_2012.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_madrid fusion_2012.mp4",
      "media": {
            "driveFileId": "1HQ3F4uG7ZYZpr3d7ksZbxphBK-BDsNqO",
            "pdf": "1HQ3F4uG7ZYZpr3d7ksZbxphBK-BDsNqO",
            "thumbnail": "https://drive.google.com/thumbnail?id=1HQ3F4uG7ZYZpr3d7ksZbxphBK-BDsNqO&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-Aduriz_mp4",
      "driveId": "1AqN3mz6yV-QZpxxh10S9QrU_r1Hkbozz",
      "category": "07_CD_VID_Digital",
      "title": "Aduriz.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/Aduriz.mp4",
      "media": {
            "driveFileId": "1AqN3mz6yV-QZpxxh10S9QrU_r1Hkbozz",
            "pdf": "1AqN3mz6yV-QZpxxh10S9QrU_r1Hkbozz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1AqN3mz6yV-QZpxxh10S9QrU_r1Hkbozz&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-Madinat_mp4",
      "driveId": "1zPkThh1Y7B3iNJ6x3ZNb3mRbhEmEGjhl",
      "category": "07_CD_VID_Digital",
      "title": "Madinat.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/Madinat.mp4",
      "media": {
            "driveFileId": "1zPkThh1Y7B3iNJ6x3ZNb3mRbhEmEGjhl",
            "pdf": "1zPkThh1Y7B3iNJ6x3ZNb3mRbhEmEGjhl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zPkThh1Y7B3iNJ6x3ZNb3mRbhEmEGjhl&sz=w1000"
      }
},
    {
      "id": "local-07_cd_vid_digital-Paco_Torreblanca_mp4",
      "driveId": "1WRxXUx8fsXwdhlLsxX2voPmteWKEcHSS",
      "category": "07_CD_VID_Digital",
      "title": "Paco Torreblanca.mp4",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/Paco Torreblanca.mp4",
      "media": {
            "driveFileId": "1WRxXUx8fsXwdhlLsxX2voPmteWKEcHSS",
            "pdf": "1WRxXUx8fsXwdhlLsxX2voPmteWKEcHSS",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WRxXUx8fsXwdhlLsxX2voPmteWKEcHSS&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__1__pdf",
      "driveId": "1aU69Xyqbc9riR8y1Z0dO36ITt2NFVPIo",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (1).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (1).pdf",
      "media": {
            "driveFileId": "1aU69Xyqbc9riR8y1Z0dO36ITt2NFVPIo",
            "pdf": "1aU69Xyqbc9riR8y1Z0dO36ITt2NFVPIo",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aU69Xyqbc9riR8y1Z0dO36ITt2NFVPIo&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__10__pdf",
      "driveId": "1Y9ktOpPTcIazMm627w4C9BuX2EsnodhW",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (10).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (10).pdf",
      "media": {
            "driveFileId": "1Y9ktOpPTcIazMm627w4C9BuX2EsnodhW",
            "pdf": "1Y9ktOpPTcIazMm627w4C9BuX2EsnodhW",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Y9ktOpPTcIazMm627w4C9BuX2EsnodhW&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__11__pdf",
      "driveId": "1RPpuCX3rE6O0E3YIzw1QMJPXVqPH9-ZN",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (11).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (11).pdf",
      "media": {
            "driveFileId": "1RPpuCX3rE6O0E3YIzw1QMJPXVqPH9-ZN",
            "pdf": "1RPpuCX3rE6O0E3YIzw1QMJPXVqPH9-ZN",
            "thumbnail": "https://drive.google.com/thumbnail?id=1RPpuCX3rE6O0E3YIzw1QMJPXVqPH9-ZN&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__12__pdf",
      "driveId": "1Zk8yct6NA5MbQBbPgZ6VgoGD7VSJU0_1",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (12).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (12).pdf",
      "media": {
            "driveFileId": "1Zk8yct6NA5MbQBbPgZ6VgoGD7VSJU0_1",
            "pdf": "1Zk8yct6NA5MbQBbPgZ6VgoGD7VSJU0_1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Zk8yct6NA5MbQBbPgZ6VgoGD7VSJU0_1&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__13__pdf",
      "driveId": "1eWUnzg3dICLsWKHLJ9OyCWa3g2eUCOUR",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (13).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (13).pdf",
      "media": {
            "driveFileId": "1eWUnzg3dICLsWKHLJ9OyCWa3g2eUCOUR",
            "pdf": "1eWUnzg3dICLsWKHLJ9OyCWa3g2eUCOUR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eWUnzg3dICLsWKHLJ9OyCWa3g2eUCOUR&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__14__pdf",
      "driveId": "1DWYtYUm3krs2cB-TU48wp5yyeRUj8IWs",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (14).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (14).pdf",
      "media": {
            "driveFileId": "1DWYtYUm3krs2cB-TU48wp5yyeRUj8IWs",
            "pdf": "1DWYtYUm3krs2cB-TU48wp5yyeRUj8IWs",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DWYtYUm3krs2cB-TU48wp5yyeRUj8IWs&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__15__pdf",
      "driveId": "1WBmuSdXAquKM9MzqEJNk3K9aTZR2vA54",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (15).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (15).pdf",
      "media": {
            "driveFileId": "1WBmuSdXAquKM9MzqEJNk3K9aTZR2vA54",
            "pdf": "1WBmuSdXAquKM9MzqEJNk3K9aTZR2vA54",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WBmuSdXAquKM9MzqEJNk3K9aTZR2vA54&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__16__pdf",
      "driveId": "1DoylV12Dmk33Xn-Nug3xtKaggL1lbfT_",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (16).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (16).pdf",
      "media": {
            "driveFileId": "1DoylV12Dmk33Xn-Nug3xtKaggL1lbfT_",
            "pdf": "1DoylV12Dmk33Xn-Nug3xtKaggL1lbfT_",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DoylV12Dmk33Xn-Nug3xtKaggL1lbfT_&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__17__pdf",
      "driveId": "1HS9F3Yg9ar2B-Ry3ANaS6f88K3H60q0S",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (17).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (17).pdf",
      "media": {
            "driveFileId": "1HS9F3Yg9ar2B-Ry3ANaS6f88K3H60q0S",
            "pdf": "1HS9F3Yg9ar2B-Ry3ANaS6f88K3H60q0S",
            "thumbnail": "https://drive.google.com/thumbnail?id=1HS9F3Yg9ar2B-Ry3ANaS6f88K3H60q0S&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__18__pdf",
      "driveId": "1U5Mu--L561nc-EDy3NJzDoXzMWG4Mbn9",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (18).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (18).pdf",
      "media": {
            "driveFileId": "1U5Mu--L561nc-EDy3NJzDoXzMWG4Mbn9",
            "pdf": "1U5Mu--L561nc-EDy3NJzDoXzMWG4Mbn9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1U5Mu--L561nc-EDy3NJzDoXzMWG4Mbn9&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__19__pdf",
      "driveId": "1ad2XOfRmAWdypuwdWUR5jUgfXtujzSmx",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (19).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (19).pdf",
      "media": {
            "driveFileId": "1ad2XOfRmAWdypuwdWUR5jUgfXtujzSmx",
            "pdf": "1ad2XOfRmAWdypuwdWUR5jUgfXtujzSmx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ad2XOfRmAWdypuwdWUR5jUgfXtujzSmx&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__2__pdf",
      "driveId": "1rIFw6mk3_1WRQuTfat29Hn1HzS-dNhhr",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (2).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (2).pdf",
      "media": {
            "driveFileId": "1rIFw6mk3_1WRQuTfat29Hn1HzS-dNhhr",
            "pdf": "1rIFw6mk3_1WRQuTfat29Hn1HzS-dNhhr",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rIFw6mk3_1WRQuTfat29Hn1HzS-dNhhr&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__20__pdf",
      "driveId": "1ylgfooM28lJGwQuK9yakY9gEyb9zXb5D",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (20).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (20).pdf",
      "media": {
            "driveFileId": "1ylgfooM28lJGwQuK9yakY9gEyb9zXb5D",
            "pdf": "1ylgfooM28lJGwQuK9yakY9gEyb9zXb5D",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ylgfooM28lJGwQuK9yakY9gEyb9zXb5D&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__21__pdf",
      "driveId": "1TmF5ziJ0xv9yuHR2d02YT9Dws6nCEqEm",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (21).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (21).pdf",
      "media": {
            "driveFileId": "1TmF5ziJ0xv9yuHR2d02YT9Dws6nCEqEm",
            "pdf": "1TmF5ziJ0xv9yuHR2d02YT9Dws6nCEqEm",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TmF5ziJ0xv9yuHR2d02YT9Dws6nCEqEm&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__22__pdf",
      "driveId": "14fPXt38u3jWAto_jTjNUTJg8p7dJ479R",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (22).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (22).pdf",
      "media": {
            "driveFileId": "14fPXt38u3jWAto_jTjNUTJg8p7dJ479R",
            "pdf": "14fPXt38u3jWAto_jTjNUTJg8p7dJ479R",
            "thumbnail": "https://drive.google.com/thumbnail?id=14fPXt38u3jWAto_jTjNUTJg8p7dJ479R&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__23__pdf",
      "driveId": "1Jxv7L5smhFIYUw1B0JT2W_vXtEO5rTes",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (23).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (23).pdf",
      "media": {
            "driveFileId": "1Jxv7L5smhFIYUw1B0JT2W_vXtEO5rTes",
            "pdf": "1Jxv7L5smhFIYUw1B0JT2W_vXtEO5rTes",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Jxv7L5smhFIYUw1B0JT2W_vXtEO5rTes&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__24__pdf",
      "driveId": "1WIa_1Ga-OSJwMyHzpiBYQjAEGRalIxPV",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (24).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (24).pdf",
      "media": {
            "driveFileId": "1WIa_1Ga-OSJwMyHzpiBYQjAEGRalIxPV",
            "pdf": "1WIa_1Ga-OSJwMyHzpiBYQjAEGRalIxPV",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WIa_1Ga-OSJwMyHzpiBYQjAEGRalIxPV&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__25__pdf",
      "driveId": "1oq9T95LHweqJgCb4ph_DtNhSjDyX5sd-",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (25).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (25).pdf",
      "media": {
            "driveFileId": "1oq9T95LHweqJgCb4ph_DtNhSjDyX5sd-",
            "pdf": "1oq9T95LHweqJgCb4ph_DtNhSjDyX5sd-",
            "thumbnail": "https://drive.google.com/thumbnail?id=1oq9T95LHweqJgCb4ph_DtNhSjDyX5sd-&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__26__pdf",
      "driveId": "1psxvtuRZ6hKP_7Yh73lEmte45aXvbCT4",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (26).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (26).pdf",
      "media": {
            "driveFileId": "1psxvtuRZ6hKP_7Yh73lEmte45aXvbCT4",
            "pdf": "1psxvtuRZ6hKP_7Yh73lEmte45aXvbCT4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1psxvtuRZ6hKP_7Yh73lEmte45aXvbCT4&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__27__pdf",
      "driveId": "1Eaqy1wQXIrzn2py2IGRVuzVhIZ10Unfc",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (27).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (27).pdf",
      "media": {
            "driveFileId": "1Eaqy1wQXIrzn2py2IGRVuzVhIZ10Unfc",
            "pdf": "1Eaqy1wQXIrzn2py2IGRVuzVhIZ10Unfc",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Eaqy1wQXIrzn2py2IGRVuzVhIZ10Unfc&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__3__pdf",
      "driveId": "1QDdEzQ9QqkLbyz0MUHKJ-m0PV1gva4rK",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (3).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (3).pdf",
      "media": {
            "driveFileId": "1QDdEzQ9QqkLbyz0MUHKJ-m0PV1gva4rK",
            "pdf": "1QDdEzQ9QqkLbyz0MUHKJ-m0PV1gva4rK",
            "thumbnail": "https://drive.google.com/thumbnail?id=1QDdEzQ9QqkLbyz0MUHKJ-m0PV1gva4rK&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__4__pdf",
      "driveId": "1eqIQ4AHSwYXUjANGl9f-9bC7ep9qfWmv",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (4).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (4).pdf",
      "media": {
            "driveFileId": "1eqIQ4AHSwYXUjANGl9f-9bC7ep9qfWmv",
            "pdf": "1eqIQ4AHSwYXUjANGl9f-9bC7ep9qfWmv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eqIQ4AHSwYXUjANGl9f-9bC7ep9qfWmv&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__5__pdf",
      "driveId": "1Bfhz3ooEuI5EZc4Zz_jNBG94edjul3VX",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (5).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (5).pdf",
      "media": {
            "driveFileId": "1Bfhz3ooEuI5EZc4Zz_jNBG94edjul3VX",
            "pdf": "1Bfhz3ooEuI5EZc4Zz_jNBG94edjul3VX",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Bfhz3ooEuI5EZc4Zz_jNBG94edjul3VX&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__6__pdf",
      "driveId": "1lsQefLgtRBrLoBVg91OcMBzzKiqdFB9v",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (6).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (6).pdf",
      "media": {
            "driveFileId": "1lsQefLgtRBrLoBVg91OcMBzzKiqdFB9v",
            "pdf": "1lsQefLgtRBrLoBVg91OcMBzzKiqdFB9v",
            "thumbnail": "https://drive.google.com/thumbnail?id=1lsQefLgtRBrLoBVg91OcMBzzKiqdFB9v&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__7__pdf",
      "driveId": "1f7kOQ2DTCSDf-YilidhcMEvtQYPFt-qa",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (7).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (7).pdf",
      "media": {
            "driveFileId": "1f7kOQ2DTCSDf-YilidhcMEvtQYPFt-qa",
            "pdf": "1f7kOQ2DTCSDf-YilidhcMEvtQYPFt-qa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1f7kOQ2DTCSDf-YilidhcMEvtQYPFt-qa&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__8__pdf",
      "driveId": "1rPZl_RyRQ70PqZFuyS5YrLspWI0_4Jq9",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (8).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (8).pdf",
      "media": {
            "driveFileId": "1rPZl_RyRQ70PqZFuyS5YrLspWI0_4Jq9",
            "pdf": "1rPZl_RyRQ70PqZFuyS5YrLspWI0_4Jq9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rPZl_RyRQ70PqZFuyS5YrLspWI0_4Jq9&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf__9__pdf",
      "driveId": "1SMcf9_8p7beu-gLATiN7StHHow4--y9j",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf (9).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf (9).pdf",
      "media": {
            "driveFileId": "1SMcf9_8p7beu-gLATiN7StHHow4--y9j",
            "pdf": "1SMcf9_8p7beu-gLATiN7StHHow4--y9j",
            "thumbnail": "https://drive.google.com/thumbnail?id=1SMcf9_8p7beu-gLATiN7StHHow4--y9j&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-_pdf_pdf",
      "driveId": "1cg0FSGaWHbt47KtQ6axmSIBVTeXTlrI1",
      "category": "10_CD_AUD_Fisico",
      "title": ".pdf.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/.pdf.pdf",
      "media": {
            "driveFileId": "1cg0FSGaWHbt47KtQ6axmSIBVTeXTlrI1",
            "pdf": "1cg0FSGaWHbt47KtQ6axmSIBVTeXTlrI1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1cg0FSGaWHbt47KtQ6axmSIBVTeXTlrI1&sz=w1000"
      }
},
    {
      "id": "local-10_cd_aud_fisico-Adobe_Scan_28_mar_2026__28__pdf",
      "driveId": "13Kaq64RTwlPohwRj2jSctpbPxMDjb3h5",
      "category": "10_CD_AUD_Fisico",
      "title": "Adobe Scan 28 mar 2026 (28).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "10_CD_AUD_Fisico",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/10_Artículos_Imagen/Adobe Scan 28 mar 2026 (28).pdf",
      "media": {
            "driveFileId": "13Kaq64RTwlPohwRj2jSctpbPxMDjb3h5",
            "pdf": "13Kaq64RTwlPohwRj2jSctpbPxMDjb3h5",
            "thumbnail": "https://drive.google.com/thumbnail?id=13Kaq64RTwlPohwRj2jSctpbPxMDjb3h5&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__13__pdf",
      "driveId": "1Ljtm1YesAgiUSZOmh0-l-z4Ei5hlC45Q",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (13).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (13).pdf",
      "media": {
            "driveFileId": "1Ljtm1YesAgiUSZOmh0-l-z4Ei5hlC45Q",
            "pdf": "1Ljtm1YesAgiUSZOmh0-l-z4Ei5hlC45Q",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Ljtm1YesAgiUSZOmh0-l-z4Ei5hlC45Q&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__14__pdf",
      "driveId": "1rqcddCLs2Vv6tOH0uJEAp3CmOTMTCXZZ",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (14).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (14).pdf",
      "media": {
            "driveFileId": "1rqcddCLs2Vv6tOH0uJEAp3CmOTMTCXZZ",
            "pdf": "1rqcddCLs2Vv6tOH0uJEAp3CmOTMTCXZZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rqcddCLs2Vv6tOH0uJEAp3CmOTMTCXZZ&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__15__pdf",
      "driveId": "15_48FAqQhsFkGL7Je8_MoWMcDvK6evL4",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (15).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (15).pdf",
      "media": {
            "driveFileId": "15_48FAqQhsFkGL7Je8_MoWMcDvK6evL4",
            "pdf": "15_48FAqQhsFkGL7Je8_MoWMcDvK6evL4",
            "thumbnail": "https://drive.google.com/thumbnail?id=15_48FAqQhsFkGL7Je8_MoWMcDvK6evL4&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__16__pdf",
      "driveId": "1bK8wgLiboRIIs7BFeAoRVrAQIYK2CFxa",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (16).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (16).pdf",
      "media": {
            "driveFileId": "1bK8wgLiboRIIs7BFeAoRVrAQIYK2CFxa",
            "pdf": "1bK8wgLiboRIIs7BFeAoRVrAQIYK2CFxa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1bK8wgLiboRIIs7BFeAoRVrAQIYK2CFxa&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__17__pdf",
      "driveId": "1JdR0JM-mTkXT9Q4TMGNQi0cCrSiLxv04",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (17).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (17).pdf",
      "media": {
            "driveFileId": "1JdR0JM-mTkXT9Q4TMGNQi0cCrSiLxv04",
            "pdf": "1JdR0JM-mTkXT9Q4TMGNQi0cCrSiLxv04",
            "thumbnail": "https://drive.google.com/thumbnail?id=1JdR0JM-mTkXT9Q4TMGNQi0cCrSiLxv04&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__18__pdf",
      "driveId": "1o3P1FteGZVww8ArRtwdVrQZ4WUUV-6sK",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (18).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (18).pdf",
      "media": {
            "driveFileId": "1o3P1FteGZVww8ArRtwdVrQZ4WUUV-6sK",
            "pdf": "1o3P1FteGZVww8ArRtwdVrQZ4WUUV-6sK",
            "thumbnail": "https://drive.google.com/thumbnail?id=1o3P1FteGZVww8ArRtwdVrQZ4WUUV-6sK&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__19__pdf",
      "driveId": "10yaFmlVNPVzRrKt1Hjj8FzNCNy4yRpEJ",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (19).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (19).pdf",
      "media": {
            "driveFileId": "10yaFmlVNPVzRrKt1Hjj8FzNCNy4yRpEJ",
            "pdf": "10yaFmlVNPVzRrKt1Hjj8FzNCNy4yRpEJ",
            "thumbnail": "https://drive.google.com/thumbnail?id=10yaFmlVNPVzRrKt1Hjj8FzNCNy4yRpEJ&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__20__pdf",
      "driveId": "1uJAFVVwI0W79Lyg5b-h2b28nYUQMTu7g",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (20).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (20).pdf",
      "media": {
            "driveFileId": "1uJAFVVwI0W79Lyg5b-h2b28nYUQMTu7g",
            "pdf": "1uJAFVVwI0W79Lyg5b-h2b28nYUQMTu7g",
            "thumbnail": "https://drive.google.com/thumbnail?id=1uJAFVVwI0W79Lyg5b-h2b28nYUQMTu7g&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__21__pdf",
      "driveId": "13ojr-bctJ0E7PGaNt75J09kS_JzQ_E24",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (21).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (21).pdf",
      "media": {
            "driveFileId": "13ojr-bctJ0E7PGaNt75J09kS_JzQ_E24",
            "pdf": "13ojr-bctJ0E7PGaNt75J09kS_JzQ_E24",
            "thumbnail": "https://drive.google.com/thumbnail?id=13ojr-bctJ0E7PGaNt75J09kS_JzQ_E24&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__22__pdf",
      "driveId": "1zXheYST8aqIlmnSPBq7TZCw7TfkuUqMP",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (22).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (22).pdf",
      "media": {
            "driveFileId": "1zXheYST8aqIlmnSPBq7TZCw7TfkuUqMP",
            "pdf": "1zXheYST8aqIlmnSPBq7TZCw7TfkuUqMP",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zXheYST8aqIlmnSPBq7TZCw7TfkuUqMP&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__23__pdf",
      "driveId": "1WATfDzpYR1PO1zy8d587iFtdrl6gINzg",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (23).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (23).pdf",
      "media": {
            "driveFileId": "1WATfDzpYR1PO1zy8d587iFtdrl6gINzg",
            "pdf": "1WATfDzpYR1PO1zy8d587iFtdrl6gINzg",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WATfDzpYR1PO1zy8d587iFtdrl6gINzg&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__24__pdf",
      "driveId": "1h2eWMgbE1_7ajEOYsDAQgef59o8pDSMa",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (24).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (24).pdf",
      "media": {
            "driveFileId": "1h2eWMgbE1_7ajEOYsDAQgef59o8pDSMa",
            "pdf": "1h2eWMgbE1_7ajEOYsDAQgef59o8pDSMa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1h2eWMgbE1_7ajEOYsDAQgef59o8pDSMa&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__25__pdf",
      "driveId": "1toRnk5RKRm2Fe4To9EAOvIdK2J8cbq8B",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (25).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (25).pdf",
      "media": {
            "driveFileId": "1toRnk5RKRm2Fe4To9EAOvIdK2J8cbq8B",
            "pdf": "1toRnk5RKRm2Fe4To9EAOvIdK2J8cbq8B",
            "thumbnail": "https://drive.google.com/thumbnail?id=1toRnk5RKRm2Fe4To9EAOvIdK2J8cbq8B&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__26__pdf",
      "driveId": "1SbhqfjCj1wDG68vzryHUmxj6Y_X_QyQ4",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (26).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (26).pdf",
      "media": {
            "driveFileId": "1SbhqfjCj1wDG68vzryHUmxj6Y_X_QyQ4",
            "pdf": "1SbhqfjCj1wDG68vzryHUmxj6Y_X_QyQ4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1SbhqfjCj1wDG68vzryHUmxj6Y_X_QyQ4&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__27__pdf",
      "driveId": "1N06xqVcEvpSHOkKnE8sGuzTs_tGrCOpP",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (27).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (27).pdf",
      "media": {
            "driveFileId": "1N06xqVcEvpSHOkKnE8sGuzTs_tGrCOpP",
            "pdf": "1N06xqVcEvpSHOkKnE8sGuzTs_tGrCOpP",
            "thumbnail": "https://drive.google.com/thumbnail?id=1N06xqVcEvpSHOkKnE8sGuzTs_tGrCOpP&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__28__pdf",
      "driveId": "12zB5E6ECrjGBlY25LHRl6buuSa1PyzoF",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (28).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (28).pdf",
      "media": {
            "driveFileId": "12zB5E6ECrjGBlY25LHRl6buuSa1PyzoF",
            "pdf": "12zB5E6ECrjGBlY25LHRl6buuSa1PyzoF",
            "thumbnail": "https://drive.google.com/thumbnail?id=12zB5E6ECrjGBlY25LHRl6buuSa1PyzoF&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__29__pdf",
      "driveId": "1v-eZ2Qd3D9s1A28FyU9Vlh9DmdtMxwR8",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (29).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (29).pdf",
      "media": {
            "driveFileId": "1v-eZ2Qd3D9s1A28FyU9Vlh9DmdtMxwR8",
            "pdf": "1v-eZ2Qd3D9s1A28FyU9Vlh9DmdtMxwR8",
            "thumbnail": "https://drive.google.com/thumbnail?id=1v-eZ2Qd3D9s1A28FyU9Vlh9DmdtMxwR8&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__30__pdf",
      "driveId": "1-lyRz-YF_NKRxoXGEsrlsF_xcM0ceHoo",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (30).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (30).pdf",
      "media": {
            "driveFileId": "1-lyRz-YF_NKRxoXGEsrlsF_xcM0ceHoo",
            "pdf": "1-lyRz-YF_NKRxoXGEsrlsF_xcM0ceHoo",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-lyRz-YF_NKRxoXGEsrlsF_xcM0ceHoo&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__31__pdf",
      "driveId": "1XtFS3YIUcZ0NQHe3EFsSJLx4oWEYxwDk",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (31).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (31).pdf",
      "media": {
            "driveFileId": "1XtFS3YIUcZ0NQHe3EFsSJLx4oWEYxwDk",
            "pdf": "1XtFS3YIUcZ0NQHe3EFsSJLx4oWEYxwDk",
            "thumbnail": "https://drive.google.com/thumbnail?id=1XtFS3YIUcZ0NQHe3EFsSJLx4oWEYxwDk&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__32__pdf",
      "driveId": "1uIrQ2cA1m6rhjVSYkfEI0cIsTTRnAA7y",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (32).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (32).pdf",
      "media": {
            "driveFileId": "1uIrQ2cA1m6rhjVSYkfEI0cIsTTRnAA7y",
            "pdf": "1uIrQ2cA1m6rhjVSYkfEI0cIsTTRnAA7y",
            "thumbnail": "https://drive.google.com/thumbnail?id=1uIrQ2cA1m6rhjVSYkfEI0cIsTTRnAA7y&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__33__pdf",
      "driveId": "10XZhw7bs6f-0Ah79wBOtceaHVutw1SxP",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (33).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (33).pdf",
      "media": {
            "driveFileId": "10XZhw7bs6f-0Ah79wBOtceaHVutw1SxP",
            "pdf": "10XZhw7bs6f-0Ah79wBOtceaHVutw1SxP",
            "thumbnail": "https://drive.google.com/thumbnail?id=10XZhw7bs6f-0Ah79wBOtceaHVutw1SxP&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__34__pdf",
      "driveId": "1g0_ZNi4MBHOuO1PEKHK35MNlZQNg_JoM",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (34).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (34).pdf",
      "media": {
            "driveFileId": "1g0_ZNi4MBHOuO1PEKHK35MNlZQNg_JoM",
            "pdf": "1g0_ZNi4MBHOuO1PEKHK35MNlZQNg_JoM",
            "thumbnail": "https://drive.google.com/thumbnail?id=1g0_ZNi4MBHOuO1PEKHK35MNlZQNg_JoM&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__35__pdf",
      "driveId": "1KioN_som1TI968s8qBkYZwVFXjatNKg7",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (35).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (35).pdf",
      "media": {
            "driveFileId": "1KioN_som1TI968s8qBkYZwVFXjatNKg7",
            "pdf": "1KioN_som1TI968s8qBkYZwVFXjatNKg7",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KioN_som1TI968s8qBkYZwVFXjatNKg7&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__36__pdf",
      "driveId": "18Ti1tL5ZSur8Vatbb3VKL_Qw5RRA-GHK",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (36).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (36).pdf",
      "media": {
            "driveFileId": "18Ti1tL5ZSur8Vatbb3VKL_Qw5RRA-GHK",
            "pdf": "18Ti1tL5ZSur8Vatbb3VKL_Qw5RRA-GHK",
            "thumbnail": "https://drive.google.com/thumbnail?id=18Ti1tL5ZSur8Vatbb3VKL_Qw5RRA-GHK&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__37__pdf",
      "driveId": "1VjG64sPkpL_WWnTymjbcypOK-61RuS4m",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (37).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (37).pdf",
      "media": {
            "driveFileId": "1VjG64sPkpL_WWnTymjbcypOK-61RuS4m",
            "pdf": "1VjG64sPkpL_WWnTymjbcypOK-61RuS4m",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VjG64sPkpL_WWnTymjbcypOK-61RuS4m&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__38__pdf",
      "driveId": "1H4f2S3Ok2b6rF7y9MfqNOSlF-56t25f9",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (38).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (38).pdf",
      "media": {
            "driveFileId": "1H4f2S3Ok2b6rF7y9MfqNOSlF-56t25f9",
            "pdf": "1H4f2S3Ok2b6rF7y9MfqNOSlF-56t25f9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1H4f2S3Ok2b6rF7y9MfqNOSlF-56t25f9&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__39__pdf",
      "driveId": "1mg6-WOzUqX03-hJajJS9nM_jfkhK-1nY",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (39).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (39).pdf",
      "media": {
            "driveFileId": "1mg6-WOzUqX03-hJajJS9nM_jfkhK-1nY",
            "pdf": "1mg6-WOzUqX03-hJajJS9nM_jfkhK-1nY",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mg6-WOzUqX03-hJajJS9nM_jfkhK-1nY&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__40__pdf",
      "driveId": "1V9AXkyvMb0TUDl0mkoE0R9UFoS62JGcN",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (40).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (40).pdf",
      "media": {
            "driveFileId": "1V9AXkyvMb0TUDl0mkoE0R9UFoS62JGcN",
            "pdf": "1V9AXkyvMb0TUDl0mkoE0R9UFoS62JGcN",
            "thumbnail": "https://drive.google.com/thumbnail?id=1V9AXkyvMb0TUDl0mkoE0R9UFoS62JGcN&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__41__pdf",
      "driveId": "1CwcHVfGIBLdw8W29ISCiRHyCixbqlYz4",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (41).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (41).pdf",
      "media": {
            "driveFileId": "1CwcHVfGIBLdw8W29ISCiRHyCixbqlYz4",
            "pdf": "1CwcHVfGIBLdw8W29ISCiRHyCixbqlYz4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CwcHVfGIBLdw8W29ISCiRHyCixbqlYz4&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__42__pdf",
      "driveId": "1N3_uMyZ_QL-ezUwGG38E3dcVpft7YWfT",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (42).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (42).pdf",
      "media": {
            "driveFileId": "1N3_uMyZ_QL-ezUwGG38E3dcVpft7YWfT",
            "pdf": "1N3_uMyZ_QL-ezUwGG38E3dcVpft7YWfT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1N3_uMyZ_QL-ezUwGG38E3dcVpft7YWfT&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__43__pdf",
      "driveId": "1329bNDuRmles9CMuf8Lo5q3PuWFVrOtk",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (43).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (43).pdf",
      "media": {
            "driveFileId": "1329bNDuRmles9CMuf8Lo5q3PuWFVrOtk",
            "pdf": "1329bNDuRmles9CMuf8Lo5q3PuWFVrOtk",
            "thumbnail": "https://drive.google.com/thumbnail?id=1329bNDuRmles9CMuf8Lo5q3PuWFVrOtk&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__44__pdf",
      "driveId": "1RBiwVPouVaV8D6ripGANy6yYeso39r74",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (44).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (44).pdf",
      "media": {
            "driveFileId": "1RBiwVPouVaV8D6ripGANy6yYeso39r74",
            "pdf": "1RBiwVPouVaV8D6ripGANy6yYeso39r74",
            "thumbnail": "https://drive.google.com/thumbnail?id=1RBiwVPouVaV8D6ripGANy6yYeso39r74&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__45__pdf",
      "driveId": "1IJeUBfNLUyWDps2xaUKQAAEp-W8zYKr2",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (45).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (45).pdf",
      "media": {
            "driveFileId": "1IJeUBfNLUyWDps2xaUKQAAEp-W8zYKr2",
            "pdf": "1IJeUBfNLUyWDps2xaUKQAAEp-W8zYKr2",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IJeUBfNLUyWDps2xaUKQAAEp-W8zYKr2&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__46__pdf",
      "driveId": "1c9QcMcX7QstOOj-vTAjm27JGFlwg4PWg",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (46).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (46).pdf",
      "media": {
            "driveFileId": "1c9QcMcX7QstOOj-vTAjm27JGFlwg4PWg",
            "pdf": "1c9QcMcX7QstOOj-vTAjm27JGFlwg4PWg",
            "thumbnail": "https://drive.google.com/thumbnail?id=1c9QcMcX7QstOOj-vTAjm27JGFlwg4PWg&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__47__pdf",
      "driveId": "13O7THl6wzqPQCwDj8Zfh-LMV29zrJmHo",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (47).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (47).pdf",
      "media": {
            "driveFileId": "13O7THl6wzqPQCwDj8Zfh-LMV29zrJmHo",
            "pdf": "13O7THl6wzqPQCwDj8Zfh-LMV29zrJmHo",
            "thumbnail": "https://drive.google.com/thumbnail?id=13O7THl6wzqPQCwDj8Zfh-LMV29zrJmHo&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__48__pdf",
      "driveId": "11Aia4qSB77wBEUc1LHgR0nmcPpnuGvBS",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (48).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (48).pdf",
      "media": {
            "driveFileId": "11Aia4qSB77wBEUc1LHgR0nmcPpnuGvBS",
            "pdf": "11Aia4qSB77wBEUc1LHgR0nmcPpnuGvBS",
            "thumbnail": "https://drive.google.com/thumbnail?id=11Aia4qSB77wBEUc1LHgR0nmcPpnuGvBS&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__49__pdf",
      "driveId": "1-jOCwB-wzC7d6cxbVGiNruE-VADsQ1aM",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (49).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (49).pdf",
      "media": {
            "driveFileId": "1-jOCwB-wzC7d6cxbVGiNruE-VADsQ1aM",
            "pdf": "1-jOCwB-wzC7d6cxbVGiNruE-VADsQ1aM",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-jOCwB-wzC7d6cxbVGiNruE-VADsQ1aM&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__50__pdf",
      "driveId": "1nUNJsllm_AkD34wzBJsePjRxisIrwRT5",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (50).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (50).pdf",
      "media": {
            "driveFileId": "1nUNJsllm_AkD34wzBJsePjRxisIrwRT5",
            "pdf": "1nUNJsllm_AkD34wzBJsePjRxisIrwRT5",
            "thumbnail": "https://drive.google.com/thumbnail?id=1nUNJsllm_AkD34wzBJsePjRxisIrwRT5&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__51__pdf",
      "driveId": "1IdGPpTwlIg4AChvALz0v4TnvIN0SGSG5",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (51).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (51).pdf",
      "media": {
            "driveFileId": "1IdGPpTwlIg4AChvALz0v4TnvIN0SGSG5",
            "pdf": "1IdGPpTwlIg4AChvALz0v4TnvIN0SGSG5",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IdGPpTwlIg4AChvALz0v4TnvIN0SGSG5&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__52__pdf",
      "driveId": "1Shgp5g_f2mRjlRuU_AOTmGLbMktxXq7L",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (52).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (52).pdf",
      "media": {
            "driveFileId": "1Shgp5g_f2mRjlRuU_AOTmGLbMktxXq7L",
            "pdf": "1Shgp5g_f2mRjlRuU_AOTmGLbMktxXq7L",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Shgp5g_f2mRjlRuU_AOTmGLbMktxXq7L&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__53__pdf",
      "driveId": "1feHBdZQ45VUqyIHXjGl6T7vowrCkvSgl",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (53).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (53).pdf",
      "media": {
            "driveFileId": "1feHBdZQ45VUqyIHXjGl6T7vowrCkvSgl",
            "pdf": "1feHBdZQ45VUqyIHXjGl6T7vowrCkvSgl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1feHBdZQ45VUqyIHXjGl6T7vowrCkvSgl&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__54__pdf",
      "driveId": "1Gu39yuZEFDBq2Xi6eaQ5_vfS3L-cz7i0",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (54).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (54).pdf",
      "media": {
            "driveFileId": "1Gu39yuZEFDBq2Xi6eaQ5_vfS3L-cz7i0",
            "pdf": "1Gu39yuZEFDBq2Xi6eaQ5_vfS3L-cz7i0",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Gu39yuZEFDBq2Xi6eaQ5_vfS3L-cz7i0&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__55__pdf",
      "driveId": "1rk2QL0llwedXTM3j5Hu_h6iWMmr1LuIB",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (55).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (55).pdf",
      "media": {
            "driveFileId": "1rk2QL0llwedXTM3j5Hu_h6iWMmr1LuIB",
            "pdf": "1rk2QL0llwedXTM3j5Hu_h6iWMmr1LuIB",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rk2QL0llwedXTM3j5Hu_h6iWMmr1LuIB&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__56__pdf",
      "driveId": "1Mnu_y6erLtNN_mX-5x4Xl7_iJlTTPT7r",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (56).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (56).pdf",
      "media": {
            "driveFileId": "1Mnu_y6erLtNN_mX-5x4Xl7_iJlTTPT7r",
            "pdf": "1Mnu_y6erLtNN_mX-5x4Xl7_iJlTTPT7r",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Mnu_y6erLtNN_mX-5x4Xl7_iJlTTPT7r&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__57__pdf",
      "driveId": "1ebAkX-kuZBl8OHH8N7DS0Jt_KeJsRSzz",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (57).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (57).pdf",
      "media": {
            "driveFileId": "1ebAkX-kuZBl8OHH8N7DS0Jt_KeJsRSzz",
            "pdf": "1ebAkX-kuZBl8OHH8N7DS0Jt_KeJsRSzz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ebAkX-kuZBl8OHH8N7DS0Jt_KeJsRSzz&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__58__pdf",
      "driveId": "1iskBuszG6bVo6KiG8VI31zV0PAc9dxLt",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (58).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (58).pdf",
      "media": {
            "driveFileId": "1iskBuszG6bVo6KiG8VI31zV0PAc9dxLt",
            "pdf": "1iskBuszG6bVo6KiG8VI31zV0PAc9dxLt",
            "thumbnail": "https://drive.google.com/thumbnail?id=1iskBuszG6bVo6KiG8VI31zV0PAc9dxLt&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf__59__pdf",
      "driveId": "14q0BDbeC2AjKuJLE-jW2XTJqBmCptnX_",
      "category": "11_MANUSCRITOS",
      "title": ".pdf (59).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf (59).pdf",
      "media": {
            "driveFileId": "14q0BDbeC2AjKuJLE-jW2XTJqBmCptnX_",
            "pdf": "14q0BDbeC2AjKuJLE-jW2XTJqBmCptnX_",
            "thumbnail": "https://drive.google.com/thumbnail?id=14q0BDbeC2AjKuJLE-jW2XTJqBmCptnX_&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-_pdf_pdf",
      "driveId": "1sc5fDPcDV4ISJMpKLZgzEEZ0iUoLkPEW",
      "category": "11_MANUSCRITOS",
      "title": ".pdf.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/.pdf.pdf",
      "media": {
            "driveFileId": "1sc5fDPcDV4ISJMpKLZgzEEZ0iUoLkPEW",
            "pdf": "1sc5fDPcDV4ISJMpKLZgzEEZ0iUoLkPEW",
            "thumbnail": "https://drive.google.com/thumbnail?id=1sc5fDPcDV4ISJMpKLZgzEEZ0iUoLkPEW&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2003_Email_Albert_Adria_Andoni_Luis_Aduriz_pdf",
      "driveId": "1KNInPNhsOQ-kaVt_isFFiuPDkUOCocjc",
      "category": "11_MANUSCRITOS",
      "title": "2003_Email_Albert_Adria_Andoni_Luis_Aduriz.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2003_Email_Albert_Adria_Andoni_Luis_Aduriz.pdf",
      "media": {
            "driveFileId": "1KNInPNhsOQ-kaVt_isFFiuPDkUOCocjc",
            "pdf": "1KNInPNhsOQ-kaVt_isFFiuPDkUOCocjc",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KNInPNhsOQ-kaVt_isFFiuPDkUOCocjc&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2006_Nomina_Paco_Morales_Feb_Mugaritz_pdf",
      "driveId": "1GL2_mKvO-igHU-lLgvrGRw-wWOxQ0hNp",
      "category": "11_MANUSCRITOS",
      "title": "2006_Nomina_Paco_Morales_Feb_Mugaritz.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2006_Nomina_Paco_Morales_Feb_Mugaritz.pdf",
      "media": {
            "driveFileId": "1GL2_mKvO-igHU-lLgvrGRw-wWOxQ0hNp",
            "pdf": "1GL2_mKvO-igHU-lLgvrGRw-wWOxQ0hNp",
            "thumbnail": "https://drive.google.com/thumbnail?id=1GL2_mKvO-igHU-lLgvrGRw-wWOxQ0hNp&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2006_Nominas_Certificado_Paco_Morales_Mugaritz_pdf",
      "driveId": "1VY0PQ2jphVGq7cLkwI6MadKtL-hMvSgt",
      "category": "11_MANUSCRITOS",
      "title": "2006_Nominas_Certificado_Paco_Morales_Mugaritz.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2006_Nominas_Certificado_Paco_Morales_Mugaritz.pdf",
      "media": {
            "driveFileId": "1VY0PQ2jphVGq7cLkwI6MadKtL-hMvSgt",
            "pdf": "1VY0PQ2jphVGq7cLkwI6MadKtL-hMvSgt",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VY0PQ2jphVGq7cLkwI6MadKtL-hMvSgt&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2007_Email_Andoni_Aduriz_Reflexion_Ferran_Adria_pdf",
      "driveId": "1qmnf_bMoVu4sxjtcER1IMdd4llo9Qxw7",
      "category": "11_MANUSCRITOS",
      "title": "2007_Email_Andoni_Aduriz_Reflexion_Ferran_Adria.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2007_Email_Andoni_Aduriz_Reflexion_Ferran_Adria.pdf",
      "media": {
            "driveFileId": "1qmnf_bMoVu4sxjtcER1IMdd4llo9Qxw7",
            "pdf": "1qmnf_bMoVu4sxjtcER1IMdd4llo9Qxw7",
            "thumbnail": "https://drive.google.com/thumbnail?id=1qmnf_bMoVu4sxjtcER1IMdd4llo9Qxw7&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2011_2020_Facturas_Fichas_Tecnicas_Ferrero_pdf",
      "driveId": "1InMLAV78AOuS0OByO1124DSCw7vu--up",
      "category": "11_MANUSCRITOS",
      "title": "2011_2020_Facturas_Fichas_Tecnicas_Ferrero.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2011_2020_Facturas_Fichas_Tecnicas_Ferrero.pdf",
      "media": {
            "driveFileId": "1InMLAV78AOuS0OByO1124DSCw7vu--up",
            "pdf": "1InMLAV78AOuS0OByO1124DSCw7vu--up",
            "thumbnail": "https://drive.google.com/thumbnail?id=1InMLAV78AOuS0OByO1124DSCw7vu--up&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2012_Flyer_Evento_Siete_Horas_Paco_Morales_pdf",
      "driveId": "1OB6qwLOHZlbhBsgB_5IXiTvxOF5idim0",
      "category": "11_MANUSCRITOS",
      "title": "2012_Flyer_Evento_Siete_Horas_Paco_Morales.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2012_Flyer_Evento_Siete_Horas_Paco_Morales.pdf",
      "media": {
            "driveFileId": "1OB6qwLOHZlbhBsgB_5IXiTvxOF5idim0",
            "pdf": "1OB6qwLOHZlbhBsgB_5IXiTvxOF5idim0",
            "thumbnail": "https://drive.google.com/thumbnail?id=1OB6qwLOHZlbhBsgB_5IXiTvxOF5idim0&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2012_Paco_Morales_Conceptualizacion_Noor_pdf",
      "driveId": "1cjdqKVcVKitI4VCPPW88CVwmtA1F-MnD",
      "category": "11_MANUSCRITOS",
      "title": "2012_Paco_Morales_Conceptualizacion_Noor.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2012_Paco_Morales_Conceptualizacion_Noor.pdf",
      "media": {
            "driveFileId": "1cjdqKVcVKitI4VCPPW88CVwmtA1F-MnD",
            "pdf": "1cjdqKVcVKitI4VCPPW88CVwmtA1F-MnD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1cjdqKVcVKitI4VCPPW88CVwmtA1F-MnD&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2012_Tickets_Facturas_Hotel_Ferrero_pdf",
      "driveId": "1XSyaJPnWUdwI4TPxCqYOpNi6E10xXbrw",
      "category": "11_MANUSCRITOS",
      "title": "2012_Tickets_Facturas_Hotel_Ferrero.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2012_Tickets_Facturas_Hotel_Ferrero.pdf",
      "media": {
            "driveFileId": "1XSyaJPnWUdwI4TPxCqYOpNi6E10xXbrw",
            "pdf": "1XSyaJPnWUdwI4TPxCqYOpNi6E10xXbrw",
            "thumbnail": "https://drive.google.com/thumbnail?id=1XSyaJPnWUdwI4TPxCqYOpNi6E10xXbrw&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2014_Manifiesto_Evolucion_Paco_Morales_pdf",
      "driveId": "1F-SbULZEQEYHp04f7dYGjDu02VJyt6HU",
      "category": "11_MANUSCRITOS",
      "title": "2014_Manifiesto_Evolucion_Paco_Morales.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2014_Manifiesto_Evolucion_Paco_Morales.pdf",
      "media": {
            "driveFileId": "1F-SbULZEQEYHp04f7dYGjDu02VJyt6HU",
            "pdf": "1F-SbULZEQEYHp04f7dYGjDu02VJyt6HU",
            "thumbnail": "https://drive.google.com/thumbnail?id=1F-SbULZEQEYHp04f7dYGjDu02VJyt6HU&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-2017_Invitacion_Gala_Michelin_Noor_Cordoba_pdf",
      "driveId": "1SQDUqyiuEbmDxH7gAXQiUo7Trko_HvR9",
      "category": "11_MANUSCRITOS",
      "title": "2017_Invitacion_Gala_Michelin_Noor_Cordoba.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/2017_Invitacion_Gala_Michelin_Noor_Cordoba.pdf",
      "media": {
            "driveFileId": "1SQDUqyiuEbmDxH7gAXQiUo7Trko_HvR9",
            "pdf": "1SQDUqyiuEbmDxH7gAXQiUo7Trko_HvR9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1SQDUqyiuEbmDxH7gAXQiUo7Trko_HvR9&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-Adobe_Scan_01_abr_2026_pdf",
      "driveId": "1rakgpluaFwRJFWNTR56nogxMBzC_cSZh",
      "category": "11_MANUSCRITOS",
      "title": "Adobe Scan 01 abr 2026.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/Adobe Scan 01 abr 2026.pdf",
      "media": {
            "driveFileId": "1rakgpluaFwRJFWNTR56nogxMBzC_cSZh",
            "pdf": "1rakgpluaFwRJFWNTR56nogxMBzC_cSZh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rakgpluaFwRJFWNTR56nogxMBzC_cSZh&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-Adobe_Scan_02_abr_2026__19__pdf",
      "driveId": "1pnNCOeIZFHXR7rcmu-LU3P2wL_OfUJ3d",
      "category": "11_MANUSCRITOS",
      "title": "Adobe Scan 02 abr 2026 (19).pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/Adobe Scan 02 abr 2026 (19).pdf",
      "media": {
            "driveFileId": "1pnNCOeIZFHXR7rcmu-LU3P2wL_OfUJ3d",
            "pdf": "1pnNCOeIZFHXR7rcmu-LU3P2wL_OfUJ3d",
            "thumbnail": "https://drive.google.com/thumbnail?id=1pnNCOeIZFHXR7rcmu-LU3P2wL_OfUJ3d&sz=w1000"
      }
},
    {
      "id": "local-11_manuscritos-Dabiz_Munoz_Manifiesto_DiverXO_pdf",
      "driveId": "1VB4WFboCXmhTMkatQiLz3BQxlKI6Qm9Z",
      "category": "11_MANUSCRITOS",
      "title": "Dabiz_Munoz_Manifiesto_DiverXO.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "11_MANUSCRITOS",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/11_Sin clasificar/Dabiz_Munoz_Manifiesto_DiverXO.pdf",
      "media": {
            "driveFileId": "1VB4WFboCXmhTMkatQiLz3BQxlKI6Qm9Z",
            "pdf": "1VB4WFboCXmhTMkatQiLz3BQxlKI6Qm9Z",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VB4WFboCXmhTMkatQiLz3BQxlKI6Qm9Z&sz=w1000"
      }
}
  ,
    {
      "id": "local-07-Filosof_a_de_desayunos_docx",
      "driveId": "15B_Bsh36slY3TvSrj2I32tklqrRrO_Cz",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Sanidad_Empleados_2012_Paco_Morales",
      "title": "Filosofía de desayunos.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Sanidad_Empleados_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Sanidad_Empleados_2012_Paco_Morales/Filosofía de desayunos.docx",
      "media": {
            "driveFileId": "15B_Bsh36slY3TvSrj2I32tklqrRrO_Cz",
            "pdf": "15B_Bsh36slY3TvSrj2I32tklqrRrO_Cz",
            "thumbnail": "https://drive.google.com/thumbnail?id=15B_Bsh36slY3TvSrj2I32tklqrRrO_Cz&sz=w1000"
      }
},
    {
      "id": "local-07-NORMAS_DE_EMPLEADOS_htm",
      "driveId": "1J986ubNhvMgdF6QNENJoWn0l1rUA1G1u",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Sanidad_Empleados_2012_Paco_Morales",
      "title": "NORMAS DE EMPLEADOS.htm",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Sanidad_Empleados_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Sanidad_Empleados_2012_Paco_Morales/NORMAS DE EMPLEADOS.htm",
      "media": {
            "driveFileId": "1J986ubNhvMgdF6QNENJoWn0l1rUA1G1u",
            "pdf": "1J986ubNhvMgdF6QNENJoWn0l1rUA1G1u",
            "thumbnail": "https://drive.google.com/thumbnail?id=1J986ubNhvMgdF6QNENJoWn0l1rUA1G1u&sz=w1000"
      }
},
    {
      "id": "local-07-desayunos_docx",
      "driveId": "1iSXzwP5QY7hVmRhDENpVjnxkw9fV6XMq",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Sanidad_Empleados_2012_Paco_Morales",
      "title": "desayunos.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Sanidad_Empleados_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Sanidad_Empleados_2012_Paco_Morales/desayunos.docx",
      "media": {
            "driveFileId": "1iSXzwP5QY7hVmRhDENpVjnxkw9fV6XMq",
            "pdf": "1iSXzwP5QY7hVmRhDENpVjnxkw9fV6XMq",
            "thumbnail": "https://drive.google.com/thumbnail?id=1iSXzwP5QY7hVmRhDENpVjnxkw9fV6XMq&sz=w1000"
      }
},
    {
      "id": "local-07-Filosof_a_de_desayunos_doc",
      "driveId": "1GVPP_JJG6Xtpk_4tvkeJ2xIIHPCGNibg",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Sanidad_Empleados_2012_Paco_Morales",
      "title": "Filosofía de desayunos.doc",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Sanidad_Empleados_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Sanidad_Empleados_2012_Paco_Morales/Filosofía de desayunos.doc",
      "media": {
            "driveFileId": "1GVPP_JJG6Xtpk_4tvkeJ2xIIHPCGNibg",
            "pdf": "1GVPP_JJG6Xtpk_4tvkeJ2xIIHPCGNibg",
            "thumbnail": "https://drive.google.com/thumbnail?id=1GVPP_JJG6Xtpk_4tvkeJ2xIIHPCGNibg&sz=w1000"
      }
},
    {
      "id": "local-07-DESAYUNO_GASTRONOMICO_docx",
      "driveId": "1f-1T1bBbzfwLswbhBSrtZ8kssceVWblD",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Sanidad_Empleados_2012_Paco_Morales",
      "title": "DESAYUNO GASTRONOMICO.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Sanidad_Empleados_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Sanidad_Empleados_2012_Paco_Morales/DESAYUNO GASTRONOMICO.docx",
      "media": {
            "driveFileId": "1f-1T1bBbzfwLswbhBSrtZ8kssceVWblD",
            "pdf": "1f-1T1bBbzfwLswbhBSrtZ8kssceVWblD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1f-1T1bBbzfwLswbhBSrtZ8kssceVWblD&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__19__JPG",
      "driveId": "1rcP1vm_fXiGsVbGR2V5b4IJ1xvca4Q-r",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (19).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (19).JPG",
      "media": {
            "driveFileId": "1rcP1vm_fXiGsVbGR2V5b4IJ1xvca4Q-r",
            "pdf": "1rcP1vm_fXiGsVbGR2V5b4IJ1xvca4Q-r",
            "thumbnail": "https://drive.google.com/thumbnail?id=1rcP1vm_fXiGsVbGR2V5b4IJ1xvca4Q-r&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__25__JPG",
      "driveId": "11bsDKM7yGwXojs-e_J98AHpNjfkRycJm",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (25).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (25).JPG",
      "media": {
            "driveFileId": "11bsDKM7yGwXojs-e_J98AHpNjfkRycJm",
            "pdf": "11bsDKM7yGwXojs-e_J98AHpNjfkRycJm",
            "thumbnail": "https://drive.google.com/thumbnail?id=11bsDKM7yGwXojs-e_J98AHpNjfkRycJm&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__26__JPG",
      "driveId": "11DbnJLQBAAFJzsCYk5eCwVlA24cKWQwd",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (26).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (26).JPG",
      "media": {
            "driveFileId": "11DbnJLQBAAFJzsCYk5eCwVlA24cKWQwd",
            "pdf": "11DbnJLQBAAFJzsCYk5eCwVlA24cKWQwd",
            "thumbnail": "https://drive.google.com/thumbnail?id=11DbnJLQBAAFJzsCYk5eCwVlA24cKWQwd&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__10__JPG",
      "driveId": "1Xr8s4m1D53VTI1KQQzfDpJMn0rU3s4bq",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (10).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (10).JPG",
      "media": {
            "driveFileId": "1Xr8s4m1D53VTI1KQQzfDpJMn0rU3s4bq",
            "pdf": "1Xr8s4m1D53VTI1KQQzfDpJMn0rU3s4bq",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Xr8s4m1D53VTI1KQQzfDpJMn0rU3s4bq&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__17__JPG",
      "driveId": "1EYUL0ulZzBG8fLVOoJ_JSEb-ppMBSAbR",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (17).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (17).JPG",
      "media": {
            "driveFileId": "1EYUL0ulZzBG8fLVOoJ_JSEb-ppMBSAbR",
            "pdf": "1EYUL0ulZzBG8fLVOoJ_JSEb-ppMBSAbR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EYUL0ulZzBG8fLVOoJ_JSEb-ppMBSAbR&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__30__JPG",
      "driveId": "1-3ANVzjZ6-Ko-c2BFxrEGwSmbJTbK42h",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (30).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (30).JPG",
      "media": {
            "driveFileId": "1-3ANVzjZ6-Ko-c2BFxrEGwSmbJTbK42h",
            "pdf": "1-3ANVzjZ6-Ko-c2BFxrEGwSmbJTbK42h",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-3ANVzjZ6-Ko-c2BFxrEGwSmbJTbK42h&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__12__JPG",
      "driveId": "1RQdppYvsAaHgsL5Vwn5nwrpIfGsOabJ7",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (12).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (12).JPG",
      "media": {
            "driveFileId": "1RQdppYvsAaHgsL5Vwn5nwrpIfGsOabJ7",
            "pdf": "1RQdppYvsAaHgsL5Vwn5nwrpIfGsOabJ7",
            "thumbnail": "https://drive.google.com/thumbnail?id=1RQdppYvsAaHgsL5Vwn5nwrpIfGsOabJ7&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__15__JPG",
      "driveId": "1S4TepJ_7rC_k6oeRnTlpzc3AxPR8C7e6",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (15).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (15).JPG",
      "media": {
            "driveFileId": "1S4TepJ_7rC_k6oeRnTlpzc3AxPR8C7e6",
            "pdf": "1S4TepJ_7rC_k6oeRnTlpzc3AxPR8C7e6",
            "thumbnail": "https://drive.google.com/thumbnail?id=1S4TepJ_7rC_k6oeRnTlpzc3AxPR8C7e6&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__29__JPG",
      "driveId": "1LPWK01HrxLH1BXsGBVoAe4cyzMbo4jcG",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (29).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (29).JPG",
      "media": {
            "driveFileId": "1LPWK01HrxLH1BXsGBVoAe4cyzMbo4jcG",
            "pdf": "1LPWK01HrxLH1BXsGBVoAe4cyzMbo4jcG",
            "thumbnail": "https://drive.google.com/thumbnail?id=1LPWK01HrxLH1BXsGBVoAe4cyzMbo4jcG&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__5__JPG",
      "driveId": "1aU-PzzuXqOyRqWoAi-sMl1qJdqxoLVbn",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (5).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (5).JPG",
      "media": {
            "driveFileId": "1aU-PzzuXqOyRqWoAi-sMl1qJdqxoLVbn",
            "pdf": "1aU-PzzuXqOyRqWoAi-sMl1qJdqxoLVbn",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aU-PzzuXqOyRqWoAi-sMl1qJdqxoLVbn&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__9__JPG",
      "driveId": "1tsgr9Sis6unKEilsU7TcH4n8EYTl8dit",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (9).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (9).JPG",
      "media": {
            "driveFileId": "1tsgr9Sis6unKEilsU7TcH4n8EYTl8dit",
            "pdf": "1tsgr9Sis6unKEilsU7TcH4n8EYTl8dit",
            "thumbnail": "https://drive.google.com/thumbnail?id=1tsgr9Sis6unKEilsU7TcH4n8EYTl8dit&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__18__JPG",
      "driveId": "1zMZtBccPgNwXFC6g_SmZpJMy00MGyz5-",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (18).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (18).JPG",
      "media": {
            "driveFileId": "1zMZtBccPgNwXFC6g_SmZpJMy00MGyz5-",
            "pdf": "1zMZtBccPgNwXFC6g_SmZpJMy00MGyz5-",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zMZtBccPgNwXFC6g_SmZpJMy00MGyz5-&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__3__JPG",
      "driveId": "1yP06gC5beYP-uE9zrVuSCcojsoDfA2B9",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (3).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (3).JPG",
      "media": {
            "driveFileId": "1yP06gC5beYP-uE9zrVuSCcojsoDfA2B9",
            "pdf": "1yP06gC5beYP-uE9zrVuSCcojsoDfA2B9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1yP06gC5beYP-uE9zrVuSCcojsoDfA2B9&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__2__JPG",
      "driveId": "1K71c0nmAI2iJ_dgKLHXW54VSzBFHJK5Z",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (2).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (2).JPG",
      "media": {
            "driveFileId": "1K71c0nmAI2iJ_dgKLHXW54VSzBFHJK5Z",
            "pdf": "1K71c0nmAI2iJ_dgKLHXW54VSzBFHJK5Z",
            "thumbnail": "https://drive.google.com/thumbnail?id=1K71c0nmAI2iJ_dgKLHXW54VSzBFHJK5Z&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__4__JPG",
      "driveId": "13VoK69EyJpy1vG3ACsPoNfbDv_POKCht",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (4).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (4).JPG",
      "media": {
            "driveFileId": "13VoK69EyJpy1vG3ACsPoNfbDv_POKCht",
            "pdf": "13VoK69EyJpy1vG3ACsPoNfbDv_POKCht",
            "thumbnail": "https://drive.google.com/thumbnail?id=13VoK69EyJpy1vG3ACsPoNfbDv_POKCht&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__31__JPG",
      "driveId": "15qoZKEkXLHY7snDPDWh9iGjIRaDdc3ND",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (31).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (31).JPG",
      "media": {
            "driveFileId": "15qoZKEkXLHY7snDPDWh9iGjIRaDdc3ND",
            "pdf": "15qoZKEkXLHY7snDPDWh9iGjIRaDdc3ND",
            "thumbnail": "https://drive.google.com/thumbnail?id=15qoZKEkXLHY7snDPDWh9iGjIRaDdc3ND&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__33__JPG",
      "driveId": "1MS8H38QuNwTJ6LK7jXa-nTacZitG6hpK",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (33).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (33).JPG",
      "media": {
            "driveFileId": "1MS8H38QuNwTJ6LK7jXa-nTacZitG6hpK",
            "pdf": "1MS8H38QuNwTJ6LK7jXa-nTacZitG6hpK",
            "thumbnail": "https://drive.google.com/thumbnail?id=1MS8H38QuNwTJ6LK7jXa-nTacZitG6hpK&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__23__JPG",
      "driveId": "1uYvkRGa-K5A-0Jw5oAm4l3TjGSOnAzSN",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (23).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (23).JPG",
      "media": {
            "driveFileId": "1uYvkRGa-K5A-0Jw5oAm4l3TjGSOnAzSN",
            "pdf": "1uYvkRGa-K5A-0Jw5oAm4l3TjGSOnAzSN",
            "thumbnail": "https://drive.google.com/thumbnail?id=1uYvkRGa-K5A-0Jw5oAm4l3TjGSOnAzSN&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__7__JPG",
      "driveId": "18ZcrZjz4FqfeRq5caamNUiC2_D-UnqVZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (7).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (7).JPG",
      "media": {
            "driveFileId": "18ZcrZjz4FqfeRq5caamNUiC2_D-UnqVZ",
            "pdf": "18ZcrZjz4FqfeRq5caamNUiC2_D-UnqVZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=18ZcrZjz4FqfeRq5caamNUiC2_D-UnqVZ&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__20__JPG",
      "driveId": "1QR6yBPFZhtSwq1OvPAGJC88FSNlrQhGZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (20).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (20).JPG",
      "media": {
            "driveFileId": "1QR6yBPFZhtSwq1OvPAGJC88FSNlrQhGZ",
            "pdf": "1QR6yBPFZhtSwq1OvPAGJC88FSNlrQhGZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1QR6yBPFZhtSwq1OvPAGJC88FSNlrQhGZ&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__14__JPG",
      "driveId": "1Mx3ljEO3bdfYpnINFewqtUooGbnWKI4w",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (14).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (14).JPG",
      "media": {
            "driveFileId": "1Mx3ljEO3bdfYpnINFewqtUooGbnWKI4w",
            "pdf": "1Mx3ljEO3bdfYpnINFewqtUooGbnWKI4w",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Mx3ljEO3bdfYpnINFewqtUooGbnWKI4w&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__8__JPG",
      "driveId": "1QKZJncUwkBhglBH8LRlPr2772f2YyZHN",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (8).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (8).JPG",
      "media": {
            "driveFileId": "1QKZJncUwkBhglBH8LRlPr2772f2YyZHN",
            "pdf": "1QKZJncUwkBhglBH8LRlPr2772f2YyZHN",
            "thumbnail": "https://drive.google.com/thumbnail?id=1QKZJncUwkBhglBH8LRlPr2772f2YyZHN&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__11__JPG",
      "driveId": "1LT3bk9aelubweDO-X4z2vAUGFJSkD5fx",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (11).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (11).JPG",
      "media": {
            "driveFileId": "1LT3bk9aelubweDO-X4z2vAUGFJSkD5fx",
            "pdf": "1LT3bk9aelubweDO-X4z2vAUGFJSkD5fx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1LT3bk9aelubweDO-X4z2vAUGFJSkD5fx&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__13__JPG",
      "driveId": "1ffMikCPc81EZKq59iNuYmuRLnxBfQTPy",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (13).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (13).JPG",
      "media": {
            "driveFileId": "1ffMikCPc81EZKq59iNuYmuRLnxBfQTPy",
            "pdf": "1ffMikCPc81EZKq59iNuYmuRLnxBfQTPy",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ffMikCPc81EZKq59iNuYmuRLnxBfQTPy&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__32__JPG",
      "driveId": "1l4ug24pKHQT9tnqsmaKE0yx5N6disVMZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (32).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (32).JPG",
      "media": {
            "driveFileId": "1l4ug24pKHQT9tnqsmaKE0yx5N6disVMZ",
            "pdf": "1l4ug24pKHQT9tnqsmaKE0yx5N6disVMZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1l4ug24pKHQT9tnqsmaKE0yx5N6disVMZ&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__24__JPG",
      "driveId": "1s6C1Br-zMkRbDA037AWo6yEI43KYYaFk",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (24).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (24).JPG",
      "media": {
            "driveFileId": "1s6C1Br-zMkRbDA037AWo6yEI43KYYaFk",
            "pdf": "1s6C1Br-zMkRbDA037AWo6yEI43KYYaFk",
            "thumbnail": "https://drive.google.com/thumbnail?id=1s6C1Br-zMkRbDA037AWo6yEI43KYYaFk&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__6__JPG",
      "driveId": "1WJ3TPT9LwzS1sOxcu2mCViiWz18zurFq",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (6).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (6).JPG",
      "media": {
            "driveFileId": "1WJ3TPT9LwzS1sOxcu2mCViiWz18zurFq",
            "pdf": "1WJ3TPT9LwzS1sOxcu2mCViiWz18zurFq",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WJ3TPT9LwzS1sOxcu2mCViiWz18zurFq&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__21__JPG",
      "driveId": "1YeUdur3ioRDCKxgCOjdLLGxbsmcQL4Tr",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (21).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (21).JPG",
      "media": {
            "driveFileId": "1YeUdur3ioRDCKxgCOjdLLGxbsmcQL4Tr",
            "pdf": "1YeUdur3ioRDCKxgCOjdLLGxbsmcQL4Tr",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YeUdur3ioRDCKxgCOjdLLGxbsmcQL4Tr&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__22__JPG",
      "driveId": "1wk9MWpENlY4byZ7E5nd6ImCek_O9xNM1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (22).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (22).JPG",
      "media": {
            "driveFileId": "1wk9MWpENlY4byZ7E5nd6ImCek_O9xNM1",
            "pdf": "1wk9MWpENlY4byZ7E5nd6ImCek_O9xNM1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1wk9MWpENlY4byZ7E5nd6ImCek_O9xNM1&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales_JPG",
      "driveId": "1zd9xRYWGZP-F4ivXBZ5N22qacot8DqRh",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales.JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales.JPG",
      "media": {
            "driveFileId": "1zd9xRYWGZP-F4ivXBZ5N22qacot8DqRh",
            "pdf": "1zd9xRYWGZP-F4ivXBZ5N22qacot8DqRh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zd9xRYWGZP-F4ivXBZ5N22qacot8DqRh&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__28__JPG",
      "driveId": "1wbKquBuUN9AokaddWi7QKdAME8Xb-7RZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (28).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (28).JPG",
      "media": {
            "driveFileId": "1wbKquBuUN9AokaddWi7QKdAME8Xb-7RZ",
            "pdf": "1wbKquBuUN9AokaddWi7QKdAME8Xb-7RZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1wbKquBuUN9AokaddWi7QKdAME8Xb-7RZ&sz=w1000"
      }
},
    {
      "id": "local-07-Paco_Morales__27__JPG",
      "driveId": "1Hcu1iMSBbhnDSLdhKnnrByQM_3g70cWH",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Senzone_Fotografías",
      "title": "Paco Morales (27).JPG",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Senzone_Fotografías",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Senzone_Fotografías/Paco Morales (27).JPG",
      "media": {
            "driveFileId": "1Hcu1iMSBbhnDSLdhKnnrByQM_3g70cWH",
            "pdf": "1Hcu1iMSBbhnDSLdhKnnrByQM_3g70cWH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Hcu1iMSBbhnDSLdhKnnrByQM_3g70cWH&sz=w1000"
      }
},
    {
      "id": "local-07-PRIMEROS_doc",
      "driveId": "1y8K7h2847tI48XZegsOo-A4dU28_6DCx",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_Word",
      "title": "PRIMEROS.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_Word",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_Word/PRIMEROS.doc",
      "media": {
            "driveFileId": "1y8K7h2847tI48XZegsOo-A4dU28_6DCx",
            "pdf": "1y8K7h2847tI48XZegsOo-A4dU28_6DCx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1y8K7h2847tI48XZegsOo-A4dU28_6DCx&sz=w1000"
      }
},
    {
      "id": "local-07-PASTELER_c3_8dA_doc",
      "driveId": "1iG_jEknslhJdapFPbE4azfMH_NU1EMba",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_Word",
      "title": "PASTELER%c3%8dA.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_Word",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_Word/PASTELER%c3%8dA.doc",
      "media": {
            "driveFileId": "1iG_jEknslhJdapFPbE4azfMH_NU1EMba",
            "pdf": "1iG_jEknslhJdapFPbE4azfMH_NU1EMba",
            "thumbnail": "https://drive.google.com/thumbnail?id=1iG_jEknslhJdapFPbE4azfMH_NU1EMba&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__8__jpg",
      "driveId": "1b0vIrZu9F9CX1pzv7YfwW28tENLGvlIZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (8).jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (8).jpg",
      "media": {
            "driveFileId": "1b0vIrZu9F9CX1pzv7YfwW28tENLGvlIZ",
            "pdf": "1b0vIrZu9F9CX1pzv7YfwW28tENLGvlIZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1b0vIrZu9F9CX1pzv7YfwW28tENLGvlIZ&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__54__jpg",
      "driveId": "1TVyha6hZL2KZSBNE3-ULKzgUjEUzE2XB",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (54).jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (54).jpg",
      "media": {
            "driveFileId": "1TVyha6hZL2KZSBNE3-ULKzgUjEUzE2XB",
            "pdf": "1TVyha6hZL2KZSBNE3-ULKzgUjEUzE2XB",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TVyha6hZL2KZSBNE3-ULKzgUjEUzE2XB&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__53__jpg",
      "driveId": "1hcVNgNE8JUvBjvpbThXn1QdsieGpse2p",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (53).jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (53).jpg",
      "media": {
            "driveFileId": "1hcVNgNE8JUvBjvpbThXn1QdsieGpse2p",
            "pdf": "1hcVNgNE8JUvBjvpbThXn1QdsieGpse2p",
            "thumbnail": "https://drive.google.com/thumbnail?id=1hcVNgNE8JUvBjvpbThXn1QdsieGpse2p&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__52__MOV",
      "driveId": "1-2jJd1ChfXoGJU2X0StQmfrElkLqED9_",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (52).MOV",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (52).MOV",
      "media": {
            "driveFileId": "1-2jJd1ChfXoGJU2X0StQmfrElkLqED9_",
            "pdf": "1-2jJd1ChfXoGJU2X0StQmfrElkLqED9_",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-2jJd1ChfXoGJU2X0StQmfrElkLqED9_&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__7__jpg",
      "driveId": "13qfl2lAJTJNTQpZIuEDL59Ozy8ErRMho",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (7).jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (7).jpg",
      "media": {
            "driveFileId": "13qfl2lAJTJNTQpZIuEDL59Ozy8ErRMho",
            "pdf": "13qfl2lAJTJNTQpZIuEDL59Ozy8ErRMho",
            "thumbnail": "https://drive.google.com/thumbnail?id=13qfl2lAJTJNTQpZIuEDL59Ozy8ErRMho&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__6__jpg",
      "driveId": "1nYkhO4b4XMXiLrm_Pvg3_E0F-HnynakQ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (6).jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (6).jpg",
      "media": {
            "driveFileId": "1nYkhO4b4XMXiLrm_Pvg3_E0F-HnynakQ",
            "pdf": "1nYkhO4b4XMXiLrm_Pvg3_E0F-HnynakQ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1nYkhO4b4XMXiLrm_Pvg3_E0F-HnynakQ&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO_jpg",
      "driveId": "191u_mpGq58pp-XWJdTqStl_Z2g0xeX6W",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO.jpg",
      "media": {
            "driveFileId": "191u_mpGq58pp-XWJdTqStl_Z2g0xeX6W",
            "pdf": "191u_mpGq58pp-XWJdTqStl_Z2g0xeX6W",
            "thumbnail": "https://drive.google.com/thumbnail?id=191u_mpGq58pp-XWJdTqStl_Z2g0xeX6W&sz=w1000"
      }
},
    {
      "id": "local-07-ENTREGA_PREMIOS_I_SOCIAL_HOTEL_FERRERO__9__jpg",
      "driveId": "1MazqCyxjbdPsN_roazeWlx2qj89DW9Ti",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
      "title": "ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (9).jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Engtrega_de_Premios_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Engtrega_de_Premios_Hotel_Ferrero/ENTREGA PREMIOS I SOCIAL HOTEL FERRERO (9).jpg",
      "media": {
            "driveFileId": "1MazqCyxjbdPsN_roazeWlx2qj89DW9Ti",
            "pdf": "1MazqCyxjbdPsN_roazeWlx2qj89DW9Ti",
            "thumbnail": "https://drive.google.com/thumbnail?id=1MazqCyxjbdPsN_roazeWlx2qj89DW9Ti&sz=w1000"
      }
},
    {
      "id": "local-07-Track01_cda",
      "driveId": "1jq-WJo_sI-TYGyxQ2bdu4y1m8KYm9CCn",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track01.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track01.cda",
      "media": {
            "driveFileId": "1jq-WJo_sI-TYGyxQ2bdu4y1m8KYm9CCn",
            "pdf": "1jq-WJo_sI-TYGyxQ2bdu4y1m8KYm9CCn",
            "thumbnail": "https://drive.google.com/thumbnail?id=1jq-WJo_sI-TYGyxQ2bdu4y1m8KYm9CCn&sz=w1000"
      }
},
    {
      "id": "local-07-Track09_cda",
      "driveId": "15BPaALFMrljzUUO2dzSQbqI3Qh5P5nEU",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track09.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track09.cda",
      "media": {
            "driveFileId": "15BPaALFMrljzUUO2dzSQbqI3Qh5P5nEU",
            "pdf": "15BPaALFMrljzUUO2dzSQbqI3Qh5P5nEU",
            "thumbnail": "https://drive.google.com/thumbnail?id=15BPaALFMrljzUUO2dzSQbqI3Qh5P5nEU&sz=w1000"
      }
},
    {
      "id": "local-07-Track10_cda",
      "driveId": "1FjGFb9_Z5ElBpp2zRvL2ebCrLVqrF81k",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track10.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track10.cda",
      "media": {
            "driveFileId": "1FjGFb9_Z5ElBpp2zRvL2ebCrLVqrF81k",
            "pdf": "1FjGFb9_Z5ElBpp2zRvL2ebCrLVqrF81k",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FjGFb9_Z5ElBpp2zRvL2ebCrLVqrF81k&sz=w1000"
      }
},
    {
      "id": "local-07-Track03_cda",
      "driveId": "1xExhkSh34xK7tpaTPMcMan0hkaRDnCBU",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track03.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track03.cda",
      "media": {
            "driveFileId": "1xExhkSh34xK7tpaTPMcMan0hkaRDnCBU",
            "pdf": "1xExhkSh34xK7tpaTPMcMan0hkaRDnCBU",
            "thumbnail": "https://drive.google.com/thumbnail?id=1xExhkSh34xK7tpaTPMcMan0hkaRDnCBU&sz=w1000"
      }
},
    {
      "id": "local-07-Track08_cda",
      "driveId": "1aLfkrWlrZaDLPYb_j8iWEet9XlWlRBaD",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track08.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track08.cda",
      "media": {
            "driveFileId": "1aLfkrWlrZaDLPYb_j8iWEet9XlWlRBaD",
            "pdf": "1aLfkrWlrZaDLPYb_j8iWEet9XlWlRBaD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aLfkrWlrZaDLPYb_j8iWEet9XlWlRBaD&sz=w1000"
      }
},
    {
      "id": "local-07-Track07_cda",
      "driveId": "1gypterR4JS7EAayEeqKbrhF4i4TqOzXH",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track07.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track07.cda",
      "media": {
            "driveFileId": "1gypterR4JS7EAayEeqKbrhF4i4TqOzXH",
            "pdf": "1gypterR4JS7EAayEeqKbrhF4i4TqOzXH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gypterR4JS7EAayEeqKbrhF4i4TqOzXH&sz=w1000"
      }
},
    {
      "id": "local-07-Track02_cda",
      "driveId": "1nGl7k76jL4ZS8QyFNDHS5IYH_bsij_9X",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track02.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track02.cda",
      "media": {
            "driveFileId": "1nGl7k76jL4ZS8QyFNDHS5IYH_bsij_9X",
            "pdf": "1nGl7k76jL4ZS8QyFNDHS5IYH_bsij_9X",
            "thumbnail": "https://drive.google.com/thumbnail?id=1nGl7k76jL4ZS8QyFNDHS5IYH_bsij_9X&sz=w1000"
      }
},
    {
      "id": "local-07-Track14_cda",
      "driveId": "19v5fSXVGF4mJtSH1hNdbNpwsHbNGAMec",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track14.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track14.cda",
      "media": {
            "driveFileId": "19v5fSXVGF4mJtSH1hNdbNpwsHbNGAMec",
            "pdf": "19v5fSXVGF4mJtSH1hNdbNpwsHbNGAMec",
            "thumbnail": "https://drive.google.com/thumbnail?id=19v5fSXVGF4mJtSH1hNdbNpwsHbNGAMec&sz=w1000"
      }
},
    {
      "id": "local-07-Track13_cda",
      "driveId": "18bM2CJX7b02B6TSeS_OjsK6o1WnJ3rGo",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track13.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track13.cda",
      "media": {
            "driveFileId": "18bM2CJX7b02B6TSeS_OjsK6o1WnJ3rGo",
            "pdf": "18bM2CJX7b02B6TSeS_OjsK6o1WnJ3rGo",
            "thumbnail": "https://drive.google.com/thumbnail?id=18bM2CJX7b02B6TSeS_OjsK6o1WnJ3rGo&sz=w1000"
      }
},
    {
      "id": "local-07-Track15_cda",
      "driveId": "1t-fkbAOT_X2dO5DMeXm6I-eMctfrnwfS",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track15.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track15.cda",
      "media": {
            "driveFileId": "1t-fkbAOT_X2dO5DMeXm6I-eMctfrnwfS",
            "pdf": "1t-fkbAOT_X2dO5DMeXm6I-eMctfrnwfS",
            "thumbnail": "https://drive.google.com/thumbnail?id=1t-fkbAOT_X2dO5DMeXm6I-eMctfrnwfS&sz=w1000"
      }
},
    {
      "id": "local-07-Track05_cda",
      "driveId": "111Y-Oxh1CvvPtDXg5W8CqS_5rNDZH-vR",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track05.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track05.cda",
      "media": {
            "driveFileId": "111Y-Oxh1CvvPtDXg5W8CqS_5rNDZH-vR",
            "pdf": "111Y-Oxh1CvvPtDXg5W8CqS_5rNDZH-vR",
            "thumbnail": "https://drive.google.com/thumbnail?id=111Y-Oxh1CvvPtDXg5W8CqS_5rNDZH-vR&sz=w1000"
      }
},
    {
      "id": "local-07-Track12_cda",
      "driveId": "1agHuvqHLk5XRbukMuihfQcNm1dyfVBkz",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track12.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track12.cda",
      "media": {
            "driveFileId": "1agHuvqHLk5XRbukMuihfQcNm1dyfVBkz",
            "pdf": "1agHuvqHLk5XRbukMuihfQcNm1dyfVBkz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1agHuvqHLk5XRbukMuihfQcNm1dyfVBkz&sz=w1000"
      }
},
    {
      "id": "local-07-Track04_cda",
      "driveId": "1Dn4eLPY03qRD2pWbKRN3a4LPUelZd--f",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track04.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track04.cda",
      "media": {
            "driveFileId": "1Dn4eLPY03qRD2pWbKRN3a4LPUelZd--f",
            "pdf": "1Dn4eLPY03qRD2pWbKRN3a4LPUelZd--f",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Dn4eLPY03qRD2pWbKRN3a4LPUelZd--f&sz=w1000"
      }
},
    {
      "id": "local-07-Track11_cda",
      "driveId": "1YWdPy_MM6NSfs-0SOCXNMrBio2GxSgY1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track11.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track11.cda",
      "media": {
            "driveFileId": "1YWdPy_MM6NSfs-0SOCXNMrBio2GxSgY1",
            "pdf": "1YWdPy_MM6NSfs-0SOCXNMrBio2GxSgY1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YWdPy_MM6NSfs-0SOCXNMrBio2GxSgY1&sz=w1000"
      }
},
    {
      "id": "local-07-Track06_cda",
      "driveId": "16fWUu3KWCFv6EJCIhg5QCw5Oj57zfAAD",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track06.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track06.cda",
      "media": {
            "driveFileId": "16fWUu3KWCFv6EJCIhg5QCw5Oj57zfAAD",
            "pdf": "16fWUu3KWCFv6EJCIhg5QCw5Oj57zfAAD",
            "thumbnail": "https://drive.google.com/thumbnail?id=16fWUu3KWCFv6EJCIhg5QCw5Oj57zfAAD&sz=w1000"
      }
},
    {
      "id": "local-07-Track16_cda",
      "driveId": "1fO0dWnRo6UwM82cCsdwmDNArAowaYqfa",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_Quique_dacosta",
      "title": "Track16.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_Quique_dacosta",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_Quique_dacosta/Track16.cda",
      "media": {
            "driveFileId": "1fO0dWnRo6UwM82cCsdwmDNArAowaYqfa",
            "pdf": "1fO0dWnRo6UwM82cCsdwmDNArAowaYqfa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1fO0dWnRo6UwM82cCsdwmDNArAowaYqfa&sz=w1000"
      }
},
    {
      "id": "local-07-Track01_cda",
      "driveId": "1Fz6sdh1AK054UcxchzuPU7L80CmWiLCZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track01.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track01.cda",
      "media": {
            "driveFileId": "1Fz6sdh1AK054UcxchzuPU7L80CmWiLCZ",
            "pdf": "1Fz6sdh1AK054UcxchzuPU7L80CmWiLCZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Fz6sdh1AK054UcxchzuPU7L80CmWiLCZ&sz=w1000"
      }
},
    {
      "id": "local-07-Track18_cda",
      "driveId": "1TfdmWNYCS49lYGO_OVMl6NrPGK_6jzVa",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track18.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track18.cda",
      "media": {
            "driveFileId": "1TfdmWNYCS49lYGO_OVMl6NrPGK_6jzVa",
            "pdf": "1TfdmWNYCS49lYGO_OVMl6NrPGK_6jzVa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TfdmWNYCS49lYGO_OVMl6NrPGK_6jzVa&sz=w1000"
      }
},
    {
      "id": "local-07-Track09_cda",
      "driveId": "1hfLl_Stv07dJ3NW0DRgu64jCtB2xIS_p",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track09.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track09.cda",
      "media": {
            "driveFileId": "1hfLl_Stv07dJ3NW0DRgu64jCtB2xIS_p",
            "pdf": "1hfLl_Stv07dJ3NW0DRgu64jCtB2xIS_p",
            "thumbnail": "https://drive.google.com/thumbnail?id=1hfLl_Stv07dJ3NW0DRgu64jCtB2xIS_p&sz=w1000"
      }
},
    {
      "id": "local-07-Track10_cda",
      "driveId": "1vPcazvktQCX_KBLsqlG1RS3MowmHmkOF",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track10.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track10.cda",
      "media": {
            "driveFileId": "1vPcazvktQCX_KBLsqlG1RS3MowmHmkOF",
            "pdf": "1vPcazvktQCX_KBLsqlG1RS3MowmHmkOF",
            "thumbnail": "https://drive.google.com/thumbnail?id=1vPcazvktQCX_KBLsqlG1RS3MowmHmkOF&sz=w1000"
      }
},
    {
      "id": "local-07-Track03_cda",
      "driveId": "1FMbg7rotlk3ruoN8SB2h6RGK7OjmvUQe",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track03.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track03.cda",
      "media": {
            "driveFileId": "1FMbg7rotlk3ruoN8SB2h6RGK7OjmvUQe",
            "pdf": "1FMbg7rotlk3ruoN8SB2h6RGK7OjmvUQe",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FMbg7rotlk3ruoN8SB2h6RGK7OjmvUQe&sz=w1000"
      }
},
    {
      "id": "local-07-Track19_cda",
      "driveId": "1GP2cXuArBgoRE6RP9o0OyJ191QWjtkHM",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track19.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track19.cda",
      "media": {
            "driveFileId": "1GP2cXuArBgoRE6RP9o0OyJ191QWjtkHM",
            "pdf": "1GP2cXuArBgoRE6RP9o0OyJ191QWjtkHM",
            "thumbnail": "https://drive.google.com/thumbnail?id=1GP2cXuArBgoRE6RP9o0OyJ191QWjtkHM&sz=w1000"
      }
},
    {
      "id": "local-07-Track08_cda",
      "driveId": "1CeW-IHuIgJaT3VjKCrqFrW3PnLbH2kUo",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track08.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track08.cda",
      "media": {
            "driveFileId": "1CeW-IHuIgJaT3VjKCrqFrW3PnLbH2kUo",
            "pdf": "1CeW-IHuIgJaT3VjKCrqFrW3PnLbH2kUo",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CeW-IHuIgJaT3VjKCrqFrW3PnLbH2kUo&sz=w1000"
      }
},
    {
      "id": "local-07-Track07_cda",
      "driveId": "1e56LWXNYjvbUf-Eyo_hZDiSzBvFPS-u2",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track07.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track07.cda",
      "media": {
            "driveFileId": "1e56LWXNYjvbUf-Eyo_hZDiSzBvFPS-u2",
            "pdf": "1e56LWXNYjvbUf-Eyo_hZDiSzBvFPS-u2",
            "thumbnail": "https://drive.google.com/thumbnail?id=1e56LWXNYjvbUf-Eyo_hZDiSzBvFPS-u2&sz=w1000"
      }
},
    {
      "id": "local-07-Track02_cda",
      "driveId": "12d1G6oseUfDyxmE6DcFaSHYkmhvKFZZc",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track02.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track02.cda",
      "media": {
            "driveFileId": "12d1G6oseUfDyxmE6DcFaSHYkmhvKFZZc",
            "pdf": "12d1G6oseUfDyxmE6DcFaSHYkmhvKFZZc",
            "thumbnail": "https://drive.google.com/thumbnail?id=12d1G6oseUfDyxmE6DcFaSHYkmhvKFZZc&sz=w1000"
      }
},
    {
      "id": "local-07-Track14_cda",
      "driveId": "132hLC9rTfK_f0TcaT7uKlf9P_ZDX-5zC",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track14.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track14.cda",
      "media": {
            "driveFileId": "132hLC9rTfK_f0TcaT7uKlf9P_ZDX-5zC",
            "pdf": "132hLC9rTfK_f0TcaT7uKlf9P_ZDX-5zC",
            "thumbnail": "https://drive.google.com/thumbnail?id=132hLC9rTfK_f0TcaT7uKlf9P_ZDX-5zC&sz=w1000"
      }
},
    {
      "id": "local-07-Track13_cda",
      "driveId": "1EfYZWCFDa8ZAQyTY2j5Afhag9Dno92-1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track13.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track13.cda",
      "media": {
            "driveFileId": "1EfYZWCFDa8ZAQyTY2j5Afhag9Dno92-1",
            "pdf": "1EfYZWCFDa8ZAQyTY2j5Afhag9Dno92-1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EfYZWCFDa8ZAQyTY2j5Afhag9Dno92-1&sz=w1000"
      }
},
    {
      "id": "local-07-Track15_cda",
      "driveId": "1DWGmIrjkeKx1YntqpTY1ix_v0PKPawG8",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track15.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track15.cda",
      "media": {
            "driveFileId": "1DWGmIrjkeKx1YntqpTY1ix_v0PKPawG8",
            "pdf": "1DWGmIrjkeKx1YntqpTY1ix_v0PKPawG8",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DWGmIrjkeKx1YntqpTY1ix_v0PKPawG8&sz=w1000"
      }
},
    {
      "id": "local-07-Track17_cda",
      "driveId": "18d-RK3i06tjtAVYifoZdaaTBCBlwlTLf",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track17.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track17.cda",
      "media": {
            "driveFileId": "18d-RK3i06tjtAVYifoZdaaTBCBlwlTLf",
            "pdf": "18d-RK3i06tjtAVYifoZdaaTBCBlwlTLf",
            "thumbnail": "https://drive.google.com/thumbnail?id=18d-RK3i06tjtAVYifoZdaaTBCBlwlTLf&sz=w1000"
      }
},
    {
      "id": "local-07-Track05_cda",
      "driveId": "1bTXzvX33GsTNX2Ho8bs_qQTDsZ7bEDKl",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track05.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track05.cda",
      "media": {
            "driveFileId": "1bTXzvX33GsTNX2Ho8bs_qQTDsZ7bEDKl",
            "pdf": "1bTXzvX33GsTNX2Ho8bs_qQTDsZ7bEDKl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1bTXzvX33GsTNX2Ho8bs_qQTDsZ7bEDKl&sz=w1000"
      }
},
    {
      "id": "local-07-Track12_cda",
      "driveId": "1Roj6EtUcUmr_mEmO6LUdZF6QFmX4NmUd",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track12.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track12.cda",
      "media": {
            "driveFileId": "1Roj6EtUcUmr_mEmO6LUdZF6QFmX4NmUd",
            "pdf": "1Roj6EtUcUmr_mEmO6LUdZF6QFmX4NmUd",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Roj6EtUcUmr_mEmO6LUdZF6QFmX4NmUd&sz=w1000"
      }
},
    {
      "id": "local-07-Track04_cda",
      "driveId": "1m4aPBZ-HltPeHnncXLM03NV_t32UO_cp",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track04.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track04.cda",
      "media": {
            "driveFileId": "1m4aPBZ-HltPeHnncXLM03NV_t32UO_cp",
            "pdf": "1m4aPBZ-HltPeHnncXLM03NV_t32UO_cp",
            "thumbnail": "https://drive.google.com/thumbnail?id=1m4aPBZ-HltPeHnncXLM03NV_t32UO_cp&sz=w1000"
      }
},
    {
      "id": "local-07-Track11_cda",
      "driveId": "1G-zZ9x1al3MkZnB1qbzUixRiC_I3QApT",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track11.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track11.cda",
      "media": {
            "driveFileId": "1G-zZ9x1al3MkZnB1qbzUixRiC_I3QApT",
            "pdf": "1G-zZ9x1al3MkZnB1qbzUixRiC_I3QApT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1G-zZ9x1al3MkZnB1qbzUixRiC_I3QApT&sz=w1000"
      }
},
    {
      "id": "local-07-Track06_cda",
      "driveId": "1YacXcHPa6lbOD71gGLBHqGCC2RxdrRVT",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track06.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track06.cda",
      "media": {
            "driveFileId": "1YacXcHPa6lbOD71gGLBHqGCC2RxdrRVT",
            "pdf": "1YacXcHPa6lbOD71gGLBHqGCC2RxdrRVT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YacXcHPa6lbOD71gGLBHqGCC2RxdrRVT&sz=w1000"
      }
},
    {
      "id": "local-07-Track16_cda",
      "driveId": "1E8jwLgs-VufS74NiGaSDsuvBkxNMPUi1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Música_track06_Dca",
      "title": "Track16.cda",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Música_track06_Dca",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Música_track06_Dca/Track16.cda",
      "media": {
            "driveFileId": "1E8jwLgs-VufS74NiGaSDsuvBkxNMPUi1",
            "pdf": "1E8jwLgs-VufS74NiGaSDsuvBkxNMPUi1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1E8jwLgs-VufS74NiGaSDsuvBkxNMPUi1&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_1_B__nines_minguez_tif",
      "driveId": "17dkLgVQu96MElw9pqEXMt03bSMZqfqi-",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 1-B ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 1-B ©nines minguez.tif",
      "media": {
            "driveFileId": "17dkLgVQu96MElw9pqEXMt03bSMZqfqi-",
            "pdf": "17dkLgVQu96MElw9pqEXMt03bSMZqfqi-",
            "thumbnail": "https://drive.google.com/thumbnail?id=17dkLgVQu96MElw9pqEXMt03bSMZqfqi-&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_2_A__nines_minguez_tif",
      "driveId": "14PP1NEARPdUgWCXXURPI4ZpMWtskiOkm",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 2-A ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 2-A ©nines minguez.tif",
      "media": {
            "driveFileId": "14PP1NEARPdUgWCXXURPI4ZpMWtskiOkm",
            "pdf": "14PP1NEARPdUgWCXXURPI4ZpMWtskiOkm",
            "thumbnail": "https://drive.google.com/thumbnail?id=14PP1NEARPdUgWCXXURPI4ZpMWtskiOkm&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_5__nines_minguez_tif",
      "driveId": "1DbVjubtYy7fIJ3znz_VCIhc1TgpYFmIV",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 5 ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 5 ©nines minguez.tif",
      "media": {
            "driveFileId": "1DbVjubtYy7fIJ3znz_VCIhc1TgpYFmIV",
            "pdf": "1DbVjubtYy7fIJ3znz_VCIhc1TgpYFmIV",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DbVjubtYy7fIJ3znz_VCIhc1TgpYFmIV&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_4_B__nines_minguez_tif",
      "driveId": "1XrrEucmvh_ekTa6tNheMhDW3pfGW09o1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 4-B ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 4-B ©nines minguez.tif",
      "media": {
            "driveFileId": "1XrrEucmvh_ekTa6tNheMhDW3pfGW09o1",
            "pdf": "1XrrEucmvh_ekTa6tNheMhDW3pfGW09o1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1XrrEucmvh_ekTa6tNheMhDW3pfGW09o1&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_3_A__nines_minguez_tif",
      "driveId": "163JFuUuW7mFulrp_OfcmH7XDqMRpHjQC",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 3-A ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 3-A ©nines minguez.tif",
      "media": {
            "driveFileId": "163JFuUuW7mFulrp_OfcmH7XDqMRpHjQC",
            "pdf": "163JFuUuW7mFulrp_OfcmH7XDqMRpHjQC",
            "thumbnail": "https://drive.google.com/thumbnail?id=163JFuUuW7mFulrp_OfcmH7XDqMRpHjQC&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_4_A__nines_minguez_tif",
      "driveId": "1mheNFCn7DGTkBBZnuCzF14HPmYDjqj6R",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 4-A ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 4-A ©nines minguez.tif",
      "media": {
            "driveFileId": "1mheNFCn7DGTkBBZnuCzF14HPmYDjqj6R",
            "pdf": "1mheNFCn7DGTkBBZnuCzF14HPmYDjqj6R",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mheNFCn7DGTkBBZnuCzF14HPmYDjqj6R&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_2_B__nines_minguez_tif",
      "driveId": "10gS1PKDdQhGV53BeMAMexPfWE8CQmhtG",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 2-B ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 2-B ©nines minguez.tif",
      "media": {
            "driveFileId": "10gS1PKDdQhGV53BeMAMexPfWE8CQmhtG",
            "pdf": "10gS1PKDdQhGV53BeMAMexPfWE8CQmhtG",
            "thumbnail": "https://drive.google.com/thumbnail?id=10gS1PKDdQhGV53BeMAMexPfWE8CQmhtG&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_1_A__nines_minguez_tif",
      "driveId": "1AG_PfTTwhD40JaN8j3Xtzlb7JpoDST-o",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 1-A ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 1-A ©nines minguez.tif",
      "media": {
            "driveFileId": "1AG_PfTTwhD40JaN8j3Xtzlb7JpoDST-o",
            "pdf": "1AG_PfTTwhD40JaN8j3Xtzlb7JpoDST-o",
            "thumbnail": "https://drive.google.com/thumbnail?id=1AG_PfTTwhD40JaN8j3Xtzlb7JpoDST-o&sz=w1000"
      }
},
    {
      "id": "local-07-LALAMA_jpg",
      "driveId": "1FtK5RKUhMZZIzKEKXLKtTN-ULwdKks8o",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "LALAMA.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/LALAMA.jpg",
      "media": {
            "driveFileId": "1FtK5RKUhMZZIzKEKXLKtTN-ULwdKks8o",
            "pdf": "1FtK5RKUhMZZIzKEKXLKtTN-ULwdKks8o",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FtK5RKUhMZZIzKEKXLKtTN-ULwdKks8o&sz=w1000"
      }
},
    {
      "id": "local-07-FRANCISO_MORALES_3_B__nines_minguez_tif",
      "driveId": "1PUetPUqW3CMoS7pO8_CyMRyX1amhssWH",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
      "title": "FRANCISO MORALES 3-B ©nines minguez.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_NINES_MINGUEZ_Fotografías_Varias_Manzana_Al_Horno/FRANCISO MORALES 3-B ©nines minguez.tif",
      "media": {
            "driveFileId": "1PUetPUqW3CMoS7pO8_CyMRyX1amhssWH",
            "pdf": "1PUetPUqW3CMoS7pO8_CyMRyX1amhssWH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1PUetPUqW3CMoS7pO8_CyMRyX1amhssWH&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7904_tif",
      "driveId": "1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7904.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7904.tif",
      "media": {
            "driveFileId": "1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx",
            "pdf": "1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7893_tif",
      "driveId": "1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7893.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7893.tif",
      "media": {
            "driveFileId": "1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR",
            "pdf": "1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7879_tif",
      "driveId": "1RIgLqLEMcL00MgIADOf973ml0ydUXO4g",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7879.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7879.tif",
      "media": {
            "driveFileId": "1RIgLqLEMcL00MgIADOf973ml0ydUXO4g",
            "pdf": "1RIgLqLEMcL00MgIADOf973ml0ydUXO4g",
            "thumbnail": "https://drive.google.com/thumbnail?id=1RIgLqLEMcL00MgIADOf973ml0ydUXO4g&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7960_tif",
      "driveId": "18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7960.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7960.tif",
      "media": {
            "driveFileId": "18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB",
            "pdf": "18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB",
            "thumbnail": "https://drive.google.com/thumbnail?id=18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7906_tif",
      "driveId": "1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7906.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7906.tif",
      "media": {
            "driveFileId": "1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k",
            "pdf": "1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k",
            "thumbnail": "https://drive.google.com/thumbnail?id=1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7878_tif",
      "driveId": "1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7878.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7878.tif",
      "media": {
            "driveFileId": "1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq",
            "pdf": "1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7902_tif",
      "driveId": "1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7902.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7902.tif",
      "media": {
            "driveFileId": "1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9",
            "pdf": "1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7957_tif",
      "driveId": "1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_varias",
      "title": "_MG_7957.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_varias/_MG_7957.tif",
      "media": {
            "driveFileId": "1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU",
            "pdf": "1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU",
            "thumbnail": "https://drive.google.com/thumbnail?id=1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7904_tif",
      "driveId": "1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7904.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7904.tif",
      "media": {
            "driveFileId": "1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx",
            "pdf": "1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Ny0Ln5Nb5bRVWroZiKKLRgF8xTLukwgx&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7893_tif",
      "driveId": "1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7893.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7893.tif",
      "media": {
            "driveFileId": "1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR",
            "pdf": "1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-UtkYztYn0_3lif-OlZH_QZTnbI8khUR&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7879_tif",
      "driveId": "1RIgLqLEMcL00MgIADOf973ml0ydUXO4g",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7879.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7879.tif",
      "media": {
            "driveFileId": "1RIgLqLEMcL00MgIADOf973ml0ydUXO4g",
            "pdf": "1RIgLqLEMcL00MgIADOf973ml0ydUXO4g",
            "thumbnail": "https://drive.google.com/thumbnail?id=1RIgLqLEMcL00MgIADOf973ml0ydUXO4g&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7960_tif",
      "driveId": "18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7960.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7960.tif",
      "media": {
            "driveFileId": "18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB",
            "pdf": "18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB",
            "thumbnail": "https://drive.google.com/thumbnail?id=18n6vJPh44nZR56Zdo4Jj1dmGsOXNo_GB&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7906_tif",
      "driveId": "1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7906.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7906.tif",
      "media": {
            "driveFileId": "1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k",
            "pdf": "1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k",
            "thumbnail": "https://drive.google.com/thumbnail?id=1nPzCre0uCSEYs0e_ikvj5xXKWzICds-k&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7878_tif",
      "driveId": "1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7878.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7878.tif",
      "media": {
            "driveFileId": "1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq",
            "pdf": "1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TMqKlS2-Kr1rz_mXVUKlP00BfXVIjFNq&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7902_tif",
      "driveId": "1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7902.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7902.tif",
      "media": {
            "driveFileId": "1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9",
            "pdf": "1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1hADq3PU5MDEyPTCAIkkREUa889OQSGJ9&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_7957_tif",
      "driveId": "1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Varias",
      "title": "_MG_7957.tif",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Varias",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Varias/_MG_7957.tif",
      "media": {
            "driveFileId": "1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU",
            "pdf": "1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU",
            "thumbnail": "https://drive.google.com/thumbnail?id=1On2aBr5vx6mXCHcnQ-4SwHAt71-eYNXU&sz=w1000"
      }
},
    {
      "id": "local-07-ARROZ_MELOSO_DE_POLLO_DE_CAMPO__ESPARDE_AS_Y_JUD_AS_VERDES_pdf",
      "driveId": "143xYVSN5r3U0gwYiTKrgPZch-vpmzj16",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
      "title": "ARROZ MELOSO DE POLLO DE CAMPO, ESPARDEÑAS Y JUDÍAS VERDES.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_2012_Torrefiel_Paco_Morales/ARROZ MELOSO DE POLLO DE CAMPO, ESPARDEÑAS Y JUDÍAS VERDES.pdf",
      "media": {
            "driveFileId": "143xYVSN5r3U0gwYiTKrgPZch-vpmzj16",
            "pdf": "143xYVSN5r3U0gwYiTKrgPZch-vpmzj16",
            "thumbnail": "https://drive.google.com/thumbnail?id=143xYVSN5r3U0gwYiTKrgPZch-vpmzj16&sz=w1000"
      }
},
    {
      "id": "local-07-Plantilla_de_recetas_2011_docx",
      "driveId": "1uLhJbLHrBMKy3lAVbLGWnWkhgJcwFNUl",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
      "title": "Plantilla de recetas 2011.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_2012_Torrefiel_Paco_Morales/Plantilla de recetas 2011.docx",
      "media": {
            "driveFileId": "1uLhJbLHrBMKy3lAVbLGWnWkhgJcwFNUl",
            "pdf": "1uLhJbLHrBMKy3lAVbLGWnWkhgJcwFNUl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1uLhJbLHrBMKy3lAVbLGWnWkhgJcwFNUl&sz=w1000"
      }
},
    {
      "id": "local-07-Plantilla_de_Recetas_doc",
      "driveId": "18Xgq8qRyo_Ig3sIsUd85h4sY2KgSlmRX",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
      "title": "Plantilla de Recetas.doc",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_2012_Torrefiel_Paco_Morales/Plantilla de Recetas.doc",
      "media": {
            "driveFileId": "18Xgq8qRyo_Ig3sIsUd85h4sY2KgSlmRX",
            "pdf": "18Xgq8qRyo_Ig3sIsUd85h4sY2KgSlmRX",
            "thumbnail": "https://drive.google.com/thumbnail?id=18Xgq8qRyo_Ig3sIsUd85h4sY2KgSlmRX&sz=w1000"
      }
},
    {
      "id": "local-07-libro_Paco_TESCOMA_txt",
      "driveId": "1FwZKFsDzhc5Bj789itlqDAyM7DHMljAk",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
      "title": "libro_Paco TESCOMA.txt",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_2012_Torrefiel_Paco_Morales/libro_Paco TESCOMA.txt",
      "media": {
            "driveFileId": "1FwZKFsDzhc5Bj789itlqDAyM7DHMljAk",
            "pdf": "1FwZKFsDzhc5Bj789itlqDAyM7DHMljAk",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FwZKFsDzhc5Bj789itlqDAyM7DHMljAk&sz=w1000"
      }
},
    {
      "id": "local-07-Ensalada_oto_al_pdf",
      "driveId": "1VsraeKUSBjl798s39DMEDBI9elUHmStB",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
      "title": "Ensalada otoñal.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_2012_Torrefiel_Paco_Morales/Ensalada otoñal.pdf",
      "media": {
            "driveFileId": "1VsraeKUSBjl798s39DMEDBI9elUHmStB",
            "pdf": "1VsraeKUSBjl798s39DMEDBI9elUHmStB",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VsraeKUSBjl798s39DMEDBI9elUHmStB&sz=w1000"
      }
},
    {
      "id": "local-07-Proporcines_texturas_docx",
      "driveId": "1P3pXvldDQTVy76xBjEm1owXQqmrB-1B3",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
      "title": "Proporcines texturas.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Recetas_Varias_2012_Torrefiel_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Recetas_Varias_2012_Torrefiel_Paco_Morales/Proporcines texturas.docx",
      "media": {
            "driveFileId": "1P3pXvldDQTVy76xBjEm1owXQqmrB-1B3",
            "pdf": "1P3pXvldDQTVy76xBjEm1owXQqmrB-1B3",
            "thumbnail": "https://drive.google.com/thumbnail?id=1P3pXvldDQTVy76xBjEm1owXQqmrB-1B3&sz=w1000"
      }
},
    {
      "id": "local-07-A5_recetas_dvd_fra_F2_pdf",
      "driveId": "1jBe8OR_FI6b_mTWZVqpFsy5r1HNN5pS_",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Albert_y_Ferrán_Adriá",
      "title": "A5_recetas_dvd_fra_F2.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Albert_y_Ferrán_Adriá",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Albert_y_Ferrán_Adriá/A5_recetas_dvd_fra_F2.pdf",
      "media": {
            "driveFileId": "1jBe8OR_FI6b_mTWZVqpFsy5r1HNN5pS_",
            "pdf": "1jBe8OR_FI6b_mTWZVqpFsy5r1HNN5pS_",
            "thumbnail": "https://drive.google.com/thumbnail?id=1jBe8OR_FI6b_mTWZVqpFsy5r1HNN5pS_&sz=w1000"
      }
},
    {
      "id": "local-07-A5_recetas_dvd_esp_F2_pdf",
      "driveId": "1mJ1tuDTrrAwWQfLbiIOkxYCKZZd-2cG7",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Albert_y_Ferrán_Adriá",
      "title": "A5_recetas_dvd_esp_F2.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Albert_y_Ferrán_Adriá",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Albert_y_Ferrán_Adriá/A5_recetas_dvd_esp_F2.pdf",
      "media": {
            "driveFileId": "1mJ1tuDTrrAwWQfLbiIOkxYCKZZd-2cG7",
            "pdf": "1mJ1tuDTrrAwWQfLbiIOkxYCKZZd-2cG7",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mJ1tuDTrrAwWQfLbiIOkxYCKZZd-2cG7&sz=w1000"
      }
},
    {
      "id": "local-07-A5_recetas_dvd_eng_F2_pdf",
      "driveId": "1KmVfMKGI5fqc9COgIRGVJJoQJyMHvgnh",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Albert_y_Ferrán_Adriá",
      "title": "A5_recetas_dvd_eng_F2.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Albert_y_Ferrán_Adriá",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Albert_y_Ferrán_Adriá/A5_recetas_dvd_eng_F2.pdf",
      "media": {
            "driveFileId": "1KmVfMKGI5fqc9COgIRGVJJoQJyMHvgnh",
            "pdf": "1KmVfMKGI5fqc9COgIRGVJJoQJyMHvgnh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KmVfMKGI5fqc9COgIRGVJJoQJyMHvgnh&sz=w1000"
      }
},
    {
      "id": "local-07-A5_recetas_dvd_ita_F2_pdf",
      "driveId": "1ya80s1kRbQvWL5-akJOVrtKV7_pMCID8",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_VID_Albert_y_Ferrán_Adriá",
      "title": "A5_recetas_dvd_ita_F2.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_VID_Albert_y_Ferrán_Adriá",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_VID_Albert_y_Ferrán_Adriá/A5_recetas_dvd_ita_F2.pdf",
      "media": {
            "driveFileId": "1ya80s1kRbQvWL5-akJOVrtKV7_pMCID8",
            "pdf": "1ya80s1kRbQvWL5-akJOVrtKV7_pMCID8",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ya80s1kRbQvWL5-akJOVrtKV7_pMCID8&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1114_jpg",
      "driveId": "1G6XymlikT7zbdvZC_j85UkvNbbS62Sra",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1114.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1114.jpg",
      "media": {
            "driveFileId": "1G6XymlikT7zbdvZC_j85UkvNbbS62Sra",
            "pdf": "1G6XymlikT7zbdvZC_j85UkvNbbS62Sra",
            "thumbnail": "https://drive.google.com/thumbnail?id=1G6XymlikT7zbdvZC_j85UkvNbbS62Sra&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1177_jpg",
      "driveId": "1FsWOwE5wQeRFNkA95NRt7NToeJxBcVCx",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1177.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1177.jpg",
      "media": {
            "driveFileId": "1FsWOwE5wQeRFNkA95NRt7NToeJxBcVCx",
            "pdf": "1FsWOwE5wQeRFNkA95NRt7NToeJxBcVCx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FsWOwE5wQeRFNkA95NRt7NToeJxBcVCx&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1110_jpg",
      "driveId": "1kcNSULrplRTPdQ-tN6fQPRGzV21q222F",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1110.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1110.jpg",
      "media": {
            "driveFileId": "1kcNSULrplRTPdQ-tN6fQPRGzV21q222F",
            "pdf": "1kcNSULrplRTPdQ-tN6fQPRGzV21q222F",
            "thumbnail": "https://drive.google.com/thumbnail?id=1kcNSULrplRTPdQ-tN6fQPRGzV21q222F&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1186_jpg",
      "driveId": "13JXVJqXNNxDSvRSmTGNzpY346bn3kmgV",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1186.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1186.jpg",
      "media": {
            "driveFileId": "13JXVJqXNNxDSvRSmTGNzpY346bn3kmgV",
            "pdf": "13JXVJqXNNxDSvRSmTGNzpY346bn3kmgV",
            "thumbnail": "https://drive.google.com/thumbnail?id=13JXVJqXNNxDSvRSmTGNzpY346bn3kmgV&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1143_jpg",
      "driveId": "1vjK8pHjrqJkZnMizzQCzll2gaK_NLcXc",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1143.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1143.jpg",
      "media": {
            "driveFileId": "1vjK8pHjrqJkZnMizzQCzll2gaK_NLcXc",
            "pdf": "1vjK8pHjrqJkZnMizzQCzll2gaK_NLcXc",
            "thumbnail": "https://drive.google.com/thumbnail?id=1vjK8pHjrqJkZnMizzQCzll2gaK_NLcXc&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1070_jpg",
      "driveId": "1kmmY7-lfWg-Pgs5grdt2tCldAP3QFlvE",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1070.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1070.jpg",
      "media": {
            "driveFileId": "1kmmY7-lfWg-Pgs5grdt2tCldAP3QFlvE",
            "pdf": "1kmmY7-lfWg-Pgs5grdt2tCldAP3QFlvE",
            "thumbnail": "https://drive.google.com/thumbnail?id=1kmmY7-lfWg-Pgs5grdt2tCldAP3QFlvE&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1131_jpg",
      "driveId": "14FpKe-2XhJPi8UlRKO2dBBsAiSLtX_LW",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1131.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1131.jpg",
      "media": {
            "driveFileId": "14FpKe-2XhJPi8UlRKO2dBBsAiSLtX_LW",
            "pdf": "14FpKe-2XhJPi8UlRKO2dBBsAiSLtX_LW",
            "thumbnail": "https://drive.google.com/thumbnail?id=14FpKe-2XhJPi8UlRKO2dBBsAiSLtX_LW&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1149_jpg",
      "driveId": "1L2b5HVTDWxX0qn_vnbaivejPZMHjsMr0",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1149.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1149.jpg",
      "media": {
            "driveFileId": "1L2b5HVTDWxX0qn_vnbaivejPZMHjsMr0",
            "pdf": "1L2b5HVTDWxX0qn_vnbaivejPZMHjsMr0",
            "thumbnail": "https://drive.google.com/thumbnail?id=1L2b5HVTDWxX0qn_vnbaivejPZMHjsMr0&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1185_jpg",
      "driveId": "1ibx8mvYqIT3tVE4oxmZdPDk03InZI6x_",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1185.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1185.jpg",
      "media": {
            "driveFileId": "1ibx8mvYqIT3tVE4oxmZdPDk03InZI6x_",
            "pdf": "1ibx8mvYqIT3tVE4oxmZdPDk03InZI6x_",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ibx8mvYqIT3tVE4oxmZdPDk03InZI6x_&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1130_jpg",
      "driveId": "1IPtn2wkEatJLjQeDZMr50MhsugznjZYz",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1130.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1130.jpg",
      "media": {
            "driveFileId": "1IPtn2wkEatJLjQeDZMr50MhsugznjZYz",
            "pdf": "1IPtn2wkEatJLjQeDZMr50MhsugznjZYz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IPtn2wkEatJLjQeDZMr50MhsugznjZYz&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1136_jpg",
      "driveId": "1LJ4IsDGc9kh6AMxbduTEhyBzIP4BNib0",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1136.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1136.jpg",
      "media": {
            "driveFileId": "1LJ4IsDGc9kh6AMxbduTEhyBzIP4BNib0",
            "pdf": "1LJ4IsDGc9kh6AMxbduTEhyBzIP4BNib0",
            "thumbnail": "https://drive.google.com/thumbnail?id=1LJ4IsDGc9kh6AMxbduTEhyBzIP4BNib0&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1112_jpg",
      "driveId": "1RBdYFp1xZ02frtH9z25nh_KM8IMaK8wb",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1112.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1112.jpg",
      "media": {
            "driveFileId": "1RBdYFp1xZ02frtH9z25nh_KM8IMaK8wb",
            "pdf": "1RBdYFp1xZ02frtH9z25nh_KM8IMaK8wb",
            "thumbnail": "https://drive.google.com/thumbnail?id=1RBdYFp1xZ02frtH9z25nh_KM8IMaK8wb&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1107_jpg",
      "driveId": "1sDOEUpGq1vG68Dr0yNAvjKj-onxggF4g",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1107.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1107.jpg",
      "media": {
            "driveFileId": "1sDOEUpGq1vG68Dr0yNAvjKj-onxggF4g",
            "pdf": "1sDOEUpGq1vG68Dr0yNAvjKj-onxggF4g",
            "thumbnail": "https://drive.google.com/thumbnail?id=1sDOEUpGq1vG68Dr0yNAvjKj-onxggF4g&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1129_jpg",
      "driveId": "15YrBnrAzFYLEnYAQz3gR3MFz9FkFLPSu",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1129.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1129.jpg",
      "media": {
            "driveFileId": "15YrBnrAzFYLEnYAQz3gR3MFz9FkFLPSu",
            "pdf": "15YrBnrAzFYLEnYAQz3gR3MFz9FkFLPSu",
            "thumbnail": "https://drive.google.com/thumbnail?id=15YrBnrAzFYLEnYAQz3gR3MFz9FkFLPSu&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1133_jpg",
      "driveId": "1IZNPQ_w8k0q_5IWkWsWYp6hobfUM5dSm",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1133.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1133.jpg",
      "media": {
            "driveFileId": "1IZNPQ_w8k0q_5IWkWsWYp6hobfUM5dSm",
            "pdf": "1IZNPQ_w8k0q_5IWkWsWYp6hobfUM5dSm",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IZNPQ_w8k0q_5IWkWsWYp6hobfUM5dSm&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1169_jpg",
      "driveId": "1VSaTgyc609uDbv2kau61A1jy-uW6jQJv",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1169.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1169.jpg",
      "media": {
            "driveFileId": "1VSaTgyc609uDbv2kau61A1jy-uW6jQJv",
            "pdf": "1VSaTgyc609uDbv2kau61A1jy-uW6jQJv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VSaTgyc609uDbv2kau61A1jy-uW6jQJv&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1071_jpg",
      "driveId": "16UXZAzA_gsSa6SvDAOhYPi5CfbNYejy8",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1071.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1071.jpg",
      "media": {
            "driveFileId": "16UXZAzA_gsSa6SvDAOhYPi5CfbNYejy8",
            "pdf": "16UXZAzA_gsSa6SvDAOhYPi5CfbNYejy8",
            "thumbnail": "https://drive.google.com/thumbnail?id=16UXZAzA_gsSa6SvDAOhYPi5CfbNYejy8&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1198_jpg",
      "driveId": "1xjvwO7JCFzftdPtzludKOWRj8PCi80Kt",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1198.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1198.jpg",
      "media": {
            "driveFileId": "1xjvwO7JCFzftdPtzludKOWRj8PCi80Kt",
            "pdf": "1xjvwO7JCFzftdPtzludKOWRj8PCi80Kt",
            "thumbnail": "https://drive.google.com/thumbnail?id=1xjvwO7JCFzftdPtzludKOWRj8PCi80Kt&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1170_jpg",
      "driveId": "1mGCH6yWqbmvHfxwdQ6IaX2i32Erl2dvu",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1170.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1170.jpg",
      "media": {
            "driveFileId": "1mGCH6yWqbmvHfxwdQ6IaX2i32Erl2dvu",
            "pdf": "1mGCH6yWqbmvHfxwdQ6IaX2i32Erl2dvu",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mGCH6yWqbmvHfxwdQ6IaX2i32Erl2dvu&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1172_jpg",
      "driveId": "1YiB7-w7M9EbDl71qBVGeHd7SVbek8BGr",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1172.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1172.jpg",
      "media": {
            "driveFileId": "1YiB7-w7M9EbDl71qBVGeHd7SVbek8BGr",
            "pdf": "1YiB7-w7M9EbDl71qBVGeHd7SVbek8BGr",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YiB7-w7M9EbDl71qBVGeHd7SVbek8BGr&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1168_jpg",
      "driveId": "121xktQsGku0p64DjDfLMYocukBnu0SEQ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1168.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1168.jpg",
      "media": {
            "driveFileId": "121xktQsGku0p64DjDfLMYocukBnu0SEQ",
            "pdf": "121xktQsGku0p64DjDfLMYocukBnu0SEQ",
            "thumbnail": "https://drive.google.com/thumbnail?id=121xktQsGku0p64DjDfLMYocukBnu0SEQ&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1161_jpg",
      "driveId": "1HFsRCKwVhyUIVKvM2RnJtd_u6IJOraCI",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1161.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1161.jpg",
      "media": {
            "driveFileId": "1HFsRCKwVhyUIVKvM2RnJtd_u6IJOraCI",
            "pdf": "1HFsRCKwVhyUIVKvM2RnJtd_u6IJOraCI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1HFsRCKwVhyUIVKvM2RnJtd_u6IJOraCI&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1087_jpg",
      "driveId": "1iM1M7MJ8i8KKuJG0kqBZ2pShVG4e_CL4",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1087.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1087.jpg",
      "media": {
            "driveFileId": "1iM1M7MJ8i8KKuJG0kqBZ2pShVG4e_CL4",
            "pdf": "1iM1M7MJ8i8KKuJG0kqBZ2pShVG4e_CL4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1iM1M7MJ8i8KKuJG0kqBZ2pShVG4e_CL4&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1178_jpg",
      "driveId": "12nX5oYjgoyW9-HzZHUHLq_X6Ly9oDB6G",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1178.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1178.jpg",
      "media": {
            "driveFileId": "12nX5oYjgoyW9-HzZHUHLq_X6Ly9oDB6G",
            "pdf": "12nX5oYjgoyW9-HzZHUHLq_X6Ly9oDB6G",
            "thumbnail": "https://drive.google.com/thumbnail?id=12nX5oYjgoyW9-HzZHUHLq_X6Ly9oDB6G&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1159_jpg",
      "driveId": "1UuVc5lJkb376sXl2XgUexaZBGk6EJOpl",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1159.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1159.jpg",
      "media": {
            "driveFileId": "1UuVc5lJkb376sXl2XgUexaZBGk6EJOpl",
            "pdf": "1UuVc5lJkb376sXl2XgUexaZBGk6EJOpl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1UuVc5lJkb376sXl2XgUexaZBGk6EJOpl&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1166_jpg",
      "driveId": "1Zo-KP24Z7XLKO8lTWNO2NRNYkN5oyIpE",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1166.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1166.jpg",
      "media": {
            "driveFileId": "1Zo-KP24Z7XLKO8lTWNO2NRNYkN5oyIpE",
            "pdf": "1Zo-KP24Z7XLKO8lTWNO2NRNYkN5oyIpE",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Zo-KP24Z7XLKO8lTWNO2NRNYkN5oyIpE&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1082_jpg",
      "driveId": "1718OsfP3F_QF2kNqIdVLv2d2ppIW62d8",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1082.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1082.jpg",
      "media": {
            "driveFileId": "1718OsfP3F_QF2kNqIdVLv2d2ppIW62d8",
            "pdf": "1718OsfP3F_QF2kNqIdVLv2d2ppIW62d8",
            "thumbnail": "https://drive.google.com/thumbnail?id=1718OsfP3F_QF2kNqIdVLv2d2ppIW62d8&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1134_jpg",
      "driveId": "1qVvkMRuahH60nwVXWcYzVjUCau12H447",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1134.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1134.jpg",
      "media": {
            "driveFileId": "1qVvkMRuahH60nwVXWcYzVjUCau12H447",
            "pdf": "1qVvkMRuahH60nwVXWcYzVjUCau12H447",
            "thumbnail": "https://drive.google.com/thumbnail?id=1qVvkMRuahH60nwVXWcYzVjUCau12H447&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1180_jpg",
      "driveId": "1gSq7RlotSp7MV6MFK_AcePHkf8w0wcVD",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1180.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1180.jpg",
      "media": {
            "driveFileId": "1gSq7RlotSp7MV6MFK_AcePHkf8w0wcVD",
            "pdf": "1gSq7RlotSp7MV6MFK_AcePHkf8w0wcVD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gSq7RlotSp7MV6MFK_AcePHkf8w0wcVD&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1076_jpg",
      "driveId": "1q9B-BVWkQqhfZ0vhKGAjnnuDjSfnuN_-",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1076.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1076.jpg",
      "media": {
            "driveFileId": "1q9B-BVWkQqhfZ0vhKGAjnnuDjSfnuN_-",
            "pdf": "1q9B-BVWkQqhfZ0vhKGAjnnuDjSfnuN_-",
            "thumbnail": "https://drive.google.com/thumbnail?id=1q9B-BVWkQqhfZ0vhKGAjnnuDjSfnuN_-&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1125_jpg",
      "driveId": "1UohaduOhEEs0Nso9zYX2sjC49xEr2I-D",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1125.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1125.jpg",
      "media": {
            "driveFileId": "1UohaduOhEEs0Nso9zYX2sjC49xEr2I-D",
            "pdf": "1UohaduOhEEs0Nso9zYX2sjC49xEr2I-D",
            "thumbnail": "https://drive.google.com/thumbnail?id=1UohaduOhEEs0Nso9zYX2sjC49xEr2I-D&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1173_jpg",
      "driveId": "1sMy9SP-jL8HgJm9axzjlp0kMRoqV_R3A",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1173.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1173.jpg",
      "media": {
            "driveFileId": "1sMy9SP-jL8HgJm9axzjlp0kMRoqV_R3A",
            "pdf": "1sMy9SP-jL8HgJm9axzjlp0kMRoqV_R3A",
            "thumbnail": "https://drive.google.com/thumbnail?id=1sMy9SP-jL8HgJm9axzjlp0kMRoqV_R3A&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1151_jpg",
      "driveId": "11VTUqk9sTEpcSjg22wgfUF9Kmg95TACJ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1151.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1151.jpg",
      "media": {
            "driveFileId": "11VTUqk9sTEpcSjg22wgfUF9Kmg95TACJ",
            "pdf": "11VTUqk9sTEpcSjg22wgfUF9Kmg95TACJ",
            "thumbnail": "https://drive.google.com/thumbnail?id=11VTUqk9sTEpcSjg22wgfUF9Kmg95TACJ&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1108_jpg",
      "driveId": "1g7qsS2fmqZU6VbfZ9Qt_or88rHxA5Z_f",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1108.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1108.jpg",
      "media": {
            "driveFileId": "1g7qsS2fmqZU6VbfZ9Qt_or88rHxA5Z_f",
            "pdf": "1g7qsS2fmqZU6VbfZ9Qt_or88rHxA5Z_f",
            "thumbnail": "https://drive.google.com/thumbnail?id=1g7qsS2fmqZU6VbfZ9Qt_or88rHxA5Z_f&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1150_jpg",
      "driveId": "11y8rRzcPR9N4N7_orddWqPZ4isV5vrJc",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1150.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1150.jpg",
      "media": {
            "driveFileId": "11y8rRzcPR9N4N7_orddWqPZ4isV5vrJc",
            "pdf": "11y8rRzcPR9N4N7_orddWqPZ4isV5vrJc",
            "thumbnail": "https://drive.google.com/thumbnail?id=11y8rRzcPR9N4N7_orddWqPZ4isV5vrJc&sz=w1000"
      }
},
    {
      "id": "local-07-_MG_1152_jpg",
      "driveId": "16gJOUbsGZnvrG6egPHb49lRG7m0hlOBX",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Hotel_Ferrero",
      "title": "_MG_1152.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Hotel_Ferrero",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Hotel_Ferrero/_MG_1152.jpg",
      "media": {
            "driveFileId": "16gJOUbsGZnvrG6egPHb49lRG7m0hlOBX",
            "pdf": "16gJOUbsGZnvrG6egPHb49lRG7m0hlOBX",
            "thumbnail": "https://drive.google.com/thumbnail?id=16gJOUbsGZnvrG6egPHb49lRG7m0hlOBX&sz=w1000"
      }
},
    {
      "id": "local-07-file000122_jpg",
      "driveId": "1_5nf2mMCx8NDbVV4LZYPMLp6_3zvIQV5",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000122.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000122.jpg",
      "media": {
            "driveFileId": "1_5nf2mMCx8NDbVV4LZYPMLp6_3zvIQV5",
            "pdf": "1_5nf2mMCx8NDbVV4LZYPMLp6_3zvIQV5",
            "thumbnail": "https://drive.google.com/thumbnail?id=1_5nf2mMCx8NDbVV4LZYPMLp6_3zvIQV5&sz=w1000"
      }
},
    {
      "id": "local-07-file000139_jpg",
      "driveId": "1YeVePMK2j24gRuyC1EXIF-YOSJEVXPjL",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000139.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000139.jpg",
      "media": {
            "driveFileId": "1YeVePMK2j24gRuyC1EXIF-YOSJEVXPjL",
            "pdf": "1YeVePMK2j24gRuyC1EXIF-YOSJEVXPjL",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YeVePMK2j24gRuyC1EXIF-YOSJEVXPjL&sz=w1000"
      }
},
    {
      "id": "local-07-file000125_jpg",
      "driveId": "1ibLzC3FCDwJrBcPoKx3HDtMa6Y24xiub",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000125.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000125.jpg",
      "media": {
            "driveFileId": "1ibLzC3FCDwJrBcPoKx3HDtMa6Y24xiub",
            "pdf": "1ibLzC3FCDwJrBcPoKx3HDtMa6Y24xiub",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ibLzC3FCDwJrBcPoKx3HDtMa6Y24xiub&sz=w1000"
      }
},
    {
      "id": "local-07-file000119_jpg",
      "driveId": "1u3X9_9YHi0f9gTR5OUxdSpOTv-eklsMR",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000119.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000119.jpg",
      "media": {
            "driveFileId": "1u3X9_9YHi0f9gTR5OUxdSpOTv-eklsMR",
            "pdf": "1u3X9_9YHi0f9gTR5OUxdSpOTv-eklsMR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1u3X9_9YHi0f9gTR5OUxdSpOTv-eklsMR&sz=w1000"
      }
},
    {
      "id": "local-07-file000120_jpg",
      "driveId": "1BUxPxKLeDeNxK1USLCVcCNyVnKw_nGO4",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000120.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000120.jpg",
      "media": {
            "driveFileId": "1BUxPxKLeDeNxK1USLCVcCNyVnKw_nGO4",
            "pdf": "1BUxPxKLeDeNxK1USLCVcCNyVnKw_nGO4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1BUxPxKLeDeNxK1USLCVcCNyVnKw_nGO4&sz=w1000"
      }
},
    {
      "id": "local-07-file000101_jpg",
      "driveId": "1P4jhD0rhAZbM1RlgLZUrCMV3310oenRz",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000101.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000101.jpg",
      "media": {
            "driveFileId": "1P4jhD0rhAZbM1RlgLZUrCMV3310oenRz",
            "pdf": "1P4jhD0rhAZbM1RlgLZUrCMV3310oenRz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1P4jhD0rhAZbM1RlgLZUrCMV3310oenRz&sz=w1000"
      }
},
    {
      "id": "local-07-file000130_jpg",
      "driveId": "1pNGjPQd9jbPUxNMNN1krNXoMZgEow9dk",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000130.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000130.jpg",
      "media": {
            "driveFileId": "1pNGjPQd9jbPUxNMNN1krNXoMZgEow9dk",
            "pdf": "1pNGjPQd9jbPUxNMNN1krNXoMZgEow9dk",
            "thumbnail": "https://drive.google.com/thumbnail?id=1pNGjPQd9jbPUxNMNN1krNXoMZgEow9dk&sz=w1000"
      }
},
    {
      "id": "local-07-file000127_jpg",
      "driveId": "1bF0k-5drxOfz4Ukz1C6WUdVATEFTaO55",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000127.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000127.jpg",
      "media": {
            "driveFileId": "1bF0k-5drxOfz4Ukz1C6WUdVATEFTaO55",
            "pdf": "1bF0k-5drxOfz4Ukz1C6WUdVATEFTaO55",
            "thumbnail": "https://drive.google.com/thumbnail?id=1bF0k-5drxOfz4Ukz1C6WUdVATEFTaO55&sz=w1000"
      }
},
    {
      "id": "local-07-file000118_jpg",
      "driveId": "17a21g7HfaAgNMOa4Sfj2pExyB9HqyUqy",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000118.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000118.jpg",
      "media": {
            "driveFileId": "17a21g7HfaAgNMOa4Sfj2pExyB9HqyUqy",
            "pdf": "17a21g7HfaAgNMOa4Sfj2pExyB9HqyUqy",
            "thumbnail": "https://drive.google.com/thumbnail?id=17a21g7HfaAgNMOa4Sfj2pExyB9HqyUqy&sz=w1000"
      }
},
    {
      "id": "local-07-file000095_jpg",
      "driveId": "1aoj82-r93DDArQQiK0fIH8khihIcPFUI",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000095.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000095.jpg",
      "media": {
            "driveFileId": "1aoj82-r93DDArQQiK0fIH8khihIcPFUI",
            "pdf": "1aoj82-r93DDArQQiK0fIH8khihIcPFUI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aoj82-r93DDArQQiK0fIH8khihIcPFUI&sz=w1000"
      }
},
    {
      "id": "local-07-file000132_jpg",
      "driveId": "1eLNCB--ozx-9ZlqP3V-cXuCOPa4spdTA",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000132.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000132.jpg",
      "media": {
            "driveFileId": "1eLNCB--ozx-9ZlqP3V-cXuCOPa4spdTA",
            "pdf": "1eLNCB--ozx-9ZlqP3V-cXuCOPa4spdTA",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eLNCB--ozx-9ZlqP3V-cXuCOPa4spdTA&sz=w1000"
      }
},
    {
      "id": "local-07-file000113_jpg",
      "driveId": "11-5jUXESu7gGQQZJ_3ykk68vMpPSJM54",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000113.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000113.jpg",
      "media": {
            "driveFileId": "11-5jUXESu7gGQQZJ_3ykk68vMpPSJM54",
            "pdf": "11-5jUXESu7gGQQZJ_3ykk68vMpPSJM54",
            "thumbnail": "https://drive.google.com/thumbnail?id=11-5jUXESu7gGQQZJ_3ykk68vMpPSJM54&sz=w1000"
      }
},
    {
      "id": "local-07-file000110_jpg",
      "driveId": "1mWCqT7nQpmK0ZFFRimsXvKkEWrqC_Sm9",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000110.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000110.jpg",
      "media": {
            "driveFileId": "1mWCqT7nQpmK0ZFFRimsXvKkEWrqC_Sm9",
            "pdf": "1mWCqT7nQpmK0ZFFRimsXvKkEWrqC_Sm9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mWCqT7nQpmK0ZFFRimsXvKkEWrqC_Sm9&sz=w1000"
      }
},
    {
      "id": "local-07-file000103_jpg",
      "driveId": "1a-3awPqRxHzOhz2sUZzMGnDOM5ZaPRDu",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000103.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000103.jpg",
      "media": {
            "driveFileId": "1a-3awPqRxHzOhz2sUZzMGnDOM5ZaPRDu",
            "pdf": "1a-3awPqRxHzOhz2sUZzMGnDOM5ZaPRDu",
            "thumbnail": "https://drive.google.com/thumbnail?id=1a-3awPqRxHzOhz2sUZzMGnDOM5ZaPRDu&sz=w1000"
      }
},
    {
      "id": "local-07-file000131_jpg",
      "driveId": "1-iAj4wkhFAqi8Ak6U5Dnv14L-63MaF1y",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000131.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000131.jpg",
      "media": {
            "driveFileId": "1-iAj4wkhFAqi8Ak6U5Dnv14L-63MaF1y",
            "pdf": "1-iAj4wkhFAqi8Ak6U5Dnv14L-63MaF1y",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-iAj4wkhFAqi8Ak6U5Dnv14L-63MaF1y&sz=w1000"
      }
},
    {
      "id": "local-07-file000117_jpg",
      "driveId": "1d7XuEBOqphaPbtbN9wL-FKVvIAxlRm-D",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000117.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000117.jpg",
      "media": {
            "driveFileId": "1d7XuEBOqphaPbtbN9wL-FKVvIAxlRm-D",
            "pdf": "1d7XuEBOqphaPbtbN9wL-FKVvIAxlRm-D",
            "thumbnail": "https://drive.google.com/thumbnail?id=1d7XuEBOqphaPbtbN9wL-FKVvIAxlRm-D&sz=w1000"
      }
},
    {
      "id": "local-07-file000094_jpg",
      "driveId": "1pgZJdhfp_SqXJL9-RVqqBJa_kBXIRspz",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000094.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000094.jpg",
      "media": {
            "driveFileId": "1pgZJdhfp_SqXJL9-RVqqBJa_kBXIRspz",
            "pdf": "1pgZJdhfp_SqXJL9-RVqqBJa_kBXIRspz",
            "thumbnail": "https://drive.google.com/thumbnail?id=1pgZJdhfp_SqXJL9-RVqqBJa_kBXIRspz&sz=w1000"
      }
},
    {
      "id": "local-07-file000123_jpg",
      "driveId": "1EZqWBdJbbpXkcQ_NEf1fH5Ad1Vxg3x-b",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000123.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000123.jpg",
      "media": {
            "driveFileId": "1EZqWBdJbbpXkcQ_NEf1fH5Ad1Vxg3x-b",
            "pdf": "1EZqWBdJbbpXkcQ_NEf1fH5Ad1Vxg3x-b",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EZqWBdJbbpXkcQ_NEf1fH5Ad1Vxg3x-b&sz=w1000"
      }
},
    {
      "id": "local-07-file000126_jpg",
      "driveId": "1VYsmLlJbYIad-yH7QNLFGc1hOOadzh5q",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000126.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000126.jpg",
      "media": {
            "driveFileId": "1VYsmLlJbYIad-yH7QNLFGc1hOOadzh5q",
            "pdf": "1VYsmLlJbYIad-yH7QNLFGc1hOOadzh5q",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VYsmLlJbYIad-yH7QNLFGc1hOOadzh5q&sz=w1000"
      }
},
    {
      "id": "local-07-file000133_jpg",
      "driveId": "10q8hAzi91BQCBs5gZhLxcHpEQT24Hzi1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000133.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000133.jpg",
      "media": {
            "driveFileId": "10q8hAzi91BQCBs5gZhLxcHpEQT24Hzi1",
            "pdf": "10q8hAzi91BQCBs5gZhLxcHpEQT24Hzi1",
            "thumbnail": "https://drive.google.com/thumbnail?id=10q8hAzi91BQCBs5gZhLxcHpEQT24Hzi1&sz=w1000"
      }
},
    {
      "id": "local-07-file000140_jpg",
      "driveId": "1DdD5iBEXuIUZNlkoMpZI6QKhsMTOUM7M",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000140.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000140.jpg",
      "media": {
            "driveFileId": "1DdD5iBEXuIUZNlkoMpZI6QKhsMTOUM7M",
            "pdf": "1DdD5iBEXuIUZNlkoMpZI6QKhsMTOUM7M",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DdD5iBEXuIUZNlkoMpZI6QKhsMTOUM7M&sz=w1000"
      }
},
    {
      "id": "local-07-file000107_jpg",
      "driveId": "1yHvwrpzx9kJm6ErdVp3c-WOicRGr-ZCK",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000107.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000107.jpg",
      "media": {
            "driveFileId": "1yHvwrpzx9kJm6ErdVp3c-WOicRGr-ZCK",
            "pdf": "1yHvwrpzx9kJm6ErdVp3c-WOicRGr-ZCK",
            "thumbnail": "https://drive.google.com/thumbnail?id=1yHvwrpzx9kJm6ErdVp3c-WOicRGr-ZCK&sz=w1000"
      }
},
    {
      "id": "local-07-file000116_jpg",
      "driveId": "1-bdKtLMTdVeOgE3MzCbt9sSQosPQ9zSN",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000116.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000116.jpg",
      "media": {
            "driveFileId": "1-bdKtLMTdVeOgE3MzCbt9sSQosPQ9zSN",
            "pdf": "1-bdKtLMTdVeOgE3MzCbt9sSQosPQ9zSN",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-bdKtLMTdVeOgE3MzCbt9sSQosPQ9zSN&sz=w1000"
      }
},
    {
      "id": "local-07-file000091_jpg",
      "driveId": "12pcDjI1KRrfISaYuneDUc0BkYyJuDVPI",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000091.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000091.jpg",
      "media": {
            "driveFileId": "12pcDjI1KRrfISaYuneDUc0BkYyJuDVPI",
            "pdf": "12pcDjI1KRrfISaYuneDUc0BkYyJuDVPI",
            "thumbnail": "https://drive.google.com/thumbnail?id=12pcDjI1KRrfISaYuneDUc0BkYyJuDVPI&sz=w1000"
      }
},
    {
      "id": "local-07-file000138_jpg",
      "driveId": "1WX3mf5zP4HgrM3cChj6Oiepp7CxAQmf6",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000138.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000138.jpg",
      "media": {
            "driveFileId": "1WX3mf5zP4HgrM3cChj6Oiepp7CxAQmf6",
            "pdf": "1WX3mf5zP4HgrM3cChj6Oiepp7CxAQmf6",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WX3mf5zP4HgrM3cChj6Oiepp7CxAQmf6&sz=w1000"
      }
},
    {
      "id": "local-07-file000112_jpg",
      "driveId": "1sr5TH7oLPDvwDrztpfs51kCebHvBgdBZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000112.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000112.jpg",
      "media": {
            "driveFileId": "1sr5TH7oLPDvwDrztpfs51kCebHvBgdBZ",
            "pdf": "1sr5TH7oLPDvwDrztpfs51kCebHvBgdBZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1sr5TH7oLPDvwDrztpfs51kCebHvBgdBZ&sz=w1000"
      }
},
    {
      "id": "local-07-file000105_jpg",
      "driveId": "1Pz5TIGwcuVYL2xmmZQZVY2mcelQ7SoXi",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000105.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000105.jpg",
      "media": {
            "driveFileId": "1Pz5TIGwcuVYL2xmmZQZVY2mcelQ7SoXi",
            "pdf": "1Pz5TIGwcuVYL2xmmZQZVY2mcelQ7SoXi",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Pz5TIGwcuVYL2xmmZQZVY2mcelQ7SoXi&sz=w1000"
      }
},
    {
      "id": "local-07-file000111_jpg",
      "driveId": "17SRTzhDOw7mK6OD9UTbkTgJbm5ezP9QA",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000111.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000111.jpg",
      "media": {
            "driveFileId": "17SRTzhDOw7mK6OD9UTbkTgJbm5ezP9QA",
            "pdf": "17SRTzhDOw7mK6OD9UTbkTgJbm5ezP9QA",
            "thumbnail": "https://drive.google.com/thumbnail?id=17SRTzhDOw7mK6OD9UTbkTgJbm5ezP9QA&sz=w1000"
      }
},
    {
      "id": "local-07-file000102_jpg",
      "driveId": "16uhp42njO_8nZ9rb14JqJdcZt2-N66WR",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000102.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000102.jpg",
      "media": {
            "driveFileId": "16uhp42njO_8nZ9rb14JqJdcZt2-N66WR",
            "pdf": "16uhp42njO_8nZ9rb14JqJdcZt2-N66WR",
            "thumbnail": "https://drive.google.com/thumbnail?id=16uhp42njO_8nZ9rb14JqJdcZt2-N66WR&sz=w1000"
      }
},
    {
      "id": "local-07-file000051_jpg",
      "driveId": "1dNYTEDYZHvl1xkYvdDcN-xk8Qcymj_wn",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000051.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000051.jpg",
      "media": {
            "driveFileId": "1dNYTEDYZHvl1xkYvdDcN-xk8Qcymj_wn",
            "pdf": "1dNYTEDYZHvl1xkYvdDcN-xk8Qcymj_wn",
            "thumbnail": "https://drive.google.com/thumbnail?id=1dNYTEDYZHvl1xkYvdDcN-xk8Qcymj_wn&sz=w1000"
      }
},
    {
      "id": "local-07-file000136_jpg",
      "driveId": "14bdcEmngcwiKK4KkolAedaBIJBF5eDiS",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000136.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000136.jpg",
      "media": {
            "driveFileId": "14bdcEmngcwiKK4KkolAedaBIJBF5eDiS",
            "pdf": "14bdcEmngcwiKK4KkolAedaBIJBF5eDiS",
            "thumbnail": "https://drive.google.com/thumbnail?id=14bdcEmngcwiKK4KkolAedaBIJBF5eDiS&sz=w1000"
      }
},
    {
      "id": "local-07-file000093_jpg",
      "driveId": "1NpPWlBBmpPa4S5DsvE0vSXZfPdbX6ri5",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000093.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000093.jpg",
      "media": {
            "driveFileId": "1NpPWlBBmpPa4S5DsvE0vSXZfPdbX6ri5",
            "pdf": "1NpPWlBBmpPa4S5DsvE0vSXZfPdbX6ri5",
            "thumbnail": "https://drive.google.com/thumbnail?id=1NpPWlBBmpPa4S5DsvE0vSXZfPdbX6ri5&sz=w1000"
      }
},
    {
      "id": "local-07-file000114_jpg",
      "driveId": "1TvUQ2RWXXyKHvmyBwBG8KHLhN-4lFT1A",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000114.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000114.jpg",
      "media": {
            "driveFileId": "1TvUQ2RWXXyKHvmyBwBG8KHLhN-4lFT1A",
            "pdf": "1TvUQ2RWXXyKHvmyBwBG8KHLhN-4lFT1A",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TvUQ2RWXXyKHvmyBwBG8KHLhN-4lFT1A&sz=w1000"
      }
},
    {
      "id": "local-07-file000090_jpg",
      "driveId": "1uiWtcTypJivmixBjGGmKcl2_Ue0OC1Bp",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000090.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000090.jpg",
      "media": {
            "driveFileId": "1uiWtcTypJivmixBjGGmKcl2_Ue0OC1Bp",
            "pdf": "1uiWtcTypJivmixBjGGmKcl2_Ue0OC1Bp",
            "thumbnail": "https://drive.google.com/thumbnail?id=1uiWtcTypJivmixBjGGmKcl2_Ue0OC1Bp&sz=w1000"
      }
},
    {
      "id": "local-07-file000092_jpg",
      "driveId": "1neCkHXfKmvJ_zoy7OpoXGkDbhIgDKy2O",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000092.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000092.jpg",
      "media": {
            "driveFileId": "1neCkHXfKmvJ_zoy7OpoXGkDbhIgDKy2O",
            "pdf": "1neCkHXfKmvJ_zoy7OpoXGkDbhIgDKy2O",
            "thumbnail": "https://drive.google.com/thumbnail?id=1neCkHXfKmvJ_zoy7OpoXGkDbhIgDKy2O&sz=w1000"
      }
},
    {
      "id": "local-07-file000106_jpg",
      "driveId": "1zQ90vV9dkZlDlt0eYQs9gdWt7jxSeJJL",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000106.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000106.jpg",
      "media": {
            "driveFileId": "1zQ90vV9dkZlDlt0eYQs9gdWt7jxSeJJL",
            "pdf": "1zQ90vV9dkZlDlt0eYQs9gdWt7jxSeJJL",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zQ90vV9dkZlDlt0eYQs9gdWt7jxSeJJL&sz=w1000"
      }
},
    {
      "id": "local-07-file000128_jpg",
      "driveId": "1T3aPXTwOYf28-U4YxBz_Dsfx2TS8exRT",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000128.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000128.jpg",
      "media": {
            "driveFileId": "1T3aPXTwOYf28-U4YxBz_Dsfx2TS8exRT",
            "pdf": "1T3aPXTwOYf28-U4YxBz_Dsfx2TS8exRT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1T3aPXTwOYf28-U4YxBz_Dsfx2TS8exRT&sz=w1000"
      }
},
    {
      "id": "local-07-file000104_jpg",
      "driveId": "1yufBNIVPAVSw-4RkYpxJJPldFPnowto4",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000104.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000104.jpg",
      "media": {
            "driveFileId": "1yufBNIVPAVSw-4RkYpxJJPldFPnowto4",
            "pdf": "1yufBNIVPAVSw-4RkYpxJJPldFPnowto4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1yufBNIVPAVSw-4RkYpxJJPldFPnowto4&sz=w1000"
      }
},
    {
      "id": "local-07-file000099_jpg",
      "driveId": "1IQeYwjQX9-SMfn5pz4g2IwZ1jR9IDakw",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000099.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000099.jpg",
      "media": {
            "driveFileId": "1IQeYwjQX9-SMfn5pz4g2IwZ1jR9IDakw",
            "pdf": "1IQeYwjQX9-SMfn5pz4g2IwZ1jR9IDakw",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IQeYwjQX9-SMfn5pz4g2IwZ1jR9IDakw&sz=w1000"
      }
},
    {
      "id": "local-07-file000109_jpg",
      "driveId": "1JcuSxWbFlCith7vT8IGDe5_GJdcTfv1L",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000109.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000109.jpg",
      "media": {
            "driveFileId": "1JcuSxWbFlCith7vT8IGDe5_GJdcTfv1L",
            "pdf": "1JcuSxWbFlCith7vT8IGDe5_GJdcTfv1L",
            "thumbnail": "https://drive.google.com/thumbnail?id=1JcuSxWbFlCith7vT8IGDe5_GJdcTfv1L&sz=w1000"
      }
},
    {
      "id": "local-07-file000143_jpg",
      "driveId": "16d310HJKpUhaeV1EV8uwn-I5iUxb9S6s",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000143.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000143.jpg",
      "media": {
            "driveFileId": "16d310HJKpUhaeV1EV8uwn-I5iUxb9S6s",
            "pdf": "16d310HJKpUhaeV1EV8uwn-I5iUxb9S6s",
            "thumbnail": "https://drive.google.com/thumbnail?id=16d310HJKpUhaeV1EV8uwn-I5iUxb9S6s&sz=w1000"
      }
},
    {
      "id": "local-07-file000121_jpg",
      "driveId": "1WULE2bcnM6MTiWwjvT-24HSPGY0D7Z3-",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000121.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000121.jpg",
      "media": {
            "driveFileId": "1WULE2bcnM6MTiWwjvT-24HSPGY0D7Z3-",
            "pdf": "1WULE2bcnM6MTiWwjvT-24HSPGY0D7Z3-",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WULE2bcnM6MTiWwjvT-24HSPGY0D7Z3-&sz=w1000"
      }
},
    {
      "id": "local-07-file000050_jpg",
      "driveId": "1M1OhjrN8nRW8ErinOO5VuKSfVsGbDaEd",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000050.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000050.jpg",
      "media": {
            "driveFileId": "1M1OhjrN8nRW8ErinOO5VuKSfVsGbDaEd",
            "pdf": "1M1OhjrN8nRW8ErinOO5VuKSfVsGbDaEd",
            "thumbnail": "https://drive.google.com/thumbnail?id=1M1OhjrN8nRW8ErinOO5VuKSfVsGbDaEd&sz=w1000"
      }
},
    {
      "id": "local-07-file000087_jpg",
      "driveId": "1okPUEFYTX3NG_Qyy6WEgVWi6dXwnX1B4",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000087.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000087.jpg",
      "media": {
            "driveFileId": "1okPUEFYTX3NG_Qyy6WEgVWi6dXwnX1B4",
            "pdf": "1okPUEFYTX3NG_Qyy6WEgVWi6dXwnX1B4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1okPUEFYTX3NG_Qyy6WEgVWi6dXwnX1B4&sz=w1000"
      }
},
    {
      "id": "local-07-file000100_jpg",
      "driveId": "199kyOSQn_eD94sZORKgjWifYowgtRabT",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000100.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000100.jpg",
      "media": {
            "driveFileId": "199kyOSQn_eD94sZORKgjWifYowgtRabT",
            "pdf": "199kyOSQn_eD94sZORKgjWifYowgtRabT",
            "thumbnail": "https://drive.google.com/thumbnail?id=199kyOSQn_eD94sZORKgjWifYowgtRabT&sz=w1000"
      }
},
    {
      "id": "local-07-file000098_jpg",
      "driveId": "1iiiEmgxLTeFgroTXzEXEOC37jUehGQQC",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000098.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000098.jpg",
      "media": {
            "driveFileId": "1iiiEmgxLTeFgroTXzEXEOC37jUehGQQC",
            "pdf": "1iiiEmgxLTeFgroTXzEXEOC37jUehGQQC",
            "thumbnail": "https://drive.google.com/thumbnail?id=1iiiEmgxLTeFgroTXzEXEOC37jUehGQQC&sz=w1000"
      }
},
    {
      "id": "local-07-file000129_jpg",
      "driveId": "19TX6yYbFcTZ02aXa7SYhQ5OFUDYITmd6",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000129.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000129.jpg",
      "media": {
            "driveFileId": "19TX6yYbFcTZ02aXa7SYhQ5OFUDYITmd6",
            "pdf": "19TX6yYbFcTZ02aXa7SYhQ5OFUDYITmd6",
            "thumbnail": "https://drive.google.com/thumbnail?id=19TX6yYbFcTZ02aXa7SYhQ5OFUDYITmd6&sz=w1000"
      }
},
    {
      "id": "local-07-file000135_jpg",
      "driveId": "1myOM_YLtHnB9d4fpHjEb5uDYR93TzDui",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Imagenes_Servicio",
      "title": "file000135.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Imagenes_Servicio",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Imagenes_Servicio/file000135.jpg",
      "media": {
            "driveFileId": "1myOM_YLtHnB9d4fpHjEb5uDYR93TzDui",
            "pdf": "1myOM_YLtHnB9d4fpHjEb5uDYR93TzDui",
            "thumbnail": "https://drive.google.com/thumbnail?id=1myOM_YLtHnB9d4fpHjEb5uDYR93TzDui&sz=w1000"
      }
},
    {
      "id": "local-07-HIERBAS_EN_PLATOS_xlsx",
      "driveId": "1ZL-9NgjLo-O_aqPvAP-K9NxmIxM1Y1Pr",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "HIERBAS EN PLATOS.xlsx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/HIERBAS EN PLATOS.xlsx",
      "media": {
            "driveFileId": "1ZL-9NgjLo-O_aqPvAP-K9NxmIxM1Y1Pr",
            "pdf": "1ZL-9NgjLo-O_aqPvAP-K9NxmIxM1Y1Pr",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ZL-9NgjLo-O_aqPvAP-K9NxmIxM1Y1Pr&sz=w1000"
      }
},
    {
      "id": "local-07-Hoja_Proveedores_xlsx",
      "driveId": "15JXtzGx3z0yV295vzAG5iSZCSsmKkmPs",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "Hoja Proveedores.xlsx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/Hoja Proveedores.xlsx",
      "media": {
            "driveFileId": "15JXtzGx3z0yV295vzAG5iSZCSsmKkmPs",
            "pdf": "15JXtzGx3z0yV295vzAG5iSZCSsmKkmPs",
            "thumbnail": "https://drive.google.com/thumbnail?id=15JXtzGx3z0yV295vzAG5iSZCSsmKkmPs&sz=w1000"
      }
},
    {
      "id": "local-07-STOCK_CONGELADOR_xlsx",
      "driveId": "1J8AgdwTgGpWevLyCIn_RpBdhSnVBE90o",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "STOCK CONGELADOR.xlsx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/STOCK CONGELADOR.xlsx",
      "media": {
            "driveFileId": "1J8AgdwTgGpWevLyCIn_RpBdhSnVBE90o",
            "pdf": "1J8AgdwTgGpWevLyCIn_RpBdhSnVBE90o",
            "thumbnail": "https://drive.google.com/thumbnail?id=1J8AgdwTgGpWevLyCIn_RpBdhSnVBE90o&sz=w1000"
      }
},
    {
      "id": "local-07-STOCK_CONGELADOR_modificado_xlsx",
      "driveId": "1aiNy_s8ZEkn8SkFjg2cfmb_5qamfb1Wn",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "STOCK CONGELADOR modificado.xlsx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/STOCK CONGELADOR modificado.xlsx",
      "media": {
            "driveFileId": "1aiNy_s8ZEkn8SkFjg2cfmb_5qamfb1Wn",
            "pdf": "1aiNy_s8ZEkn8SkFjg2cfmb_5qamfb1Wn",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aiNy_s8ZEkn8SkFjg2cfmb_5qamfb1Wn&sz=w1000"
      }
},
    {
      "id": "local-07-HOJA_DE_HIERBAS_2012_docx",
      "driveId": "1EF95srhygF_GTeGLf_ah1hI2Zf2iJfHN",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "HOJA DE HIERBAS 2012.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/HOJA DE HIERBAS 2012.docx",
      "media": {
            "driveFileId": "1EF95srhygF_GTeGLf_ah1hI2Zf2iJfHN",
            "pdf": "1EF95srhygF_GTeGLf_ah1hI2Zf2iJfHN",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EF95srhygF_GTeGLf_ah1hI2Zf2iJfHN&sz=w1000"
      }
},
    {
      "id": "local-07-Comida_Familia_docx",
      "driveId": "1D33DKFYhJgppMfhAFF1q1iSwQG7ScGJh",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "Comida Familia.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/Comida Familia.docx",
      "media": {
            "driveFileId": "1D33DKFYhJgppMfhAFF1q1iSwQG7ScGJh",
            "pdf": "1D33DKFYhJgppMfhAFF1q1iSwQG7ScGJh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1D33DKFYhJgppMfhAFF1q1iSwQG7ScGJh&sz=w1000"
      }
},
    {
      "id": "local-07-HOJA_DE_HIERBAS_2012_2_docx",
      "driveId": "17prgW9Al7GUMPTqAuwsRYrGwjYuQ8gqc",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Escandallos_Hierbas_2012_Paco_Morales",
      "title": "HOJA DE HIERBAS 2012 2.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Escandallos_Hierbas_2012_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Escandallos_Hierbas_2012_Paco_Morales/HOJA DE HIERBAS 2012 2.docx",
      "media": {
            "driveFileId": "17prgW9Al7GUMPTqAuwsRYrGwjYuQ8gqc",
            "pdf": "17prgW9Al7GUMPTqAuwsRYrGwjYuQ8gqc",
            "thumbnail": "https://drive.google.com/thumbnail?id=17prgW9Al7GUMPTqAuwsRYrGwjYuQ8gqc&sz=w1000"
      }
},
    {
      "id": "local-07-CARTA_VINOS_OCTUBRE_2011_doc",
      "driveId": "1CKvPhQ3PV5Ihur9CJG8exN1PZXOBOUVP",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "CARTA VINOS OCTUBRE 2011.doc",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/CARTA VINOS OCTUBRE 2011.doc",
      "media": {
            "driveFileId": "1CKvPhQ3PV5Ihur9CJG8exN1PZXOBOUVP",
            "pdf": "1CKvPhQ3PV5Ihur9CJG8exN1PZXOBOUVP",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CKvPhQ3PV5Ihur9CJG8exN1PZXOBOUVP&sz=w1000"
      }
},
    {
      "id": "local-07-calendario_nuevo",
      "driveId": "1JMOWqmF_BRLfEPnJPA9S0MTnLDcJkpVc",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "calendario nuevo",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/calendario nuevo",
      "media": {
            "driveFileId": "1JMOWqmF_BRLfEPnJPA9S0MTnLDcJkpVc",
            "pdf": "1JMOWqmF_BRLfEPnJPA9S0MTnLDcJkpVc",
            "thumbnail": "https://drive.google.com/thumbnail?id=1JMOWqmF_BRLfEPnJPA9S0MTnLDcJkpVc&sz=w1000"
      }
},
    {
      "id": "local-07-CALENDARIO_EVENTOS_2011_nuevo",
      "driveId": "1aXWEqvmKJx9lQlfDlL6JZYrYMuvJICCr",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "CALENDARIO EVENTOS 2011 nuevo",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/CALENDARIO EVENTOS 2011 nuevo",
      "media": {
            "driveFileId": "1aXWEqvmKJx9lQlfDlL6JZYrYMuvJICCr",
            "pdf": "1aXWEqvmKJx9lQlfDlL6JZYrYMuvJICCr",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aXWEqvmKJx9lQlfDlL6JZYrYMuvJICCr&sz=w1000"
      }
},
    {
      "id": "local-07-CARTA_VINOS_MARZO_2012_doc",
      "driveId": "1kEcs7GdERt0zCdj-a409-_5GzPhNPKPQ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "CARTA VINOS MARZO 2012.doc",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/CARTA VINOS MARZO 2012.doc",
      "media": {
            "driveFileId": "1kEcs7GdERt0zCdj-a409-_5GzPhNPKPQ",
            "pdf": "1kEcs7GdERt0zCdj-a409-_5GzPhNPKPQ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1kEcs7GdERt0zCdj-a409-_5GzPhNPKPQ&sz=w1000"
      }
},
    {
      "id": "local-07-CARTA_VINOS_OCTUBRE_2011___copia__2__doc",
      "driveId": "19vGW6dH-zzszCbZKhRjA1oHImJrEu1Bd",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "CARTA VINOS OCTUBRE 2011 - copia (2).doc",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/CARTA VINOS OCTUBRE 2011 - copia (2).doc",
      "media": {
            "driveFileId": "19vGW6dH-zzszCbZKhRjA1oHImJrEu1Bd",
            "pdf": "19vGW6dH-zzszCbZKhRjA1oHImJrEu1Bd",
            "thumbnail": "https://drive.google.com/thumbnail?id=19vGW6dH-zzszCbZKhRjA1oHImJrEu1Bd&sz=w1000"
      }
},
    {
      "id": "local-07-claves_nod_nuevas_txt",
      "driveId": "1jaGbBe5h53y1uz2tY6YXBbQ6E3ThYf-i",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "claves nod nuevas.txt",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/claves nod nuevas.txt",
      "media": {
            "driveFileId": "1jaGbBe5h53y1uz2tY6YXBbQ6E3ThYf-i",
            "pdf": "1jaGbBe5h53y1uz2tY6YXBbQ6E3ThYf-i",
            "thumbnail": "https://drive.google.com/thumbnail?id=1jaGbBe5h53y1uz2tY6YXBbQ6E3ThYf-i&sz=w1000"
      }
},
    {
      "id": "local-07-STAGER_CONFIRMADOS_PARA_FEBRERO_msg",
      "driveId": "12UOCmZQaYbEoQ2Zu5T8g58oAM1oF7NIS",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "STAGER CONFIRMADOS PARA FEBRERO.msg",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/STAGER CONFIRMADOS PARA FEBRERO.msg",
      "media": {
            "driveFileId": "12UOCmZQaYbEoQ2Zu5T8g58oAM1oF7NIS",
            "pdf": "12UOCmZQaYbEoQ2Zu5T8g58oAM1oF7NIS",
            "thumbnail": "https://drive.google.com/thumbnail?id=12UOCmZQaYbEoQ2Zu5T8g58oAM1oF7NIS&sz=w1000"
      }
},
    {
      "id": "local-07-Raices_Clasicos_InnovacionMARZO2012__doc",
      "driveId": "1DFDMX38XnVUvNRulxv0mpEbTSlh8Vw2D",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Eveventos_Pamogastro_2011_2012",
      "title": "Raices-Clasicos-InnovacionMARZO2012 .doc",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Eveventos_Pamogastro_2011_2012",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Eveventos_Pamogastro_2011_2012/Raices-Clasicos-InnovacionMARZO2012 .doc",
      "media": {
            "driveFileId": "1DFDMX38XnVUvNRulxv0mpEbTSlh8Vw2D",
            "pdf": "1DFDMX38XnVUvNRulxv0mpEbTSlh8Vw2D",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DFDMX38XnVUvNRulxv0mpEbTSlh8Vw2D&sz=w1000"
      }
},
    {
      "id": "local-07-minutaInmayJosep2011pechuga_doc",
      "driveId": "1INtB1a8vvM50_T5xSN5413Jy8mQeJOsp",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "minutaInmayJosep2011pechuga.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/minutaInmayJosep2011pechuga.doc",
      "media": {
            "driveFileId": "1INtB1a8vvM50_T5xSN5413Jy8mQeJOsp",
            "pdf": "1INtB1a8vvM50_T5xSN5413Jy8mQeJOsp",
            "thumbnail": "https://drive.google.com/thumbnail?id=1INtB1a8vvM50_T5xSN5413Jy8mQeJOsp&sz=w1000"
      }
},
    {
      "id": "local-07-minutaInmayJosep2011sinaceituna_doc",
      "driveId": "1gp32Z-vSr3DP_f_aYfd7lChh1t5Pung1",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "minutaInmayJosep2011sinaceituna.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/minutaInmayJosep2011sinaceituna.doc",
      "media": {
            "driveFileId": "1gp32Z-vSr3DP_f_aYfd7lChh1t5Pung1",
            "pdf": "1gp32Z-vSr3DP_f_aYfd7lChh1t5Pung1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gp32Z-vSr3DP_f_aYfd7lChh1t5Pung1&sz=w1000"
      }
},
    {
      "id": "local-07-Extras_Abril_xls",
      "driveId": "18jc-UM-lMycyr0J2KG6y3k32t7tuuSBS",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "Extras Abril.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/Extras Abril.xls",
      "media": {
            "driveFileId": "18jc-UM-lMycyr0J2KG6y3k32t7tuuSBS",
            "pdf": "18jc-UM-lMycyr0J2KG6y3k32t7tuuSBS",
            "thumbnail": "https://drive.google.com/thumbnail?id=18jc-UM-lMycyr0J2KG6y3k32t7tuuSBS&sz=w1000"
      }
},
    {
      "id": "local-07-minutaMarianoyMatini_os_doc",
      "driveId": "1jK0_KAz6UzoROQhSUmujocFsT5vnDy0t",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "minutaMarianoyMatiniños.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/minutaMarianoyMatiniños.doc",
      "media": {
            "driveFileId": "1jK0_KAz6UzoROQhSUmujocFsT5vnDy0t",
            "pdf": "1jK0_KAz6UzoROQhSUmujocFsT5vnDy0t",
            "thumbnail": "https://drive.google.com/thumbnail?id=1jK0_KAz6UzoROQhSUmujocFsT5vnDy0t&sz=w1000"
      }
},
    {
      "id": "local-07-minutaInmayJosep2011_docx",
      "driveId": "1Fvxg-dlRRGiEgYrq7BN2ZuCfcKOwEErZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "minutaInmayJosep2011.docx",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/minutaInmayJosep2011.docx",
      "media": {
            "driveFileId": "1Fvxg-dlRRGiEgYrq7BN2ZuCfcKOwEErZ",
            "pdf": "1Fvxg-dlRRGiEgYrq7BN2ZuCfcKOwEErZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Fvxg-dlRRGiEgYrq7BN2ZuCfcKOwEErZ&sz=w1000"
      }
},
    {
      "id": "local-07-Reuni_n_S_bado_doc",
      "driveId": "1CYNT2PBzzgB8_EYdQcTKOh_bN-7OdmZv",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "Reunión Sábado.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/Reunión Sábado.doc",
      "media": {
            "driveFileId": "1CYNT2PBzzgB8_EYdQcTKOh_bN-7OdmZv",
            "pdf": "1CYNT2PBzzgB8_EYdQcTKOh_bN-7OdmZv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CYNT2PBzzgB8_EYdQcTKOh_bN-7OdmZv&sz=w1000"
      }
},
    {
      "id": "local-07-Ferrero_carta_destilados_2011",
      "driveId": "1gcBSkTxzx4lrwwr8cghZ3WXroipOmWRC",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "Ferrero carta destilados 2011",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/Ferrero carta destilados 2011",
      "media": {
            "driveFileId": "1gcBSkTxzx4lrwwr8cghZ3WXroipOmWRC",
            "pdf": "1gcBSkTxzx4lrwwr8cghZ3WXroipOmWRC",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gcBSkTxzx4lrwwr8cghZ3WXroipOmWRC&sz=w1000"
      }
},
    {
      "id": "local-07-HOTEL_FERRERO_corte_ingl_s_xls",
      "driveId": "1T3M3KuqDluTr20eEMhnQaLM3vgXRmLsD",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "HOTEL FERRERO corte inglés.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/HOTEL FERRERO corte inglés.xls",
      "media": {
            "driveFileId": "1T3M3KuqDluTr20eEMhnQaLM3vgXRmLsD",
            "pdf": "1T3M3KuqDluTr20eEMhnQaLM3vgXRmLsD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1T3M3KuqDluTr20eEMhnQaLM3vgXRmLsD&sz=w1000"
      }
},
    {
      "id": "local-07-previsionmaterialboda350pax24042010_xls",
      "driveId": "14TbynKA_uFTU2pSdzf_zDGKYNuhFawI5",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "previsionmaterialboda350pax24042010.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/previsionmaterialboda350pax24042010.xls",
      "media": {
            "driveFileId": "14TbynKA_uFTU2pSdzf_zDGKYNuhFawI5",
            "pdf": "14TbynKA_uFTU2pSdzf_zDGKYNuhFawI5",
            "thumbnail": "https://drive.google.com/thumbnail?id=14TbynKA_uFTU2pSdzf_zDGKYNuhFawI5&sz=w1000"
      }
},
    {
      "id": "local-07-PLANTILLA_PEPO_BODAS_XLS",
      "driveId": "1kBL24xQnTK7nuGsZJB67_Q3BMoZ5AmCh",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "PLANTILLA PEPO BODAS.XLS",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/PLANTILLA PEPO BODAS.XLS",
      "media": {
            "driveFileId": "1kBL24xQnTK7nuGsZJB67_Q3BMoZ5AmCh",
            "pdf": "1kBL24xQnTK7nuGsZJB67_Q3BMoZ5AmCh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1kBL24xQnTK7nuGsZJB67_Q3BMoZ5AmCh&sz=w1000"
      }
},
    {
      "id": "local-07-TAREAS_BODA_MARIANO_Y_MATI_xls",
      "driveId": "1qOOoL4gvu7voIVuFLF0GxLxzbQmsaC5c",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "TAREAS BODA MARIANO Y MATI.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/TAREAS BODA MARIANO Y MATI.xls",
      "media": {
            "driveFileId": "1qOOoL4gvu7voIVuFLF0GxLxzbQmsaC5c",
            "pdf": "1qOOoL4gvu7voIVuFLF0GxLxzbQmsaC5c",
            "thumbnail": "https://drive.google.com/thumbnail?id=1qOOoL4gvu7voIVuFLF0GxLxzbQmsaC5c&sz=w1000"
      }
},
    {
      "id": "local-07-CALENDARIO_EVENTOS_2011_xls",
      "driveId": "1EBcrjDQkPVjd1cWp92TSuBmE5oTBPSUl",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "CALENDARIO EVENTOS 2011.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/CALENDARIO EVENTOS 2011.xls",
      "media": {
            "driveFileId": "1EBcrjDQkPVjd1cWp92TSuBmE5oTBPSUl",
            "pdf": "1EBcrjDQkPVjd1cWp92TSuBmE5oTBPSUl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EBcrjDQkPVjd1cWp92TSuBmE5oTBPSUl&sz=w1000"
      }
},
    {
      "id": "local-07-boda_elena_y_jose_XLS",
      "driveId": "1S0-DRhxTGIlrNcsPi24la7fzfS6J5BGZ",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "boda elena y jose.XLS",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/boda elena y jose.XLS",
      "media": {
            "driveFileId": "1S0-DRhxTGIlrNcsPi24la7fzfS6J5BGZ",
            "pdf": "1S0-DRhxTGIlrNcsPi24la7fzfS6J5BGZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1S0-DRhxTGIlrNcsPi24la7fzfS6J5BGZ&sz=w1000"
      }
},
    {
      "id": "local-07-EXTRAS_MAYO_xls",
      "driveId": "1KKFTq2BF5rp6zk4OUn3sVrCuDHX_PPsM",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "EXTRAS MAYO.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/EXTRAS MAYO.xls",
      "media": {
            "driveFileId": "1KKFTq2BF5rp6zk4OUn3sVrCuDHX_PPsM",
            "pdf": "1KKFTq2BF5rp6zk4OUn3sVrCuDHX_PPsM",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KKFTq2BF5rp6zk4OUn3sVrCuDHX_PPsM&sz=w1000"
      }
},
    {
      "id": "local-07-minutaInmayJosep2011solomillo_doc",
      "driveId": "1mUtYf8QhoLQeOwz7ir6zU__ZCvuwuh6L",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "minutaInmayJosep2011solomillo.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/minutaInmayJosep2011solomillo.doc",
      "media": {
            "driveFileId": "1mUtYf8QhoLQeOwz7ir6zU__ZCvuwuh6L",
            "pdf": "1mUtYf8QhoLQeOwz7ir6zU__ZCvuwuh6L",
            "thumbnail": "https://drive.google.com/thumbnail?id=1mUtYf8QhoLQeOwz7ir6zU__ZCvuwuh6L&sz=w1000"
      }
},
    {
      "id": "local-07-Ferrero_carta_destilados_2011__2__docx",
      "driveId": "12uwKOsIdAEmi7MxMUi3hz8prcALnCetu",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "Ferrero carta destilados 2011 (2).docx",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/Ferrero carta destilados 2011 (2).docx",
      "media": {
            "driveFileId": "12uwKOsIdAEmi7MxMUi3hz8prcALnCetu",
            "pdf": "12uwKOsIdAEmi7MxMUi3hz8prcALnCetu",
            "thumbnail": "https://drive.google.com/thumbnail?id=12uwKOsIdAEmi7MxMUi3hz8prcALnCetu&sz=w1000"
      }
},
    {
      "id": "local-07-comollegar_bmp",
      "driveId": "1Ir7pURrn-DoXV5342BnwcAVNIgd09ESg",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "comollegar.bmp",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/comollegar.bmp",
      "media": {
            "driveFileId": "1Ir7pURrn-DoXV5342BnwcAVNIgd09ESg",
            "pdf": "1Ir7pURrn-DoXV5342BnwcAVNIgd09ESg",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Ir7pURrn-DoXV5342BnwcAVNIgd09ESg&sz=w1000"
      }
},
    {
      "id": "local-07-CENA_DE_GALA_400_PAX_doc",
      "driveId": "1VUqD8midLLPY5A3SKD0l05UOtM9UxpfL",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "CENA DE GALA 400 PAX.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/CENA DE GALA 400 PAX.doc",
      "media": {
            "driveFileId": "1VUqD8midLLPY5A3SKD0l05UOtM9UxpfL",
            "pdf": "1VUqD8midLLPY5A3SKD0l05UOtM9UxpfL",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VUqD8midLLPY5A3SKD0l05UOtM9UxpfL&sz=w1000"
      }
},
    {
      "id": "local-07-COMU_BORJA_PASTOR_xls",
      "driveId": "1cVHGXuMYEUejQUTI3Fn0TVoFh7Y8DfRV",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "COMU BORJA PASTOR.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/COMU BORJA PASTOR.xls",
      "media": {
            "driveFileId": "1cVHGXuMYEUejQUTI3Fn0TVoFh7Y8DfRV",
            "pdf": "1cVHGXuMYEUejQUTI3Fn0TVoFh7Y8DfRV",
            "thumbnail": "https://drive.google.com/thumbnail?id=1cVHGXuMYEUejQUTI3Fn0TVoFh7Y8DfRV&sz=w1000"
      }
},
    {
      "id": "local-07-PLANO_BODA_BLAS_ppt",
      "driveId": "1Qi-aKl1G7i6UiGJROygVyct8l7JbxfhT",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "PLANO BODA BLAS.ppt",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/PLANO BODA BLAS.ppt",
      "media": {
            "driveFileId": "1Qi-aKl1G7i6UiGJROygVyct8l7JbxfhT",
            "pdf": "1Qi-aKl1G7i6UiGJROygVyct8l7JbxfhT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Qi-aKl1G7i6UiGJROygVyct8l7JbxfhT&sz=w1000"
      }
},
    {
      "id": "local-07-TAREAS_BODA_13MAYO_xls",
      "driveId": "1g-ctH44_u26V7Elg1dOfJh333pqNgo67",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "TAREAS BODA 13MAYO.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/TAREAS BODA 13MAYO.xls",
      "media": {
            "driveFileId": "1g-ctH44_u26V7Elg1dOfJh333pqNgo67",
            "pdf": "1g-ctH44_u26V7Elg1dOfJh333pqNgo67",
            "thumbnail": "https://drive.google.com/thumbnail?id=1g-ctH44_u26V7Elg1dOfJh333pqNgo67&sz=w1000"
      }
},
    {
      "id": "local-07-map_localiza_hotel_jpg",
      "driveId": "1HxIr-RgwP3_098VLmSzqrkV1myM4785u",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "map-localiza-hotel.jpg",
      "year": 2000,
      "type": "image",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/map-localiza-hotel.jpg",
      "media": {
            "driveFileId": "1HxIr-RgwP3_098VLmSzqrkV1myM4785u",
            "pdf": "1HxIr-RgwP3_098VLmSzqrkV1myM4785u",
            "thumbnail": "https://drive.google.com/thumbnail?id=1HxIr-RgwP3_098VLmSzqrkV1myM4785u&sz=w1000"
      }
},
    {
      "id": "local-07-previsionmaterialboda_xls",
      "driveId": "1n66hQWhBM5vvho35sY4lSYgBojzIviMv",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "previsionmaterialboda.xls",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/previsionmaterialboda.xls",
      "media": {
            "driveFileId": "1n66hQWhBM5vvho35sY4lSYgBojzIviMv",
            "pdf": "1n66hQWhBM5vvho35sY4lSYgBojzIviMv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1n66hQWhBM5vvho35sY4lSYgBojzIviMv&sz=w1000"
      }
},
    {
      "id": "local-07-minutaMarianoyMati_doc",
      "driveId": "1nY2Iw5GI-Y89SYLQuzJlF-83hhN3DvBF",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "minutaMarianoyMati.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/minutaMarianoyMati.doc",
      "media": {
            "driveFileId": "1nY2Iw5GI-Y89SYLQuzJlF-83hhN3DvBF",
            "pdf": "1nY2Iw5GI-Y89SYLQuzJlF-83hhN3DvBF",
            "thumbnail": "https://drive.google.com/thumbnail?id=1nY2Iw5GI-Y89SYLQuzJlF-83hhN3DvBF&sz=w1000"
      }
},
    {
      "id": "local-07-consumo_teresa_XLS",
      "driveId": "1ve9gz94LCtXh-j8YVI194r3j1dGIWkSC",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Bodas_Preparatorio_Paco_Morales",
      "title": "consumo teresa.XLS",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Bodas_Preparatorio_Paco_Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Bodas_Preparatorio_Paco_Morales/consumo teresa.XLS",
      "media": {
            "driveFileId": "1ve9gz94LCtXh-j8YVI194r3j1dGIWkSC",
            "pdf": "1ve9gz94LCtXh-j8YVI194r3j1dGIWkSC",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ve9gz94LCtXh-j8YVI194r3j1dGIWkSC&sz=w1000"
      }
},
    {
      "id": "local-07-Mois_s_gil_Cat_leg_pdf",
      "driveId": "1LAhd9f3QvVFzfJmWfyHBl66IjCGrG5h2",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentación_Pdf",
      "title": "Moisès gil Catàleg.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentación_Pdf",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentación_Pdf/Moisès gil Catàleg.pdf",
      "media": {
            "driveFileId": "1LAhd9f3QvVFzfJmWfyHBl66IjCGrG5h2",
            "pdf": "1LAhd9f3QvVFzfJmWfyHBl66IjCGrG5h2",
            "thumbnail": "https://drive.google.com/thumbnail?id=1LAhd9f3QvVFzfJmWfyHBl66IjCGrG5h2&sz=w1000"
      }
},
    {
      "id": "local-07-CARTA_VINOS_OCTUBRE_2011_doc",
      "driveId": "16sntdyLYqlEIiVjkFaHPqW_B-PFZlQwo",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "CARTA VINOS OCTUBRE 2011.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/CARTA VINOS OCTUBRE 2011.doc",
      "media": {
            "driveFileId": "16sntdyLYqlEIiVjkFaHPqW_B-PFZlQwo",
            "pdf": "16sntdyLYqlEIiVjkFaHPqW_B-PFZlQwo",
            "thumbnail": "https://drive.google.com/thumbnail?id=16sntdyLYqlEIiVjkFaHPqW_B-PFZlQwo&sz=w1000"
      }
},
    {
      "id": "local-07-calendario_nuevo",
      "driveId": "1PdxkcIND9s3rnNAfoiRMmarQys-1gZJ-",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "calendario nuevo",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/calendario nuevo",
      "media": {
            "driveFileId": "1PdxkcIND9s3rnNAfoiRMmarQys-1gZJ-",
            "pdf": "1PdxkcIND9s3rnNAfoiRMmarQys-1gZJ-",
            "thumbnail": "https://drive.google.com/thumbnail?id=1PdxkcIND9s3rnNAfoiRMmarQys-1gZJ-&sz=w1000"
      }
},
    {
      "id": "local-07-CALENDARIO_EVENTOS_2011_nuevo",
      "driveId": "1-sTa9VIobK2BW4AXYrohdJnv9lUguP0U",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "CALENDARIO EVENTOS 2011 nuevo",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/CALENDARIO EVENTOS 2011 nuevo",
      "media": {
            "driveFileId": "1-sTa9VIobK2BW4AXYrohdJnv9lUguP0U",
            "pdf": "1-sTa9VIobK2BW4AXYrohdJnv9lUguP0U",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-sTa9VIobK2BW4AXYrohdJnv9lUguP0U&sz=w1000"
      }
},
    {
      "id": "local-07-CARTA_VINOS_MARZO_2012_doc",
      "driveId": "1Llpp95uom9vLr5s51idufoFtuRAtFUU2",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "CARTA VINOS MARZO 2012.doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/CARTA VINOS MARZO 2012.doc",
      "media": {
            "driveFileId": "1Llpp95uom9vLr5s51idufoFtuRAtFUU2",
            "pdf": "1Llpp95uom9vLr5s51idufoFtuRAtFUU2",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Llpp95uom9vLr5s51idufoFtuRAtFUU2&sz=w1000"
      }
},
    {
      "id": "local-07-CARTA_VINOS_OCTUBRE_2011___copia__2__doc",
      "driveId": "1zELBNv1n5UYnzWJ0cz9LH_66w-Qk9rIH",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "CARTA VINOS OCTUBRE 2011 - copia (2).doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/CARTA VINOS OCTUBRE 2011 - copia (2).doc",
      "media": {
            "driveFileId": "1zELBNv1n5UYnzWJ0cz9LH_66w-Qk9rIH",
            "pdf": "1zELBNv1n5UYnzWJ0cz9LH_66w-Qk9rIH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zELBNv1n5UYnzWJ0cz9LH_66w-Qk9rIH&sz=w1000"
      }
},
    {
      "id": "local-07-claves_nod_nuevas_txt",
      "driveId": "12935x2ap8mLamz_6TvtP0PSUCVNuISBP",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "claves nod nuevas.txt",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/claves nod nuevas.txt",
      "media": {
            "driveFileId": "12935x2ap8mLamz_6TvtP0PSUCVNuISBP",
            "pdf": "12935x2ap8mLamz_6TvtP0PSUCVNuISBP",
            "thumbnail": "https://drive.google.com/thumbnail?id=12935x2ap8mLamz_6TvtP0PSUCVNuISBP&sz=w1000"
      }
},
    {
      "id": "local-07-STAGER_CONFIRMADOS_PARA_FEBRERO_msg",
      "driveId": "1fG4e7xRoAzy90s77ie2QFm0VrLfTQ65N",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "STAGER CONFIRMADOS PARA FEBRERO.msg",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/STAGER CONFIRMADOS PARA FEBRERO.msg",
      "media": {
            "driveFileId": "1fG4e7xRoAzy90s77ie2QFm0VrLfTQ65N",
            "pdf": "1fG4e7xRoAzy90s77ie2QFm0VrLfTQ65N",
            "thumbnail": "https://drive.google.com/thumbnail?id=1fG4e7xRoAzy90s77ie2QFm0VrLfTQ65N&sz=w1000"
      }
},
    {
      "id": "local-07-Raices_Clasicos_InnovacionMARZO2012__doc",
      "driveId": "1iPLifuGnPcVVN-tIe2imTzH4uIq57qMD",
      "category": "07_CD_VID_Digital",
      "subcategory": "07_Documentos_Hotel_Ferrero_Paco Morales",
      "title": "Raices-Clasicos-InnovacionMARZO2012 .doc",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Archivo Digital Noor",
      "tags": [
            "07_CD_VID_Digital",
            "07_Documentos_Hotel_Ferrero_Paco Morales",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/07_CD VID_Digital/07_Documentos_Hotel_Ferrero_Paco Morales/Raices-Clasicos-InnovacionMARZO2012 .doc",
      "media": {
            "driveFileId": "1iPLifuGnPcVVN-tIe2imTzH4uIq57qMD",
            "pdf": "1iPLifuGnPcVVN-tIe2imTzH4uIq57qMD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1iPLifuGnPcVVN-tIe2imTzH4uIq57qMD&sz=w1000"
      }
}
  ,
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Carta_Tes_e_Infusiones_docx",
      "driveId": "1U3fD38HCPkjmuluTH5TRcMki0sx2rq7g",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Carta_Tes_e_Infusiones.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Carta_Tes_e_Infusiones.docx",
      "media": {
            "driveFileId": "1U3fD38HCPkjmuluTH5TRcMki0sx2rq7g",
            "pdf": "1U3fD38HCPkjmuluTH5TRcMki0sx2rq7g",
            "thumbnail": "https://drive.google.com/thumbnail?id=1U3fD38HCPkjmuluTH5TRcMki0sx2rq7g&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Guia_Emplatado_y_Conceptos_pdf",
      "driveId": "1JXSLrci31WxgiFCHsM75_rh3hE35cvpA",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Guia_Emplatado_y_Conceptos.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Guia_Emplatado_y_Conceptos.pdf",
      "media": {
            "driveFileId": "1JXSLrci31WxgiFCHsM75_rh3hE35cvpA",
            "pdf": "1JXSLrci31WxgiFCHsM75_rh3hE35cvpA",
            "thumbnail": "https://drive.google.com/thumbnail?id=1JXSLrci31WxgiFCHsM75_rh3hE35cvpA&sz=w1000"
      }
},
    {
      "id": "local-08-08_PRO_Recetas_Cine_Molecular_2015_pdf",
      "driveId": "11qb-vHyxcBttUh57qH0_3N4yhbow0vfG",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_PRO_Recetas_Cine_Molecular_2015.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_PRO_Recetas_Cine_Molecular_2015.pdf",
      "media": {
            "driveFileId": "11qb-vHyxcBttUh57qH0_3N4yhbow0vfG",
            "pdf": "11qb-vHyxcBttUh57qH0_3N4yhbow0vfG",
            "thumbnail": "https://drive.google.com/thumbnail?id=11qb-vHyxcBttUh57qH0_3N4yhbow0vfG&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Escandallos_Recetario_pdf",
      "driveId": "1EmmCrq5VibruEdh1BWBN9gTLRJTy4BkL",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Escandallos_Recetario.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Escandallos_Recetario.pdf",
      "media": {
            "driveFileId": "1EmmCrq5VibruEdh1BWBN9gTLRJTy4BkL",
            "pdf": "1EmmCrq5VibruEdh1BWBN9gTLRJTy4BkL",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EmmCrq5VibruEdh1BWBN9gTLRJTy4BkL&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Documentacion_Varios_docx",
      "driveId": "1cEJH9hWT1bsvnDbNZdJ09yvllFlWcDUQ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Documentacion_Varios.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Documentacion_Varios.docx",
      "media": {
            "driveFileId": "1cEJH9hWT1bsvnDbNZdJ09yvllFlWcDUQ",
            "pdf": "1cEJH9hWT1bsvnDbNZdJ09yvllFlWcDUQ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1cEJH9hWT1bsvnDbNZdJ09yvllFlWcDUQ&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Gastronomia_Egipto_y_Zonas_pdf",
      "driveId": "1XAfWAo6nDH_gwV_U_zBGCs_aeK_b89bT",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Gastronomia_Egipto_y_Zonas.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Gastronomia_Egipto_y_Zonas.pdf",
      "media": {
            "driveFileId": "1XAfWAo6nDH_gwV_U_zBGCs_aeK_b89bT",
            "pdf": "1XAfWAo6nDH_gwV_U_zBGCs_aeK_b89bT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1XAfWAo6nDH_gwV_U_zBGCs_aeK_b89bT&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Receta_Thierry_Marx_Tabula_pdf",
      "driveId": "1R4AKtKjLJiI8C6tdPfMQ6SnHrvJ9oxZF",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Receta_Thierry_Marx_Tabula.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Receta_Thierry_Marx_Tabula.pdf",
      "media": {
            "driveFileId": "1R4AKtKjLJiI8C6tdPfMQ6SnHrvJ9oxZF",
            "pdf": "1R4AKtKjLJiI8C6tdPfMQ6SnHrvJ9oxZF",
            "thumbnail": "https://drive.google.com/thumbnail?id=1R4AKtKjLJiI8C6tdPfMQ6SnHrvJ9oxZF&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Guia_Emplatado_y_Conceptos_docx",
      "driveId": "1yiw-iEvrh82FKyMkWL0KTWhjGasdrkmy",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Guia_Emplatado_y_Conceptos.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Guia_Emplatado_y_Conceptos.docx",
      "media": {
            "driveFileId": "1yiw-iEvrh82FKyMkWL0KTWhjGasdrkmy",
            "pdf": "1yiw-iEvrh82FKyMkWL0KTWhjGasdrkmy",
            "thumbnail": "https://drive.google.com/thumbnail?id=1yiw-iEvrh82FKyMkWL0KTWhjGasdrkmy&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Tecnicas_Vacio_y_Legislacion_docx",
      "driveId": "1YWJv4wBAKaIBvNDuRDCUUSOAIajl99oa",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Tecnicas_Vacio_y_Legislacion.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Tecnicas_Vacio_y_Legislacion.docx",
      "media": {
            "driveFileId": "1YWJv4wBAKaIBvNDuRDCUUSOAIajl99oa",
            "pdf": "1YWJv4wBAKaIBvNDuRDCUUSOAIajl99oa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1YWJv4wBAKaIBvNDuRDCUUSOAIajl99oa&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Documentacion_Varios_pdf",
      "driveId": "1828lu_5zV4zoMyLI6Y7bynsoDS_q7MJA",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Documentacion_Varios.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Documentacion_Varios.pdf",
      "media": {
            "driveFileId": "1828lu_5zV4zoMyLI6Y7bynsoDS_q7MJA",
            "pdf": "1828lu_5zV4zoMyLI6Y7bynsoDS_q7MJA",
            "thumbnail": "https://drive.google.com/thumbnail?id=1828lu_5zV4zoMyLI6Y7bynsoDS_q7MJA&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Escandallos_y_Calculo_Costes_docx",
      "driveId": "1l7E7q2jzva7YpTVn4hVVoOyZGzc6mEc0",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Escandallos_y_Calculo_Costes.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Escandallos_y_Calculo_Costes.docx",
      "media": {
            "driveFileId": "1l7E7q2jzva7YpTVn4hVVoOyZGzc6mEc0",
            "pdf": "1l7E7q2jzva7YpTVn4hVVoOyZGzc6mEc0",
            "thumbnail": "https://drive.google.com/thumbnail?id=1l7E7q2jzva7YpTVn4hVVoOyZGzc6mEc0&sz=w1000"
      }
},
    {
      "id": "local-08-08_Proyecto_Noor_2024_pdf",
      "driveId": "150sFw7eW7omk8e2Rtpbs4v0RhIK83qqr",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Proyecto_Noor_2024.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Proyecto_Noor_2024.pdf",
      "media": {
            "driveFileId": "150sFw7eW7omk8e2Rtpbs4v0RhIK83qqr",
            "pdf": "150sFw7eW7omk8e2Rtpbs4v0RhIK83qqr",
            "thumbnail": "https://drive.google.com/thumbnail?id=150sFw7eW7omk8e2Rtpbs4v0RhIK83qqr&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Receta_Terrina_Foie_y_Melaza_pdf",
      "driveId": "1owG-QJxfE7KYC-q8Y5GOnPteGDVTbT2s",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Receta_Terrina_Foie_y_Melaza.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Receta_Terrina_Foie_y_Melaza.pdf",
      "media": {
            "driveFileId": "1owG-QJxfE7KYC-q8Y5GOnPteGDVTbT2s",
            "pdf": "1owG-QJxfE7KYC-q8Y5GOnPteGDVTbT2s",
            "thumbnail": "https://drive.google.com/thumbnail?id=1owG-QJxfE7KYC-q8Y5GOnPteGDVTbT2s&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Tecnicas_Vacio_y_Legislacion_pdf",
      "driveId": "1VZzq7rdT2YyXCSwMCnL5jA93uLroauy_",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Tecnicas_Vacio_y_Legislacion.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Tecnicas_Vacio_y_Legislacion.pdf",
      "media": {
            "driveFileId": "1VZzq7rdT2YyXCSwMCnL5jA93uLroauy_",
            "pdf": "1VZzq7rdT2YyXCSwMCnL5jA93uLroauy_",
            "thumbnail": "https://drive.google.com/thumbnail?id=1VZzq7rdT2YyXCSwMCnL5jA93uLroauy_&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Proyecto_Noor_2024_docx",
      "driveId": "1eYdWaltVDGRl5PZPAj74Fz7Gv9rQCurR",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Proyecto_Noor_2024.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Proyecto_Noor_2024.docx",
      "media": {
            "driveFileId": "1eYdWaltVDGRl5PZPAj74Fz7Gv9rQCurR",
            "pdf": "1eYdWaltVDGRl5PZPAj74Fz7Gv9rQCurR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eYdWaltVDGRl5PZPAj74Fz7Gv9rQCurR&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Bodega_Montilla_Moriles_docx",
      "driveId": "1NRxDUrW8tS05pr9iQL7ahN4A5XCngtyI",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Bodega_Montilla_Moriles.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Bodega_Montilla_Moriles.docx",
      "media": {
            "driveFileId": "1NRxDUrW8tS05pr9iQL7ahN4A5XCngtyI",
            "pdf": "1NRxDUrW8tS05pr9iQL7ahN4A5XCngtyI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1NRxDUrW8tS05pr9iQL7ahN4A5XCngtyI&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Recetario_y_Tecnicas_Cocina_docx",
      "driveId": "1JFUPz7NVp5bpgV7qzI5FEM3tLaQCuVoP",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Recetario_y_Tecnicas_Cocina.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Recetario_y_Tecnicas_Cocina.docx",
      "media": {
            "driveFileId": "1JFUPz7NVp5bpgV7qzI5FEM3tLaQCuVoP",
            "pdf": "1JFUPz7NVp5bpgV7qzI5FEM3tLaQCuVoP",
            "thumbnail": "https://drive.google.com/thumbnail?id=1JFUPz7NVp5bpgV7qzI5FEM3tLaQCuVoP&sz=w1000"
      }
},
    {
      "id": "local-08-08_PRO_Menu_Boda_y_Proyecto_Carne_Eco_pdf_pdf",
      "driveId": "1v6TtFwEckYGyNmQAR_rWYP8wHiZIgITm",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_PRO_Menu_Boda_y_Proyecto_Carne_Eco.pdf.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_PRO_Menu_Boda_y_Proyecto_Carne_Eco.pdf.pdf",
      "media": {
            "driveFileId": "1v6TtFwEckYGyNmQAR_rWYP8wHiZIgITm",
            "pdf": "1v6TtFwEckYGyNmQAR_rWYP8wHiZIgITm",
            "thumbnail": "https://drive.google.com/thumbnail?id=1v6TtFwEckYGyNmQAR_rWYP8wHiZIgITm&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_Pro_Escandallos_Recetario_docx",
      "driveId": "1bapjrljy-KdGeW5DVgCLxzZagObJmEar",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_Pro_Escandallos_Recetario.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_Pro_Escandallos_Recetario.docx",
      "media": {
            "driveFileId": "1bapjrljy-KdGeW5DVgCLxzZagObJmEar",
            "pdf": "1bapjrljy-KdGeW5DVgCLxzZagObJmEar",
            "thumbnail": "https://drive.google.com/thumbnail?id=1bapjrljy-KdGeW5DVgCLxzZagObJmEar&sz=w1000"
      }
},
    {
      "id": "local-08-08_PRO_Plantillas_Gestion_y_Proveedores_pdf",
      "driveId": "1ugSgcNGsB0vJPXIiv5C2eNUuVWX_HKe0",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_PRO_Plantillas_Gestion_y_Proveedores.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_PRO_Plantillas_Gestion_y_Proveedores.pdf",
      "media": {
            "driveFileId": "1ugSgcNGsB0vJPXIiv5C2eNUuVWX_HKe0",
            "pdf": "1ugSgcNGsB0vJPXIiv5C2eNUuVWX_HKe0",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ugSgcNGsB0vJPXIiv5C2eNUuVWX_HKe0&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Carta_Tes_e_Infusiones_pdf",
      "driveId": "1IS1GjWdItEIXY7P2rZSqWbeDO7zZ4i_t",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Carta_Tes_e_Infusiones.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Carta_Tes_e_Infusiones.pdf",
      "media": {
            "driveFileId": "1IS1GjWdItEIXY7P2rZSqWbeDO7zZ4i_t",
            "pdf": "1IS1GjWdItEIXY7P2rZSqWbeDO7zZ4i_t",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IS1GjWdItEIXY7P2rZSqWbeDO7zZ4i_t&sz=w1000"
      }
},
    {
      "id": "local-08-08_PRO_Referencias_y_Vajilla_Torta_Bellota_pdf",
      "driveId": "19nyQ-Dvr37Ds13Ac7b5fj18t5LC1ojRT",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_PRO_Referencias_y_Vajilla_Torta_Bellota.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_PRO_Referencias_y_Vajilla_Torta_Bellota.pdf",
      "media": {
            "driveFileId": "19nyQ-Dvr37Ds13Ac7b5fj18t5LC1ojRT",
            "pdf": "19nyQ-Dvr37Ds13Ac7b5fj18t5LC1ojRT",
            "thumbnail": "https://drive.google.com/thumbnail?id=19nyQ-Dvr37Ds13Ac7b5fj18t5LC1ojRT&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Legado_Garum_y_Diccionario_pdf",
      "driveId": "1KLrixM8LiA9skt6TJI4Z4x3jpgRId3ma",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Legado_Garum_y_Diccionario.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Legado_Garum_y_Diccionario.pdf",
      "media": {
            "driveFileId": "1KLrixM8LiA9skt6TJI4Z4x3jpgRId3ma",
            "pdf": "1KLrixM8LiA9skt6TJI4Z4x3jpgRId3ma",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KLrixM8LiA9skt6TJI4Z4x3jpgRId3ma&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Escandallos_y_Calculo_Costes_pdf",
      "driveId": "1oTo3aKDzDybKaiIVKPW7FDV4Yew9MaDM",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Escandallos_y_Calculo_Costes.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Escandallos_y_Calculo_Costes.pdf",
      "media": {
            "driveFileId": "1oTo3aKDzDybKaiIVKPW7FDV4Yew9MaDM",
            "pdf": "1oTo3aKDzDybKaiIVKPW7FDV4Yew9MaDM",
            "thumbnail": "https://drive.google.com/thumbnail?id=1oTo3aKDzDybKaiIVKPW7FDV4Yew9MaDM&sz=w1000"
      }
},
    {
      "id": "local-08-08_PRO_Referencias_I_D_Noor_2015_pdf_pdf",
      "driveId": "1xq-moUpXoSMW2sH9Kll-LNo5eEqcit3e",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_PRO_Referencias_I+D_Noor_2015.pdf.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_PRO_Referencias_I+D_Noor_2015.pdf.pdf",
      "media": {
            "driveFileId": "1xq-moUpXoSMW2sH9Kll-LNo5eEqcit3e",
            "pdf": "1xq-moUpXoSMW2sH9Kll-LNo5eEqcit3e",
            "thumbnail": "https://drive.google.com/thumbnail?id=1xq-moUpXoSMW2sH9Kll-LNo5eEqcit3e&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Receta_Mugaritz_Bacalao_pdf",
      "driveId": "1QL1fI1pc3wnPRtqqXYK_Q_nqPOvIZPmZ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Receta_Mugaritz_Bacalao.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Receta_Mugaritz_Bacalao.pdf",
      "media": {
            "driveFileId": "1QL1fI1pc3wnPRtqqXYK_Q_nqPOvIZPmZ",
            "pdf": "1QL1fI1pc3wnPRtqqXYK_Q_nqPOvIZPmZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1QL1fI1pc3wnPRtqqXYK_Q_nqPOvIZPmZ&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Cine_Gastronomia_2006_pdf",
      "driveId": "16wokhquwoN6AeWwmANnEY2A9gz5RIDoF",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Cine_Gastronomia_2006.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Cine_Gastronomia_2006.pdf",
      "media": {
            "driveFileId": "16wokhquwoN6AeWwmANnEY2A9gz5RIDoF",
            "pdf": "16wokhquwoN6AeWwmANnEY2A9gz5RIDoF",
            "thumbnail": "https://drive.google.com/thumbnail?id=16wokhquwoN6AeWwmANnEY2A9gz5RIDoF&sz=w1000"
      }
},
    {
      "id": "local-08-08_PRO_Recetario_Oliver_2015_pdf",
      "driveId": "10tyWjciXebNCpLxBGwNJtEkPu_6J2VAr",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_PRO_Recetario_Oliver_2015.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_PRO_Recetario_Oliver_2015.pdf",
      "media": {
            "driveFileId": "10tyWjciXebNCpLxBGwNJtEkPu_6J2VAr",
            "pdf": "10tyWjciXebNCpLxBGwNJtEkPu_6J2VAr",
            "thumbnail": "https://drive.google.com/thumbnail?id=10tyWjciXebNCpLxBGwNJtEkPu_6J2VAr&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Recetario_Aderezos_Tradicionales_pdf",
      "driveId": "1q9p5jebBwxnzNsc-CKls7NrIIqbnCzEC",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Recetario_Aderezos_Tradicionales.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Recetario_Aderezos_Tradicionales.pdf",
      "media": {
            "driveFileId": "1q9p5jebBwxnzNsc-CKls7NrIIqbnCzEC",
            "pdf": "1q9p5jebBwxnzNsc-CKls7NrIIqbnCzEC",
            "thumbnail": "https://drive.google.com/thumbnail?id=1q9p5jebBwxnzNsc-CKls7NrIIqbnCzEC&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Evento_Javier_Itxaso_pdf",
      "driveId": "1u3AIXcfeN_XFZV1ZdrizX1dYEEOn9emc",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Evento_Javier_Itxaso.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Evento_Javier_Itxaso.pdf",
      "media": {
            "driveFileId": "1u3AIXcfeN_XFZV1ZdrizX1dYEEOn9emc",
            "pdf": "1u3AIXcfeN_XFZV1ZdrizX1dYEEOn9emc",
            "thumbnail": "https://drive.google.com/thumbnail?id=1u3AIXcfeN_XFZV1ZdrizX1dYEEOn9emc&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPTION_08_PRO_Recetario_Oliver_2015_docx",
      "driveId": "1OGZr-7afAybh9vqO6mjXB3XrPKBUgRTe",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPTION_08_PRO_Recetario_Oliver_2015.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPTION_08_PRO_Recetario_Oliver_2015.docx",
      "media": {
            "driveFileId": "1OGZr-7afAybh9vqO6mjXB3XrPKBUgRTe",
            "pdf": "1OGZr-7afAybh9vqO6mjXB3XrPKBUgRTe",
            "thumbnail": "https://drive.google.com/thumbnail?id=1OGZr-7afAybh9vqO6mjXB3XrPKBUgRTe&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_PRO_Menu_Boda_y_Proyecto_Carne_Eco_pdf_docx",
      "driveId": "18DZY_KYVGNeCawx_4lLLpdrY_BZf9OYv",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_PRO_Menu_Boda_y_Proyecto_Carne_Eco.pdf.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_PRO_Menu_Boda_y_Proyecto_Carne_Eco.pdf.docx",
      "media": {
            "driveFileId": "18DZY_KYVGNeCawx_4lLLpdrY_BZf9OYv",
            "pdf": "18DZY_KYVGNeCawx_4lLLpdrY_BZf9OYv",
            "thumbnail": "https://drive.google.com/thumbnail?id=18DZY_KYVGNeCawx_4lLLpdrY_BZf9OYv&sz=w1000"
      }
},
    {
      "id": "local-08-08_Pro_Bodega_Montilla_Moriles_pdf",
      "driveId": "1AWf6vMVn3ZCa3AGGTgLZB66KFTfdeTz6",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Pro_Bodega_Montilla_Moriles.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Pro_Bodega_Montilla_Moriles.pdf",
      "media": {
            "driveFileId": "1AWf6vMVn3ZCa3AGGTgLZB66KFTfdeTz6",
            "pdf": "1AWf6vMVn3ZCa3AGGTgLZB66KFTfdeTz6",
            "thumbnail": "https://drive.google.com/thumbnail?id=1AWf6vMVn3ZCa3AGGTgLZB66KFTfdeTz6&sz=w1000"
      }
},
    {
      "id": "local-08-TRANSCRIPT_08_PRO_Referencias_y_Vajilla_Torta_Bellota_docx",
      "driveId": "1yFhT5Tna3FFiIaRaImVIm7HAKzEfcxsL",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "TRANSCRIPT_08_PRO_Referencias_y_Vajilla_Torta_Bellota.docx",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/TRANSCRIPT_08_PRO_Referencias_y_Vajilla_Torta_Bellota.docx",
      "media": {
            "driveFileId": "1yFhT5Tna3FFiIaRaImVIm7HAKzEfcxsL",
            "pdf": "1yFhT5Tna3FFiIaRaImVIm7HAKzEfcxsL",
            "thumbnail": "https://drive.google.com/thumbnail?id=1yFhT5Tna3FFiIaRaImVIm7HAKzEfcxsL&sz=w1000"
      }
},
    {
      "id": "local-08-08_Recetas_Tecnicas_Merengues_y_Escabeches_pdf_pdf",
      "driveId": "1_dbVPv89MfVoNTIjCIMJiid5MFJ6kZyE",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Recetas_Tecnicas_Merengues_y_Escabeches.pdf.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Recetas_Tecnicas_Merengues_y_Escabeches.pdf.pdf",
      "media": {
            "driveFileId": "1_dbVPv89MfVoNTIjCIMJiid5MFJ6kZyE",
            "pdf": "1_dbVPv89MfVoNTIjCIMJiid5MFJ6kZyE",
            "thumbnail": "https://drive.google.com/thumbnail?id=1_dbVPv89MfVoNTIjCIMJiid5MFJ6kZyE&sz=w1000"
      }
},
    {
      "id": "local-08-08_Recetario_y_Tecnicas_Cocina_pdf",
      "driveId": "1T7GuvqTRzf5w70qoJkqz0479jEkBmnIv",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto Organizado Tipo",
      "title": "08_Recetario_y_Tecnicas_Cocina.pdf",
      "year": 2026,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor",
      "tags": [
            "08_Producto_Recetarios",
            "Producto Organizado Tipo",
            "Ingesta Masiva"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto Organizado Tipo/08_Recetario_y_Tecnicas_Cocina.pdf",
      "media": {
            "driveFileId": "1T7GuvqTRzf5w70qoJkqz0479jEkBmnIv",
            "pdf": "1T7GuvqTRzf5w70qoJkqz0479jEkBmnIv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1T7GuvqTRzf5w70qoJkqz0479jEkBmnIv&sz=w1000"
      }
}
  ,
    {
      "id": "local-08-deep-2011_COR_HotelFerrero_Correo_Recetas_pdf",
      "driveId": "1XXGVP-UHISzk1otIuenht8_cWc0nOsjR",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2011",
      "title": "2011_COR_HotelFerrero_Correo_Recetas.pdf",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2011",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2011/2011_COR_HotelFerrero_Correo_Recetas.pdf",
      "media": {
            "driveFileId": "1XXGVP-UHISzk1otIuenht8_cWc0nOsjR",
            "pdf": "1XXGVP-UHISzk1otIuenht8_cWc0nOsjR",
            "thumbnail": "https://drive.google.com/thumbnail?id=1XXGVP-UHISzk1otIuenht8_cWc0nOsjR&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2011_CTR_HotelFerrero_documentaci_n_Recetario_pdf",
      "driveId": "1W7VpuziSvWAyc5S1yqATiH3Uj4XR_B6H",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2011",
      "title": "2011_CTR_HotelFerrero_documentación-Recetario.pdf",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2011",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2011/2011_CTR_HotelFerrero_documentación-Recetario.pdf",
      "media": {
            "driveFileId": "1W7VpuziSvWAyc5S1yqATiH3Uj4XR_B6H",
            "pdf": "1W7VpuziSvWAyc5S1yqATiH3Uj4XR_B6H",
            "thumbnail": "https://drive.google.com/thumbnail?id=1W7VpuziSvWAyc5S1yqATiH3Uj4XR_B6H&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_HotelFerrero_Producto_Recetas_pdf",
      "driveId": "1IK6okeY1-P2KSd8JBjk-gwHBiCI8b6fi",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2011",
      "title": "2013_PRO_HotelFerrero_Producto_Recetas.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2011",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2011/2013_PRO_HotelFerrero_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1IK6okeY1-P2KSd8JBjk-gwHBiCI8b6fi",
            "pdf": "1IK6okeY1-P2KSd8JBjk-gwHBiCI8b6fi",
            "thumbnail": "https://drive.google.com/thumbnail?id=1IK6okeY1-P2KSd8JBjk-gwHBiCI8b6fi&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2011_Cor_HotelFerrero_Correo_Recetas__1__pdf",
      "driveId": "1TZtgKcddlQ3-u5gnoAyM0KQT2iyW8JkS",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2011",
      "title": "2011_Cor_HotelFerrero_Correo_Recetas (1).pdf",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2011",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2011/2011_Cor_HotelFerrero_Correo_Recetas (1).pdf",
      "media": {
            "driveFileId": "1TZtgKcddlQ3-u5gnoAyM0KQT2iyW8JkS",
            "pdf": "1TZtgKcddlQ3-u5gnoAyM0KQT2iyW8JkS",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TZtgKcddlQ3-u5gnoAyM0KQT2iyW8JkS&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2011_CTR_HotelFerrero_documentaci_n_procesos_docx",
      "driveId": "1Oq80X4OX_iIJaDxzf93W8P_TftqOnFvK",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2011",
      "title": "TRANSCRIPT_2011_CTR_HotelFerrero_documentación-procesos.docx",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2011",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2011/TRANSCRIPT_2011_CTR_HotelFerrero_documentación-procesos.docx",
      "media": {
            "driveFileId": "1Oq80X4OX_iIJaDxzf93W8P_TftqOnFvK",
            "pdf": "1Oq80X4OX_iIJaDxzf93W8P_TftqOnFvK",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Oq80X4OX_iIJaDxzf93W8P_TftqOnFvK&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2011_CTR_HotelFerrero_documentaci_n_procesos_pdf",
      "driveId": "1-p_Z0ROI475JPilU8vAjFenN9AUC0os6",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2011",
      "title": "2011_CTR_HotelFerrero_documentación-procesos.pdf",
      "year": 2011,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2011",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2011/2011_CTR_HotelFerrero_documentación-procesos.pdf",
      "media": {
            "driveFileId": "1-p_Z0ROI475JPilU8vAjFenN9AUC0os6",
            "pdf": "1-p_Z0ROI475JPilU8vAjFenN9AUC0os6",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-p_Z0ROI475JPilU8vAjFenN9AUC0os6&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2006_PRO_Producto_Procesos_maquetaci_n_etiqueta_pdf",
      "driveId": "1-8AflfG1oiK_noeJykQslLEsm-T47_ph",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2006",
      "title": "2006_PRO_Producto_Procesos_maquetación_etiqueta.pdf",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2006",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2006/2006_PRO_Producto_Procesos_maquetación_etiqueta.pdf",
      "media": {
            "driveFileId": "1-8AflfG1oiK_noeJykQslLEsm-T47_ph",
            "pdf": "1-8AflfG1oiK_noeJykQslLEsm-T47_ph",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-8AflfG1oiK_noeJykQslLEsm-T47_ph&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2006_PRO_Recetario_Carnaval_pdf_docx",
      "driveId": "1GHLbhPTCidM-C00szQ6AqN9f4uq4GRNk",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2006",
      "title": "TRANSCRIPT_2006_PRO_Recetario_Carnaval_pdf.docx",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2006",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2006/TRANSCRIPT_2006_PRO_Recetario_Carnaval_pdf.docx",
      "media": {
            "driveFileId": "1GHLbhPTCidM-C00szQ6AqN9f4uq4GRNk",
            "pdf": "1GHLbhPTCidM-C00szQ6AqN9f4uq4GRNk",
            "thumbnail": "https://drive.google.com/thumbnail?id=1GHLbhPTCidM-C00szQ6AqN9f4uq4GRNk&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2006_DOC_Mugaritz_Tipos_oficios_pdf_pdf",
      "driveId": "1P8J6RYyaRIkHmHhgJ6wvoFfiFbhUcZQK",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2006",
      "title": "2006_DOC_Mugaritz_Tipos_oficios_pdf.pdf",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2006",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2006/2006_DOC_Mugaritz_Tipos_oficios_pdf.pdf",
      "media": {
            "driveFileId": "1P8J6RYyaRIkHmHhgJ6wvoFfiFbhUcZQK",
            "pdf": "1P8J6RYyaRIkHmHhgJ6wvoFfiFbhUcZQK",
            "thumbnail": "https://drive.google.com/thumbnail?id=1P8J6RYyaRIkHmHhgJ6wvoFfiFbhUcZQK&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2006_PRO_Akelare_Documentaci_n_Carnaval_pdf_docx",
      "driveId": "1CuUZvBH6gDRNI_491fCYxwOTKuoAJ9Es",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2006",
      "title": "TRANSCRIPT_2006_PRO_Akelare_Documentación_Carnaval_pdf.docx",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2006",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2006/TRANSCRIPT_2006_PRO_Akelare_Documentación_Carnaval_pdf.docx",
      "media": {
            "driveFileId": "1CuUZvBH6gDRNI_491fCYxwOTKuoAJ9Es",
            "pdf": "1CuUZvBH6gDRNI_491fCYxwOTKuoAJ9Es",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CuUZvBH6gDRNI_491fCYxwOTKuoAJ9Es&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2006_PRO_Akelare_Documentaci_n_Carnaval_pdf_pdf",
      "driveId": "11-ceMym-WeekGYlg-hklGNlW6pfS9m2I",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2006",
      "title": "2006_PRO_Akelare_Documentación_Carnaval_pdf.pdf",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2006",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2006/2006_PRO_Akelare_Documentación_Carnaval_pdf.pdf",
      "media": {
            "driveFileId": "11-ceMym-WeekGYlg-hklGNlW6pfS9m2I",
            "pdf": "11-ceMym-WeekGYlg-hklGNlW6pfS9m2I",
            "thumbnail": "https://drive.google.com/thumbnail?id=11-ceMym-WeekGYlg-hklGNlW6pfS9m2I&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2006_PRO_Recetario_Carnaval_pdf_pdf",
      "driveId": "1S1asYm-pFHVxYDKYPJ48uMewJ3xayPxw",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2006",
      "title": "2006_PRO_Recetario_Carnaval_pdf.pdf",
      "year": 2006,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2006",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2006/2006_PRO_Recetario_Carnaval_pdf.pdf",
      "media": {
            "driveFileId": "1S1asYm-pFHVxYDKYPJ48uMewJ3xayPxw",
            "pdf": "1S1asYm-pFHVxYDKYPJ48uMewJ3xayPxw",
            "thumbnail": "https://drive.google.com/thumbnail?id=1S1asYm-pFHVxYDKYPJ48uMewJ3xayPxw&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2013_PRO_HotelFerrero_Producto_Recetas_docx",
      "driveId": "1cV6-lnEfYUJsyggQlHM3Z2AxYiwfWknh",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "TRANSCRIPT_2013_PRO_HotelFerrero_Producto_Recetas.docx",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/TRANSCRIPT_2013_PRO_HotelFerrero_Producto_Recetas.docx",
      "media": {
            "driveFileId": "1cV6-lnEfYUJsyggQlHM3Z2AxYiwfWknh",
            "pdf": "1cV6-lnEfYUJsyggQlHM3Z2AxYiwfWknh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1cV6-lnEfYUJsyggQlHM3Z2AxYiwfWknh&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_HotelFerrero_Producto_Correo_Recetas_pdf",
      "driveId": "1CkzcFcS_YcOlXWrxMdI82oes3Ri8qWTw",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "2013_PRO_HotelFerrero_Producto_Correo_Recetas.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/2013_PRO_HotelFerrero_Producto_Correo_Recetas.pdf",
      "media": {
            "driveFileId": "1CkzcFcS_YcOlXWrxMdI82oes3Ri8qWTw",
            "pdf": "1CkzcFcS_YcOlXWrxMdI82oes3Ri8qWTw",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CkzcFcS_YcOlXWrxMdI82oes3Ri8qWTw&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_HotelFerrero_HojadeProducci_n_Recetas_pdf",
      "driveId": "1cw-tT-gT2T8c9JMezDZjMeFNSf8Qe3IY",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "2013_PRO_HotelFerrero_HojadeProducción_Recetas.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/2013_PRO_HotelFerrero_HojadeProducción_Recetas.pdf",
      "media": {
            "driveFileId": "1cw-tT-gT2T8c9JMezDZjMeFNSf8Qe3IY",
            "pdf": "1cw-tT-gT2T8c9JMezDZjMeFNSf8Qe3IY",
            "thumbnail": "https://drive.google.com/thumbnail?id=1cw-tT-gT2T8c9JMezDZjMeFNSf8Qe3IY&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_HotelFerrero_Producto_Recetas__1__pdf",
      "driveId": "1CyidiQ5cEoyUZSaLu2WdlLJn2WEqzKG8",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "2013_PRO_HotelFerrero_Producto_Recetas (1).pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/2013_PRO_HotelFerrero_Producto_Recetas (1).pdf",
      "media": {
            "driveFileId": "1CyidiQ5cEoyUZSaLu2WdlLJn2WEqzKG8",
            "pdf": "1CyidiQ5cEoyUZSaLu2WdlLJn2WEqzKG8",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CyidiQ5cEoyUZSaLu2WdlLJn2WEqzKG8&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_Hotel_AlFasaliah_Producto_Recetas_pdf",
      "driveId": "1KlnpCaS28_jebpwMtEJArWvzqIAqSNDI",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "2013_PRO_Hotel_AlFasaliah_Producto_Recetas.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/2013_PRO_Hotel_AlFasaliah_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1KlnpCaS28_jebpwMtEJArWvzqIAqSNDI",
            "pdf": "1KlnpCaS28_jebpwMtEJArWvzqIAqSNDI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KlnpCaS28_jebpwMtEJArWvzqIAqSNDI&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_HotelFerrero_Producto_Recetas_pdf",
      "driveId": "1jOLAYB0716ysHwMQBD3NqBuUiw_6yfnO",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "2013_PRO_HotelFerrero_Producto_Recetas.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/2013_PRO_HotelFerrero_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1jOLAYB0716ysHwMQBD3NqBuUiw_6yfnO",
            "pdf": "1jOLAYB0716ysHwMQBD3NqBuUiw_6yfnO",
            "thumbnail": "https://drive.google.com/thumbnail?id=1jOLAYB0716ysHwMQBD3NqBuUiw_6yfnO&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2013_PRO_HotelFerrero_Hoja_Protocolo_Recetas_pdf",
      "driveId": "1AkhfsS92oYGe4oxGvohn-nQ2qRI0F9Is",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "2013_PRO_HotelFerrero_Hoja_Protocolo_Recetas.pdf",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/2013_PRO_HotelFerrero_Hoja_Protocolo_Recetas.pdf",
      "media": {
            "driveFileId": "1AkhfsS92oYGe4oxGvohn-nQ2qRI0F9Is",
            "pdf": "1AkhfsS92oYGe4oxGvohn-nQ2qRI0F9Is",
            "thumbnail": "https://drive.google.com/thumbnail?id=1AkhfsS92oYGe4oxGvohn-nQ2qRI0F9Is&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2013_PRO_HotelFerrero_HojadeProducci_n_Recetas_docx",
      "driveId": "1M3dEU1_Tp45tRYZ2A0hPIAcdybzIORGj",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2013",
      "title": "TRANSCRIPT_2013_PRO_HotelFerrero_HojadeProducción_Recetas.docx",
      "year": 2013,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2013",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2013/TRANSCRIPT_2013_PRO_HotelFerrero_HojadeProducción_Recetas.docx",
      "media": {
            "driveFileId": "1M3dEU1_Tp45tRYZ2A0hPIAcdybzIORGj",
            "pdf": "1M3dEU1_Tp45tRYZ2A0hPIAcdybzIORGj",
            "thumbnail": "https://drive.google.com/thumbnail?id=1M3dEU1_Tp45tRYZ2A0hPIAcdybzIORGj&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_checklist_Recetas_pdf",
      "driveId": "1FsOQJEAuoj2Irohw6WVeatm9lbQfLeEO",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_checklist_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_checklist_Recetas.pdf",
      "media": {
            "driveFileId": "1FsOQJEAuoj2Irohw6WVeatm9lbQfLeEO",
            "pdf": "1FsOQJEAuoj2Irohw6WVeatm9lbQfLeEO",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FsOQJEAuoj2Irohw6WVeatm9lbQfLeEO&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Producto_Recetas_pdf",
      "driveId": "115BnquZ5qHhqyAs_xHcRIlKaICwyyVzg",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Producto_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "115BnquZ5qHhqyAs_xHcRIlKaICwyyVzg",
            "pdf": "115BnquZ5qHhqyAs_xHcRIlKaICwyyVzg",
            "thumbnail": "https://drive.google.com/thumbnail?id=115BnquZ5qHhqyAs_xHcRIlKaICwyyVzg&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Vinos_Producto_Recetas_pdf",
      "driveId": "1ywTPyb2BhqAfl2ui5RJhIL4nDazMGMUA",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Vinos_Producto_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Vinos_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1ywTPyb2BhqAfl2ui5RJhIL4nDazMGMUA",
            "pdf": "1ywTPyb2BhqAfl2ui5RJhIL4nDazMGMUA",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ywTPyb2BhqAfl2ui5RJhIL4nDazMGMUA&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_FormatodeProducto_Recetas_pdf",
      "driveId": "1slwNN5Jyve-BvduQoP-OdznABzmxPXNV",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_FormatodeProducto_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_FormatodeProducto_Recetas.pdf",
      "media": {
            "driveFileId": "1slwNN5Jyve-BvduQoP-OdznABzmxPXNV",
            "pdf": "1slwNN5Jyve-BvduQoP-OdznABzmxPXNV",
            "thumbnail": "https://drive.google.com/thumbnail?id=1slwNN5Jyve-BvduQoP-OdznABzmxPXNV&sz=w1000"
      }
},
    {
      "id": "local-08-deep-__CUMENTO_DE_CONCEPTOS_CREATIVOS_docx",
      "driveId": "local-36647",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "~$CUMENTO DE CONCEPTOS CREATIVOS.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/~$CUMENTO DE CONCEPTOS CREATIVOS.docx",
      "media": {
            "driveFileId": "local-36647",
            "pdf": "local-36647",
            "thumbnail": "https://drive.google.com/thumbnail?id=local-36647&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_VAR_HotelFerrero_Varios_Recetas_pdf",
      "driveId": "1Lc05Leq8EngZyL5AfbHoaXOI2x_Lk5cC",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_VAR_HotelFerrero_Varios_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_VAR_HotelFerrero_Varios_Recetas.pdf",
      "media": {
            "driveFileId": "1Lc05Leq8EngZyL5AfbHoaXOI2x_Lk5cC",
            "pdf": "1Lc05Leq8EngZyL5AfbHoaXOI2x_Lk5cC",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Lc05Leq8EngZyL5AfbHoaXOI2x_Lk5cC&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRASCRIPT_2012_PRO_HotelFerrero_ConceptosCreativos_docx",
      "driveId": "1gqGlM0AcPc4vKMrb7hBpzwwEM5jRJb1P",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "TRASCRIPT_2012_PRO_HotelFerrero_ConceptosCreativos.docx",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/TRASCRIPT_2012_PRO_HotelFerrero_ConceptosCreativos.docx",
      "media": {
            "driveFileId": "1gqGlM0AcPc4vKMrb7hBpzwwEM5jRJb1P",
            "pdf": "1gqGlM0AcPc4vKMrb7hBpzwwEM5jRJb1P",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gqGlM0AcPc4vKMrb7hBpzwwEM5jRJb1P&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Recetario_Men_s_pdf",
      "driveId": "1MQ4SWIun1qL_NRoQdEE7Bl4IKN3lNg58",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Recetario-Menús.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Recetario-Menús.pdf",
      "media": {
            "driveFileId": "1MQ4SWIun1qL_NRoQdEE7Bl4IKN3lNg58",
            "pdf": "1MQ4SWIun1qL_NRoQdEE7Bl4IKN3lNg58",
            "thumbnail": "https://drive.google.com/thumbnail?id=1MQ4SWIun1qL_NRoQdEE7Bl4IKN3lNg58&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Factura_Recetas_pdf",
      "driveId": "1uuunodef3Z_XVZvYh8RuNsmsX63dMhjA",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Factura_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Factura_Recetas.pdf",
      "media": {
            "driveFileId": "1uuunodef3Z_XVZvYh8RuNsmsX63dMhjA",
            "pdf": "1uuunodef3Z_XVZvYh8RuNsmsX63dMhjA",
            "thumbnail": "https://drive.google.com/thumbnail?id=1uuunodef3Z_XVZvYh8RuNsmsX63dMhjA&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Comprobante_pdf",
      "driveId": "1TFKq-aiqj0lkCxvSDWAiCCoFClfFbZ-f",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Comprobante.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Comprobante.pdf",
      "media": {
            "driveFileId": "1TFKq-aiqj0lkCxvSDWAiCCoFClfFbZ-f",
            "pdf": "1TFKq-aiqj0lkCxvSDWAiCCoFClfFbZ-f",
            "thumbnail": "https://drive.google.com/thumbnail?id=1TFKq-aiqj0lkCxvSDWAiCCoFClfFbZ-f&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Comuni_n_Bodas_Bautizos_040512_121112_pdf",
      "driveId": "1m-pKwH7EugI_oNUxgjWsTIZVvYkSMPxB",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Comunión_Bodas_Bautizos_040512_121112.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Comunión_Bodas_Bautizos_040512_121112.pdf",
      "media": {
            "driveFileId": "1m-pKwH7EugI_oNUxgjWsTIZVvYkSMPxB",
            "pdf": "1m-pKwH7EugI_oNUxgjWsTIZVvYkSMPxB",
            "thumbnail": "https://drive.google.com/thumbnail?id=1m-pKwH7EugI_oNUxgjWsTIZVvYkSMPxB&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_DivalCatering_Producto_Recetas_pdf",
      "driveId": "1GbdnRdEDvZioGCuBjf7zYbao2UXw92vd",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_DivalCatering_Producto_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_DivalCatering_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1GbdnRdEDvZioGCuBjf7zYbao2UXw92vd",
            "pdf": "1GbdnRdEDvZioGCuBjf7zYbao2UXw92vd",
            "thumbnail": "https://drive.google.com/thumbnail?id=1GbdnRdEDvZioGCuBjf7zYbao2UXw92vd&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_ConceptosCreativos_pdf",
      "driveId": "1sDL3mcKsz3qpDwu2ZrODVxLTVBXpW1oP",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_ConceptosCreativos.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_ConceptosCreativos.pdf",
      "media": {
            "driveFileId": "1sDL3mcKsz3qpDwu2ZrODVxLTVBXpW1oP",
            "pdf": "1sDL3mcKsz3qpDwu2ZrODVxLTVBXpW1oP",
            "thumbnail": "https://drive.google.com/thumbnail?id=1sDL3mcKsz3qpDwu2ZrODVxLTVBXpW1oP&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Producto_Recetas_pdf_pdf2012_PRO_HotelFerrero_Producto_Recetas_pdf",
      "driveId": "1EM2w0Yokx8dcpDrdbLSL3DQITds5r13P",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Producto_Recetas.pdf.pdf2012_PRO_HotelFerrero_Producto_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Producto_Recetas.pdf.pdf2012_PRO_HotelFerrero_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1EM2w0Yokx8dcpDrdbLSL3DQITds5r13P",
            "pdf": "1EM2w0Yokx8dcpDrdbLSL3DQITds5r13P",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EM2w0Yokx8dcpDrdbLSL3DQITds5r13P&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Producto_Recetas__1__pdf",
      "driveId": "1S-r07-SoLsGVFvXC5pgqKG91rioGkJ7C",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Producto_Recetas (1).pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Producto_Recetas (1).pdf",
      "media": {
            "driveFileId": "1S-r07-SoLsGVFvXC5pgqKG91rioGkJ7C",
            "pdf": "1S-r07-SoLsGVFvXC5pgqKG91rioGkJ7C",
            "thumbnail": "https://drive.google.com/thumbnail?id=1S-r07-SoLsGVFvXC5pgqKG91rioGkJ7C&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_clasificaci_n_vinos_pdf",
      "driveId": "1CqJzoMWhoel2MQXOGRlldDPxrSr1l04y",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_clasificación-vinos.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_clasificación-vinos.pdf",
      "media": {
            "driveFileId": "1CqJzoMWhoel2MQXOGRlldDPxrSr1l04y",
            "pdf": "1CqJzoMWhoel2MQXOGRlldDPxrSr1l04y",
            "thumbnail": "https://drive.google.com/thumbnail?id=1CqJzoMWhoel2MQXOGRlldDPxrSr1l04y&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_COR_Correos_HotelFerrero_Producto_Recetas_pdf",
      "driveId": "1Rl2GxXECG8snIdaulZKVH0i8Mt2u3EKp",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_COR_Correos_HotelFerrero_Producto_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_COR_Correos_HotelFerrero_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1Rl2GxXECG8snIdaulZKVH0i8Mt2u3EKp",
            "pdf": "1Rl2GxXECG8snIdaulZKVH0i8Mt2u3EKp",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Rl2GxXECG8snIdaulZKVH0i8Mt2u3EKp&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_documentaci_n_producto_pdf",
      "driveId": "1SHYL4IrDiUXuN08bSx4Aq6KLtF8qF8UH",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_documentación-producto.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_documentación-producto.pdf",
      "media": {
            "driveFileId": "1SHYL4IrDiUXuN08bSx4Aq6KLtF8qF8UH",
            "pdf": "1SHYL4IrDiUXuN08bSx4Aq6KLtF8qF8UH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1SHYL4IrDiUXuN08bSx4Aq6KLtF8qF8UH&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2012_PRO_HotelFerrero_Recetas_pdf",
      "driveId": "1BrVULnm-TSCfBd8Y5B9ZcH51wJwRFm3s",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2012",
      "title": "2012_PRO_HotelFerrero_Recetas.pdf",
      "year": 2012,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2012",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2012/2012_PRO_HotelFerrero_Recetas.pdf",
      "media": {
            "driveFileId": "1BrVULnm-TSCfBd8Y5B9ZcH51wJwRFm3s",
            "pdf": "1BrVULnm-TSCfBd8Y5B9ZcH51wJwRFm3s",
            "thumbnail": "https://drive.google.com/thumbnail?id=1BrVULnm-TSCfBd8Y5B9ZcH51wJwRFm3s&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2021_PRO_ElBulliArchive_Producto_pdf",
      "driveId": "13D7KlNywZFlPUA9scrUCJdFz1c1PO7IJ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2021",
      "title": "2021_PRO_ElBulliArchive_Producto.pdf",
      "year": 2021,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2021",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2021/2021_PRO_ElBulliArchive_Producto.pdf",
      "media": {
            "driveFileId": "13D7KlNywZFlPUA9scrUCJdFz1c1PO7IJ",
            "pdf": "13D7KlNywZFlPUA9scrUCJdFz1c1PO7IJ",
            "thumbnail": "https://drive.google.com/thumbnail?id=13D7KlNywZFlPUA9scrUCJdFz1c1PO7IJ&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2008_003_PRO_Recetario_Men__procesos_pdf",
      "driveId": "19DnOcZjAphr6XWFU4iABsi3q7oPv69I6",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "2008_003_PRO_Recetario_Menú-procesos.pdf",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/2008_003_PRO_Recetario_Menú-procesos.pdf",
      "media": {
            "driveFileId": "19DnOcZjAphr6XWFU4iABsi3q7oPv69I6",
            "pdf": "19DnOcZjAphr6XWFU4iABsi3q7oPv69I6",
            "thumbnail": "https://drive.google.com/thumbnail?id=19DnOcZjAphr6XWFU4iABsi3q7oPv69I6&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2008_001_PRO_Recetario_Men__Procesos_pdf_pdf",
      "driveId": "16ECe8s_TXP3yWIoj1DrnlmoqfOxCu_x5",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "2008_001_PRO_Recetario_Menú_Procesos_pdf.pdf",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/2008_001_PRO_Recetario_Menú_Procesos_pdf.pdf",
      "media": {
            "driveFileId": "16ECe8s_TXP3yWIoj1DrnlmoqfOxCu_x5",
            "pdf": "16ECe8s_TXP3yWIoj1DrnlmoqfOxCu_x5",
            "thumbnail": "https://drive.google.com/thumbnail?id=16ECe8s_TXP3yWIoj1DrnlmoqfOxCu_x5&sz=w1000"
      }
},
    {
      "id": "local-08-deep-__ARTE_1_docx",
      "driveId": "local-36613",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "~$ARTE 1.docx",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/~$ARTE 1.docx",
      "media": {
            "driveFileId": "local-36613",
            "pdf": "local-36613",
            "thumbnail": "https://drive.google.com/thumbnail?id=local-36613&sz=w1000"
      }
},
    {
      "id": "local-08-deep-PARTE_1_docx",
      "driveId": "1PIs8H6b2Jiifv7h_l9H3m_tTiAVlOD7H",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "PARTE 1.docx",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/PARTE 1.docx",
      "media": {
            "driveFileId": "1PIs8H6b2Jiifv7h_l9H3m_tTiAVlOD7H",
            "pdf": "1PIs8H6b2Jiifv7h_l9H3m_tTiAVlOD7H",
            "thumbnail": "https://drive.google.com/thumbnail?id=1PIs8H6b2Jiifv7h_l9H3m_tTiAVlOD7H&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRASCRIPT__2008_004_PRO_Recetario_Men__procesos_docx",
      "driveId": "1gbPlRW47xWb3b0huYzNfT1VTeNQiFEaI",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "TRASCRIPT_ 2008_004_PRO_Recetario_Menú-procesos.docx",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/TRASCRIPT_ 2008_004_PRO_Recetario_Menú-procesos.docx",
      "media": {
            "driveFileId": "1gbPlRW47xWb3b0huYzNfT1VTeNQiFEaI",
            "pdf": "1gbPlRW47xWb3b0huYzNfT1VTeNQiFEaI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gbPlRW47xWb3b0huYzNfT1VTeNQiFEaI&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2008_002_PRO_Recetario_Men__Procesos_pdf",
      "driveId": "1WwzxG8Cb7r_48cBV25MBCzTtYkzxm3nZ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "2008_002_PRO_Recetario_Menú_Procesos.pdf",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/2008_002_PRO_Recetario_Menú_Procesos.pdf",
      "media": {
            "driveFileId": "1WwzxG8Cb7r_48cBV25MBCzTtYkzxm3nZ",
            "pdf": "1WwzxG8Cb7r_48cBV25MBCzTtYkzxm3nZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1WwzxG8Cb7r_48cBV25MBCzTtYkzxm3nZ&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2008_004_PRO_Recetario_Men__procesos_pdf",
      "driveId": "1lraVdWFc_M0pmkz6jgLSdKttHAKfHzbf",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "2008_004_PRO_Recetario_Menú-procesos.pdf",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/2008_004_PRO_Recetario_Menú-procesos.pdf",
      "media": {
            "driveFileId": "1lraVdWFc_M0pmkz6jgLSdKttHAKfHzbf",
            "pdf": "1lraVdWFc_M0pmkz6jgLSdKttHAKfHzbf",
            "thumbnail": "https://drive.google.com/thumbnail?id=1lraVdWFc_M0pmkz6jgLSdKttHAKfHzbf&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2008_002_PRO_Recetario_Men__Procesos_docx",
      "driveId": "1DdXIWzFyGq0v45A7HWKD3335K3aTVezE",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "TRANSCRIPT_2008_002_PRO_Recetario_Menú_Procesos.docx",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/TRANSCRIPT_2008_002_PRO_Recetario_Menú_Procesos.docx",
      "media": {
            "driveFileId": "1DdXIWzFyGq0v45A7HWKD3335K3aTVezE",
            "pdf": "1DdXIWzFyGq0v45A7HWKD3335K3aTVezE",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DdXIWzFyGq0v45A7HWKD3335K3aTVezE&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2008_001_PRO_Recetario_Men__Procesos_pdf_docx",
      "driveId": "1bUas1j2IfN2zRN2Ve0_RgQ9xjfgdnxet",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "TRANSCRIPT_2008_001_PRO_Recetario_Menú_Procesos_pdf.docx",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/TRANSCRIPT_2008_001_PRO_Recetario_Menú_Procesos_pdf.docx",
      "media": {
            "driveFileId": "1bUas1j2IfN2zRN2Ve0_RgQ9xjfgdnxet",
            "pdf": "1bUas1j2IfN2zRN2Ve0_RgQ9xjfgdnxet",
            "thumbnail": "https://drive.google.com/thumbnail?id=1bUas1j2IfN2zRN2Ve0_RgQ9xjfgdnxet&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2008_003_PRO_Recetario_Men__procesos_docx",
      "driveId": "1a6lKx0sKtnqEPVzm7kJqydW0wMC_9sdv",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2008",
      "title": "TRANSCRIPT_2008_003_PRO_Recetario_Menú-procesos.docx",
      "year": 2008,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2008",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2008/TRANSCRIPT_2008_003_PRO_Recetario_Menú-procesos.docx",
      "media": {
            "driveFileId": "1a6lKx0sKtnqEPVzm7kJqydW0wMC_9sdv",
            "pdf": "1a6lKx0sKtnqEPVzm7kJqydW0wMC_9sdv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1a6lKx0sKtnqEPVzm7kJqydW0wMC_9sdv&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_ElbardePaco_Producto_Recetas_pdf",
      "driveId": "1FWb9rfsqMrPhMQAiAThnORybfZZJKgCZ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_ElbardePaco_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_ElbardePaco_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1FWb9rfsqMrPhMQAiAThnORybfZZJKgCZ",
            "pdf": "1FWb9rfsqMrPhMQAiAThnORybfZZJKgCZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1FWb9rfsqMrPhMQAiAThnORybfZZJKgCZ&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PLN__Plano_Restaurante_pdf",
      "driveId": "12u2FOU7x4RH64tYDooX8YzmudkxkOlqa",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PLN__Plano_Restaurante.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PLN__Plano_Restaurante.pdf",
      "media": {
            "driveFileId": "12u2FOU7x4RH64tYDooX8YzmudkxkOlqa",
            "pdf": "12u2FOU7x4RH64tYDooX8YzmudkxkOlqa",
            "thumbnail": "https://drive.google.com/thumbnail?id=12u2FOU7x4RH64tYDooX8YzmudkxkOlqa&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_C_Tapas_Producto_Recetas_pdf",
      "driveId": "1EhurerJ_qJUSPgjCfbqXO00nb_2d4w-o",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_C&Tapas_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_C&Tapas_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1EhurerJ_qJUSPgjCfbqXO00nb_2d4w-o",
            "pdf": "1EhurerJ_qJUSPgjCfbqXO00nb_2d4w-o",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EhurerJ_qJUSPgjCfbqXO00nb_2d4w-o&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_Noor_NuevomundoAndalus__Producto_Recetas_pdf",
      "driveId": "1biE2c52UkZ48kqwfVFFhkQfAH2tusEV-",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_Noor_NuevomundoAndalusí_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_Noor_NuevomundoAndalusí_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1biE2c52UkZ48kqwfVFFhkQfAH2tusEV-",
            "pdf": "1biE2c52UkZ48kqwfVFFhkQfAH2tusEV-",
            "thumbnail": "https://drive.google.com/thumbnail?id=1biE2c52UkZ48kqwfVFFhkQfAH2tusEV-&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_ElBarPacoMorales_Producto_Recetas_pdf",
      "driveId": "16wiUYcyt1IVhEXXVd3jLazOERBjLoXMa",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_ElBarPacoMorales_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_ElBarPacoMorales_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "16wiUYcyt1IVhEXXVd3jLazOERBjLoXMa",
            "pdf": "16wiUYcyt1IVhEXXVd3jLazOERBjLoXMa",
            "thumbnail": "https://drive.google.com/thumbnail?id=16wiUYcyt1IVhEXXVd3jLazOERBjLoXMa&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_Esma_Coctails_Producto_Recetas_pdf",
      "driveId": "1_bgSfdWDnkNJc6CYqvZTPaicmLp05ksl",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_Esma_Coctails_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_Esma_Coctails_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1_bgSfdWDnkNJc6CYqvZTPaicmLp05ksl",
            "pdf": "1_bgSfdWDnkNJc6CYqvZTPaicmLp05ksl",
            "thumbnail": "https://drive.google.com/thumbnail?id=1_bgSfdWDnkNJc6CYqvZTPaicmLp05ksl&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_Noor_Producto_Recetas_pdf",
      "driveId": "10zB-4ZhtDapd6-XSRPCB7jiqQPRsuyVu",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_Noor_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_Noor_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "10zB-4ZhtDapd6-XSRPCB7jiqQPRsuyVu",
            "pdf": "10zB-4ZhtDapd6-XSRPCB7jiqQPRsuyVu",
            "thumbnail": "https://drive.google.com/thumbnail?id=10zB-4ZhtDapd6-XSRPCB7jiqQPRsuyVu&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2018_PRO_Noor_Ossiano_Producto_Recetas_pdf",
      "driveId": "12heSITkI5HXKoMRZQwzzBPMmao_1_NVS",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2018",
      "title": "2018_PRO_Noor_Ossiano_Producto_Recetas.pdf",
      "year": 2018,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2018",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2018/2018_PRO_Noor_Ossiano_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "12heSITkI5HXKoMRZQwzzBPMmao_1_NVS",
            "pdf": "12heSITkI5HXKoMRZQwzzBPMmao_1_NVS",
            "thumbnail": "https://drive.google.com/thumbnail?id=12heSITkI5HXKoMRZQwzzBPMmao_1_NVS&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRASCRIPT_2001_PRO_Producto_esquema_maquetaci_n_docx",
      "driveId": "1eYSNQoqqtnoDj3Vbs6HLCn_DgNMs9Qfv",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2001",
      "title": "TRASCRIPT_2001_PRO_Producto_esquema_maquetación.docx",
      "year": 2001,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2001",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2001/TRASCRIPT_2001_PRO_Producto_esquema_maquetación.docx",
      "media": {
            "driveFileId": "1eYSNQoqqtnoDj3Vbs6HLCn_DgNMs9Qfv",
            "pdf": "1eYSNQoqqtnoDj3Vbs6HLCn_DgNMs9Qfv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eYSNQoqqtnoDj3Vbs6HLCn_DgNMs9Qfv&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2001_PRO_Producto_esquema_maquetaci_n_pdf",
      "driveId": "17pv5ECBJ7RnVVVtb81zp_CZA3xYUhCD7",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2001",
      "title": "2001_PRO_Producto_esquema_maquetación.pdf",
      "year": 2001,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2001",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2001/2001_PRO_Producto_esquema_maquetación.pdf",
      "media": {
            "driveFileId": "17pv5ECBJ7RnVVVtb81zp_CZA3xYUhCD7",
            "pdf": "17pv5ECBJ7RnVVVtb81zp_CZA3xYUhCD7",
            "thumbnail": "https://drive.google.com/thumbnail?id=17pv5ECBJ7RnVVVtb81zp_CZA3xYUhCD7&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2015_PRO_Producto_Recetas_Escaveches_Mousses_docx",
      "driveId": "1H2vf1T6U9lm09OwotbNgehfAL-4nnOdv",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "TRANSCRIPT_2015_PRO_Producto_Recetas_Escaveches_Mousses.docx",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/TRANSCRIPT_2015_PRO_Producto_Recetas_Escaveches_Mousses.docx",
      "media": {
            "driveFileId": "1H2vf1T6U9lm09OwotbNgehfAL-4nnOdv",
            "pdf": "1H2vf1T6U9lm09OwotbNgehfAL-4nnOdv",
            "thumbnail": "https://drive.google.com/thumbnail?id=1H2vf1T6U9lm09OwotbNgehfAL-4nnOdv&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2015_PRO_Noor_Producto_Proceso_docx",
      "driveId": "1Ob82TzG6ccOT2Zpcwlbr7RgTToGsGfo4",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "TRANSCRIPT_2015_PRO_Noor_Producto_Proceso.docx",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/TRANSCRIPT_2015_PRO_Noor_Producto_Proceso.docx",
      "media": {
            "driveFileId": "1Ob82TzG6ccOT2Zpcwlbr7RgTToGsGfo4",
            "pdf": "1Ob82TzG6ccOT2Zpcwlbr7RgTToGsGfo4",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Ob82TzG6ccOT2Zpcwlbr7RgTToGsGfo4&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2015_PRO_Noor_Producto_Proceso_pdf",
      "driveId": "1x8QHpPiMFlMyiV1CyZs585IZbTl2V70a",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "2015_PRO_Noor_Producto_Proceso.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/2015_PRO_Noor_Producto_Proceso.pdf",
      "media": {
            "driveFileId": "1x8QHpPiMFlMyiV1CyZs585IZbTl2V70a",
            "pdf": "1x8QHpPiMFlMyiV1CyZs585IZbTl2V70a",
            "thumbnail": "https://drive.google.com/thumbnail?id=1x8QHpPiMFlMyiV1CyZs585IZbTl2V70a&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2015_PRO_Producto_licor_infusionado_pdf",
      "driveId": "1A0ORLKeLOQwaPWwuKOHd--sPLn-dbx6J",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "2015_PRO_Producto_licor_infusionado.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/2015_PRO_Producto_licor_infusionado.pdf",
      "media": {
            "driveFileId": "1A0ORLKeLOQwaPWwuKOHd--sPLn-dbx6J",
            "pdf": "1A0ORLKeLOQwaPWwuKOHd--sPLn-dbx6J",
            "thumbnail": "https://drive.google.com/thumbnail?id=1A0ORLKeLOQwaPWwuKOHd--sPLn-dbx6J&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT2015_Noor_Producto_Calendario_procesos_docx",
      "driveId": "1T8ayNwdH0_5uo4Y0zVieRPFDHBI7d68S",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "TRANSCRIPT2015_Noor_Producto_Calendario_procesos.docx",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/TRANSCRIPT2015_Noor_Producto_Calendario_procesos.docx",
      "media": {
            "driveFileId": "1T8ayNwdH0_5uo4Y0zVieRPFDHBI7d68S",
            "pdf": "1T8ayNwdH0_5uo4Y0zVieRPFDHBI7d68S",
            "thumbnail": "https://drive.google.com/thumbnail?id=1T8ayNwdH0_5uo4Y0zVieRPFDHBI7d68S&sz=w1000"
      }
},
    {
      "id": "local-08-deep-__ARTE_1_docx",
      "driveId": "local-36697",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "~$ARTE 1.docx",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/~$ARTE 1.docx",
      "media": {
            "driveFileId": "local-36697",
            "pdf": "local-36697",
            "thumbnail": "https://drive.google.com/thumbnail?id=local-36697&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2015_Noor_Producto_Calendario_procesos_pdf",
      "driveId": "1BrFqwrONV-bNg6_tfes_Q53aDkGa2EIH",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "2015_Noor_Producto_Calendario_procesos.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/2015_Noor_Producto_Calendario_procesos.pdf",
      "media": {
            "driveFileId": "1BrFqwrONV-bNg6_tfes_Q53aDkGa2EIH",
            "pdf": "1BrFqwrONV-bNg6_tfes_Q53aDkGa2EIH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1BrFqwrONV-bNg6_tfes_Q53aDkGa2EIH&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2015_EST_Estructura_Torrelbenc_procesos_pdf",
      "driveId": "1KAsK6UBSNoWY8iM7Fz-Nso_Pt8w4msBD",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "2015_EST_Estructura_Torrelbenc_procesos.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/2015_EST_Estructura_Torrelbenc_procesos.pdf",
      "media": {
            "driveFileId": "1KAsK6UBSNoWY8iM7Fz-Nso_Pt8w4msBD",
            "pdf": "1KAsK6UBSNoWY8iM7Fz-Nso_Pt8w4msBD",
            "thumbnail": "https://drive.google.com/thumbnail?id=1KAsK6UBSNoWY8iM7Fz-Nso_Pt8w4msBD&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2015_Noor_Organigrama_Calendario_procesos_docx",
      "driveId": "1Q_wVsiWwTYSZN5Ky95yWgOpqz4BthZqZ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "TRANSCRIPT_2015_Noor_Organigrama_Calendario_procesos.docx",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/TRANSCRIPT_2015_Noor_Organigrama_Calendario_procesos.docx",
      "media": {
            "driveFileId": "1Q_wVsiWwTYSZN5Ky95yWgOpqz4BthZqZ",
            "pdf": "1Q_wVsiWwTYSZN5Ky95yWgOpqz4BthZqZ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Q_wVsiWwTYSZN5Ky95yWgOpqz4BthZqZ&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2015_Noor_Organigrama_Calendario_procesos_pdf",
      "driveId": "1ajz_Z_3ovmH04RBimIO9snIy1C8U4LS9",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "2015_Noor_Organigrama_Calendario_procesos.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/2015_Noor_Organigrama_Calendario_procesos.pdf",
      "media": {
            "driveFileId": "1ajz_Z_3ovmH04RBimIO9snIy1C8U4LS9",
            "pdf": "1ajz_Z_3ovmH04RBimIO9snIy1C8U4LS9",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ajz_Z_3ovmH04RBimIO9snIy1C8U4LS9&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2015_EST_Estructura_Torrelbenc_procesos_docx",
      "driveId": "11_LNM5kxzAc613gk8QEKEWlquJKXsAN-",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "TRANSCRIPT_2015_EST_Estructura_Torrelbenc_procesos.docx",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/TRANSCRIPT_2015_EST_Estructura_Torrelbenc_procesos.docx",
      "media": {
            "driveFileId": "11_LNM5kxzAc613gk8QEKEWlquJKXsAN-",
            "pdf": "11_LNM5kxzAc613gk8QEKEWlquJKXsAN-",
            "thumbnail": "https://drive.google.com/thumbnail?id=11_LNM5kxzAc613gk8QEKEWlquJKXsAN-&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2015_PRO_Producto_Recetas_Escaveches_Mousses_pdf",
      "driveId": "1DbtLS1g47rh3YYs4s1vXaQ9Wa5pCXuxi",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2015",
      "title": "2015_PRO_Producto_Recetas_Escaveches_Mousses.pdf",
      "year": 2015,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2015",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2015/2015_PRO_Producto_Recetas_Escaveches_Mousses.pdf",
      "media": {
            "driveFileId": "1DbtLS1g47rh3YYs4s1vXaQ9Wa5pCXuxi",
            "pdf": "1DbtLS1g47rh3YYs4s1vXaQ9Wa5pCXuxi",
            "thumbnail": "https://drive.google.com/thumbnail?id=1DbtLS1g47rh3YYs4s1vXaQ9Wa5pCXuxi&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2003_PRO_Recetario_entradas_y_salidas_oto_o_invierno_Hojaldrada_pdf",
      "driveId": "1h_QOFGyf6rJyMG_JarqRiv3EtkzjR8a_",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2003",
      "title": "2003_PRO_Recetario_entradas y salidas otoño invierno-Hojaldrada.pdf",
      "year": 2003,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2003",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2003/2003_PRO_Recetario_entradas y salidas otoño invierno-Hojaldrada.pdf",
      "media": {
            "driveFileId": "1h_QOFGyf6rJyMG_JarqRiv3EtkzjR8a_",
            "pdf": "1h_QOFGyf6rJyMG_JarqRiv3EtkzjR8a_",
            "thumbnail": "https://drive.google.com/thumbnail?id=1h_QOFGyf6rJyMG_JarqRiv3EtkzjR8a_&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2003_PRO_Recetario_entradas_y_salidas_para_la_carta_oto_o_invierno_2__docx",
      "driveId": "1-h3xMua--1SS07XKgkrWJPD414TCHJ1H",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2003",
      "title": "TRANSCRIPT_2003_PRO_Recetario_entradas y salidas para la carta otoño invierno(2).docx",
      "year": 2003,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2003",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2003/TRANSCRIPT_2003_PRO_Recetario_entradas y salidas para la carta otoño invierno(2).docx",
      "media": {
            "driveFileId": "1-h3xMua--1SS07XKgkrWJPD414TCHJ1H",
            "pdf": "1-h3xMua--1SS07XKgkrWJPD414TCHJ1H",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-h3xMua--1SS07XKgkrWJPD414TCHJ1H&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2003_PRO_Recetario_entradas_y_salidas_para_la_carta_oto_o_invierno_2__pdf",
      "driveId": "1NTLxZImyNpRgEM62uCP_udxnOl5ysUth",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2003",
      "title": "2003_PRO_Recetario_entradas y salidas para la carta otoño invierno(2).pdf",
      "year": 2003,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2003",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2003/2003_PRO_Recetario_entradas y salidas para la carta otoño invierno(2).pdf",
      "media": {
            "driveFileId": "1NTLxZImyNpRgEM62uCP_udxnOl5ysUth",
            "pdf": "1NTLxZImyNpRgEM62uCP_udxnOl5ysUth",
            "thumbnail": "https://drive.google.com/thumbnail?id=1NTLxZImyNpRgEM62uCP_udxnOl5ysUth&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2014_PRO_Producto_Procesos_pdf",
      "driveId": "1f4W9rGgIZzsOEUodSew9-BY8hIO3NtSI",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "2014_PRO_Producto_Procesos.pdf",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/2014_PRO_Producto_Procesos.pdf",
      "media": {
            "driveFileId": "1f4W9rGgIZzsOEUodSew9-BY8hIO3NtSI",
            "pdf": "1f4W9rGgIZzsOEUodSew9-BY8hIO3NtSI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1f4W9rGgIZzsOEUodSew9-BY8hIO3NtSI&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2014_PRO_Many_Producto_Recetas_pdf",
      "driveId": "1yBec_9A8fIveRaKJnxw1k-r9q4FQr-Rx",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "2014_PRO_Many_Producto_Recetas.pdf",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/2014_PRO_Many_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1yBec_9A8fIveRaKJnxw1k-r9q4FQr-Rx",
            "pdf": "1yBec_9A8fIveRaKJnxw1k-r9q4FQr-Rx",
            "thumbnail": "https://drive.google.com/thumbnail?id=1yBec_9A8fIveRaKJnxw1k-r9q4FQr-Rx&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2014_001_CRR_CORREO_RosaTovar_procesos_pdf",
      "driveId": "1xQbrWOc3RViHDDHMBiLqI-20BiI8u1NH",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "2014_001_CRR_CORREO_RosaTovar-procesos.pdf",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/2014_001_CRR_CORREO_RosaTovar-procesos.pdf",
      "media": {
            "driveFileId": "1xQbrWOc3RViHDDHMBiLqI-20BiI8u1NH",
            "pdf": "1xQbrWOc3RViHDDHMBiLqI-20BiI8u1NH",
            "thumbnail": "https://drive.google.com/thumbnail?id=1xQbrWOc3RViHDDHMBiLqI-20BiI8u1NH&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2014_002_CRR_CORREO_RosaTovar_procesos_pdf",
      "driveId": "1-Ka1F_Db85qO9AAKqcQOwYMa70I9xH8r",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "2014_002_CRR_CORREO_RosaTovar-procesos.pdf",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/2014_002_CRR_CORREO_RosaTovar-procesos.pdf",
      "media": {
            "driveFileId": "1-Ka1F_Db85qO9AAKqcQOwYMa70I9xH8r",
            "pdf": "1-Ka1F_Db85qO9AAKqcQOwYMa70I9xH8r",
            "thumbnail": "https://drive.google.com/thumbnail?id=1-Ka1F_Db85qO9AAKqcQOwYMa70I9xH8r&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2014_PRO_Producto_Procesos_docx",
      "driveId": "13NH6vjKug0Qc8JGzMAvP9csWtx4_rWjo",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "TRANSCRIPT_2014_PRO_Producto_Procesos.docx",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/TRANSCRIPT_2014_PRO_Producto_Procesos.docx",
      "media": {
            "driveFileId": "13NH6vjKug0Qc8JGzMAvP9csWtx4_rWjo",
            "pdf": "13NH6vjKug0Qc8JGzMAvP9csWtx4_rWjo",
            "thumbnail": "https://drive.google.com/thumbnail?id=13NH6vjKug0Qc8JGzMAvP9csWtx4_rWjo&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2014_PRO_Producto_Recetas_docx",
      "driveId": "12NrbAjVKgYkpIZQ9EJnccSfzHJRuXVzT",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "TRANSCRIPT_2014_PRO_Producto_Recetas.docx",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/TRANSCRIPT_2014_PRO_Producto_Recetas.docx",
      "media": {
            "driveFileId": "12NrbAjVKgYkpIZQ9EJnccSfzHJRuXVzT",
            "pdf": "12NrbAjVKgYkpIZQ9EJnccSfzHJRuXVzT",
            "thumbnail": "https://drive.google.com/thumbnail?id=12NrbAjVKgYkpIZQ9EJnccSfzHJRuXVzT&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2014_PRO_Producto_Recetas_pdf",
      "driveId": "1hod0-QUX7kWnyp_kwPZ90Nl3qwM_DsnY",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "2014_PRO_Producto_Recetas.pdf",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/2014_PRO_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1hod0-QUX7kWnyp_kwPZ90Nl3qwM_DsnY",
            "pdf": "1hod0-QUX7kWnyp_kwPZ90Nl3qwM_DsnY",
            "thumbnail": "https://drive.google.com/thumbnail?id=1hod0-QUX7kWnyp_kwPZ90Nl3qwM_DsnY&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2014_PRO_formatopruebamen__documentaci_n_pdf",
      "driveId": "16rci871lIzQMEiZ1jywWCC3h5O2gDuFo",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2014",
      "title": "2014_PRO_formatopruebamenú_documentación.pdf",
      "year": 2014,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2014",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2014/2014_PRO_formatopruebamenú_documentación.pdf",
      "media": {
            "driveFileId": "16rci871lIzQMEiZ1jywWCC3h5O2gDuFo",
            "pdf": "16rci871lIzQMEiZ1jywWCC3h5O2gDuFo",
            "thumbnail": "https://drive.google.com/thumbnail?id=16rci871lIzQMEiZ1jywWCC3h5O2gDuFo&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2004_PRO_Producto_plantas_silvestre_pdf",
      "driveId": "1wV4tp-VD_-syjL6huA386NlCxdBs7-dI",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2004",
      "title": "2004_PRO_Producto_plantas_silvestre.pdf",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2004",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2004/2004_PRO_Producto_plantas_silvestre.pdf",
      "media": {
            "driveFileId": "1wV4tp-VD_-syjL6huA386NlCxdBs7-dI",
            "pdf": "1wV4tp-VD_-syjL6huA386NlCxdBs7-dI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1wV4tp-VD_-syjL6huA386NlCxdBs7-dI&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2004_PRO_Producto_plantas_silvestre_docx",
      "driveId": "1Pc23x4Z4sJJ_NIm80Xfle-2CO1BoDf03",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2004",
      "title": "TRANSCRIPT_2004_PRO_Producto_plantas_silvestre.docx",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2004",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2004/TRANSCRIPT_2004_PRO_Producto_plantas_silvestre.docx",
      "media": {
            "driveFileId": "1Pc23x4Z4sJJ_NIm80Xfle-2CO1BoDf03",
            "pdf": "1Pc23x4Z4sJJ_NIm80Xfle-2CO1BoDf03",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Pc23x4Z4sJJ_NIm80Xfle-2CO1BoDf03&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2004_PRO_Producto_Receta_docx",
      "driveId": "1sMPFBqCQ8JqEjoQ7sam8_-Oeid_AqLus",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2004",
      "title": "TRANSCRIPT_2004_PRO_Producto_Receta.docx",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2004",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2004/TRANSCRIPT_2004_PRO_Producto_Receta.docx",
      "media": {
            "driveFileId": "1sMPFBqCQ8JqEjoQ7sam8_-Oeid_AqLus",
            "pdf": "1sMPFBqCQ8JqEjoQ7sam8_-Oeid_AqLus",
            "thumbnail": "https://drive.google.com/thumbnail?id=1sMPFBqCQ8JqEjoQ7sam8_-Oeid_AqLus&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2004_PRO_Ficha_de_elaboraci_n_pdf",
      "driveId": "1LcI1m0rHR7Sj4NDsbd2BAegdyX7_IRku",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2004",
      "title": "2004_PRO_Ficha_de_elaboración.pdf",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2004",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2004/2004_PRO_Ficha_de_elaboración.pdf",
      "media": {
            "driveFileId": "1LcI1m0rHR7Sj4NDsbd2BAegdyX7_IRku",
            "pdf": "1LcI1m0rHR7Sj4NDsbd2BAegdyX7_IRku",
            "thumbnail": "https://drive.google.com/thumbnail?id=1LcI1m0rHR7Sj4NDsbd2BAegdyX7_IRku&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TREANSCRIPT_2004_PRO_Ficha_de_elaboraci_n_docx",
      "driveId": "1Ahs31MEDOh8b4mYlJwCAz-va3zvE7y7e",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2004",
      "title": "TREANSCRIPT_2004_PRO_Ficha_de_elaboración.docx",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2004",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2004/TREANSCRIPT_2004_PRO_Ficha_de_elaboración.docx",
      "media": {
            "driveFileId": "1Ahs31MEDOh8b4mYlJwCAz-va3zvE7y7e",
            "pdf": "1Ahs31MEDOh8b4mYlJwCAz-va3zvE7y7e",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Ahs31MEDOh8b4mYlJwCAz-va3zvE7y7e&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2004_PRO_Producto_Receta_pdf",
      "driveId": "1z6JRPA6M7OQvU0c6B3RNpCdRPVwKJYvh",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2004",
      "title": "2004_PRO_Producto_Receta.pdf",
      "year": 2004,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2004",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2004/2004_PRO_Producto_Receta.pdf",
      "media": {
            "driveFileId": "1z6JRPA6M7OQvU0c6B3RNpCdRPVwKJYvh",
            "pdf": "1z6JRPA6M7OQvU0c6B3RNpCdRPVwKJYvh",
            "thumbnail": "https://drive.google.com/thumbnail?id=1z6JRPA6M7OQvU0c6B3RNpCdRPVwKJYvh&sz=w1000"
      }
},
    {
      "id": "local-08-deep-__Hoja_1_docx",
      "driveId": "local-36589",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "~$Hoja 1.docx",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/~$Hoja 1.docx",
      "media": {
            "driveFileId": "local-36589",
            "pdf": "local-36589",
            "thumbnail": "https://drive.google.com/thumbnail?id=local-36589&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2007_PRO_Recetario_Cuaderno_pdf_pdf",
      "driveId": "1BQaRXYnYriMWJt6M15yUBfOrOj1OcG9H",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "2007_PRO_Recetario_Cuaderno_pdf.pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/2007_PRO_Recetario_Cuaderno_pdf.pdf",
      "media": {
            "driveFileId": "1BQaRXYnYriMWJt6M15yUBfOrOj1OcG9H",
            "pdf": "1BQaRXYnYriMWJt6M15yUBfOrOj1OcG9H",
            "thumbnail": "https://drive.google.com/thumbnail?id=1BQaRXYnYriMWJt6M15yUBfOrOj1OcG9H&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2007_PRO_HOSPES_MADRID_Producto_pdf",
      "driveId": "1ecNVbXPPHYOWjJu-znGB9kU0hTn1HdqW",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "2007_PRO_HOSPES_MADRID_Producto.pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/2007_PRO_HOSPES_MADRID_Producto.pdf",
      "media": {
            "driveFileId": "1ecNVbXPPHYOWjJu-znGB9kU0hTn1HdqW",
            "pdf": "1ecNVbXPPHYOWjJu-znGB9kU0hTn1HdqW",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ecNVbXPPHYOWjJu-znGB9kU0hTn1HdqW&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2007_PRO_Recetario_Cuaderno_pdf_docx",
      "driveId": "11WqRURbSb3hco5tWkdaxPxpYYWHthZwT",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "TRANSCRIPT_2007_PRO_Recetario_Cuaderno_pdf.docx",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/TRANSCRIPT_2007_PRO_Recetario_Cuaderno_pdf.docx",
      "media": {
            "driveFileId": "11WqRURbSb3hco5tWkdaxPxpYYWHthZwT",
            "pdf": "11WqRURbSb3hco5tWkdaxPxpYYWHthZwT",
            "thumbnail": "https://drive.google.com/thumbnail?id=11WqRURbSb3hco5tWkdaxPxpYYWHthZwT&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2007_PRO_SENZONE_Producto_RECETORIO_pdf",
      "driveId": "1G5g9eTrioKz7Xh6nqnXe7d4CToqp3RWW",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "2007_PRO_SENZONE_Producto_RECETORIO.pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/2007_PRO_SENZONE_Producto_RECETORIO.pdf",
      "media": {
            "driveFileId": "1G5g9eTrioKz7Xh6nqnXe7d4CToqp3RWW",
            "pdf": "1G5g9eTrioKz7Xh6nqnXe7d4CToqp3RWW",
            "thumbnail": "https://drive.google.com/thumbnail?id=1G5g9eTrioKz7Xh6nqnXe7d4CToqp3RWW&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2007_PRO_Recetario_tapas_tapaplato_pdf_pdf",
      "driveId": "1gZcdSQd5-PBdGaf_FV_JNWYbhMtsFAfT",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "2007_PRO_Recetario_tapas_tapaplato_pdf.pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/2007_PRO_Recetario_tapas_tapaplato_pdf.pdf",
      "media": {
            "driveFileId": "1gZcdSQd5-PBdGaf_FV_JNWYbhMtsFAfT",
            "pdf": "1gZcdSQd5-PBdGaf_FV_JNWYbhMtsFAfT",
            "thumbnail": "https://drive.google.com/thumbnail?id=1gZcdSQd5-PBdGaf_FV_JNWYbhMtsFAfT&sz=w1000"
      }
},
    {
      "id": "local-08-deep-_WRL0003_tmp",
      "driveId": "1EOtCm3Ql1zu81o2jfSfnyr42m79Crfo1",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "~WRL0003.tmp",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/~WRL0003.tmp",
      "media": {
            "driveFileId": "1EOtCm3Ql1zu81o2jfSfnyr42m79Crfo1",
            "pdf": "1EOtCm3Ql1zu81o2jfSfnyr42m79Crfo1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EOtCm3Ql1zu81o2jfSfnyr42m79Crfo1&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2007_PRO_Recetario_varios_pdf_pdf",
      "driveId": "1srOffCgHFp4Ez3FEYsrGg4Gfh8CyJzJa",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "2007_PRO_Recetario_varios_pdf.pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/2007_PRO_Recetario_varios_pdf.pdf",
      "media": {
            "driveFileId": "1srOffCgHFp4Ez3FEYsrGg4Gfh8CyJzJa",
            "pdf": "1srOffCgHFp4Ez3FEYsrGg4Gfh8CyJzJa",
            "thumbnail": "https://drive.google.com/thumbnail?id=1srOffCgHFp4Ez3FEYsrGg4Gfh8CyJzJa&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2007_CTF_Certificado_Halal_Carsierra_pdf_pdf",
      "driveId": "1eejkwMwb0Qjvrprqv80Pfg7VNL3naTdY",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "2007_CTF_Certificado_Halal_Carsierra_pdf.pdf",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/2007_CTF_Certificado_Halal_Carsierra_pdf.pdf",
      "media": {
            "driveFileId": "1eejkwMwb0Qjvrprqv80Pfg7VNL3naTdY",
            "pdf": "1eejkwMwb0Qjvrprqv80Pfg7VNL3naTdY",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eejkwMwb0Qjvrprqv80Pfg7VNL3naTdY&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2007_PRO_Recetario_tapas_tapaplato_pdf_docx",
      "driveId": "1J1cdY6IVaBZ0-_oOU9wxQfB8hDAqNcs8",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "TRANSCRIPT_2007_PRO_Recetario_tapas_tapaplato_pdf.docx",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/TRANSCRIPT_2007_PRO_Recetario_tapas_tapaplato_pdf.docx",
      "media": {
            "driveFileId": "1J1cdY6IVaBZ0-_oOU9wxQfB8hDAqNcs8",
            "pdf": "1J1cdY6IVaBZ0-_oOU9wxQfB8hDAqNcs8",
            "thumbnail": "https://drive.google.com/thumbnail?id=1J1cdY6IVaBZ0-_oOU9wxQfB8hDAqNcs8&sz=w1000"
      }
},
    {
      "id": "local-08-deep-_WRL0003_docx",
      "driveId": "1Usex5cJDjsftviJ2jMTqiDLT_--ei5PQ",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2007",
      "title": "~WRL0003.docx",
      "year": 2007,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2007",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2007/~WRL0003.docx",
      "media": {
            "driveFileId": "1Usex5cJDjsftviJ2jMTqiDLT_--ei5PQ",
            "pdf": "1Usex5cJDjsftviJ2jMTqiDLT_--ei5PQ",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Usex5cJDjsftviJ2jMTqiDLT_--ei5PQ&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2019_PRO_Noor_Producto_Recetas_pdf",
      "driveId": "1MaRYkHwtdlHjV-TevQBD3E5IOtoEruZr",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2019",
      "title": "2019_PRO_Noor_Producto_Recetas.pdf",
      "year": 2019,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2019",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2019/2019_PRO_Noor_Producto_Recetas.pdf",
      "media": {
            "driveFileId": "1MaRYkHwtdlHjV-TevQBD3E5IOtoEruZr",
            "pdf": "1MaRYkHwtdlHjV-TevQBD3E5IOtoEruZr",
            "thumbnail": "https://drive.google.com/thumbnail?id=1MaRYkHwtdlHjV-TevQBD3E5IOtoEruZr&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2009_PRO_Recetario_Men__productos_pdf",
      "driveId": "1anSH3SUT8o1gckjl70ELPkS8hy9EJenI",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2009",
      "title": "2009_PRO_Recetario_Menú-productos.pdf",
      "year": 2009,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2009",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2009/2009_PRO_Recetario_Menú-productos.pdf",
      "media": {
            "driveFileId": "1anSH3SUT8o1gckjl70ELPkS8hy9EJenI",
            "pdf": "1anSH3SUT8o1gckjl70ELPkS8hy9EJenI",
            "thumbnail": "https://drive.google.com/thumbnail?id=1anSH3SUT8o1gckjl70ELPkS8hy9EJenI&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_2005_PRO_Producto_Lista_procesos_provedor_docx",
      "driveId": "1EIdXcBVgFaIk53au8LFrV35u1xL24_-O",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "TRANSCRIPT_2005_PRO_Producto_Lista_procesos_provedor.docx",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/TRANSCRIPT_2005_PRO_Producto_Lista_procesos_provedor.docx",
      "media": {
            "driveFileId": "1EIdXcBVgFaIk53au8LFrV35u1xL24_-O",
            "pdf": "1EIdXcBVgFaIk53au8LFrV35u1xL24_-O",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EIdXcBVgFaIk53au8LFrV35u1xL24_-O&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Contextualizaci_n_Tipos_Algas_pdf__1__pdf",
      "driveId": "1tfsHjLmuSRK1Sn5enMf0hX8sgFkNN_Ko",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Contextualización_Tipos_Algas_pdf (1).pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Contextualización_Tipos_Algas_pdf (1).pdf",
      "media": {
            "driveFileId": "1tfsHjLmuSRK1Sn5enMf0hX8sgFkNN_Ko",
            "pdf": "1tfsHjLmuSRK1Sn5enMf0hX8sgFkNN_Ko",
            "thumbnail": "https://drive.google.com/thumbnail?id=1tfsHjLmuSRK1Sn5enMf0hX8sgFkNN_Ko&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Menu_Recetario__pdf_pdf",
      "driveId": "1eFumFK4nCF26SK5Xf2kqgvXSCM6MqmFY",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Menu_Recetario__pdf.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Menu_Recetario__pdf.pdf",
      "media": {
            "driveFileId": "1eFumFK4nCF26SK5Xf2kqgvXSCM6MqmFY",
            "pdf": "1eFumFK4nCF26SK5Xf2kqgvXSCM6MqmFY",
            "thumbnail": "https://drive.google.com/thumbnail?id=1eFumFK4nCF26SK5Xf2kqgvXSCM6MqmFY&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Recetario_Tipos_Algas_pdf__4__pdf",
      "driveId": "1Lu1_hv7SXYNDgOBBfMTlOyo4iHc0BzRg",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Recetario_Tipos_Algas_pdf (4).pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Recetario_Tipos_Algas_pdf (4).pdf",
      "media": {
            "driveFileId": "1Lu1_hv7SXYNDgOBBfMTlOyo4iHc0BzRg",
            "pdf": "1Lu1_hv7SXYNDgOBBfMTlOyo4iHc0BzRg",
            "thumbnail": "https://drive.google.com/thumbnail?id=1Lu1_hv7SXYNDgOBBfMTlOyo4iHc0BzRg&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Producto_Recetas_Procedimientos_pdf",
      "driveId": "1ujDqNDsa4oNi8H6kamq4pr_eMD_GmpM1",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Producto_Recetas_Procedimientos.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Producto_Recetas_Procedimientos.pdf",
      "media": {
            "driveFileId": "1ujDqNDsa4oNi8H6kamq4pr_eMD_GmpM1",
            "pdf": "1ujDqNDsa4oNi8H6kamq4pr_eMD_GmpM1",
            "thumbnail": "https://drive.google.com/thumbnail?id=1ujDqNDsa4oNi8H6kamq4pr_eMD_GmpM1&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Recetario_Tipos_Algas_pdf__2__pdf",
      "driveId": "1z4mAuoOTUAUy6ISAsZvcDC3Ux9l6wUNc",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Recetario_Tipos_Algas_pdf (2).pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Recetario_Tipos_Algas_pdf (2).pdf",
      "media": {
            "driveFileId": "1z4mAuoOTUAUy6ISAsZvcDC3Ux9l6wUNc",
            "pdf": "1z4mAuoOTUAUy6ISAsZvcDC3Ux9l6wUNc",
            "thumbnail": "https://drive.google.com/thumbnail?id=1z4mAuoOTUAUy6ISAsZvcDC3Ux9l6wUNc&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_COR_Correo_Andoni_pdf",
      "driveId": "1HuJdhKSH3w_btM8O4FWfo8jhyR31f49J",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_COR_Correo_Andoni.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_COR_Correo_Andoni.pdf",
      "media": {
            "driveFileId": "1HuJdhKSH3w_btM8O4FWfo8jhyR31f49J",
            "pdf": "1HuJdhKSH3w_btM8O4FWfo8jhyR31f49J",
            "thumbnail": "https://drive.google.com/thumbnail?id=1HuJdhKSH3w_btM8O4FWfo8jhyR31f49J&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Recetario_Tipos_Algas_pdf__3__pdf",
      "driveId": "1pll1Sy63d4q7k3Y0cOuwekQEctgeKJ-z",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Recetario_Tipos_Algas_pdf (3).pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Recetario_Tipos_Algas_pdf (3).pdf",
      "media": {
            "driveFileId": "1pll1Sy63d4q7k3Y0cOuwekQEctgeKJ-z",
            "pdf": "1pll1Sy63d4q7k3Y0cOuwekQEctgeKJ-z",
            "thumbnail": "https://drive.google.com/thumbnail?id=1pll1Sy63d4q7k3Y0cOuwekQEctgeKJ-z&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Recetario_Tipos_Algas_pdf_pdf",
      "driveId": "1EoZ6FVzVpa8tpNxXqZrlhfr6GKSA168t",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Recetario_Tipos_Algas_pdf.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Recetario_Tipos_Algas_pdf.pdf",
      "media": {
            "driveFileId": "1EoZ6FVzVpa8tpNxXqZrlhfr6GKSA168t",
            "pdf": "1EoZ6FVzVpa8tpNxXqZrlhfr6GKSA168t",
            "thumbnail": "https://drive.google.com/thumbnail?id=1EoZ6FVzVpa8tpNxXqZrlhfr6GKSA168t&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Recetas_Tipos_Algas_pdf_pdf",
      "driveId": "1UnsN3oeqihGnw02pz1chHLI397v0ZHpq",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Recetas_Tipos_Algas_pdf.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Recetas_Tipos_Algas_pdf.pdf",
      "media": {
            "driveFileId": "1UnsN3oeqihGnw02pz1chHLI397v0ZHpq",
            "pdf": "1UnsN3oeqihGnw02pz1chHLI397v0ZHpq",
            "thumbnail": "https://drive.google.com/thumbnail?id=1UnsN3oeqihGnw02pz1chHLI397v0ZHpq&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2005_PRO_Producto_Lista_procesos_provedor_pdf",
      "driveId": "1A7oVVLoBmmF0Y_Fkw5_N9tZEzEU04wJB",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2005",
      "title": "2005_PRO_Producto_Lista_procesos_provedor.pdf",
      "year": 2005,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2005",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2005/2005_PRO_Producto_Lista_procesos_provedor.pdf",
      "media": {
            "driveFileId": "1A7oVVLoBmmF0Y_Fkw5_N9tZEzEU04wJB",
            "pdf": "1A7oVVLoBmmF0Y_Fkw5_N9tZEzEU04wJB",
            "thumbnail": "https://drive.google.com/thumbnail?id=1A7oVVLoBmmF0Y_Fkw5_N9tZEzEU04wJB&sz=w1000"
      }
},
    {
      "id": "local-08-deep-__cetario_Bolleria_Hojaldrada_docx",
      "driveId": "local-36480",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2000",
      "title": "~$cetario_Bolleria_Hojaldrada.docx",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2000",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2000/~$cetario_Bolleria_Hojaldrada.docx",
      "media": {
            "driveFileId": "local-36480",
            "pdf": "local-36480",
            "thumbnail": "https://drive.google.com/thumbnail?id=local-36480&sz=w1000"
      }
},
    {
      "id": "local-08-deep-2000_PRO_Recetario_Bolleria_Hojaldrada_pdf",
      "driveId": "1zZSga7zs4r3IiEyW1QOF3UMPK8DrLk6N",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2000",
      "title": "2000_PRO_Recetario_Bolleria-Hojaldrada.pdf",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2000",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2000/2000_PRO_Recetario_Bolleria-Hojaldrada.pdf",
      "media": {
            "driveFileId": "1zZSga7zs4r3IiEyW1QOF3UMPK8DrLk6N",
            "pdf": "1zZSga7zs4r3IiEyW1QOF3UMPK8DrLk6N",
            "thumbnail": "https://drive.google.com/thumbnail?id=1zZSga7zs4r3IiEyW1QOF3UMPK8DrLk6N&sz=w1000"
      }
},
    {
      "id": "local-08-deep-Recetario_Bolleria_Hojaldrada_docx",
      "driveId": "1GjlQ4shmIryPOJI9SnVMJNto0Uh2awLL",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2000",
      "title": "Recetario_Bolleria_Hojaldrada.docx",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2000",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2000/Recetario_Bolleria_Hojaldrada.docx",
      "media": {
            "driveFileId": "1GjlQ4shmIryPOJI9SnVMJNto0Uh2awLL",
            "pdf": "1GjlQ4shmIryPOJI9SnVMJNto0Uh2awLL",
            "thumbnail": "https://drive.google.com/thumbnail?id=1GjlQ4shmIryPOJI9SnVMJNto0Uh2awLL&sz=w1000"
      }
},
    {
      "id": "local-08-deep-TRANSCRIPT_01_2000_PRO_Recetario_Bolleria_Hojaldrada_docx",
      "driveId": "1juBQdfF9IpxsY6p1WUmuDYWFoseSgXfU",
      "category": "08_Producto_Recetarios",
      "subcategory": "Producto organizado Cronológicamente - 2000",
      "title": "TRANSCRIPT_01_2000_PRO_Recetario_Bolleria-Hojaldrada.docx",
      "year": 2000,
      "type": "book",
      "eraId": "S21",
      "language": "es",
      "source": "Recetarios Noor Deep Scan",
      "tags": [
            "08_Producto_Recetarios",
            "Producto organizado Cronológicamente - 2000",
            "Ingesta Masiva v2.3"
      ],
      "regions": [
            "QURTUBA"
      ],
      "coordinates": [
            37.8847,
            -4.7791
      ],
      "localPath": "G:/Mi unidad/Noor_ 2026_archivos/ARCHIVO_DIGITAL_NOOR/08_Producto_Recetarios/Producto organizado Cronológicamente/2000/TRANSCRIPT_01_2000_PRO_Recetario_Bolleria-Hojaldrada.docx",
      "media": {
            "driveFileId": "1juBQdfF9IpxsY6p1WUmuDYWFoseSgXfU",
            "pdf": "1juBQdfF9IpxsY6p1WUmuDYWFoseSgXfU",
            "thumbnail": "https://drive.google.com/thumbnail?id=1juBQdfF9IpxsY6p1WUmuDYWFoseSgXfU&sz=w1000"
      }
}
  ]
};
