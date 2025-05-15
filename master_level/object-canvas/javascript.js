// ____________________Canvas______________________
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
// - lineWidth -> .
context.lineWidth = "3";
// - strokeStyle -> .
context.strokeStyle = "#ddd";
// - fillStyle -> .
context.fillStyle = "#888";
// - strokeRect (retangulo) -> context.strokeRect(10 (left), 10 (top), 278 (width), 128 (height));.
context.strokeRect(10, 10, 278, 128);
// - fillRect -> context.fillRect(5 (left), 5 (top), 278 (width), 128 (height));.
context.fillRect(5, 5, 278, 128);
// - lineTo -> .
// context.lineTo(20 (x), 20 (y));
context.lineTo(20, 20); // Primer punto.
// context.lineTo(20 (x), 20 (y));
context.lineTo(270, 120); // Segundo punto.
// - stroke -> .
context.stroke(); // Crea la linea o une los puntos.
// - closePath -> Para teminar la linea.
context.closePath();
// - beginPath -> Para crear uno nuevo.
// - lineTo -> .
context.beginPath();
context.lineTo(50, 120); // Primer punto.
context.lineTo(200, 120); // Segundo punto.
// - stroke -> .
context.stroke(); // Crea la linea o une los puntos.
// - arc (circulo) -> context.arc(80 (left), 60 (top), 50 (radio), 60 (), 70 ());.
context.arc(80, 60, 50, 60, 70);
context.stroke();
// - moveTo -> .
