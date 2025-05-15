// - Registrar caché y mostrar sitio web offline -> .
if (!navigator.serviceWorker) {
    console.log("Tu navegador no soporta Service Workers...");
}
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("./service-worker.js");
}