/*
Crea un objeto JSON que represente un producto con los siguientes atributos: nombre, precio y descripción. Luego, imprime en consola el valor del atributo precio.

Crea un array JSON que represente una lista de tareas con los siguientes atributos: tarea (string) y completada (boolean). Luego, itera sobre el array e imprime en consola el nombre de cada tarea que esté sin completar.

Crea un objeto JSON que represente un estudiante con los siguientes atributos: nombre (string), edad (number), lista de materias (array de strings) y promedio de calificaciones (number). Luego, agrega una nueva materia al objeto y actualiza el promedio de calificaciones.
*/

/*
{
    "Nombre": "celular",
    "Precio": 10000,
    "Descripcion": "Celular muy bueno"
}

*/

let productos = '{ "nombre": "celular", "precio": 10000, "Descripcion": "Celular muy bueno" }';

let objProductos = JSON.parse(productos)
console.log(objProductos.precio)

let tareas = '{"Tareas": "Limpiar", "completadas": true, "Tareas": "Terminar roadmap", "completadas": false, "Tareas": "Empezar React Roadmap", "completadas": false}'

