// Metodos de Arrays -> Son metodos de JavaScript que nos sirven para manipular arrays.

let array = ["Andres", "Pepe", "José"];
let result;

// _____________Transformadores________________
// - pop() -> Elimina el ultimo elemento de un array y lo devuelve.
// result = array.pop();
// document.write(result);
// - shift() -> Elimina el primer elemento de un array y lo devulve.
// result = array.shift();
// document.write(result);
// - push() -> Agrega un elemento al final del array y nos devuelve la
// cantidad de elementos en el array contando el recien agregado.
// document.write(array + "<br>");
// result = array.push("Alejo");
// document.write(result + "<br>");
// document.write(array +"<br>");
// - reverse() -> Invierte el orden de los elementos del array.
// document.write(array + "<br>");
// result = array.reverse();
// document.write(result + "<br>");
// - unshift() -> Agrega uno o más elementos al inicio del array,
// y devuelve la nueva longitud del array.
// document.write(array + "<br>");
// result = array.unshift(1, 2, 3, 4, 5);
// document.write(result + "<br>");
// document.write(array + "<br>");
// - sort() -> Ordena los elementos de un array localmente y devuelve
// el array ordenado.
// document.write(array + "<br>");
// result = array.sort();
// document.write(result + "<br>");
// - splice() -> Cambia el contenido de un array eliminando elementos existentes
// y/o agregando elementos existentes y devuelve los elementos eliminados.
// document.write(array + "<br>");
// // result = array.splice(1 (desde donde quiere iniciar a eliminar elementos
// // del array), 2 (cuantos elementos del array quiere eliminar)
// // , ["Laura", "Lorena"] (array de elementos a agragar));
// result = array.splice(1, 2, "Laura", "Lorena");
// document.write(result + "<br>");
// document.write(array + "<br>");

// _____________Accesores_____________________
// - join() -> Une todos los elementos de una matrix (u objeto similar) en una cadena
// y la devuelve.
// document.write(array + "<br>");
// result = array.join(" - ");
// document.write(result + "<br>");
// document.write(array + "<br>");
// - slice() -> Devuelve una parte del array dentro de un nuevo array empezando por
// inicio hasta fin (elemento fin no incluido).
// document.write(array + "<br>");
// result = array.slice(0, 2);
// document.write(result + "<br>");
// - Metodos ya vistos en cadenas -> toString(), indexOf(), lastIndexOf(), includes()
// etc...

// _____________De Repetición______________
// - filter() -> Crea un nuevo array con todos los elementos que cumplan con la
// condición.
// result = array.filter(value => (value == "Andres"));
// document.write(result + "<br>");
// - forEach() -> Ejecuta la función indicada una vez por cada elemento del array.
array.forEach(value => console.log(value));
array.forEach(value => document.write(value + "<br>"));