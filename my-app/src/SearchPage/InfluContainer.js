import React from 'react'
import InfluCard from './InfluCard';


const InfluContainer = props => {
    return<>
    <div style={{display:'flex',flexDirection:'column',padding:90}}>
     <h1 style={{marginTop:20,marginBottom:20}}>Trending Influencers this week</h1>
     <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',}}>
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
      <InfluCard sub_count={2346677} video_count={3456} influ_name="Joan Doe"/>
      </div>
      </div>
     </>
}



export default InfluContainer;