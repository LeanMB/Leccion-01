//constructores: se recomienza comience con mayusculas

//funcion constructor obj de tipo persona
//si quiero que algo se asocie a todo tengo q hacerlo desde la func constructora
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