import React, { useState } from "react";
import Navbar from "./Navbar";
import boyGraphic from "../assets/boyGraphic.png";
import NodeLogo from '../assets/NodeLogo.png'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Blob from './Blob/Blob'
import { SkillWrapper } from './Skill'
import figmaLogo from "../assets/figmaLogo.png";
import css3Logo from "../assets/css3Logo.png";
import ReactLogo from "../assets/ReactLogo.png";
import AWSLogo from "../assets/AWSLogo.png";
import personalPic from "../assets/personalPic.jpg"

export default function MainPage() {
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
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <span className="title">Full Stack Web Developer</span>
          <img src={boyGraphic} className="boy" alt="hello icon" />
          <div className="description">
            Hi, I'm Abdul Wadood, A passionate software engineering student and developer based in Toronto, Ontario.
            <FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faLocationDot} fontSize={25} color="#7600AD"/>
          </div>
          <div className="social-box">
              <a href='/resume.pdf'  download><FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faFloppyDisk} fontSize={35} color="#7600AD"/></a>
              <a href="https://github.com/4bdulWadood" target="_blank"><FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faSquareGithub} fontSize={35} color="#7600AD"/></a>
              <a href="https://www.linkedin.com/in/abdul-wadood-syed-978085220/" target="_blank"><FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faLinkedin} fontSize={35} color="#7600AD"/></a>
          </div>   
          <div className="tech-stack">
              <text>Tech Stack | </text>
              <SkillWrapper size="1.2em" icon={figmaLogo} dimensions={{height: "3vh", width: "50%"}} />
              <SkillWrapper size="1.2em" icon={css3Logo} dimensions={{height: "3.25vh", width: "70%", marginTop:"0.25vh"}} />
              <SkillWrapper size="1.2em" icon={ReactLogo} dimensions={{height: "3.5vh", width: "80%"}} />
              <SkillWrapper size="1.2em" icon={NodeLogo} dimensions={{height: "2vh", width: "80%"}} />
              <SkillWrapper size="1.2em" icon={AWSLogo} dimensions={{height: "2vh", width: "65%"}} />
          </div>
        </div>
        <div className="right-container">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Blob/>
          </Canvas>
          <img src={personalPic} className="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
