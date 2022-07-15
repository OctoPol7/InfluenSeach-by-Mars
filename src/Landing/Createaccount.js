import React from "react";
import { NavLink } from "react-router-dom";

const Createaccount = (props) => {
  return (
    <div>
      <div>
        <p>Are you ready to try out InfluenSearch today?</p>
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
