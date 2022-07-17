import React from 'react'
import CloseIcon from '../CloseIcon.png'

const Tag = props => {
    return(
		<li>{props.tagname}<button type="button"><img src={CloseIcon} alt="Close"></img></button></li>
    )
}

export default Tag;