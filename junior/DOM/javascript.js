// DOM -> Es el Document Object Model es la interfax que contiene todos los objetos
// estandares que nos permiten representar un documento html, xml o xhtml que asu ves
// tiene otra interfax que nos permite decir que elelmento se puede combinar con que
// elemento y otra que nos permite trabajar con una lenguaje como JavaScript.

// - Nodo -> Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo,
// el mismo body o incluso las etiquetas de una lista.
//  * Document: El nodo document es el nodo raíz, a partir del cual derivan el resto
//  de nodos.
//  * Element: Nodos definidos por las etiquetas html.
//  * Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo
//  text (texto).
//  * Attribute: Los atributos de las etiquetas definen nodos, (en JavaScript no los
//  vemos como nodos, sino como información asociada al nodo de tipo element).
//  * Comentarios y otros: Los comentarios y otros elementos como las declaraciones
//  doctype en cabecera de los documentos html generan nodos.

// _____________Document - Metodos de selección de Elementos____________
// - getElementById() -> Seleciona un elemento por ID.
// let parrafo = document.getElementById("parrafo");
// document.write("<br><br>" + parrafo + "<br>");
// - getElementsByTagName() -> Seleccciona todos los elementos que coincidan con el
// nombre de la etiqueta especificada.
// parrafo = document.getElementsByTagName("p");
// document.write(parrafo + "<br>");
// - querySelector() -> Devuelve el primer elemento que coincida con el grupo
// especifico de selectores.
// parrafo = document.querySelector(".parrafo");
// document.write(parrafo + "<br>");
// - querySelectorAll() -> Devuelve todos los elementos que coincidan con el grupo
// especificado de selectores.
// parrafo = document.querySelectorAll(".parrafo");
// document.write(parrafo + "<br>");

// _____Metodos para Definir, Obtener y Eliminar atributos_____
// - setAttribute() -> Modifica el valor de un atributo.
// const range = document.getElementById("rangeAge");
// const range = document.querySelector(".rangeAge");
// range.setAttribute("type", "range");
// - getAttribute() -> Obtine el valor de un atributo.
// document.write("<br>" + range.getAttribute("type"));
// - removeAttribute() -> Remueve el valor de un atributo.
// range.removeAttribute("type");

// ____________________Atributos globales____________________
// - class -> Lista de clases del elemento separadas por espacios.
// const title = document.querySelector(".title");
// title.setAttribute("class", "test");
// - contenteditable -> Indica si el elemento puede ser modificable
// por el user (bool).
// title.setAttribute("contenteditable", "true");
// - dir -> Indica la direccionalidad del texto.
// title.setAttribute("dir", "ltr"); // ltr (de izquierda a derecha), rtl (
// de derecha a izquierda).
// - hidden -> Indica si el elemento aún no es, o ya no es, relevente.
// title.removeAttribute("hidden");
// - id -> Define un identificador único.
// title.setAttribute("id", "titleH1");
// - style -> Contiene declaraciones de estilo CSS para ser aplicadas al
// elemento.
// title.setAttribute("style", "color: red; font-size: 60px;");
// - tabindex -> Indica si el elemento puede obtener un focus de input.
// title.setAttribute("tabindex", "0");
// - title -> Contiene un texto con información relacionada al elemento
// al que pertenece.
// title.setAttribute("title", "Titulo principal....");

// __________________Atributos de Input___________________
// - className -> Sirve para modificar o obtener el valor de class del input.
// const input = document.querySelector(".input-normal");
// document.write(input.className + "<br><br>");
// - value -> Sirve para modificar o obtener el valor del value del input.
// document.write(input.value + "<br><br>");
// - type -> Sirve para modificar o obtener el valor del type del input.
// input.type = "color";
// document.write(input.type + "<br><br>");
// - accept -> Sirve para input de type="file" indicar que tipo de files
// aceptar.
// input.accept = "image/png";
// document.write(input.accept + "<br><br>");
// - form -> Sirve para poder asociar un input fuera de un form.
// document.write(input.form + "<br><br>");
// - minlength -> Sirve para establecer el minimo de caracteres del input.
// input.minLength = 5;
// document.write(input.minLength + "<br><br>");
// - maxlength -> Sirve para establecer el maximo de caracteres del input.
// input.maxLength = 6;
// document.write(input.maxLength + "<br><br>");
// - placeholder -> Sirve para poner un texto descriptivo al input y se desaparece
// cuando escriben en el input.
// input.placeholder = "placeholder";
// document.write(input.placeholder + "<br><br>");
// - required -> Sirve para poner el campo como obligatorio.
// input.required = true;
// document.write(input.required + "<br><br>");

// _________________Atributo Style__________________________
// - Usos y ejemplos.
const title = document.querySelector(".title");
// title.setAttribute("style", "color: red; font-size: 80px;");
title.style = "color: green; font-size: 80px;";
title.style.padding = "20px"
// - Propiedades Camel Case.
title.style.backgroundColor = "black";
