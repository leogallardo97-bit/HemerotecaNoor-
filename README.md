# Hemeroteca Digital "Archivo Noor" (2026)

Ecosistema documental alojado y servido de forma nativa a través de Google Drive, optimizado para alto rendimiento SPA y búsqueda interactiva basada en IndexDB.

## 📌 Estado Actual del Proyecto
- **Documentos Activos:** 24 documentos de carácter riguroso completamente operativos.
- **Fuentes:** Ingesta MASIVA implementada directamente desde carpeta en la nube.
- **Estructura Data:** Metadata Master (`metadatos.json`) almacenado de forma segura y automatizada para mantener una fuente absoluta centralizada y persistente.

## 🚀 Funcionalidades Principales

### 1. Motor Deep-Search Predictivo
El sistema detecta *fuzzy* combinando la información total del repositorio (`Title`, `Description`, `Regiones`, `Tags`) logrando un filtrado instantáneo tipo "Paco" o "Jayal" que actualizará la pantalla completa (incluso sobre mapas) antes de presionar Enviar. 

### 2. Mapa Histórico (Geo-Targeting Cross-Linked)
- Reúne localizaciones semánticas conectadas con la realidad. (Ej: "Córdoba" en el texto activa el foco de latitud `Qurtuba`).
- Todos los documentos muestran marcadores sobre sus epicentros geográficos. Haz un clic en la diana en la pantalla y selecciona tu ejemplar para abrir automáticamente el Visualizador nativo de manuscritos a pantalla completa.

### 3. Timeline Histórica (Slider Bidireccional) 
- Extendido de forma interactiva a lo largo de toda la dimensión temporal. Utiliza filtros visuales para ubicar tu área deseada o haz *drag and drop* en las barras horizontales para observar cómo reacciona en tiempo real la hemeroteca inferior.

### 4. Flujo Bi-direccional
- ¿Terminas de leer un manuscrito? Al presionar `Esc` para cerrarlo, la inteligencia ubicará e iluminará suavemente aquel cuaderno exacto del grid dentro de la masa para que jamás pierdas la coherencia visual durante tus inmersiones largas de investigación.

## 🛠️ Instalación para el Equipo

1. Clona este repositorio a tu entorno.
2. Abre `index.html` (Ideal mediante *Live Server*).
3. Renombra `js/config.example.js` a `js/config.js` y asigna tus tokens de API y Carpeta de `Goole Drive` correspondientes.

*Desplegado en [GitHub Pages]*
