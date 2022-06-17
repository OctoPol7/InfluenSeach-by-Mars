import React from 'react'


const FilterTag = props => {
    return<>
       <div className='filtertag' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{props.name}</div>
     </>
}



export default FilterTag;