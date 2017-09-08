import React from 'react';
import '../index.css';
import styled, {keyframes} from 'styled-components';
import {pink} from '../variables.js';

const Navbar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: none;
`;

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

const SubLink = styled.a`
  text-align: right;
  float: right;
  display: block;
  position: relative;
  text-decoration: none;
  font-size: 17px;
  padding: 10px;
  margin: 0;
  background: transparent;
  width: 150px;
  transition: all .5s;
  line-height: 20px;
  color: ${pink};
  line-height: 20px;

  &:hover {
    background: ${pink};
    padding: 10px 40px 10px 0;
    width: 200px;
    transition: all .5s;
    color: white;
  }
`

export default class Menu extends React.Component {
    render() {

    return (
      <Navbar>
        <ul>
          <li className="submenu">
            <Bars src={require('../img/bars.png')} alt="menu" />
            <ul>
              <li><SubLink href="#">Work</SubLink></li>
              <li><SubLink href="#">Skills</SubLink></li>
              <li><SubLink href="#">About me</SubLink></li>
              <li><SubLink href="#">Availabilities</SubLink></li>
              <li><SubLink href="#">Contact me</SubLink></li>
              <li><SubLink href="#">Previous website</SubLink></li>
            </ul>
          </li>
        </ul>
      </Navbar>
    );
  }
}
