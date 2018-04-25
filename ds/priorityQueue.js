class PriorityQueue {
  constructor() {
    this.data = [];
  }

  add(record, priority) {
    if (this.data.length === 0) this.data.push([record, priority]);
    else {
      let added = false;
      for (let i = 0; i < this.data.length; i++) {
        if (priority > this.data[i][1]) {
          this.data.splice(i, 0, [record, priority]);
          added = true;
          break;
        }
      }

      if (!added) {
        this.data.push([record, priority]);
      }
    }
  }

  remove() {}
}
module.exports = PriorityQueue;
