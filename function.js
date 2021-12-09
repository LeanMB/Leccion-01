/*
//FUNCTION: se reutiliza.
//concepto de Hoisting: la funcion se puede llamar antes o desp de definirla
*/

//argumentos de la funcion dentro de () se separa por coma,
// declaración de la funcíón

/*
function miPrimerFuncion (a, b){
    console.log("suma: " + (a+b));
} //termina con llaves no se usa ; para finalizar


//Llamamos la funcion
miPrimerFuncion(2,3);//termina con ;
*/

//prop llamada argument para saber cuantos usó. -- solo se usa dentro de la funcion
function miPrimerFuncion (a, b){
    console.log(arguments.length);
    return a + b;
}

//llamado de funcion

let resultado = miPrimerFuncion(2,3);
console.log(resultado);

//Declaración de función de tipo expresion
let sumar = function (a, b){return a+b}; //esta como se ejecuta va con ;

resultado = sumar(1,2);

console.log (resultado);

//Funtion selfinvoking -- se llama a si misma

(function(a,b){
    console.log('ejecutando la función ' + (a+b));
})(3,4); //solo se llama esta funcion una sola vez y nunca mas.

//funciones com obj en JS - si bien son func pueden ser obj
//prop llamada argument para saber cuantos usó. -- solo se usa dentro de la funcion
function miPrimerFuncion (a, b){
    console.log(arguments.length);
    return a + b;
}
//tenemos métodos, metodos o func es lo mismo. (metodo toString)
var miPrimerFuncionTexto = miPrimerFuncion.toString();
console.log(miPrimerFuncionTexto)
