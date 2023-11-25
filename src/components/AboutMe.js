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
    <div className="section-about">
      <div className="aboutme-container" >
         <img src={portrait}/>
        <div className="description" >
          <h2>Who Am I?</h2>
          <div className="text">
          When it comes to the work I do, I dislike labels. I don't like to define myself as a backend, frontend, full-stack developer, or cloud architect, but rather as someone who seeks to understand and build quality software products. The need to specialize in one field and pick a lane is important for staying employed in a competitive job market; however, having a holistic view of the software is equally important. It enables transparent communication within an organization, fosters product ownership in the employees, and leads to a faster go-to-market time for products. It's like being a versatile musician who can play multiple instruments; you might be talented at one instrument, but the ability to harmonize with others makes the ensemble shine.
            <br />
            <div className="MobileSpaceman"><Lottie style={style} interactivity={interactivity} animationData={Animated}/></div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
