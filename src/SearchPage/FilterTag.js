import React from 'react'
import CloseIcon from '../CloseIcon.png'

const FilterTag = props => {
    return (
      <>
        <div className="filtertag">
          {props.name}
          <button type="button"> <img src={CloseIcon} alt="Close"></img></button>
        </div>
      </>
    );
}



export default FilterTag;