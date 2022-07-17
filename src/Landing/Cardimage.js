import React from "react";
import Avatar from "../images/Avatar.png";

const Cardimage = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={Avatar} alt="Picture of Chumpol"></img>
        <p>Chumpol</p>
        <p>Full Stack Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Picture of Tanya"></img>
        <p>Tanya</p>
        <p>Front-End Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Picture of Roberto"></img>
        <p>Roberto</p>
        <p>Back-End Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Picture of Thushara"></img>
        <p>Thushara</p>
        <p>Front-End Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Picture of Saurabh"></img>
        <p>Saurabh</p>
        <p>Full Stack Developer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Picture of Siddharth"></img>
        <p>Siddharth</p>
        <p>UI/UX Designer</p>
      </div>
      <div class="card">
        <img src={Avatar} alt="Picture of Yash"></img>
        <p>Yash</p>
        <p>UI/UX Designer</p>
      </div>
    </div>
  );
};
export default Cardimage;
