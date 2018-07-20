const {ObjectID}  = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "5b51ab0a55e91e2448c3424f11"
//
// if(!ObjectID.isValid(id)){
//   console.log("Id not valid");
// }

// Todo.find({
//   _id : id
// }).then((todos) =>{
//   console.log("Todos: ",todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) =>{
//   console.log("Todo: ",todo);
// });

Todo.findById(id).then((todo) =>{
  if(!todo){
    return console.log("Id not found");
  }
  console.log("Todo by Id: ",todo);
}).catch((e) => console.log(e));


//User.findById
var id = "5b505fd944e13c0720c5ed4711"
User.findById(id).then((user)=>{
  if(!user){
    return console.log("User not found");
  }
  console.log("Found User : ",user);
}, (err) =>{
  console.log(err);
});
