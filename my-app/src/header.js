import React from 'react'

const Header = props => {
    return(
        <div className="header">
             {/* Add logo here */}
            <ul className="nav">
                <li>Search </li>
                <li>Campaigns </li>
                <li>Log In </li>
            </ul>        
        </div>
    )
}

export default Header