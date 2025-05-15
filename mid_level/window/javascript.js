// window -> Es un objeto de JavaScript, es el objeto de jerarquia mas alta.

// - Hereda las propiedades de EventTarget.
// - open() -> Carga un recurso en el contexto de un nuevo navegador o uno que ya
// existe.
// let youtubeUrl = "https://youtube.com";
// let vWindow = window.open(youtubeUrl);
// - close() -> Cierra la ventana actual, o la ventana en al que se llamó.
// vWindow.close();
// - closed -> Indica si la ventana referenciada está cerrada o no.
// document.write(vWindow.closed);
// - stop() -> Detiene la carga de recursos en el contexto de navegación actual.
// window.stop();
// - alert() -> Muestra un cadro de alerta con el contenido especificado y un botón
// aceptar.
// window.alert("Hello Wolrd....");
// - print() -> Abre el cuadro de diálogo imprimer para imprimir el documenton actual.
// window.print();
// - prompt() -> Abre un cuadro de diálogo con un mensaje que solicita al user un dato
// (string).
// document.write(window.prompt("Digita algo...."));
// - confirm() -> Abre un cuadro de diálogo con un mensaje y dos botones: aceptar y
// cancelar.
// window.confirm("Acepta....")
//     ? document.write("Super...")
//     : document.write("Que mal.....");
// - screen -> Devuelve una referencia al objeto de pantalla asociado con la ventana.
// const screen = window.screen;
// console.log(screen);
// document.write(screen.availWidth);
// - screenLeft -> Devuelve la distancia horizontal entre el borde izquierdo del
// navegador y el boder izquierdo de la pantalla.
// const screenLeft = window.screenLeft;
// console.log(screenLeft);
// document.write(screenLeft);
// - screenTop -> Devuelve la distancia vertical entre el borde superior del navegador
// y el borde superior de la pantalla.
// const screenTop = window.screenTop;
// console.log(screenTop);
// document.write(screenTop);
// - scrollX -> Devuelve el número de pixeles en el que el documento se desplazo
// horizontalmente.
// const scrollX = window.scrollX;
// console.log(scrollX);
// document.write(scrollX + "<br>");
// - scrollY -> Devuelve el número de pixeles en el que el documento se desplazo
// verticalmente.
// const scrollY = window.scrollY;
// console.log(scrollY);
// document.write(scrollY);
// - scroll() -> Desplaza la ventana a un lugar particular en el document. (con
// options y con positions).
// window.scroll(10, 10);
// window.scrollTo(10, 10);
// - resizeBy() -> Cambia el tamaño de la ventana actual en una cantidad especifica.
// const ventana = open("https://youtube.com");
// ventana.resizeBy(100, 200);
// - resizeTo() -> Redimenciana dinámicamente la ventana.
// ventana.resizeTo(100, 200);
// - moveBy() -> Mueve la ventana en una ubicación relativa.
// ventana.moveBy(100, 200);
// - moveTo() -> Mueve la ventana en una ubicación absoluta.
// ventana.moveTo(0, 200);