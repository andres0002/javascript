// ____________________Methods Childs____________________
const content = document.querySelector(".content");

const h2Old = document.querySelector(".h2");
const h3Old = document.querySelector(".h3");
const pOld = document.querySelector(".p");

const h2New = document.createElement("h2");
h2New.innerHTML = "Titulo h2 update.....";
const parrafoNew = document.createElement("p");
parrafoNew.innerHTML = "Parrafo update.....";

// - replaceChild() -> Sirve para remplazar nodos hijos.
content.replaceChild(h2New, h2Old);
content.replaceChild(parrafoNew, pOld);
// - removeChild() -> Sirve para eliminar nodos hijos.
content.removeChild(h3Old);
// - hasChildNodes() -> Sirve para validar si el nodo tiene hijos.
content.hasChildNodes()
    ? document.write("El elemento tiene hijos.")
    : document.write("El elemento no tiene hijos.");