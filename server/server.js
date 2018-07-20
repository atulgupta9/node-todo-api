var express = require("express");
var bodyParser = require("body-parser");
var {ObjectID} = require("mongodb");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req,res) =>{
  var todo = new Todo({
    text : req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (err)=>{
    res.status(400).send(err);
  });
  console.log(req.body);
});

app.get("/todos",(req,res) => {
  Todo.find().then((todos) =>{
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

//GET/todos/1324
app.get("/todos/:id", (req,res) =>{
  var id = req.params.id;
 if(!ObjectID.isValid(id)){
   return res.status(404).send();
 }
 Todo.findById(id).then((todo)=>{
   if(!todo){
     return res.status(404).send();
   }
   return res.send({todo});
 }, (err) =>{
  return res.status(400).send();
 })
  //validate id using isValid
    //404 - send back empty

//findById
  //success
    //if todo - send it back
    // if not todo - send back 404
  //error
    //400 - send empty body back


});


app.listen(3000, ()=>{
  console.log("Started on port 3000");
});

module.exports= {app};
