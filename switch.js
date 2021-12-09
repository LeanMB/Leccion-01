//switch en JS

let numero = 9;
let numeroTexto ='valir desconocido';

switch (numero){
    case 1:
        numeroTexto = 'numero uno';
        break;
    case 2:
        numeroTexto = 'numero dos';
        break;
    case 3:
        numeroTexto = 'numero tres';
        break;
    case 4:
        numeroTexto = 'numero cuatro';
        break;

    default:
        numeroTexto = "caso no encotrado";
        break; //opcioonal por ser ultima linea
}

console.log(numeroTexto);

//calculo estacion de año con switch

//verano//primavera
//invierno//otoño

let mes = 12;
let estacion = 'estacion desconocida';

//mes 1 2 y 12, en mex invierno
switch (parseInt(mes)){
    case 1: case 2: case 12:
        estacion = 'invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'verano';
        break;
    case 9: case 10: case 11:
        estacion = 'otoño';
        break;
    default:
        estacion = 'valor incorrecto';
        break;
}

console.log (estacion);

//COMPARACION ESTRICTA EN SWITCH

//las comparaciones son de tipo estricto.