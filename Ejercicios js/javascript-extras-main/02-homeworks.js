// Ejercicio: Compara dos números e imprime el mayor

function imprimirMayor(num1, num2) {
// Esta funcion recibe dos numeros, tienes que comparar ambos numeros e indicar cual es mayor y cual es menor.
// Ejemplo: num1 = 5 ; num2 = 6 -> deberia devolver "6 es mayor que 5".
// En caso que sean iguales devolver "Los números son iguales"
// Tu código:
    if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
      console.log(`${num2} es mayor que ${num1}`);
    } else {
      console.log("Los números son iguales");
    }
}

  // Ejercicio: Asignar una calificación según la puntuación obtenida

function asignarCalificacion(puntuacion) {
// La funcion recibe un puntuación del 0 al 100, tienes que devolver la clasificacion correspondiente en letra sabiendo lo siguiente:
// puntuacion mayor o igual a 90 -> devolver "Calificación: A"
// puntuacion mayor o igual a 80 -> devolver "Calificación: B"
// puntuacion mayor o igual a 70 -> devolver "Calificación: C"
// puntuacion mayor o igual a 60 -> devolver "Calificación: D"
// puntuacion menor que 60 -> devolver "Calificación: F"

    if (puntuacion >= 90) {
      console.log("Calificación: A");
    } else if (puntuacion >= 80) {
      console.log("Calificación: B");
    } else if (puntuacion >= 70) {
      console.log("Calificación: C");
    } else if (puntuacion >= 60) {
      console.log("Calificación: D");
    } else {
      console.log("Calificación: F");
    }
}

// Ejercicio: Verificar si un día de la semana es laboral o no
function esDiaLaboral(dia) {
    // Por parametros se pasa un día de la semana. tienes que crear un algoritmo que 
    if (dia === "Lunes" || dia === "Martes" || dia === "Miércoles" || dia === "Jueves" || dia === "Viernes") {
      console.log(`${dia} es un día laboral`);
    } else if (dia === "Sábado" || dia === "Domingo") {
      console.log(`${dia} no es un día laboral`);
    } else {
      console.log("Día no válido");
    }
}

// Ejercicio: Determinar el tipo de dato de una variable
function determinarTipoDato(variable) {
    if (typeof variable === "number") {
      console.log("La variable es de tipo número");
    } else if (typeof variable === "string") {
      console.log("La variable es de tipo cadena de texto");
    } else if (typeof variable === "boolean") {
      console.log("La variable es de tipo booleano");
    } else {
      console.log("Tipo de dato desconocido");
    }
}

// Ejercicio: Verificar si una cadena está vacía
function esCadenaVacia(cadena) {
    if (cadena === "") {
      console.log("La cadena está vacía");
    } else {
      console.log("La cadena no está vacía");
    }
}

function verificarContrasena(contrasena) {
    if (contrasena.length >= 8 && contrasena.includes("@")) {
      console.log("Contraseña válida");
    } else {
      console.log("Contraseña inválida");
    }
  }
  

module.exports = {
    imprimirMayor,
    asignarCalificacion,
    esDiaLaboral,
    determinarTipoDato,
    esCadenaVacia,
    verificarContrasena
}