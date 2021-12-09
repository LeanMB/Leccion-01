

class Persona{

    static contadorPersona = 0;
    //para definir atributos uso el constructor
    constructor (nombre, apellido, edad){
        //aca se asocia atributo con calse
        this._idPersona = ++Persona.contadorPersona; //inicio contadorPersona de clase Persona en variable idPersona
        this._nombre = nombre; 
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona (){
        return this._idPersona;
    }

    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        return this._nombre = nombre;

    }

    get apellido (){
        return this._apellido;
    }
    set apellido (apellido){
        return this._apellido = apellido;
    }

    get edad (){
        return this._edad;
    }
    set edad (edad){
        return this._edad = edad;
    }

    toString(){
        return `${this._idPersona}
                ${this._nombre}
                ${this._apellido}
                ${this._edad}`
    }
}


class Empleado extends Persona{
    static contarEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contarEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        this._sueldo
    }
    set sueldo (sueldo){
        return this._sueldo = this.sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }

}

class Cliente extends Persona{
    static contarClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++ Cliente.contarClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro (){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro }`;
    }

}

//prueba de clase personas
let persona1 = new Persona ('Juan','Perez', '20');

console.log(persona1.toString());

let persona2 = new Persona ('Tita','Merelo', '15');

console.log(persona2.toString());

let empleado1 = new Empleado ('Elio','Pez', '55', '5000');
console.log(empleado1.toString());


let empleado2 = new Empleado ('Ialo','Pajon', '33', '53000');
console.log(empleado2.toString());

let cliente1 = new Cliente ('Miguel','Cervantes','30', new Date());
console.log(cliente1.toString()); 