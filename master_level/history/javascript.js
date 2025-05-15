// _______________Historial___________________
"use strict";
// - bach() -> Va hacia atras.
// console.log(history.back());
// - forward() -> Va hacia adelante.
// console.log(history.forward());
// - length -> Tamaño del historial.
// console.log(history.length);
// - go() -> Va al sitio indicado con un numero relativo.
// - 0 o nada -> Recarga la Página.
// - (-1) -> Página de antes.
// - 1 -> Página de despues.
// console.log(history.go());
// - pushState() -> Modifica la url y conserva la info, para crear
// nuevas entradas en el historial.
// console.log(location.href);
// history.pushState({"name": "Andres..."}, "titleWindow", "?haha");
// console.log(location.href);
// - Propiedad state y evento popstate -> .
// Para obtener el state.
// console.log(history.state);
// Para tomar el state cada que se detecte un cambio con el event
// popstate.
// addEventListener("popstate", (event) => {
//     console.log("popstate");
//     console.log(event.state);
// })
// - replaceState -> Modifica la url y no la conserva.
// history.replaceState({"name": "Andres..."}, "titleWindow", "?haha");
// addEventListener("popstate", (event) => {
//     console.log("popstate");
//     console.log(event.state);
// })