// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//ES6 Destructuring(Object)
// var user = {name:'Andrew',age:23}
// var {name} =user;
// console.log(name);
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err , db) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert todo",err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // Insert new doc in the Users(name,age,location) collection
  // db.collection('Users').insertOne({
  //   name:"Atul Gupta",
  //   age:23,
  //   location:"India"
  // }, (err,result) =>{
  //   if(err){
  //     return console.log("Unable to store the user",err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();
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
