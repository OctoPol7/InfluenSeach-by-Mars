import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.svg";

const Header = (props) => {
  return (
    <div className="header-background">
      <div className="header header-max-width-div">
      <NavLink to="/search"><img className="logo" src={Logo} alt="logo"></img></NavLink>
        <ul className="nav">
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/campaign">Campaign</NavLink>
          </li>
          <li className="no-active">
            <NavLink to="/profile">
              {/* {console.log(props.userData.userName)} */}
              Hello <strong>{props.userData.userName}!</strong>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
