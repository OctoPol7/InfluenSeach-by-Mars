import React from 'react'

const header = props => {
    return(
        <div className="header">
            {/* Add logo here */}
            <div className="nav">
                <a>Search </a>
                <a>Campaigns </a>
                <a>Log In </a>
            </div>        
        </div>
    )
}

export default header;