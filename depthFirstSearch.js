'use strict';

const Node = require('./graphGenerator');
  // for recursive
  // let visited = [];
  // let edges = [];

const DFS = (start, searchFor) => {
  let visited = [];
  let stack = [];
  let edges = [];
  let currentNode;


  stack.push(start);
  while (stack.length !== 0) {
    currentNode = stack.pop()
    if (visited.indexOf(currentNode.name) === -1) {
      visited.push(currentNode.name);
      edges = currentNode.neighbors; //an array of Nodes
      console.log('edges', edges)
      for (var i = 0; i < edges.length; i++) {
        if (edges[i].toString() !== searchFor) {
          stack.push(edges[i])
        } else {
          console.log('visited', visited);
          return edges[i];
        }
      } // eof for
    }
  } // eof while
  return false;

//recursive

  // if (start.toString() === searchFor) {
  //   console.log('elerte  base caset')
  //   console.log('start.toString()', start.toString())
  //   console.log('start', start)
  //   return start;
  // } else {
  //     visited.push(start.name);
  //     console.log('visited', visited);
  //     edges = start.neighbors; //an array of Nodes
  //     for (var i = 0; i < edges.length; i++) {
  //       if (visited.indexOf(edges[i].name) === -1 ) {
  //         console.log('edges[i]', edges[i])
  //         DFS(edges[i], searchFor);
  //       }
  //     } // eof for
  // }


}






module.exports = DFS;
