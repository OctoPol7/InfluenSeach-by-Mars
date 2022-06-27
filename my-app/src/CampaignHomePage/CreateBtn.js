import React from 'react'


const CreateBtn = props => {
    return<>
       <div onClick={props.click}  className='create_btn'>Create Campaign</div>
     </>
}



export default CreateBtn;