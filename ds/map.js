class Map {
  constructor() {
    this.data = {};
  }

  has(key) {
    return key in this.data ? true : false;
  }

  set(key, val) {
    this.data[key] = val;
  }

  get(key) {
    return this.has(key) ? this.data[key] : null;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.data[key];
    }
  }

  values() {
    const result = [];
    for (let key in Object.keys(this.data)) {
      result.push(this.data[key]);
    }
    return result;
  }

  clear() {
    this.data = {};
  }
}

module.exports = Map;
