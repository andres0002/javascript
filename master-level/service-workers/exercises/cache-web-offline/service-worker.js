let CACHE_NAME = "v1";

self.addEventListener("install", (e) => {
    console.log("Instalando Service Worker...");

    caches.open(CACHE_NAME).then((cache) => {
        cache.addAll([
            "./",
            "./index.html",
            "./styles.css",
            "./javascript.js"
        ]).then((res) => {
            console.log("Información de caché: ", res);
        }).catch((error) => {
            console.log(error);
        });
    });
});
self.addEventListener("activate", (e) => {
    console.log("Service Worker Activado...");
    
    caches.keys().then((keys) => {
        return Promise.all(
            keys.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log("Caché antiguo eliminado: ", key);
                    return caches.delete(key);
                }
            })
        );
    });
});
self.addEventListener("fetch", (e) => {
    console.log("Interceptando fetch para: ", e.request.url);

    e.respondWith(
        (async () => {
            const responseInCache = await caches.match(e.request);
            if (responseInCache) return responseInCache;
            return fetch(e.request);
        })() // Aquí ejecutamos la función inmediatamente
    );
});