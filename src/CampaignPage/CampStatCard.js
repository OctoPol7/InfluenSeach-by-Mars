import React from 'react'


const CampStatCard = props => {
    return<>
      <div className='campstat_card'>
        <h3>{props.heading}</h3>
        <p>{props.count}</p>
      </div>
     </>
}



export default CampStatCard;