//imprimir objetos en JS
//concatenar cada valor de cada propiedad

let persona = {
    nombre: 'Leandro',
    apellido: 'Barwashis',
    email: 'lbarbi@sarasa.com',
    edad: 28,
    
    //metodo:
    nombreCompleto: function(){
        //this es un apuntador al obj q se trabaja en este momento
        return this.apellido + ', ' + this.nombre;
    }    
}

console.log(persona.nombre + ', ' + persona.apellido + ', ' + persona.edad);

//for in
//    nombre promp. in nombre obj
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//otra, regresa como arreglo
let personaArray = Object.values(persona);
console.log(personaArray);


//convierte objeto a cadena -
//JSON: utuliza notacion de prop y valor, stringify: cada prop con valor convierte en string
let personaString = JSON.stringify(persona);
console.log(personaString)