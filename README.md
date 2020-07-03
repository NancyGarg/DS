# DS
## Big-O Notation Primer
* It measures the worst case complexity of an algorithm
* Example of O(1)=Accessing array element by index.
* Example of O(n)=Printing elements from 1 to n.
* Example of O(log n)=Printing elements that are power of 2 from 2 to n.

### Big-O notation provides some fundamental rules that help developers compute for f(n),that is complexity of an algorithm:

1. Coefficient rule: If f(n) is O(g(n)), then kf(n) is O(g(n)), for any
constant k > 0. The first rule is the coefficient rule, which eliminates
coefficients not related to the input size, n. This is because as n
approaches infinity, the other coefficient becomes negligible.

2. Sum rule: If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is
O(h(n)+p(n)). The sum rule simply states that if a resultant time
complexity is a sum of two different time complexities, the resultant
Big-O notation is also the sum of two different Big-O notations.

3. Product rule: If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is
O(h(n)p(n)). Similarly, the product rule states that Big-O is multiplied
when the time complexities are multiplied.

4. Transitive rule: If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is
O(h(n)). The transitive rule is a simple way to state that the same time
complexity has the same Big-O.

5. Polynomial rule: If f(n) is a polynomial of degree k, then f(n) is
O(n k ). Intuitively, the polynomial rule states that polynomial time
complexities have Big-O of the same polynomial degree.

6. Log of a power rule: log(nk) is O(log(n)) for any constant k > 0. With
the log of a power rule, constants within a log function are also
ignored in Big-O notation.

### Js Scope
  * Global Scope:Acessible globally
  * Local Scope:Accessible to a specific code
    - Functional Scope:using var keyword
    - Block scope using let keyword.
    
  
  In JavaScript, var is one keyword used to declare variables. These variable declarations
“float” all the way to the top. This is known as variable hoisting.

### Equality and Types
  * Truly/Falsey Checking
  ```
  if(node){
         ...
 }
/* Here, node is some variable. If that variable is empty, null, or undefined, it will be
evaluated as false.
Here are commonly used expressions that evaluate to false:
• false
• 0
• Empty strings ('' and "")
• NaN
• undefined
• null */
```
## JS Strings
```

// String Access,For accessing characters, you use .chartAt().
 'dog'.charAt(1); // returns "o"
 

// String Comparison
var a = 'add';
var b = 'b';
console.log(a < b); // prints 'true'

var a = 'add';
var b = 'ab';
console.log(a < b); // prints 'false'


// String Search,you can use .indexOf(searchValue[,fromIndex]).
var test1 = 'chicken';
test1.split(""); // ["c", "h", "i", "c", "k", "e", "n"]


// String Replace,.replace(string, replaceString) replaces a specified string within a string variable with another string.
"Wizard of Oz".replace("Wizard","Witch"); // "Witch of Oz"


// String Decomposition
'String'.split(''); // ['S','t','r','i','n','g']
```

### Encoding

Base64 Encoding:The btoa() function creates a Base64-encoded ASCII string from a string. Each character
in the string is treated as a byte (8 bits: eight 0 and 1s).
The .atob() function decodes a string of data that has been encoded using Base64
encoding. For example, the string “hello I love learning to computer program” in a
Base64-encoded string looks like this: ­aGVsbG8gSSBsb3ZlIGxlYXJuaW5nIHRvIGNvbXB
1dGVyIHByb2dyYW0.

## JS Arrays
### Iteration
* Time complexity is O(n) always.
 
1. For loop
for (Variables; Condition; Modification)

2. while loop
```
 while(true){
    if (breakCondition) {
        break;
   }
 }
```
3. for ( in )
```
 var array1 = ['all','cows','are','big'];
  for (var index in array1) {
       console.log(index);
 }
 // This prints the following: 0,1,2,3.
```
4. for ( of )
The variable specified before of is the element (the value) of the array, as follows:
```
  for (var element of array1) {
      console.log(element);
  }
 // This prints out all, cows, are, and big.
```
5. forEach( )
The big difference between forEach and other methods of iteration is that forEach
cannot break out of the iteration or skip certain elements in the array.

### Helper functions
1. slice(begin,end)
 * This helper function returns a portion of an existing array without modifying the array.
 * .slice() takes two parameters: the beginning index and the ending index of the array.
 ```
 var array1 = [1,2,3,4];
 array1.slice(1,2); //returns [2], array1 = [1,2,3,4]
 ```

This is useful for copying an array in JavaScript. Remember that arrays in JavaScript
are reference-based, meaning that if you assign a new variable to an array, changes to
that variable apply to the original array.

2. To create a new array, you can use .from().
```
 var array1 = [1,2,3,4];
 var array2 = Array.from(array1);
```

3. .splice(begin,size,element1,element2...)
* This helper function returns and changes the contents of an array by removing existing elements and/or adding new elements.

4. .concat()
* This adds new elements to the array at the end of the array and returns the array.
```
 var array1 = [1,2,3,4];
 array1.concat(); //returns [1,2,3,4], array1 = [1,2,3,4]
 array1.concat([2,3,4]); //returns [1,2,3,4,2,3,4],array1 = [1,2,3,4]
```

