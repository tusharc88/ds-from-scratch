class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class MyLinkedList {
  constructor(head = null, length = 0) {
    this.head = head;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  insertAtStart(data) {
    const firstNode = new Node(data);
    const head = this.head;

    firstNode.next = head;
    this.head = firstNode;
    this.length++;
  }

  insertAtEnd(data) {
    const lastNode = new Node(data);
    const last = this.head;

    while (last && last.next) {
      last = last.next;
    }

    if (last === null) {
      this.head = lastNode;
    } else {
      last.next = lastNode;
    }

    this.length++;
  }

  // index starts at 0
  insertAt(index, data) {
    let counter = 1;
    const newNode = new Node(data);
    if (!this.head) return;
    if (counter === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prev = this.head;
    let current = prev.next;

    while (counter !== index && current) {
      prev = current;
      current = current.next;
      counter++;
    }

    if (!current) {
      insertAtEnd(data);
    }
    prev.next = newNode;
    newNode.next = current;
    this.length++;
  }

  removeFirst() {
    const node = this.head;
    if (node) {
      this.head = node.next;
      return node;
    }

    this.length--;
    return null;
  }

  removeLast() {
    let prev = this.head;
    if (!prev) return null;
    let current = prev.next;
    if (!current) {
      this.head = null;
      return prev;
    }

    while (current && current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    this.length--;
    return current;
  }

  // index starts at 0
  removeAt(index) {
    let counter = 1;
    if (!this.head) return null;
    if (counter === 0) return this.head;
    let prev = this.head;
    let current = prev.next;

    while (counter !== index && current) {
      prev = current;
      current = current.next;
      counter++;
    }

    if (!current) return null;
    prev.next = current.next;

    this.length--;
    return current;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) return null;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  // index starts at 0
  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (counter !== index && node) {
      node = node.next;
      counter++;
    }

    return node;
  }
}

module.exports = { Node, MyLinkedList };
