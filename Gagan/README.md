commands - 

To generate random graphs:
```
npm install
node generateRandom.js
```
It generates n random graphs with j nodes and an edge between each node is created with a probability of 0.6, so file graph5.json will have edgelist of a graph with 5 nodes and a random weight for each edge between 1 to 10.

To load a graph data into mongodb:
```
mongoimport --db dgraphs --collection graph5 --file directed/graph5.json --jsonArray

mongoimport --db ugraphs --collection graph5 --file undirected/graph5.json --jsonArray
```

To create a database:
```
mongosh ./scripts/createDB.js
```