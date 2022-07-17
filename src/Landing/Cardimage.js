import React from "react";
import Avatar from "../images/Avatar.png";

const Cardimage = (props) => {
  return (
    <div className="cards">
      <div class="card">
        <img src={Avatar} alt="Chumpol"></img>
        <p>Chumpol</p>
        <p>Full Stack Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Tanya"></img>
        <p>Tanya</p>
        <p>Front-End Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Roberto"></img>
        <p>Roberto</p>
        <p>Back-End Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Thushara"></img>
        <p>Thushara</p>
        <p>Front-End Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Saurabh"></img>
        <p>Saurabh</p>
        <p>Full Stack Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Siddharth"></img>
        <p>Siddharth</p>
        <p>UI/UX Designer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Yash"></img>
        <p>Yash</p>
        <p>UI/UX Designer</p>
      </div>
    </div>
  );
};
export default Cardimage;
