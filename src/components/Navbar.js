import React, {useState, useEffect, useLayoutEffect} from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Howl} from 'howler';
import music1 from '../assets/songs/rain.mp3'
import music2 from '../assets/songs/otherside.mp3'
import music3 from '../assets/songs/rain(1).mp3'

export default function Navbar() {

  const [lottie, setLottie] = useState();
  const [play2, setPlay] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  let src = [music1, music2, music3];

  src = src[(Math.floor(Math.random() * src.length))]

  const [sound, setSound] = useState();
  useLayoutEffect(() => {
    setSound(new Howl({ src }));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: false,
        autoplay: play2,
        animationData: require("../assets/audioButton.json"),
      });
      return () => animation.destroy();
    }
  }, [lottie, play2]);

  const handleClick = (type) => {
    if(type=="main"){
      window.scrollTo(0, 0);
    }
    setIsClicked(type);
  };


  const handlePlay = () => {
    setPlay(!play2);
    !play2 ? sound.play() : sound.pause();
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }
  
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<a>
        <div className="nav-logo"><img src={require("../assets/logo.png")} alt="not found"/></div>
      </a>
			<nav ref={navRef}>
				<a href="/#main" style={{width: "3.4rem"}} onClick={e=>{handleClick("main")}} className={`animated-underline ${isClicked==="main" ? 'clicked' : ''}`}>Home</a>
				<a href="/#aboutme" style={{width: "6.6rem"}} onClick={e=>{handleClick("aboutme")}} className={`animated-underline ${isClicked==="aboutme" ? 'clicked' : ''}`}>About me</a>
				<a href="/#projects" style={{width: "4.4rem"}} onClick={e=>{handleClick("projects")}} className={`animated-underline ${isClicked==="projects" ? 'clicked' : ''}`}>Projects</a>
				<a href="/#contact" style={{width: "7.5rem"}} onClick={e=>{handleClick("contact")}} className={`animated-underline ${isClicked==="contact" ? 'clicked' : ''}`}>Contact me</a>
        <div
            ref={lottieRef}
            onClick={e=>{handlePlay()}}
            className="audio-icon"
        ></div>
        
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FontAwesomeIcon style={{marginLeft: "0.5vw" }} icon={faBars} fontSize={25} color="#7600AD"/>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FontAwesomeIcon style={{marginLeft: "0.5vw"}} icon={faBars} fontSize={25} color="#7600AD"/>
			</button>
		</header>
	);
}

