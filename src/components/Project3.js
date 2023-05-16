import React, { useState } from "react";
import page3 from "../assets/Andie.jpg";
import htmlIco from "../public/img/html.png";
import cssIco from "../public/img/css.png";
import jsIco from "../public/img/js.png";
import bootIco from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";
import threeIco from "../public/img/three.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";
import { SkillWrapper } from './Skill'
import NodeLogo from "../assets/NodeLogo.png";
import css3Logo from "../assets/css3Logo.png";

import ReactLogo from "../assets/ReactLogo.png";


export default function Project3() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    } else if (e.target.id == "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
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
              <SkillWrapper size={"1.8rem"} icon={NodeLogo} dimensions={{height: "2vh", width: "90%"}} />
              <SkillWrapper size={"1.8rem"} icon={css3Logo} dimensions={{height: "3vh", width: "55%"}} />
              <SkillWrapper size={"1.8rem"} icon={ReactLogo} dimensions={{height: "3vh", width: "60%"}} />
          </div>
        </div>
      </div>
    </div>
  );
}
