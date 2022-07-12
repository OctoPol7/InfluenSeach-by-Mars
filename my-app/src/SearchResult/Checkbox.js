import React from 'react'

const Checkbox = props => {
    const grabValue = (e) => {
        // let isChecked = e.target.checked;
        // console.log(e);
        props.checkboxHandler(e);
    }
    return(
        <>
            <div>
                <input type="checkbox" id={props.name} value={props.name} onChange={e => grabValue(e)} />
                <label htmlFor={props.name}>{props.name}</label>
            </div>
        </>
    )
}

export default Checkbox;