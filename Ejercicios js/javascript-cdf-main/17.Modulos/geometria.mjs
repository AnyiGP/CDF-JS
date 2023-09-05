//**2. Crea un módulo llamado geometria.js que exporte una constante llamada PI y una función llamada calcularAreaCirculo(radio). Importa este módulo en otro archivo y utiliza la constante y la función para calcular el área de un círculo.

// radio: diametro de la circ a la mitad
// diametro: logitud de la circ / pi
// area: pi multiplicado por el radio al cuadrado

const PI = 3.14

const calcularAreaCirculo = (radio) => {
    return PI * Math.pow(radio, 2) 
}

console.log(calcularAreaCirculo())

export {PI, calcularAreaCirculo}