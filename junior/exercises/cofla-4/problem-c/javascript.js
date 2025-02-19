// C) Cofla ya vió las 12 materias y se decidió en cual se va a inscribir así que en
// tres días lo hara, el problema es que se rompió el sistema de inscripciones.

// - Crear una función para preguntarle a Cofla en que materia se quiere inscribir.
// - Si ya hay 20 alumnos inscriptos en la materia negarle la inscripción.
// - Si hay menos de 20 alumons inscriptos, inscribir a Cofla y añadirlo a la lista
// de alumnos.

let materias = {
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

const inscribir = (alumno, materia) => {
    let alumnos = materias[materia]["alumnos"];
    if (alumnos.length >= 20) {
        document.write(`Lo sentimos <strong>${alumno}</strong> ya no hay cupos para la materia: <strong>${materia}</strong>.<br><br>`)
    } else if (materias[materia]["alumnos"].includes(alumno)) {
        document.write(`<strong>${alumno.substring(0, 1).toUpperCase()+alumno.substring(1)}</strong> ya estas inscripto en la materia: <strong>${materia}</strong>.<br><br>`);
    } else {
        materias[materia]["alumnos"].push(alumno);
        document.write(`Felicidades <strong>${alumno}</strong> te has inscripcito a <strong>${materia}</strong> exitosamente....<br><br>`);
    }
}

// document.write(materias["fisica"]["alumnos"] + "<br>");
// console.log(materias["fisica"]["alumnos"]);
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");
// document.write("<br>" + materias["fisica"]["alumnos"]);
// console.log(materias["fisica"]["alumnos"]);