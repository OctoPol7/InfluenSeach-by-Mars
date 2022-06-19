const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res, next) => {
  const user = new User({
    userType: req.body.userType,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    reconfirmPassword: req.body.reconfirmPassword,
  });
});

modules.exports = router;
