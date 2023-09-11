const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "./src/assets/react.svg",
  "./src/assets/vite.svg",
  "./src/assets/sass.png",
  "./src/assets/js.png",
  "./src/assets/html.png",
  "./src/assets/css.png",
  "./src/assets/boot.png",
  "./src/assets/three.png",
  "./src/assets/api.png",
  "./src/assets/firebase.png",
  "./src/assets/blender.png",
  "./src/assets/myimage.jpeg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
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
