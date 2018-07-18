// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err , db) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").find({
  //   _id:new ObjectID("5b4dd36dd47c3c0c7872c0b2")
  // }).toArray().then( (docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) =>{
  //   console.log("Unable to fetch todos",err)
  // });
  // db.collection("Todos").find().count().then( (count)=>{
  //   console.log('Todos');
  //   console.log(`Todos count : ${count}`);
  // }, (err) =>{
  //   console.log("Unable to fetch todos",err)
  // });
  db.collection("Users").find({name:"Atul Gupta"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log("Unable to fetch Users",err);
  });
  // db.close();
});

//MongoDB v3
// MongoClient.connect("mongodb://localhost:27017/TodoApp", (err , client) => {
//   if(err){
//     return console.log("Unable to connect to MongoDB server");
//   }
//   console.log("Connected to MongoDB server");
//
//   var db = client.db("TodoApp");
//
//   db.collection('Users').insertOne({
//     name:"Atul Gupta",
//     age:23,
//     location:"India"
//   }, (err,result) =>{
//     if(err){
//       return console.log("Unable to store the user");
//     }
//     console.log(JSON.stringify(result.ops));
//   });
//
// client.close()
//
// });
