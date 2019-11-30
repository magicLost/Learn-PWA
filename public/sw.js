self.addEventListener("install", event => {
  console.log("sw installing sw ...", event);
});

self.addEventListener("activate", event => {
  console.log("sw activating sw ...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  console.log("sw fetching sw ...", event);
  event.respondWith(fetch(event.request));
});
