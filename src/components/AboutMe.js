import React from "react";
import portrait from "../assets/portraitPic.png";
import Lottie from "lottie-react"
import Animated from '../assets/animated.json'

const style = {
  height: 300,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

export default function AboutMe() {
  return (
    <div className="section-about"  id="aboutme">
      <div className="aboutme-container" >
         <img src={portrait}/>
        <div className="description" >
          <h2>About me</h2>
          <div className="text">
          Hello, I am a software engineer from Toronto, Ontario, passionate about all the different facets of software engineering.
I am a final year student at Toronto Metropolitan University eager to learn and acquire new skills. When I’m not
coding up new projects you can find me in the gym or on the soccer field. 
            <br />
            <div className="MobileSpaceman"><Lottie style={style} interactivity={interactivity} animationData={Animated}/></div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
