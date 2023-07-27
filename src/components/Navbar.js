import React, {useState, useEffect,Component} from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
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

	return (
		<header>
			<a href="#home">
        <div className="nav-logo"><img src={require("../assets/logo.png")} alt="not found"/></div>
      </a>
			<nav ref={navRef}>
				<a href="/#home">Home</a>
				<a href="/#aboutme">About me</a>
				<a href="/#projects">Projects</a>
				<a href="/#contact">Contact me</a>
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

/*https://www.youtube.com/watch?v=At4B7A4GOPg
Fix header 
*/