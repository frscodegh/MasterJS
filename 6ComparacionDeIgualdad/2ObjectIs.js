/*
Object.is es un método estático de JavaScript que se utiliza para comparar dos valores y determinar si son iguales. A diferencia del operador ===, Object.is no convierte los valores antes de hacer la comparación, lo que significa que es más preciso en algunos casos.

Object.is toma dos argumentos y devuelve un valor booleano (true o false) según si los valores son iguales o no. Si ambos argumentos son del mismo tipo y tienen el mismo valor, Object.is devuelve true. Si los argumentos son de tipos diferentes o tienen valores diferentes, devuelve false.
*/

console.log(Object.is(1, 1)); // true
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is(true, true)); // true

console.log(Object.is(1, '1')); // false
console.log(Object.is([], [])); // false
console.log(Object.is({}, {})); // false

/*
En el primer grupo de ejemplos, Object.is devuelve true porque los valores son idénticos. En el segundo grupo, Object.is devuelve false porque los valores son diferentes. Es importante tener en cuenta que Object.is no realiza la conversión de tipos que hace el operador ==, por lo que es más preciso en algunos casos.
*/