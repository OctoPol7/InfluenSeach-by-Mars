import React from 'react'
import CurCampCard from './CurCampCard';
// import SortByDropdown from './SortByDropdown.js';

const CurCampContner = props => {
    return (
      <div>
        <h2>Current Campaigns</h2>
        {/* <SortByDropdown /> */}

        <div className="camcard_div">
          {/* {props.campaignArray.length != undefined ? props.campaignArray.map((campaign) => (
            <CurCampCard name={campaign.campaignName} />
          )) : <></>} */}
        </div>
      </div>
    );
}



export default CurCampContner;