const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userType: {
    type: [{ type: String }],
    enum: ["lite", "standard", "pro"],
    required: true,
  },
  userName: {
    type: String,
    minlength: 1,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  reconfirmPassword: {
    type: String,
    minlength: 8,
    required: true,
  },
});

exports.User = mongoose.model("User", UserSchema);
