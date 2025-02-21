// _____________________Get and Update Elements________________________
// - textContent -> Devuelve el texto del cualquier nodo e ignora las etiquetas
// html.
const title = document.querySelector(".title");
document.write(title.textContent + "<br><br>");
alert(title.textContent);
// - innerHTML -> Devuelve el contenido html de un elemento.
document.write(title.innerHTML + "<br>");
alert(title.innerHTML);
// - outerHTML -> Devuelve el código html completo del elemento.
document.write(title.outerHTML + "<br>");
alert(title.outerHTML);