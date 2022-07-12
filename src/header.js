import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.svg";

const Header = (props) => {
  return (
    <div className="header-background">
      <div className="header header-max-width-div">
        <img className="logo" src={Logo} alt="logo"></img>
        <ul className="nav">
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>Campaigns </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
