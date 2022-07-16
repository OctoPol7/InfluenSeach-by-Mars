import React from 'react'
import { NavLink } from 'react-router-dom';
import Tag from './Tag.js';


const InfluCard = props => {
    return (
      <li key={props.id}>
        <NavLink to='/creator'>
        <div className="influ_div">
          <div>
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
              <p>{props.sub_count}</p>
            </div>
            <div>
              <p>Video Uploads</p>
              <p>{props.video_count}</p>
            </div>
          </div>

          <ul className="tag_div">
            {props.topic_ids.map((tag) => (
              <Tag name={tag} />
            ))}
          </ul>
        </div>
        </NavLink>
      </li>
    );
}



export default InfluCard;