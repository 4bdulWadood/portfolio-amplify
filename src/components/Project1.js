import React, { useState } from "react";
import page1 from "../assets/Gia.jpg";
import { SkillWrapper } from './Skill'
import figmaLogo from "../assets/figmaLogo.png";
import css3Logo from "../assets/css3Logo.png";
import ReactLogo from "../assets/ReactLogo.png";


export default function Project1() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");

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
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page1} className="img-project1" />
      </div>
      <div className="right-container">
        <h1>Gia Health</h1>
        <div className="description" >
          Gia Health helps families manage and co-ordinate their in-home elder care using AI.
          <br/>
          <br/>
          Developed a platform where families can input their care needs, get matched with a 
          caregiver, book, and message the caregiver.

          <div className="tech-box">
              <SkillWrapper size={"40px"} icon={figmaLogo} dimensions={{height: "3vh", width: "50%"}} />
              <SkillWrapper size={"40px"} icon={css3Logo} dimensions={{height: "3vh", width: "55%"}} />
              <SkillWrapper size={"40px"} icon={ReactLogo} dimensions={{height: "3vh", width: "60%"}} />


           
          
          </div>
        </div>
      </div>
    </div>
  );
}
