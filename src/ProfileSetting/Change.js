import React,{useState} from 'react'


const Change = props => {
    const [modalshow,setModalShow] = useState(false);
    function showmodal(value) {
     setModalShow(value);
    }
    return (
        <>
        <div className="tob_Banner">
            <div className='tob_Banner_bg'>
                <button className='change-button' onClick={()=>showmodal(true)}>Change</button>
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
                    <input className='modal_search_input' type="text" name="name" placeholder='enter new data'/>
                </div>

                    <button className='cbtn'>Update</button>
            </div>


        
        </div>:null
}


        </>
    )
}

export default Change;