//sobreescribir en JS
//imprime información del estado del objeto

//herencia

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


}
//clase hija aplic sobreescritura para modif comportamiento def de la clase padre.

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
    //exactamente mismo nombre y parametros para sobreescribir.
    //super para acceder a atrib y metodos def en clase padre // asi no se escribe todo el metodo return.
    nombreCompleto(){
        return super.nombreCompleto()+ ', ' + this._departamento;
    }   
}


let persona1 = new Persona('Leandro', 'Gonzales');
console.log(persona1);//get nombre 

//obj de clase hija 
let empleado1 = new Empleado ( 'Elio', 'Pez','Contable'); 
console.log(empleado1.nombreCompleto());