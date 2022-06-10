import React from 'react'

const PasswordInput = props => {
    return(
        <label>
			{props.label}
			<input type="password" name={props.label} />
		</label>
    )
}

export default PasswordInput;