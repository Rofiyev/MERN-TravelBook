const { Schema, model } = require("mongoose");

const TravelModel = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
  },
});

module.exports = model("Travel", TravelModel);
