// A) Cofla reprobó 2 materias y ahora tiene que enviar un formulario
// para registrarse en la materia que debe.

// - El formulario debe contener nombre completo, email y materia
// adeudada.
// - Se debe validar que el email sea valido, que los nombres sean
// reales.
// - Se debe enviar al server de manera pulida.

const vName = document.getElementById("fullName");
const email = document.getElementById("email");
const matter = document.getElementById("matterOwed");
const btn = document.getElementById("btnSend");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
    console.log("Hello World...");
    e.preventDefault();
    let error = validationFields();
    if (error[0]) {
        result.textContent = error[1];
        result.classList.remove("green");
        result.classList.add("red");
    } else {
        result.textContent = "Solicitud enviada exitosamente...";
        result.classList.remove("red");
        result.classList.add("green");
    }
    // (error[0])
    // ? result.textContent = error[1]
    // : result.textContent = "Solicitud enviada exitosamente...";
});

const validationFields = () => {
    let error = [];
    if (vName.value.length < 5 || vName.value.length > 40) {
        error[0] = true;
        error[1] = `
            El nombre es inválido.
        `;
        return error;
    } else if (
        email.value.length < 5
        || email.value.length > 40
        || email.value.indexOf("@") == -1
        || email.value.indexOf(".") == -1
    ) {
        error[0] = true;
        error[1] = `
            El email es inválido.
        `;
        return error;
    } else if (matter.value.length < 4 || matter.value.length > 40) {
        error[0] = true;
        error[1] = `
            La materia es inválida.
        `;
        return error;
    } else {
        error[0] = false;
        error[1] = ``;
        return error;
    }
}