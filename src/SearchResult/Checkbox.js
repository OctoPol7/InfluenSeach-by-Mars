import React from 'react'

const Checkbox = props => {
    return(
        <>
            <div>
                <input type="checkbox" id={props.name} name={props.name} />
                <label htmlFor={props.name}>{props.name}</label>
            </div>
        </>
    )
}

export default Checkbox;