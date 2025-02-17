// C) Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea básica
// de cálculo, tiene que hacer un par de ejercicios de matemática que incluya suma, resta,
// multiplicación y división.
// Realizar esto con una calculadora puede ser mucho mas efectivo.

// - Crear calculadora que nos simplifique el trabajo.

const sumar = (num1, num2) => {
    return parseFloat(num1) + parseFloat(num2);
}

const restar = (num1, num2) => {
    return parseFloat(num1) - parseFloat(num2);
}

const multiplicar = (num1, num2) => {
    return parseFloat(num1) * parseFloat(num2);
}

const dividir = (num1, num2) => {
    return parseFloat(num1) / parseFloat(num2);
}

let operacion = prompt(`
    ¿Qué operación deseas realizar?
    1: Suma.
    2: Resta.
    3: Multiplicación.
    4: División.
`);

let result = 0;

if (operacion == "1") {
    let num1 = prompt("Primer número para sumar.");
    let num2 = prompt("Segundo número para sumar.");
    result = sumar(num1, num2);
    document.write(`El resultado de la suma es igual a: ${result}.`);
} else if (operacion == "2") {
    let num1 = prompt("Primer número para restar.");
    let num2 = prompt("Segundo número para restar.");
    result = restar(num1, num2);
    document.write(`El resultado de la resta es igual a: ${result}.`);
} else if (operacion == "3") {
    let num1 = prompt("Primer número para multiplicar.");
    let num2 = prompt("Segundo número para multiplicar.");
    result = multiplicar(num1, num2);
    document.write(`El resultado de la multiplicación es igual a: ${result}.`);
} else if (operacion == "4") {
    let num1 = prompt("Primer número para dividir.");
    let num2 = prompt("Segundo número para dividir.");
    result = dividir(num1, num2);
    document.write(`El resultado de la división es igual a: ${result}.`);
} else {
    alert("No has selecionado una operación validad.");
}