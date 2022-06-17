import React from 'react'
import Tag from './Tag.js';


const InfluCard = props => {
    return<>
      <div className='influ_div'>
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',height:200}}>
            <img className='pro_pic' src='https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'></img>
            <h2>{props.influ_name}</h2>
        </div>
        <div className='influ_count_div' style={{display:'flex',flexDirection:'row'}}>
            <div style={{width:'50%'}}>
                <p>Subscribers</p>
                <h3>{props.sub_count}</h3>
            </div>
            <div>
                <p>Video Uploads</p>
                <h3>{props.sub_count}</h3>
            </div>
        </div>

        <div className='tag_div' style={{display:'flex',flexDirection:'row'}}>
            <Tag name="Lifestyle"/>
            <Tag name="Lifestyle"/>
            <Tag name="Lifestyle"/>
            <Tag name="Lifestyle"/>
        </div>

      </div>
     </>
}



export default InfluCard;