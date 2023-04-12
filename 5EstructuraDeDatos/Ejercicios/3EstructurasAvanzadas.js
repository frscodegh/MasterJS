/*
Arból:
Imagina que el árbol de Navidad es como un árbol de verdad, con una raíz (el tronco) y muchas ramas que se extienden desde la raíz. Cada rama del árbol puede tener otras ramas más pequeñas que se extienden desde ella, y así sucesivamente. De esta manera, podemos decir que un árbol es una estructura de datos en la que hay un elemento principal (la raíz) y muchos elementos secundarios que se extienden desde ella.
*/

class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.hijos = [];
    }
  
    agregarHijo(nodo) {
      this.hijos.push(nodo);
    }
  }
  
  // Creamos un árbol
  const raiz = new Nodo(1);
  const hijo1 = new Nodo(2);
  const hijo2 = new Nodo(3);
  const hijo3 = new Nodo(4);
  const nieto1 = new Nodo(5);
  const nieto2 = new Nodo(6);
  
  raiz.agregarHijo(hijo1);
  raiz.agregarHijo(hijo2);
  hijo2.agregarHijo(hijo3);
  hijo1.agregarHijo(nieto1);
  hijo1.agregarHijo(nieto2);
  
  console.log(raiz);
  
/*
En este ejemplo, la clase Nodo representa un nodo en el árbol. Cada nodo tiene un valor y una lista de hijos. La función agregarHijo agrega un nodo hijo a la lista de hijos del nodo actual.

Luego, creamos un árbol con una raíz y varios hijos y nietos, utilizando la función agregarHijo para agregarlos al árbol. Finalmente, imprimimos el árbol completo en la consola.
*/

/*
Grafo:
para explicar qué es un grafo, podemos usar el ejemplo de un mapa. Imagina que tienes un mapa de una ciudad con muchas calles y edificios. Cada calle es una línea que conecta dos puntos en el mapa, como si fueran los nodos de un grafo. Los edificios también son nodos, y las calles conectan los edificios. De esta manera, podemos decir que un grafo es una estructura de datos en la que hay muchos elementos (nodos) y conexiones (aristas) que los conectan.
*/

class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.vecinos = [];
    }
  
    agregarVecino(nodo) {
      this.vecinos.push(nodo);
    }
  }
  
  // Creamos un grafo
  const nodo1 = new Nodo(1);
  const nodo2 = new Nodo(2);
  const nodo3 = new Nodo(3);
  const nodo4 = new Nodo(4);
  
  nodo1.agregarVecino(nodo2);
  nodo2.agregarVecino(nodo3);
  nodo3.agregarVecino(nodo4);
  nodo4.agregarVecino(nodo1);
  
  console.log(nodo1);
  