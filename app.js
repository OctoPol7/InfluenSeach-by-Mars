const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

const PORT = process.env.PORT || 7000;

//import routes
const searchRoute = require("./routes/search");
const userRoutes = require("./routes/user");
const creatorRoute = require("./routes/getCreatorDetails");
const campaignsRoute = require("./routes/campaigns");

const db = require("./db/connection.js");

db.once("open", () => {
  console.log("Connected to database!");
  const server = app.listen(PORT, () => console.log(`Sever running on PORT ${PORT}`));
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//Routes which should handle requests to API
app.use("/search", searchRoute);
app.use("/creatordetails", creatorRoute);

//Routes which should handle requests to DB
app.use("/user", userRoutes);
app.use("/campaigns", campaignsRoute);
