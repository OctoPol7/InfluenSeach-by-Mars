import React from 'react'
import CurCampCard from './CurCampCard';
import SearchInput from './SearchInputs';

const CurCampContner = props => {
    return<>
     
     <div className='pad20' style={{margin: '2rem'}}>
        <SearchInput placeholder="Search for campaign"/>

        <h2>Current Campaigns</h2>

        <div className='camcard_div' style={{display: 'flex', flexFlow: 'row wrap'}}>
                <CurCampCard/> 
                <CurCampCard/>
                <CurCampCard/>
                <CurCampCard/>
                <CurCampCard/>
                <CurCampCard/>
        </div>
</div>
   
     </>
}



export default CurCampContner;