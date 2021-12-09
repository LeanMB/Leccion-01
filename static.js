//STATIC


Object.prototype.toString

class Persona { 
//atributo que pertenece a la clase y ningun objeto.
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        //"this." apunto a un objeto.
        //static apunta a clases, no se puede hacer this.contadorObjetosPersona
        Persona.contadorObjetosPersona++;
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
    //se relaciona con esta clase y no los obj q se relacionan de esta clase
    //Se asocia con clase pero no objetos
    static saludar(){
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


let persona1 = new Persona('Leandro', 'Gonzales');
console.log(persona1.toString());//get nombre 

//obj de clase hija 
let empleado1 = new Empleado ( 'Elio', 'Pez','Contable'); 
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

//persona1.saluda(); no e sposible llamar metodo estatico desde objeto
//si de clase:
Persona.saludar();

//se puede pasar como argumento un objeto.
Persona.saludar2(persona1);

//existe pero no puedo acceder por objeto, solo por clase
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

//clase hija hereda atributos estáticos
console.log(Empleado.contadorObjetosPersona); 