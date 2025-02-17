// B) Cofla no está satisfecho con los celulares así que decide ir a la sección de
// celulares de gama alta, donde va a poder encontrar los celulares mas caros del
// del lugar, así que al entrar vió dos celulares que le encantarón, estos 2
// celulares gama alta pueden hacer todo lo que podían hacer los 3 anteriores pero
// tienen mejores caracteristicas y además pueden grabar en camara lenta, tiene
// reconocimiento facial y una camara extra.

// - Implementar todas estas cualidades en los celulares de alta gama.

class Celular {
    constructor (marca, color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = true;
    }
    showInfo () {
        document.write(`El celular de marca: <strong>${this.marca}</strong>, es de color: <strong>${this.color}</strong>, el peso es de: <strong>${this.peso}</strong>, la resolución de pantalla es de: <strong>${this.resolucionPantalla}</strong>, la resolución de camara es de: <strong>${this.resolucionCamara}</strong> y la memoria es de: <strong>${this.memoriaRam}</strong>.<br>`);
    }
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
        document.write(`El celular: <strong>${this.marca}</strong> puede <strong>grabar</strong> video en una resolución de camara de <strong>${this.resolucionCamara}</strong>.<br>`);
    }
}

class CelularGamaAlta extends Celular {
    constructor (marca, color, peso, resolucionPantalla, resolucionCamara, memoriaRam, camaraExtra) {
        super(marca, color, peso, resolucionPantalla, resolucionCamara, memoriaRam);
        this.camaraExtra = camaraExtra;
    }
    showInfo () {
        document.write(`El celular de marca: <strong>${this.marca}</strong>, es de color: <strong>${this.color}</strong>, el peso es de: <strong>${this.peso}</strong>, la resolución de pantalla es de: <strong>${this.resolucionPantalla}</strong>, la resolución de camara es de: <strong>${this.resolucionCamara}</strong>, la memoria es de: <strong>${this.memoriaRam}</strong> y la camara extra es de: <strong>${this.camaraExtra}</strong>.<br>`);
    }
    grabarVideoLento () {
        document.write("Estas usando <strong>camara lenta</strong>...<br>");
    }
    reconocimientoFacial () {
        document.write("Vamos a iniciar un <strong>reconocimiento facial</strong>...<br><br>");
    }
}

// Celulares gama alta.
const samsung = new CelularGamaAlta("samsung", "negro", "10 gm", "400 * 600", "SD", "16 GB", "HD");
const iphone = new CelularGamaAlta("iphone", "blanco", "20 gm", "300 * 500", "HD", "8 GB", "FHD");

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
samsung.grabarVideoLento();
samsung.reconocimientoFacial();

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
iphone.grabarVideoLento();
iphone.reconocimientoFacial();