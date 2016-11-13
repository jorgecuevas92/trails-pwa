var CACHE_NAME = 'trails-pwa-v0.1'
var cacheFiles = [
  '/'
]

self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed");

    e.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log("[ServiceWorker] Caching cacheFiles");
          return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log("[ServiceWorker] Activated")

    e.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(cacheNames.map(function(thisCacheName){

          if (thisCacheName !== CACHE_NAME) {

            console.log("[ServiceWorker] Removing Cached Files from", thisCacheName);
            return caches.delete(thisCacheName);
          }

        }))
      })
    )
})

self.addEventListener('fetch', function(e){
    console.log("[ServiceWorker] Fetching", e.request.url);

    e.respondWith(
      caches.match(e.request).then(function(response){
        if ( response ) {
          console.log("[ServiceWorker] Found in cache", e.request.url);
          return response;
        }

        return fetch(e.request);
      })
    )
})
