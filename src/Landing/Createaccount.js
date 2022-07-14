import React from "react";
import { NavLink } from "react-router-dom";

const Createaccount = (props) => {
  return (
    <div>
      <div>
        <h1>Are you ready to try out InfluenSearch today?</h1>
      </div>
      <div>
        <ul className="nav">
          <li>
            <NavLink to="/login">SignUp/Login</NavLink>
          </li>
          <li>
            <button className="btn" type="submit">
              Launch App
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Createaccount;
