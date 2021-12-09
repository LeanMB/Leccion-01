var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + " " + apellido;
//imprimo variable
console.log(nombreCompleto);

//se evalua de izq a der el dato de num es string
var x = nombre + ' ' + 'Lara' + 2 + 4
console.log(x);
console.log(typeof x);

//toma prioridad parentesis -- se evalua de izq a derecha primero, pero prioridad el parentesis
var y = nombre + ' ' + 'Lara' + (2 + 4)
console.log(y);
console.log(typeof y);

var z = 2 + 4 + nombre + ' ' + 'Lara'
console.log(z);
console.log(typeof z);