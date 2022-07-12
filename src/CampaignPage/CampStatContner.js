import React from 'react'
import CampStatCard from './CampStatCard';
import CurCampCard from './CurCampCard';


const CampStatContner = props => {
    return(
      <div className='pad20'>
        <h2>Campaign Statistics</h2>
        <div className='statcard_div'>
          <CampStatCard heading={"Active Campaigns"} count={1204}/>
          <CampStatCard heading={"Archived Campaigns"} count={1204}/>
          <CampStatCard heading={"Total Campaigns Created"} count={1204}/>
        </div>

      </div>
    )
}



export default CampStatContner;