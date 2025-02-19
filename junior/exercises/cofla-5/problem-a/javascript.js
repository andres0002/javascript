// A) Terminó el primer semestre y Cofla no sabe si aprobará o no las materias, para
// lograrlo necesitará: 
// * Contar con al menos el 90% de asistencia.
// * El promedio por materia debe ser de al menos 7/10.
// * Debe tener al menos el 75% de los trabajos prácticos entregados.

// - Solicitar los datos y decirle si aprueba o reprueba.
// - Mostrar todo esto con colores representativos en consola (ejem: Reprueba en rojo).
// - Todo esto estructurado como tabla.

// Data Importante
// - pTP -> Promedio Trabajos Practicos.
// - cTP -> Cantidad Trabajos Practicos.

const materias = {
    fisica: {
        asistencia: 90,
        pTP: 6,
        cTP: 4
    },
    matematica: {
        asistencia: 84,
        pTP: 8,
        cTP: 4
    },
    logica: {
        asistencia: 92,
        pTP: 8,
        cTP: 4
    },
    quimica: {
        asistencia: 96,
        pTP: 8,
        cTP: 4
    },
    calculo: {
        asistencia: 91,
        pTP: 6,
        cTP: 3
    },
    programacion: {
        asistencia: 79,
        pTP: 7,
        cTP: 4
    },
    biologia: {
        asistencia: 75,
        pTP: 9,
        cTP: 2
    },
    bbdd: {
        asistencia: 98,
        pTP: 9,
        cTP: 1
    },
    algebra: {
        asistencia: 100,
        pTP: 10,
        cTP: 4
    }
};

const aproboConsoleLog = () => {
    for (materia in materias) {
        let asistencia = materias[materia]["asistencia"];
        let pTP = materias[materia]["pTP"];
        let cTP = materias[materia]["cTP"];
        console.log(`%c${materia}:`,"border: 3px solid blue; padding: 10px 20px;");
        if (asistencia >= 90) {
            console.log("   Asis %cAprobado....", "color: green;");
        } else {
            console.log("   Asis %cReprobado....", "color: red;");
        }
        if (pTP >= 7) {
            console.log("   Ptp %cAprobado....", "color: green;");
        } else {
            console.log("   Ptp %cReprobado....", "color: red;");
        }
        if (cTP >= 3) {
            console.log("   Ctp %cAprobado....", "color: green;");
        } else {
            console.log("   Ctp %cReprobado....", "color: red;");
        }
    }
}

aproboConsoleLog();

const aproboConsoleTable = () => {
    for (materia in materias) {
        let asistencia = materias[materia]["asistencia"];
        let pTP = materias[materia]["pTP"];
        let cTP = materias[materia]["cTP"];
        console.table(`%c${materia}:`,"border: 3px solid blue; padding: 10px 20px;");
        if (asistencia >= 90) {
            console.table("   Asis %cAprobado....", "color: green;");
        } else {
            console.table("   Asis %cReprobado....", "color: red;");
        }
        if (pTP >= 7) {
            console.table("   Ptp %cAprobado....", "color: green;");
        } else {
            console.table("   Ptp %cReprobado....", "color: red;");
        }
        if (cTP >= 3) {
            console.table("   Ctp %cAprobado....", "color: green;");
        } else {
            console.table("   Ctp %cReprobado....", "color: red;");
        }
    }
}

// aproboConsoleTable();