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
          <li>
            <NavLink to="/campaign">Campaign</NavLink>
          </li>
<<<<<<< HEAD
          {/* <li>
            <NavLink to="/singlecampaign">sCampaign</NavLink>
          </li> */}
=======
>>>>>>> 44f20f75eb10a253b66e897ad2cb56d947f1cc78
          <div className="no-active">
            <NavLink to="/search">
              {/* {console.log(props.userData.userName)} */}
              Hello <strong>{props.userData.userName}!</strong>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
