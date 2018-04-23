class Set {
  constructor() {
    this.data = [];
  }

  has(record) {
    return this.data.some(val => val === record);
  }

  add(record) {
    if (!this.has(record)) {
      this.data.push(record);
      // return true;
    }

    return this.data;
  }

  size() {
    return this.data.length;
  }

  remove(record) {
    return a.filter(val => val !== num);
  }

  union(otherSet) {
    const union = new Set();
    this.data.forEach(val => {
      union.add(val);
    });
    otherSet.forEach(val => {
      union.add(val);
    });
    return union;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    this.data.forEach(val => {
      if (otherSet.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.data.forEach(val => {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    return differenceSet;
  }

  isSubSet(otherSet) {
    return this.data.every(val => {
      otherSet.has(val);
    });
  }
}
module.exports = Set;
