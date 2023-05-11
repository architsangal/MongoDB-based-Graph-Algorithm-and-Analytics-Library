db = connect( 'mongodb://localhost:27017/' + dbName );
db.dropDatabase();
db = db.getSiblingDB(dbName);