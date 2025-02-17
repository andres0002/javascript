// POO -> La POO es un paradigma de programación que sirve para programar objetos como lo
// ariamos en la vida real.

// Tipos de paradigmas de programación:
// - Programación funcional.
// - Programación estructurada.
// - Programación POO.

// Conceptos básicos de POO:
// - Clase -> Es una plantila que se crea para poder manipular un objeto de mejor manera.
// - Objeto -> El objeto es lo que se obtine al crear una instancia de la clase sea del
// tipo que sea.
// - Atributo -> Son las propiedades o caracteristicas del objeto.
// - Metodo -> Son las acciones que puede llegar hacer el objeto.
// - Contructor -> Es una función particular que tienen las clases que es una función
// obligatoría la cual puede servir para inicializar o construir las propiedades
// con un determinado valor.
// - Instancia -> Se le dice cuando se le da un tipo especifico a una varible que
// sería de tipo objeto el que se allá definido.

// class
class Animal {
    // Atributos
    // especie;
    // edad;
    // color;
    // Constructor
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
    // Metodo
    showInfo () {
        document.write(`La especie del animal es: <strong>${this.especie}</strong>, la edad es: <strong>${this.edad}</strong> y el color es: <strong>${this.color}</strong>.<br>`);
    }
}

// Instancia
// const dog = new Animal("perro", 5, "negro");
const cat = new Animal("gato", 3, "negro");
const bird = new Animal("pájaro", 2, "negro");

// Objeto -> dog.

// dog.showInfo();
cat.showInfo();
bird.showInfo(); 

// console.table(dog);

// Caracteristicas de la POO
// - Abstracción -> Es intentar reducir lo que mas se pueda el objeto.
// - Modularidad -> Es la capacidad de tomar un problema grande y dividirlo en partes.
// - Encapsulamiento -> Es hacer que la data sea privada o reducir el acceso al user.
// - Polimorfismo -> Es como se comporta un objeto ante el mismo metodo.

// Otros conceptos de POO
// - Herencia -> Sirve para heredar propiedades o metodos de una clase padre con la palabra reservada "extends".
// - Metodos estáticos -> Los metodos estáticos son metodos que no requiren que la clase se defina para poder los usar y se implementa poniendo la palabra reservada "static" antes del nombre del metodo.
// - Metodos de acceso (getters, setters) -> Sirven para modificar o acceder a propiedades de la clase o el objeto, para modificar propiedades se utiliza la palabra reservada "set" antes del nombre del metodo y la sintasis del nombre del metodo es "setNameProperty" y para obtener el valor de la propiedad se utiliza la palabra reservada "get" antes del nombre del metodo y la sintasis del nombre del metodo es "getNameProperty".

class Dog extends Animal {
    constructor (especie, edad, color, raza) {
        // Herencia
        super(especie, edad, color);
        this.raza = null;
    }
    // Metodo
    showInfo () {
        document.write(`La especie del animal es: <strong>${this.especie}</strong>, la edad es: <strong>${this.edad}</strong>, el color es: <strong>${this.color}</strong> y la raza es: <strong>${this.raza}</strong>.<br>`);
    }
    // Metodo estático
    static ladrar () {
        alert("¡Waw!....");
    }
    // Metodo setter
    set setRaza (raza) {
        this.raza = raza;
    }
    // Metodo getter
    get getRaza () {
        return this.raza;
    }
}

// Dog.ladrar();

// Instancia
const dog = new Dog("perro", 5, "negro", "doberman");

// Objeto -> dog2

dog.showInfo();
document.write(`El valor de la raza es igual a: <strong>${dog.getRaza}</strong>.<br>`);
dog.setRaza = "doberman";
document.write(`El valor de la raza es igual a: <strong>${dog.getRaza}</strong>.<br>`);
dog.showInfo();
// dog.ladrar();

