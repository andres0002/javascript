// ___________________Class, ClassList y Metodoa de ClassList______________________
// - Definición y usos -> Es una particularidad de las clases de los objectos.
// - add() -> Añade una clase.
const title = document.querySelector(".title");
title.classList.add("big");
// - remove() -> Remueve una clase.
title.classList.remove("big");
// - item() -> Devuelve la clase del indice especificado.
document.write(title.classList.item(0) + "<br><br>");
// - contains() -> Verifica si ese elemento posee o no, la clase especificada.
document.write(title.classList.contains("title"));
// - replace() -> Reemplaza una clase por otra.
title.classList.replace("title", "big");
// - toggle() -> Si no tiene la clase especificada, la agrega, si ya la tiene la
// elimina.
title.classList.toggle("title", true);
title.classList.toggle("big", true);
title.classList.toggle("big");
title.classList.toggle("big", true);