import styled, {keyframes} from 'styled-components';

export const Navbar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 62px;
  background-color: none;
  z-index: 10 !important;
`;


export const jump = keyframes`
  0% {-webkit-transform: translate(90%, 70%); opacity: 0;}
  33% {-webkit-transform: translate(40%, 20%) rotate(90deg);}
  66% {-webkit-transform: translate(10%, 50%);}
  100% {-webkit-transform: translate(0%) rotate(0deg); opacity: 1;}
`;


export const Bars = styled.img`
  animation: ${jump} 1s ease;
  animation-delay: 5s;
  transition: 25s all linear ;
  animation-fill-mode: backwards;
  float: right;
  padding : 10px 16px 0 0;
  cursor: pointer;
`;
