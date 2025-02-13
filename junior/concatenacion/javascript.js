// Unir strings.

let saludo = "¡Hola Andres!";
let pregunta = "Cómo se encuentra?";

// Se une con el simbolo (+).
let frase = saludo + " " + pregunta;

// Para concatenar numeros forzamos a que sea string de esta manera ("" + 9 + 4).
frase = "" + 1 + 2;

// Utilizando la función concat() para concatenar, para utilizar concat() si o si se debe utilizar por lo menos un string.
let num1 = "1";
let num2 = 2;
frase = num1.concat(num2);

// Concatenación con backtikcs (``) y las varibles entre (${})
let name = "Andres";
frase = `Soy ${name} y estoy caminando.`;
document.write(frase);

// El escape de comillas simples o dobles y el backtikcs se debe tener precaución al combinarlas.
// Ejemplos:
let frase2 = "'sdfsadf' `sdfadsfasdf`";
document.write(frase2);
let frase3 = '"sdfasdfd" `sdfadsfsad`';
document.write(frase3);
let frase4 = `"sdfasdf" 'sdfadsf'`;
document.write(frase4);
