//OPERADORES DE PROCEDENCIA

let x = 5;
let y = 10;
let z = ++x + y --;

console.log(x);
console.log(z);
console.log(y);

let resultado  = 4 + 5 * 6 / 3
console.log (resultado)

//calculo estacion de mes
let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion =  "Verano";
}
else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "otoño";
}
else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "invierno";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "primavera";
}
else {
    estacion = "valor incorrecto";
}
console.log(estacion);