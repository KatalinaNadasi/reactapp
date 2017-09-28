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
  min-height: 102vh;
  background-image: url('${require('../img/moreabout.jpg')}');
  background-repeat: no-repeat;
  z-index: -99;
  background-size: 100%;
  width: 100%;
  padding: -20px;
  position: relative;
`
export const AboutTitle = CircleTitle.extend`
  font-size: 7rem;
  position: absolute;
  top: -2vh;
  left: -193px;
  color: crimson;
}
`

export const ScrollPosition = styled.div`
width: 100%;
text-align: center;
z-index: 10;
position: absolute;
bottom: 150px;
`

export const ScrollDown = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${blue};
  transform: rotate(45deg);
  margin: 0 auto;
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
`

export const SectionTitle = styled.h1`
  color: ${creme};
  text-align: center;
  font-size: 4rem;
  line-height: 3;
`

export const SectionSpace = BlueBgd.extend `
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
`

export const ProjectsContainer = styled.div`
  padding : 0 70px;
  background-color: white;
`

export const Wrapper = styled.div `
  width: 100%;
  height: 500px;
`

export const Line = styled.div`
  width: 100%;
  height: 550px;
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
`

export const Img = LongCol.extend`
  height: 300px;
  padding: 0;
  overflow: hidden;
`

export const ShortCol = styled.div`
  font-size: 2rem;
  height: ${props => props.tall ? '550px' : '250px'};
  border: 5px solid ${darkcreme};
  padding: ${props => props.padding ? '15px' : '10px'};
  background-color: ${props => props.pink ? '#FF3D68' : '#008080'};
  width: 35%;
  color: ${darkcreme};
  float: ${props => props.left ? 'left' : 'right'};
`

export const Padding = styled.div`
  padding: 40px 30px;
`

export const Letters = styled.p`
  color: ${props => props.blue ? '#008080' : '#E3DAC9'};
  font-weight: bold;
  font-size: 1.4rem;
  font-family: 'Nixie One',cursive;
  padding: 20px 0;
  line-height: 30px;
`
