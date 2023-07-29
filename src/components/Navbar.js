import React, {useState, useEffect,Component} from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState("home");

  const handleClick = (type) => {
    if(type=="main"){
      goTop()
    }
    setIsClicked(type);
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
  
  const { width } = useWindowDimensions();
  
  console.log(width)

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  function goTop(e){
    window.scrollTo(0, 0);
  }

	return (
		<header>
			<a href="#home">
        <div className="nav-logo"><img src={require("../assets/logo.png")} alt="not found"/></div>
      </a>
			<nav ref={navRef}>
				<a href="/#main" style={{width: "3.1rem"}} onClick={e=>{handleClick("main")}} className={`animated-underline ${isClicked==="main" ? 'clicked' : ''}`}>Home</a>
				<a href="/#aboutme" style={{width: "5.3rem"}} onClick={e=>{handleClick("aboutme")}} className={`animated-underline ${isClicked==="aboutme" ? 'clicked' : ''}`}>About me</a>
				<a href="/#projects" style={{width: "4.25rem"}} onClick={e=>{handleClick("projects")}} className={`animated-underline ${isClicked==="projects" ? 'clicked' : ''}`}>Projects</a>
				<a href="/#contact" style={{width: "6rem"}} onClick={e=>{handleClick("contact")}} className={`animated-underline ${isClicked==="contact" ? 'clicked' : ''}`}>Contact me</a>
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

