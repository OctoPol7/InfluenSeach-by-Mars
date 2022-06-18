import React from 'react'


const Tag = props => {
    return<>
       <li className='tag'>{props.name}</li>
       {/* style={{display:'flex',justifyContent:'center',alignItems:'center'}} */}
     </>
}



export default Tag;