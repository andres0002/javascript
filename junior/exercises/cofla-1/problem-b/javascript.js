// B) Cofla se enoja y le rompe el local al kiosquero y no compra un carajo y decide darle
// el dinero $3 USD a un sin techo que a su vez compra un priceBoleto de lotería.

// - Si le alcanza para uno, lo compra.
// - Si le alcanza para dos, los compra.
// - Si le alcanza para tres, los compra y le sobra, regala el vuelto.
// - Debe mostrar que compro y el vuelto.

let priceBoleto = 0.9;
let dinero = 3;
let vuelto = 0;

if (dinero/priceBoleto < 0.9) {
    alert("No le alcanza para comprar ni un boleto.")
} else if (dinero/priceBoleto >= 0.9 && dinero/priceBoleto < 1.8) {
	vuelto = dinero - priceBoleto;
	alert(`Compro un boleto y el vuelto es: ${vuelto}.`);
} else if (dinero/priceBoleto >= 1.8 && dinero/priceBoleto < 2.7){
	vuelto = dinero - (priceBoleto*2);
    alert(`Compro dos boletos y el vuelto es: ${vuelto}.`);
} else {
    vuelto = dinero - (priceBoleto*3);
    alert(`Compro tres boletos y el vuelto es: ${vuelto}, y regala el vuelto.`);
}