// js
// ts
// third
// own

const num: number = 2;
const text: string = 'cadena de text';
const bool: boolean = true;
const value = null;
const value2 = undefined;

// void -> que puede retornar pero que no nos importa que retorne.
function saludar({ name, age }: { name: string, age: number }): void {
    console.log(`Hola ${name}, tienes ${age} años.`);
    // return implicito <----- Te da igual --> void --> no retorna nada.
}

saludar({
    name: 'Andres',
    age: 26
})

// never -> que nunca va return y nunca va a retornar nada.
function throwError(message: string): never {
    throw new Error(message);
    // nunca llegara al return implicito, ya que nunca se termina de ejecutar la function.
    // return implicito <----- Te da igual --> void --> no retorna nada.
}

// type -> alias.

// template union types.
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// | (or) -> union types.
type HeroPowerScale =
    'local' |
    'planetary' |
    'galactic' |
    'universal' |
    'multiversal' |
    'omnipresent'

type HeroBasicInfo = {
    name: string;
    age: number;
}

// ? -> optional properties.
type HeroProperties = {
    readonly id?: HeroId;
    isActive?: boolean;
    powerScale?: HeroPowerScale;
}

// & (and) -> Intersection types.
type Hero = HeroBasicInfo & HeroProperties;

const hero: Hero = {
    id: crypto.randomUUID(),
    name: 'thor',
    age: 1500
}

function createHero(input: HeroBasicInfo): Hero {
    const { name, age } = input;
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const thor = createHero({ name: 'Thor', age: 1500 });

// ?? -> pone un value por default si el valor de el lado izquierdo es undefined o null.
thor.id?.toString() ?? 'no tiene ID';
thor.powerScale = 'universal';

// Type indexing.

type HeroProperties2 = {
    isActive: boolean;
    address: {
        planet: string;
        city: string;
    }
}

const addressHero: HeroProperties2['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}

// Type from value.

const address = {
    planet: 'Earth',
    city: 'Madrid'
}

type Address = typeof address;

// Type from function return.

function createAddress() {
    return {
        planet: 'Tierra',
        city: 'Barcelona'
    }
}

type Address2 = ReturnType<typeof createAddress>;

// Arrays.

const languages: (string | number)[] = [];

languages.push('JavaScript');
languages.push(2);

/* Matriz.
    [
        ['X', 'O', 'X'], // <-- string[]
        ['X', 'O', 'X'], // <-- string[]
        ['', '', 'X']    // <-- string[]
    ]
 */

type CellValue = 'X' | 'O' | '';

// Tupla (GameBoard) -> es un array que tiene un limite fijado de logitud.

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['X', 'O', 'X'],
    ['', '', 'X']
];

gameBoard[0][2] = "X";

// enums.

// en javascript se puede hacer algo así:

const ERROR_TYPES = {
    NOT_FOUND: 'notFount',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden'
}

function showMessage(typeError) {
    if (typeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encontro el recurso.');
    } else if (typeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder.');
    } else if (typeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes perisos para acceder.');
    }
}

// en typescript lo mejor sería usar enums.

// enums con const para código interno example 'const enum ENUM_CUSTOM'
// genera menos código mas implicito en javascript.

// typescript.}

// const enum ERROR_TYPES_ENUMS {
//     NOT_FOUND = 'NOT_FOUND',
//     UNAUTHORIZED = 'UNAUTHORIZED',
//     FORBIDDEN = 'FORBIDDEN'
// }

// function showMessageEnums(typeError: ERROR_TYPES_ENUMS) {
//     if (typeError === ERROR_TYPES_ENUMS.NOT_FOUND) {
//         console.log('No se encontro el recurso.');
//     } else if (typeError === ERROR_TYPES_ENUMS.UNAUTHORIZED) {
//         console.log('No tienes permisos para acceder.');
//     } else if (typeError === ERROR_TYPES_ENUMS.FORBIDDEN) {
//         console.log('No tienes perisos para acceder.');
//     }
// }

// javascript.

// "use strict";
// function showMessageEnums(typeError) {
//     if (typeError === "NOT_FOUND" /* ERROR_TYPES_ENUMS.NOT_FOUND */) {
//         console.log('No se encontro el recurso.');
//     }
//     else if (typeError === "UNAUTHORIZED" /* ERROR_TYPES_ENUMS.UNAUTHORIZED */) {
//         console.log('No tienes permisos para acceder.');
//     }
//     else if (typeError === "FORBIDDEN" /* ERROR_TYPES_ENUMS.FORBIDDEN */) {
//         console.log('No tienes perisos para acceder.');
//     }
// }

// enums sin const para código de librerias 'enum ENUM_CUSTOM'
// genera mas código mas esplicito en javascript.

// typescript.

// enum ERROR_TYPES_ENUMS {
//     NOT_FOUND = 'NOT_FOUND',
//     UNAUTHORIZED = 'UNAUTHORIZED',
//     FORBIDDEN = 'FORBIDDEN'
// }

// function showMessageEnums(typeError: ERROR_TYPES_ENUMS) {
//     if (typeError === ERROR_TYPES_ENUMS.NOT_FOUND) {
//         console.log('No se encontro el recurso.');
//     } else if (typeError === ERROR_TYPES_ENUMS.UNAUTHORIZED) {
//         console.log('No tienes permisos para acceder.');
//     } else if (typeError === ERROR_TYPES_ENUMS.FORBIDDEN) {
//         console.log('No tienes perisos para acceder.');
//     }
// }

// javascript.

// "use strict";
// var ERROR_TYPES_ENUMS;
// (function (ERROR_TYPES_ENUMS) {
//     ERROR_TYPES_ENUMS["NOT_FOUND"] = "NOT_FOUND";
//     ERROR_TYPES_ENUMS["UNAUTHORIZED"] = "UNAUTHORIZED";
//     ERROR_TYPES_ENUMS["FORBIDDEN"] = "FORBIDDEN";
// })(ERROR_TYPES_ENUMS || (ERROR_TYPES_ENUMS = {}));
// function showMessageEnums(typeError) {
//     if (typeError === ERROR_TYPES_ENUMS.NOT_FOUND) {
//         console.log('No se encontro el recurso.');
//     }
//     else if (typeError === ERROR_TYPES_ENUMS.UNAUTHORIZED) {
//         console.log('No tienes permisos para acceder.');
//     }
//     else if (typeError === ERROR_TYPES_ENUMS.FORBIDDEN) {
//         console.log('No tienes perisos para acceder.');
//     }
// }

enum ERROR_TYPES_ENUMS {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}

function showMessageEnums(typeError: ERROR_TYPES_ENUMS) {
    if (typeError === ERROR_TYPES_ENUMS.NOT_FOUND) {
        console.log('No se encontro el recurso.');
    } else if (typeError === ERROR_TYPES_ENUMS.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder.');
    } else if (typeError === ERROR_TYPES_ENUMS.FORBIDDEN) {
        console.log('No tienes perisos para acceder.');
    }
}

// Aserciones de types.

// const canvas = document.getElementById('canvas');
const canvas = document.getElementById('canvas');

if (canvas instanceof HTMLCanvasElement) {
    // here no entra.
    const ctx = canvas.getContext('2d');
}

// typeof -> for types.
// instanceof -> for instances.

// los types no permiten duplicar types con el mismo name.

// fetching de datos en typescript -> utilizar quicktype.

// interfaces.

interface Heroe {
    id: string;
    name: string;
    age: number;
    saludar: () => void;
}

const heroe: Heroe = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: () => {
        console.log('Hello');
    }
}

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface Shoe extends Product {
    talla: number;
}

