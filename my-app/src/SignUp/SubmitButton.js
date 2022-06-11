import React from 'react'

const SubmitButton = props => {
    return(
			<input type="submit" value={props.label} className="submitButton"/>
    )
}

export default SubmitButton;