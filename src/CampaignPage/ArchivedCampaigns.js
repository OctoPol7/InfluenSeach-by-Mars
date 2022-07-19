import React from 'react'
import CurCampCard from './CurCampCard';
import SortByDropdown from './SortByDropdown.js';

const ArchivedCampaigns = props => {
    return(
        <div>
            <div className='campaigns-grid'>
                <h2>Archived Campaigns</h2>
                <SortByDropdown />
            </div>

                <div className='camcard_div'>
                        <CurCampCard campaignname="Campaign Name #1"/> 
                        <CurCampCard campaignname="Campaign Name #1"/>
                        <CurCampCard campaignname="Campaign Name #1"/>
                        <CurCampCard campaignname="Campaign Name #1"/>
                </div>
        </div>
    );
}



export default ArchivedCampaigns;