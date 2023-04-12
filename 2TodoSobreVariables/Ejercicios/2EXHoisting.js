//¿Qué será impreso en la consola? 

console.log(nombre);
var nombre = "Juan";
//¿Qué será impreso en la consola? 

nombre = "Juan";
console.log(nombre);
var nombre;
//¿Qué será impreso en la consola? 

function saludar() {
  console.log("Hola, " + nombre);
}
saludar();
var nombre = "Juan";

/*
Respuesta: undefined
En este ejemplo, se declara una variable nombre utilizando la palabra clave var. Debido al hoisting, la declaración de la variable se mueve al principio del ámbito actual, pero su asignación no. Por lo tanto, cuando se intenta imprimir el valor de la variable antes de asignarle un valor, su valor es undefined.

Respuesta: "Juan"
En este ejemplo, se asigna un valor a la variable nombre antes de declararla utilizando la palabra clave var. Debido al hoisting, la declaración de la variable se mueve al principio del ámbito actual, por lo que la variable está disponible para su uso en la línea donde se asigna su valor.

Respuesta: "Hola, undefined"
En este ejemplo, se llama a la función saludar() antes de declarar la variable nombre utilizando la palabra clave var. Debido al hoisting, la declaración de la variable se mueve al principio del ámbito actual, pero su asignación no. Por lo tanto, cuando se llama a la función saludar(), el valor de nombre es undefined.
*/