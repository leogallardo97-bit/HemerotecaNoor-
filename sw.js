/**
 * NOOR ARCHIVE — Dummy Service Worker
 * Este archivo existe para evitar errores 404 en la consola.
 * El sistema de limpieza en app.js se encarga de desregistrarlo.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.registration.unregister()
    .then(() => self.clients.matchAll())
    .then(clients => {
      clients.forEach(client => client.navigate(client.url));
    });
});
