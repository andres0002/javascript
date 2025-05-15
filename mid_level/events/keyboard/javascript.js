// ___________Keyboard Events______________
const container = document.querySelector(".container");
const inputTest = document.querySelector(".input-test");
// - keydown -> Ocurre cuando una tecla se presiona.
inputTest.addEventListener("keydown", () => {
    console.log("User preciono la tecla...");
});
// - keypress -> Ocurre cuando una tecla se presiona y suelte.
inputTest.addEventListener("keypress", () => {
    console.log("User presiono tecla y la soltó...");
});
// - onkeyup -> Ocurre despues de que se suelta una tecla.
inputTest.addEventListener("keyup", () => {
    console.log("User solto la tecla...");
});