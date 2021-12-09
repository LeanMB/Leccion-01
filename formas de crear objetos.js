//distintas formas de crear objetos en JS

function Persona(nombre1, apellido, email){
    this.nombre = nombre1;
    //lado der tengo el atributo definido en la func construc
    //lado izq prop del objeto 
    this.apellido = apellido;
    this.email = email;
    //agrego prop o metodos dentro del constuctor para q lo use todos los objetos
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
};

//sino se pone ingun arg pasa por default lo que se haya asignaco ej: nombre1='juan' devolveria juan en nombre
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Alicia', 'Quintero', 'lq@mail.com');
console.log(madre)

padre.nombre = 'Carlos';
console.log(padre);

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

//var miObjeto = new Object ya no se usa se simplifica asi

let miObjeto = new Object (); // sintaxis mas formal..
let miObjeto2 = {}; //crea nuevo objeto , es la mas recomendable por ser breve

let miCadena1 = new String ('Hola'); //sintaxis mas formal..
let miCadena2 = 'Hola';//lo mas reconedable es la sintaxys simplificada

let miNumero = new Number (1);
let miNumero1 = 1;

let miBoolean = new Boolean (false); //sintaxis mas formal..
let miBoolean2 = false; //lo mas reconedable es la sintaxys simplificada

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function (){}; //notacion simplificada de todos