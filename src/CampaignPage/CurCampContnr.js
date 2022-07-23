import React from 'react'
import { NavLink } from 'react-router-dom';
import CurCampCard from './CurCampCard';
// import SortByDropdown from './SortByDropdown.js';

const CurCampContnr = props => {

    return (
      <div>
        <h2>Current Campaigns</h2>
        {/* <SortByDropdown /> */}

        <div className="camcard_div">
          {props.campaignArray !== undefined ? (
            props.campaignArray?.map((c) => (
              <NavLink to="/singlecampaign">
                <CurCampCard
                  data={c}
                  name={c.campaignName}
                  tags={c.tags}
                  date={c.dateCreated}
                  creators={c.creators.length}
                  grabCampData={props.grabCampData}
                />
              </NavLink>
            ))
          ) : (
            <></>
          )}

        </div>
      </div>
    );
}



export default CurCampContnr;