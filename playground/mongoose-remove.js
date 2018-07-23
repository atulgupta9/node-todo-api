const {ObjectID}  = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
//Todo.findOneAndRemove
//Todo.findByIdAndRemove
// Todo.findOneAndRemove({_id:"5b55b23e822da089f0f4b07a"}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b55b23e822da089f0f4b07a').then((todo) => {
  console.log(todo);
});
