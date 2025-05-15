// A) Cofla esta en su último año y necesita recuperar todas sus notas
// para que le puedan decir si efectivamente pasó al último semestre,
// de ser así... Cofla ya estaría a un solo paso de finalizar su
// carrera como ingeniero! pero, hay un problema: estas notas están
// almacenadas en otro server.

// - Crear un sistema que almacene toda la información de las materias
// y las muestre en pantalla de forma ordenada.

const materiasHTML = document.querySelector(".materias");

const materiasServer = [
    {
        name: "Fisica 4",
        nota: 7
    },
    {
        name: "Calculo 3",
        nota: 8
    },
    {
        name: "DDBB 3",
        nota: 9
    },
    {
        name: "Matemáticas Discretas 2",
        nota: 7
    },
    {
        name: "Programación 4",
        nota: 8
    },
];

const getMateria = (index) => {
    return new Promise((resolve, reject) => {
        let materia = materiasServer[index];
        if (materia != undefined) setTimeout(() => {resolve(materia)}, Math.random()*1000);
        else reject("No existe la materia...");
    })
}

const getMaterias = async () => {
    let materiasLocal = [];
    for (let i = 0; i < materiasServer.length; i++) {
        materiasLocal[i] = await getMateria(i);
        let newHTMLCode = `
            <div class="materia" ${((materiasServer.length - 1) == i) ? "" : "style='margin-bottom: 10px;'" }>
                <h2 class="nombre">${materiasLocal[i].name}</h2>
                <p class="nota">${materiasLocal[i].nota}</p>
            </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

getMaterias();

// getMateria(0).then(response => console.log(response));
// getMateria(1).then(response => console.log(response));
// getMateria(2).then(response => console.log(response));
// getMateria(3).then(response => console.log(response));
// getMateria(4).then(response => console.log(response));