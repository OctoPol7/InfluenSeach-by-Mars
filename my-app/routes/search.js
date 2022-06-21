const express = require("express");
const axios = require("axios");
const router = express.Router();

const apiKey = "AIzaSyDkGoypG9zMnDtDWqBAydQKT0xKZZbv_vI";

router.get("/", async (req, res, next) => {
  let data = await axios
    .get(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&publishedAfter=2022-06-10T00%3A00%3A00Z&q=fc%20barcelona&maxResults=20&key=" +
        apiKey
    )
    .then((result) => {
      //console.log(`statusCode: ${res.status}`);
      console.log(result.data.items);
      return result.data.items;
    })
    .catch((error) => {
      console.error(error);
    });
  res.json(data);
});

module.exports = router;
