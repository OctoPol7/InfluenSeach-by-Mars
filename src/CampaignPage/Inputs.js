import React from 'react'


const Inputs = props => {
    return<>
        <div className='modal_inputs'>
            <input className='modal_search_input' type="text" name="name" placeholder={props.placeholder}/>
        </div>
     </>
}



export default Inputs;