import React from 'react'
import { NavLink } from "react-router-dom";

const Header = props => {
    return (
      <div className="header">
        {/* Add logo here */}
        <ul className="nav">
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>Campaigns </li>
          <li>Log In </li>
        </ul>
      </div>
    );
}

export default Header