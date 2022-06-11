const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://marsDeveloper:TheMartians2022@cluster0.7qkts.mongodb.net/influensearchDB?retryWrites=true&w=majority`

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;