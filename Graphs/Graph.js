// Implementing graphs using Adjacency List

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  // depth first traversal using recursion
  recursiveDFS(vertex) {
    const resultArray = [];
    const visitedList = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex1) {
      if (!vertex1) return null;
      visitedList[vertex1] = true;
      resultArray.push(vertex1);

      adjacencyList[vertex1].forEach((neighbour) => {
        if (!visitedList[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(vertex);

    return resultArray;
  }

  // depth first traversal using iteration
  iterativeDFS(vertex) {
    var stack = [vertex];
    const resultArray = [];
    const visitedList = {};
    visitedList[vertex] = true;

    while (stack.length) {
      let currentVertex = stack.pop();
      resultArray.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedList[neighbor]) {
          visitedList[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return resultArray;
  }
  bfs(vertex) {
    const queue = [vertex];
    const resultArray = [];
    const visitedList = {};
    visitedList[vertex] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      resultArray.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedList[neighbor]) {
          visitedList[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return resultArray;
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v, i) => {
      return v != v2;
    });

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v, i) => {
      return v != v1;
    });
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].map((item) => {
      this.removeEdge(item, vertex);
    });

    delete this.adjacencyList[vertex];
  }
}
var graphNew = new Graph();

graphNew.addVertex("A");
graphNew.addVertex("B");
graphNew.addVertex("C");
graphNew.addEdge("C", "A");
graphNew.addEdge("B", "C");
graphNew.removeVertex("B");
console.log(graphNew);

var graph1 = new Graph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");
graph1.addVertex("F");
graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("C", "E");
graph1.addEdge("D", "E");
graph1.addEdge("D", "F");
graph1.addEdge("E", "F");
console.log("DFS traversal with recursion", graph1.recursiveDFS("A"));
console.log("DFS traversal with iteration", graph1.iterativeDFS("A"));
console.log("BFS traversal", graph1.bfs("A"));
