db = connect("mongodb://localhost:27017/" + dbName);

// tempOutputGraphName = outputGraphName
inputGraphName = inputCollection
outputGraphName = intermediateCollection
load("./undirectedToDirected.js")

inputCollection = outputGraphName
intermediateCollection = intermediateCollection + "2"

load("./componentsOfGraph.js")