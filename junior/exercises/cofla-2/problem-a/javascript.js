// A) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos
// hablando del pobre al que cofla le dió una mano, este pobre decide hacer una fiesta
// para festejar que salió de la pobreza con este millonario premio compró una máquina que
// deja pasar solamente a los mayores de edad, entre otras cosas...

// - Dejar pasar solo a los mayores de edad.
// - La primera persona que entre despues de las 2 am, no paga.

let free = false;

const validarCliente = (time) => {
    let edad  = prompt("¿Cúal es tu edad?");
    // Solución primer punto.
    if (edad >= 18) {
        // Solución segundo punto.
        if (time > 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis porque eres la primera persona que dentra despues de las 2 am...");
            free = true;
        } else {
            alert(`Son las ${time} Hs y puedes pasar pero tienes que pagar la entrada...`)
        }
    } else {
        alert("Eres menor de edad por ende no puedes ingresar a la fiesta...");
    }
}

validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(2);
validarCliente(3);