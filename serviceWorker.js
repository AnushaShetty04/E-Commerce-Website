const staticDev = "Ecommercesite"
const assets = [
  "/",
  "index.html",
  "style.css",
  "shirt.jpg",
  "watch.jpg",
  "camera.jpg",
  "intro-bg_1.jpg"
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets)
    })
  )
})
