// C) Cofla ya tiene su nuevo celular y ahora está mirando las apps del
// Play Store ya que quiere jugar juegos que sean muy populares, que tengan
// buena puntuación y que pesen poco, pero las 7 apps que llamaron su atención
// son un tanto similares y sabe que si se descarga todas, probablemente juegue
// con todas, pero él se va a descargar solo 2 para no tener tantas perdidas
// innecesarias de tiempo jugando juegos con su celular, pero el problema
// viene cuando no puede decidirse cual de todas estas apps es la que va a
// descargar.

// - Crear un sistema que le ayude a Cofla a decidir cual app descargar.
// - La información de los instaladores debe contener la cantidad de
// descargas, la puntuación y el peso.
// - Las apps se deben poder instalar, abrir, cerrar, y desinstalar.

class App {
    // Solución segunto punto.
    constructor (name, descargas, puntuacion, peso) {
        this.name = name;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    // Show Info
    showInfo() {
        document.write(`La app: <strong>${this.name}</strong>:<br>La cantidad de descargas es de: <strong>${this.descargas}</strong>, la puntuación es de: <strong>${this.puntuacion}</strong>, el peso de la app es de: <strong>${this.peso}</strong>.<br>`);
    }
    // Solución tercer punto.
    set instalar (instalada) {
        if (this.instalada == false) {
            this.instalada = instalada;
            document.write(`Instalando la app: <strong>${this.name}</strong>.<br>`);
        }
    }
    set abrir (abrir) {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = abrir;
            document.write(`Abriendo la app: <strong>${this.name}</strong>.<br>`);
        }
    }
    set cerrar (cerrar) {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = cerrar;
            document.write(`Cerrando la app: <strong>${this.name}</strong>.<br>`);
        }
    }
    set desinstalar (desinstalar) {
        if (this.instalada == true) {
            this.instalada = desinstalar;
            document.write(`Desinstalando la app: <strong>${this.name}</strong>.<br><br>`);
        }
    }
}

// Apps
const pubgMobile = new App("Pubg Mobile", "1000", "5", "5 GB");
const freeFire = new App("Free Fire", "500", "3", "2 GB");

// Funtion
function showData(objeect) {
    objeect.showInfo();
    if  (objeect.instalada) {
        objeect.desinstalar = false;
    } else {
        objeect.instalar = true;
    }
    if  (objeect.iniciada) {
        objeect.cerrar = false;
    } else {
        objeect.abrir = true;
    }
    if  (objeect.iniciada) {
        objeect.cerrar = false;
    } else {
        objeect.abrir = true;
    }
    if  (objeect.instalada) {
        objeect.desinstalar = false;
    } else {
        objeect.instalar = true;
    }
}

// Acciones pubgMobile
showData(pubgMobile);

// Acciones freeFire
showData(freeFire);