// _________Modo Estricto ("use strict")__________
// - Convierte errores de JavaScript en exceptions.
// - Mejorando la optimización de los errores y consigue mejores
// tiempos de ejecución.
// - Evita sintaxis usadas en porteriores a ES6.
// - No permite que el programador realize "mala sintaxis".

// _____________Usando el modo Estricto_________________
// "use strict"; // en el bloque global...
// - Variables declaradas.
// let name = "Andres";
// - Modificar propiedades (defineProperty() y writeable).
// const person = {};
// Object.defineProperty(person, "name", {value: "Andres", writable: false});
// // person.name = "Juan"; // no debe ir...
// console.log(person.name);
// - Agregar propiedades.
// const person = {
//     name: "Andres"
// }
// Object.preventExtensions(person);
// person.age = 25;
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// - No se pueden agregar propiedades a un string.
// let name = "Andres";
// name.canal = "test";
// console.log(name);
// - No existen las multiples variables en una función.
// function hablar (text, text) {
//     console.log(text);
// }
// hablar("andres");
// - Delete en objetos o variables -> El delete sirve para eliminar
// propiedades a objects.
// let vName = "Andres";
// delete vName;
// console.log(name);
// let person = {
//     name: "Andres"
// };
// delete person.name;
// console.log(person.name);
// - Las palabras reservadas no pueden ser usadas como variables.
// let package = "Andres";
// console.log(package);
// - Cambia el This.
// this.name = "Andres";
// this.saludar = function () {
//     console.log(`Hola ${this.name}`);
// }
// saludar();
// - Números Octales con una "o" adelante y no existe With.
// console.log(o94);
// - Arguments y Eval no puden ser variables.
// let arguments = "Andres";
// console.log(arguments);
// let eval = "25";
// console.log(eval);