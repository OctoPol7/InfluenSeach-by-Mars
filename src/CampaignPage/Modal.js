import React from 'react'
import Inputs from './Inputs';
import CloseIcon from '../CloseIcon.png'


const Modal = props => {

    
    return <>
    {props.isShow?
        <div className='modal_overlay' >
            <div className='modal_content'>

                <div>
                    <h2>Create Campaign</h2>
                    <button type="button">
                        <img src={CloseIcon} alt="Close"></img>
                    </button>
                </div>

                <div className='contnr'>
                    <h3>Choose campaign name</h3>

                    <Inputs placeholder="Title" />

                    <h3>Choose description</h3>

                    <textarea placeholder='This is a new campaign' rows={5}></textarea>
                
                    <h3>Add tags or keywords</h3>
                    <ul className='modal-filters tag_div'>
                        <li className="tag">Gaming</li>
                    </ul>

                    <button className='cbtn'>Create campaign</button>
                </div>


            </div>
        </div>:null
}
    </>
}



export default Modal;