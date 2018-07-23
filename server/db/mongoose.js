var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp");
mongoose.connect("mongodb://test:test123@ds145981.mlab.com:45981/to-do-api");
module.exports={mongoose};
