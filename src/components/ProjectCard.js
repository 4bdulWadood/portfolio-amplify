import "../public/styles/projectscard.css";
import { Button } from '../components/StyledButton';


function ProjectCard(prop) {
    const {ProjectData} = prop;

    return (
    <div className="Card">
        <div className={ProjectData.name}></div>
        <div className="text">
            <div className="header">
                <div>{ProjectData.name}</div>
                {
                    ProjectData.logo1 ?
                        <img
                            src={ProjectData.logo1}
                            alt="Example Image"
                            width="15"
                            height="15"
                        />
                    : null
                }
                                {
                ProjectData.logo2 ?
                        <img
                            src={ProjectData.logo2}
                            alt="Example Image"
                            width="20"
                            height="15"
                        />
                    : null
                }
                                {
                ProjectData.logo3 ?
                        <img
                            src={ProjectData.logo3}
                            alt="Example Image"
                            width="15"
                            height="15"
                        />
                    : null
                }
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
