import React from 'react'


const SearchInput = props => {
    return<>
      <div className='search_hme_div' style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <input className='search_input' type="text" name="name" placeholder={props.placeholder}/>
      </div>
     </>
}



export default SearchInput;