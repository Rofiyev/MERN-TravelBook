const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

//* Mongoose Connection config *//
connectDB();

//* Body parser use *//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Router use  *//
app.use("/api/travel", require("./routers/TravelRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
