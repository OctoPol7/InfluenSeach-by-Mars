import React from 'react'

const Tag = props => {
    return(
		<li>{props.tagname}<button type="button">x</button></li>
    )
}

export default Tag;