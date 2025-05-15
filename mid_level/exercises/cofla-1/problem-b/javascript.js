// B) Cofla llega a su casa y abre una página y apreta F11, desde ahi se pone a
// navegar pero hay un problema... como ahora está en pantalla completa no puede
// ver ni la barra de marcadores, ni el protocolo, ni la url, ni ninguna información
// que nos pueda otorgar la interfax que contiene la barra de busqueda.

// - Crear un sistema que muestre los suficientes datos como para conocer el
// sitio Web.

let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;

let html = `Protocolo: <strong>${protocol}</strong><br>`; // Protocolo de la pagina.
html += `Hostname: <strong>${hostname}</strong><br>`; // Dominio o ip.
html += `Pathname: <strong>${pathname}</strong><br>`; // Path de el file.
html += `Href: <strong>${href}</strong><br>`; // Url completa.

document.write(html);