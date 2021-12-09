//par o impar?

let a = 10;

if (a % 2 == 0){
    console.log("es un numero par");
}
else {
    console.log("es un numero impar");
}
// string a numero 
let miNumero = "178x";

console.log(typeof miNumero);

let edad = Number (miNumero);
//console.log(typeof edad);

if (edad > 18) {
    console.log("puede votar");
}

    
else{
    console.log("Muy joven para votar");
}

//usando ternario
let resultado = (edad >=19)? "puede votar" : "no puede votar";
console.log (resultado +" tiene " + edad)

if (isNaN(edad)){
    console.log ("no es un numero");
}
else {
    if (edad > 18) {
        console.log("puede votar");
    }
    
    else{
        console.log("Muy joven para votar");
    }
}

//con ternario
if (isNaN(edad)){
    console.log ("no es un numero");
}
else {
    let resultado = (edad >=19)? "puede votar" : "no puede votar";
    console.log (resultado +" tiene " + edad)
}