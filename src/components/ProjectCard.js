import "../public/styles/projectscard.css";
import { useEffect, useRef } from "react";
import { Button } from '../components/StyledButton';
import { SkillWrapper } from './Skill'
import ReactLogo from "../assets/ReactLogo.png";

function ProjectCard() {
  return (
    <div className="Card">
        <div className="mainimg"></div>
        <div className="text">
            <div className="header">
                <div>InvoiceAI</div>
               
            </div>
            <div className="body">
                InvoiceAI leverages large language model technology to allow users to gain insights on their personal finances.
            </div>
            <div className="footer"><Button/></div>
        </div>
    </div>
  );
}

export default ProjectCard;
