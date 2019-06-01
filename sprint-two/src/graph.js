

// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.nodes[node] === undefined) {
    return false;
  }
  return true
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  let toDelete = node;
  if (this.edges[toDelete]) {
    for (var i = 0; i < this.edges[toDelete].length; i++) {
      let toDeleteIndex = this.edges[this.edges[toDelete][i]].indexOf(toDelete);
      this.edges[this.edges[toDelete][i]].splice(toDeleteIndex, 1);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return _.contains(this.edges[fromNode], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  if (this.edges[fromNode]) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
  } else {
    this.edges[fromNode] = [toNode];
    this.edges[toNode] = [fromNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  let fromNodeIndex = this.edges[toNode].indexOf(this.edges[fromNode]);
  let toNodeIndex = this.edges[fromNode].indexOf(this.edges[toNode]);
  this.edges[fromNode].splice(toNodeIndex, 1);
  this.edges[toNode].splice(fromNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.nodes) {
    cb.call(this, key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


