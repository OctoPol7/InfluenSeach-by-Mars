const mongoose = require("mongoose");
require('dotenv').config();

let mongoDB = `mongodb+srv://marsDeveloper:${process.env.DBPASSWORD}@cluster0.7qkts.mongodb.net/InfluenSearch?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
