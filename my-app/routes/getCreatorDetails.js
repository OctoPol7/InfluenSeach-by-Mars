const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth")
const creatorController = require("../controllers/creatorDetails")

//************************************************************************ */
//For each request the session token should be passed as Authorization header
//************************************************************************* */
router.get("/:channelId?", checkAuth, creatorController.get_creator_details);

module.exports = router;