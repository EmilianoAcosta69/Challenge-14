// Challenge 15  - Punto 1 -//


let numero1 = prompt('Ingrese el primer numero');
let numero2 = prompt('Ingrese el segundo numero');

let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;

document.write ('La Resta del Primer numero con el Segundo es = ' ,resta );
document.write("<br>");
document.write ('La Multiplicacion del Primer numero con el Segundo es = ' ,multiplicacion );

// Punto 2 //

let nombre = prompt ('Ingrese su nombre');
let apellido = prompt ('Ingrese su apellido');

let checkName = nombre.includes('a', 'm');
let checkLastname = apellido.includes('a', 'm');

console.log (checkName);
console.log (checkLastname);

// Punto 3 //

let cadena = 'Pablito-clavo-un-clavito';
let nuevaCadena = cadena.replace(/-/g, " ");
document.write("<br>");
document.write(nuevaCadena);