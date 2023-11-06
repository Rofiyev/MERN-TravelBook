const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
require("dotenv").config();

// Mongoose Connection config
connectDB();

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
