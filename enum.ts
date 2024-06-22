const persona = { //de esta forma, cada vez que utilice esta variable, si algo cambia 
    name: "Jaz",  // en su definición, tengo q actualizar uno por uno 
    age: 37,
};

/* const PersonProperties = { //de esta forma, cambio algo en las propiedades y se actualiza 
    NAME:"name",           //mejor en cada uno de los casos.
    AGE: "age"
} */

enum PersonProperties {
    NAME = "name",
    AGE = "edad",

}

enum VideoJuegos {
    ROL = "rol",
    SIMULATOR = "simulador"
}

interface Persona {
    name: string,
    edad: number,
    videojuego: VideoJuegos;
}

const personaVideoJuego: Persona = {
    name: "Jaz",
    edad: 32,
    videojuego: VideoJuegos.ROL
};

/*
//COMPONENTE 1
persona.name = "Jota";
persona[PersonProperties.AGE] = 30;

//COMPONENTE 2
persona.name = "Bin";
persona[PersonProperties.AGE] = 32;*/

//COMPONENTE enum
persona.name = "Mel";
persona[PersonProperties.AGE] = 20;
 

/* persona.name = "Jazmin";
persona["age"] = 47; */

//se podria limitar los string que elijo en la variable 'dia' de esta forma, o usando un enum
/* interface CitaMedica {
    dia: 'lunes' | 'martes' | 'miercoles'
} */

enum DiaSemana {
    Lunes,
    Martes,
    Miercoles
}

interface CitaMedica {
    dia: DiaSemana
}

let c: CitaMedica = {
    dia: DiaSemana.Miercoles
}

console.log(c)
console.log(DiaSemana)
console.log(persona.name)
console.log(persona.age)
console.log(personaVideoJuego.videojuego)