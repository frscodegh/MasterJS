/*
JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer y escribir. Se utiliza para enviar y recibir datos estructurados entre aplicaciones, ya que se puede entender fácilmente por humanos y máquinas.

La sintaxis de JSON es muy similar a la sintaxis de los objetos en JavaScript. Los datos se representan como pares de clave-valor separados por comas, y se delimitan con llaves {} para objetos y corchetes [] para arreglos. Las claves siempre deben ser strings, y los valores pueden ser strings, números, booleanos, objetos o arreglos.

Veamos un ejemplo de un objeto JSON:
{
  "nombre": "Juan",
  "edad": 25,
  "casado": false,
  "hobbies": ["correr", "leer", "ver películas"],
  "direccion": {
    "calle": "Av. Independencia",
    "numero": 123,
    "ciudad": "Santiago"
  }
}

*/

/*
Para trabajar con JSON en JavaScript, podemos utilizar el método JSON.parse() para convertir una cadena JSON en un objeto JavaScript, o JSON.stringify() para convertir un objeto JavaScript en una cadena JSON.
*/
// Convertir una cadena JSON en un objeto JavaScript
const jsonStr = '{ "nombre": "Juan", "edad": 25 }';
const obj = JSON.parse(jsonStr);
console.log(obj.nombre); // "Juan"
console.log(obj.edad); // 25

// Convertir un objeto JavaScript en una cadena JSON
const persona = {
  nombre: 'María',
  edad: 30,
  casado: true,
  hobbies: ['cantar', 'bailar', 'tocar guitarra'],
  direccion: {
    calle: 'Av. Providencia',
    numero: 456,
    ciudad: 'Santiago'
  }
};
const jsonStr2 = JSON.stringify(persona);
console.log(jsonStr2);
/*
  {"nombre":"María","edad":30,"casado":true,"hobbies":["cantar","bailar","tocar guitarra"],"direccion":{"calle":"Av. Providencia","numero":456,"ciudad":"Santiago"}}
*/

/*
JSON es muy útil para enviar y recibir datos entre el cliente y el servidor en aplicaciones web. Por ejemplo, cuando hacemos una petición AJAX al servidor, el servidor puede responder con un objeto JSON que contiene los datos que necesitamos mostrar en la página web. Luego, podemos utilizar JSON.parse() para convertir la respuesta en un objeto JavaScript que podemos manipular en nuestro código.
*/