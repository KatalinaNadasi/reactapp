import React from 'react';
import '../index.css';
import styled, {keyframes} from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: none;
`

const jump = keyframes`
  0% {-webkit-transform: translate(90%, 70%); opacity: 0;}
  33% {-webkit-transform: translate(40%, 20%) rotate(90deg);}
  66% {-webkit-transform: translate(10%, 50%);}
  100% {-webkit-transform: translate(0%) rotate(0deg); opacity: 1;}
`;
const Bars = styled.img`
  animation: ${jump} 1s ease;
  animation-delay: 5s;
  transition: 25s all linear ;
  animation-fill-mode: backwards;
  float: right;
  padding : 10px 16px 0 0;
  cursor: pointer;
`;

export default class Menu extends React.Component {
    render() {

    return (
      <Navbar>
        <ul>
          <li className="submenu">
            <Bars src={require('../img/bars.png')} alt="menu" />
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">Availabilities</a></li>
              <li><a href="#">Contact me</a></li>
              <li><a href="#">Previous website</a></li>
            </ul>
          </li>
        </ul>
      </Navbar>
    );
  }
}
