const mongoose = require("mongoose");

const agentschema = new mongoose.Schema(
  {
    Companyname: String,
    phone: Number,
    kilogram:Number,
    address: String,
    city: String,
    country: String,
    state: String,
    zipcode: String,
    companyImage: String, 
  },
  { timestamps: true }
);

const Company = mongoose.model("company", agentschema);
module.exports = {
  Company
 }
