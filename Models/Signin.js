const mongoose = require("mongoose");

const signinSchema = mongoose.Schema({
  email: String,
  rollNo:String,
  password: String,
});

const Signin = mongoose.model("Signin", signinSchema);
module.exports = Signin;