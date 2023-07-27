function arrayDuplicados(array) {
  // Por parametros recibiras un array de numeros, tendras que el array duplicado! Usa: Metodo .map()
  // Tu codigo:
  return array.map((numeros) => numeros * 2);
}

const nombresPersonas = (array) => {
  // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
  // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
  // Tu codigo:
  return array.map((objetos) => objetos.name);
};

function masImpuestos(array) {
  // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
  // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
  // Usar metodo .map()
  // Tu codigo:
  const obj = array.map((objetos) => {
    //creo propiedad imp en el objeto y va a tener adentro el precio mas el 10%
    objetos.impuestos = Math.trunc(objetos.precio * 0.1);
    return objetos;
  });
  return obj;

  //   return array.map(objetos =>
  //  objetos.precio *0.1
  //redondear
  //  )
  //        return `producto: ${producto.}, nSerie: 1511440, precio: 1000, Impuestos: 100`

  // objetos.producto, objetos.nSerie, objetos.precio,
}

function NombresLargos(array) {
  // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
  // Tu codigo:
  // const nombres = [i];
  const Nombres = array.filter((array) => {
    return array.length >= 5;
  });
  //console.log(Nombres);
  return Nombres;
}

function filtaradoPorCategoria(array, categoria) {
  // Recibiras por porametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
  // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
  // Tu codigo:
  //   const peliculasFiltradas = array.filter((array) => array.categoria === categoria);
  //   const nombresPeliculas = peliculasFiltradas.map((array) => array.titulo);
  //   return nombresPeliculas;
  // }

  const categoriaPedida = array.filter(
    (array) => array.categoria === categoria
  );
  return categoriaPedida.map((array) => array.titulo);
}

function examenIngreso(array) {
  // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
  // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa (inscripcion = true)
  // Tu codigo:
  const alumnosAprobados = array.filter(
    (alumno) => alumno.nota >= 70 && alumno.inscripcion === true
  );
  return alumnosAprobados;
}

function nombreContiene(nombres, search) {
  // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
  // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
  // deberia devolver => ['Agustina','Martina','Cristina']
  // Tu código aquí 👈

  const nombresFiltrados = nombres.filter((nombre) => nombre.includes(search));
  return nombresFiltrados;
}

//   const nombresFiltrados = nombres.filter(
//     (nombres) => nombres === search.length
//   );
//   return nombresFiltrados.map((nombres) => nombres);

// }

module.exports = {
  arrayDuplicados,
  nombresPersonas,
  masImpuestos,
  NombresLargos,
  filtaradoPorCategoria,
  examenIngreso,
  nombreContiene,
};
