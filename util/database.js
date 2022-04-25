const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://fabian:45BTxDO59pkL5YYh@cluster0.byemx.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if(_db){
    return _db
  }
  throw 'No db found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;