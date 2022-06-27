import React from 'react'


const FilterTag = props => {
    return (
      <>
        <div className="filtertag">
          {props.name}
          <button type="button">x</button>
        </div>
      </>
    );
}



export default FilterTag;