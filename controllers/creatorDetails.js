const apiKey = process.env.KEY;
const axios = require("axios");

exports.get_creator_details = async (req, res) => {
    const channelId = req.params.channelId;
    //const channelId = 'UCjvgGbPPn-FgYeguc5nxG4A'
    const type = "type=video";
    const order = 'order=date';
    const maxResults = 'maxResults=5';
    const channelVideos = `https://youtube.googleapis.com/youtube/v3/search?channelId=${channelId}&${type}&${order}&${maxResults}&key=${apiKey}`;
  
    let channelVideosResult = await axios.get(channelVideos).then((response) => {
        return response.data.items;
      })
      .catch((error) => {
        console.log(error)
      })

     // store response result channel videos id's in an array
    let videosId = channelVideosResult?.map(video => video.id.videoId);
    console.log("Videos Id's: ",videosId);

    const getVideosMetrics = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videosId}&key=${apiKey}`;

    let videosMetrics = await axios.get(getVideosMetrics).then((response) => {
        console.log(response.data.items);
        return response.data.items;
    })
    .catch((error) => {
        console.log(error)
    })
    console.log(videosMetrics);
    res.json(videosMetrics);
}