//**1.Crea un módulo llamado calculadora.js que exporte las funciones suma, resta, multiplicacion y division. Importa este módulo en otro archivo y realiza algunas operaciones matemáticas usando las funciones exportadas.

const suma = (a, b) => {
    return a + b
}

//console.log(suma(2, 2))

const resta = (a, b) => {
    return a - b
}

//console.log(resta(2, 2))

const multiplica = (a, b) => {
    return a * b
}

//console.log(multiplica(2, 2))

const divide = (a, b) => {
    return a / b
}

//console.log(divide(2, 2))

export {suma, resta, multiplica, divide}

