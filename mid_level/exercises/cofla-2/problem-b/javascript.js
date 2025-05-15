// B) Los datos de Cofla y de otros alumnos fueron recibidos y ya están
// almacenados, ahora hay que crear un sistema que muestre esa información
// y se pueda asignar cuando rinde.

// - La interfaz debe ser agradable y atractiva.
// - Debe contener todos los datos estructurados.
// - El profe puede seleccionar en cual de las 2 semanas rinde el
// alumno.
// - Si el profesor confirma, los datos se deben actualizar y
// reemplazar el espacio de la selección de semana por la semana
// seleccionada.

let alumnos = [
    {
        nombre: "Pepe Perez",
        email: "pepe@gmail.com",
        materia: "Matemáticas"
    },
    {
        nombre: "Juan Zapata",
        email: "juan@gmail.com",
        materia: "Fisica"
    },
    {
        nombre: "Julia Zaens",
        email: "julia@gmail.com",
        materia: "Lenguaje"
    },
    {
        nombre: "Karin Guerra",
        email: "karin@gmail.com",
        materia: "Quimica"
    },
    {
        nombre: "Jorge Ramirez",
        email: "jorge@gmail.com",
        materia: "Cálculo"
    },
    {
        nombre: "Facundo Duarte",
        email: "facundo@gmail.com",
        materia: "Literatura"
    },
    {
        nombre: "Cofla XD",
        email: "cofla@gmail.com",
        materia: "Algebra"
    }
];

const gridContainer = document.querySelector(".grid-container");
const btnContainer = document.querySelector(".btn-container");
const btn = document.querySelector(".btn-confirm");
let htmlCode = "";

// for (alumno in alumnos) {
//     console.log(alumnos[alumno]);
// }

alumnos.forEach(alumno => {
    // console.log(alumno);
    let nombre = alumno.nombre;
    let email = alumno.email;
    let materia = alumno.materia;
    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>
    `;
});

gridContainer.innerHTML = htmlCode;

btn.addEventListener("click", () => {
    let vConfirm = confirm("¿Realmente deseas confirmar las semanas?");
    if (vConfirm) {
        let elements = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (element in elements) {
            let semana = elements[element];
            semana.innerHTML = semanasElegidas[element].value;
        }
        btnContainer.removeChild(btn);
    }
});