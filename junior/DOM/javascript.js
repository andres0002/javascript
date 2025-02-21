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