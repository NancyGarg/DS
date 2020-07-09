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
var graph1 = new Graph();
graph1.addVertex("tokyo");
graph1.addVertex("mutd");
graph1.addVertex("sdffsd");
graph1.addEdge("sdffsd", "tokyo");
graph1.addEdge("mutd", "sdffsd");
graph1.removeVertex("mutd");
