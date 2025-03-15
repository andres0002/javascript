// ________________IndexedDB________________
// - Caracteristicas.
//  * Almacena información en el navegador de forma similar al localStorage -> .
//  * Es orientado a objetos -> .
//  * Es asíncrono -> .
//  * Trabaja con eventos del DOM -> .
// - Procedimiento de creación.
//  * Objeto IndexedDB -> Se instancia.
let IDBRequest = indexedDB;
//  * Metodo open() -> Para crear la DB o hacer un solicitud para crearla.
IDBRequest = IDBRequest.open("DBTest");
console.log(IDBRequest);
//  * onupgradeneeded -> Validad si ya esta creada o no la DB.
IDBRequest.addEventListener("upgradeneeded", () => {
    // Si no esta creada.
    console.log("Se creo correctamente...");
})
//  * onsuccess -> Cuando se llama y Ok.
IDBRequest.addEventListener("success", () => {
    console.log("Todo Ok...");
})
//  * onerror -> Cuando se llama y Error.
IDBRequest.addEventListener("error", () => {
    console.log("Error al crear o abrir DB...");
})
// - Crear almacen de objects.
//  * Almacen de objects - concepto -> Arquitectura de almacenamiento de datos
// que sirve para almacenar los datos como objetos.
//  * Metodo createObjectStore() -> Sirve para crear los almacenes de objetos.
IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    db.createObjectStore("names", {
        // autoIncrement -> Sirve para especificar que cada registro va ser identificado
        // con un id unico y no hay necesidad de pasarlo al hacer registros.
        autoIncrement: true
        // keyPaht -> Sirve para especificar con que key se van a identificar
        // los registros mas especifico.
        // keyPath: "valueId"
    });
})
//  * autoIncrement vs keyPath -> El autoIncrement es automatico y el keyPath
// es mas especifico o personalizable.
// - Almacenar objects.
const addObj = (obj) => {
    const db = IDBRequest.result;
//  * Metodo transaction() -> Sirve para indicar si se quiere hacer
// algún cambio en el object.
    // readwrite -> Lectura y escritura.
    // readonly -> Solo lectura.
    const IDBTransaction = db.transaction("names", "readwrite");
//  * IDBTransaction.objectStore() -> Para indicar en que object se
// realizaran los cambios o actions.
    const IDBObjectStore = IDBTransaction.objectStore("names");
//  * IDBObjectStore.add() -> Sirve para adicionar el object
//  que se quiere adicionar.
    IDBObjectStore.add(obj);
    IDBTransaction.addEventListener("complete", () => {
        console.log("Object agregado correctamente...");
    })
}

// add names
// addObj({name: "Pepe"});
// addObj({name: "Andres"});
// addObj({name: "Juan"});
// addObj({name: "Carlos"});
// addObj({name: "Dalto"});
// addObj({name: "Jaime"});
// addObj({name: "Coco"});

const readObjs = () => {
    const { IDBTransaction, IDBObjectStore } = getIDBData("names", "readonly");
    const cursor = IDBObjectStore.openCursor();
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue();
        } else {
            console.log("Todos los datos fueron leidos...");
        }
    })
}

const readObj = (key) => {
    const { IDBTransaction, IDBObjectStore } = getIDBData("names", "readonly");
    const objGet = IDBObjectStore.get(key);
    objGet.onsuccess = () => {
        console.log("Name encontrado: ", objGet.result);
    }
    objGet.onerror = (e) => {
        console.log("Error al obtener name: ", e.target.error);
    }
}

// read objects
// readObj(1);
// readObj(2);
// readObj(3);

const updateObj = (key, obj) => {
    const { IDBTransaction, IDBObjectStore } = getIDBData("names", "readwrite");
    // Si no existe lo agrega.
    IDBObjectStore.put(obj, key);
    IDBTransaction.addEventListener("complete", (e) => {
        console.log("Name modificado correctamente...");
    });
}

// update object
// updateObj(1, {name: "hahahaha"});
// updateObj(1, {name: "Pepe"});

const deleteObj = (key) => {
    const { IDBTransaction, IDBObjectStore } = getIDBData("names", "readwrite");
    IDBObjectStore.delete(key);
    IDBTransaction.addEventListener("complete", (e) => {
        console.log("Name eliminado correctamente...");
    });
}

// delete object
// deleteObj(6);
// deleteObj(7);

const getIDBData = (nameObj, typeTransaction) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction(nameObj, typeTransaction);
    const IDBObjectStore = IDBTransaction.objectStore(nameObj);
    return { IDBTransaction, IDBObjectStore };
}