import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ProjectCard from './ProjectCard';

import "../public/styles/projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {  
  const cardRef = useRef(null);


  useEffect(()=>{
    const el = cardRef.current;
    gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration: 1.75, scrollTrigger: {
      trigger: el
    }})
  }, []);

  return (
    <div id = "projects" className="Cards" ref={cardRef}>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
  );
}