import React from 'react'


const Inputs = props => {
    return<>
        <label className='modal_inputs' >
            {props.label}
            <input className='modal_search_input' type="text" name="name" placeholder={props.placeholder} style={{width: '100%'}} />
        </label>
     </>
}



export default Inputs;