/*
En JavaScript, el operador typeof se utiliza para determinar el tipo de datos de una variable o expresión. El operador devuelve una cadena que indica el tipo de datos de la variable o expresión.

La sintaxis del operador typeof es la siguiente:
*/

typeof variable

/*
Donde variable es el nombre de la variable o la expresión cuyo tipo de datos se desea determinar.

El operador typeof devuelve una de las siguientes cadenas:

"undefined": Si la variable o expresión no está definida.
"boolean": Si la variable o expresión es de tipo booleano.
"number": Si la variable o expresión es de tipo numérico.
"string": Si la variable o expresión es de tipo cadena de texto.
"object": Si la variable o expresión es de tipo objeto (excepto si es null).
"function": Si la variable o expresión es de tipo función.
"symbol": Si la variable o expresión es de tipo símbolo (introducido en ES6).
A continuación se muestra un ejemplo de uso del operador typeof:
*/

let variable1;
let variable2 = 42;
let variable3 = "Hola, mundo!";
let variable4 = true;
let variable5 = {nombre: "Juan", edad: 30};
let variable6 = function() {
  console.log("Hola, soy una función");
};

console.log(typeof variable1); // "undefined"
console.log(typeof variable2); // "number"
console.log(typeof variable3); // "string"
console.log(typeof variable4); // "boolean"
console.log(typeof variable5); // "object"
console.log(typeof variable6); // "function"


/*
En este ejemplo, se utilizó el operador typeof para determinar el tipo de datos de diferentes variables. La salida del código será:
*/

/*
undefined
number
string
boolean
object
function

*/