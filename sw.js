/**
 * ══════════════════════════════════════════════════════════
 * ARCHIVO NOOR — Service Worker (Caché Offline)
 * ══════════════════════════════════════════════════════════
 *
 * ESTRATEGIA:
 *   - Assets estáticos (CSS, JS, HTML) → Cache First
 *   - Imágenes de Drive  → Stale While Revalidate
 *   - Drive API calls    → Network First con fallback a caché
 *
 * Se instala automáticamente desde app.js.
 * Para forzar actualización del caché: incrementar CACHE_VERSION.
 */

const CACHE_VERSION  = 'noor-v1.0';
const CACHE_STATIC   = `${CACHE_VERSION}-static`;
const CACHE_IMAGES   = `${CACHE_VERSION}-images`;
const CACHE_API      = `${CACHE_VERSION}-api`;

// Archivos a precargar en la instalación (App Shell)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/viewer.css',
  '/css/explore.css',
  '/css/admin.css',
  '/js/core/state.js',
  '/js/core/router.js',
  '/js/core/db.js',
  '/js/data/schema.js',
  '/js/data/mock-data.js',
  '/js/data/geo-data.js',
  '/js/data/drive-connector.js',
  '/js/components/viewer.js',
  '/js/components/timeline.js',
  '/js/components/map.js',
  '/js/components/explore.js',
  '/js/components/research-panel.js',
  '/js/components/admin.js',
  '/js/app.js',
];

// ─────────────────────────────────────────────────────────
// INSTALL: Precargar el App Shell
// ─────────────────────────────────────────────────────────

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => {
      console.log('[SW] Precachando App Shell...');
      return cache.addAll(PRECACHE_URLS).catch(err => {
        // No fallar si algún recurso no existe aún
        console.warn('[SW] Algunos recursos no pudieron precacharse:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ─────────────────────────────────────────────────────────
// ACTIVATE: Limpiar cachés antiguas
// ─────────────────────────────────────────────────────────

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('noor-') && !key.startsWith(CACHE_VERSION))
          .map(key => {
            console.log('[SW] Eliminando caché antigua:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ─────────────────────────────────────────────────────────
// FETCH: Estrategias por tipo de recurso
// ─────────────────────────────────────────────────────────

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // No interceptar peticiones que no sean GET
  if (request.method !== 'GET') return;

  // ── Imágenes de Google Drive → Stale While Revalidate ──
  if (url.hostname === 'drive.google.com' || url.hostname.includes('googleusercontent')) {
    event.respondWith(_staleWhileRevalidate(request, CACHE_IMAGES));
    return;
  }

  // ── Google Drive API (JSON) → Network First ──
  if (url.hostname === 'www.googleapis.com') {
    event.respondWith(_networkFirst(request, CACHE_API));
    return;
  }

  // ── CDNs (Leaflet, OSD, Lucide) → Cache First ──
  if (url.hostname.includes('cdn.jsdelivr.net') ||
      url.hostname.includes('unpkg.com') ||
      url.hostname.includes('arcgisonline.com') ||
      url.hostname.includes('stadiamaps.com')) {
    event.respondWith(_cacheFirst(request, CACHE_STATIC));
    return;
  }

  // ── Assets locales del portal → Cache First ──
  if (url.origin === self.location.origin) {
    event.respondWith(_cacheFirst(request, CACHE_STATIC));
    return;
  }
});

// ─────────────────────────────────────────────────────────
// ESTRATEGIAS DE CACHÉ
// ─────────────────────────────────────────────────────────

/** Cache First: responde desde caché; si no hay, va a red y cachea. */
async function _cacheFirst(request, cacheName) {
  const cache   = await caches.open(cacheName);
  const cached  = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('Recurso no disponible sin conexión.', { status: 503 });
  }
}

/** Network First: va a red primero; si falla, responde desde caché. */
async function _networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response('Sin conexión.', { status: 503 });
  }
}

/** Stale While Revalidate: responde desde caché mientras actualiza en background. */
async function _staleWhileRevalidate(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkFetch = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || networkFetch;
}
