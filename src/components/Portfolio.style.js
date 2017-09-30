import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {pink, darkcreme} from '../variables.js';
import { fadeIn } from 'react-animations';

export const Container = styled.div`
  width: 100%;
`;

export function IconTitle(props){
  return (
    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="500px" height="500px" viewBox="4 175.711 259.175 164.726" enableBackground="new 4 175.711 259.175 164.726"
      xmlSpace="preserve" {...props}>
      <text transform="matrix(0.9256 0 0 1 4 238.6028)" fontFamily="'NewsGothicMT-Bold'" fontSize="72">PRO</text>
      <text transform="matrix(0.9256 0 0 1 4 325.0032)" fontFamily="'NewsGothicMT-Bold'" fontSize="72">JECTS </text>
      <ellipse fill="crimson" strokeMiterlimit="10" cx="239.675" cy="304.391" rx="23" ry="22.588"/>
    </svg>

  )
};

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const BackgroundTitle = styled.div`
   z-index: -99;
   margin-top: 550px;
   transition: 6s all ease;

   ${({hide}) => hide && css`
   opacity: 0;
   `}
 `;

export const fadeAnimation = keyframes`${fadeIn}`;

export const FadeDiv = styled.div`
  animation: ${fadeAnimation};
`;

export const ImgDiv = styled.div `
  overflow: hidden;
`

export const ImageContainer1 = styled.div`
  width: 60%;
  float: left;
  margin: 0 0 0 125px;
  position: relative;
  transition: all 0.2s ease-in;
  overflow: hidden;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const hoverAnim = keyframes `
  0% 	{transform: translate(265px, 145px) rotate(45deg);}
  50% { transform: translate(-80px, -125px) rotate(45deg);}
  100% {transform: translate(265px, 145px) rotate(45deg);}
`

export const Mask = styled.div `
    opacity: 0;
    transition: all ease-in 0.2s;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  	background-color: rgba(135, 182, 183, 1.0);
    overflow: hidden;

    > div {
      opacity: 0;
    }

    &:hover {
      opacity: 0.9;
      animation: 0.1s ${hoverAnim};

      > div {
        opacity: 1;
        transition-delay: 0.2s;
      }
    }

    h2 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      background: transparent;
      margin: 20px 40px 0px 40px;
  	  transition: all 0.2s ease-in-out;
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      position: relative;
      font-size: 17px;
      padding: 10px;
      margin: 180px 80px 0 80px;
      &:hover {
        transition-delay: 0.3s;
      }
    }

    p {
      font-style: italic;
      font-size: 12px;
      position: relative;
      color: #fff;
      padding: 10px 20px 20px;
      text-align: center;
      transition: all 0.2s ease-in-out;

      &:hover {
      transition-delay: 0.4s;
      }
    }

    a {
	    transition: all 0.2s 0.1s ease-in-out;
      text-decoration: none;

      &:hover {
        transition-delay: 0.5s;
        text-decoration: none;
      }
    }

`

export const Btn = styled.button `
  cursor: pointer;
  padding: 10px;
  border: 3px solid ${darkcreme};
  display: block;
  height: 50px;
  width: 180px;
  background: black;
  color: ${darkcreme};
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -46px -28px 0 -82px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${darkcreme};
    color: black;
  }
`

export const ImageContainer2 = styled.div`
  margin: -50px 0px 23px 125px;
  width: 51%;
  float: right;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
  ${({hide}) => hide && css`
  opacity: 0;
  `}
`;

export const ImageContainer3 = styled.div`
  width: 50%;
  float: left;
  margin: -345px 0 0 60px;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`;

export const ImageContainer4 = styled.div`
  width: 35%;
  float: right;
  margin: 25px 76px 25px 0;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`;

export const ImageContainer5 = styled.div`
  margin: 31px -52px 23px 0px;
  float: right;
  transition: 0.5s all;
  width: 44%;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`;

export const ImageContainer6 = styled.div`
  margin: -80px 0px 0px 71px;
  width: 60%;
  float: right;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`;

export const Background1 = styled.div`
  height: 1500px;
  z-index: -99;
  background: rgba(243, 243, 237, 1.0);
  background: linear-gradient(to bottom, rgba(243, 243, 237, 1.0) 0%, rgba(255, 189, 160, 1) 50%, rgba(220, 20, 60, 1.0) 80%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F3F3ED', endColorstr='${pink}',GradientType=0 ); /* IE6-9 */
`;

export const Background2 = styled.div`
  height: 1500px;
  background: linear-gradient(to bottom, rgba(220, 20, 60, 1.0) 0%, rgba(255, 189, 160, 1) 30%, 	rgba(243, 243, 237, 1.0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='crimson', endColorstr='F3F3ED',GradientType=0 ); /* IE6-9 */
  z-index: -99;
`;

// export const Mountains = styled.div `
//    background-image: url('${require('../img/logo-transp.svg')}') no-repeat;
// `;
