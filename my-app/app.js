const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

//import routes
const searchRoute = require("./routes/search");
const userRoutes = require("./routes/user");

const db = require("./db/connection.js");

db.once("open", () => {
  console.log("Connected to database!");
  const server = app.listen(4000, () => console.log("listening"));
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//Routes which should handle requests to API
app.use("/search", searchRoute);

//Routes which should handle requests to DB
app.use("/user", userRoutes);

//module.exports = app;
