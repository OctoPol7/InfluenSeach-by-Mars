import React from 'react'
import FilterTag from './FilterTag.js';
import SearchInput from './SearchInput.js';


const StepThree = props => {
    return<>
       <p> Step 3/3 </p>

            <h2>What keywords do you want to target? (add at least 1)</h2>

            <SearchInput placeholder="eg.foodblog, styling, skincare"/>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <FilterTag name="Gaming"/>
                <FilterTag name="Gaming"/>
                <FilterTag name="Gaming"/> 
            <div style={{height:50,width:2,backgroundColor:'black',marginLeft:10,marginRight:10}}></div>

                <FilterTag name="Vancouver "/>
                <FilterTag name="Los Angeles"/>

            <div style={{height:50,width:2,backgroundColor:'black',marginLeft:10,marginRight:10}}></div>

                <FilterTag name="Fornite  "/>
                <FilterTag name="CSGo"/>
</div>


     </>
}



export default StepThree;