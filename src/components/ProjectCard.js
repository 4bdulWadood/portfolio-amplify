import "../public/styles/projectscard.css";
import { Button } from '../components/StyledButton';


function ProjectCard({name, logo1=null, logo2=null, logo3=null, text, goTo}) {
  return (
    <div className="Card">
        <div className={name}></div>
        <div className="text">
            <div className="header">
                <div>{name}</div>
                {
                    logo1 ?
                        <img
                            src={logo1}
                            alt="Example Image"
                            width="15"
                            height="15"
                        />
                    : null
                }
                                {
                logo2 ?
                        <img
                            src={logo2}
                            alt="Example Image"
                            width="20"
                            height="15"
                        />
                    : null
                }
                                {
                logo3 ?
                        <img
                            src={logo3}
                            alt="Example Image"
                            width="15"
                            height="15"
                        />
                    : null
                }
            </div>
            <div className="body">
                {text}
            </div>
            <div className="footer"><a href={goTo}><Button/></a></div>
        </div>
    </div>
  );
}

export default ProjectCard;
