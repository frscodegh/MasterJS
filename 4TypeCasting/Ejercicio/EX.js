/*
Crea una variable numberVariable con valor "42", conviértela a un número utilizando la función Number() y guárdala en una nueva variable llamada convertedNumber. Luego, verifica el tipo de datos de convertedNumber utilizando el operador typeof.

Crea una variable stringVariable con valor 42, conviértela a una cadena de texto utilizando el método toString() y guárdala en una nueva variable llamada convertedString. Luego, verifica el tipo de datos de convertedString utilizando el operador typeof.

Crea una variable booleanVariable con valor 0, conviértela a un valor booleano utilizando el operador !! y guárdala en una nueva variable llamada convertedBoolean. Luego, verifica el tipo de datos de convertedBoolean utilizando el operador typeof.

Por favor, intenta realizar los ejercicios y verificar los tipos de datos resultantes utilizando el operador typeof.
*/

let numberVariable = '42'
let convertedNumber = Number.parseInt(numberVariable)
console.log(typeof convertedNumber)

let stringVariable = 42
convertedString = Number.toString(stringVariable)
console.log(typeof convertedString)

let booleanVariable = 0
let convertedBoolean = !!booleanVariable
console.log(typeof convertedBoolean)



/*
let numberVariable = "42";
let convertedNumber = Number(numberVariable);
console.log(typeof convertedNumber); // Output: "number"

let stringVariable = 42;
let convertedString = stringVariable.toString();
console.log(typeof convertedString); // Output: "string"

let booleanVariable = 0;
let convertedBoolean = !!booleanVariable;
console.log(typeof convertedBoolean); // Output: "boolean"

Recuerda que en JavaScript el type casting se refiere a la conversión de un tipo de datos a otro, y existen diferentes formas de lograrlo dependiendo de las necesidades específicas del programa.
*/

/*
Number() != Number.parseInt()

¡Excelente observación! La función Number() y Number.parseInt() son funciones distintas en JavaScript.

La función Number() convierte un valor a un número, mientras que Number.parseInt() convierte una cadena de caracteres en un número entero. La diferencia radica en cómo se comportan ante valores no numéricos. Si Number() recibe un valor no numérico, devolverá NaN, mientras que Number.parseInt() intentará convertir la cadena hasta el primer carácter no numérico, ignorando el resto de la cadena. Si no se encuentra ningún dígito numérico, Number.parseInt() devolverá NaN.

Por ejemplo, si tenemos una cadena "42px":

let str = "42px";
console.log(Number(str)); // Output: NaN
console.log(Number.parseInt(str)); // Output: 42
En la primera línea, Number() devuelve NaN ya que la cadena contiene caracteres no numéricos (px). En la segunda línea, Number.parseInt() intenta convertir la cadena en un número entero hasta el primer carácter no numérico (px), y devuelve 42.

Por lo tanto, en el primer ejercicio se podría utilizar Number.parseInt() en lugar de Number() si queremos asegurarnos de que el valor convertido sea un número entero.

*/

/*
Hay una diferencia importante entre stringVariable.toString() y Number.toString(stringVariable).

La función toString() es un método que se puede aplicar a cualquier objeto en JavaScript, incluyendo tanto a los tipos primitivos como a los objetos. En el caso de stringVariable.toString(), el método toString() se aplica al valor almacenado en la variable stringVariable, que es un número, convirtiéndolo en una cadena de caracteres.

Por otro lado, Number.toString() es un método que se aplica a un número para convertirlo en una cadena de caracteres. En este caso, si quisieras convertir el valor almacenado en stringVariable en una cadena de caracteres, deberías llamar al método toString() directamente sobre ese valor, de la siguiente forma:


let stringVariable = 42;
let convertedString = stringVariable.toString();
console.log(typeof convertedString); // Output: "string"


Si intentaras llamar al método toString() de la siguiente forma: Number.toString(stringVariable), obtendrías un error, ya que Number.toString() espera un número como argumento, y no una cadena de caracteres.
*/