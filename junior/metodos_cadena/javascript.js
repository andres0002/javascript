// Metodos de cadena -> Metodos de JavaScript para manipular datos de tipo string.

let cadena = "cadena de prueba";
let cadena2 = "prueba";
let result = "";

// - concat() -> Junta dos o mas cadenas y retorna una nueva.
// result = cadena.concat(" -> hola.");
// document.write(result);
// - startsWith() -> Si una cadena comienza con los caracteres de otra cadena,
// devuelve true, sino devulve false.
// result = cadena.startsWith(cadena2);
// document.write(result);
// - endsWith() -> Si una cadena termina con los carcteres de otra cadena,
// devuelve true, sino devuelve false.
// result = cadena.endsWith(cadena2);
// document.write(result);
// - includes() -> Si una cadena puede encontrarse dentro de otra cadena,
// devuelve true, sino devuelve false.
// result = cadena.includes(cadena2);
// document.write(result);
// - indexOf() -> Devuelve el indice del primer caracter de la cadena, sino
// existe devuelve -1.
// result = cadena.indexOf(cadena2);
// document.write(result);
// - lastIndexOf() -> Devuelve el ultimo indice del primer carcter de la cadena,
// si no existe, deveuelve -1.
// result = cadena.lastIndexOf(cadena2);
// document.write(result);
// - padStart() -> [Propuesta de estandar] - Rellenar la cadena al principio con
// los caracteres indicados.
// cadena = "abc"
// result = cadena.padStart(6, "0");
// document.write(result);
// - padEnd() -> [Propuesta de ECMA] - Rellenar cadena al final con los caracteres
// con los indicados.
// cadena = "abc"
// result = cadena.padEnd(6, "0");
// document.write(result);
// - repeat() -> Devuelve la misma cadena pero repetida la cantidad que se indique.
// cadena = "abc "
// result = cadena.repeat(2);
// document.write(result);
// - split() -> Divide la cadena como se indique.
// result = cadena.split(" ");
// document.write(result[0] + "<br>");
// document.write(result[1] + "<br>");
// document.write(result[2] + "<br>");
// - subtring() -> Nos retorna la parte de la cadena que se a selecionado.
// result = cadena.substring(2, 8);
// document.write(result);
// - toLowerCase() -> Convierte los caracteres de la cadena en minúsculas.
// cadena = "Andres";
// result = cadena.toLocaleLowerCase();
// document.write(result);
// - toUpperCase() -> Convierte los caracteres de la cadena en mayúsculas.
// cadena = "Andres";
// result = cadena.toUpperCase();
// document.write(result);
// - toString() -> Metodo que devuelve una cadena que representa al objeto
// especificado.
// cadena = 12345;
// // result = cadena;
// result = cadena.toString();
// document.write(2 + result);
// - trim() -> Elimina los espacios en blanco al principio y al final de la cadena.
// cadena = "      Andres      ";
// // result = cadena;
// result = cadena.trim();
// // document.write(result.length);
// document.write(result);
// - trimStart() -> Elimina el espacio en blanco al inicio de la cadena.
// cadena = "      Andres      ";
// // result = cadena;
// result = cadena.trimStart();
// // document.write(result.length);
// document.write(result);
// - trimEnd() -> Elimina el espacio en blanco al final de la cadena.
// cadena = "      Andres      ";
// // result = cadena;
// result = cadena.trimEnd();
// // document.write(result.length);
// document.write(result);
// - valueOf() -> Retorna el valor primitivo de un opjeto string.
cadena = "Andres";
result = cadena.valueOf();
document.write(result);