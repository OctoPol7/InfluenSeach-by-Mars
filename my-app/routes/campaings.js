const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

router.patch('/new-campaign/:id', (req, res, next) => {
    const id = req.params.id;
    User.updateOne({_id: id }, {$push:{campaigns: {
      campaignName: req.body.campaignName,
    description: req.body.description,
    dateCreated: new Date(),
    tags: req.body.tags,
    active: true,
    creators: []
}}})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Campaign Created!',
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;