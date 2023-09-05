//**1.Crea un módulo llamado calculadora.js que exporte las funciones suma, resta, multiplicacion y division. Importa este módulo en otro archivo y realiza algunas operaciones matemáticas usando las funciones exportadas.

const suma = (a, b) => {
    return a + b
}

console.log(suma)

const resta = (a, b) => {
    return a - b
}

console.log(suma)

const multiplica = (a, b) => {
    return a * b
}

console.log(multiplica)

const divide = (a, b) => {
    return a / b
}

console.log(divide)

export {suma, resta, multiplica, divide}

