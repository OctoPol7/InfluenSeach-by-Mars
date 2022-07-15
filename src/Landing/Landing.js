import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "./Heading.js";
import Team from "./Team.js";
import Createaccount from "./Createaccount.js";
import Footer from "./Footer.js";
import Influencers from "../images/Influencers.png";
import Framing from "../images/Framing.png"

const Landing = (props) => {
  return (
    <div>
      <Heading />
      <div className="container">
        <div>
          <h1>Searching for Influncers made easy</h1>
          <p>
            InfluenSearch helps marketers and small business owners find the
            right influencers that match their needs. This app provides accurate
            statistics for youtube influnecers and let you plan and create new
            marketing campaigns.
          </p>
          <NavLink to="/search">
              <button className="btn" type="submit">
                Launch App
              </button>
          </NavLink>
        </div>
        <img src={Influencers} alt="Pics of Influencers" />
      </div>
      <div>
        <h2>WHAT MAKES US AWESOME?</h2>
      </div>
      <div>
        <img  src={Framing} alt="Features of InfluenSearch" />
      </div>
      <Team />
      <Createaccount />
      <Footer />
    </div>
  );
};

export default Landing;
