// ________________matchMedia___________________
const box = document.querySelector(".box");
// - matchMedia() -> Sirve para trabajar con responsive design, se recomienda
// para cosas que no se puedan trabajar con css.
const vMatchMedia = matchMedia("(max-width: 500px)");
// - Propiedad matches -> Nos devuelve true si el mediaQuery se cumple
// y false si el mediaQuery no se cumple.
console.log(vMatchMedia.matches);
// - Event onchange -> Nos sirve para validar si se cumple la mediaQuery
// o no solo cambia cuando va de (true a false) o va de (false a true).
vMatchMedia.addEventListener("change", (e) => {
    if (vMatchMedia.matches) box.classList.replace("box", "responsive-box");
    else if (box.className == "responsive-box") box.classList.replace("responsive-box", "box");
})
// - Cuando se debe usar? -> Cuando se quiera hacer una determinada acción
// si se tiene un clase o no.