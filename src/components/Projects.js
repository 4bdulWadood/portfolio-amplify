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
    gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration: 1.5,  ease: "power2.inOut", scrollTrigger: {
      trigger: el, 
      toggleActions:'restart none restart reset',
    }})
  }, []);

  const links = ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207","https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png", "https://pbs.twimg.com/profile_images/1417542931209199621/fWMEIB5j_400x400.jpg", "https://cdn.worldvectorlogo.com/logos/next-js.svg", "https://w7.pngwing.com/pngs/330/211/png-transparent-node-js-javascript-express-js-server-side-scripting-front-and-back-ends-node-js-angle-logo-web-application.png" ];
  const ProjectData = [
    {
      name: "InvoiceAI",
      logo1: links[0],
      logo2: links[1],
      logo3: links[2],
      text: "InvoiceAI leverages large language model technology to allow users to gain insights on their personal finances.",
      goTo: "https://www.linkedin.com/feed/update/urn:li:activity:7082104282375733248/"
    },
    {
      name: "Gia",
      logo1: links[0],
      logo2: links[3],
      logo3: links[4], 
      text: "Gia Health helps families manage and co-ordinate their in-home elder care using AI. Developed Dashboard and backend.",
      goTo: "https://www.gia.care/"
    }, 
    {
      name: "Andie",
      logo1: links[0],
      logo2: links[4],
      logo3: links[2],
      text: "The Andie app offers real-time traffic and trial solutions to help businesses reach nearby customers.",
      goTo: "https://www.get.alwaysandie.com/"
    }, 
    {
      name: "Lab2Client",
      logo1: links[0],
      logo2: links[3],
      logo3: links[4],
      text: "Lab2Client is an innovative web platform that connects the research communities with experimental research facilities.",
      goTo: "https://lab2client.com/"
    },
    {
      name: "IBM - Watson Studio",
      text: "IBM Watson Studio is an IDE to build, run and manage AI models.",
      goTo: "https://www.ibm.com/products/watson-studio"
    }
  ]
  
  return (
    <div className="Cards" ref={cardRef}>
        <ProjectCard ProjectData={ProjectData[4]}/>
        <ProjectCard ProjectData={ProjectData[3]}/>
        <ProjectCard ProjectData={ProjectData[0]}/>
        <ProjectCard ProjectData={ProjectData[1]}/>
        <ProjectCard ProjectData={ProjectData[2]}/>
    </div>
  );
}