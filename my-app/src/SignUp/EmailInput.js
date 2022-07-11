import React from 'react'

const EmailInput = props => {
    return(
        <label>
			{props.label}
			<input type="email" name={props.name} ref={props.ref}/>
		</label>
    )
}

export default EmailInput;