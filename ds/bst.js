class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  add(data) {}
  findMin() {}
  findMax() {}
  find(data) {}
  isPresent(data) {}
  remove(data) {}
  isBalanced() {}
  findMinHeight() {}
  findMaxHeight() {}
  inOrder() {}
  preOrder() {}
  postOrder() {}
}

module.exports = { Node, BST };
