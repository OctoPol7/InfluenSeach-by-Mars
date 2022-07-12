import React from 'react'


const CreateBtn = props => {
    return (
      <>
        <button
          onClick={props.click}
          className="create_btn"
          style={{ margin: "2rem" }}
        >
          Create Campaign
        </button>
      </>
    );
}



export default CreateBtn;