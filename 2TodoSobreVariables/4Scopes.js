/*
En JavaScript, el scope (alcance) se refiere al área del código donde una variable o función es accesible. Hay dos tipos de scope en JavaScript: scope global y scope local.

El scope global se refiere a variables y funciones que están disponibles en todo el código. Si una variable o función se declara fuera de una función o bloque, se convierte en una variable o función global y está disponible para todo el código.

Por ejemplo:
*/

var x = 10;
function foo() {
  console.log(x);
}
foo(); // Output: 10

/*
En este ejemplo, la variable x se declara fuera de la función foo(), por lo que se convierte en una variable global y está disponible dentro de la función.

El scope local se refiere a variables y funciones que solo son accesibles dentro de una función o bloque específico. Si una variable o función se declara dentro de una función o bloque, solo estará disponible dentro de ese ámbito.

Por ejemplo:
*/

function foo() {
    var x = 10;
    console.log(x);
  }
  foo(); // Output: 10
  console.log(x); // Output: Uncaught ReferenceError: x is not defined
  
/*
En este ejemplo, la variable x se declara dentro de la función foo(), por lo que solo está disponible dentro de la función. Si se intenta acceder a la variable fuera de la función, se muestra un error de referencia.

Es importante tener en cuenta que los scopes pueden anidarse. Es decir, una función o bloque dentro de otro función o bloque tendrá acceso a las variables declaradas en el ámbito externo.

Por ejemplo:
*/

var x = 10;
function foo() {
  var y = 5;
  function bar() {
    console.log(x + y);
  }
  bar();
}
foo(); // Output: 15

/*
En este ejemplo, la función bar() se declara dentro de la función foo(). Por lo tanto, tiene acceso a las variables x y y declaradas en el ámbito externo. La salida de la función bar() es 15 porque x es global y y es local en foo().

Es importante comprender el concepto de scope en JavaScript para escribir código claro y evitar errores de referencia.
*/