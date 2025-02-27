// _______________Control de Flujo y Manejo de Errores_________________
let name = "Andres Ramirez";
// - Sentencias de bloqueo.
{
    let name = "Vaneza Saenz";
    console.log(name);
}
// - Sentencias de control de flujo.
if (1 === 1) {
    let name = "Pepe Perez";
    console.log(name);
}
// - Sentencias de manejo de excepciones.
if (2 === 2) {
    try {
        dsfasd;
    } catch (error) {
        console.log(typeof error);
        console.log(error.name);
        console.log(error.message);
    }
}