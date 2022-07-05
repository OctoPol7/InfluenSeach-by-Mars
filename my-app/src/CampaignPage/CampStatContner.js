import React from 'react'
import CampStatCard from './CampStatCard';
import CurCampCard from './CurCampCard';
import SearchInput from './SearchInputs';



const CampStatContner = props => {
    return<>
      <div className='pad20'>
        <h1>Campaign Stats</h1>
        <div className='statcard_div'>
          <CampStatCard count={1204}/>
          <CampStatCard count={1204}/>
          <CampStatCard count={1204}/>
        </div>

      </div>
     </>
}



export default CampStatContner;