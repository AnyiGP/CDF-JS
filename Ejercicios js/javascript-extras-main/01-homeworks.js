function totalChar(string, stringdos) {
  // deberas obetener la longitud de las cadenas pasadas por parametros y devolver el total
  //Tu codigo:

  // const total =  string.length + stringdos.length
  // console.log(total)
  // return total
  return string.length + stringdos.length;
}

function subCadena(string) {
  // Recibirás por parametro una cadena de texto, la cual tendras que tomar los primeros 4 indices de la cadena y devolverla.
  // Ejemplo : "JavaScript" => "Java"
  // Tu codigo:
  return string.slice(0, 4);
}

function sinEspacios(string) {
  // Se pasa por parametro un string el cual tiene espacios extras al principio y al final
  // tendras que devolverlos sin los espacios -> ejemplo: "   Bienvenidos   "
  // DATO => averigua que metodo string te ayuda con esto.
  // tu codigo:
  return string.trim();
}

function comienzaCon(string) {
  // Se pasa por parametro un string, tendrás que devolver true o false si la cadena comienza con "Work"
  // DATO => averigua que metodo string te ayuda con esto.
  // tu codigo:
  return string.startsWith("Work");
}

function hoyEs() {
  //Debes retornar el día de la fecha actual (Solo numero del día), ayudandote con el Objeto Date (En caso de no conocerlo averigua)
  // Ejemplo -> 8/6/2023 -> deberia retornar solo 8
  // Tu codigo:
  return new Date().getDate();
}

function mesActual() {
  //Debes retornar el mes actual, ayudandote con el Objeto Date (En caso de no conocerlo averigua)
  // Ejemplo -> 8/6/2023 -> deberia retornar solo 6
  // Tu codigo:
  return new Date().getMonth();
}

function anioActual() {
  //Debes retornar el mes actual, ayudandote con el Objeto Date (En caso de no conocerlo averigua)
  // Ejemplo -> 8/6/2023 -> deberia retornar solo 2023
  // Tu codigo:
  return new Date().getFullYear();
}

function dateComplet() {
  //Debes retornar el date completo. Día, mes, día del mes, año, hora acutal y zona horaria
  //Tu codigo:

  //   console.log(new Date())
  //   .getDay().getMonth().getDate().getFullYear().getHours().getMinutes().getSeconds().getTimezoneOffset())
  return new Date();
}

module.exports = {
  totalChar,
  subCadena,
  sinEspacios,
  comienzaCon,
  hoyEs,
  mesActual,
  anioActual,
  dateComplet,
};
