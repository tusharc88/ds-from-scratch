// left: i*2
// right: i*2 + 1
// parent: i/2

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(num) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let index = this.heap.length - 1;
      let parent = Math.floor(index / 2);
      while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
        if (index > 1) {
          [this.heap[Math.floor(index / 2)], this.heap[index]] = [
            this.heap[index],
            this.heap[Math.floor(index / 2)],
          ];
          if (parent > 1) {
            index = Math.floor(index / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {
    const smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
          return smallest;
        }
      }

      let i = 1;
      let left = i * 2;
      let right = i * 2 + 1;

      while (
        this.heap[i] > this.heap[left] ||
        this.heap[i] > this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = i * 2;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = i * 2 + 1;
        }

        if (this.heap[left] === 'undefined' || this.heap[right] === 'undefined')
          break;
      }
    } else if (this.heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
}

module.exports = { MinHeap, MaxHeap };
