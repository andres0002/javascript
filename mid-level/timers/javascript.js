// Timers -> Es algo que nos permite trabajar con tiempos.

// ________________Timers_________________
// - setTimeout() -> Sirve para crear un temporizador, en el primer
//parametro se pasa la función y en el segundo parametro en cuanto
// tiempo se ejecutara la función (ms) y solo se ejecuta una vez.
const temporizadorTimeout = setTimeout(() => {
    console.log("setTimeout()...");
}, 2000);
// - setInterval() -> Sirve para crear un temporizador, en el primer
//parametro se pasa la función y en el segundo parametro en cuanto
// tiempo se ejecutara la función (ms) y se ejecutara indefinidamente.
const temporizadorInterval = setInterval(() => {
    console.log("setInterval()...");
}, 2000);
// - clearTimeout() -> Sirve para eliminar el temporizador de type
// timeout.
clearTimeout(temporizadorTimeout);
// - crearInterval() -> Sirve para eliminar el temporizador de type
// interval.
clearInterval(temporizadorInterval);