//metodos get y set con obj.

let persona = {
    nombre: 'Leandro',
    apellido: 'Barwashis',
    email: 'lbarbi@sarasa.com',
    edad: 28,
    idioma: 'es',
    
    get lang(){
        return this.idioma.toUpperCase(); //uso metodo toUpperCase: convierte string a mayusc
    },    
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        //this es un apuntador al obj q se trabaja en este momento
        return this.apellido + ' ' + this.nombre;
    }     
}

//para leer y no anteponer () en func. antepongo GET en nombreCompleto
//parece una propiedad pero es una funcion si se ve en objeto
console.log(persona.nombreCompleto);

//metodo set: para almacenar o rec. info
console.log(persona.lang);

persona.lang = 'en';

//aca llama metodo get, no se realemnte como se almaceno
console.log(persona.lang);
//aca si se como se almaceno porq llamo propiedad
console.log(persona.idioma);