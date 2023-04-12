/*
Arrays: son una estructura de datos muy común en la programación y se utilizan para almacenar una colección de elementos ordenados. Los arrays se pueden usar para almacenar una lista de números, una lista de palabras, una lista de objetos, entre otros.
*/

const numeros = [1, 2, 3, 4, 5];
const palabras = ['hola', 'mundo', 'en', 'JavaScript'];
const personas = [{ nombre: 'Juan', edad: 25 }, { nombre: 'María', edad: 30 }];

/*
Objetos: son una estructura de datos muy utilizada en JavaScript y se utilizan para almacenar datos en pares de clave-valor. Los objetos se pueden usar para representar entidades en una aplicación, como un usuario, una orden, un producto, entre otros.
*/

const usuario = { 
    nombre: 'Juan', 
    edad: 25, 
    email: 'juan@example.com'
  };
  
  const orden = {
    id: 1234,
    productos: ['camisa', 'pantalon'],
    total: 50.00,
    fecha: new Date()
  };
  

/*
Pilas: son una estructura de datos muy útil cuando se necesita un seguimiento LIFO (Last-In-First-Out) para la gestión de datos. Las pilas se pueden usar en la implementación de funciones recursivas y en la realización de cálculos matemáticos.
*/

const pila = [];

pila.push(1);
pila.push(2);
pila.push(3);

console.log(pila.pop()); // 3
console.log(pila.pop()); // 2
console.log(pila.pop()); // 1

/*
Colas: son una estructura de datos muy útil cuando se necesita un seguimiento FIFO (First-In-First-Out) para la gestión de datos. Las colas se pueden usar en la implementación de procesos de espera y en la realización de cálculos matemáticos.
*/

const cola = [];

cola.push(1);
cola.push(2);
cola.push(3);

console.log(cola.shift()); // 1
console.log(cola.shift()); // 2
console.log(cola.shift()); // 3

