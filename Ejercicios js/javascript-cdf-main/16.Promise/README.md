# Promesas

Las promesas son un patrón de diseño en JavaScript que solucionan los problemas del "callback hell" al proporcionar una forma más estructurada de manejar operaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca. Puede estar en uno de tres estados: pendiente, resuelta o rechazada.

### **Sintaxis de las Promesas**

```jsx
// Creación de una promesa
const miPromesa = new Promise((resolve, reject) => {
  // Lógica asíncrona
  if (/* éxito */) {
    resolve('¡Operación exitosa!');
  } else {
    reject('Hubo un error.');
  }
});

// Consumo de la promesa
miPromesa
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.error(error);
  });
```

### **Flujo de Trabajo de las Promesas**

1. Se crea una instancia de **`Promise`** pasando una función con dos parámetros: **`resolve`** y **`reject`**. Estos son métodos que se llaman para indicar si la operación asíncrona tuvo éxito o fracasó.
2. Dentro de la función, se realiza la lógica asíncrona. Si la operación tiene éxito, se llama a **`resolve`** con el resultado. Si falla, se llama a **`reject`** con un mensaje de error.
3. Para manejar el resultado de la promesa, usamos los métodos **`.then()`** y **`.catch()`**. El método **`.then()`** se ejecuta cuando la promesa se resuelve exitosamente, y el método **`.catch()`** maneja los errores si la promesa es rechazada.

### Extra

- ********************SetTimeout********************
    
    **`setTimeout`** es una función en JavaScript que permite retrasar la ejecución de un fragmento de código (una función o una porción de código) durante un período específico de tiempo. Es comúnmente utilizado para realizar operaciones asíncronas, como retrasar la ejecución de una función después de cierto tiempo o crear efectos de espera en aplicaciones web.
    
    ```jsx
    // Sintaxis
    setTimeout(función, tiempo);
    ```
    
    - **`función`**: La función que deseas ejecutar después de que haya transcurrido el tiempo especificado.
    - **`tiempo`**: La cantidad de tiempo en milisegundos antes de que se ejecute la función.
    
    ```jsx
    console.log("Inicio");
    setTimeout(() => {
      console.log("Este mensaje aparecerá después de 1000 ms (1 segundo)");
    }, 1000);
    console.log("Fin");
    ```
    
    En este ejemplo, verás que "Inicio" y "Fin" se imprimirán antes del mensaje dentro de **`setTimeout`**, ya que la función se ejecuta de manera asíncrona después de 1000 ms.
    
    **`setTimeout`** es útil para realizar tareas como animaciones en la interfaz de usuario, retrasar la ejecución de operaciones para dar tiempo a las solicitudes de red para obtener datos, y en general, para gestionar operaciones que no deben bloquear el flujo principal de ejecución.
    
    Es importante mencionar que **`setTimeout`** no garantiza que la función se ejecutará exactamente después del tiempo especificado. Puede haber variaciones debidas a la carga del sistema y otros factores.
    

## Ejercicios

- **********new Promises()**********
    
    **Ejercicio 1:** Crea una función que simule una llamada a un servidor para obtener datos. Utiliza una promesa para manejar la respuesta del servidor. Si la respuesta contiene datos válidos, resuelve la promesa con los datos; de lo contrario, la rechaza con un mensaje de error.
    
    **Ejercicio 2:** Crea una secuencia de promesas que representen pasos de una receta de cocina. Cada promesa puede simular la preparación de un ingrediente. A medida que se resuelven las promesas, muestra los pasos completados.