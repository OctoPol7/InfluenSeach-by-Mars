import React from 'react'
import FilterTag from './FilterTag.js';
import SearchInput from './SearchInput.js';


const StepOne = props => {
    return<>
       <p>Step 1/3</p>

            <h2>Which industry / space do you want to explore creators in?</h2>

            <SearchInput placeholder="eg. Lifestyle, Gaming, Sport...."/>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <FilterTag name="Gaming"/>
                    <FilterTag name="Gaming"/>
                    <FilterTag name="Gaming"/>
                </div>
     </>
}



export default StepOne;