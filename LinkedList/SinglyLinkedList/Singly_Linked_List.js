class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //traversing the list
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // Pushing at the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = this.length + 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length = this.length + 1;
    }
    return this;
  }

  // Removing en element from the end of the list
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let currentNode = this.head;
      let prevNode = this.head;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.length = this.length - 1;
      if (this.length === 0) {
        this.head = null;
        this.head = null;
      }
      return currentNode;
    }
  }

  // Removing an element from beginning of the list
  shift() {
    if (!this.head) return undefined;
    let firstNode = this.head;
    this.head = this.head.next;
    this.length = this.length - 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return firstNode;
  }

  // Adding an element at the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
    }
    this.length = this.length + 1;
    return this;
  }

  //Retrieve a node by it's position in the Linked List
  get(index) {
    if (index >= this.length || index < 0) return null;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex != index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  // Set/Replace value at particular index
  set(index, value) {
    var nodeIndex = this.get(index);
    if (nodeIndex) {
      nodeIndex.value = value;
      return true;
    }
    return false;
  }
  // Inserting the node at particular index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) return !!this.push(value);
    if (index == 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // remove node at a particular index
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index == this.length - 1) return !!this.pop();
    if (index == 0) return !!this.shift();

    let prevNode = this.get(index - 1);
    let indexNode = this.get(index);

    prevNode.next = indexNode.next;
    this.length = this.length - 1;
    return indexNode;
  }

  //Reversing a linked list
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    var prevNode = null;
    var nextNode = null;
    for (var i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      node.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}
