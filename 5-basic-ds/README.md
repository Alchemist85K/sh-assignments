# Basic Data Structure

## 1. Stack

Implement a stack data structure in JavaScript that contains the following operations:

- new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor not accept any arguments.
- push(): Pushes an item onto the top of the stack. Required time complexity: O(1).
- pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
- isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
- peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
- length(): Returns the number of items in the stack. Required time complexity: O(1).

<br />

```js
const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false
```

## 2. Queue

Implement a queue data structure in JavaScript that contains the following operations:

- new Queue(): Creates an instance of a Queue class that doesn't contain any items. The constructor does not accept any arguments.
- enqueue(): Adds an item to the back of the queue. Required time complexity: O(1).
- dequeue(): Removes an item from the front of the queue. Required time complexity: O(1).
- isEmpty(): Determines if the queue is empty. Required time complexity: O(1).
- front(): Returns the item at the front of the queue without removing it from the queue. Required time complexity: O(1).
- back(): Returns the item at the back of the queue without removing it from the queue. Required time complexity: O(1).
- length(): Returns the number of items in the queue. Required time complexity: O(1).

<br />

```js
const queue = new Queue();
queue.isEmpty(); // true
queue.enqueue(1);
queue.enqueue(2);
queue.length(); // 2
queue.enqueue(3);
queue.front(); // 1
queue.back(); // 3
queue.dequeue(); // 1
queue.isEmpty(); // false
```

## 3. DFS (Depth-First Search)

Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), given a starting node.

<br />

```js
const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
depthFirstSearch(graph1, 'A'); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, 'B'); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};
depthFirstSearch(graph2, 'A')); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, 'E')); // ['E']
```

### 4. BFS (Breadth-First Search)

Write a function that implements the breadth-first search (BFS) algorithm on a directed graph (in adjacency list format), given a starting node.

BFS is an algorithm used for traversing a graph or a tree, starting from the root node and exploring all the neighbors at the current depth before moving on to nodes at the next depth level. The output from BFS is an array of the graph's nodes in the order they were traversed. Visiting neighboring nodes in any order is a valid BFS, but for this question, please visit each node's neighbors from left to right.

<br />

```js
const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};

breadthFirstSearch(graph1, 'A'); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

        A
      / | \
     B  C  D
   / |   |   | \
  E  F   G   H  I
         |
         J

breadthFirstSearch(graph1, 'B'); // ['B', 'E', 'F', 'D', 'I', 'J']

    B
   / \
  E   F
  |
  D
 / \
I   J


const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};

breadthFirstSearch(graph2, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

       A
     /   \
    B     C
  /  \   /   \
 D   E  F    G

breadthFirstSearch(graph2, 'E')); // ['E']

```
