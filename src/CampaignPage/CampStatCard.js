import React from 'react'


const CampStatCard = props => {
    return<>
      <div className='campstat_card' style={{flexGrow: 1}}>
        <h3>Total Campaign created</h3>
        <h1>{props.count}</h1>
      </div>
     </>
}



export default CampStatCard;