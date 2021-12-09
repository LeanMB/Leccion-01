//objetos: puede tener propiedades (o atributos) y metodos
//lo q sucede del lado der del = crea obj, con prop apellido, nom, emial, edad y se asigna una ref. en memoria
//esa ref. en memoria es la q se asigna a la var persona.
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

//aca prop o atributos es lo mismo.
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);
//va con parentesis porq tiene q pasar args. luego del metodo
console.log(persona.nombreCompleto());

console.log(persona);
/*******************************************************/
/*******************************************************/
//crea obj en memoria vacio
let persona2 = new Object();
persona2.nombre = 'Pedro'; //empiezo a poner propiedades (atributos)
persona2.direccion = 'Saturno 15';
persona2.tel = '5554443322'

console.log(persona2.tel);
