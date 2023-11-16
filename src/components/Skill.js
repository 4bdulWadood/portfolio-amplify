import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = styled.div`
  width: 30px;
  height: 4vh;
  border-radius: 6px;
  border: 2px #C510E3 solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 0.75rem;
  min-width: 2vw;
  &>img {
    width: 20px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0.5rem;
    height: 4vh;
  }
  

`

export const SkillWrapper = ({icon, dimensions, size}) => {
  return <Skill><img style={{...dimensions}} src={icon}  alt="hello icon" /></Skill>;
};
