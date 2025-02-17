// C) Se consiguió el detector de mentiras más certero jámas creado con 100% de
// precisión este detector esta asociado a un programa en JavaScript que devuelve un
// dato asociado a la culpabilidad del sospechoso devuelve uno en caso de que esté
// mintiendo, devuelve dos en caso de que no lo este haciendo y devuelve tres en caso
// de indecición. Mientras tanto en el barrio sucedió un asesinato y habian tres
// sospechosos y como era de esperarse cofla era uno de ellos ya que fue acusado de
// destrozar un local el día anterior, la policia se lo llevo a la comisaría para
// utilizar en él el detector de mentiras.

// - Si el sospechoso miente, le da una descarga.
// - Si el sospechoso no miente, no le hace nada.
// - Si el detector de mentiras no se decide, se debe aclarar que la pregunta
// debe ser más clara.

let sospechoso1 = prompt("Sospechoso 1 ¿mintió?");
let sospechoso2 = prompt("Sospechoso 2 ¿mintió?");
let cofla = prompt("Sospechoso 3 ¿mintió?");


if (sospechoso1 == 1) {
	alert("Sospechoso 1 mintió, darle descarga electrica.")
} else if (sospechoso1 == 2) {
	alert("Sospechoso 1 no mintió, no darle la descarga.")
} else {
	alert("No se si sospechoso 1 minitó, probemos de vuelta.")
}


if (sospechoso2 == 1) {
	alert("Sospechoso 2 mintió, darle descarga electrica.")
} else if (sospechoso2 == 2) {
	alert("Sospechoso 2 no mintió, no darle la descarga.")
} else {
	alert("No se si sospechoso 2 mintió, probemos de vuelta.")
}


if (cofla == 1) {
	alert("Cofla mintió, darle descarga electrica.")
} else if (cofla == 2) {
	alert("Cofla no mintió, no darle la descarga.")
} else {
	alert("No se si cofla mintió, probemos de vuelta.")
}