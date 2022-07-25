import React from "react";
import Heading from "./Heading.js";
import Team from "./Team.js";
import Footer from "./Footer.js";
import Influencers from "../images/Influencers.png";
import Framing from "../images/Framing.png";

const Landing = (props) => {
  return (
    <div className="landing">
      <Heading />
      <div className="container-background">
        <div className="container">
          <div className="container-elements">
            <h2>Searching for Influncers made easy</h2> 
            <p>
             InfluenSearch helps marketers and small business owners find the
              right influencers that match their needs. This app provides accurate
              statistics for youtube influencers and let you plan and create new
              marketing campaigns.
            </p>
          </div>
          <img src={Influencers} alt="Influencers" />
        </div>
      </div>
      <div>
        <h2 className="blue-text">WHAT MAKES US AWESOME?</h2>
      </div>
      <div className="big-image">
        <img  src={Framing} alt="Features of InfluenSearch" />
      </div>
      <Team />
      <Footer />
    </div>
  );
};

export default Landing;
