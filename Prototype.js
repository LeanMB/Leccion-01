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

//uso prop de tel a todos los obj de tipo persona
//modif atributos y metodos de objeto.
//uso obj, luego proto, luego propiedad 'tel'
Persona.prototype.tel='034567893'

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.tel);
padre.tel = '12345'
console.log(padre.tel);


let madre = new Persona('Alicia', 'Quintero', 'lq@mail.com');
console.log(madre.tel)

