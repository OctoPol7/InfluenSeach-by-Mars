const campaigns = require("../models/campaigns");
const mongoose = require("mongoose");
const apiKey = process.env.KEY;
const axios = require("axios");

// function to create a new campaign
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
// function to add a creator to a campaign
exports.campaign_add_creator = (req, res, next) => {
    const campaign = req.params.campaignName;
    campaigns.updateOne({campaignName: campaign }, {$push:{creators: {
        creatorId: req.body.creatorId,
        dateJoined: new Date(),
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
}
//function to get all the creators from a specific campaign
exports.get_campaign_creators = async (req, res, next) => {
    const username = req.params.username;
    const campaignName = req.params.campaignName;
    const campaignDoc = await campaigns.find({userName: username, campaignName: campaignName})
    .then(result => {
        //console.log(result);
        //res.status(200);
        return result
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

    //console.log(campaignDoc[0].creators);
    const creatorsArray = campaignDoc[0].creators;
    let creatorsIdsArray = [];
    for(let i = 0; i < creatorsArray.length; i++){
        creatorsIdsArray.push(creatorsArray[i].creatorId);
    }
    console.log(creatorsIdsArray);

    const getCreators = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,topicDetails,contentDetails,statistics,brandingSettings,contentOwnerDetails&id=${creatorsIdsArray}&key=${apiKey}`;
    let creatorsDetails = await axios.get(getCreators).then((response) => {
        //console.log(response.data.items);
        return response.data.items;
      })
      .catch((error) => {
        console.log(error)
      })
      
    console.log(creatorsDetails);
    res.json(creatorsDetails);
}

exports.get_campaigns = (req, res, next) => {
    const username = req.params.username;
    campaigns.find({userName: username})
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}