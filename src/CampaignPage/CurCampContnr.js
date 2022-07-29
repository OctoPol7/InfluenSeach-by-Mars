import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import CurCampCard from './CurCampCard';
// import SortByDropdown from './SortByDropdown.js';

const CurCampContnr = props => {

  const [curCamps, setCurCamps] = useState([]);
  const [arcCamps, setArcCamps] = useState([]);

return (
  <div>
    <h2>Current Campaigns</h2>
    {/* <SortByDropdown /> */}
    <div className="camcard_div">
      {props.campaignArray !== undefined ? (
               props.campaignArray?.map((c) => (
         c.active?       
      (
        <div>
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
      </div>
      ):(<> </>)
      ))
             ) : (
               <>
                <div>
                  <h2>You have not created any campaigns.</h2>
                </div>
               </>
             )}
  </div>
  </div>
);
   
}



export default CurCampContnr;