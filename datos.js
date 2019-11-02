/*const estudiante1 = require ("./calculos");
//^importamos "calculos.js" el "./" indica que es un archivo interno
console.log(estudiante1.estudiante);
//^Todo lo que estaba en "calculos" se guarda en una variable  "estudiante1", y lo llamamos con el console.log
console.log("El promedio del estudiante es: " + estudiante1.obtenerPromedio(estudiante1.estudiante.notas.matematicas,estudiante1.estudiante.notas.ingles,estudiante1.estudiante.notas.programacion))
*/
const {estudiante, obtenerPromedio} = require ("./calculos");
const fs = require("fs");

//^ importar el "file Systems, ergo el nombre "fs" (recomendado)

console.log("El nombre del estudiante es: " + estudiante.nombre);

let {nombre, edad, notas: {matematicas, ingles, programacion}} = estudiante;
console.log("La edad del estudiante es: "+ edad);
console.log("El promedio del estudiante es: " + obtenerPromedio(matematicas,ingles,programacion))

let crearArchivo = (estudiante)=>{
    texto = "el nombre del estudiante es: "+ nombre +"\n"+
            "ha obtenido un promedio de " + obtenerPromedio(matematicas,ingles,programacion)
    fs.writeFile("promedio.txt",texto,(err)=>{
        if (err) throw (err);
        console.log("se ha creado el archivo")
    });
}

crearArchivo(estudiante);