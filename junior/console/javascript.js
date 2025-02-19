// Console -> Es uno de los tantos objetos y api's que podemos encontrar en el navegador
// como en el interprete de JavaScript para poder hacer muchas cosas como encontrar
// errores y demas.

// ____________________Funciones de Registro_______________________
// - assert() -> Aparece un mensaje de error en la consola si la afirmación es falsa.
// Si la afirmación es verdadera, no aparecerá nada. (No estandar)
// console.assert(false);
// - clear() -> Limpia la consola.
// console.clear();
// - error() -> Muestra un mensaje de error en la consola Web.
// console.error(["Error..."]);
// - info() -> Emite un mensaje informativo a la consola Web. En Firefox y Chrome, se
// muestra un pequeño icono "i" junto a estos elementos en el registro de la consola Web.
// console.info(["Info....."]);
// - log() -> Muestra un mensaje en la consola Web (o el intérprete de JavaScript).
// console.log(["Log....."]);
// - table() -> Esta función toma un argumento obligatorío: (data) que debe ser un array
// o un objeto, y un parámetro adicional: (columns) y nos muestra una table en consola.
// console.table(["table..."]);
// - warn() -> Imprime un mensaje de advertencia en la consola Web.
// console.warn("Warn...");
// - dir() -> Despliega una lista interactiva de las propiedades del objeto JavaScript
// especificado. (No estandar)
// console.dir([1 ,2, 3, 4, 5]);

// ____________________Funciones de Conteo____________________________
// - count() -> Registra el número de veces que se llama a count(). Esta función
// toma como argumento opcional una etiqueta.
// console.count();
// console.count();
// console.count();
// console.count();
// - countReset() -> Resetea el contador console.count().
// console.countReset();
// console.count();

// ____________________Funciones de Agrupación_________________________
// - group() -> Crea un nuevo grupo en línea en el registro de la consola Web.
// console.group();
// console.log("Hello World.....");
// console.count();
// console.count();
// console.count();
// console.count();
// console.count();
// console.group("frutas");
// console.log("manzana");
// console.log("uva");
// console.log("pera");
// - groupEnd() -> Remueve un grupo en línea en el registro de la consola Web.
// console.groupEnd();
// console.log("hunavana");
// console.groupEnd();
// console.log("hunavana");
// - groupCollapsed() -> Crea un grupo en línea pero contraido, el user debe
// expandirlo para verlo.
// console.groupCollapsed();
// console.log("Hello World.....");
// console.count();
// console.count();
// console.count();
// console.count();
// console.count();
// console.group("frutas");
// console.log("manzana");
// console.log("uva");
// console.log("pera");
// console.groupEnd();
// // console.groupEnd();
// console.log("manzana");
// console.log("manzana");

// ____________________Funciones de Temporización________________________
// - time() -> Inicia un temporizador.
// console.log("Iniciación del Time.........");
// console.time("time");
// - timeLog() -> Devuele el valor actual del temporizador.
// console.log("Tiempo Transcurrido Desde que se Inicio el Time.........");
// console.timeLog("time");
// console.timeLog("time");
// console.timeLog("time");
// - timeEnd() -> Detiene el temporizador y devuelve el valor actual de el temporizador.
// console.log("Terminación del Time.........");
// console.timeEnd("time");
// - Modificar estilo del texto.
console.log("%cHello World...", "color: #fff; background-color: black; padding: 20px 40px; border: 4px solid blue; border-radius: 50px;");