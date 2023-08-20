import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ButtonComponent = styled.button`
  width: 20.6vw;
  height: 20vh;
  border-radius: 5px;
  background-image: linear-gradient(90deg, rgba(115,46,195,1), rgba(172,41,179,1)); 
  font-weight: bold;
  color: white;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }
`

const ButtonComponent2 = styled.button`
  width: 100px;
  height: 4vh;
  border-radius: 5px;
  background-image: linear-gradient(90deg, rgba(115,46,195,1), rgba(172,41,179,1)); 
  font-weight: bold;
  color: white;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }
`
export const Button = ({type}) => {
  return type==="next"?<ButtonComponent> <FontAwesomeIcon icon={faArrowRight} fontSize={15} color="white"/> </ButtonComponent> : <ButtonComponent2> <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={15} color="white"/> </ButtonComponent2> ;
};
