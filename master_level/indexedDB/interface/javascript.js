// ________________IndexedDB + Interface________________
const inputName = document.getElementById("name");
const btnAdd = document.getElementById("btnAdd");
const names = document.querySelector(".names");

const IDBRequest = indexedDB.open("DBTest");
console.log(IDBRequest);
IDBRequest.addEventListener("success", () => {
    console.log("Todo Ok...");
    readObjs();
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

btnAdd.addEventListener("click", () => {
    let name = inputName.value;
    if (name.length > 0) {
        if (document.querySelector(".btnUpdateChange") != undefined) {
            let vConfirm = confirm("Hay names sin guardar: ¿Quieres continuar?...");
            if (vConfirm) {
                addObj({name});
                readObjs();
                inputName.value = "";
            }
        } else {
            addObj({name});
            readObjs();
            inputName.value = "";
        }
    } else {
        alert("Debe ingresar un name...");
    }
})

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
    const fragment = document.createDocumentFragment();
    names.innerHTML = "";
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            // console.log(cursor.result.value);
            let element = nameHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(element);
            cursor.result.continue();
        } else {
            console.log("Todos los datos fueron leidos...");
            names.appendChild(fragment);
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

const nameHTML = (key, obj) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const btnUpdate = document.createElement("button");
    const btnDelete = document.createElement("button");

    div.classList.add("name");
    options.classList.add("options");
    btnUpdate.classList.add("btnUpdate");
    btnDelete.classList.add("btnDelete");

    h2.textContent = obj.name;
    h2.setAttribute("contenteditable", true);
    h2.setAttribute("spellcheck", false);
    btnUpdate.textContent = "UPDATE";
    btnDelete.textContent = "DELETE";

    options.appendChild(btnUpdate);
    options.appendChild(btnDelete);

    div.appendChild(h2);
    div.appendChild(options);

    h2.addEventListener("keyup", () => {
        btnUpdate.classList.replace("btnUpdate", "btnUpdateChange");
    })

    btnUpdate.addEventListener("click", () => {
        if (btnUpdate.className == "btnUpdateChange") {
            updateObj(key, {name: h2.textContent});
            btnUpdate.classList.replace("btnUpdateChange", "btnUpdate");
        }
    })

    btnDelete.addEventListener("click", () => {
        let vConfirm = confirm(`Desea eliminar el name: "${h2.textContent}".`);
        vConfirm
            ? (
                deleteObj(key),
                names.removeChild(div),
                // setTimeout(() => {
                //     alert(`Name: "${h2.textContent}" eliminado correctamente...`);
                // }, 500)
                alert(`Name: "${h2.textContent}" eliminado correctamente...`)
            )
            : alert("Acción cancelada...");
    })

    return div;
}