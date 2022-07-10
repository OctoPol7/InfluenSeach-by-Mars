const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth")
const campaignControllers = require("../controllers/campaigns");

//************************************************************************ */
//For each request the session token should be passed as Authorization header
//************************************************************************* */
// new campaign route
router.post('/:username/new-campaign', checkAuth, campaignControllers.create_campaign);

//add creator to campaign route
router.patch('/:campaignName/add-creator', checkAuth, campaignControllers.campaign_add_creator);

//route to get all creators from a campaign
router.get('/:username/:campaignName', checkAuth, campaignControllers.get_campaign_creators);

//route to get all campaigns for a user
router.get('/:username/', checkAuth ,campaignControllers.get_campaigns);

module.exports = router;