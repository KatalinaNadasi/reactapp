import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import {pink} from '../variables.js';
import { fadeIn } from 'react-animations';


export const Container = styled.div`
  width: 100%;
`;

export const Relative = styled.div`
  position: relative;
  overflow: hidden;
`;

export function IconTitle(props){
  return (
    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="4 175.711 259.175 164.726" enableBackground="new 4 175.711 259.175 164.726"
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
   margin-top: 400px;
   transition: 0.5s all ease;

   ${({hide}) => hide && css`
   opacity: 0;
   `}
   @media(max-width: 450px){
     margin-top: 100px;
   }
   @media(min-width: 450px) and (max-width: 768px){
      margin-top: 150px;
   }
 `;

export const fadeAnimation = keyframes`${fadeIn}`;

export const FadeDiv = styled.div`
  animation: 0.2s ${fadeAnimation};
`;

export const ImgDiv = styled.div `
  overflow: hidden;
`

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
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      position: relative;
      font-size: 22px;
      font-weight: bold;
      padding: 10px;
      margin: 80px 80px 0 80px;
      &:hover {
        transition-delay: 0.3s;
      }

      @media (max-width: 768px){
        margin: 10px 20px 0 20px;
        font-size: 16px;
      }
      @media (min-width: 768px) and (max-width: 1170px){
        margin: 40px 80px 0 80px;
        font-size: 18px;
      }
    }

    p {
      font-style: italic;
      font-size: 20px;
      position: relative;
      color: #fff;
      padding: 20px 120px;
      text-align: center;
      transition: all 0.2s ease-in-out;
      line-height: 25px;
      &:hover {
      transition-delay: 0.4s;
      }

      @media (max-width: 768px) {
        margin: 0;
        padding: 20px 30px;
        font-size: 14px;
        line-height: 20px;
      }
      @media (min-width: 768px) and (max-width: 1170px){
        padding: 20px 20px;
        font-size: 16px;
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

export const MaskSmallImg = styled.div `
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
      text-transform: uppercase;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      position: relative;
      font-size: 20px;
      font-weight: bold;
      margin: 10px 30px 0 10px;
      padding: 10px;
      &:hover {
        transition-delay: 0.3s;
      }

      @media (max-width: 768px){
        margin: 10px 20px 0 20px;
        font-size: 16px;
      }
      @media(min-width: 768px) and (max-width: 992px){
        font-size: 16px;
      }
    }

    p {
      font-style: italic;
      font-size: 18px;
      position: relative;
      color: #fff;
      padding: 20px 40px;
      text-align: center;
      transition: all 0.2s ease-in-out;
      line-height: 25px;

      &:hover {
      transition-delay: 0.4s;
      }

      @media (max-width: 768px){
        margin: 0;
        padding: 20px 30px;
        font-size: 14px;
        line-height: 20px;
      }
      @media(min-width: 768px) and (max-width: 992px){
        font-size: 14px;
        line-height: 20px;
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

  @media (max-width: 500px){
    width: 90%;
    margin: 20px auto 0px;
    float: none;
    height: 281px;
  }
  @media (min-width: 500px) and (max-width: 650px) {
    margin: 20px 80px 0px 80px;
    width: 70%;
    float: none;
  }
  @media (min-width: 650px) and ( max-width: 768px){
    width: 70%;
    float: none;
    margin: 20px 100px 0px 100px;
    display: block;
    height: 380px;
  }
  @media(min-width: 768px) and (max-width: 992px){
    height: 404px;
  }
`;

export const ImageContainer2 = styled.div`
  margin: -50px 9px 23px 125px;
  width: 51%;
  float: right;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 500px){
    width: 90%;
    margin: 20px auto;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 650px) {
    margin: 20px 80px 0px 80px;
    width: 70%;
    float: none;
  }
  @media (min-width: 650px) and ( max-width: 768px){
    width: 70%;
    float: none;
    margin: 20px 100px;
    display: block;
  }
  @media (min-width: 768px) and (max-width: 992px){
    margin: -94px 25px 23px 125px;
  }
`;

export const ImageContainer3 = styled.div`
  width: 50%;
  float: left;
  margin: -345px 0px 0 10px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 500px){
    width: 90%;
    margin: 20px auto;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 650px) {
    margin: 20px 80px 0px 80px;
    width: 70%;
    float: none;
  }
  @media (min-width: 650px) and ( max-width: 768px){
    width: 70%;
    float: none;
    margin: 20px 100px;
    display: block;
  }
  @media(min-width: 768px) and (max-width: 992px){
    margin: -245px 0px 0 30px;
  }
`;

export const ImageContainer4 = styled.div`
  width: 35%;
  float: right;
  margin: 25px 76px 25px 0;
  transition: all 0.2s ease-in;
  height: auto;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 500px){
    width: 90%;
    margin: 20px auto;
    float: none;
    height: 335px;
  }
  @media (min-width: 500px) and (max-width: 650px) {
    margin: 20px 80px 0px 80px;
    width: 70%;
    float: none;
    height: 341px;
  }
  @media (min-width: 650px) and ( max-width: 768px){
    width: 70%;
    float: none;
    margin: 0 100px;
    display: block;
    height: 281px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    height: 276px;
  }
`;

export const ImageContainer5 = styled.div`
  margin: 50px -52px 23px 0px;
  float: right;
  transition: all 0.2s ease-in;
  width: 44%;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  button {
    @media (max-width: 992px){
      margin-top: 60px;
    }
  }

  @media (max-width: 500px){
    width: 90%;
    margin: 20px auto;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 650px) {
    margin: 20px 80px 0px 80px;
    width: 70%;
    float: none;
  }
  @media (min-width: 650px) and ( max-width: 768px){
    width: 70%;
    float: none;
    margin: 20px 100px;
    display: block;
  }
  @media(min-width: 768px) and (max-width: 1170px){
    margin: 50px 30px 23px 0px;
  }
`;

export const ImageContainer6 = styled.div`
  margin: -80px 37px 150px 71px;
  width: 60%;
  float: right;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 500px){
    width: 90%;
    margin: 20px auto;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 650px) {
    margin: 20px 80px 0px 80px;
    width: 70%;
    float: none;
  }
  @media (min-width: 650px) and ( max-width: 768px){
    width: 70%;
    float: none;
    margin: 20px 100px;
    display: block;
  }
  @media(min-width: 768px) and (max-width: 1170px){
    margin: 7px 37px 150px 71px;
  }
`;

export const Background1 = styled.div`
  height: auto;
  margin-bottom: 350px;
  z-index: -99;
  background: rgba(243, 243, 237, 1.0);
  background: linear-gradient(to bottom, rgba(243, 243, 237, 1.0) 0%, rgba(255, 189, 160, 1) 30%, rgba(220, 20, 60, 1.0) 50%, rgba(255, 189, 160, 1) 80%, rgba(243, 243, 237, 1.0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F3F3ED', endColorstr='${pink}',GradientType=0 ); /* IE6-9 */
`;
