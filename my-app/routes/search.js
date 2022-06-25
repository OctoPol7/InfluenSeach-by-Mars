const express = require("express");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
//const app = require("../app.js");

const apiKey = "AIzaSyDkGoypG9zMnDtDWqBAydQKT0xKZZbv_vI";

// router.use((req, res, next) => {
//   next();
// })

router.get("/:part/:publishedAfter/:searchPhrase/:maxResults", async (req, res) => {
  // const searchRequest = {
  //   method: 'GET',
  //   url: 'https://youtube.googleapis.com/youtube/v3/search',
  //   params: {part: 'snippet', publishedAfter: '2022-06-10T00%3A00%3A00Z', q: 'Gaming', maxResults: '20', key: apiKey},
  //   headers: {
  //     // Authorization: Bearer [YOUR_ACCESS_TOKEN]
  //     'host': 'youtube.googleapis.com',
  //     'Accept': 'application/json'
  //   }
  // }
  //:part/:publishedAfter/:searchPhrase/:maxResults
  console.log(req.params);

  const part = "part=snippet";
  const publishedAfter = "publishedAfter="+req.params.publishedAfter;
  const searchPhrase = "q="+req.params.searchPhrase;
  const maxResults = "maxResults="+req.params.maxResults;
  const searchRequest = `https://youtube.googleapis.com/youtube/v3/search?${part}&${publishedAfter}&${searchPhrase}&${maxResults}&key=${apiKey}`;
  console.log(searchRequest)

  let data = await axios.get(searchRequest).then((response) => {
    console.log(response.data.items)
    return response.data.items;
  })
  .catch((error) => {
    console.log("This is the error!!!!!!!!!!!: ")
  })
  
  //****************old code ***************** */
  
  // let data = await axios
  //   .get(
  //     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&publishedAfter=2022-06-10T00%3A00%3A00Z&q=Gaming&maxResults=20&key=" +
  //       apiKey
  //   )
  //   .then((result) => {
  //     console.log(`statusCode: ${res.status}`);
  //     console.log(result.data.items);
  //     return result.data.items;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
   res.json(data);
});

module.exports = router;
