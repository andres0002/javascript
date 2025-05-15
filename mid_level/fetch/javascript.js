// ___________________Fetch_____________________
// - Introducción -> Fetch es una forma que se tiene para trabajar
// con el object XMLHttpRequest o el remplazo.
// - Basado en promesas -> Promesa encasulada.
// - Object fetch -> .
// GET
// let request = fetch("https://reqres.in/api/users?page=2");
// - text() -> Me devuelve la data en type string.
// request.then((response) => response.text()).then((response) => {
//     console.log(typeof response);
//     console.log(response);
// });
// - json() -> Me devuelve la data en type object.
// request.then((response) => response.json()).then((response) => {
//     console.log(typeof response);
//     console.log(response);
// });
// POST
// request = fetch("https://reqres.in/api/users", {
//     method: "POST",
//     body: JSON.stringify({
//         "name": "Andres",
//         "job": "Dev"
//     }),
//     headers: {
//         "Content-type": "application/json;charse=UTF-8"
//     }
// });
// - text() -> Me devuelve la data en type string.
// request.then((response) => response.text()).then((response) => {
//     console.log(typeof response);
//     console.log(response);
// });
// - json() -> Me devuelve la data en type object.
// request.then((response) => response.json()).then((response) => {
//     console.log(typeof response);
//     console.log(response);
// });
// - blob() -> .
const img = document.querySelector(".img");
let request = fetch("./GET-vs-POST.png");
request.then((response) => response.blob()).then((response) => {
    img.src = URL.createObjectURL(response);
    img.alt = response.type;
    console.log(typeof response);
    console.log(response);
});
// - formData() -> .
// - arrayBuffer() -> .