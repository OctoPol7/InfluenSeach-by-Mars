const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//const User = require("../models/User.js");
const campaigns = require("../models/campaigns");
// new campaign route
router.post('/:username/new-campaign', (req, res, next) => {
    const username = req.params.username;
    const campaign = new campaigns ({
        _id: new mongoose.Types.ObjectId(),
        userName: username,
        campaignName: req.body.campaignName,
        description: req.body.description,
        dateCreated: new Date(),
        tags: req.body.tags,
        active: true,
        creators: []
    })
    campaign.save()
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

//add creator to campaign route
router.patch('/:campaignName/add-creator', (req, res, next) => {
    const campaign = req.params.campaignName;
    campaigns.updateOne({campaignName: campaign }, {$push:{creators: {
        creatorId: req.body.creatorId,
        pictureUrl: req.body.pictureUrl,
        creatorName: req.body.creatorName,
        dateJoined: new Date(),
        videoUploads: req.body.videoUploads,
        subscribers: req.body.subscribers,
        tags: req.body.tags
    }}})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Creator added to campaign',
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