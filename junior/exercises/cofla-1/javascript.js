// A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado
// pero hay un problema: Los precios no estan al lado de cada estante con su respetivo
// helado.
// Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, así que...
// veamos como podemos ayudarlos.

// Roberto tiene $1.5 USD
// Pedro tiene $1.7 USD
// Cofla tiene $3 USD

// Los precios de los helados son los siguientes:
// Palito de helado de agua: $0.6 USD
// Palito de helado de crema: $1 USD
// Bombón helado marca heladix: $1.6 USD
// Bombón helado marca heladovich: $1.7 USD
// Bombón helado marca helardo: $1.8 USD
// Potecito de helado con confites: $2.9 USD
// Pote de 1/4 de KG: $2.9 USD

// Crear soluciones:
// 1. Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan
//   comprar.
// 2. Si hay 2 o mas con el mismo precio, mostrar ámbos.
// 3. Roberto, Pedro y Cofla, quiere saber cuanto es el vuelto.

// Solución primer punto.
// let dineroRoberto = prompt("Ingresa el monto que tienes para comprar Roberto.");
// let dineroPedro = prompt("Ingresa el monto que tienes para comprar Pedro.");
// let dineroCofla = prompt("Ingresa el monto que tienes para comprar Cofla.");

// dineroRoberto = parseFloat(dineroRoberto);
// dineroPedro = parseFloat(dineroPedro);
// dineroCofla = parseFloat(dineroCofla);

// // Roberto
// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("Roberto, comprate el helado de agua.");
//     // Solución tercer punto.
//     alert(`Roberto, te sobra $${dineroRoberto - 0.6} USD.`);
// }

// else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("Roberto, comprate el helado de crema.");
//     // Solución tercer punto.
//     alert(`Roberto, te sobra $${dineroRoberto - 1} USD.`);
// }

// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//     alert("Roberto, comprate el helado marca heladix.");
//     // Solución tercer punto.
//     alert(`Roberto, te sobra $${dineroRoberto - 1.6} USD.`);
// }

// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
//     alert("Roberto, comprate el helado marca heladovich.");
//     // Solución tercer punto.
//     alert(`Roberto, te sobra $${dineroRoberto - 1.7} USD.`);
// }

// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
//     alert("Roberto, comprate el helado marca helardo.");
//     // Solución tercer punto.
//     alert(`Roberto, te sobra $${dineroRoberto - 1.8} USD.`);
// }

// // Solución segundo punto.
// else if (dineroRoberto >= 2.9) {
//     alert("Roberto, comprate el helado con confites o el Pote de 1/4 de KG.");
//     // Solución tercer punto.
//     alert(`Roberto, te sobra $${dineroRoberto - 2.9} USD.`);
// }

// else {
//     alert("Lo siento Roberto, no te alcanza para ningún helado.");
// }

// // Pedro
// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("Pedro, comprate el helado de agua.");
//     // Solución tercer punto.
//     alert(`Pedro, te sobra $${dineroPedro - 0.6} USD.`);
// }

// else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("Pedro, comprate el helado de crema.");
//     // Solución tercer punto.
//     alert(`Pedro, te sobra $${dineroPedro - 1} USD.`);
// }

// else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//     alert("Pedro, comprate el helado marca heladix.");
//     // Solución tercer punto.
//     alert(`Pedro, te sobra $${dineroPedro - 1.6} USD.`);
// }

// else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//     alert("Pedro, comprate el helado marca heladovich.");
//     // Solución tercer punto.
//     alert(`Pedro, te sobra $${dineroPedro - 1.7} USD.`);
// }

// else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//     alert("Pedro, comprate el helado marca helardo.");
//     // Solución tercer punto.
//     alert(`Pedro, te sobra $${dineroPedro - 1.8} USD.`);
// }

// // Solución segundo punto.
// else if (dineroPedro >= 2.9) {
//     alert("Pedro, comprate el helado con confites o el Pote de 1/4 de KG.");
//     // Solución tercer punto.
//     alert(`Pedro, te sobra $${dineroPedro - 2.9} USD.`);
// }

// else {
//     alert("Lo siento Pedro, no te alcanza para ningún helado.");
// }

// // Cofla
// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//     alert("Cofla, comprate el helado de agua.");
//     // Solución tercer punto.
//     alert(`Cofla, te sobra $${dineroCofla - 0.6} USD.`);
// }

// else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//     alert("Cofla, comprate el helado de crema.");
//     // Solución tercer punto.
//     alert(`Cofla, te sobra $${dineroCofla - 1} USD.`);
// }

// else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
//     alert("Cofla, comprate el helado marca heladix.");
//     // Solución tercer punto.
//     alert(`Cofla, te sobra $${dineroCofla - 1.6} USD.`);
// }

// else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
//     alert("Cofla, comprate el helado marca heladovich.");
//     // Solución tercer punto.
//     alert(`Cofla, te sobra $${dineroCofla - 1.7} USD.`);
// }

// else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//     alert("Cofla, comprate el helado marca helardo.");
//     // Solución tercer punto.
//     alert(`Cofla, te sobra $${dineroCofla - 1.8} USD.`);
// }

// // Solución segundo punto.
// else if (dineroCofla >= 2.9) {
//     alert("Cofla, comprate el helado con confites o el Pote de 1/4 de KG.");
//     // Solución tercer punto.
//     alert(`Cofla, te sobra $${dineroCofla - 2.9} USD.`);
// }

// else {
//     alert("Lo siento Cofla, no te alcanza para ningún helado.");
// }

function comprarHelado(nameClient) {
    // Solución primer punto.
    let dinero = prompt(`${nameClient}, Ingresa el monto que tienes para comprar.`);

    dinero = parseFloat(dinero);

    // Roberto
    if (dinero >= 0.6 && dinero < 1) {
        alert(`${nameClient}, comprate el helado de agua.`);
        // Solución tercer punto.
        alert(`${nameClient}, te sobra $${dinero - 0.6} USD.`);
    }

    else if (dinero >= 1 && dinero < 1.6) {
        alert(`${nameClient}, comprate el helado de crema.`);
        // Solución tercer punto.
        alert(`${nameClient}, te sobra $${dinero - 1} USD.`);
    }

    else if (dinero >= 1.6 && dinero < 1.7) {
        alert(`${nameClient}, comprate el helado marca heladix.`);
        // Solución tercer punto.
        alert(`${nameClient}, te sobra $${dinero - 1.6} USD.`);
    }

    else if (dinero >= 1.7 && dinero < 1.8) {
        alert(`${nameClient}, comprate el helado marca heladovich.`);
        // Solución tercer punto.
        alert(`${nameClient}, te sobra $${dinero - 1.7} USD.`);
    }

    else if (dinero >= 1.8 && dinero < 2.9) {
        alert(`${nameClient}, comprate el helado marca helardo.`);
        // Solución tercer punto.
        alert(`${nameClient}, te sobra $${dinero - 1.8} USD.`);
    }

    // Solución segundo punto.
    else if (dinero >= 2.9) {
        alert(`${nameClient}, comprate el helado con confites o el Pote de 1/4 de KG.`);
        // Solución tercer punto.
        alert(`${nameClient}, te sobra $${dinero - 2.9} USD.`);
    }

    else {
        alert(`Lo siento ${nameClient}, no te alcanza para ningún helado.`);
    }
}

comprarHelado("Roberto");
comprarHelado("Pedro");
comprarHelado("Cofla");