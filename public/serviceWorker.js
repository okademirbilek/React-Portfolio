const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/src/assets/react.svg",
  "/src/assets/vite.svg",
  "/src/assets/sass.png",
  "/src/assets/js.png",
  "/src/assets/html.png",
  "/src/assets/css.png",
  "/src/assets/boot.png",
  "/src/assets/three.png",
  "/src/assets/api.png",
  "/src/assets/firebase.png",
  "/src/assets/blender.png",
  "/src/assets/myimage.jpeg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticDevCoffee)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// self.addEventListener("fetch", (fetchEvent) => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then((res) => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Clone the cached response and set the Content-Type header to "image"
        const headers = new Headers(cachedResponse.headers);
        headers.set("Content-Type", "image");

        const imageResponse = new Response(cachedResponse.body, {
          status: cachedResponse.status,
          statusText: cachedResponse.statusText,
          headers,
        });

        return imageResponse;
      } else {
        return fetch(fetchEvent.request);
      }
    })
  );
});

//fetching data in react component

// Wrap the function you want to export in a self-invoking function
(function () {
  async function getCachedImage(imageUrl) {
    const cache = await caches.open(staticDevCoffee); // Use the correct cache name
    const cachedResponse = await cache.match(imageUrl);

    if (cachedResponse) {
      // console.log("halooo");
      return cachedResponse;
    } else {
      // console.log("nooo");
      // Handle the case when the image is not in the cache (e.g., show a placeholder)
      return null;
    }
  }

  // Export the function if needed
  if (typeof self !== "undefined") {
    self.getCachedImage = getCachedImage;
  }
})();

// async function getCachedImage(imageUrl) {
//   const cache = await caches.open(staticDevCoffee); // Use the correct cache name
//   const cachedResponse = await cache.match(imageUrl);

//   if (cachedResponse) {
//     return cachedResponse;
//   } else {
//     // Handle the case when the image is not in the cache (e.g., show a placeholder)
//     return null;
//   }
// }
