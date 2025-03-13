// ________________IndexedDB + Drag & Drop________________
const IDBRequest = indexedDB.open("DBTest");
console.log(IDBRequest);
IDBRequest.addEventListener("success", () => {
    console.log("Todo Ok...");
    // const db = IDBRequest.result;
    // console.log(db.objectStoreNames);
})
IDBRequest.addEventListener("error", () => {
    console.log("Error al crear o abrir DB...");
})
IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    if (!db.objectStoreNames.contains("names")) {
        db.createObjectStore("names", {
            autoIncrement: true
        });
        console.log("Se creo correctamente...");
    }
})

const addObj = (obj) => {
    const { IDBTransaction, IDBObjectStore } = getIDBData("names", "readwrite");
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