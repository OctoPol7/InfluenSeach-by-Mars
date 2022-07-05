import React from 'react'
import Inputs from './Inputs';


const Modal = props => {

    
    return <>
    {props.isShow?
        <div className='modal_overlay' >
            <div className='modal_content'>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>Create Campaign</h3>
                    <h3 style={{cursor:'pointer'}} >X</h3>
                </div>

                <div className='contnr'>
                    <h4>Campaign Name</h4>

                    <Inputs placeholder="Name" />

                    <h4>Create Description</h4>

                    <textarea placeholder='Type text below..' rows={5} style={{width:'100%',borderRadius:5,backgroundColor:'lightgray'}}></textarea>
                
                    <h4>Add target Keywords</h4>
                    <div className='modal_inputs'>
                        <div className='mchip'>
                            test
                        </div>

                        <div className='mchip'>
                            test
                        </div>

                        <div className='mchip'>
                            test
                        </div>
                        <div className='mchip'>
                            test
                        </div>
                    </div>

                    <button className='cbtn'>Create</button>
                </div>


            </div>
        </div>:null
}
    </>
}



export default Modal;