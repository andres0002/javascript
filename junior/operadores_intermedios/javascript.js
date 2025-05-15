// Operadores de comparación -> Comparan dos expresiones y devuelven un valor boolean que representa la relación de sus valores.

let num1 = 23;
let num2 = 13;
let result;

// Comparador de igualdad.
result = num1 == num2;

// Comparador de desigualdad.
result = num1 != num2;

// Comparador de identidad -> Por igualdad y si es exactamente identico, osea que sea estrictamente iguales tanto en el tipo de dato como en el valor.
result = num1 === num2;

// Comparador de no identidad -> Por igualdad y si es exactamente identico, osea que no sea estrictamente iguales tanto en el tipo de dato como en el valor.
result = num1 !== num2;

// Comparador de mayor.
result = num1 > num2;

// Comparador de mayor igual.
result = num1 >= num2;

// Comparador de menor.
result = num1 < num2;

// Comparador de menor igual.
result = num1 <= num2;

// document.write(result);

// Operadores lógicos -> Nos devuelven un resultado a partir de que se cumpla (o no) una condición, su resultado es booleano, y sus operados son valores lógicos o asimilables a ellos.

let expretion1 = true;
let expretion2 = true;

// Comparador de si todas las expresiones o condiciones se cumplen o son verdaderas.
result = expretion1 && expretion2;

// Comparador de si alguna de las expresiones o condiciones se cumple o es verdadera.
result = expretion1 || expretion2;

// Comparador de negación devuelve lo contrario.
result = !expretion2;

document.write(result);
