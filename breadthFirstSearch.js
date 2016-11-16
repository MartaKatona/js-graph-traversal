'use strict';

const Node = require('./graphGenerator');

const BFS = (start) => {
  let visited = [];
  let queue = [];
  let currentNode;
  let edges = [];

  queue.push(start);

  while (queue.length !== 0) {
    currentNode = queue.shift(); //it is a node {}
    if (visited.indexOf(currentNode.name) === -1) {
      visited.push(currentNode.name);
      edges = currentNode.neighbors; //an array of Nodes
      for (var i = 0; i < edges.length; i++) {
        if (visited.indexOf(edges[i].name) === -1) {
          queue.push(edges[i]);
        } else {}
      } //eof for
    }
  } // eof while
  //console.log('visited', visited);
  return visited;

}

module.exports = BFS;
