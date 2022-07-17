const express = require("express");
const searchControllers = require("../controllers/search");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();

router.get("/:part/:searchPhrase/:type/:publishedAfter/:maxResults/:orderBy/:regionCode", searchControllers.search_creators);

router.get("/", checkAuth, searchControllers.trending_creators);

module.exports = router;
