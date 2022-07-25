import React from 'react'


const NameBoard = props => {
    
    return (
      <>
        <div className="namebord">
          <p className='channel-name'>{props.info.name}</p>
          <p className="baner">
            {props.info.subCount} Subscribers{" "}
            <a className='channel-link'
              href={`https://www.youtube.com/c/${props.info.name.replace(
                /\s+/g,
                ""
              )}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              visit channel
            </a>
          </p>
        </div>
      </>
    );
}



export default NameBoard;