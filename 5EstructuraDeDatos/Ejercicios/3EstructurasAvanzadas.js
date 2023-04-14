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