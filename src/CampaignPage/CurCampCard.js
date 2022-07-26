import React from 'react'
import Tag from './Tag.js'
// import { NavLink } from "react-router-dom";


const CurCampCard = props => {

  const toSingleCampaign = () => {
    props.grabCampData(props.data);
  }

    return (
      <>
          <div className="curcamp_card" onClick={toSingleCampaign}>
            <h3>{props.name}</h3>
            <p>{props.creators} Creators</p>
            <p>created on {props.date}</p>

            <ul>
              {props.tags?.map((tag) => (
                <Tag tagname={tag} />
              ))}
            </ul>
          </div>
      </>
    );
}



export default CurCampCard;