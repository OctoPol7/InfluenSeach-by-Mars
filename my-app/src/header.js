
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

{/* import React,{ useState } from 'react'

const Header = props => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return(
        <div className="header">
             {/* {/* Add logo here */}
            {/* <ul className="nav">
                <li>Search </li>
                <li>Campaigns </li>
                <li>Log In </li> 
            </ul>       
            <div  className={
          isNavExpanded ? "nav expanded" : "nav"
        }>
    <button className='menubtn' onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>Menu</button>
       <ul>
        <li>Search</li>
        <li>Campaigns</li>
        <li>Login</li>

       </ul>
      
      
       </div>
        </div>
    )
    */}

}

export default Header