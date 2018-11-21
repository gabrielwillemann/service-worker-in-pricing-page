var cacheName = 'service-worker-in-pricing-page-v1';
var cacheUrls = ['/', 'index.html', 'css/pricing.css', 'lib/bootstrap.min.css', 'lib/axios.min.js', 'images/favicon.ico', 'images/bootstrap-solid.svg', 'images/offline.png', 'manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(cacheUrls))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((allCaches) => {
      allCaches.map((cache) => {
        if (cache != cacheName) {
          return caches.delete(cache);
        }
      })
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
