import "../public/styles/projectscard.css";
import { Button } from '../components/StyledButton';


function ProjectCard({ref}) {
  return (
    <div className="Card" ref={ref}>
        <div className="mainimg"></div>
        <div className="text">
            <div className="header">
                <div>InvoiceAI</div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
                    alt="Example Image"
                    width="15"
                    height="13"
                />
               <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png"
                    alt="Example Image"
                    width="16"
                    height="12"
                />
               <img
                    src="https://pbs.twimg.com/profile_images/1417542931209199621/fWMEIB5j_400x400.jpg"
                    alt="Example Image"
                    width="12"
                    height="12"
                />
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
