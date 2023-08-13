import React, { useState } from "react";
import page3 from "../assets/Andie.jpg";
import { SkillWrapper } from './Skill'
import NodeLogo from "../assets/NodeLogo.png";
import css3Logo from "../assets/css3Logo.png";

import ReactLogo from "../assets/ReactLogo.png";


export default function Project3() {
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page3} style={{width: "100%", marginTop: "-8%"}} />
      </div>
      <div className="right-container">
        <h1 style={{marginBottom: "-3%"}}>Andie</h1>
        <div className="description">
          <br />
          The Andie app offers real-time traffic and trial solutions to help businesses reach nearby customers, attract new guests, and grow your sales.
          <br/>
          <br/>
          Developed a web based dashboard for businesses to perform administrative duties.
          <div className="tech-box">
              <SkillWrapper size={"40px"} icon={NodeLogo} dimensions={{height: "2vh", width: "90%"}} />
              <SkillWrapper size={"40px"} icon={css3Logo} dimensions={{height: "3vh", width: "55%"}} />
              <SkillWrapper size={"40px"} icon={ReactLogo} dimensions={{height: "3vh", width: "60%"}} />
          </div>
        </div>
      </div>
    </div>
  );
}
