// ___________________Service Workers_______________________
// - serviceWorker lifeCycle -> https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle.
// - serviceWorker interface -> .
if (!navigator.serviceWorker) {
    console.log("Tu navegador no soporta Service Workers...");
}
if (navigator.serviceWorker) {
    // - Registrar un service worker con el method register() -> .
    navigator.serviceWorker.register("./service-worker.js");
}
// - Enviar mensaje con el method postMessage() -> .
navigator.serviceWorker.ready.then((res) => {
    setTimeout(() => {
        res.active.postMessage({message: "Mensaje desde el JS..."});
    }, 2000);
});
navigator.serviceWorker.addEventListener("message", (e) => {
    console.log(e.data.message);
});