import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import MiniProjects from "./MiniProjects";

export default function Projects() {
  return (
    <div className="section-projects" id="projects">
      <div className="projects-container">
        <Project1 />
        <Project2 />
        <Project3 />
        <MiniProjects />
      </div>
    </div>
  );
}
