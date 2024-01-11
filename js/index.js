//alert('Hola mundo!');

/* operaciones básicas 

let numeroA = 5;
let numeroB = 3;
const NUMEROC = 8;

let resultadoSuma = numeroA + numeroB;
let resultadoResta = numeroA - numeroB;
let resultadoProducto = numeroB * NUMEROC;

let textoA = "CODER";
let textoB ="HOUSE";
const BLANCO = " ";

let resultadoA = textoA + textoB;
let resultadoB = textoB + 1;
let resultadoC = textoA + BLANCO + textoB;
*/

/* PROMPT 

let nombreIngresado = prompt("Ingrese su nombre");
*/

/*
CONSOLA

console.log("Mensaje de prueba");
let nombre = "Martín"
console.log(nombre)
*/


/* ALERT 

alert('Hola Martín!');
*/

let numero = 15; //number
let cadenaDeTexto = "MARTIN PALONSKY"; //string
let booleanos = true; //boolean




const NOMBRE_APELLIDO = "MARTIN PALONSKY";

//declaracion

//estoy reservando el nombre de la variable, y no le asignamos un valor
//despues nosotros podemos inicianizarlo cuando queremos, en el const no se puede resignar, en el let, si
//let edad;

//inicializacion, proceso en el cual asignamos el valor inical de la variable
let edad;

edad = 25;

//las variables siempre debe tener asignada un nombre que haga referencia al dato almacenado.

//console.log

/*
let numeroUno = 1;
console.log(numeroUno);
*/

let numeroUno = 4;
let numeroDos = 5;

let suma = numeroUno + numeroDos;
console.log(suma);

let resta = numeroDos - numeroUno;
console.log(resta);

let producto = numeroUno * numeroDos;
console.log(producto);

let division = numeroDos / numeroUno;
console.log(division);

let resto = numeroDos % numeroUno;
console.log(resto);

//concatenacion

//let nombre = "Martin";
//let apellido = "Palonsky";

//let nombreCompleto = nombre + " " + apellido;
//console.log(nombreCompleto);


//prompt, consola y alert

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

let nombreCompleto = nombre + " " + apellido;

console.log("Hola, ¿Como estas? ", nombreCompleto);

alert("Hola ¿Como estas? "+ nombreCompleto);
