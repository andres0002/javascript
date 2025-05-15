// ______________Funciones Asincronas (Operador Async)________________
// - Definición -> Que trbajan en tiempo real.
// - Usos -> .
// - Operado Await -> .

// const object = {
//     property1: "value1",
//     property2: "value2",
//     property3: "value3",
// };

// const getInfo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {resolve(object)}, 3000);
//     })
// }

// getInfo().then(response => console.log(response));

const getInfo = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(text)}, Math.random()*200);
    })
}

// Con el then() las respuestas se obtienen en desorden.
getInfo("1: Andres.").then(response => console.log(response));
getInfo("2: Pepe.").then(response => console.log(response));
getInfo("3: Lucas.").then(response => console.log(response));

// Con el (async-await (trabajan en conjunto)) las respuestas se obtienen en orden.
const showResponse = async () => {
    let response1 = await getInfo("1: Andres.");
    let response2 = await getInfo("2: Pepe.");
    let response3 = await getInfo("3: Lucas.");
    console.log(response1);
    console.log(response2);
    console.log(response3);
}

// showResponse();