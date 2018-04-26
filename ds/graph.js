// undirected
class Graph {
  constructor() {
    this.graph = {};
  }

  contains(node) {
    return !!this.graph[node];
  }

  addVertex(node) {
    if (!this.contains(node)) {
      graph[node] = { edges: {} };
    }
  }

  removeVertex(node) {
    if (this.contains(node)) {
      for (let edgeNode in this.graph[node].edges) {
        this.removeEdge(node, edgeNode);
      }

      delete this.graph[node];
    }
  }

  addEdge(startNode, endNode) {
    if (this.contain(startNode) && this.contains(endNode)) {
      this.graph[startNode].edges[endNode];
      this.graph[endNode].edges[startNode];
    }
  }

  removeEdge(startNode, endNode) {
    if (this.contain(startNode) && this.contains(endNode)) {
      delete this.graph[startNode].edges[endNode];
      delete this.graph[endNode].edges[startNode];
    }
  }

  bfs(node) {
    const queue = [node];
    const visited = [];
    visited[node] = true;

    const result = [node];
    while (queue.length !== 0) {
      const tempNode = queue.shift();
      for (let edgeNode in this.graph[tempNode].edges) {
        if (!visited[edgeNode]) {
          visited[edgeNode] = true;
          queue.push(edgeNode);
          result.push(edgeNode);
        }
      }
    }

    return result;
  }

  dfs(node) {
    const stack = [node];
    const visited = [];
    visited[node] = true;

    const result = [node];
    while (stack.length !== 0) {
      const tempNode = stack.shift();
      for (let edgeNode in this.graph[tempNode].edges) {
        if (!visited[edgeNode]) {
          visited[edgeNode] = true;
          stack.unshift(edgeNode);
          result.push(edgeNode);
        }
      }
    }

    return result;
  }

  dfsRecursive(node, result = [], visited = []) {
    if (!node) return result;

    visited[node] = true;
    result.push(node);

    for (let edgeNode in this.graph[node].edges) {
      if (!visited[edgeNode]) {
        result = dfsRecursive(edgeNode, result, visited);
      }
    }

    return result;
  }

  // following bfs approach
  findPath(startNode, endNode) {
    const queue = [startNode];
    const visited = [];
    visited[startNode] = true;

    while (queue.length !== 0) {
      const tempNode = queue.shift();
      for (let edgeNode in this.graph[tempNode].edges) {
        if (edgeNode === startNode) return true;

        if (!visited[edgeNode]) {
          visited[edgeNode] = true;
          queue.push(edgeNode);
        }
      }
    }

    return false;
  }

  isCyclic(node) {}
}

module.exports = Graph;
