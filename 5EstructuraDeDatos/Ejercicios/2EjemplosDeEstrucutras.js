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