import React from 'react';
import styled, {keyframes} from 'styled-components';
import {CircleTitle} from './Header.style';
import {blue, lightpink, creme, darkcreme} from '../variables.js';

export const HeaderContainer = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 15px;
`

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 15px;
  position: relative;
`
export const BackgroundImage = styled.div`
  height: 102vh;
  background-image: url('${require('../img/about/moreabout.jpg')}');
  background-repeat: no-repeat;
  z-index: -99;
  background-size: 100%;
  width: 100%;
  padding: -20px;
  position: relative;

  @media (max-width: 500px){
    margin-top: 71px;
    height: 33vh;
  }
  @media (min-width: 500px) and (max-width: 768px){
    height: 45vh;
    margin-top: 50px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    height: 70vh;
  }
  @media (min-width: 992px) and (max-width: 1110px){
    height: 90vh;
  }
`
export const AboutTitle = CircleTitle.extend`
  font-size: 7rem;
  position: absolute;
  top: -2vh;
  left: -193px;
  color: crimson;


  @media (max-width: 768px){
    font-size: 3rem;
    padding: 100px 0 0 250px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    font-size: 6rem;
    padding: 100px 0 0 267px;
  }
}
`

export const ScrollPosition = styled.div`
  width: 100%;
  text-align: center;
  z-index: 10;
  position: absolute;
  bottom: 150px;
  transform: translateY(-25px);

  @media (max-width: 376px){
    bottom: 60px;
  }
  @media (min-width: 377px) and (max-width: 768px){
    bottom: 60px;
  }

`

export const ScrollDown = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${blue};
  transform: rotate(45deg);
  margin: 0 auto;

  @media (max-width: 376px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 376px) and (max-width: 768px){
    width: 60px;
    height: 60px;
  }
`

export function BottomArrow(props){
  return (
    <svg version="1.1" id="bottom-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="30px" height="30px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" {...props}>
      <path fill="#FFFFFF" d="M430.284,345.375c7.243-6.951,7.283-18.56,0.089-25.804c-6.951-6.999-18.561-7.038-25.543-0.088
        L273.543,449.87l1.485-431.742c0.019-10.064-7.953-18.091-18.018-18.126c-10.064-0.034-18.351,7.936-18.385,18l-1.486,431.743
        L106.997,318.459c-7.196-7-18.821-7.04-25.804-0.089c-7.244,7.194-7.283,18.819-0.089,25.804L242.359,506.54
        c6.95,7.243,18.56,7.283,25.543,0.088L430.284,345.375z"/>
    </svg>
  );
}


export const whiteFill = keyframes `
  to {
    opacity: 0;
  }
`

export const ArrowAnimation = styled.span`
  animation: ${whiteFill} 1.1s;
  animation-iteration-count: 7;
`

export const SvgContainer = styled.div `
  transform: rotate(-45deg);
`

export const BlueBgd = styled.div`
  background-color: ${blue};
  width: 100%;
  height: 200px;
  margin-top: -8px;
  transform: translateY(-16px);

  @media (max-width: 376px){
    height: 100px;
  }
  @media (min-width: 377px) and (max-width: 768px){
    height: 100px;
    margin-top: 16px;
  }
`

export const SectionTitle = styled.h1`
  color: ${creme};
  text-align: center;
  font-size: 4rem;
  line-height: 3;


  @media (max-width: 768px){
    font-size: 1.8rem;
    line-height: 4;
  }
  @media (min-width: 768px) and (max-width: 992px){
    font-size: 4rem;
    line-height: 2;
  }
`

export const SectionSpace = styled.div `
  background-color: white;
  color: ${lightpink};
  width: 100%;
  height: 200px;
  margin-top: -8px;
  font-size: 2rem;
  text-align: center;
  padding: 55px 70px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 90px;

  @media (max-width: 376px) {
    height: 100px;
    padding: 40px 10px;
    font-size: 1rem;
    line-height: 25px;
  }
  @media (min-width: 376px) and (max-width: 1140px){
    line-height: 35px;
    font-size: 1.5rem;
    padding: 60px 30px;
    height: 150px;
  }
`

export const ProjectsContainer = styled.div`
  padding : 0 70px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Col = styled.div`
  width: 100%;
  height: 450px;

  @media (max-width: 376px) {
    height: 595px;
  }
  @media (min-width: 376px) and (max-width: 732px) {
    height: 684px;
    padding-bottom: 300px;
  }
  @media (min-width: 732px) and (max-width: 768px){
    height: 691px;
    padding-bottom: 300px;
  }
`

export const Col2 = styled.div`
  width: 100%;

  @media (max-width: 992px) {
    height: 1100px;
  }
  @media (min-width: 992px){
    height: 650px;
  }
`

