import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.svg";

const Footer = (props) => {
  return (
    <div>
      <div className="header-background">
        <div className="header header-max-width-div">
          <img className="logo" src={Logo} alt="logo"></img>
          <ul className="nav">
            <li>
              <NavLink to="/Landing">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <p>&copy; InfluenSearch. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
