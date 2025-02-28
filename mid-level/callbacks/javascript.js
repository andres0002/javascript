// _____________Callbacks____________
// - Concepto -> Es una función dentro de otra función (Funtion in Funtion).
// - Ejemplos -> Tanto con funtions como con funtions flecha.
function test(callback) {
    callback("Andres...");
}

function decirNombre(name) {
    console.log(name);
}

test(decirNombre);

test((name) => console.log(name));

// - Problemas de los callbacks -> Código no muy legible y desordenado.