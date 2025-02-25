// ________________Interfaz Events__________________
const img = document.querySelector(".img-test");
const input = document.querySelector(".input-test");
const textSelected = document.querySelector(".text-selected");
// - error -> Ocurre cuando sucede un error durante la carga de
// un file multimedia.
img.addEventListener("error", () => {
    console.log("Error...");
});
// - load -> Ocurre cuando un objeto se ha cargado.
window.addEventListener("load", () => {
    console.log("Loaded...");
});
// - beforeunload -> Ocurre antes de que el documento esté a punto
// de descargarse, de salir de la página.
window.addEventListener("beforeunload", () => {
    console.log("Beforeunload...");
});
// - unload -> Ocurre una vez que se ha descargado una página,
// salir de la página.
window.addEventListener("unload", () => {
    console.log("Unload...");
});
// - resize -> Ocurre cuando se cambia el tamaño de la vista del
// documento.
window.addEventListener("resize", () => {
    console.log("Resize...");
});
// - scroll -> Ocurre cuando se desplaza la barra de desplazamiento
// de un elemento.
window.addEventListener("scroll", () => {
    console.log("Scroll...");
});
// - select -> Ocurre después de que el user selecciona algún texto
// de <input> o <textarea>.
input.addEventListener("select", (e) => {
    console.log("Select...");
    console.log(e);
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    textSelected.textContent = input.value.substring(start, end);
});
// - Events -> Mas en -> https://www.w3schools.com/jsref/obj_events.asp