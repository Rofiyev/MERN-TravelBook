const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/travel_book", {
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB connect successfully"))
    .catch((err) => {
      console.log("error while connecting to database", err);
    });
};

module.exports = connectDB;
