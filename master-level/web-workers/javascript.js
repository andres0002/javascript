// ____________________Web Workers__________________________
const btn = document.querySelector(".btn");
// - Que es un Worker -> Es un file que se va a ejecutar en segundo plano sin intervenir
// con el procesamiento normal de la page, sin trabajar con el event loop de manera
// directa.
// - Tipos de Web Workers -> .
//  * Dedicated Worker -> .
//  * Shared Worker -> .
//  * Service Worker -> .
//  * Abstract Worker -> .
// - Política de origen cruzado (Same-Origin) -> Solo se puede acceder si tiene el
// mismo origen.
// const worker = new Worker("http://127.0.0.1:5501/master-level/web-workers/worker.js");
// const worker = new Worker("http://127.0.0.1:5500/master-level/web-workers/worker.js");
// - Dedicated Worker: Worker() -> contructor.
const worker = new Worker("./worker.js");
btn.addEventListener("click", () => {
    executeBucle();
})
const executeBucle = () => {
    // - Method postMessage() -> Enviar mensajes al web worker desde el script principal y
    // desde el script principal al web worker.
    worker.postMessage("Desde script principal...");
}

worker.addEventListener("message", (e) => {
    console.log(e.data);
    // - Method terminate() -> Finaliza la ejecución del web worker.
    worker.terminate();
})
console.log(worker);
// - Parametro Options -> Opcional por defecto es classic.
//  * type (string) -> El tipo de trabajador a utilizar.
//  * credentials (string) -> El tipo de credenciales del trabajador.
//  * name (string) -> Especifica un nombre de identificación para representar
// el alcance del trabajador, que es principalmente con fines de depuración.
// - Event onmessage -> Recibir mensajes entre el web worker y el script principal.