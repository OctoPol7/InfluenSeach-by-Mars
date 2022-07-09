const User = require("../models/User");
const campaigns = require("../models/campaigns");
const mongoose = require("mongoose");

exports.create_campaign = (req, res, next) => {
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
}