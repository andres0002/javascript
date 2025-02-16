// Funciones -> Son porciones de código que se pueden reutilizar y nos retornan un determinado valor el cual es la solución de dichas funciones.

function saludar() {
    response = prompt("¡Hola WARJ! ¿Cómo se encuantra?");
    if (response == "bien") {
        alert("Excelente....");
    } else {
        alert("Se puede mejorar....")
    }
}

saludar();