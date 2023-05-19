import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ButtonComponent = styled.button`
  width: 20.6vw;
  height: 23vh;
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

export const Button = () => {
  return <ButtonComponent> <FontAwesomeIcon icon={faArrowRight} fontSize={20} color="white"/> </ButtonComponent>;
};
