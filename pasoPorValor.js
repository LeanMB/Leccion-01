//paso por valor y paso por referencia.

//Tipos primitivos: ni atributos ni metodos asociados.

//paso por valor, pasa copia del valor, no modifica el mismo
let x=10;

function cambiarValor(a){
    a=20;
    return;
}

cambiarValor(x); //le paso 10
console.log(x);
console.log(a); //cdo ejecuta el metodo la var se destruye, deja de existir por eso dice no def.













