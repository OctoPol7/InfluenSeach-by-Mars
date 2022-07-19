import React from "react";
import Tanya from "../images/Tanya.jpg"
import Pol from "../images/Pol.jpg"
import Roberto from "../images/Roberto.JPG"
import Thushara from "../images/Thushara.jpg"
import Saurabh from "../images/Saurabh.jpg"
import Sid from "../images/Sid.jpg"
import Yash from "../images/Yash.jpg"

const Cardimage = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={Pol} alt="Chumpol"></img>
        <p>Chumpol</p>
        <p>Full Stack Developer</p>
      </div>
      <div class="card">
        <img src={Tanya} alt="Tanya"></img>
        <p>Tanya</p>
        <p>Front-End Developer</p>
      </div>
      <div class="card">
        <img src={Roberto} style={{height: "auto", width:"800px"}} alt="Roberto"></img>
        <p>Roberto</p>
        <p>Back-End Developer</p>
      </div>
      <div class="card">
        <img src={Thushara} alt="Thushara"></img>
        <p>Thushara</p>
        <p>Front-End Developer</p>
      </div>
      <div class="card">
        <img src={Saurabh} alt="Saurabh"></img>
        <p>Saurabh</p>
        <p>Full Stack Developer</p>
      </div>
      <div class="card">
        <img src={Sid} alt="Siddharth"></img>
        <p>Siddharth</p>
        <p>UI/UX Designer</p>
      </div>
      <div class="card">
        <img src={Yash} alt="Yash"></img>
        <p>Yash</p>
        <p>UI/UX Designer</p>
      </div>
    </div>
  );
};
export default Cardimage;
