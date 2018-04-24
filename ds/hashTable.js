class HashTable {
  constructor() {
    this.data = [];
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [[key, value]];
    } else {
      let valInserted = false;
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i][0] === key) {
          this.data[hash][i][1] = value;
          valInserted = true;
          break;
        }
      }
      if (!valInserted) {
        this.data[hash].push([key, value]);
      }
    }
  }

  remove(key) {
    const hash = this.hash(key);
    if (this.data[hash].length === 1 && this.data[hash][0][0] === key) {
      delete this.data[hash];
    } else if (this.data[hash].length > 1) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i][0] === key) {
          delete this.data[hash][i];
        }
      }
    }
  }

  lookup(key) {
    const hash = this.hash(key);
    if (this.data[hash].length === 1 && this.data[hash][0][0] === key)
      return this.data[hash][0][1];
    else if (this.data[hash].length > 1) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i][0] === key) {
          return this.data[hash][i][1];
        }
      }
    }

    return;
  }

  hash(string) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash;
  }
}

module.exports = HashTable;
