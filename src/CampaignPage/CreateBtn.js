import React from 'react'


const CreateBtn = props => {
    return (
      <div className='center-button'>
        <button
          onClick={props.click}
          className="create_btn"
        >
          Create new campaign
        </button>
      </div>
    );
}



export default CreateBtn;