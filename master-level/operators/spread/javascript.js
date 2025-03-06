// ___________Operador Spread (spread operator)_________
// - Añadir arrays a otros arrays -> .
let array = ["manzana", "pera"];
let array2 = ["kiwi", "naranja"];
let array3 = ["banana", "coco"];
// array.push(...array2, ...array3);
// console.log(array);
// - Concatenar arrays -> .
// let array4 = [...array, ...array2, ...array3];
// console.log(array4);
// - Como argumentos rest -> .
const suma = (num, num2) => {
    console.log(num + num2);
}
let values = [1, 2];
suma(...values);
console.log(...values);

// ----------------------------------------------------------
// "use strict";
// let value1 = "Value 1";
// let value2 = "Value 2";
// let value3 = "Value 3";
// let array = ["Value 1", "Value 2", "Value 3"];
// console.log(value1,value2,value3);
// console.log(array);
// console.log(...array);