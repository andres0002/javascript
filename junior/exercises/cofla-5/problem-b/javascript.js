// B) Cofla está sufriendo un poco... ya que, a pesar de que cree contar con el 90% de
// asistencias y tener un promedio mayor a 7/10, no cree poder entregar el 75% de los
// trabajos practicos ya que necesita dividir las tareas que hará semanalmente, Cofla
// debe, trabajar 8 horas por día durante 2 semanas entre las cuales tiene que:
// * 24 horas estudiar.
// * 24 horas trabajos practicos.
// * 56 horas trabajar.
// * 8 horas labores de la casa.

// - Organiza las actividades diarias.
// - Utiliza la consola para organizar todo.
// - El tiempo por tarea no debe superar las 4 horas.

// Data importante:

// ((24/14)*60) -> 103 min estudiar, restare 3 min para descaso -> (100) min.
// ((24/14)*60) -> 103 min trabajos practicos, restare 3 min para descaso -> (100) min.
// ((56/14)*60) -> (240) min trabajar.
// ((8/14)*60) -> 34 min por día para lobores de la casa, restare 4 min para descaso
// -> (30) min.
// (3+3+4) -> (10) min descanso.

// tP = trabajos practicos.


let trabajo = "240 minutos de trabajo.";
let estudio = "100 minutos de estudio.";
let tP = "100 minutos de trabajos prácticos.";
let homeWork = "30 minutos de labores de la casa.";
let descanso = "10 minutos de descanso.";

const tareas = () => {
    console.clear();
    console.log("......Start Tareas......");
    for (let i = 0; i < 14; i++) {
        if (i == 0) {
            console.groupCollapsed("......Semana 1......")
        }
        if (i == 7) {
            console.groupEnd();
            console.groupCollapsed("......Semana 2......")
        }
        console.groupCollapsed(`......Día ${i+1}......`);
        console.log(homeWork);
        console.log(trabajo);
        console.log(descanso);
        console.log(estudio);
        console.log(tP);
        console.groupEnd();
    }
    console.groupEnd();
    console.log("......End Tareas......");
}

tareas();
tareas();