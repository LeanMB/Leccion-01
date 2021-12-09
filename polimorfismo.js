//Clase OBJETC
//imprime información del estado del objeto, valores actuales de los atrib. de los objetos.

Object.prototype.toString

class Persona { 
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._nombre;
    }
    set apellido (apellido){
        return this._apellido = apellido;
    }
    
    nombreCompleto(){
        return this.nombre + ' ' + this._apellido;
    }
    //Sobre escribo metodo de clase Padre (bjetc)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o tipo hijo
        return this.nombreCompleto();
    }

}


class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super (nombre, apellido); //llamo const. de clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento (departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto()+ ', ' + this._departamento;
    }   
}


let persona1 = new Persona('Leandro', 'Gonzales');
console.log(persona1.toString());//get nombre 

//obj de clase hija 
let empleado1 = new Empleado ( 'Elio', 'Pez','Contable'); 
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());