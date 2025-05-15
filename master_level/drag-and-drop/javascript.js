// _______________Drag and Drop________________
// const circulo = document.querySelector(".circulo");
// const retangulo = document.querySelector(".retangulo");
// - Eventos del objeto -> .
//  * dragstart -> Cuando se toma.
// circulo.addEventListener("dragstart", () => {
//     console.log("dragstart...");
// });
//  * drag -> Mientras se este arrastrando el elemento.
// circulo.addEventListener("drag", () => {
//     console.log("drag...");
// });
//  * dragend -> Cuando se suelta.
// circulo.addEventListener("dragend", () => {
//     console.log("dragend...");
// });
// - Eventos de zona -> .
//  * dragenter -> Cuando se esta arrastrando un elemento y entramos
// a otro elemento.
// retangulo.addEventListener("dragenter", () => {
//     console.log("dragenter...");
// });
//  * dragover -> Mientras se esta arrastrando un elemento dentro de
// otro elemento.
// retangulo.addEventListener("dragover", () => {
//     console.log("dragover...");
// });
// retangulo.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     console.log("dragover...");
// });
//  * drop -> Cuando se suelta un elemento dentro de otro elemento y
// para poder realizar este evento se debe poner el preventDefault
// en el evento dragover.
// retangulo.addEventListener("drop", () => {
//     console.log("drop...");
// });
//  * dragleave -> Cuando se esta arrastrando un elemento dentro de otro
// elemento y salimos del elemento.
// retangulo.addEventListener("dragleave", () => {
//     console.log("dragleave...");
// });
// - Propiedad dataTransfer -> .
//  * setData() -> Sirve para transferir info de un elemento.
// circulo.addEventListener("dragstart", (e) => {
//     e.dataTransfer.setData("class", e.target.className);
//     console.log("dragstart...");
// });
//  * getData() -> Sirve para obtener info de otro elemento.
// retangulo.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     console.log("dragover...");
// });
// retangulo.addEventListener("drop", (e) => {
//     console.log(e.dataTransfer.getData("class"));
//     console.log("drop...");
// });
// - Ejemplo de uso (Texturizador) -> .
const texturas = document.querySelector(".texturas");
const zona = document.querySelector(".zona");

const transferirTextura = (index, event) => {
    event.dataTransfer.setData("textura", index)
}

for (let i = 0; i < texturas.children.length; i++) {
    let index = i + 1;
    document.querySelector(`.textura${index}`).addEventListener("dragstart", (event) => {
        transferirTextura(index, event);
    });
}

zona.addEventListener("dragover", (event) => {
    event.preventDefault();
});
zona.addEventListener("drop", (event) => {
    let index = event.dataTransfer.getData("textura");
    zona.style.background = `url("./imgs/textura${index}.png")`;
});