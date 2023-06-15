// Operadores Matemáticos

function suma(x, y) {
  // X e Y  ambos son números, haz que esta función retorne el resultado de la suma de ambos
  // Tu código:
  // console.log(x, y)
  const sumar = x + y;
  return sumar;
}

function resta(x, y) {
  // X e Y  ambos son números, haz que esta función retorne el resultado de la resta de ambos
  // Tu código:
  const resta = x - y;
  return resta;
}

function multiplicacion(x, y) {
  // haz que esta función retorne el resultado de la multiplicación entre 'X' e 'Y'
  // Tu código:
  const multiplica = x * y;
  return multiplica;
}

function resto(x, y) {
  // X e Y  ambos son números, haz que esta función retorne el resto de 'X' e 'Y'
  // Tu código:
  //console.log(x, y)
  //const restoDeDivision = x % y
  //return restoDeDivision //1
  return x % y;
}

function porcentajeX(chicos, chicas) {
  //Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso
  //actual. Diseñar un algoritmo para este propósito. Recuerda que para calcular el porcentaje
  //puedes hacer una regla de 3 simple.
  //Tu código:

  //console.log(chicos, chicas)
  const total = chicos + chicas;
  //console.log(total)
  const porcentajeChicos = (chicos * 100) / total;
  //console.log(porcentajeChicos)
  const porcentajeChicas = (chicas * 100) / total;
  //console.log(porcentajeChicas)

  return porcentajeChicos, porcentajeChicas;
}

function elevadoAlCubo(num) {
  //'num' es un numero entero. Eleva este numero al cubo y devuelve su valor
  //Tu código:

  const alCubo = Math.pow(num, 3);
  return alCubo;
}

function roundUp(num) {
  //Redondea hacia arriba el numero pasado por parámetros 'num', y devuelve su valor
  //Tu código:

  // console.log(num);
  //console.log( Math.ceil(num))
  return Math.ceil(num);
}

function randomNumber() {
  //Devuelve un numero random
  //Tu código:
  return Math.random();
}

function igualQue(num1, num2) {
  //comprueba que num1 y num2 sean iguales y retorna
  //en caso que no sean iguales retornará false, caso contrario retornará true
  //Tu código:
  return num1 === num2
}

function menorQue(num1, num2) {
  //comprueba que num1 sea menor que num2  y retorna
  //en caso que no sea menor retornará false, caso contrario retornará true
  //Tu código:
  return num1 < num2
}

function equalLength(string1, string2) {
  //comprueba si string1 tiene la misma longitud que string2 y retorna
  //en caso que no sean iguales retornará false, caso contrario retornará true
  //Tu código

  return string1.length === string2.length
}

module.exports = {
  suma,
  resta,
  multiplicacion,
  resto,
  porcentajeX,
  elevadoAlCubo,
  roundUp,
  randomNumber,
  igualQue,
  menorQue,
  equalLength,
};
