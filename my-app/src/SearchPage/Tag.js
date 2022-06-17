import React from 'react'


const Tag = props => {
    return<>
       <div className='tag' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{props.name}</div>
     </>
}



export default Tag;