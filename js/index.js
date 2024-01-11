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


//si condicion
if (true){
    console.log("vas a ver este mensaje");
}

if (false){
    console.log("no vas a ver este mensaje");
}

let unNumero = 5

//con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

//con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){
    console.log("no vas a ver este mensaje");
}

//if else
let unColor = "Rojo"

if (unColor == "Rojo"){
    console.log("el color es Rojo");
}else{
    console.log("el color NO es Rojo");
}

let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else{
    alert("Nombre de usuario ingresado " + nombreUsuario);
}

//condiciones anidadas
let precio = 100.5;
if (precio < 20) {
    alert ("el precio es menor que 20");
}
else if(precio < 50) {
    alert("el precio es menor que 50");
}
else if (precio < 100) {
    alert("el precio es menor que 100");
}
else {
    alert("el precio es mayor que 100");
}


//variables boolean
let number = 10;
let esMayor5 = (number > 5); //su valor sera ture
if ("es valida") {

    alert("es boolean true");
}

//operadores logicos
/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Nombre: "+nombreIngresado +"Apellido: "+apellidoIngresado);
}else {
    alert("Error: Ingresar nombre y apellido");
}
*/

/*
let nombreIngresado = prompt("Ingresar nombre");
if ((nombreIngresado == "MARTIN") || (nombreIngresado == "martin")) {
    alert("El nombre ingresado es Martin");
}else {
    alert("El nombre ingresado NO ES Martin")
}
*/

/*let nombreIngresado = prompt("Ingresar nombre");
if ((nombreIngresado !="") && (nombreIngresado == "MARTIN") || (nombreIngresado == "martin")){
    alert("Hola Martin");
}else {
    alert("Error: Ingresar nombre valido");
}
*/

let nombreIngresadoo = prompt("Ingresar nombre");
if ((nombreIngresadoo !="") && ((nombreIngresadoo == "MARTIN") || (nombreIngresadoo == "martin"))){
    alert("Hola Martin");
}else {
    alert("Error: Ingresar nombre valido");
}