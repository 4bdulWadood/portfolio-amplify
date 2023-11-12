import React, { useState, useRef, useEffect, } from 'react';
import Navbar from './Navbar';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Blob from './Blob/Blob';
import { SkillWrapper } from './Skill';
import Lottie from "lottie-react"
import Animated from '../assets/lottie.json'
import boyGraphic from '../assets/boyGraphic.png';
import NodeLogo from '../assets/NodeLogo.png';
import figmaLogo from '../assets/figmaLogo.png';
import css3Logo from '../assets/css3Logo.png';
import ReactLogo from '../assets/ReactLogo.png';
import AWSLogo from '../assets/AWSLogo.png';
import personalPic from '../assets/personalPic.jpg';

function MainPage() {
  const [lottie, setLottie] = useState();
  const lottieRef = useRef(null);

  const options = {
    typeSpeed: 50,
    startDelay: 1500,
    backSpeed: 50,
    backDelay: 8000,
    loop: true,
  };

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../assets/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  var pdfUrl = "https://drive.google.com/file/d/1JKhrx6BT0XM8j4hSnzipcy8GDKkODmQe/view"

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = 'document.pdf'; // Change the filename if needed
    link.click();
  };

  
  return (
    <>
      <Navbar />
        <div id="home" className="section-main">
          <div className="main-page-container">
            <div className="left-container">
              <span className="title">An Engineer</span>
              <div style={{marginTop: "-0.5rem", marginLeft: "5rem" }}><img onLoad={handleImageLoad} src={boyGraphic} className="boy" alt="hello icon" /></div>
              {isImageLoaded && (
                <>
                <div className="description">
                Hi, I'm Abdul Wadood, A passionate software engineering student and developer based in Toronto, Ontario.
                <FontAwesomeIcon style={{ marginLeft: '0.5vw' }} icon={faLocationDot} fontSize={25} color="#7600AD" />
              </div>
                            <div className="social-box">
                            <a onClick={handleDownload}>
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
            <div
              ref={lottieRef}
            ></div>
            </div>
          </div>
        </div>
    </>
  );
}


export default React.memo(MainPage)