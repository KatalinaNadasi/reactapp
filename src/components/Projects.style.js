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
  line-height: initial;
  height: 71vh;
  margin-top: 250px;

  @media (max-width: 368px) {
		height: 77vh;
	}
`

export const ScrollContainer = styled.div `
  width: 100%;
  text-align: center;
  z-index: 10;
  position: absolute;
  top: 530px;

  @media (max-width: 376px) {
    top: 546px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    top: 540px;
  }
`

export const ScrollDownContainer = ScrollDown.extend `
  box-shadow: 8px 8px 12px #555;
`


export const Title = styled.h1 `
  font-size: 11rem;
  background: -webkit-linear-gradient( left, #FFDC80 0%, #FCAF45 30%, #F56040 40%, #E71D36 50%, #280C7C 90%) repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 368px) {
		font-size: 5rem;
	}
  @media (min-width: 368px) and (max-width: 768px) {
		font-size: 8rem;
	}
`

export const BrandText = styled.div `
  font-size: 3rem;
  color: black;
  width: 50%;
  text-align: center;
  float: left;

  &:last-child {
    margin-bottom: 30px;
  }

  @media (max-width: 733px) {
    width: 100%;
  }

  div {
    padding: 80px;
    border: 3px solid #E3DAC9;
    background-color: #000059;
    color: white;

    @media (max-width: 376px){
      padding: 40px;
    }
    @media (min-width: 376px) and (max-width: 768px){
      padding: 60px;
    }


    &:hover {
      background-color: #FF3E5F;
      color: white;
      transition: all 0.5s ease-in;
    }
  }

  h2 {
    font-size: 2rem;

    @media (max-width: 376px){
      font-size: 1.3rem;
    }
    @media (min-width : 376px) and (max-width: 768px){
      font-size: 1.7rem;
    }
  }
  p {
    font-size: 1.3rem;
    margin-top: 10px;

    @media (max-width: 376px){
      font-size: 0.9rem;
    }
    @media (min-width : 376px) and (max-width: 768px){
      font-size: 1rem;
    }
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
  height: auto;
  z-index: -1;
`

export const Img = styled.div `
  width: 50%;
  float: left;
  height: 35vh;
  background-image: ${(props) => props.eavest ? `url(${Eavest})` : 'grey' };
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
  margin-top: 80px;

  @media(max-width: 368px){
    height: 12vh;
  }
  @media (min-width: 368px) and (max-width: 768px){
    width: 97%;
    margin-top: 0px;
  }
  @media (min-width: 768px) and (max-width: 970px) {
    width: 80%;
    margin-top: 0px;
    height: 30vh;
    margin: 0 0 0 60px;
  }
  @media (min-width: 970px) and (max-width: 992px) {
    height: 32vh;
  }
`

export const ImgChop = styled.div `
  width: 42%;
  height: 70vh;
  float: left;
  background-image: url('${require('../img/projects/chopard-modal.png')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
  margin: 0px 30px 0 0;
  transform: translateY(-10px);
  border: 5px solid #F3F3ED;

  @media (max-width: 376px) {
    width: 92%;
    height: 33vh;
    margin: 0;
    float: none;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 62%;
    height: 33vh;
    margin: 0 auto;
    float: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    height: 53vh;
    margin: 0 auto;
    transform: translateY(0px);
    float: none;
  }
  @media (min-width: 970px) and (max-width: 1170px) {
    height: 55vh;
  }
`

export const ImgAda = styled.div `
  float: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
  background-image: url('${require('../img/projects/adaweek-modal.jpg')}');
  width: 38%;
  height: 46vh;
  margin: 0px 30px;

  @media (max-width: 500px) {
    width: 92%;
    height: 33vh;
    margin: 0;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 768px) {
    width: 62%;
    height: 33vh;
    margin: 0 auto;
    float: none;
  }
  @media (min-width: 768px) and (max-width: 970px) {
    height: 34vh;
    margin: 0 auto;
    float: none;
    width: 41%;
  }
  @media (min-width: 970px) and (max-width: 992px) {
    height: 46vh;
  }
`

export const ImgLBP = ImgAda.extend `
  background-image: url('${require('../img/projects/banque-modal.png')}');
  height: 41vh;
  width: 31%;
  margin: 25px 30px;
`

export const ImgSneakr = styled.div `
  background-image: url('${require('../img/projects/sneakr-modal.png')}');
  width: 40%;
  float: left;
  height: 61vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;

  @media (max-width: 500px) {
    width: 92%;
    height: 33vh;
    margin: 0;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 768px) {
    width: 62%;
    height: 33vh;
    margin: 0 auto;
    float: none;
  }
  @media (min-width: 768px) and (max-width: 970px) {
    height: 34vh;
    margin: 0 auto;
    float: none;
    width: 41%;
  }
  @media (min-width: 970px) and (max-width: 992px) {
    height: 46vh;
  }
`

export const ImgKat = styled.div `
  background-image: url('${require('../img/projects/katalina-modal.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
  width: 31%;
  height: 59vh;
  margin-right: 30px;
  margin-top: 0;
  float: left;

  @media (max-width: 500px) {
    width: 92%;
    height: 33vh;
    margin: 0;
    float: none;
  }
  @media (min-width: 500px) and (max-width: 768px) {
    width: 62%;
    height: 33vh;
    margin: 0 auto;
    float: none;
  }
  @media (min-width: 768px) and (max-width: 970px) {
    height: 34vh;
    margin: 0 auto;
    float: none;
    width: 41%;
  }
  @media (min-width: 970px) and (max-width: 992px) {
    height: 46vh;
  }
`

export const TextWrap = styled.div `
  width: 45%;
  float: left;
  margin: 65px 15px 0 10px;

  @media (max-width: 768px) {
    width: 92%;
    margin: 10px;
  }

  @media (min-width: 768px) and (max-width: 970px) {
    width: 90%;
    margin: 30px 0 0 60px;
  }

`

export const TextWrapChop = TextWrap.extend `
  margin-top: 40px;

  @media(max-width: 376px){
    width: 94%;
    margin: 0;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    width: 92%;
    margin: 0 10px 0 30px;
  }
  @media (min-width: 768px) and (max-width: 970px) {
    width: 46%;
    margin: 30px 0 0 40px;
  }
`

export const TextWrapAda = TextWrap.extend `
  margin: 65px 10px 0 10px;
  width: 52%;

  @media (min-width: 768px) and (max-width: 970px) {
    margin: 0px 0 0 60px;
  }
`

export const TextWrapLBP = TextWrap.extend `
  width: 55%;
  margin: 33px 30px 0 10px;
`

export const TextWrapSneakr = TextWrapAda.extend `
  margin-left: 50px;
`

export const Vignet = styled.div `
  width: 26%;
  float: left;
  margin: 30px 25px 0 0;

  @media (max-width: 368px){
    width: 28%;
    margin: 30px 10px 0 0px;
  }
  @media (min-width: 368px) and (max-width: 460px){
    width: 20%;
  }
  @media(min-width: 460px) and (max-width: 670px){
    width: 25%;
  }
  @media(min-width: 670px) and (max-width: 768px){
    width: 28%;
  }

  h2 {
    border-top: 2px solid ${orange};
    color: black;
    font-size: 1.3rem;
    text-align: left;
    padding: 5px;

    &:last-child {
      border-bottom: 2px solid ${orange};
    }

    @media (max-width: 460px){
      font-size: 0.7rem;
    }
    @media (min-width: 460px) and (max-width: 768px){
      font-size: 1rem;
    }
  }
`

export const VignetLarge = Vignet.extend `
  width: 40%;

  @media (max-width: 768px){
    width: 34%;
    margin: 30px 10px 0 10px;
  }
`

export const Brand = styled.h3 `
  color: ${pink};
  font-size: 2rem;
  text-align: -webkit-center;
  margin-top: 15px;

    h1 {
      font-size: 1.5rem;
      margin: 15px 20px 35px 0;
      color: black;

      @media(max-width: 768px){
        font-size: 1rem;
      }
    }

`

export const Detail = styled.p `
  font-size: 1.3rem;
  text-align: justify;
  margin-top: 35px;
  line-height: 25px;

  @media(max-width: 768px){
    font-size: 1rem;
    line-height: 20px
  }
`
