// En los siguientes ejercicios deberás reemplazar el valor null
// por el correspondiente.

// Crea una variable de tipo string. // cadena de texto
const nuevoString = "str";
// Crea una variable de tipo number.
const nuevoNumero = 1;

// Crea una variable de tipo boolean.
const nuevoBoolean = false;

// Resuelve el siguiente problema matemático.
const nuevaResta = 10 - 7 === 3;

// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático.
const nuevoModulo = 21 % 5 === 1;

function primerCaracter(string) {
  //Por parametros se pasa una cadena de texto. Tienes que devolver el primer carácter!
  //Tu código:👇
  return string.charAt(0);
}

const cadenaDeTexto = "Pan con queso";
const obtenerPrimerCaracter = primerCaracter(cadenaDeTexto);
console.log(obtenerPrimerCaracter); //p

function ultimoCaracter(string) {
  //Por parámetros se pasa una cadena de texto. Tienes que devolver el primer carácter!
  //Tu código: 👇
  return string.charAt(string.length - 1);
}

const cadenaDeTexto2 = "Pan con queso";
const obtenerUltimoCaracter = ultimoCaracter(cadenaDeTexto2);
console.log(obtenerUltimoCaracter); //o

function longitudDeCadena(string) {
  //En este ejercicio tendrás que devolver la longitud de la cadena que se pasa por parámetros!
  //tu código: 👇
  return string.length;
}

const cadenaDeTexto3 = "Pan con queso";
const obtenerLongitudDeCadena = longitudDeCadena(cadenaDeTexto3);
console.log(obtenerLongitudDeCadena); //13

function enMayusculas(string) {
  //Pasado el string por parámetros tendrás que devolver el mismo contenido del string
  //pero todo en mayúsculas
  //tu código: 👇
  return string.toUpperCase();
}

const cadenaDeTexto4 = "Pan con queso";
const obtenerEnMayusculas = enMayusculas(cadenaDeTexto4);
console.log(obtenerEnMayusculas); //PAN CON QUESO

function enMinusculas(string) {
  //Pasado el string por parámetros tendrás que devolver el mismo contenido del string
  //pero todo en minúsculas
  //tu código: 👇
  return string.toLowerCase();
}

const cadenaDeTexto5 = "Pan con queso";
const obtenerEnMinusculas = enMinusculas(cadenaDeTexto5);
console.log(obtenerEnMinusculas); //pan con queso

function enlistandoNombres(args) {
  //En el siguiente ejercicio se pasará por parámetros una cadena la cual contiene varios nombres
  //Ejemplo: Martin, Leonardo, Diego, Franco, Natalia
  //Tendrás que buscar un método el cual sirva para separarlos y crear una lista solo con los nombres!
  //Tu código: 👇
  const listaDeNombres = args.split(", ");
  return listaDeNombres;
}

const args = "Pamela, Cristina, Nacho, Alfonso, Ricardo";
const listaDeNombres = enlistandoNombres(args);
console.log(listaDeNombres);

function typeOF(params) {
  //Por parametros se pasan distintos tipos de datos, con esta funcion tendras que devolver distintos el tipo de dato que es.
  //Tu código:👇
  return typeof params;
}

const number = 18;
const string = "Tarta de Manzana";
console.log(typeOF(number)); //number
console.log(typeOF(string)); //string

function repairToString(str) {
  //Por parametro se pasará un string, el cual tiene su primera letra en minuscula y la ultima en mayúscula. EJ: "holA"
  //tendras que devolver el string como corresponda -> "Hola"
  //Tu código:👇
  const primeraLetraMayuscula = str.charAt(0).toUpperCase();
  const restoEnMinuscula = str.slice(1).toLowerCase();
  return primeraLetraMayuscula + restoEnMinuscula;
}

let str = "argenTIna";
const reparar = repairToString(str);
console.log(reparar); //Argentina

function contains(string) {
  // Por parametros se pasará un string, tendrás que verificar si la cadena de texto contiene la siguiente sub-cadena -> "JavaScript"
  // Tu código:👇
  return string.includes("JavaScript");
}

const cadenaDeTexto6 = "Programar con JavaScript";
const contieneSubCadena = contains(cadenaDeTexto6);
console.log(contieneSubCadena); //true

module.exports = {
  nuevoString,
  nuevoBoolean,
  nuevoNumero,
  nuevaMultiplicacion,
  nuevoModulo,
  nuevaResta,
  ultimoCaracter,
  primerCaracter,
  longitudDeCadena,
  enMayusculas,
  enMinusculas,
  enlistandoNombres,
  primerCaracter,
  typeOF,
  repairToString,
  contains,
};


//Anyi