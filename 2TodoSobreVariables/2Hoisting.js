/*
El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones se mueven al comienzo del alcance actual antes de que se ejecute el código. Esto significa que, aunque una variable o función se declare más adelante en el código, JavaScript la tratará como si se hubiera declarado al comienzo.

El hoisting se aplica solo a las declaraciones, no a las asignaciones. Por lo tanto, cuando una variable se declara y se le asigna un valor en una sola línea, solo la declaración se mueve al comienzo del alcance actual, no la asignación.

Por ejemplo:


*/

console.log(x); // Output: undefined
var x = 10;

/*
En este ejemplo, aunque la variable x se declara después de la instrucción console.log(), la variable se mueve al comienzo del alcance actual y se inicializa con el valor undefined. Por lo tanto, cuando se intenta acceder a x antes de su inicialización, se muestra undefined en la consola.

El hoisting también se aplica a las funciones declaradas con la palabra clave function. En este caso, la declaración de la función completa se mueve al comienzo del alcance actual, lo que significa que la función se puede llamar antes de que se declare.

Por ejemplo:
*/

foo(); // Output: "Hello, world!"
function foo() {
  console.log("Hello, world!");
}

/*
En este ejemplo, la función foo() se llama antes de su declaración, pero debido al hoisting, la declaración se mueve al comienzo del alcance actual, lo que permite que la función se ejecute correctamente.

Es importante tener en cuenta que el hoisting puede hacer que el código sea más difícil de leer y comprender. Por lo tanto, es una buena práctica declarar todas las variables y funciones al comienzo del alcance actual para evitar confusiones y errores.
*/