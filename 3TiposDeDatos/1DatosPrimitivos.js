/*
String: representa un conjunto de caracteres y se define entre comillas simples o dobles. Por ejemplo: "Hola" o 'Mundo'.
*/

let greeting = "Hola, mundo!";
console.log(greeting);


/*
Undefined: representa una variable sin valor. Se utiliza cuando una variable se ha declarado pero aún no se le ha asignado ningún valor. Por ejemplo: let x; (x es undefined).
*/

let x;
console.log(x); // Output: undefined


/*
Number: representa un número entero o decimal. Por ejemplo: 42 o 3.14.
*/

let age = 42; //Tambien llamados int
let pi = 3.14;// Tambien llamados float
console.log(age, pi);


/*
BigInt: representa números enteros grandes, más allá del límite de 253-1. Se define agregando la letra n al final de un número entero. Por ejemplo: 9007199254740991n.
*/

let bigNumber = 9007199254740991n;
console.log(bigNumber);


/*
Boolean: representa un valor lógico verdadero (true) o falso (false).
*/

let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);


/*
Null: representa la ausencia intencional de cualquier objeto o valor.
*/

let myValue = null;
console.log(myValue);


/*
(Tipo avanzado)
Symbol: representa un valor único e inmutable que se puede usar como clave de propiedad de un objeto.
*/

let mySymbol = Symbol("My symbol");
console.log(mySymbol);
