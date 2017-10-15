import React from 'react';
import styled from 'styled-components';
import {darkcreme, orange, pink} from  '../variables';
import {ScrollDown} from './About.style';



export function Close(props){
  return (
    <svg version="1.1" id="Close1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="16.001px" height="16.001px" viewBox="0 0 16.001 16.001" enableBackground="new 0 0 16.001 16.001" xmlSpace="preserve">
      <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="0.354" y1="0.354" x2="15.647" y2="15.647"/>
      <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="15.647" y1="0.354" x2="0.354" y2="15.647"/>
    </svg>
  )
};

export const Background = styled.div `
  background-color: #F3F3ED;
  text-align: center;
  line-height: 563px;
  height: 91vh;
  margin-top: 52px;
`

export const ScrollContainer = styled.div `
  width: 100%;
  text-align: center;
  z-index: 10;
  position: absolute;
  top: 491px;
`

export const ScrollDownContainer = ScrollDown.extend `
  box-shadow: 8px 8px 12px #555; 
`


export const Title = styled.h1 `
  font-size: 11rem;
  background: -webkit-linear-gradient( left, #FFDC80 0%, #FCAF45 30%, #F56040 40%, #E71D36 50%, #280C7C 90%) repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const BrandText = styled.div `
  font-size: 3rem;
  color: black;
  width: 50%;
  text-align: center;
  float: left;

  div {
    padding: 80px;
    border: 3px solid #E3DAC9;
    background-color: #000059;
    color: white;

    &:hover {
      background-color: #FF3E5F;
      color: white;
      transition: all 0.5s ease-in;
    }
  }

  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
  }

  }
`

export const Left = styled.div `
  float: left;
`

export const Right = Left.extend `
  float: right;
`

import Eavest from '../img/projects/eavest-modal.gif';

export const BrandContainer = styled.div `
  height: 111vh;
  z-index: -1;
`

export const Img = styled.div `
  width: 49%;
  float: left;
  height: 65vh;
  background-image: ${(props) => props.eavest ? `url(${Eavest})` : 'grey' };
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
  margin-top: 45px;
`

export const ImgChop = Img.extend `
  width: 40%;
  height: 80vh;
  margin: 0px 30px 0 0;
  background-image: url('${require('../img/projects/chopard-modal.png')}');
  transform: translateY(-10px);
  border: 5px solid #F3F3ED;
`

export const ImgAda = Img.extend `
  background-image: url('${require('../img/projects/adaweek-modal.jpg')}');
  width: 28%;
  height: 65vh;
  margin: 25px 30px;
`

export const ImgLBP = Img.extend `
  background-image: url('${require('../img/projects/banque-modal.png')}');
  height: 63vh;
  width: 31%;
  margin: 25px 30px;
`

export const ImgSneakr = Img.extend `
  background-image: url('${require('../img/projects/sneakr-modal.png')}');
  width: 30%;
  float: left;
  height: 78vh;
  margin: 0;
`

export const ImgKat = Img.extend `
  background-image: url('${require('../img/projects/katalina-modal.jpg')}');
  width: 32%;
  height: 82vh;
  margin-right: 50px;
  margin-top: 0;
  transform: translateY(-13px);
`

export const TextWrap = styled.div `
  width: 49%;
  float: left;

  h1 {
    font-size: 1.7rem;
    margin: 20px 20px 0 0;
    float: left;
  }
`

export const TextWrapChop = TextWrap.extend `
  margin-top: 40px;
`

export const TextWrapAda = TextWrap.extend `
  width: 66%;
  margin-top: 50px;
`

export const TextWrapLBP = TextWrap.extend `
  width: 60%;
  margin: 33px 0 0 10px;
`

export const TextWrapSneakr = TextWrapAda.extend `
  margin-left: 50px;
`

export const Vignet = styled.div `
  width: 26%;
  float: left;
  margin: 30px 40px 0 0;

  h2 {
    border-top: 2px solid ${orange};
    color: black;
    font-size: 1.5rem;
    text-align: left;
    padding: 5px;

    &:last-child {
      border-bottom: 2px solid ${orange};
    }
  }
`

export const VignetLarge = Vignet.extend `
  width: 40%;
`

export const Brand = styled.h3 `
  color: ${pink};
  font-size: 2rem;
`

export const Detail = styled.p `
  font-size: 1.5rem;
  text-align: -webkit-left;
  margin-top: 35px;
  line-height: 25px;
`
