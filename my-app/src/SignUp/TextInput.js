import React from 'react'

const TextInput = props => {
    return(
        <label>
			{props.label}
			<input type="text" name={props.label} />
		</label>
    )
}

export default TextInput;