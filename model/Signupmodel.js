const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    name:String,
    phone: Number,
    password: String,

});

const Signup = mongoose.model("Signup", SignupSchema);

module.exports = {
    Signup
  }
