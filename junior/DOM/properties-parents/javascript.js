// ___________________Properties Parents______________________________
const content = document.querySelector(".content");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const p = document.querySelector(".p");
// - parentElement -> Sirve para selecionar el element padre de un element.
console.log(content.parentElement);
console.log(h2.parentElement);
console.log(h3.parentElement);
console.log(p.parentElement);
// - parentNode -> Sirve para selecionar el nodo padre aunque no sea una etiqueta html.
console.log(content.parentNode);
console.log(h2.parentNode);
console.log(h3.parentNode);
console.log(p.parentNode);