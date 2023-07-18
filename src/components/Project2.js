import React, { useState } from "react";
import FoodCrew from "../assets/123Downloads.jpg";
import { SkillWrapper } from './Skill'
import reactLogo from "../assets/ReactLogo.png";
import fastAPI from "../assets/fastAPI.jpg";

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
        <h1>Invoice AI - 1st Place TorontoAI Hackathon</h1>
        <div className="description">
          Trained a Large Language Model to answer queries about personal finances.
          Utilized Tesseract Library for Optical Character Recognition and dataset generation.
        
          <div className="tech-box">
            <SkillWrapper size={"40px"} icon={reactLogo} dimensions={{height: "3vh", width: "60%"}} />
            <SkillWrapper size={"40px"} icon={fastAPI} dimensions={{height: "3vh", width: "60%"}} />
          </div>
          
        </div>
      </div>
      <div className="left-container">
        <img src={FoodCrew} className="img-project2" />
      </div>
    </div>
  );
}
