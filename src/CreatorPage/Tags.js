import React from 'react'


const Tags = props => {
    return<>
       <div className='tags' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{props.name}</div>
     </>
}



export default Tags;