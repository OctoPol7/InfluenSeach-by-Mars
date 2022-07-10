const express = require("express");
const router = express.Router();
const creatorController = require("../controllers/creatorDetails")

router.get("/:channelId?", creatorController.get_creator_details);

module.exports = router;