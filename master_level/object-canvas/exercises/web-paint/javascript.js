// _____________________Web Paint________________________
const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const context = canvas.getContext("2d");

let painting, color, lineWidth, difX, difY;

canvas.addEventListener("mousedown", (e) => {
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.querySelector(".color").value;
    lineWidth = document.querySelector(".range").value;
    context.beginPath(); // Para iniciar una nueva linea.
});


canvas.addEventListener("mousemove", (e) => {
    if (painting == true) {
        dibujar(difX, difY, e.clientX-dif.left, e.clientY-dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
});

canvas.addEventListener("mouseup", (e) => {
    context.closePath(); // Para terminar la linea.
    painting = false; // Para indicar si se esta pintando o no.
});

const dibujar = (x1, y1, x2, y2) => {
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.moveTo(x1, y1); // Para mover el puntero del dibujo a una nueva posición.
    context.lineTo(x2, y2); // Para indicar un punto.
    context.stroke(); // Para pintar la linea.
}