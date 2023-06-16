import React, { useState } from "react";
import FoodCrew from "../assets/FoodCrew.jpg";
import { SkillWrapper } from './Skill'
import awsLogo from "../assets/AWSLogo.png";

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
        <h1>TLR in Action</h1>
        <div className="description">
          Developed a WordPress website for a local non-profit company.
          Setup CI/CD for existing website using AWS CodePipeline. 
        
          <div className="tech-box">
            <SkillWrapper size={"4.5vh"} icon={awsLogo} dimensions={{height: "3vh", width: "60%"}} />
          </div>
          
        </div>
      </div>
      <div className="left-container">
        <img src={FoodCrew} className="img-project2" />
      </div>
    </div>
  );
}
