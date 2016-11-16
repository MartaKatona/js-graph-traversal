const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];


} // eof definition

Node.prototype.addNeighbors = function(neighborsNodes) {
  this.neighbors = this.neighbors.concat(neighborsNodes);
  return this.neighbors;
};

Node.prototype.neighbors = function() {
  return this.neighbors;
}

Node.prototype.toString = function() {
  return this.value;
}




module.exports = Node;
