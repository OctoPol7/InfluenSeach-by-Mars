import React from "react";
import { NavLink } from "react-router-dom";

const Createaccount = (props) => {
  return (
    <div className="footer-background">
      <div className="create-account">
        <h2>Are you ready to try out InfluenSearch today?</h2>
        <div>
          <NavLink to="/signup">
            <button type="submit">
              Sign Up
            </button>
          </NavLink>
          <NavLink to="/login">
            <button type="submit">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Createaccount;
