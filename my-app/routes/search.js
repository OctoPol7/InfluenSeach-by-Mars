const express = require("express");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
//const app = require("../app.js");

const apiKey = "AIzaSyDkGoypG9zMnDtDWqBAydQKT0xKZZbv_vI";

// router.use((req, res, next) => {
//   next();
// })

router.get("/:part/:searchPhrase/:type/:publishedAfter/:maxResults/:orderBy/:regionCode", async (req, res) => {
  
  console.log(req.params);

  const part = "part=snippet";
  const publishedAfter = "publishedAfter="+req.params.publishedAfter;
  const searchPhrase = "q="+req.params.searchPhrase;
  const maxResults = "maxResults="+req.params.maxResults;
  const type = "type="+req.params.type;
  const order = "order="+req.params.orderBy;
  const regionCode = "regionCode="+req.params.regionCode;
  const searchRequest = `https://youtube.googleapis.com/youtube/v3/search?${part}&${publishedAfter}&${searchPhrase}&${type}&${order}&${maxResults}&${regionCode}&key=${apiKey}`;
  console.log(searchRequest)

  let data = await axios.get(searchRequest).then((response) => {
    console.log(response.data.items)
    return response.data.items;
  })
  .catch((error) => {
    console.log("This is the error!!!!!!!!!!!: ")
  })

   res.json(data);
});

module.exports = router;
