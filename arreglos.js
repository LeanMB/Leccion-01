//Arreglos en JS
//tipo object para almacenar distintos valores

//clasica sintaxys - almacena num o text
//let autos = new Array("BMW", "MERCEDES BENZ", "VOLVO");

//ahora es
const autos = ['BMW', 'MERCEDES BENZ', 'VOLVO'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//recorrer todo de 1 vez
for(let i = 0; i < autos.length; i++){
    console.log(i+1 + ': ' + autos[i] );
}

autos[1] = 'MercedesBenz'
console.log(autos[1]);

//push, metodo-o-funcion(es lo mismo) para agregar otros valores
autos.push('Audi');
console.log(autos);

console.log(autos.length);
//agrego sin dejar indices vacios.
autos[autos.length] = 'Cadillac';

console.log(autos);

console.log(autos.length);

autos[6] = 'Porshe'; //deja vacio el 5
console.log(autos.length); //dejo espacio para 7 pero uso 6..

//¿como saber si trabajo en un arreglo?, si pongo typeof me dice object y no lo se..

console.log(Array.isArray(autos));
console.log( autos instanceof Array);//la variable autos es la instancia del tipo array?