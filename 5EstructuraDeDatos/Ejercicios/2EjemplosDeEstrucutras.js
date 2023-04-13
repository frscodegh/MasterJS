// Arrays, objetos, pilas y colas

/*
Crea un array con los nombres de 5 países y muéstralo en la consola.

Crea un array con los números del 1 al 10 y muestra únicamente los números pares en la consola.

Crea un array con objetos que representen libros. Cada objeto debe tener una propiedad title (título), author (autor) y year (año de publicación). Luego, recorre el array y muestra en la consola el título de cada libro.
*/

let paises = ['Uruguay', 'Argentina', 'Brasil', 'Chile', 'China']
console.log(paises)

let pares = [1,2,3,4,5,6,7,8,9,10]
console.log(pares % 2)


function Libros(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

let libro1 = new Libros('Harry Potter 1', 'JK', 1990)
let libro2 = new Libros('Harry Potter 2', 'JK', 1991)
let libro3 = new Libros('Harry Potter 3', 'JK', 1992)
let libros = [libro1, libro2, libro3]

libros.forEach(libro => {
  console.log(libro.title)
});


/*
let paises = ["España", "Francia", "Alemania", "Italia", "Portugal"];
console.log(paises);


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

let libros = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967
  },
  {
    title: "El nombre de la rosa",
    author: "Umberto Eco",
    year: 1980
  },
  {
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    year: 1963
  },
  {
    title: "La insoportable levedad del ser",
    author: "Milan Kundera",
    year: 1984
  }
];

for (let i = 0; i < libros.length; i++) {
  console.log(libros[i].title);
}


*/

/*
Crea un objeto que represente una persona con propiedades como nombre, edad, género, profesión, etc.

Crea un objeto que represente una mascota con propiedades como nombre, edad, especie, raza, etc.

Crea un objeto que represente una película con propiedades como título, director, año, género, etc.
*/

let person = {
  name: 'Facundo',
  age: 23,
  gender: 'male',
  job: 'Software Develper'
}

let pet = {
  name: 'Bilu',
  age: 4,
  specie: 'cat',
}

let film = {
  title: 'Harry Potter',
  director: 'Alfonso Cuaron',
  year: 2005,
  gender: 'fantasy'
}

/*
Implementa una pila utilizando un array y los métodos push y pop.

Implementa una pila utilizando un objeto y los métodos push y pop.

Implementa una pila utilizando una clase con los métodos push, pop y isEmpty.
*/

let pilaArray = []

pilaArray.push(1)
pilaArray.push(2)
pilaArray.push(3)
console.log(pilaArray)
console.log(pilaArray.pop()) //sale el ultimo elemento
console.log(pilaArray)


let pila = {
  items: [],
  agregar: function (item){
    this.items.push(item)
  },
  sacar: function (){
    return this.items.pop()
  }
}
pila.agregar(1)
pila.agregar(2)
pila.sacar // saca el 2


class Pila {
  constructor() {
    this.items = [] 
  }

  agregar(item) {
    this.items.push(item)
  }

  sacar() {
    return this.items.pop()
  }

  inEmpty() {
    return this.items.lenght === 0
  }
}

/*
Crea una cola vacía y agrega los siguientes elementos en orden: "uno", "dos", "tres". Luego, remueve el primer elemento de la cola y muestra su valor por consola.

Escribe una función que reciba un array como parámetro y que devuelva un nuevo array que contenga los mismos elementos del array original pero en orden inverso, utilizando una cola como estructura intermedia.

Implementa una cola circular de tamaño máximo 5, que permita agregar elementos al final y remover elementos desde el frente. Si se intenta agregar un elemento cuando la cola está llena, se debe mostrar un mensaje de error indicando que la cola está llena. Si se intenta remover un elemento cuando la cola está vacía, se debe mostrar un mensaje de error indicando que la cola está vacía.
*/

let cola = []
cola.push(1)
cola.push(2)
cola.push(3)
console.log(cola.shift());

(array) => {
  let nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    let element = array.pop()
    nuevoArray.push(element)
  }
  console.log(nuevoArray)
}

/*

let queue = [];
queue.push("uno");
queue.push("dos");
queue.push("tres");

console.log(queue.shift()); // muestra "uno"


function reverseArray(array) {
  let queue = [];
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    queue.push(array[i]);
  }
  
  while (queue.length > 0) {
    result.push(queue.pop());
  }
  
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // muestra [5, 4, 3, 2, 1]


class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.head = -1;
    this.tail = -1;
    this.size = size;
  }
  
  isFull() {
    return (this.head === 0 && this.tail === this.size - 1) ||
      (this.tail === this.head - 1);
  }
  
  isEmpty() {
    return this.head === -1;
  }
  
  enqueue(item) {
    if (this.isFull()) {
      console.log("Error: cola llena");
      return;
    }
    
    if (this.head === -1) {
      this.head = 0;
    }
    
    this.tail = (this.tail + 1) % this.size;
    this.items[this.tail] = item;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      console.log("Error: cola vacía");
      return;
    }
    
    let item = this.items[this.head];
    
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    
    return item;
  }
}


let queue = new CircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6); // muestra "Error: cola llena"
console.log(queue.dequeue()); // muestra 1
console.log(queue.dequeue()); // muestra 2
console.log(queue.dequeue()); // muestra 3
console.log(queue.dequeue()); // muestra 4
console.log(queue.dequeue()); // muestra 5
console.log(queue.dequeue()); // muestra "Error: cola vacía"
*/