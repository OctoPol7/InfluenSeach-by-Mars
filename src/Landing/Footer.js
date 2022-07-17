import React from "react";
import Logo from "../Logo.svg";

const Footer = (props) => {
  return (
      <div className="footer-background">
        <div className="footer footer-max-width-div">
          <img className="logo" src={Logo} alt="logo"></img>
          <p>&copy; InfluenSearch. All Right Reserved</p>
        </div>
      </div>
  );
};

export default Footer;
