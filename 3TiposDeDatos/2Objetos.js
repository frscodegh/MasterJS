/*
En JavaScript, los objetos son una colección de propiedades que se utilizan para almacenar datos y funciones. Las propiedades de un objeto se definen como una serie de pares clave-valor, donde la clave es una cadena que representa el nombre de la propiedad y el valor puede ser cualquier tipo de datos, incluyendo otros objetos.

Hay varias formas de crear objetos en JavaScript. Una forma común es utilizando la sintaxis de objetos literales, donde se define un objeto entre llaves {} y se agregan las propiedades separadas por comas. Aquí hay un ejemplo:
*/

let myObj = {
    name: "Facundo",
    age: 23,
    hobbies: ["programar", "anime", "leer"],
    addres: {
        street: "Calle 10",
        city: "Paysandú",
        country: "Uruguay"
    },
    sayHello: function() {
        console.log(`Hola, mi nombre es ${this.name}`);
    }
};

console.log(myObj.name) //Output: "Facundo"
console.log(myObj.hobbies[0]) //Output:"programar"
myObj.sayHello() //Output: "Hola, mi nombre es Facundo"

/*
En este ejemplo, se crea un objeto llamado myObj que tiene varias propiedades, incluyendo name, age, hobbies, address y sayHello. La propiedad address es otro objeto anidado dentro de myObj. También se define una función sayHello como una propiedad del objeto myObj.
*/

/*
Otra forma de crear objetos es utilizando el constructor de objetos, que es una función que se utiliza para crear un nuevo objeto. Aquí hay un ejemplo:
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log(`Hola, mi nombre es ${this.name}.`);
    }
  }
  
  let person1 = new Person("Juan", 30);
  let person2 = new Person("Maria", 25);
  
  console.log(person1.name); // Output: "Juan"
  console.log(person2.age); // Output: 25
  person1.sayHello(); // Output: "Hola, mi nombre es Juan."
  
/*
En este ejemplo, se define una función constructora Person que se utiliza para crear nuevos objetos de persona. Cada objeto tiene las propiedades name y age, y también tiene una función sayHello definida en su constructor.

Hay muchas otras formas de trabajar con objetos en JavaScript, como agregar o eliminar propiedades, acceder a ellas mediante variables o expresiones, y mucho más. Los objetos son una parte fundamental de JavaScript y son esenciales para el desarrollo web moderno.
*/

/*
En JavaScript, los built-in objects (objetos incorporados) son objetos predefinidos que se proporcionan en el lenguaje y que están disponibles para su uso sin necesidad de definirlos. Estos objetos proporcionan una amplia gama de funcionalidades que son útiles en el desarrollo de aplicaciones web. Algunos ejemplos de built-in objects en JavaScript incluyen:

Object: Es el objeto raíz de todos los objetos en JavaScript y proporciona propiedades y métodos comunes a todos los objetos.

Array: Es un objeto que se utiliza para almacenar una lista ordenada de elementos. Proporciona una serie de métodos útiles para trabajar con los elementos del array.

String: Es un objeto que se utiliza para representar cadenas de texto y proporciona una serie de métodos para manipular cadenas de texto.

Number: Es un objeto que se utiliza para representar números y proporciona una serie de métodos para trabajar con números.

Boolean: Es un objeto que se utiliza para representar valores booleanos (verdadero o falso) y proporciona una serie de métodos para trabajar con valores booleanos.

Math: Es un objeto que proporciona una serie de métodos para realizar operaciones matemáticas complejas, como cálculos de exponenciales y logaritmos.

Date: Es un objeto que se utiliza para trabajar con fechas y horas.

RegExp: Es un objeto que se utiliza para trabajar con expresiones regulares, que se utilizan para buscar patrones en cadenas de texto.

Estos son solo algunos ejemplos de los built-in objects disponibles en JavaScript. La mayoría de estos objetos tienen una amplia gama de métodos y propiedades que los hacen muy útiles en el desarrollo de aplicaciones web. Además, es posible crear objetos personalizados utilizando estos objetos predefinidos.
*/