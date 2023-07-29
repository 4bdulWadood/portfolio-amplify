import React, { useState } from 'react';
import Navbar from './Navbar';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Blob from './Blob/Blob';
import { SkillWrapper } from './Skill';

import boyGraphic from '../assets/boyGraphic.png';
import NodeLogo from '../assets/NodeLogo.png';
import figmaLogo from '../assets/figmaLogo.png';
import css3Logo from '../assets/css3Logo.png';
import ReactLogo from '../assets/ReactLogo.png';
import AWSLogo from '../assets/AWSLogo.png';
import personalPic from '../assets/personalPic.jpg';

function MainPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  function onButtonClick() {
    fetch('Resume.pdf')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'SamplePDF.pdf';
        alink.click();
        window.URL.revokeObjectURL(fileURL); // Cleanup after the download
      })
      .catch((error) => {
        console.error('Error fetching the PDF:', error);
        // Handle the error or display a message to the user.
      });
  }

  
  return (
    <>
      <Navbar />
        <div id="home" className="section-main">
          <div className="main-page-container">
            <div className="left-container">
              <span className="title">Full Stack Web Developer</span>
              <img onLoad={handleImageLoad} src={boyGraphic} className="boy" alt="hello icon" />
              {isImageLoaded && (
                <>
                <div className="description">
                Hi, I'm Abdul Wadood, A passionate software engineering student and developer based in Toronto, Ontario.
                <FontAwesomeIcon style={{ marginLeft: '0.5vw' }} icon={faLocationDot} fontSize={25} color="#7600AD" />
              </div>
                            <div className="social-box">
                            <a onClick={onButtonClick}>
                              <FontAwesomeIcon style={{ marginLeft: '0.5vw' }} icon={faFloppyDisk} fontSize={35} color="#7600AD" />
                            </a>
                            <a href="https://github.com/4bdulWadood" target="_blank">
                              <FontAwesomeIcon style={{ marginLeft: '0.5vw' }} icon={faSquareGithub} fontSize={35} color="#7600AD" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdul-wadood-syed-978085220/" target="_blank">
                              <FontAwesomeIcon style={{ marginLeft: '0.5vw' }} icon={faLinkedin} fontSize={35} color="#7600AD" />
                            </a>
                          </div>
                </>
              )}
              <div className="tech-stack">
                <text>Tech Stack | </text>
                <SkillWrapper icon={figmaLogo} dimensions={{ height: '3vh', width: '50%' }} />
                <SkillWrapper icon={css3Logo} dimensions={{ height: '3.25vh', width: '70%', marginTop: '0.25vh' }} />
                <SkillWrapper icon={ReactLogo} dimensions={{ height: '3.5vh', width: '80%' }} />
                <SkillWrapper icon={NodeLogo} dimensions={{ height: '2vh', width: '80%' }} />
                <SkillWrapper icon={AWSLogo} dimensions={{ height: '2vh', width: '65%' }} />
              </div>
            </div>
            <div className="right-container">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={(3, 2, 1)} />
                <Blob />
              </Canvas>
              <img src={personalPic} className="avatar" alt="avatar" />
            </div>
          </div>
        </div>
    </>
  );
}


export default React.memo(MainPage)