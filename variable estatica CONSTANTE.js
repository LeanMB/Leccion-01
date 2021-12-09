//variable estatica de solo lectura (CONSTANTE)
//ya no puede usarse const

//metodos estatico que permite leer el valor que regresa el metodo y no se puede modificar. 
// es la llamada al metodo estatico


Object.prototype.toString

class Persona { 

    static contadorPersona = 0; //atributo de clase (solo clase)
//get xq solo recupero ingo.
    static get MAX_OBJ (){
        return 5;//solo pdria hacer 5 objs de clase padre o hijo
    }
   
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        if( Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el máximo de objetos permitidos');
        }
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }static saludar(){
        console.log ('Saludos desde metodo Static: ');
    }
    static saludar2(persona){
        console.log (persona.nombre);
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


let empleado1 = new Empleado ( 'Elio', 'Pez','Contable'); 
console.log(empleado1.toString());//incrm a 2

let persona2 = new Persona ('Karla', 'Sanchez');
console.log (persona2.toString());
console.log(Persona.contadorPersonas);

//get o set no nec. especificar parentesis.
console.log( Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log( Persona.MAX_OBJ);


let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');
console.log( persona4.toString() );
