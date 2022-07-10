const express = require("express");
const searchControllers = require("../controllers/search");
const router = express.Router();

router.get("/:part/:searchPhrase/:type/:publishedAfter/:maxResults/:orderBy/:regionCode", searchControllers.search_creators);

router.get("/", searchControllers.trending_creators);

module.exports = router;
