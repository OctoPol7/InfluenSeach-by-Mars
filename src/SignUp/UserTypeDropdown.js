import React from 'react'
import { useState } from 'react'

const UserTypeDropdown = props => {

    const [userType, setUserType] = useState()

    const handleUserType = event => {
        setUserType(event.target.value)
    }

    return(
        <label>
			{props.label}
			<select name={props.name} onSelect={event=>handleUserType(event)}>
                <option value='lite'>Lite</option>
                <option value='standard'>Standard</option>
                <option value='pro'>Pro</option>
            </select>
		</label>
        
    )
}

export default UserTypeDropdown;