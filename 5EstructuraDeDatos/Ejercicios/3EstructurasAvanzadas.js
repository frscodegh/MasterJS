/*
Crea una función que reciba un número entero y lo agregue como nodo en un árbol binario de búsqueda. Si el número ya existe en el árbol, no se agrega.

Crea una función que reciba un árbol binario y devuelva la suma de los valores de todos los nodos.

Crea una función que reciba un árbol binario y un número entero, y devuelva un booleano indicando si el número se encuentra en algún nodo del árbol.
*/

/*
Agregar un nodo en un árbol binario de búsqueda:

Comenzamos creando un objeto para representar el nodo, que tendrá un valor y dos propiedades que representan sus hijos izquierdo y derecho. Inicialmente, estos hijos serán null.
Si el árbol está vacío, creamos el nodo como raíz.
Si el valor del nodo es menor que el valor de la raíz actual, verificamos si tiene un hijo izquierdo. Si no tiene, creamos el nodo como su hijo izquierdo. Si ya tiene un hijo izquierdo, repetimos el proceso a partir de este hijo.
Si el valor del nodo es mayor que el valor de la raíz actual, verificamos si tiene un hijo derecho. Si no tiene, creamos el nodo como su hijo derecho. Si ya tiene un hijo derecho, repetimos el proceso a partir de este hijo.
Sumar los valores de todos los nodos:

Creamos una variable para almacenar la suma, inicializada en 0.
Luego, hacemos una función recursiva que recorre el árbol en profundidad. Para cada nodo, sumamos su valor a la variable de suma.
La función recursiva se llama primero para el nodo raíz, y luego para cada uno de sus hijos (primero el izquierdo y luego el derecho).
Verificar si un valor está en el árbol:

Hacemos una función recursiva que recorre el árbol en profundidad. Para cada nodo, verificamos si su valor es igual al valor buscado. Si es así, devolvemos true.
Si el valor buscado es menor que el valor del nodo actual, llamamos la función recursivamente para su hijo izquierdo (si existe).
Si el valor buscado es mayor que el valor del nodo actual, llamamos la función recursivamente para su hijo derecho (si existe).
Si llegamos a una hoja del árbol (es decir, un nodo que no tiene hijos), significa que el valor buscado no se encuentra en el árbol, y devolvemos false.
*/

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    BFS() {
      let node = this.root,
          data = [],
          queue = [];
      queue.push(node);
  
      while(queue.length) {
          node = queue.shift();
          data.push(node.value);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      return data;
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);
  console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]

  





  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    DFSPreOrder() {
      let data = [];
      function traverse(node) {
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
    }
  }
  
  const tree1 = new BinarySearchTree();
  tree1.insert(10);
  tree1.insert(6);
  tree1.insert(15);
  tree1.insert(3);
  tree1.insert(8);
  tree1.insert(20);
  console.log(tree1.DFSPreOrder()); // [10, 6, 3, 8, 15, 20]











  function isBinarySearchTree(tree) {
    let prevValue = null;
  
    function inOrderTraversal(node) {
      if (node.left) {
        if (!inOrderTraversal(node.left)) {
          return false;
        }
      }
  
      if (prevValue !== null && node.value <= prevValue) {
        return false;
      }
  
      prevValue = node.value;
  
      if (node.right) {
        if (!inOrderTraversal(node.right)) {
          return false;
        }
      }
  
      return true;
    }
  
    if (!tree.root) {
      return true;
    }
  
    return inOrderTraversal(tree.root);
  }
  
  
