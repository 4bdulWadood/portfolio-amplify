import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState("home");
  const navRef = useRef();

  const handleNavClick = (type) => {
    if (type === "main") {
      goTop();
    }
    setIsClicked(type);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="#home" onClick={() => handleNavClick("main")} className={`animated-underline ${isClicked === "main" ? "clicked" : ""}`}>
          Home
        </a>
        <a href="#aboutme" onClick={() => handleNavClick("aboutme")} className={`animated-underline ${isClicked === "aboutme" ? "clicked" : ""}`}>
          About me
        </a>
        <a href="#projects" onClick={() => handleNavClick("projects")} className={`animated-underline ${isClicked === "projects" ? "clicked" : ""}`}>
          Projects
        </a>
        <a href="#contact" onClick={() => handleNavClick("contact")} className={`animated-underline ${isClicked === "contact" ? "clicked" : ""}`}>
          Contact me
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon style={{ marginLeft: "0.5vw" }} icon={faBars} fontSize={25} color="#7600AD" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon style={{ marginLeft: "0.5vw" }} icon={faBars} fontSize={25} color="#7600AD" />
      </button>
    </header>
  );
}