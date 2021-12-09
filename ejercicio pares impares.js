//imprimir pares de 0 a 10

for(let contador = 0; contador <= 10; contador++){
    if (contador % 2 == 0){
 
        console.log(contador)
    }
    break;
}

//palabra CONTINUE

for (cuenta = 0; cuenta <= 10; cuenta++){
    if (cuenta % 2 !== 0){
        continue;//ir a la siguiente iteracion del ciclo for
    }
    else{
        console.log(cuenta);
    }
}

//etiquetas (LABEL) en JS
//te lleva a parte de programa que indique a ir.
inicio:

for (x = 0; x <= 10; x++){
    if (x % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion del ciclo for
    }
    else{
        console.log(x);
    }
}