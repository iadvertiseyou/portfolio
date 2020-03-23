self.addEventListener("install", e => {
  console.log("installled");
});

self.addEventListener("activate", e => {
  console.log("activated");
});
self.addEventListener("fetch", e => {
  console.log("Feteched", e);
});
