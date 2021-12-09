class Persona { //no se usan comas en los metodos de clases
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
}

//GET Y SET PARA CLASES

//get para leer, set para modificar el valor del atrib.
//no se puede llamar igual que la prop. se usa un "_guionbajo"



let persona1 = new Persona('Leandro', 'Gonzales');
//p/modif valor uso var q apunta al obj... no se accede directamente pero pareciera q si.
persona1.nombre ='Tito'//set nombre ('tito') 
console.log(persona1.nombre); //metodo get, en set tmp se usa

let persona2 = new Persona('Lilita', 'De la Rosa');
console.log(persona2);
