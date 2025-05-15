// _____________________VisibilityChange_______________________
// - event VisibilityChange -> .
addEventListener("visibilitychange", (e) => {
    console.log(e);
    console.log("Se cambio de pestaña...");
    console.log(document.visibilityState);
    if (e.target.visibilityState == "visible") {
        document.writeln("Abandonaste la page...");
    } else {
        alert("Regresaste a la page...");
    }
})
// - Usos -> En caso de un video si se cambie de pestaña se pausa el video o en caso de
// un juego si se cambia de pestaña que se pause el juego.