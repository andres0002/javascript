// _________Objeto Date_________
"use strict";
const date = new Date();
console.log(date);
// - getDate() -> .
console.log(date.getDate());
// - getDay() -> .
// Domingo -> 0.
// Lunes -> 1.
// Martes -> 2.
// Miercoles -> 3.
// Jueves -> 4.
// Viernes -> 5.
// Sabado -> 6.
console.log(date.getDay());
// - getMonth() -> .
// Enero -> 0.
// Febrero -> 1.
// Marzo -> 2.
console.log(date.getMonth());
// - getYear() -> Es igual a el año (actual - 1900).
console.log(date.getYear());
// - getFullYear() -> Año actual.
console.log(date.getFullYear());
// - getHours() -> .
console.log(date.getHours());
// - getMinutes() -> .
console.log(date.getMinutes());
// - getSeconds() -> .
console.log(date.getSeconds());
// - getMilliseconds() -> .
console.log(date.getMilliseconds());
// - Ejemplo de uso (Alarma) -> .