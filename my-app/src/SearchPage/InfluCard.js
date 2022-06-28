import React from 'react'
import Tag from './Tag.js';


const InfluCard = props => {
    return (
      <>
        <div className="influ_div">
          <div>
            <img className="pro_pic" src={props.influ_img} alt="profile"></img>
            <h2>{props.influ_name}</h2>
          </div>
          <div className="influ_count_div">
            <div>
              <p>Subscribers</p>
              <p>{props.sub_count}</p>
            </div>
            <div>
              <p>Video Uploads</p>
              <p>{props.video_count}</p>
            </div>
          </div>

          <ul className="tag_div">
            <Tag name="Lifestyle" />
            <Tag name="Lifestyle" />
            <Tag name="Lifestyle" />
            <Tag name="Lifestyle" />
          </ul>
        </div>
      </>
    );
}



export default InfluCard;