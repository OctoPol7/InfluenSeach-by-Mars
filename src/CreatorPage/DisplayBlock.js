import React from 'react'


const DisplayBlock = props => {
    return(
        <div className="block">
          <p>{props.title}</p>
          <h4>{props.content}</h4>
        </div>
    )
}

export default DisplayBlock;