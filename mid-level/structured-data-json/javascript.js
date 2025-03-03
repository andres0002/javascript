// _____________Datos Estructurados (JSON)______________
// - Definición -> JavaScript Object Notation.
// - Usos y sintaxis -> {"key":value}.
let object = {
    "name": "Pedro",
    "lastname": "Saenz"
}
console.log(typeof object);
console.log(object);
console.log(object.name);
console.log(object.lastname);
// - Serialización -> Cuando el JSON es de tipo string.
// Serializado...
object = '{"name": "Pedro","lastname": "Saenz"}';
console.log(typeof object);
console.log(object);
// - Deserialización -> Cuando el JSON es de tipo object.
// Deserializado...
object = {"name": "Pedro","lastname": "Saenz"};
console.log(typeof object);
console.log(object);
// - Método stringify() -> Convierte un dato de JavaScript en una cadena
// de texto JSON (serializar).
object = JSON.stringify(object);
console.log(typeof object);
console.log(object);
// - Método parse() -> Convierte un string con estructura de JSON a
// formato JSON (deserializar).
object = JSON.parse(object);
console.log(typeof object);
console.log(object);
// - JSON PolyFill -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse