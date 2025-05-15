// ______________________AJAX JavaScript Async_________________________
// - Introducción e instalación del servidor.
// - Objecto XMLHttpRequest -> .
let request = new XMLHttpRequest();
// - Enviar peticiones GET -> .
// request.open("GET", "./info.txt");
// request.send();
// - Trabajar el resultado de las peticiones -> .
// request.readyState == 1 -> Que la solicitud se creo correctamente.
// request.readyState == 2 -> Que la solicitud se envio correctamente.
// request.readyState == 3 -> Que la solicitud se esta procesando.
// request.readyState == 4 -> Que la solicitud ya se proceso correctamente
// y el response ya se puede utilizar.
// Forma antigua...
// request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4 && request.status == 200) {
//         // Response serializado...
//         console.log(request.response);
//         // Response deserializado...
//         console.log(JSON.parse(request.response));
//         // Response serializado...
//         console.log(JSON.stringify(JSON.parse(request.response)));
//     }
// });
// - Nueva forma de trabajar el resultado -> .
// Forma actual...
// request.addEventListener("load", () => {
//     if (request.status == 200) {
//         // Response serializado...
//         console.log(request.response);
//         // Response deserializado...
//         console.log(JSON.parse(request.response));
//         // Response serializado...
//         console.log(JSON.stringify(JSON.parse(request.response)));
//     } else {
//         console.log(request.status);
//         console.log(request.statusText);
//     }
// });
// - Objecto ActiveXObject -> Para internet exploret ya que no todos los navegadores
// soportan AJAX pero sirve para los mismo que el XMLHttpRequest.
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// } else {
//     request = new ActiveXObject("Microsoft.XMLHttp");
// }
// request.open("GET", "https://reqres.in/api/users?page=2");
// request.send();
// request.addEventListener("load", () => {
//     if (request.status == 200) {
//         // Response deserializado...
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(request.status);
//         console.log(request.statusText);
//     }
// });
// - Enviar peticiones POST -> .
request.open("POST", "https://reqres.in/api/users");
const data = {
    "name": "Andres",
    "job": "Dev"
};
request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
request.send(JSON.stringify(data));
request.addEventListener("load", () => {
    if (request.status == 200 || request.status == 201) {
        // Response deserializado...
        console.log(JSON.parse(request.response));
    } else {
        console.log(request.status);
        console.log(request.statusText);
    }
});