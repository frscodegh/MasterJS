/*
Las colecciones indexadas en JavaScript son estructuras de datos que nos permiten almacenar datos en forma de pares clave-valor, donde la clave puede ser un número o una cadena y el valor puede ser cualquier tipo de dato en JavaScript. Estas colecciones permiten acceder a los valores a través de un índice numérico o una clave.

Los ejemplos más comunes de colecciones indexadas en JavaScript son:

Arrays: los arrays son colecciones indexadas en las que los elementos se almacenan en orden numérico, comenzando desde el índice 0. Los arrays son muy útiles para almacenar una lista ordenada de elementos, y permiten acceder a los elementos a través de un índice numérico.
Ejemplo:
*/

const miArray = ["manzana", "banana", "naranja"];
console.log(miArray[0]); // muestra "manzana"
console.log(miArray[1]); // muestra "banana"
console.log(miArray[2]); // muestra "naranja"


/*
Typed Arrays: Los Typed Arrays son una variante de los arrays que se utilizan para almacenar grandes cantidades de datos numéricos, como imágenes o audio. A diferencia de los arrays normales, los Typed Arrays requieren que especifiquemos el tipo de dato que vamos a almacenar en ellos.
Ejemplo:
*/

const miArrayNumerico = new Int16Array(4);
miArrayNumerico[0] = 42;
miArrayNumerico[1] = 43;
miArrayNumerico[2] = 44;
miArrayNumerico[3] = 45;
console.log(miArrayNumerico[0]); // muestra 42
console.log(miArrayNumerico[1]); // muestra 43
console.log(miArrayNumerico[2]); // muestra 44
console.log(miArrayNumerico[3]); // muestra 45


/*
Strings: En JavaScript, los strings son colecciones de caracteres que se pueden acceder mediante un índice numérico.
Ejemplo:
*/

const miString = "Hola Mundo";
console.log(miString[0]); // muestra "H"
console.log(miString[1]); // muestra "o"
console.log(miString[2]); // muestra "l"
