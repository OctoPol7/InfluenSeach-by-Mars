import React from 'react'

const ResetInput = props => {
  const resetButton = () => {
    props.setKeywordArray([]);
    props.setLocationArray([]);
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