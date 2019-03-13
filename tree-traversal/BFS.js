// Inserting: O(log n)
// Searching: O(log n)

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

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length === 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

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
