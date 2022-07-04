const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const User = require("../models/User.js");
const db = require("../db/connection.js");

const Campaign = require("../models/campaigns.js")

router.patch('/new-campaign/:username', (req, res, next) => {
    const username = req.params.username;
    const campaign = new Campaign({
            campaignName: req.body.campaignName,
          description: req.body.description,
          dateCreated: new Date(),
          tags: req.body.tags,
          active: true,
          creators: []
      });
    db.users.updateOne({userName: username }, {$push:{campaigns: campaign}})
    // .exec()
    // .then(result => {
    //     res.status(200).json({
    //         message: 'Campaign Created!',
    //         // request: {
    //         //     type: 'GET',
    //         //     url: 'http://localhost:4000/users/' + username
    //         // }
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json({
    //         error: err
    //     });
    // });
});

module.exports = router;