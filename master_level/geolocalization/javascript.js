// ______________Geolocalización__________________
"use strict";
const geolocation = navigator.geolocation;
// - getCurrentPosition() -> Obtiene todos los datos de la position
// actual.
//  * Parametros (position (obligatirio), error, options) -> .
const position = (position) => {
    console.log(position);
    console.log(position.coords);
}

const error = (error) => {
    console.log(error);
}

//  * Propiedades de option (enableHightAccuracy, timeout, maximumAge) -> .
const options = {
    maximumAge: 0, // Cuanto tiempo quiere que guarde la position en cache.
    timeout: 3000, // Cuanto tiempo quiere que se tarde en devolver la data.
    enableHightAccuracy: true // Para activar la alta presición.
}
geolocation.getCurrentPosition(position, error, options);
// - watchPosition() -> Ver si la position cambia, en tiampo real.
geolocation.watchPosition(position, error, options);
// - clearWatch() -> Para limpiar la position.
const watchId = geolocation.watchPosition(position, error, options);
console.log(watchId);
geolocation.clearWatch(watchId);