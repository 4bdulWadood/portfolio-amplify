import React from "react";
import miniproj1 from "../public/img/miniproj1.png";
import miniproj2 from "../public/img/miniproj2.png";
import miniproj3 from "../public/img/miniproj3.png";
import miniproj4 from "../public/img/miniproj4.png";
import miniproj5 from "../public/img/miniproj5.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";

import Chirper from '../assets/Chirper.jpg';
import CryptoWallet from '../assets/CryptoWallet.jpg';
import PostureClassifier from '../assets/PostureClassifier.png';

export default function MiniProjects() {
  return (
    <div className="mini-projects-box">
      <div className="single-box">
        <img src={Chirper} className="project-img" alt="project image" />
        <div className="project-description">
          Full Stack Twitter Clone 
          <a href="https://github.com/4bdulWadood/ChirperSocialMedia" target="_blank">
              <img src={gitIco} className="liveIco" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={CryptoWallet} className="project-img" alt="project image" />
        <div className="project-description">
          Cryptocurrency Tracker
          <a href="https://github.com/4bdulWadood/CryptoWallet" target="_blank">
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={PostureClassifier} className="project-img" alt="project image" />
        <div className="project-description">
          Posture Classifier
          <a
            href="https://github.com/4bdulWadood/PostureCorrector"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>      
    </div>
  );
}
