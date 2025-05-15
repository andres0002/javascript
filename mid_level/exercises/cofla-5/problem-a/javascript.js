// A) Cofla ya esta cursando su último semestre en la universidad.
// Efectivamente tuvo todo lo necesario para pasar de año, pero
// el tiene una duda, quiere saber cuantas personas cursan el
// último semestre, aprobados y desaprobados, esta información la
// obtiene de su universidad a la que el tiene fácil acceso.

// - Crear un sistema para obtener esa información.
// - Mostrarla ordenadamente en un sitio Web.

const info = document.querySelector(".info");

// Axios
const getInfo = async () => {
    try {
        let response = await axios.get("./info.txt");
        info.innerHTML = `
            Aprobados: <strong>${response.data.aprobados}</strong>.<br>
            Desaprobados: <strong>${response.data.desaprobados}</strong>.
        `;
        info.style.padding = "20px";
        console.log(response.data);
    } catch (error) {
        info.innerHTML = `
        Aprobados: <strong style="color: #f22;">La API falló...</strong><br>
        Desaprobados: <strong style="color: #f22;">La API falló...</strong>
        `;
        info.style.padding = "20px";
        console.log(error);
    }
}

document.getElementById("btnInfo").addEventListener("click", getInfo);