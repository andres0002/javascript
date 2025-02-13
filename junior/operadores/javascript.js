// Operadores de asignación -> Sirve para asignar un valor al operando de la izquierda basado en el valor del operando de la derecha.

// Asignacíon.
let num = 1;

// Adicción.
num += 1;

// Sustracción.
num -= 1;

// Multiplicación.
num *= 5;

// División.
num /= 5;

// Resto.
num %= 6;

// Exponenciación.
num **= 6;

// Operadores aritméticos -> Sirven para tomar valores numéricos como sus operandos y retornan un valor numérico único.

let num1 = 1;
let num2 = 2;
let result = 0;

// Adicción.
result = num1 + num2;

// Decremento o resta de uno (1).
result = --num2;

// División.
result = num1 / num2;

// Exponenciación.
result = num1**2;

// Incremento o suma de uno (1).
result = ++num2;

// Multiplicación.
result = num1 * num2;

// Resto.
result = num1 % num2;

// Sustracción.
result = num1 - num2;

// Unary negation, por ejemplo si el valor es (1) de devuelve el (-1) -> Te devuelve el valor negativo.
result = -num2;

// Unary plus, por ejemplo si el valor es (1) de devuelve el (1) -> Te devuelve el valor positivo.
result = +num2;

document.write(`El resultado es: ${result}.`);