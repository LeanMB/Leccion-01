//Declaración de función de tipo expresion
let sumar = function (a, b){
    console.log(arguments [0]);
    console.log(arguments [1]);
    return a+b

}; //esta como se ejecuta va con ;

resultado = sumar (3,2);

console.log (resultado);

//uso "const" porq no se modifica valor de variable, si uso "let" lo pueden modificar
//con funciones felchas no es necesaria palabra reservada function.. }ampoco se usa {} tampoco se usa return
const sumarFuncionTipoFlecha = (a, b) => a+b;
resultado = sumarFuncionTipoFlecha (3,5);
console.log(resultado);


/*
ejemplo de aplicacion completa.
let resultado = sumarTodo(5,4,13,10,9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //suma = suma + argumento iterado del en el momento
    }
    return suma;
}
*/