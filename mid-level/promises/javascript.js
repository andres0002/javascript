// ____________________Promesas__________________________
// - Concepto -> Son un objeto que en su interior tiene dos callbacks uno
// llamado "reject" y el otro llamado "resolve"..
// - ¿Qué puede representar? -> Un caso ya sea de éxito o de error.
//  * Terminación de una operación asíncrona (resolve) -> Éxito.
//  * Fracaso de una operación asíncrona (reject) -> Error.
// - Ejemplo y solución al problema de los callbacks.

// let vName = "Andres";

// const promesa = new Promise((resolve, reject) => {
//     if (vName != "Andres") reject("Lo siente, el nombre no es Andres...");
//     else resolve(vName);
// });

// // then() nos sirve para aceder a el valor del resolve cuando todo ok.
// promesa.then(name => {
//     console.log(name);
// // catch() nos sirve para aceder a el valor del reject cuando da error.
// }).catch((error) => {
//     console.log(error);
// });

class Persona {
    constructor(name, instagram) {
        this.name = name,
        this.instagram = instagram;
    }
}

const data = [
    ["Lucas", "@Lucas"],
    ["Andres", "@Andres"],
    ["Pepe", "@Pepe"],
    ["Juan", "@Juan"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const getPerson = (index) => {
    return new Promise((resolve, reject) => {
        if (personas[index] != undefined) resolve(personas[index]);
        else reject("No se ha encontrado a la Persona...");
    })
}

const getName = (index) => {
    return new Promise((resolve, reject) => {
        if (personas[index].name != undefined) resolve(personas[index].name);
        else reject("No se ha encontro el nombre de la Persona...")
    })
}

const getInstagram = (index) => {
    return new Promise((resolve, reject) => {
        if (personas[index].instagram != undefined) resolve(personas[index].instagram);
        else reject("No se ha encontrado el Instagram...");
    })
}

let index = -1;

getPerson(index).then(person => {
    console.log(`Persona -> Name: ${person.name} -> Instagram: ${person.instagram}.
    `);
    return getName(index);
}).then(name => {
    console.log(`El nombre de la persona es: ${name}.`);
    return getInstagram(index);
}).then(instagram => {
    console.log(`El instagram de la persona es: ${instagram}.`);
}).catch(error => {
    console.log(error);
})