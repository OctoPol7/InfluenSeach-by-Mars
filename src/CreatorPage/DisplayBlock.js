import React from 'react'


const DisplayBlock = props => {
    return (
      <div className="block">
        <p>{props.title}</p>
        <h4>{props.content ? props.content : "N/A"}</h4>
      </div>
    );
}

export default DisplayBlock;