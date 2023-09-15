const nombre = "Hola"

console.log(nombre)

// Creación de una promesa
const miPromesa = new Promise((resolve, reject) => {
    // Lógica asíncrona
    // if (/* éxito */ ) {
    //   resolve('¡Operación exitosa!');
    // } else {
    //   reject('Hubo un error.');
    // }
  });
  
  // Consumo de la promesa
  miPromesa
    .then(resultado => {
      console.log(resultado);
    })
    .catch(error => {
      console.error(error);
    });

//**Ejercicio 1: Crea una función que simule una llamada a un servidor para obtener datos. Utiliza una promesa para manejar la respuesta del servidor. Si la respuesta contiene datos válidos, resuelve la promesa con los datos; de lo contrario, la rechaza con un mensaje de error.



//Ejercicio 2: Crea una secuencia de promesas que representen pasos de una receta de cocina. Cada promesa puede simular la preparación de un ingrediente. A medida que se resuelven las promesas, muestra los pasos completados.