//Yargs permite ingresar texto (comandos o grupos de texto) y generar un menu base para trabajr con los argumentos 
const opciones = {
    matematicas:{
        default: 0, 
        alias: "m"
    },
    ingles :{
        default:0,
        alias: "i"
    },
    programacion:{
        demand: true,
        alias: "p"
    }
}


const argv = require("yargs")
            .command ("promedio","calcular el promedio",opciones)
            .argv

console.log(argv.matematicas);
console.log(argv);
console.log("El promedio es: "+ (argv.m + argv.i + argv.p)/3);