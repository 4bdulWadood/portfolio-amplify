import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonComponent = styled.button`
  width: 20.6vw;
  height: 23vh;
  border-radius: 5px;
  background-image: linear-gradient(90deg, rgba(115,46,195,1), rgba(172,41,179,1)); 
  font-weight: bold;
  color: white;
  border: none;
`

export const Button = () => {
  return <ButtonComponent> Get Started </ButtonComponent>;
};
