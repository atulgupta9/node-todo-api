var env = process.env.NODE_ENV || "development";
console.log("env *****",env);
if(env === "production"){
  process.env.MONGODB_URI="mongodb://test:test123@ds145981.mlab.com:45981/to-do-api";
}
else if(env === "development" || env ==="test"){
  var config = require("./config.json");
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key]= envConfig[key];
  });
}
