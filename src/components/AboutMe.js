import React from "react";
import portrait from "../assets/portraitPic.png";


export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
         <img src={portrait}/>
        <div className="description">
          <h2>About me</h2>
          <div className="text">
          Hello, I am a software engineer from Toronto, Ontario, passionate about all the different facets of software engineering.
I am a final year student at Toronto Metropolitan University eager to learn and acquire new skills. When I’m not
coding up new projects you can find me in the gym or on the soccer field. 
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
