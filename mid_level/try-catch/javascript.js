// _________Try....Catch_________
// - Sintaxis -> El try solo funciona en conjunto con el catch
// try...catch.
// - Object error -> El catch nos da un error de tipo Object.
// - Catch Incondicional -> Son los catchs sin condicionales.
// - Catch Condicional -> Son los catchs con condicionales.
// - Setencia Throw -> Se utiliza para crear errores personalizados.
// - Finally -> Se ejecuta sin importar lo que suceda en el try...catch.

try {
    // ddddddd
    throw {
        name: "Name Error...",
        message: "Message Error..."
    };
} catch (error) {
    if (error.name == "ReferenceError") {
        console.log(typeof error);
        console.log(error.name);
        console.log(error.message);
    } else if (error.name == "Name Error...") {
        console.log(typeof error);
        console.log(error.name);
        console.log(error.message);
    }
} finally {
    console.log("Finally...");
}