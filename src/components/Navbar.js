import React from "react";
import menu from "../public/img/hamburger_menu.png";

export default function Navbar() {
  return (
    <div className="nav-section">
      <div className="nav-container">
        <a href="#home">
          <div className="nav-logo"><img src={require("../assets/logo.png")} alt="not found"/></div>
        </a>
        <img src={menu} className="hamburger-menu" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
