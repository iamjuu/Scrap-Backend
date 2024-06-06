const mongoose = require("mongoose");

const pickup = new mongoose.Schema({
  full_name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },

  killogram: {
    type: String,
  },
});

const pickupupload = mongoose.model("pickupschema", pickup);

module.exports = {
    pickupupload}
