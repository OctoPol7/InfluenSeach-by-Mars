import React from 'react'
import CampStatCard from './CampStatCard';
// import CurCampCard from './CurCampCard';


const CampStatContner = props => {
    return(
      <div>
        <h2>Campaign Statistics</h2>
        <div className='statcard_div'>
          <CampStatCard heading={"Current Campaigns"} count={1204}/>
          <CampStatCard heading={"Archived Campaigns"} count={1204}/>
          <CampStatCard heading={"Total Campaigns"} count={props.total}/>
        </div>

      </div>
    )
}



export default CampStatContner;