// Bucles e Iteraciones -> Son las formas en que se puede iterar con arrays o condiciones.
// Y nos sirven para realizar determinadas acciones un numero requerido de veces.

let num = 0;

// Tipos de bucles:
// while -> Indeterminado.
// do while  -> Indeterminado.
// for -> Determinado.
// for in -> Determinado.
// for of -> Determinado.

// while -> Nos sirve para realizar acciones mientras se cumpla una condición.
// while (num < 10) {
//     document.write(`Num es menor que 10 y es: ${num}.<br>`);
//     num++;
// }

// do while -> Nos sirve para realizar acciones mientras se cumpla una condición, pero
// este nos permite ejecutar por lo menos una ves la acción aunque la condición no se cumpla.
// do {
//     document.write(`Num es menor que 10 y es: ${num}.<br>`);
//     num++;
// } while (num < 10);

// break -> Nos sirve para finalizar un bucle o un ciclo que se repite, aunque la condición de cumpla.
// while (num < 10) {
//     if (num == 1) {
//         break;
//     }
//     document.write(`Num es menor que 10 y es: ${num}.<br>`);
//     num++;
// }

// for -> Sirve para realizar acciones durante determinadas iteraciones.
// for (let i = 0; i < 10; i++) {
//     document.write(`Num es menor que 10 y es: ${i}.<br>`);
// }

// continue -> Sirve para saltar iteraciones o acciones si se cumple determinada condición.
// for (let i = 0; i < 10; i++) {
//     if (i == 0) {
//         continue;
//     }
//     document.write(`Num es menor que 10 y es: ${i}.<br>`);
// }

// Declaración de array e inicialización.
// let frutas = ["manzana", "pera", "uva"];

// // for in -> Sirve para recorrer una lista de elementos y nos devuelve el indice o posición.
// for (fruta in frutas) {
//     document.write(`La indice de la fruta: <strong>${frutas[fruta]}</strong>, es: ${fruta}.<br>`);
// }

// document.write(`<br>`);

// // for of -> Sirve para recorrer una lista de elementos y nos devuelve el valor.
// for (fruta of frutas) {
//     document.write(`La fruta de esta iteración es: <strong>${fruta}</strong>.<br>`);
// }

// label -> Es una sentencia y sirve para asociar un bucle cualquiera ecepto foreach a un nombre para poderlo user despues.
array1 = ["pepe", "jose"];
array2 = ["maría", "marcela", array1, "andrea"];

forArray2: // -> Este es el label es un identificativo para un for para cuando se requiera hacer referencia a una for desde un for anidado sirve para aplicar un continue o un breack al for que se hace la referencia.
for (let value in array2) {
    if (value == 2) {
        for (let value of array1) {
            // break forArray2;
            continue forArray2;
            document.write(`${value}.<br>`);
        }
    } else {
        document.write(`${array2[value]}.<br>`);
    }
}