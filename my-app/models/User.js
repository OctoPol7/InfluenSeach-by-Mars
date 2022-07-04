const mongoose = require("mongoose");
const camapignsSchema = require("./campaigns.js")

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: String,
    minlength: 1,
    maxlength: 30,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
  campaigns: {type: Array}
});

module.exports = mongoose.model("User", userSchema);
