//¿Qué valor se imprimirá por pantalla al ejecutar este código?
var x = 1;

function foo() {
  var x = 2;
  console.log(x);
}

foo();//2
console.log(x);//1

//¿Qué valor se imprimirá por pantalla al ejecutar este código?
function bar() {
  var y = 3;
  function baz() {
    console.log(y);
  }
  baz();
}

bar(); //3

//¿Qué valor se imprimirá por pantalla al ejecutar este código?
var a = 1;

function qux() {
  console.log(a);
}

function quux() {
  var a = 2;
  qux();
}

quux(); //1

/*
Respuesta: 2 y 1
La variable x se declara dos veces en este código: una vez en el ámbito global con el valor 1, y otra vez dentro de la función foo() con el valor 2. Al llamar a la función foo(), se imprimirá por pantalla el valor de la variable x dentro de la función, es decir, 2. Luego, al llamar a console.log(x) fuera de la función, se imprimirá el valor de la variable x en el ámbito global, es decir, 1.

Respuesta: 3
La función baz() se declara dentro de la función bar(), por lo que tiene acceso al ámbito de bar(). La variable y se declara dentro de bar(), por lo que también está disponible en baz(). Al llamar a la función baz(), se imprimirá por pantalla el valor de y, es decir, 3.

Respuesta: 1
La variable a se declara en el ámbito global con el valor 1. La función qux() también se declara en el ámbito global y tiene acceso a la variable a. La función quux() se declara en el ámbito global y también tiene acceso a la variable a. Dentro de quux(), se declara una nueva variable a con el valor 2. Luego, se llama a la función qux(), que imprime por pantalla el valor de la variable a en el ámbito en el que fue declarada, es decir, en el ámbito global, donde tiene un valor de 1.
*/