import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Howl } from "howler";

export default function Navbar() {
  const [lottie, setLottie] = useState();
  const [play2, setPlay] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const lottieRef = useRef(null);
  const soundRef = useRef();

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));

    // Set initial window height
    setWindowHeight(window.innerHeight);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render


  let src = [
    "https://audio.jukehost.co.uk/Lqh5MwaPjKiwBRIsUIWjx9eNMnQ84mAz",
    "https://audio.jukehost.co.uk/TnXI1s4Rw0ZCaWF6StL2V9wvNXP43THX",
    "https://audio.jukehost.co.uk/7eemldfTwu8dKluBci9x7pEUArb315Ge",
  ];

  const getRandomSong = () => src[Math.floor(Math.random() * src.length)];

  const playNextSong = () => {
    soundRef.current = new Howl({
      src: getRandomSong(),
      format: ["mp3"],
      onend: playNextSong,
    });
    soundRef.current.play();
  };

  useLayoutEffect(() => {
    soundRef.current = new Howl({
      src: getRandomSong(),
      format: ["mp3"],
      onend: playNextSong,
    });
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: play2,
        animationData: require("../assets/audioButton.json"),
      });
      return () => animation.destroy();
    }
  }, [lottie, play2]);

  const handleClick = (type) => {
    switch (type) {
      case "main":
        window.scrollTo(0, 0);
        break;
      case "aboutme":
        window.scrollTo(0, windowHeight/0.90);
        break;
      case "project1": 
        window.scrollTo(0, windowHeight/0.52); 
        break;
      case "project2": 
        window.scrollTo(0, windowHeight/0.30);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }

    setIsClicked(type);
  };


  const handlePlay = () => {
    setPlay(!play2);
    !play2 ? soundRef.current.play() : soundRef.current.pause();
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a>
        <div className="nav-logo">
          <img src={require("../assets/logo.png")} alt="not found" />
        </div>
      </a>
      <nav ref={navRef}>
        <a
          href="/#main"
          style={{ width: "3.25rem" }}
          onClick={(e) => {
            handleClick("main");
          }}
          className={`animated-underline ${isClicked === "main" ? "clicked" : ""}`}
        >
          Home
        </a>
        <a
          href="/#aboutme"
          style={{ width: "5.25rem" }}
          onClick={(e) => {
            handleClick("aboutme");
          }}
          className={`animated-underline ${isClicked === "aboutme" ? "clicked" : ""}`}
        >
          About me
        </a>
        <a
          href="/#projects"
          style={{ width: "3.8rem" }}
          onClick={(e) => {
            handleClick("project1");
          }}
          className={`animated-underline ${isClicked === "project1" ? "clicked" : ""}`}
        >
          Project
        </a>
        <a
          href="/#contact"
          style={{ width: "6rem" }}
          onClick={(e) => {
            handleClick("contact");
          }}
          className={`animated-underline ${isClicked === "contact" ? "clicked" : ""}`}
        >
          Contact me
        </a>
        <div ref={lottieRef} onClick={(e) => { handlePlay() }} className="audio-icon"></div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon style={{ marginLeft: "0.5vw" }} icon={faBars} fontSize={25} color="#7600AD" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon style={{ marginLeft: "0.5vw" }} icon={faBars} fontSize={25} color="#7600AD" />
      </button>
    </header>
  );
}
