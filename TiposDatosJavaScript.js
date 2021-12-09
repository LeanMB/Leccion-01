/*
tipos de datos
en JavaScript
*/

//string   
var nombre = "Rocio";
console.log(nombre);
//se dice q las variables son dinamicas porq se pueden modificar
// y no se indican en codigo.
//typeof me indica el tipo de valor q devuelve la variable
var nombre = 10;
console.log(typeof nombre)

//numerico
var numero = 1000;
console.log (numero);

//Tipo de dato object
//cada prop se separa por coma, para signar valor con : en los objetos
var objeto = {
    nombre : "Leandro",
    apellido : "Gonzalez",
    telefono : "0303456"
}
console.log(objeto);

//Boolean, (true, false)
var bandera = true;
console.log(bandera);

//FUNCTION es a su vez n tipo de dato
function miFuncion (){};
console.log(miFuncion);

//Symbol - 
var simbolo = Symbol ("mi simbolo");
console.log(simbolo)

//las clases son funciones
//atributos a traves de constructor
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Undefined.. es un valor y un tipo de dato
var x;
console.log(x);
x

//null = ausencia de valor
//tipo de dato es objetc... typeof y es object.
var y = null;
console.log(y);

//arreglos son de tipo object

var autos = ["BWM","AUDI","Volvo"];
console.log(autos);