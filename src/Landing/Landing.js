import React from "react";
import Heading from "./Heading.js";
import Team from "./Team.js";
import Createaccount from "./Createaccount.js";

const Landing = (props) => {
  return (
    <div>
      <Heading />
      <div className="container">
        {/* <div>
          <h1>Searching for Influncers made intutive and easy</h1>
          <p>
            InflunSearch helps marketers and small business owners find the
            right influencers that match their needs. We provide accurate
            statistics for youtube influnecers and let you plan and create new
            marketing campaigns.
          </p>
        </div>
        <div> */}
        <img className="img" src="./images/Frame.png" alt="frame" />
      </div>
      <div>
        <h1>WHAT MAKES US AWESOME?</h1>
      </div>
      <div>
        <img className="img" src="./images/Framing.png" alt="frame2" />
      </div>
      <Team />
      <Createaccount />
    </div>
  );
};

export default Landing;
