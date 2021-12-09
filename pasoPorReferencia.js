/****************************************************************/
//paso por referencia, cdo usamos metodos y objetos en JS
/****************************************************************/

const persona = { //atributo.. luego con : asigno valor a la prop
    nombre: 'Juan',
    apellido: 'Juarez'
}

//agrego por p1. atributos o metodos al obj
function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Fuentes';
}

//paso por ref
//cdo paso el metodo cambiarValorObjeto paso la ref a la var p1, entonces
//el parametro p1 apunta al objeto persona accede a sus atributos  nombre y apellido
cambiarValorObjeto(persona);
console.log(persona);   