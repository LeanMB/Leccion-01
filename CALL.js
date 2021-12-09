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

let personas3 = {
    nombre: 'Exequiel',
    apellido: 'Dandrea',
}

//Uso de call para usar el metodo persona1.nombreCompleto con datos de persona2
console.log(persona1.nombreCompleto());

//llamada, solo x tener misma estructura, mismos atributos.
console.log(persona1.nombreCompleto.call(personas2, 'Lic', '159753'));

//se pueden pasar argumentos..titulo y tel. son parametros comunes por eso no se pone this
console.log(persona1.nombreCompleto.call(personas3, 'Ing','154752566'));
