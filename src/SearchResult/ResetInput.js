import React from 'react'

const ResetInput = props => {
  const resetButton = () => {
    props.resetButton();
  };

    return(
      <input 
        type="reset" 
        value="Reset" 
        className="reset-button" 
        onClick={resetButton} 
      />
    )
}

export default ResetInput;