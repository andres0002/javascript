// Sirve para validar que se instalo el service worker.
self.addEventListener("install", (e) => {
    console.log("Instalando service worker...");
});
// Para validar si esta activo el service worker.
self.addEventListener("activate", (e) => {
    console.log("Activated service worker...");
});
// Para realizar acciones si se presenta algún error.
self.addEventListener("error", (e) => {
    console.log("Error service worker...");
});
// - Fetch event -> Verificar que se este enviando una solicitud a este
// service worker.
self.addEventListener("fetch", (e) => {
    console.log("Fetch service worker...");
});
// Recibir y enviar.
self.addEventListener("message", (e) => {
    console.log(e.data.message);
    e.source.postMessage({message: "Mensaje desde el SW..."});
});