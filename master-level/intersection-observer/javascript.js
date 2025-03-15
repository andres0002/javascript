// ______________Intersection Observer_________________
const boxes = document.querySelectorAll(".box");
// - Que es y para que sirve? -> Sirve para observar si algo esta en el
// viewport (si es visible) del navegador o no.
// - callback -> .
const verifyVisibility = (entries) => {
    for (let entry of entries) {
        // - isIntersecting -> Nos devuele true si se ve el elemento que se esta
        // observando en el viewport y false si no.
        if (entry.isIntersecting) {
            console.log(`Se esta mostrando la box: ${entry.target.textContent}.`);
        }
    }
}
// - options -> .
const options = {
    // root -> Tomar un element como referencia por defecto es el
    // viewport.
    // root: ,
    // rootMargin -> Sirve para decir cuanto margen tiene hantes
    // de mostrarse.
    // rootMargin: "-40px",
    // treshold -> Sirve para trabajar con las medidas, 0 es para que se ejecute
    // el evento cuando se inicie a ver el element y 1 que se active el evente cuando
    // se vea completamente el element.
    // treshold: 1
}
// - IntersectionObserver() -> .
// const observer = new IntersectionObserver(verifyVisibility, options);
const observer = new IntersectionObserver(verifyVisibility);
// Si se quieren definir o acceder a las propiedades del option sin
// pasarlo como parametro en el IntersectionObserver().
console.log("root: ", observer.root);
console.log("rootMargin: ",observer.rootMargin);
console.log("treshold: ", observer.treshold);

for (let box of boxes) {
    observer.observe(box);
}
// - Ejemplo de uso (Lazy Load) -> .