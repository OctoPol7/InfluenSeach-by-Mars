const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth")
const campaignControllers = require("../controllers/campaigns");

//************************************************************************ */
//For each request the session token should be passed as Authorization header
//************************************************************************* */
// new campaign route
router.post('/:uid/new-campaign', checkAuth, campaignControllers.create_campaign);

//route to add creator to campaign
router.patch('/:uid/:campaignName/add-creator', checkAuth, campaignControllers.campaign_add_creator);

//route to remove creator from a campaign
router.patch('/:uid/:campaignName/:creatorId/remove-creator', checkAuth, campaignControllers.campaign_remove_creator);

//route to archive a campaign
router.patch('/:uid/archive-campaign/:campaignName', checkAuth ,campaignControllers.archive_campaign);

//route to get all creators from a campaign
router.get('/:uid/:campaignName', checkAuth, campaignControllers.get_campaign_creators);

//route to get all campaigns for a user
router.get('/:uid', checkAuth ,campaignControllers.get_campaigns);

module.exports = router;