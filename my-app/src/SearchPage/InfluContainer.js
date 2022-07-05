import React from 'react'
import InfluCard from './InfluCard';
import GetTrending from '../GetTrending'
import { useState } from "react";


const InfluContainer = props => {
<<<<<<< HEAD
    const [results, setResults] = useState([]);

    const grabResults = (resData) => {
      console.log("FROM ResultPage ");
      console.log(resData.data);
      setResults(resData.data);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", padding: 90 }}>
        <h1 style={{ marginTop: 20, marginBottom: 20 }}>
          Trending Influencers this week
        </h1>
        <GetTrending grabResults={grabResults} />
        <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {results.map((result) => (
            <InfluCard
              sub_count={result.statistics.subscriberCount}
              video_count={result.statistics.videoCount}
              influ_name={result.brandingSettings.channel.title}
              influ_img={result.snippet.thumbnails.default.url}
              topic_ids={result.topicDetails.topicIds}
            />
          ))}
        </ul>
=======
    return<>
    
    <div className='influ'>
     <h1 >Trending Influencers this week</h1>
     <div className='influ-cards'> 
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
>>>>>>> d44713eb085e1a05f916e4f069c1f1c3d9d531ec
      </div>
    );
}



export default InfluContainer;