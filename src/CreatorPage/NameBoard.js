import React from 'react'


const NameBoard = props => {
    
    return (
      <>
        <div className="namebord">
          <h3>{props.info?.name}</h3>
          <p className="baner">
            {props.info?.subCount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            Subscribers{" "}
            <a
              href={`https://www.youtube.com/c/${props.info?.name.replace(
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