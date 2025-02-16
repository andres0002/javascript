// Arrays asociativos -> Son objetos, son mas parecidos a lo que es el formato json y
// se usan como clave valor.

// Declaración de array asociativo.
let pc = {
    name: "WARJPC",
    procesador: "Intel Core i5",
    ram: "20",
    espacio: "1TB"
};

// Cómo aceder a los datos.
let name = pc.name;
let procesador = pc["procesador"];
let ram = pc.ram;
let espacio = pc["espacio"];

let frase = `El nombre del PC: <strong>${name}</strong>.<br>
            El procesador del PC: <strong>${procesador}</strong>.<br>
            La ram del PC: <strong>${ram}</strong>.<br>
            El espacio del PC: <strong>${espacio}</strong>.
`;

document.write(frase);