// _________________Caché___________________
// - Definición -> Es una memoria a corto plazo que se encarga de almacenar info para
// que no se soliciten muchas veces o para ahorrar recursos.
// - Usos -> Para ahorrar recursos.
caches.open("files-static").then((cache) => {
    // - cache.add(url) -> Toma una url, la recupera y agrega el object de respuesta a
    // a la cahcé dada. Esto es funcionalmente equivalente a llamar fetch() y luego
    // usar put() para agregar los resultados a la caché.
    // cache.add("./index.html");
    // - cache.addAll([urls]) -> Toma una matriz de url, las recupera y agrega los
    // objects de respuesta a la caché.
    cache.addAll(["./index.html", "./styles.css", "./javascript.js"]);
    // - cache.match(request) como querySelector -> Devuelve una promesa que se resuelve con la respuesta
    // asociada con la primera solicitud coincidente en el object almacenado.
    // cache.match("./index.html").then((res) => {
    //     console.log(res);
    // });
    // - cache.matchAll(request) como querySelectorAll -> Devuelve una promesa que se
    // resuelve en una matriz de todas las solicitudes coincidentes en el object almacenado.
    // cache.matchAll("./index.html").then((res) => {
    //     console.log(res);
    // });
    // - cache.put(url, response) -> Sirve para hacer modificaciones a la caché, Toma tanto
    // una solicitud como su respuesta y la agrega a la caché.
    // fetch("./index.html").then((res) => {
    //     cache.put("./index.html", res);
    // });
    // - cache.delete(url) -> Encuentra la entrada del object cuya clave es la
    // solicitud, devolviendo una promesa que resuelve en true si el object se encuentra
    // y se elimina una entrada coincidente. Si no se encuentra ninguna entrada, la
    // promesa se resuelve en false.
    // cache.delete("./index.html");
    // - cache.keys(url (optional)) si no se pasa url devuelve todos -> Devuelve una
    // promesa que se resuelve en una matriz de keys de los objects almacenados.
    // cache.keys("./index.html").then((res) => {
    cache.keys().then((res) => {
        console.log(res);
    });
    // console.log(cache);
});