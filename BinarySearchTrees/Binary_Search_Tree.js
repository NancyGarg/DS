class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val == current.value) return undefined;
        if (val < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (current.value == val) {
        found = true;
      } else if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      }
    }
    return found;
  }
  BFS() {
    var data = [];
    var queue = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  DFSPreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}
var tree = new BinarySearchTree();
console.log(tree);
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(9);
tree.insert(13);
tree.insert(50);
tree.insert(1);
console.log(tree);
console.log("bfs traversal is", tree.BFS());
console.log("dfs pre order traversal is", tree.DFSPreOrder());
console.log("dfs post order traversal is", tree.DFSPostOrder());
console.log("dfs in order traversal is", tree.DFSInOrder());
