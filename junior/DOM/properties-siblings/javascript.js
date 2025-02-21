// ___________________Properties Siblings______________________________
const content = document.querySelector(".content");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const p = document.querySelector(".p");
// - nextSibling -> Sirve para saber cual es el hermano que esta despues tambien recono
// los espacios como texto.
console.log(h2.nextSibling);
// - previousSibling -> Sirve para saber cual es el hermano que esta antes tambien
// recono los espacios como texto.
console.log(h2.previousSibling);
// - nextElementSibling -> Sirve para saber cual es el hermano que esta despues
// especificamente los elementos.
console.log(h2.nextElementSibling);
// - previousElementSibling -> Sirve para saber cual es el hermano que esta antes
// especificamente los elementos.
console.log(h3.previousElementSibling);