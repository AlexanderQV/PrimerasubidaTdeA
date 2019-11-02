// REQUIRE INTERNOS:
//objeto estudiante con nombre, edad, notas
let estudiante = {
    nombre: "Juan",
    edad: 25,
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
        
    }
};

let obtenerPromedio = (nota_1,nota_2,nota_3) => (nota_1+nota_2+nota_3)/3;

console.log(obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programación));

/*Para exportar:
module: una clase que te permite exportar un array de un script a otro*/

module.exports = {
    estudiante,
    obtenerPromedio
};

//^Exportamos el objeto estudiante y el resultado obtenido con obtenerPromedio