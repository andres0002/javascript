// B) La faculta de Cofla está por comenzar y ya las 12 materias de la carrera tienen
// asignado un profesor y todos los alumnos que se anotaron en dichas clases, pero
// necesitamos ver esto mas ordenadamente.

// - Crear una función que al pasarle como parametro la matería nos devuelva:
//  * Profesor asignado.
//  * El nombres de todos los alumnos.
// - Crear función que nos indique en cuantas clases está Cofla.
// - Nombrar las clases en las que está y los profesores de cada una.

const materias = {
    fisica: {
        profesor: "carlos",
        alumnos: ["pedro", "juan", "pepito"]
    },
    programacion: {
        profesor: "jose",
        alumnos: ["pedro", "juan", "pepito", "cofla", "maria"]
    },
    logica: {
        profesor: "yeferson",
        alumnos: ["pedro", "pepito", "cofla", "maria"]
    },
    quimica: {
        profesor: "alejandra",
        alumnos: ["pedro", "juan", "pepito", "cofla", "maria"]
    }
};

// Solución primer punto.
const getInfo = (materia) => {
    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    } else {
        return false;
    }
}

const showInfo = (pMateria) => {
    let materia =  getInfo(pMateria);
    if (materia !== false) {
        document.write(`
            Materia: <strong>${materia[1]}</strong>.<br>
            Profesor: <strong>${materia[0].profesor}</strong>.<br>
            Alumnos: <strong>${materia[0].alumnos}</strong>.<br><br>
        `);
    } else {
        document.write("La materia no existe...");
    }
}

showInfo("fisica");
showInfo("programacion");
showInfo("logica");
showInfo("quimica");

// Solución segundo y tercer punto.
const countAlumnoInClass = (searchAlumno) => {
    let count = 0;
    let materiasProfesores = [];
    for (const materia in materias) {
        for (const alumno of materias[materia]["alumnos"]) {
            if (alumno.includes(searchAlumno)) {
                count++;
                materiasProfesores.push(`Materia: ${materia}, Profesor: ${materias[materia]["profesor"]}.<br>`);
            }
        }
    }
    return (count == 0) ? false : [count, materiasProfesores, searchAlumno];
}

const showAcountAlumnoInClass = (pSearchAlumno) => {
    let arrayAlumno = countAlumnoInClass(pSearchAlumno);
    if (arrayAlumno !== false) {
        document.write(`
            El alumno: <strong>${arrayAlumno[2]}</strong>.<br>
            El alumno esta en: <strong>${arrayAlumno[0]}</strong> ${arrayAlumno[0] > 1 ? "clases" : "clase"}.<br>
            ${arrayAlumno[0] > 1 ? "Las clases en las que esta el alumno son:<br>" : "La clase en la que este el alumno es:<br>"} <strong>${arrayAlumno[1].join("")}</strong><br>
        `);
    } else {
        document.write(`El alumno <strong>${pSearchAlumno}</strong> no esta en ninguna clase...<br><br>`);
    }
}

showAcountAlumnoInClass("cofla");
showAcountAlumnoInClass("pedro");
showAcountAlumnoInClass("juan");
showAcountAlumnoInClass("pepito");
showAcountAlumnoInClass("maria");