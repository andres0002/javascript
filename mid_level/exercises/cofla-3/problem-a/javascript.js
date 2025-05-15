// A) Las mesas de examen ya finalizaron y el profesor le tomó un último
// examen especial a Cofla, ya Cofla hizo 2 pruebas mas, pero lamentablemente
// se rompió el sistema de inscripción de notas, por ende habrá que crear
// una solución a este problema, desarrollando una Web que sea capás de
// simular su funcionamiento.

// - Crear mini interfaz para introducir nota.
// - Validar que no haya errores.
// - Se debe promediar la nota del profesor, con otras 2 notas de trabajos.
// - Si el promedio es mayor o igual a 7/10 -> Aprueba la materia.

const inputNota = document.getElementById("nota");
const btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", () => {
    let result;
    let message;
    try {
        let resultPrev = parseFloat(inputNota.value);
        if (isNaN(resultPrev)) {
            throw {
                name: "...TypeError...",
                message: "Has ingresado texto y debe ser numero..."
            }
        }
        result = validarAprobacion(8, 6, resultPrev);
        message = definirMessage(resultPrev);
    } catch (error) {
        // console.log(error.name);
        // console.log(error.message);
        if (error.name == "...TypeError...") {
            result = error.name;
            message = error.message;
        } else if (error.name == "...RangeError...") {
            result = error.name;
            message = error.message;
        } else {
            result = "...¿Sos Gracioso?...";
            message = "He descubierto que intentaste hackear el sistema...";
        }
    }
    openModal(result, message);
});

const openModal = (result, message) => {
    // console.log(typeof result);
    // console.log(result);
    // console.log(typeof message);
    // console.log(message);
    document.querySelector(".result").innerHTML = result;
    document.querySelector(".message").innerHTML = (
        validarOperadorTernario(result) + message
    );
    let modalBackground = document.querySelector(".modal-background");
    modalBackground.style.animation = "aparecer 1s forwards";
    modalBackground.style.display = "flex";
}

const validarOperadorTernario = (result) => {
    return (
        result == "...TypeError..."
        || result == "...¿Sos Gracioso?..."
        || result == "...RangeError..."
    )
        ? ""
        : "Tu test: ";
}

const validarAprobacion = (nota1, nota2, resultPrev) => {
    let promedio;
    promedio = (nota1 + nota2 + resultPrev) / 3;
    if (promedio >= 7) {
        return "<span class='green'>...APROBADO...</span>";
    } else {
        return "<span class='red'>...DESAPROBADO...</span>";
    }
}

const definirMessage = (resultPrev) => {
    let message;
    switch (resultPrev) {
        case 1:
            message = "No podes ser tan HDP...";
            break;
        case 2:
            message = "Sos malisimo para mi materia...";
            break;
        case 3:
            message = "No sabes casi nada...";
            break;
        case 4:
            message = "Muy mal...";
            break;
        case 5:
            message = "Mal...";
            break;
        case 6:
            message = "Regular...";
            break;
        case 7:
            message = "Bien...";
            break;
        case 8:
            message = "¡Muy Bien!...";
            break;
        case 9:
            message = "¡Excelente!...";
            break;
        case 10:
            message = "¡Insuperable...";
            break;
        default:
            throw {
                name: "...RangeError...",
                message: "Debes ingresar un numero dentro del rango de 1 y 10, incluyendo el 1 y el 10."
            }
    }
    return message;
}