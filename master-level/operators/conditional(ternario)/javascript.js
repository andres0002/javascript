// _______________Operador Condicional (Ternario)______________
// - Definición -> Es un condicional va recibir una expresión y si es
// true se ejecuta el apartado relacionado al true y si es false se ejecuta
// el apartado al false.
// - Sintaxis -> express (true o false) ? true (si es true) : false (si es false).
let edad = 18;
edad > 18
    ? (
        console.log("Mayor de edad..."),
        console.log("Si puede entrar...")
    )
    : (
        console.log("Menor de edad..."),
        console.log("No puede entrar...")
    );