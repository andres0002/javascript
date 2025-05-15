// ____________Sentencia Switch___________
// - Sintaxis y clausula -> Recibe un valor (expretion) el cual se
// compara con cada uno de los cases.
// - break -> Rompe el flujo.
// - default -> Es como el else de los ifs se hace si no hay nunguna
// coincidencia.

let expretion = "Manzana";

switch (expretion) {
    case "Banana":
        console.log("Banana...");
        break;
    case "Pera":
        console.log("Pera...");
        break;
    case "Manzana":
        console.log("Manzana...");
        break;
    default:
        console.log("No se encontro ninguna coincidencia...")
        break;
}