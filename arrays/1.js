// Ejemplo: manejo básico de Arrays

let frutas = ["Manzana", "Pera", "Uva"];

console.log("Lista inicial:", frutas);
console.log("Primer elemento:", frutas[0]);
console.log("Cantidad de frutas:", frutas.length);

frutas.push("Mango");
console.log("Después de agregar Mango:", frutas);

frutas.pop();
console.log("Después de eliminar el último elemento:", frutas);

console.log("¿Está Pera en la lista?", frutas.includes("Pera"));
console.log("Posición de Uva:", frutas.indexOf("Uva"));