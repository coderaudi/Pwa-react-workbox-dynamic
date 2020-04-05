importScripts("/precache-manifest.01051c0ee77de203018cf9df816fbcb7.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));


// self.addEventListener('fetch', function(event) {
//     console.log("hey api req",event.request.url);

//     event.respondWith(
//       caches.match(event.request).then(function(response) {
//           console.log("network response", response);
//           console.log('offline request' , event.request)
//         return response || fetch(event.request);
//       })
//     );
//    });

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('mysite-dynamic-data').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());// store in cache
          return response;
        });
      });
    })
  );
});

//background


// check the notification action s


self.addEventListener('notificationclick', e => {
  let notification = e.notification;
  let action = e.action;

  if (action === "confirn") {
    console.log("you click on the okay forhelp page visit");

    // open user browse and run or visit the page 

  } else {
    console.log("user not allowed to visit help page ");
    notification.close(); // to close the notification 
  }

})

self.addEventListener('notificationclose', e => {
  let notification = e.notification;
  let action = e.action;

  console.log("notification is closed", notification);
})





// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst());

