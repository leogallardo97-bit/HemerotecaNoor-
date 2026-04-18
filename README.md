# Archivo Noor — Portal de Investigación Histórica

> Hemeroteca digital interactiva de Al-Ándalus (711–1900)  
> Construida por Leonardo Gallardo · 2026

---

## Descripción

El **Archivo Noor** es un portal de archivo histórico digital que permite explorar documentos de Al-Ándalus a través de tres modos de navegación:

| Modo | Descripción |
|---|---|
| 🔍 Búsqueda de texto | Filtrado facetado por época, tema, región e idioma |
| 📅 Línea de Tiempo | Slider dual 711–1900 con marcadores de eventos históricos |
| 🗺️ Mapa Histórico | Leaflet.js con tiles sepia y documentos geolocalizados |

## Arquitectura

```
archivo-noor/
├── index.html              ← Punto de entrada
├── css/
│   ├── main.css            ← Sistema de diseño global
│   ├── viewer.css          ← Visor de manuscritos (OpenSeadragon)
│   ├── explore.css         ← Timeline + Mapa
│   └── admin.css           ← Admin Dashboard
├── js/
│   ├── core/
│   │   ├── state.js        ← Motor reactivo (patrón Observer)
│   │   ├── router.js       ← Hash router con URLs compartibles
│   │   ├── db.js           ← IndexedDB (notas, colecciones, admin)
│   │   └── drive-connector.js ← Conector Google Drive API
│   ├── data/
│   │   ├── schema.js       ← Tipos y constantes históricas
│   │   ├── mock-data.js    ← Datos de demostración
│   │   └── geo-data.js     ← Coordenadas de Al-Ándalus
│   └── components/         ← Componentes de la interfaz
└── sw.js                   ← Service Worker (caché offline)
```

## Despliegue

Ver `DEPLOY_GUIDE.md` para instrucciones completas de GitHub Pages + Drive API.

## Admin Dashboard

- Acceso: Ctrl+Shift+A desde cualquier pantalla
- Protegido por contraseña (se configura en el primer acceso)

## Licencia

Uso académico e investigación histórica. © Leonardo Gallardo, 2026.
