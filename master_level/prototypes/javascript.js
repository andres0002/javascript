// ____________________Prototipos______________________
// - Definición -> La programación basada en prototipos es un estilo
// de programación que los objects se crean por herencia de otros
// prototipos mas que por intansación.
// - Prototype Chain -> La cadena de prototipos, por ejemplo si yo
// creo un prototipo ese prototipo va tener un prototipo padre.
// let dog = {
//     "name": "Mailo"
// };

// console.log(dog);
// console.log(dog.__proto__);
// - Prototype Object -> Es el padre de todos los prototipos o por lo
// menos todos los prototipos heredan de un prototipo el cual es el
// prototipo Object.
// dog = "Mailo";
// .__proto__ -> Sirve para acceder a los prototipes que ya están creados.
// console.log(dog);
// console.log(dog.__proto__);
// console.log(dog.__proto__.__proto__);

// dog = function () {};
// .prototype -> Sirve para acceder a los prototipos propios o que
// fueron creados por nosotros.
// console.log(dog);
// console.log(dog.prototype);

// ____________________Caracteristicas________________________
// - Un prototipo definido en su código fuente es mutable.
// - Es en sí un objecto, así como otros.
// - Tiene una exixtencia física en la memoria.
// - Puede ser modificado y llamado.
// - Puede ser visto como un modelo ejemplar de una familia object.
// - Un objecto hereda propiedades (valores y métodos) de su
// prototipo.

// let array = [];
// console.log(array);

// _______Propiedad proto (dunder proto (__proto__))___________

// ____Sobrescribir __proto__ vs Sobrescribir método_______
class Person {
    constructor() {}

    hablar () {
        console.log("Hello World...");
    }
}

const person = new Person();

person.__proto__.hablar = () => {
    console.log("Modificado afuera...");
}

console.log(person);
person.hablar();

let array = [];

array.__proto__ = person;
console.log(array);
array.hablar();