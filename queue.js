class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
    return this.data.length;
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
