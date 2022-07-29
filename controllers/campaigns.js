const campaigns = require("../models/campaigns");
const mongoose = require("mongoose");
const apiKey = process.env.KEY;
const axios = require("axios");

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// function to create a new campaign
exports.create_campaign = async (req, res, next) => {
    const uid = req.params.uid;
    const validateName = await campaigns.find({userId: uid, campaignName: req.body.campaignName})
    .exec()
    .then((result) => {
        if (result.length >= 1){
            console.log("Campaign already exists!");
            return res.status(409).json({
                message: "Campaign already exists!",
              });
        } else {
            const currentDate = new Date();
            const formatedDate = monthNames[(currentDate.getMonth())] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
            const campaign = new campaigns ({
                _id: new mongoose.Types.ObjectId(),
                userId: uid,
                campaignName: req.body.campaignName,
                description: req.body.description,
                dateCreated: formatedDate,
                tags: req.body.tags,
                active: true,
                creators: []
            })
            campaign.save()
            .then(result => {
                console.log("Campaign Created!");
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
    })
}
// function to edit a campaign
exports.edit_campaign = (req, res, next) => {
    const campaign = req.params.campaignName;
    const uid = req.params.uid;
    campaigns.updateOne({userId: uid, campaignName: campaign }, {$set:{
        campaignName: req.body.campaignName,
        description: req.body.description,
        tags: req.body.tags,
    }})
    .exec()
    .then(result => {
        //console.log(campaign);
        res.status(200).json({
            message: 'Changes saved',
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
exports.campaign_add_creator = async (req, res, next) => {
    const campaign = req.params.campaignName;
    const uid = req.params.uid;

    const findCampaign = await campaigns.find({userId: uid, campaignName: campaign}).exec()
        .then(result => {
            return result;
        })
        .catch(err => {
            console.log("campaign not found... ", err)
        });
    let creatorsArr = findCampaign.map(creatorsObject => creatorsObject.creators);
    //console.log(creatorsArr[0]);
    let creatorsIds = creatorsArr[0].map(creatorId => creatorId.creatorId);
    let creatorExists = "";
    //console.log("creators ids... :",creatorsIds);
    for (i = 0; i < creatorsIds.length; i++){
        if (creatorsIds[i] == req.body.creatorId){
            creatorExists = "exists";
        }
    }
    
    if (creatorExists == "exists"){
        res.status(409).json({
            message: "Creator already exists in campaign"
        });
    } else {
        const currentDate = new Date();
        const formatedDate = monthNames[(currentDate.getMonth())]+ ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
        campaigns.updateOne({userId: uid, campaignName: campaign }, {$push:{creators: {
            creatorId: req.body.creatorId,
            dateJoined: formatedDate
        }}})
        .exec()
        .then(result => {
            //console.log(campaign);
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
}
// function to remove a creator from a campaign
exports.campaign_remove_creator = (req, res, next) => {
    const campaign = req.params.campaignName;
    const uid = req.params.uid;
    const creatorId = req.params.creatorId;
    campaigns.updateOne({userId: uid, campaignName: campaign }, {$pull:{creators: {
        creatorId: creatorId
    }}})
    .exec()
    .then(result => {
        //console.log(campaign);
        res.status(200).json({
            message: 'Creator removed from campaign',
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
    const uid = req.params.uid;
    const campaignName = req.params.campaignName;
    const campaignDoc = await campaigns.find({userId: uid, campaignName: campaignName})
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
// function to get all campaigns that belong to a user
exports.get_campaigns = (req, res, next) => {
    const uid = req.params.uid;
    campaigns.find({userId: uid})
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
// function to archive a campaign
exports.archive_campaign = (req, res, next) => {
    const campaign = req.params.campaignName;
    const uid = req.params.uid;
    campaigns.updateOne({campaignName: campaign , userId: uid}, {$set:{active: false}})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Campaign archived!',
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}