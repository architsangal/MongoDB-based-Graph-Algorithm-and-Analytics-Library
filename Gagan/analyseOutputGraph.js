import fs from "fs";
import jsnx from "jsnetworkx";

const filePath  = './output/graph10.json';
const data = fs.readFileSync(filePath);
const jsonData = JSON.parse(data);

// console.log(jsonData);

const graph = new jsnx.Graph();
jsonData.forEach(({ _, u, v, w }) => {
    graph.addEdge(u, v, { weight: w });
});

console.log(graph.nodes().length); // Prints the num of nodes
console.log(graph.edges().length); // Prints the num of edges