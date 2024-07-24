self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then( (cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/js/app.js',
          '/imagens/icon-192x192.png',
          '/imagens/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });