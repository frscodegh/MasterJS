/*
En JavaScript, existen tres formas de declarar variables: var, let y const.

var es la forma más antigua de declarar variables en JavaScript y aún es compatible con todas las versiones del lenguaje. Las variables declaradas con var tienen un alcance de función o de archivo, lo que significa que están disponibles dentro de la función o archivo en el que se declaran. Si se declaran dentro de una función, no estarán disponibles fuera de ella. Las variables declaradas con var también pueden ser reasignadas y actualizadas en cualquier momento.

Por ejemplo:
*/

var x = 10;
function foo() {
  var y = 5;
  console.log(x + y);
}
foo(); // Output: 15
console.log(y); // Output: Uncaught ReferenceError: y is not defined


/*
let y const fueron introducidos en ECMAScript 6 y ofrecen formas más seguras y precisas de declarar variables.

let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas en el mismo ámbito. Las variables declaradas con let tienen un alcance de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declaran (por ejemplo, dentro de una función o un bucle for). No pueden ser accedidas desde fuera del bloque. También pueden ser actualizadas en cualquier momento.

Por ejemplo:
*/

let x = 10;
if (true) {
  let y = 5;
  console.log(x + y);
}
console.log(y); // Output: Uncaught ReferenceError: y is not defined


/*
const se utiliza para declarar variables que no pueden ser reasignadas ni redeclaradas en el mismo ámbito. Las variables declaradas con const también tienen un alcance de bloque. No pueden ser reasignadas, pero si se declaran con objetos o arreglos, los valores dentro de ellos pueden ser actualizados.

Por ejemplo:
*/

const x = 10;
if (true) {
  const y = 5;
  console.log(x + y);
}
console.log(y); // Output: Uncaught ReferenceError: y is not defined


/*
Es una buena práctica utilizar const siempre que sea posible para evitar la reasignación accidental de variables, y utilizar let solo cuando se necesite reasignar la variable en el futuro. var solo se debe usar en casos especiales en los que se necesite compatibilidad con versiones anteriores de JavaScript.
*/