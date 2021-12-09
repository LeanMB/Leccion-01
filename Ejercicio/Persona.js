

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