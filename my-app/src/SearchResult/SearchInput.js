import React from 'react'

const SearchInput = props => {
    return(
		<input type="search" name={props.name} placeholder={props.placeholder} />
    )
}

export default SearchInput;