import React from 'react'


const CreateBtn = props => {
    return (
      <>
        <button
          onClick={props.click}
          className="create_btn"
        >
          Create Campaign
        </button>
      </>
    );
}



export default CreateBtn;