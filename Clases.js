class Persona {
    //luego constructor entre ()se pasan parametros
    //una clase puede tener atrib. y metodos
    //recibo valor en parametros del metodos constructor (nombre, apellido)
    constructor(nombre, apellido){
        this.nombre = nombre; //crea prop y se asigna a clase pers., el 2do es el nombre del parametro, el 1° es nombre de atrib clase
        //derecha parametro: contiene valor de argumento que envio al constructor
        //izq parametro: nombre (der) es lo que asigno al nuevo atributo nombre(que tiene .this que creo e inicializo)
        this.apellido = apellido;
    }
}

// instancia de clase u objeto
//en cuanto se pone nombre de clase lo sig. es q se llama constructor, si no se define JS agrega uno vacio automatico
//de forma automat llama "constructor (nombre, apellido)" y espera esos parametros
let persona1 = new Persona('Leandro', 'Gonzales');

console.log(persona1);

let persona2 = new Persona('Lilita', 'De la Rosa');
console.log(persona2);

//GET Y SET PARA CLASES

