class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    let current = this.root;

    if (this.root === null) {
      this.root = val;
      return this;
    }

    while (true) {
      if (val === this.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current.right = newNode;
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

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
