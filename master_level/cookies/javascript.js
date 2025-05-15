// ______________________Cookies__________________________
// - Definición y usos comunes (diferenciar users, UX, Ads, etc...) -> .
// - Formas de clasificar cookies -> .
const newDateUTC = days => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + parseInt(days)*1000*60*60*24);
    return fecha.toUTCString();
}
const createCookie = (name, days) => {
    let exp = newDateUTC(days);
    // - Crear una cookie -> .
    document.cookie = `${name};expires=${exp}`;
}
createCookie("user=andres", "4");
createCookie("age=25", "4");
// - Method encodeURIComponent() y decodeURIComponent() -> .
// - Leer una cookie -> .
console.log(document.cookie);
const getCookie = (cookieName) => {
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1];
        }
    }
    return "No hay cookies con ese name...";
}
console.log(getCookie("user"));
console.log(getCookie("age"));
// - Modificar una cookie -> .
document.cookie = "user=pepe";
document.cookie = "age=26";
console.log(getCookie("user"));
console.log(getCookie("age"));
// - Borrar una cookie -> .
document.cookie = "username=juan";
document.cookie = "username=;max-age=0"; // Para eliminar cookie.
// - Ejemplo de uso (Aviso de uso de cookies, cumplimiento con el RGPD y la ePrivacy) -> .