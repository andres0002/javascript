// ________________Funciones Flecha__________________
// - ¿Porque aparecieron? (Funciones compatas y el uso de This).
// - Si solo hay una expresión, la retornan.
// const saludar = () => "Andres...";
// let result = saludar();
// console.log(result);
// - Parentesis opcionales ante un solo parametro (sin parametros se
// requiere parentesis).
// const saludar = name => name;
// console.log(saludar("Andres..."));
// const saludar = () => "Andres...";
// console.log(saludar());
// - No son adecuadas para ser usadas como métodos y no pueden ser
// usadas como constructores.
// const person = {
//     name: "Andres...",
//     saludar: function () {console.log(`Hello ${this.name}`)}
// };
// person.saludar();
// const person = {
//     name: "Andres...",
//     saludar: () => console.log(`Hello ${this.name}`)
// };
// // Las funciones flecha hacen referencia al contexto (this) del window.
// window.name = "Pepe..."
// person.saludar();
// - This contextual (No tienen propio this, sino que toman el de la
// función que lo envuelve).
// console.log(window === this);
// console.log(window);
// window.name = "Andres...";
// console.log(this.name);
// "use strict";
// function saludar() {
//     console.log(`Hello ${this.name}`);
// }
// const person = {
//     name: "Andres...",
//     saludar: saludar
// }
// person.saludar();
// - Las reglas de modo estricto aplicadas a This, son inoradas.
// - Función flecha invocada a través de los métodos call, apply and bind.
// - No tienen object arguments.
// - No tienen propiedad del prototipo prototype.
// - No se puede usar Yield (por ende no se pueden usar como funciones generadoras).
// - No puede contener saltos de línea entre sus parametros y su flecha.
// - Orden de parseo.
// - Retornan literales si su cuerpo está entre ().

// - Funciones recursivas (Recursividad) -> La recursividad es cuando una
// función se llama así misma.
// "use strict";
// const validarEdad = (msg) => {
//     let edad;
//     try {
//         if (msg) edad = prompt(msg);
//         else edad = prompt("Ingrse su edad.");
//         edad = parseInt(edad);
//         if (isNaN(edad)) throw "Introduce un número para la edad...";
//         if (edad > 18) console.log("Sos mayor de edad...");
//         else console.log("Sos menor de edad...");
//     } catch (error) {
//         validarEdad(error);
//     }
// }
// validarEdad();
// - Clausuras (o cierres).
// "use strict";
// const saludar = (name) => {
//     return function() {
//         console.log(name);
//     }
// }
// let saludo = saludar("Andres...");
// Sin clausula...
// const cambiarTamaño = tamaño => {
//     document.querySelector(".texto").style.fontSize = `${tamaño}px`;
// }
// document.querySelector(".t12").addEventListener("click", () => cambiarTamaño(12));
// document.querySelector(".t14").addEventListener("click", () => cambiarTamaño(14));
// document.querySelector(".t16").addEventListener("click", () => cambiarTamaño(16));
// Con clausula...
// const cambiarTamaño = tamaño => {
//     return () => {
//         document.querySelector(".texto").style.fontSize = `${tamaño}px`;
//     }
// }

// let px12 = cambiarTamaño(12);
// let px14 = cambiarTamaño(14);
// let px16 = cambiarTamaño(16);

// document.querySelector(".t12").addEventListener("click", px12);
// document.querySelector(".t14").addEventListener("click", px14);
// document.querySelector(".t16").addEventListener("click", px16);
// - Parámetros por defecto (validación antigua vs actual).
// "use strict";
// const suma = (a = 0,b = 0) => {
//     // b = typeof b !== "undefined" ? b : 0;
//     // b = b || 0;
//     console.log(a + b);
// }
// // suma(1, 2);
// suma(1, 4);
// - Parámetros rest (...param) -> para valores que dan pero no esperamos.
// "use strict";
// const suma = (frase, ...params) => {
//     let result = 0;
//     for (let i = 0; i < params.length; i++) {
//         result += params[i];
//     }
//     console.log(`${frase} ${result}.`);
// }
// suma("Suma igual a:", 1, 4, 2, 2);
// - Destructuración.
// - Destructurar arrays and objects.
// - Función destructuradora.