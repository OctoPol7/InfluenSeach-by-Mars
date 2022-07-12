import React from 'react'

const SearchInput = props => {
    return(
		<input type="search" name={props.name} placeholder={props.placeholder} />
    //Add search icon with display attribute
    )
}

export default SearchInput;