5. Spread Operator
The spread operator, denoted by three periods (...), is used to expand arguments where zero arguments are expected.

### Functional Array methods
* Map
* Filter
* Reduce:This function(Reduce) also can take initialValue as its second argument, which initializes
the reduce value. For example, providing an initialValue of 1 in the previous example
will yield 11, as shown here:
```
 var sum = [0,1,2,3,4].reduce( function (prevVal, currentVal, index,array) {
     return prevVal + currentVal;
     }, 1);
 console.log(sum); // prints 11
 ```
Instead of multidimensional arrays, there are “jagged” arrays. A jagged array is an array whose elements are
arrays. The elements of a jagged array can be of different dimensions and sizes

### Big O of Array Operations
* Push-O(1)
* Pop-O(1)
* Shift-O(n)
* Unshift-O(n)
* Sort-O(n log n)
* Concat-O(n)
* Slice-O(n)
* Splice-O(n)
* forEach,map,fillter,reduce,etc-O(n)

## Recursive Functions

Functions that calls itself

JSON.parse(), JSON.stringify(),document.getElementById(),DOM traversal algorithms and
Object traversal etc. are mostly implemented using this.

### Pitfalls
 
* Wrong base case or no base case
* Wrong return statement or forgetting to return
* Stack overflow

## Searching ALgorithms
 ### 1. Linear Search (Time Complexity=O(n))
 Javascript built-in functions that use linear search behind the scenes : 
 * indexOf()
 * includes()
 * find()
 * findIndex()
 
 ### 2. Binary Search (Time Complexity=O(log n))
 * Works only on sorted data
 
 ### 3. Naive String Search
 * Searching substring in a string.
 
 ## Sorting ALgorithms
  ### 1. Bubble Sort (Time Complexity=O(n^2)
  ### 2. Insertion Sort (Time Complexity=O(n^2)
  ### 3. Selection Sort (Time Complexity=O(n^2))
  ### 4. Merge Sort (Time Complexity=O(n*logn) & Space Complexity=O(n))
  ### 5. Quick Sort (Time Complexity=O(n*log n) and it's in-place sorting algorithm)
  
 ## Singly Linked List
 * A data structure that contains a head(beginning of the list),tail(end of the list) and length propperty.
 * Linked Lists consists of nodes,and each node has a value and pointer to another value or null.
 * Movement is allowed in one direction only.
 * In comparison to array:
   * Linked Lists do not have indexes.
   * These are connected via nodes with the next pointer 
   * Random access is not allowed here.
   * Insertion/deletion at beginning is cheaper
 * Complexity of various operations
   * Insertion = O(1)
   * Deletion = O(1)
   * Access = O(n)
   * Search = O(n)
   
 ## Doubly Linked List
 * Every node has prev and next to move back and forth in comparison to singly linked list that could move only forward.
 * A few operations become easier to perform.
 * Takes more space
 * Complexity of various operations
   * Insertion at beginning/end = O(1)
   * Deletion at beginning/end = O(1) 
   * Access = O(n)
   * Search = O(n)
   
 ## Stacks
  * Abstract data structure based on LIFO(Last In First Out) principle.
  * Last element added to the stack will be the the first element removed from the stack.
  * Examples
    * Managing function invocations (Call Stack)
    * Undo/Redo
    * Routing (the history object) is treated like a stack too.
  * Complexity of various operations
    * Insertion (Push) = O(1)
    * Removal (Pop) = O(1)
   
    
 ## Queues
  * Abstract data structure based on FIFO(First In First Out) principle.
  * First element added to the queue will be the the first element removed from the stack.
  * Examples
    * Background tasks
    * Uploading resources
    * Printing/Task processing
  * Complexity of various operations
    * Insertion (Enqueue) = O(1)
    * Removal (Dequeue) = O(1)
 ## Trees
  * It's a non-linear data structure. 
  * A data structire that consists of nodes in a parent/child relationship.
  * One node can have refrence to more than one node.
  * In trees, parent can direct towards child/children only.
  * It has only one entry point.
  * ROOT:It's the top node in a tree.
  * CHILD:A node directly connected to another node when moving away from the root.
  * PARENT:Converse of a child.
  * SIBLINGS:A group of nodes with the same parents
  * LEAF:A node with no children
  * EDGE:connection between two nodes
  * Applications of trees:
    * HTML DOM
    * Network Routing
    * Abstract syntax tree
    * Artfificial Inteligence
    * Folders in os
    * Computer File System
    
  ### Binary Tree
   * Special type of tree
   * One node can have atmost 2 children
   
  ### Binary Search Tree
   * Special type of binary tree
   * Nodes are arranged in a particular order
   * They are used to store data that can be compared.
   * For any particular node,any values less than it will be stored towards left,and bigger values will be stored towards right
   * Complexity of various operations
     * Insertion = O(log n)
     * Searching = O(log n)

 
