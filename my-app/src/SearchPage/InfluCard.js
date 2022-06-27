import React from 'react'
import Tag from './Tag.js';


const InfluCard = props => {
    return<>
      <div className='influ_div'>
        <div >
            <img className='pro_pic' src='https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'></img>
            <h2>{props.influ_name}</h2>
        </div>
        <div className='influ_count_div'>
            <div>
                <p>Subscribers</p>
                <p>{props.sub_count}</p>
            </div>
            <div>
                <p>Video Uploads</p>
                <p>{props.sub_count}</p>
            </div>
        </div>

        <ul className='tag_div'>
            <Tag name="Lifestyle"/>
            <Tag name="Lifestyle"/>
            <Tag name="Lifestyle"/>
        </ul>

      </div>
     </>
}



export default InfluCard;