class Node {
  constructor() {
    this.keys = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(inputString, node = this.root) {
    if (inputString.length === 0) {
      node.end = true;
    } else if (!node.keys[input[0]]) {
      node.keys[input[0]] = new Node();
      this.add(inputString.subString(1), node.keys[input[0]]);
    } else {
      this.add(inputString.subString(1), node.keys[input[0]]);
    }
  }

  isWordPresent(inputString) {
    let node = this.root;
    while (inputString.length > 1) {
      if (!node.keys[inputString[0]]) return false;
      else {
        node = node.keys[inputString[0]];
        word = word.subString(1);
      }
    }

    return node.keys[inputString] && node.keys[inputString].end;
  }

  printAllWords() {
    const words = new Array();

    const search = (node = this.root, string) => {
      if (Object.keys(node.keys).length > 0) {
        for (let char of Object.keys(node.keys)) {
          search(node.keys[char], string.concat(char));
        }
        if (node.end) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };

    search(this.root, new String());

    return words.length > 0 ? words : null;
  }
}

module.exports = { Node, Trie };
