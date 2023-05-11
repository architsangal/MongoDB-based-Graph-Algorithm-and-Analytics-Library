db.createCollection('C3_graph');
const C3_graph = db.getCollection('C3_graph');

function addEdgeWithWeight(b, c) {
    return {v:b, w:c};
}


C3_graph.insertMany([
    {u:1, edgeList:[addEdgeWithWeight(2,1), addEdgeWithWeight(3,1)]},
    {u:2, edgeList:[addEdgeWithWeight(1,1), addEdgeWithWeight(3,1)]},
    {u:3, edgeList:[addEdgeWithWeight(1,1), addEdgeWithWeight(2,1)]}
]);