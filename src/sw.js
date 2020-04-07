var CACHE_STATIC_NAME = 'static-v24';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';
var STATIC_FILES = [
  '/',
  '/index.html',
  '/offline.html'
];


self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
      caches.open(CACHE_STATIC_NAME)
        .then(function (cache) {
          console.log('[Service Worker] Precaching App Shell');
          cache.addAll(STATIC_FILES);
        })
    )
  });


  self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(
      caches.keys()
        .then(function (keyList) {
          return Promise.all(keyList.map(function (key) {
            if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
              console.log('[Service Worker] Removing old cache.', key);
              return caches.delete(key);
            }
          }));
        })
    );
    return self.clients.claim();
  });



  // process all the request 
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(res) {
        return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;   // update the cache and return the network res;
                })
      })
      .catch(function(err) {
          console.log("offline req")
        return caches.match(event.request);
      })
  );
});