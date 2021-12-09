let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    //metodo
    nombreCompleto: function (titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let personas2 = {
    nombre: 'Carla',
    apellido: 'Gonzalez',
}
//uso de apply, para objeto q no tiene def. cierto metodo
console.log(persona1.nombreCompleto('Dr.', '156753'));

//para usar func de per1 uso apply dado q no tengo def. en persona 2 esa func.
console.log(persona1.nombreCompleto.apply(personas2));
//con metodo apply se paga por medio de un arreglo los valores de los paramentros
//para que pueda tomarlos a dif. del uso de call
//paso todos los valores por medio de arreglo.
let arreglo = ['Ing.','55443322'];
console.log(persona1.nombreCompleto.apply(personas2, arreglo));
