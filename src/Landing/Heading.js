import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.svg";

const Heading = (props) => {
  return (
    <div className="header-background">
      <div className="header header-max-width-div">
        <img className="logo" src={Logo} alt="logo"></img>
        <ul className="nav">
          <li>
            <NavLink to="/Landing">Home</NavLink>
          </li>
          <li>
            <NavLink to="/campaign">Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className="btn" type="submit">
                Launch App
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
