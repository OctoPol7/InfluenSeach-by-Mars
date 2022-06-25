import React from 'react'
import FilterTag from './FilterTag.js';
import SearchInput from './SearchInput.js';


const StepTwo = props => {
    return<>
       <p> Step 2/3 </p>

            <h2>Which geographical locations do you want to target?</h2>

            <SearchInput placeholder="eg.NewYork, Canada, Moscow"/>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <FilterTag name="Gaming"/>
                <FilterTag name="Gaming"/>
                <FilterTag name="Gaming"/> 
            <div style={{height:50,width:2,backgroundColor:'black',marginLeft:10,marginRight:10}}></div>

                <FilterTag name="Vancouver "/>
                <FilterTag name="Los Angeles"/>
    </div>


     </>
}



export default StepTwo;