import React from 'react'
import CloseIcon from '../CloseIcon.png'

const FilterLocationTag = props => {
  const removeLocationTag = () => {
    props.setLocation()
  }
    return (
      <>
        <div className="filtertag">
          {props.name}
          <button type="button" onClick={removeLocationTag}> <img src={CloseIcon} alt="Close"></img></button>
        </div>
      </>
    );
}



export default FilterLocationTag;