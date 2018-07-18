// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect("mongodb://localhost:27017/TodoApp", (err , db) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result) =>{
  //   console.log(result);
  // })

  // deleteOne
  // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed:false}).then((result) =>{
  //   console.log(result);
  // });

  // db.collection("Users").deleteMany({name:"Atul Gupta"}).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndDelete({
    _id:new ObjectID("5b4ddeaf880b8d2f902846e7")
  }).then((result) => {
    console.log(result);
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