export const LongCol = styled.div`
  font-size: 2rem;
  height: 250px;
  border: 5px solid ${darkcreme};
  background-color: ${creme};
  color: ${lightpink};
  float: ${props => props.left ? 'left' : 'right'};
  width: 65%;
  padding: 15px;

  @media (max-width: 376px) {
    width: 100%;
    float: none;
    height: 300px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 100%;
    float: none;
    height: 300px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 1.1rem;
  }
`

export const LongColSneakr = styled.div `
font-size: 2rem;
height: 250px;
border: 5px solid ${darkcreme};
background-color: ${creme};
color: ${lightpink};
float: ${props => props.left ? 'left' : 'right'};
width: 65%;
padding: 15px;

@media (max-width: 376px) {
  width: 100%;
  float: none;
  height: 300px;
}
@media (min-width: 376px) and (max-width: 768px) {
  width: 100%;
  float: none;
  height: 300px;
}
@media (min-width: 769px) and (max-width: 1150px) {
  width: 35%;
  height: 300px;
}
`

export const Img = styled.div`
  height: 250px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  border: 5px solid ${darkcreme};
  float: ${props => props.left ? 'left' : 'right'};
  width: 65%;
  background-color: ${darkcreme};

  img {
    transition: 0.5s all ease;
    width: 100%;


    @media (min-width: 768px) and (max-width: 992px){
      width: 100%;
      height: 240px;
    }
    @media (min-width: 992px) and (max-width: 1190px){
      width: 100%;
      height: 260px;
    }
    @media (min-width: 1190px){
      height: 300px;
    }
  }

  &:hover{
    & > img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 376px) {
    width: 100%;
    height: 112px;
  }
  @media (min-width: 376px) and (max-width: 768px){
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 992px){
    width: 100%;
    height: 250px;
  }
`

export const ShortCol = styled.div`
  font-size: 1.8rem;
  height: ${props => props.tall ? '500px' : '250px'};
  border: 5px solid ${darkcreme};
  padding: ${props => props.padding ? '15px' : '10px'};
  background-color: ${props => props.pink ? '#FF3D68' : '#008080'};
  width: 35%;
  color: ${darkcreme};
  float: ${props => props.left ? 'left' : 'right'};

  @media (max-width: 376px){
    font-size: 1rem;
    width: 100%;
    height: 200px;
    float: none;
  }
  @media (min-width: 376px) and (max-width: 768px){
    font-size: 1.1rem;
    width: 100%;
    float: none;
    height: 250px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    font-size: 1.7rem;
    height: 250px;
  }
  @media (min-width: 993px) and (max-width: 1150px){
    font-size: 1.7rem;
    height: 500px;
  }

  &:last-child{
    @media (max-width: 992px){
      font-size: 1.4rem;
      height: 250px;
    }
    @media (min-width: 992px) and (max-width: 1150px){
      font-size: 1.7rem;
      height: 250px;
    }
  }
`

export const ShortColVid = styled.div `
  height: 250px;
  border: 5px solid ${darkcreme};
  padding: '15px';
  background-color: ${blue};
  width: 35%;
  float: left;

  & > iframe {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 376px) {
    height: 160px;
    width: 100%;
    float: none;

    & > iframe {
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 376px) and (max-width: 768px){
    width: 100%;
    height: 260px;
    float: none;

    & > iframe {
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 769px) and (max-width: 1150px){
    width: 65%;
    height: 300px;

    & > iframe {
      display: block;
      margin: 0 auto;
    }
  }
`

export const PaddingCol = styled.div`
  padding: 40px 30px;

  @media (max-width: 500px){
    padding: 0px 20px 20px 20px;
    font-size: 0.8rem;
  }
  @media (min-width: 500px) and (max-width: 768px){
    padding: 0px 50px 20px 50px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    font-size: 1.1rem;
    padding: 10px;
  }
  @media (min-width: 992px) and (max-width: 1120px){
    padding: 10px 5px;
  }
`

export const Letters = styled.p`
  color: ${props => props.blue ? '#008080' : '#E3DAC9'};
  font-weight: bold;
  font-size: 1.4rem;
  font-family: 'Nixie One',cursive;
  padding: 20px 0;
  line-height: 30px;

  @media (max-width: 376px) {
    font-size: 0.8rem;
    line-height: 18px;
  }
  @media (min-width: 376px) and (max-width: 768px){
    font-size: 1rem;
    line-height: 23px;
    padding: 30px 10px;
  }
  @media (min-width: 768px) and (max-width: 992px){
    font-size: 1.2rem;
    line-height: 25px;
  }
  @media (min-width: 992px) and (max-width: 1200px){
    font-size: 1.2rem;
    line-height: 25px;
    padding: 10px 5px;
  }
`
