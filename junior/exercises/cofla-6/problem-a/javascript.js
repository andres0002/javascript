// A) Cofla se quedó  encerrado en su casa porque se le rompió la llave, pero necesita
// ir urgente a la faculta porque no puede faltar ni una sola vez si quiere aprobar las
// materias que le faltan, ya que esté al limite de asistencias, entonces tiene que
// llamar a un cerrajero y pidirle que le traiga la lave indicada, no hay tiempo
// suficiente para que el cerrajero vea cual es la llave indicada, solo puede traer una
// y probar, entonces Cofla se da cuante que es una llave antigua, por ende no hace
// falta afilarla, solo necesita decirle el modelo de la llave para que el cerrajero
// venga, pero Cofla tiene tanta mala suerte que nisiquiera tiene internet para poder
// buscar, lo que si tiene es a un programador que le hará un sistema para mostrarle
// las llaves posibles y determinar cual es la indicada, hay solo 20 modelos posibles,
// permitir que Cofla seleccione el indicado.

// - Crear un sistema que le muestre a Cofla las 20 llaves posibles, con sus 4 imagenes y
// Cofla debe seleccionar cual llave elegir, una vez que Cofla seleccionó la llave,
// envia los datos al servidor, otro programador se encargará del resto.

const content = document.querySelector(".flex-container");
const btn = document.querySelector(".send-btn");
btn.value = btn.value.toUpperCase();

let fragment = document.createDocumentFragment();

function createKey (imgKey, name, model, price) {
    imgKey = `<img class="img-key" src="./imgs/${imgKey}" alt="img key${imgKey}">`;
    name = `<h2> ${name}</h2>`;
    model = `<h3 id="${model}">${model}</h3>`;
    price = `<p>Price key: <strong>$${price}</strong></p>`;
    return [imgKey, name, model, price];
}

for (let i = 0; i < 20; i++) {
    // Data key...
    let modelRandom = Math.round(Math.random()*100000);
    let priceRandom = Math.round(Math.random()*50);
    let vKey = createKey(
        `llave${i + 1}.png`,
        `Key ${i + 1}`,
        `Model ${modelRandom}`,
        priceRandom
    );
    // Create item
    let div = document.createElement("div");
    div.classList.add(`flex-item`, `item-${i + 1}`);
    div.tabIndex = (i + 1);
    div.addEventListener("click", () => {
        document.querySelector(".key-data").value = modelRandom;
    });
    div.innerHTML = vKey[0] + vKey[1] + vKey[2] + vKey[3];
    fragment.appendChild(div);
}

content.appendChild(fragment);

// document.write(`${key[0]}`, `${key[1]}`, `${key[2]}`);
// console.log(`${key[0]}`, `${key[1]}`, `${key[2]}`);