import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ProjectCard from './ProjectCard';

import "../public/styles/projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {  
  const imgRef = useRef(null);


  useEffect(()=>{
    const el = imgRef.current;
    /*gsap.fromTo(el, {rotation: 0}, {rotation: 360*4, duration: 3, scrollTrigger: {
      trigger: el
    }})*/
  }, []);

  return (
    <div id = "projects" className="Cards" >
        <ProjectCard/>
        
    </div>
  );
}