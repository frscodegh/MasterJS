/*
Ejercicio 1:
Crea una colección indexada que contenga los nombres de los días de la semana en orden. Muestra por consola el nombre del tercer día de la semana.

Ejercicio 2:
Crea una colección indexada que contenga los nombres de los meses del año en orden. Agrega los nombres de los meses que faltan para completar el año. Luego, muestra por consola el número total de meses en la colección.

Ejercicio 3:
Crea una colección indexada con los números del 1 al 10. Agrega dos nuevos números al inicio de la colección y tres al final. Muestra por consola el primer y último número de la colección.
*/

let semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
console.log(semana[2])

let mesesDelAño = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre'
]
mesesDelAño.push('Diciembre')
console.log(mesesDelAño.length)

let numeros = [3,4,5,6,7]
numeros.unshift(2)
numeros.unshift(1)
numeros.push(8)
numeros.push(9)
numeros.push(10)
console.log(numeros)

/*
// Agregar un elemento al final del array
array1.push(6);

// Agregar un elemento al inicio del array
array1.unshift(0);

// Eliminar el último elemento del array
array1.pop();

// Eliminar el primer elemento del array
array1.shift();
*/