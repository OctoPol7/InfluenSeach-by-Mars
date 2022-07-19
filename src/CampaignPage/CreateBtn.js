import React from 'react'


const CreateBtn = props => {
    return (
      <>
        <button
          onClick={props.click}
          className="create_btn"
        >
          Create new campaign
        </button>
      </>
    );
}



export default CreateBtn;