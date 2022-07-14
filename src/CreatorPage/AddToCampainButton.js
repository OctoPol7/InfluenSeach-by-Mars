import React from 'react'


const AddToCampainButton = props => {
    
    return<>
            <div className='top_Banner_bg'>

                <button className='popubtn' onClick={()=>props.showmodal(true)} >Add to campaign</button>

            </div>
            
     </>
}



export default AddToCampainButton;