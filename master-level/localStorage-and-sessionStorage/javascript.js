// _______LocalStorage and SessionStorage_______
"use strict";
// - Diferencias -> API's que nos permiten almacenar info.
//  * LocalStorage -> La info se almacena en el almacenamiento local y
// cuando se cierra la pestaña del navegador la info se mantiene.
// console.log(localStorage);
//  * SessionStorage -> La info que se alamacena en la sesión
// cuando se cierra la pestaña del navegador la info se pierde.
// console.log(sessionStorage);
// - setItem() -> Para crear un key y su value.
// localStorage.setItem("nameLocalStorage", "Andres...Local");
// sessionStorage.setItem("nameSessionStorage", "Andres...Session");
// - getItem() -> Para obtener un value de acuerdo a un key.
// console.log(localStorage.getItem("nameLocalStorage"));
// console.log(sessionStorage.getItem("nameSessionStorage"));
// - removeItem() -> Para eliminar un key y su value.
// localStorage.removeItem("nameLocalStorage");
// sessionStorage.removeItem("nameSessionStorage");
// - clear() -> Para eliminar todas las keys y values.
// localStorage.clear();
// sessionStorage.clear();
// console.log(localStorage);
// console.log(sessionStorage);
// - Ejemplo de uso (Idioma) -> .
const modalOverlay = document.querySelector(".modal-overlay");
const definirIdioma = () => {
    document.querySelector(".en").addEventListener("click", () => {
        localStorage.setItem("idioma", "en");
        closedModal();
    });
    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("idioma", "es");
        closedModal();
    });
}

const closedModal = () => {
    modalOverlay.style.animation = "desaparecer 1s forwards";
    setTimeout(() => {modalOverlay.style.display = "none"}, 1000)
}

const idioma = localStorage.getItem("idioma");
(idioma === null)
    ? definirIdioma()
    : (
        console.log(`El idioma es: ${idioma}...`),
        modalOverlay.style.display = "none"
    );