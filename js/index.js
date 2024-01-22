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


//CONTROL DE FLUJOS
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
let precio = prompt("Ingresar el precio");
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

/*
let nombreIngresadoo = prompt("Ingresar nombre");
if ((nombreIngresadoo !="") && ((nombreIngresadoo == "MARTIN") || (nombreIngresadoo == "martin"))){
    alert("Hola Martin");
}else {
    alert("Error: Ingresar nombre valido");
}
*/


//CICLOS E ITERACIONES
//operador de incremento

let x = 5;
let y = ++x;
console.log(y);

//FOR
//desde 0 al 3

for (let i = 0; i < 4; i ++) {
    alert (i);
}

const NUMERO =5;
for (let i =0; i <=10; i ++){
    const RESULTADO = NUMERO * i;
    console.log(NUMERO + " x " + i + "=" +RESULTADO);
}

/*
// desde 1 al 10
for (let i = 1; i <= 10; i ++) {
    alert (i);
}
//tabla de multiplicar un numero
//solicitamos un valor al usuario
let ingresarNumero = parseInt (prompt("Ingresar Numero"));
//en cada rep, calculamos el numero ingresado x el num  de rep (i)
for (let i = 1; i <= 10; i ++){
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}

//turnos
for (let i = 1; i <= 20; i ++) {
    let ingresarNombre = prompt("Ingresar nombre");
    alert(" Turno Nª "+i+" Nombre: "+ingresarNombre);
}

//break
for (let i = 1; i <= 10; i ++) {
    if(i == 5){
        break;
    }
    alert(i);
}
//continue
for (let i = 1; i <= 10; i ++) {
    if(i == 5){
        continue;
    }
    alert(i);
}
*/

//while (ciclos condicionales)
/*
let repetir = true;
while(repetir) {
    console.log("Al infinito y...¡Más allá!");
}
*/

//while ESC
/*
let entrada = prompt("Ingresar un dato");
while(entrada != "ESC"){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar otro dato");
}
*/

//do...while
let repetir = false;
do{
    console.log("¡Solo una vez!");
}while(repetir)

/*
let numeros = 0;
do{
    numeros = prompt("Ingresar numero");
    console.log(numeros);
}while(parseInt(numeros));
*/

//switch (manera ordenada)
//switch y while
/*
let entrada = ("Ingresar un nombre");
while(entrada != "ESC" ) {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
}
*/

//FUNCIONES
/*
function saludar() {
    console.log("¡Hola estudiantes!");
}
//solicitar un nombre
let nombreIngresado = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)

//si queremos repetir 2 veces, copiar y pegar
nombreIngresado = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)
nombreIngresado = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)

function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
}


//parámetros
conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”
*/

//ejemplo: sumar y mostrar
/*
let resultado = 0;

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}

function mostrar(mensaje) {
    console.log(mensaje)
}

sumar(6, 3);            
mostrar(resultado);
*/

//resultado de una funcion "return"
/*
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
*/
/*
let resultado = sumar(5, 8);

console.log(resultado)  // ⇒ 13
*/

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));

//VARIABLES GLOBALES
let resultado = 0
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado);

//variables locales
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado);

//variables locales y globales
let nombree = "John Doe" // variable global

function saludar() {
    let nombree = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombree)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder”

//scope
function sumar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

function restar(num1, num2) {
    let resultado = num1 - num2
    return resultado
}

//funciones anónimas
//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const sumaa  = function (a, b) { return a + b }
const restaa = function (a, b) { return a - b }
console.log( sumaa(15,20) )
console.log( restaa(15,5) )

//funciones flecha
const sumas  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const restas = (a, b) =>  a - b ;
console.log( sumas(15,20) )
console.log( restas(20,5) )

//por ejemplo: calcular precio
const sumass  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const restass = (a, b) =>  a - b ;
console.log( sumass(15,20) )
console.log( restass(20,5) )