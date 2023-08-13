import React from "react";
import CryptoWallet from '../assets/CryptoWallet.jpg';
import PostureClassifier from '../assets/PostureClassifier.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function MiniProjects() {
  return (
    <div className="mini-projects-box">
      <div className="single-box">
        <img src={CryptoWallet} className="project-img" alt="project image" />
        <div className="project-description">
          Cryptocurrency Tracker
          <a href="https://github.com/4bdulWadood/CryptoWallet" target="_blank">
            <FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faSquareGithub} fontSize={35} color="#7600AD"/>
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={PostureClassifier} className="project-img" alt="project image" />
        <div className="project-description">
          Posture Classifier
          <a
            href="https://github.com/4bdulWadood/PostureClassfier-CNN"
            target="_blank"
          >
            <FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faSquareGithub} fontSize={35} color="#7600AD"/>
          </a>
        </div>
      </div>      
    </div>
  );
}
