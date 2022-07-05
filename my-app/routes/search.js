const express = require("express");
const axios = require("axios");
const { response } = require("express");
const router = express.Router();
require('dotenv').config();
//const app = require("../app.js");

const apiKey = process.env.KEY;

router.get("/:part/:searchPhrase/:type/:publishedAfter/:maxResults/:orderBy/:regionCode", async (req, res) => {
  
  console.log("In search route....");

  const part = "part=snippet";
  const publishedAfter = "publishedAfter="+req.params.publishedAfter;
  const searchPhrase = "q="+req.params.searchPhrase;
  console.log("Searching for: ",req.params.searchPhrase);
  const maxResults = "maxResults="+req.params.maxResults;
  const type = "type="+req.params.type;
  const order = "order="+req.params.orderBy;
  const regionCode = "regionCode="+req.params.regionCode;
  const searchRequest = `https://youtube.googleapis.com/youtube/v3/search?${part}&${publishedAfter}&${searchPhrase}&${type}&${order}&${maxResults}&${regionCode}&key=${apiKey}`;
  //console.log(searchRequest)

  let searchResult = await axios.get(searchRequest).then((response) => {
    //console.log(response.data.items)
    return response.data.items;
  })
  .catch((error) => {
    console.log(error)
  })
  // store response result channel id's in an array
  let channelIds = searchResult.map(channel => channel.snippet.channelId);
    // console.log("********channel id's***********");
    // console.log(channelIds);

  // get channels statistics
  const getChannels = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,topicDetails,contentDetails,statistics,brandingSettings,contentOwnerDetails&id=${channelIds}&key=${apiKey}`;
  let channelsDetails = await axios.get(getChannels).then((response) => {
    console.log(response.data.items);
    return response.data.items;
  })
  .catch((error) => {
    console.log(error)
  })
  
   res.json(channelsDetails);
});

router.get("/", async(req, res)=>{
  const currentDate = new Date();
  const lastWeek = new Date(currentDate.setDate(currentDate.getDate() - 7));
  const formattedDate = lastWeek.toISOString();
  console.log("Last week's date is: ",formattedDate);

  const searchRequest = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&publishedAfter=${formattedDate}&maxResults=20&key=${apiKey}`;
  console.log("In trending channels route....");
  
  let searchResult = await axios.get(searchRequest).then((response) => {
    //console.log(response.data.items)
    return response.data.items;
  })
  .catch((error) => {
    console.log(error)
  })
  // store response result channel id's in an array
  let channelIds = searchResult.map(channel => channel.snippet.channelId);

  // get trending channels data
  const getChannels = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings,contentOwnerDetails&id=${channelIds}&key=${apiKey}`;
  let channelsDetails = await axios.get(getChannels).then((response) => {
    console.log(response.data.items);
    return response.data.items;
  })
  .catch((error) => {
    console.log(error)
  })
  
   res.json(channelsDetails);
});

module.exports = router;
