import React from 'react'
import CurCampCard from './CurCampCard';
import SearchInput from './SearchInputs';




const CurCampContner = props => {
    return<>
     
     <div className='pad20'>
        <SearchInput placeholder="Search for campaign"/>

        <h2>Current Campaigns</h2>

<div className='camcard_div'>
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