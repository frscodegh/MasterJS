/*
Declara una variable llamada "nombre" y asígnale tu nombre. Luego, declara otra variable llamada "edad" y asígnale tu edad. Imprime en la consola una cadena que diga "Mi nombre es [nombre] y tengo [edad] años".
*/

let nombre = "Facundo"
let edad = 23
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)

/*
Crea una variable llamada "precio" y asígnale un número. Crea otra variable llamada "descuento" y asígnale otro número. Calcula el precio final después del descuento y almacénalo en una variable llamada "precioFinal". Imprime el precio final en la consola.
*/

let precio = 50
let descuento = 10
let precioFinal = precio - descuento
console.log(`El precio final es ${precioFinal}`)

/*
Crea una variable llamada "numeros" y asígnale un arreglo de números. Usa la función reduce() para calcular la suma de todos los números en el arreglo y almacena el resultado en una variable llamada "suma". Imprime la suma en la consola.
*/

let numeros = [1,2,3,4,5]
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(`La suma de los numeros ${numeros} es ${suma}`)

/*
La función reduce() es un método que se utiliza en los arreglos de JavaScript para procesar cada uno de los elementos y reducirlos a un valor único. La función toma una función de devolución de llamada como argumento y se ejecuta en cada elemento del arreglo. La función de devolución de llamada toma dos argumentos: el valor acumulado y el valor actual del elemento del arreglo.

La función reduce() realiza un bucle en el arreglo y en cada iteración, llama a la función de devolución de llamada con los argumentos mencionados anteriormente. En la primera iteración, el valor acumulado es igual al valor inicial que se proporciona como segundo argumento a la función reduce(). En las iteraciones siguientes, el valor acumulado es el valor devuelto por la función de devolución de llamada en la iteración anterior.

Finalmente, la función reduce() devuelve el valor acumulado como resultado final.
*/

/*
En el ejemplo anterior, la función de devolución de llamada toma dos argumentos: acumulador y numero. En cada iteración, se suma el valor del número actual al acumulado anterior y se devuelve el resultado como el nuevo valor acumulado. En la primera iteración, el valor acumulado es 0 porque ese es el valor inicial que proporcionamos como segundo argumento a la función reduce(). Luego, se suma 1 al valor acumulado, y así sucesivamente hasta que se procesan todos los elementos del arreglo. Finalmente, la función reduce() devuelve el valor acumulado, que es 15 en este caso (la suma de todos los números del arreglo).
*/

/*
Dado un arreglo de palabras, une todas las palabras en una sola cadena usando la función reduce()
*/

let palabras = ["Hola", "a", "todos", "!"];
let mensaje = palabras.reduce((acumulador, palabraActual) => {
  return acumulador + " " + palabraActual;
});
console.log(mensaje); // resultado: "Hola a todos !"

/*
En este ejemplo, la función de devolución de llamada une cada palabra al acumulado anterior, separándolas por un espacio. En la primera iteración, el acumulado es el primer elemento del arreglo y la palabra actual es el segundo elemento. Luego, se une el segundo elemento al primero, separándolos por un espacio. En las iteraciones siguientes, se une la palabra actual al acumulado y se separan por un espacio. Finalmente, la función reduce() devuelve la cadena resultante de unir todas las palabras del arreglo.
*/