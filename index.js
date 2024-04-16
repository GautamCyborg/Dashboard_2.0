const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connect = require("./connection");
const chartroute = require("./routes/chart");
const authroute=require("./routes/auth");

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

//connection
const url = process.env.MONGO_URL;
const port = process.env.PORT || 5000;
connect(url);

//Route
app.use("/", chartroute);
app.use("/auth", authroute);

// Start server
app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
