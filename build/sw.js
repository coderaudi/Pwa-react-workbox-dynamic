importScripts("/precache-manifest.aca6906544ba4907a8dd43810e9791d5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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
self.addEventListener('fetch', function (event) {


  if (event.request.method === "POST") {
    console.log("post request");

    event.respondWith(
      fetch(event.request)
        .then(res => {
          return res;
        })
        .catch(err => {
          console.log("err to process post due to network/ stored in indexdb -- for feature try");
        }));


  } else {

    // recording all the req in cache
    event.respondWith(
      fetch(event.request)
        .then(function (res) {
          return caches.open(CACHE_DYNAMIC_NAME)
            .then(function (cache) {
              cache.put(event.request.url, res.clone());
              return res;   // update the cache and return the network res;
            })
        })
        .catch(function (err) {
          console.log("offline req")
          return caches.match(event.request)
            .then(res => {
              console.log("i got the res in cache", res)
              if (res) {
                return res;
              } else {
                console.log("there is no resp for this req in cache!")
                return JSON.stringify({ message: "you are offline" })
              }

            })
        })
    );

  }
});
