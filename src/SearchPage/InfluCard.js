import React from 'react'
import { NavLink } from 'react-router-dom';
// import Tag from './Tag.js';


const InfluCard = props => {

  let channelInfo;

  const channelInfoHandler = () => {
     channelInfo = {
       id: props.channel_id,
       name: props.influ_name,
       image: props.influ_img,
       country: props.country,
       subCount: props.sub_count,
       vidCount: props.video_count,
       viewCount: props.view_count,
       topicIds: props.topic_ids,
     };
    props.grabChannelInfo(channelInfo);
    console.log(channelInfo)
  }
    return (
      <li onClick={channelInfoHandler}>
        <NavLink to="/creator">
          <div className="influ_div">
            <div className='center-image'>
              <img
                className="pro_pic"
                src={
                  // Error
                  //   ? "https://www.nasa.gov/sites/default/files/images/486101main_mars_clouds.jpg"
                  //   :
                  props.influ_img
                }
                alt="profile"
              />
              <h2>{props.influ_name}</h2>
            </div>
            <div className="influ_count_div">
              <div>
                <p>Subscribers</p>
                <p>
                  {props.sub_count
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <div>
                <p>Video Uploads</p>
                <p>
                  {props.video_count
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            </div>

            <ul className="tag_div">
              {props.topic_ids === null ? (
                <></>
              ) : (
                props.topic_ids?.map((tag) => <Tag name={tag} />)
              )}
            </ul>
          </div>
        </NavLink>
      </li>
    );
}



export default InfluCard;