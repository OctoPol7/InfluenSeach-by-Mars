import React,{useState} from 'react'


const Delete = props => {
    const [modalshow,setModalShow] = useState(false);
    function showmodal(value) {
        setModalShow(value);
    }

    return<>
    <p>Once you delete your account it can not be retrived</p>

<div className="tob_Banner">
            <div className='tob_Banner_bg'>

                <button className='change-button' onClick={()=>showmodal(true)}>Delete</button>
            </div>


        </div>
        
        
        
        {modalshow ?
        <div className='modal_overlay' >
            <div className='modal_content'>

                <div className='modal-style' >
                    <h3></h3>
                    <h3 style={{cursor:'pointer'}} onClick={()=>showmodal(false)}>X</h3>
                </div>

                <div className='modal_inputs'>
                   <p>Do you really want to delete your account?</p> 
                </div>
                    <button className='cbtn'>delete</button>
            </div>


        
        </div>:null
}

     </>
}



export default Delete;