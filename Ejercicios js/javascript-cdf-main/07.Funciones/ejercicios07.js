/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame que se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:

const bienvenida = (nombre, apellido) => `Bienvenido ${nombre} ${apellido}`;

bienvenida("Angeles", "Godoy");

/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
const calc = (num1, operador, num2) => {
  let resultado = `${num1} ${operador} ${num2}`;
  return resultado;
};

calc(1, "+", 2);

/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso'
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'
// Tu código:
const temp = (max, min, porcentaje) => {
  if (max < 15) {
    if (porcentaje > 50) {
      return "Es recomendable salir con abrigo, recomendable un paraguas";
    }
    return "Es recomendable salir con abrigo";
  } else if (max < 26 && min > 17) {
    if (porcentaje > 50) {
      return "El día está lindo, recomendable un paraguas";
    }
    return "El día está lindo";
  } else if (min > 25) {
    if (porcentaje > 50) {
      return "El día estará caluroso, recomendable un paraguas";
    }
    return "El día estará caluroso";
  }
};

temp(10, 5, 90);

/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:

const arrayDeStrings = (str) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
};

/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

const stringInverso = () => {
  // Divide el string en un arreglo de palabras separadas por espacio
  var palabras = str.split(' ');

  // Invierte el orden de las palabras en el arreglo
  var palabrasInversas = palabras.reverse();

  // Une las palabras invertidas en un nuevo string separadas por espacio
  var resultado = palabrasInversas.join(' ');

  // Devuelve el string resultante
  return resultado;
};

/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:
var personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 18 },
  { nombre: "Carlos", edad: 21 }
];

const personaMásJoven = () => {
  if (personas.length === 0) {
    return "No hay personas en el array";
  }

  var personaMásJoven = personas[0];

  for (var i = 1; i < personas.length; i++) {
    if (personas[i].edad < personaMásJoven.edad) {
      personaMásJoven = personas[i];
    }
  }

  return personaMásJoven.nombre;

};

/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:

const contadorDeLetras = () => {
  var contador = {};

  // Recorre cada caracter de la cadena
  for (var i = 0; i < cadena.length; i++) {
    var letra = cadena[i];

    // Verifica si la letra ya existe en el contador
    if (contador[letra]) {
      contador[letra]++;
    } else {
      contador[letra] = 1;
    }
  }

  return contador;
}


/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:

const sueldoMasAlto = () => {
  if (objetos.length === 0) {
    return "No hay objetos en el array";
  }

  var sueldoMasAlto = objetos[0];

  for (var i = 1; i < objetos.length; i++) {
    if (objetos[i].sueldo > sueldoMasAlto.sueldo) {
      sueldoMasAlto = objetos[i];
    }
  }

  return sueldoMasAlto;
};

/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota"
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:

const aprobados = () => {
  var aprobados = [];

  for (var i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota >= 80) {
      aprobados.push(estudiantes[i].nombre);
    }
  }

  return aprobados;
};

/**********************************************************************************/

module.exports = {
  bienvenida,
  calc,
  temp,
  arrayDeStrings,
  stringInverso,
  personaMásJoven,
  contadorDeLetras,
  sueldoMasAlto,
  aprobados,
};