const shoe: Shoe = {
    id: 1,
    name: 'Product 1',
    price: 100,
    quantity: 1,
    talla: 5
}

// las interfaces permiten duplicar interfaces.
// interfaces que tengan el mismo name se extends automaticamente.

interface One {
    uno: number;
}

interface One {
    two: number;
}

const one: One = {
    uno: 1,
    two: 2
}

// enums.

enum EnumOne {
    ONE = 'one'
}

enum EnumOne {
    TWO = 'two'
}

// las enums permiten duplicar enums.
// enums que tengan el mismo name se extends automaticamente.

const vEnum: EnumOne = EnumOne.ONE;

// Narrowing.

function mostrarLongitud(object: number | string) {
    if (typeof object === 'string') {
        return object.length;
    }
    return object.toString().length;
}

mostrarLongitud(1);

interface Mario {
    company: string;
    name: string;
    saltar: () => void;
}

interface Sonic {
    company: string;
    name: string;
    correr: () => void;
}

type Personaje = Mario | Sonic;

function play(personaje: Personaje) {
    if ('saltar' in personaje) {
        console.log(personaje.saltar());
        return
    }
    console.log(personaje.correr());
}

// type guard.

function checkIsMario(personaje: Personaje): personaje is Mario {
    return (personaje as Mario).saltar !== undefined;
}

function play2(personaje: Personaje) {
    if (!checkIsMario(personaje)) {
        console.log(personaje.correr());
        return
    }
    console.log(personaje.saltar());
}

// type never.

function fn(x: number | string) {
    if (typeof x === 'string') {
        // do something.
    } else if (typeof x === 'number') {
        // do something.
    } else {
        x // never
    }
}

// class.

interface IAvenger {
    readonly name: string;
    powerScore: number;
    wonBattles: number;
}

class Avenger implements IAvenger {
    readonly name: string;
    // #powerScore -> forma de javascript para privatizar una property.
    // private powerScore -> forma de typescript de privatizar una property.
    powerScore: number;
    wonBattles: number = 0;

    constructor(name: string, powerScore: number) {
        this.name = name;
        this.powerScore = powerScore;
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}.`;
    }

    set power(newPower: number) {
        if (newPower <= 100) {
            this.powerScore = newPower;
        } else {
            throw new Error("Power score cannot be more than 100");
            
        }
    }
}

const spidey = new Avenger('Spidey', 80);
// spidey.name = 'Hulk';

// generics.

// any -> el any no es generico es ignorar el tipado, no
// se recomienda ya que se pierde toda la funcionalidad
// de typescript.

// function getArray(items: any[]): any[] {
//     return new Array().concat(items);
// }

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray([1,2,3]);
let stringArray = getArray(['1','2','3']);