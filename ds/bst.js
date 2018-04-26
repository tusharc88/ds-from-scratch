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

  remove(data) {
    const removeNode = (node = this.root, data) => {
      if (!node) return null;
      if (node.data === data) {
        if (node.left === null && node.right === null) return null;
        else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }

  isBST(node = this.root) {
    if (node.left && node.left.data > node.data) return false;
    if (node.right && node.right.data < node.data) return false;
    if (!isBST(node.right) || !isBST(node.left)) return false;

    return true;
  }

  findMinHeightOfTree(node = this.root) {
    if (!node) return 0;
    const left = findHeightOfTree(node.left);
    const right = findHeightOfTree(node.right);

    return Math.min(left, right) + 1;
  }

  findMaxHeightOfTree(node = this.root) {
    if (!node) return 0;
    const left = findHeightOfTree(node.left);
    const right = findHeightOfTree(node.right);

    return Math.max(left, right) + 1;
  }

  isBalanced() {
    return findMaxHeightOfTree(this.root) - findMinHeightOfTree(this.root) <= 1;
  }

  bfs() {
    if (!node) return null;
    const result = [];

    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.pop();

      result.push(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }

  inOrder() {
    const result = [];
    const traversal = (node = this.root) => {
      if (!node) return null;
      else {
        node.left && traversal(node.left);
        result.push(node.data);
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
        result.push(node.data);
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
        result.push(node.data);
      }
    };

    traversal();
    return result;
  }

  lowestCommonAncestorBST(node = this.root, n1, n2) {}

  lowestCommonAncestorBT(node = this.root, n1, n2) {}
}

module.exports = { Node, BST };
