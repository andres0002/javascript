// A) Despues de aprobar, Cofla se compra una mejor computadora para poder programar
// mejor y hacer todo de una forma mas óptima pero necesita un resolución óptima para
// poder trabajar.

// - Debe ser al menos FHD.
// - Cuando la este por comprar, preguntarle si está seguro de eso.
let ancho = window.screen.width;
let alto = window.screen.height;

confirm(`El ancho es: ${ancho}, el alto es: ${alto}.`)
    ? alert("Compra realizada con exito...")
    : alert("Compra cancelada con exito...");