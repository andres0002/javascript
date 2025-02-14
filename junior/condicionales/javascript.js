// Condicional -> Es una sentencia que nos permite validar una expresión que en caso de que sea verdadera o true podremos realizar detaerminadas acciones.

let name = "Andres";

// Si se cumple la condición o si la expresión es verdadera.
if (name == "Pedro") {
    document.write("Hello Pedro...");
}

// Si el (if) inicial no se cumple o no es verdadero se procede a validar el (else if) que es una validación que solo se valida si el (if) asociado al (else if) no se cumple y si el (else if) esta definido. 
else if (name == "Laura") {
    document.write("Hello Laura...");
}

// Si ni el (if) ni los (else if) se cumplen se ejecutara lo que hay en el (else) asociado al (if) y a los (else if) que lo preseden o se anteponen. 
else {
    document.write(`Hello ${name}...`)
}