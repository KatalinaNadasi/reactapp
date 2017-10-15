import styled, {keyframes} from 'styled-components';
import React from 'react';

export function Bars(props){
  return (
    <svg version="1.1" id="bars" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="34.554px" height="35.94px" viewBox="0 0 39.554 35.94" enableBackground="new 0 0 39.554 35.94" xmlSpace="preserve">
      <path fill="black" stroke="black" strokeMiterlimit="10" d="M39.054,4.717c0,2.329-1.888,4.217-4.217,4.217H4.717
	     C2.388,8.934,0.5,7.046,0.5,4.717l0,0C0.5,2.388,2.388,0.5,4.717,0.5h30.121C37.167,0.5,39.054,2.388,39.054,4.717L39.054,4.717z"/>
      <path fill="black" stroke="black" strokeMiterlimit="10" d="M39.054,18.573c0,1.996-1.618,3.614-3.614,3.614H4.115
	      c-1.997,0-3.615-1.618-3.615-3.614l0,0c0-1.997,1.618-3.615,3.615-3.615H35.44C37.436,14.958,39.054,16.576,39.054,18.573
	      L39.054,18.573z"/>
      <path fill="black" stroke="black" strokeMiterlimit="10" d="M39.054,31.826c0,1.996-1.618,3.614-3.614,3.614H4.115
	      c-1.997,0-3.615-1.618-3.615-3.614l0,0c0-1.997,1.618-3.615,3.615-3.615H35.44C37.436,28.211,39.054,29.829,39.054,31.826
	      L39.054,31.826z"/>
    </svg>
  )
}

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


export const BarsContainer = styled.div`
  animation: ${jump} 1s ease;
  animation-delay: 5s;
  transition: 25s all linear ;
  animation-fill-mode: backwards;
  float: right;
  padding : 10px 16px 0 0;
  cursor: pointer;
`;
