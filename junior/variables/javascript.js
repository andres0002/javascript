// Tipos de datos.
let string = "Cadena de texto.";
let number = 1;
let boolean = true;

// Casos especiales de datos -> (undefined (Cuando una variable no esta definida o no se inicializa), null (Sirve para inicializar la varible en null), nan (Se presenta cuando se quiere realizar una operación entre dos valores de tipo numero pero se da cuando uno de los dos valores no es un numero)).

// Formas de declarar una variable -> (var (Es alcance global), let (Limita la variable en el bloque o scope en el que se ejecuta), const (Para constantes (Las contantes se deben declarar e inicializar en el mismo momento.))).

let num; // Así se declara una varible, en este caso solo se le define el alcance que tendra.

num = 25; // Así se inicializa una variable.

num = 20; // Así se modifica la varible.

// Creación de multiples variables separadas por (,).
let num1 = 1, num2 = 2, num3 = 3;

// Hoisting -> 

// alert(`La suma es: ${num1 + num2 + num3}.`);

// Prebas con Prompt -> Es una función de JavaScript que nos sirve para pedir datos en pantalla.

// let name = prompt("Cúal es tu nombre?");

// alert(`Hello: ${name}.`);