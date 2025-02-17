// Funciones -> Son porciones de código que se pueden reutilizar y nos retornan o no un
// determinado valor el cual es la solución de dichas funciones.

// Formas de crear funciones:

// 1. Forma clasica.
// function saludar() {
//     response = prompt("¡Hola WARJ! ¿Cómo se encuantra?");
//     if (response == "bien") {
//         alert("Excelente....");
//     } else {
//         alert("Se puede mejorar....")
//     }
// }

// 2. Asignar a una varible.
// let saludar = function() {
//     response = prompt("¡Hola WARJ! ¿Cómo se encuantra?");
//     if (response == "bien") {
//         alert("Excelente....");
//     } else {
//         alert("Se puede mejorar....")
//     }
// }

// saludar();

// Retorno -> valores que puede devolver una función.
// function sum() {
//     return 3 + 2;
// }

// Parametros -> varibles que reciben los funciones.
// function sum(num, num2) {
//     return num + num2;
// }

// Scope -> cuando se crea una variable en la funtion solo es acesible
// en la misma función.
// function sum(num, num2) {
//     let res = num + num2;
//     return res;
// }

// 3. Función flecha -> Nos sirve para simplificar un poco mas las funciones.
// const sum = (num, num2) => {
//     let res = num + num2;
//     return res;
// }
const sum = (num, num2) => num + num2;

document.write(sum(3, 3));