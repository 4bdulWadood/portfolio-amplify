import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = styled.div`
  width: 4vmin;
  height: 4vh;
  border-radius: 6px;
  border: 2px #C510E3 solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 0.75rem;
  min-width: 2rem;
  &>img {
    width: 20px;
  }

  

`

export const SkillWrapper = ({icon, dimensions, size}) => {
  return <Skill size={size}><img style={{...dimensions}} src={icon}  alt="hello icon" /></Skill>;
};
