const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const campaignControllers = require("../controllers/campaigns");
// new campaign route
router.post('/:username/new-campaign', campaignControllers.create_campaign);

//add creator to campaign route
router.patch('/:campaignName/add-creator', campaignControllers.campaign_add_creator);

//route to get all creators from a campaign
router.get('/:username/:campaignName', campaignControllers.get_campaign_creators);

//route to get all campaigns for a user
router.get('/:username/', campaignControllers.get_campaigns);

module.exports = router;