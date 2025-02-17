// B) Cofla vuelve de la comisaría exausto y por lo cansado que estaba se fue a dormir...
// al otro día comienza las clases del ciclo básico de la universidad (porque cofla
// quiere ser programador y se inscribió en la facultad de ingeniería para estudiar
// desarrollo de software).
// En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la
// faculta:
// Se rimpió el sistema de resgistro de asistencias y durante los próximos 30 días no se
// podrán hacer registros de datos de nungún tipo, por ende las clases no podrán comenzar
// hasta que esto este solucionado.

// - Crear mini-sisstema que nos permita registrar los alumnos que están presentes (P)
// y ausentes (A) en la clase.
// - Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total
// de presentes y ausentes).
// - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar
// que está reprobado.

// Solución primer punto.
let cantidadAlumnos = prompt("¿Cúantos alumnos son?");
cantidadAlumnos = parseInt(cantidadAlumnos);
let alumnosTotales = [];


for (let i = 0; i < cantidadAlumnos; i++) {
    alumnosTotales[i] = [prompt(`Ingrese el nombre del alumno ${i + 1}.`), 0]
}

const tomarAsistencia = (nameAlumno, indexAlunmo, day) => {
    let asistencia = prompt(`
        El alumno ${nameAlumno}:
        P -> Presente.
        A -> Ausente.
        Digite P o A si el alumno asistio o no a clase el día ${day + 1}.
    `);
    if (asistencia.toUpperCase() == "P") {
        alumnosTotales[indexAlunmo][1]++;
    }
}

for (alumno in alumnosTotales) {
    for (let i = 0; i < 30; i++) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno, i);
    }
}

// Solución segundo punto.
for (alumno in alumnosTotales) {
    let result = `
        ----------------------------------------------------------------------------------
        Nombre del alumno: ${alumnosTotales[alumno][0]}.<br>
        ______Días totales presente: <strong>${alumnosTotales[alumno][1]}</strong>.<br>
        ______Días totales ausente: <strong>${30 - alumnosTotales[alumno][1]}</strong>.
    `;
    // Solución tercer punto.
    if ((30 - alumnosTotales[alumno][1]) > 18) {
        result += "<br><strong style='color: red;'>Reprobad@ por inasistencias...</strong>"
    }

    result += `
        <br>
        ----------------------------------------------------------------------------------
        <br>
    `;

    document.write(result);
}