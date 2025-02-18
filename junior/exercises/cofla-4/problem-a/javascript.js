// A) Cofla ya está terminando el primer semestre del primer ciclo, la tarea que debe
// realizar es mucho mas avanzada de la que tenia antes, además de suma, resta,
// multiplicación y división ahora también debe calcular potencias, raices cuadradas
//  y cúbicas.

// - Perfeccionar calculadora para poder implementar las nuevas funcionalidades.

class Calculadora {
    sumar (num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }
    
    restar (num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }
    
    multiplicar (num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }
    
    dividir (num1, num2) {
        return parseFloat(num1) / parseFloat(num2);
    }

    potenciar (num1, exp) {
        return num1 ** exp;
    }

    raizCuadrada (num1) {
        return Math.sqrt(num1);
    }

    raizCubica (num1) {
        return Math.cbrt(num1);
    }
}

// Calculadora
const calculadora = new Calculadora();

let operacion = prompt(`
    ¿Qué operación deseas realizar?
    1: Suma.
    2: Resta.
    3: Multiplicación.
    4: División.
    5: Potenciación.
    6: Raíz cuadrada.
    7: Raíz cúbica.
`);

let result = 0;

if (operacion == "1") {
    let num1 = prompt("Primer número para sumar.");
    let num2 = prompt("Segundo número para sumar.");
    result = calculadora.sumar(num1, num2);
    document.write(`El resultado de la suma es igual a: ${result}.`);
} else if (operacion == "2") {
    let num1 = prompt("Primer número para restar.");
    let num2 = prompt("Segundo número para restar.");
    result = calculadora.restar(num1, num2);
    document.write(`El resultado de la resta es igual a: ${result}.`);
} else if (operacion == "3") {
    let num1 = prompt("Primer número para multiplicar.");
    let num2 = prompt("Segundo número para multiplicar.");
    result = calculadora.multiplicar(num1, num2);
    document.write(`El resultado de la multiplicación es igual a: ${result}.`);
} else if (operacion == "4") {
    let num1 = prompt("Primer número para dividir.");
    let num2 = prompt("Segundo número para dividir.");
    result = calculadora.dividir(num1, num2);
    document.write(`El resultado de la división es igual a: ${result}.`);
} else if (operacion == "5") {
    let num = prompt("Número a potenciar.");
    let exp = prompt("Exponente.");
    result = calculadora.potenciar(num, exp);
    document.write(`El resultado de la potenciación es igual a: ${result}.`);
} else if (operacion == "6") {
    let num = prompt("Quieres conocer la raíz cuadrade de.");
    result = calculadora.raizCuadrada(num);
    document.write(`El resultado de la raíz cuadrada es igual a: ${result}.`);
} else if (operacion == "7") {
    let num = prompt("Quieres conocer la raíz cúbica de.");
    result = calculadora.raizCubica(num);
    document.write(`El resultado de la raíz cúbica es igual a: ${result}.`);
} else {
    alert("No has selecionado una operación validad.");
}