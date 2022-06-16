import React from 'react'

const Tag = props => {
    return(
		<li>{props.tagname}<button type="button">X</button></li>
    )
}

export default Tag;