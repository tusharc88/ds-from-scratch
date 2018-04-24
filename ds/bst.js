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

  add(data) {
    const newNode = new Node(data);
    const node = this.root;
    if (!node) {
      this.root = newNode;
      return;
    } else {
      const searchNode = node => {
        if (node.data > data) {
          if (!node.left) {
            node.left = newNode;
          } else {
            node = node.left;
            return searchNode(node);
          }
        } else if (node.data < data) {
          if (!node.right) {
            node.right = newNode;
          } else {
            node = node.right;
            return searchNode(node);
          }
        } else {
          return null;
        }
      };

      return searchNode(node);
    }
  }

  findMin() {
    let node = this.root;
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  findMax() {
    let node = this.root;
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  find(data) {
    const node = this.root;
    const searchDataNode = (node = this.root, data) => {
      if (!node) return null;
      if (node.data === data) {
        return node;
      } else if (node.data > data) {
        node = node.left;
        return searchDataNode(node, data);
      } else if (node.data < data) {
        node = node.right;
        return searchDataNode(node, data);
      }
    };

    return searchDataNode(data);
  }

  isPresent(data) {
    const node = this.root;
    const searchDataNode = (node = this.root, data) => {
      if (!node) return false;
      if (node.data === data) {
        return true;
      } else if (node.data > data) {
        node = node.left;
        return searchDataNode(node, data);
      } else if (node.data < data) {
        node = node.right;
        return searchDataNode(node, data);
      }
    };

    return searchDataNode(data);
  }

  remove(data) {}

  isBalanced() {}
  findMinHeight() {}
  findMaxHeight() {}

  inOrder() {
    const result = [];
    const traversal = (node = this.root) => {
      if (!node) return null;
      else {
        node.left && traversal(node.left);
        result.push(node);
        node.right && traversal(node.right);
      }
    };

    traversal();
    return result;
  }

  preOrder() {
    const result = [];
    const traversal = (node = this.root) => {
      if (!node) return null;
      else {
        result.push(node);
        node.left && traversal(node.left);
        node.right && traversal(node.right);
      }
    };

    traversal();
    return result;
  }

  postOrder() {
    const result = [];
    const traversal = (node = this.root) => {
      if (!node) return null;
      else {
        node.left && traversal(node.left);
        node.right && traversal(node.right);
        result.push(node);
      }
    };

    traversal();
    return result;
  }
}

module.exports = { Node, BST };
