const staticCacheName = "staticCache";
const staticAssets = [
  "/",
  "/index.html",
  "/scripts/main.js",
  "/styles/style.css",
  "/assets/david-carbon-webdesign-logo.svg",
  "/assets/bg.jpg",
  "/assets/angle-arrow-down.svg",
  "https://fonts.googleapis.com/css?family=Dosis:300,500,800&display=swap"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(staticAssets);
    })
  );
});

self.addEventListener("activate", e => {
  //
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
