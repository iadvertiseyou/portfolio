const staticCacheName = "staticCache";
const staticAssets = [
  "/portfolio/",
  "/portfolio/index.html",
  "/portfolio/scripts/main.js",
  "/portfolio/styles/style.css",
  "/portfolio/assets/david-carbon-webdesign-logo.svg",
  "/portfolio/assets/bg.jpg",
  "/portfolio/assets/angle-arrow-down.svg",
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
