import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.svg";

const Heading = (props) => {
  return (
    <div className="header-background">
      <div className="header header-max-width-div">
        <img className="logo" src={Logo} alt="logo"></img>
        <ul>
          <li>
          <NavLink to="/signup">
            <button type="submit">
              Sign Up
            </button>
          </NavLink>
          </li>
          <li>
          <NavLink to="/login">
            <button type="submit">
              Login
            </button>
          </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
