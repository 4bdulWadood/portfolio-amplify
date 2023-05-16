import React, { useState } from "react";
import page2 from "../public/img/page2.png";
import cssIco from "../public/img/css.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";
import FoodCrew from "../assets/FoodCrew.jpg";
import { SkillWrapper } from './Skill'
import figmaLogo from "../assets/figmaLogo.png";
import css3Logo from "../assets/css3Logo.png";
import ReactLogo from "../assets/ReactLogo.png";
import AWSLogo from "../assets/AWSLogo.png";
import NodeLogo from "../assets/NodeLogo.png";

export default function Project2() {
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
      <div className="right-container">
        <h1>FoodCrew</h1>
        <div className="description">
          Collaborated with an interdisciplinary team to tackle food insecurity on campus over and 
          to provide culturally appropriate and sustainable food to those who need it most.
          2nd Place at Science Discovery Zone's Case Competition on Food Security.
        
          <div className="tech-box">
            <SkillWrapper size={"1.7rem"} icon={figmaLogo} dimensions={{height: "3vh", width: "60%"}} />
          </div>
          
        </div>
      </div>
      <div className="left-container">
        <img src={FoodCrew} className="img-project2" />
      </div>
    </div>
  );
}
