/*
En JavaScript, hay dos operadores de comparación de igualdad: == y ===. Ambos operadores se utilizan para comparar dos valores y devuelven un valor booleano (true o false) según si los valores son iguales o no.

El operador == realiza una comparación débil de igualdad, mientras que === realiza una comparación estricta de igualdad.

La comparación débil de igualdad (==) convierte automáticamente los tipos de datos de los operandos para intentar hacer una comparación adecuada. Por ejemplo:
*/

console.log(1 == '1'); // true
console.log(true == 1); // true
console.log(null == undefined); // true

/*
En estos ejemplos, JavaScript convierte el string '1' en un número para compararlo con el número 1, convierte el booleano true en el número 1 para compararlo con 1, y considera que null y undefined son iguales.

Sin embargo, la comparación estricta de igualdad (===) no convierte los tipos de datos de los operandos. En este caso, los valores sólo serán iguales si son del mismo tipo y tienen el mismo valor. Por ejemplo:
*/

console.log(1 === '1'); // false
console.log(true === 1); // false
console.log(null === undefined); // false

/*
En estos ejemplos, las comparaciones son falsas porque los valores son de tipos diferentes.

En general, se recomienda utilizar el operador === en lugar del operador == para evitar confusiones y errores en la comparación de valores.
*/