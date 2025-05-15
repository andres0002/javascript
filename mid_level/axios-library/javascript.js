// ___________________Librería Axios___________________
// - Introducción e instalación -> Axios es el remplazo de fecth y
// esta basado en XMLHttpRequest y esta tan optimisada que no pesa
// casi nada (https://github.com/axios/axios (Sirve para cuando se
// quiere enfocar mas que todo en request)).
// - Basado en promesas -> .
// - Object axios -> .
// axios("https://reqres.in/api/users?page=2")
//     .then((response) => {
//         console.log(response);
//         console.log(response.data);
//     });
// - metodo get() -> .
// axios.get("https://reqres.in/api/users?page=2")
//     .then((response) => {
//         console.log(response);
//         console.log(response.data);
//     });
// - metodo post() -> .
// axios.post("https://reqres.in/api/users", {
//     "name": "Andres",
//     "job": "Dev"
// }).then((response) => {
//     console.log(response);
//     console.log(response.data);
// });
// - Formas de enviar los datos -> .
// - metodo get() -> .
// axios.get("https://reqres.in/api/users?page=2", {
//     params: {
//         name: "Andres"
//     }
// }).then((response) => {
//     console.log(response);
//     console.log(response.data);
// });
// - metodo post() -> .
axios.post("https://reqres.in/api/users", {
    "name": "Andres",
    "job": "Dev"
}).then((response) => {
    console.log(response);
    console.log(response.data);
});
// - Ventajas -> Para si en el sistema se necesita manajar muchas
// request.