const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiKey = 'AIzaSyDkGoypG9zMnDtDWqBAydQKT0xKZZbv_vI';

router.get('/', (req, res, next) => {
    axios
  .get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&publishedAfter=2022-05-15T00%3A00%3A00Z&q=fc%20barcelona&maxResults=20&key='+apiKey)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data.items);
  })
  .catch(error => {
    console.error(error);
  });
});

module.exports = router;