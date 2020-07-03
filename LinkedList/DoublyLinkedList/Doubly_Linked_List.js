class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.head == null) {
      return undefined;
    } else if (this.length == 1) {
      let currentNode = this.tail;
      this.head = null;
      this.tail - null;
      this.length--;
      return currentNode;
    } else {
      let currentNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return currentNode;
    }
  }
  shift() {
    if (this.head == null) return undefined;
    else if (this.length == 1) {
      let currentNode = this.head;
      this.head = null;
      this.tail - null;
      this.length--;
      return currentNode;
    } else {
      let currentNode = this.head;
      this.head = currentNode.next;
      this.head.prev = null;
      currentNode.next = null;
      this.length--;
      return currentNode;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    else if (index <= this.length / 2) {
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex != index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode;
    } else {
      let currentIndex = this.length - 1;
      let currentNode = this.tail;
      while (currentIndex != index) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
      return currentNode;
    }
  }
  set(index, val) {
    var nodeFound = this.get(index);
    if (nodeFound) {
      nodeFound.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index == 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.next.prev = newNode;
    newNode.prev = prevNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();
    let nodeFound = this.get(index);

    let prevNode = this.get(index - 1);
    prevNode.next = nodeFound.next;
    nodeFound.next.prev = prevNode;
    nodeFound.prev = null;
    nodeFound.next = null;
    return nodeFound;
  }
  reverse() {}
}
