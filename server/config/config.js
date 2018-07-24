var env = process.env.NODE_ENV || "development";
console.log("env *****",env);

if(env==="production"){
  process.env.MONGODB_URI="mongodb://test:test123@ds145981.mlab.com:45981/to-do-api";
}else if(env === "development"){
  process.env.PORT =3000;
  process.env.MONGODB_URI="mongodb://localhost:27017/TodoApp";
} else if(env === "test"){
  process.env.PORT =3000;
  process.env.MONGODB_URI="mongodb://localhost:27017/TodoAppTest";
}
