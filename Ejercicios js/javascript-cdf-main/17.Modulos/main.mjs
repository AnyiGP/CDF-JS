//**1.Crea un módulo llamado calculadora.js que exporte las funciones suma, resta, multiplicacion y division. Importa este módulo en otro archivo y realiza algunas operaciones matemáticas usando las funciones exportadas.

import { suma, resta, multiplica, divide } from "./calc.mjs";

const calculadora = (n1, n2, callback) => {
    return callback(n1, n2)
}

console.log(calculadora(2,3,resta))
console.log(calculadora(2,3,suma))
console.log(calculadora(2,3,multiplica))
console.log(calculadora(9,3,divide))


//**2. Crea un módulo llamado geometria.js que exporte una constante llamada PI y una función llamada calcularAreaCirculo(radio). Importa este módulo en otro archivo y utiliza la constante y la función para calcular el área de un círculo.

import { PI, calcularAreaCirculo } from "./geometria.mjs";

const areaCirculo = (radio, pi, callback) => {
    return callback(radio, pi)
}

console.log(areaCirculo(10, PI, calcularAreaCirculo))

//**3.Crea un módulo llamado datosPersonales.js que exporte un objeto con tus datos personales (nombre, edad, ciudad, etc.). Importa este módulo en otro archivo y muestra la información en la consola.

import { datosPersonales } from "./datosPersonales.mjs";

const objetoDatos = (datos) => {
    return `Hola ${datos.nombre}, ${datos["apellido"]}, edad ${datos["edad"]}, ciudad ${datos["ciudad"]} `
}

console.log(objetoDatos(datosPersonales))

//ver como hacer con un forEach para que me muestre solo cada uno de los datos.