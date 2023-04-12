/*
El type casting explícito se realiza de forma manual utilizando funciones y operadores específicos de JavaScript. Algunas de las funciones utilizadas para type casting en JavaScript son:

parseInt(): Convierte una cadena de texto en un número entero.
parseFloat(): Convierte una cadena de texto en un número decimal.
String(): Convierte un valor a una cadena de texto.
Number(): Convierte un valor a un número.
A continuación se muestran algunos ejemplos de type casting en JavaScript:
*/

// Type casting implícito
let num1 = 42;
let str1 = "Hola";

let result1 = num1 + str1; // num1 se convierte automáticamente a una cadena de texto
console.log(result1); // "42Hola"

let num2 = 42;
let str2 = "42";

let result2 = num2 == str2; // str2 se convierte automáticamente a un número
console.log(result2); // true

// Type casting explícito
let str3 = "42";
let num3 = parseInt(str3); // str3 se convierte explícitamente a un número
console.log(num3); // 42

let num4 = 3.14159;
let str4 = String(num4); // num4 se convierte explícitamente a una cadena de texto
console.log(str4); // "3.14159"
