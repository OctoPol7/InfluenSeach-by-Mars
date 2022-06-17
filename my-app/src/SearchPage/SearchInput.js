import React from 'react'


const SearchInput = props => {
    return<>
      <div className='search_inp_div' style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <input className='search_input' type="text" name="name" placeholder={props.placeholder}/>
      
      <label style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",}}>
    
    
    <div className='reset_circle'></div>Reset
  </label>
     
      </div>
     </>
}



export default SearchInput;