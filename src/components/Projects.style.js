import React from 'react';
import styled from 'styled-components';
import {darkcreme, orange,} from  '../variables';

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
  background-color: black;
  text-align: center;
  line-height: 563px;
  height: 100vh;
  border: 10px solid ${darkcreme};
`

export const Title = styled.h1 `
  font-size: 11rem;
  padding-top: 70px;
  background: -webkit-linear-gradient( left, #FFDC80 0%, #FCAF45 30%, #F56040 40%, #E71D36 50%, #280C7C 90%) repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Opacity = styled.div `
  opacity : 0.8;
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
    background-color: cadetblue;

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

export const Container = styled.div `
  padding: 20px;
  width: 100%;
  height: 100vh;
`

export const BrandContainer = styled.div `
  margin-bottom: 50px;
  height: 150vh;
  z-index: -1;
`

export const BrandTitle = styled.div `
  width: 30%;
  float: left;
  position: absolute;
  top: 676px;
  right: 550px;
  transition: all 1s ease;

  &:hover {
    background-color: #FF3E5F;
    color: white;
    transition: all 0.5s ease-in;
  }
`

export const BrandTitleAda = BrandTitle.extend `
  top: 776px;
  transition: all 1s ease;
`

export const BrandTitleChopard = BrandTitle.extend `
  top: 876px;
  transition: all 1s ease;
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
  background-image: url('${require('../img/projects/chopard-detail.png')}');
`

export const ImgAda = Img.extend `
  background-image: url('${require('../img/projects/adaweek-detail.jpg')}');
`

export const ImgLBP = Img.extend `
  background-image: url('${require('../img/projects/banque-detail.png')}');
`

export const ImgSneakr = Img.extend `
  background-image: url('${require('../img/projects/sneakr-detail.png')}');
`

export const ImgKat = Img.extend `
  background-image: url('${require('../img/projects/katalina-detail.jpg')}');
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
  color: ${orange};
  font-size: 2rem;
`

export const Detail = styled.p `
  font-size: 1.5rem;
  text-align: -webkit-left;
  margin-top: 35px;
  line-height: 25px;
`
