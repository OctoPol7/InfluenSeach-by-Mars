import React from 'react'
import CampStatCard from './CampStatCard';
// import CurCampCard from './CurCampCard';


const CampStatContner = props => {

    return (
      <div>
        <h2>Campaign Statistics</h2>
        <div className="statcard_div">
          <CampStatCard heading={"Current Campaigns"} count={props.active} />
          <CampStatCard
            heading={"Archived Campaigns"}
            count={props.allCam - props.active}
          />
          <CampStatCard heading={"Total Campaigns"} count={props.allCam} />
        </div>
      </div>
    );
}



export default CampStatContner;