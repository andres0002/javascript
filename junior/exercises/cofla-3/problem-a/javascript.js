// A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno
// comprarse un nuevo celular.
// De todos los modelos que hay disponibles en esta tienda, a Cofla le llamaron la
// atención 3 celulares especificamente, El problema es que ningun vendedor sabe nada
// al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
// El antes de comprar esos celulares quiere ver las cualidades y comportamientos
// de cada uno para poder comprarlos, ahí entramos nosotros.

// - Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
// - Cada celular debe tener color, peso, resolución de pantalla, resolución de
// camara y memoria ram.
// - Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.

class Celular {
    // Solución segundo punto.
    constructor (marca, color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = true;
    }
    // Solución primer punto.
    showInfo () {
        document.write(`El celular de marca: <strong>${this.marca}</strong>, es de color: <strong>${this.color}</strong>, el peso es de: <strong>${this.peso}</strong>, la resolución de pantalla es de: <strong>${this.resolucionPantalla}</strong>, la resolución de camara es de: <strong>${this.resolucionCamara}</strong> y la memoria es de: <strong>${this.memoriaRam}</strong>.<br>`);
    }
    // Solución tercer punto.
    set prender (encendido) {
        this.encendido = encendido;
        document.write(`El celular: <strong>${this.marca}</strong> se esta <strong>prendiendo</strong>.<br>`);
    }
    set apagar (encendido) {
        this.encendido = encendido;
        document.write(`El celular: <strong>${this.marca}</strong> se esta <strong>apagando</strong>.<br>`);
    }
    reiniciar () {
        if (this.encendido == true) {
            document.write(`El celular: <strong>${this.marca}</strong> se esta <strong>reiniciando</strong>.<br>`);
        } else {
            document.write(`El celular: <strong>${this.marca}</strong> no se puede <strong>reiniciar por que esta apagado</strong>.<br>`);
        }
    }
    tomarFoto () {
        document.write(`El celular: <strong>${this.marca}</strong> puede <strong>tomar foto</strong> en una resolución de camara de <strong>${this.resolucionCamara}</strong>.<br>`);
    }
    grabar () {
        document.write(`El celular: <strong>${this.marca}</strong> puede <strong>grabar</strong> video en una resolución de camara de <strong>${this.resolucionCamara}</strong>.<br><br>`);
    }
}

// Celulares
const samsung = new Celular("samsung", "negro", "10 gm", "400 * 600", "SD", "16 GB");
const iphone = new Celular("iphone", "blanco", "20 gm", "300 * 500", "HD", "8 GB");
const motorola = new Celular("motorola", "gris", "25 gm", "500 * 600", "FHD", "12 GB");

// Solución primer punto.
samsung.showInfo();
if (samsung.encendido == true) {
    samsung.apagar = false;
} else {
    samsung.apagar = true;
}
if (samsung.encendido == true) {
    samsung.apagar = false;
} else {
    samsung.apagar = true;
}
samsung.reiniciar();
samsung.tomarFoto();
samsung.grabar();

iphone.showInfo();
if (iphone.encendido == true) {
    iphone.apagar = false;
} else {
    iphone.prender = true;
}
if (iphone.encendido == true) {
    iphone.apagar = false;
} else {
    iphone.prender = true;
}
iphone.reiniciar();
iphone.tomarFoto();
iphone.grabar();

motorola.showInfo();
if (motorola.encendido == true) {
    motorola.apagar = false;
} else {
    motorola.prender = true;
}
if (motorola.encendido == true) {
    motorola.apagar = false;
} else {
    motorola.prender = true;
}
motorola.reiniciar();
motorola.tomarFoto();
motorola.grabar();
