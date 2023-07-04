function cantidadDeVocales(phrase) {
  // Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
  // Tu código:👇
  let contador = 0;
  for (let i = 0; i < phrase.length; i++) {
    let letra = phrase[i];
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }

  return contador;
}

function primerDivisible(divisor, dividendo) {
  // Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
  // Tu código:👇
  // cual es el primerNumeroQueDivide a num iniciiando desde numeroInicial
  let numero = divisor
  while (dividendo % numero !== 0) {
    numero++;
   }
   return numero;
}

function encuentraX(x) {
  //Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
  // retornar "El numero X es: ..."
  // Tu Código:👇
  for (let i = 1; i <= 100; i++) {
    if (i === x) {
      return `El numero X es: ${i}`;
    }
  }
}

function sumandoTodo(num) {
  // Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los numeros que se recorrio
  // Tu código:👇
  let suma = 0;

  for (let i = 0; i <= num; i++) {
    suma += i;
  }
  return suma;
}

function BinarioADecimal(num) {
  // La funcion recibe por parametro, un numero binario pero en tipo de dato String
  // debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
  // tu código:👇
  // SE PUEDEN ESTABLECER 2 VARIABLES DENTRO DEL BUCLE FOR, POR UN LADO LA "I" PARA RECORRER EL NUMERO BINARIO DESDE LA ULTIMA POSICION, SE DEFINE LA VARIABLE "J" PARA LA POTENCIA SEGUN LA POSICION. Se activa siempre y cuando i sea >=0. Va a ir decreciendo en la posicion con i--. J++ en cada vuelta va a sumar la potencia al exponente 2. Se junta el ultimo con la potencia 0, el penultimo con la potencia 1... etc

  // let i = binario.length - 1 inicializa la variable i con el valor de binario.length - 1, que es la posición del último dígito del número binario en el arreglo.
  // i >= 0 es la condición de salida del bucle. Mientras i sea mayor o igual a cero, el bucle seguirá ejecutándose.
  // i-- se ejecuta después de cada iteración del bucle y decrementa el valor de i en 1, lo que nos permite avanzar hacia el siguiente dígito del número binario en cada iteración.
  // Dentro del bucle, se accede al dígito binario correspondiente utilizando binario[i]. Luego, se convierte ese dígito en un número entero utilizando parseInt(binario[i]). Este número se multiplica por Math.pow(2, j), donde j representa la posición relativa del dígito binario actual en el número binario.

  // A medida que el bucle itera, i se decrementa en 1 en cada iteración y j se incrementa en 1 en cada iteración. Esto permite que i y j se muevan de derecha a izquierda a medida que se recorren los dígitos del número binario.

  // Finalmente, el resultado de parseInt(binario[i]) * Math.pow(2, j) se suma a la variable decimal en cada iteración del bucle, lo que nos permite acumular el valor decimal del número binario a medida que se recorre.

  let decimal = 0;
  // num 1011
  ////////////va al ultimo //potencia// ult decrece // potencia se incrementa
  for (let i = num.length - 1, j = 0; i >= 0; i--, j++) {
    //pasa a num        //
    decimal += parseInt(num[i]) * Math.pow(2, j);
  }

  return decimal;
}

function Fibonacci(n) {
  // Realiza una secuencia Fibonacci con el indice pasado por paramentro
  // Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
  // Tu código:👇
  // cada número es la suma de los dos números anteriores.

  let secuencia = [0, 1]; // Inicializamos la secuencia con los primeros dos números: 0 y 1

  for (let i = 2; i <= n; i++) {
    const num = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(num);
  }

  return secuencia[n];
}

function esPrimo(numero) {
  //Escribe un programa que verifique si un número dado es primo o no.
  //Un número primo es aquel que solo es divisible por 1 y por sí mismo.
  //Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
  // Tu código:👇
  // excluimos 1
  if (numero === 1) {
    return numero + " no es primo.";
  }

  // Inicio a partir de 2, si numero es divisible por cualquier número entre 2 y la mitad del número
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return numero + " no es primo.";
    }
  }

  // Si el bucle no encontró divisores, entonces el número es primo
  return numero + " es primo.";

}

function invertirCadena(cadena) {
  //La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
  //Ejemplo: 'Hola' -> devolver 'aloH'
  //Tu codigo:👇
  const cadenaInvertida = cadena.split('').reverse().join('');
  return cadenaInvertida;
}

module.exports = {
  cantidadDeVocales,
  encuentraX,
  sumandoTodo,
  BinarioADecimal,
  Fibonacci,
  esPrimo,
  invertirCadena,
  primerDivisible,
};
