/* let persona = {
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

 
//accedo a prop del obj
console.log(persona.email);

//otra forma - la prop como array debe ser text/string
//asi se puede recorrer todo con un FOR IN
console.log(persona['email']);

//FOR IN
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
} 
*/

//como agregar prop al nuevo obj y eliminar
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
//agrego prop y cambio por otro
persona.tel = '555444456'
persona.tel = '44444444' 

console.log(persona);

//DELTE: se borra tanto propiedad como valor asociado

delete persona.tel;
//la 1era tiene la prop, la 2da no.
console.log(persona);

