import React from "react";
import { NavLink } from "react-router-dom";

const Createaccount = (props) => {
  return (
    <div className="footer-background">
      <div className="create-account">
        <h2>Are you ready to try out InfluenSearch today?</h2>
        <ul>
          <li><a href="signup">Sign Up</a></li>
          <li><a href="login">Log in</a></li>
        </ul>
        <NavLink to="/search">
              <button className="btn" type="submit">
                Launch App
              </button>
          </NavLink>
      </div>
    </div>
  );
};
export default Createaccount;
