import "../public/styles/projectscard.css";
import { Button } from '../components/StyledButton';


function ProjectCard(prop) {
    const {ProjectData} = prop;

    return (
    <div className="Card">
        <div className={("ProjectImg "+ ProjectData.name) || "IBM"}></div>
        <div className="text">
            <div className="header">
                <div>{ProjectData.name}</div>
            </div>
            <div className="body">
                {ProjectData.text}
            </div>
            <div className="footer"><a href={ProjectData.goTo}><Button/></a></div>
        </div>
    </div>
  );
}

export default ProjectCard;
