// Event -> Son los cambios que suceden en la página.

// ____________________Events______________________
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
// - Event handlers -> Manejador de eventos.
// btn.onclick = () => {
//     alert("Hello World....");
// }
// - Event listeners -> Escucha de eventos.
// btn.addEventListener("click", () => {
//     alert("Hello World....");
// });
// btn.addEventListener("click", saludar);

// function saludar () {
//     alert("Hello World....");
//     btn.removeEventListener("click", saludar);
// }
// - Event object -> Objeto event.
// btn.addEventListener("click", (event) => {
//     console.log(event.target);
// });
// - Event flow -> El orden en el que se van a ejecutar los eventos.
// container.addEventListener("click", () => {
//     alert("Hello World...desde container...");
// });
// btn.addEventListener("click", () => {
//     alert("Hello World...desde btn...");
// });
// - Event bubbling -> De burbuja por defecto.
// container.addEventListener("click", () => {
//     alert("Hello World...desde container...");
// });
// btn.addEventListener("click", () => {
//     alert("Hello World...desde btn...");
// });
// - Event capturing -> De captura no es por defecto.
// container.addEventListener("click", () => {
//     alert("Hello World...desde container...");
// }, true);
// btn.addEventListener("click", () => {
//     alert("Hello World...desde btn...");
// });
// - event.stopPropagation() -> Para parar la propagación de eventos.
container.addEventListener("click", () => {
    alert("Hello World...desde container...");
});
btn.addEventListener("click", (e) => {
    alert("Hello World...desde btn...");
    e.stopImmediatePropagation();
});