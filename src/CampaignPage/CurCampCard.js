import React from 'react'
import Tag from './Tag.js'


const CurCampCard = props => {
    return (
      <>
        <div className="curcamp_card">
          {/* <h3>{props.name}</h3> */}
          <p>23 Creators</p>
          <p>created on 23 May, 2022</p>

          <ul>
            {props.tags.map((tag) => (
              <Tag 
              // tagname={tag.name}
               />
            ))}

          </ul>
        </div>
      </>
    );
}



export default CurCampCard;