import React from 'react';
import styled from 'styled-components';
import {pink} from '../variables.js';


export const Container = styled.div`
  width: 100%;
`

export const IconTitle = React.createClass({
 render() {
   return (
     <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     	 width="500px" height="500px" viewBox="4 175.711 259.175 164.726" enableBackground="new 4 175.711 259.175 164.726"
     	 xmlSpace="preserve">
       <text transform="matrix(0.9256 0 0 1 4 238.6028)" fontFamily="'NewsGothicMT-Bold'" fontSize="72">PRO</text>
       <text transform="matrix(0.9256 0 0 1 4 325.0032)" fontFamily="'NewsGothicMT-Bold'" fontSize="72">JECTS </text>
      <ellipse fill="crimson" strokeMiterlimit="10" cx="239.675" cy="304.391" rx="23" ry="22.588"/>
     </svg>
   )
 }
});

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`
export const BackgroundTitle = styled.div`
   height: 116vh;
   background-image: url('${require('../img/logo-transp.svg')}');
   background-repeat: no-repeat;
   background-size: 86%;
   margin: -540px 0 15px 150px;
   z-index: -99;
   opacity: 0.3;
 `
export const ImageContainer1 = styled.div`
  width: 60%;
  float: left;
  margin: 0 0 0 125px;
  transition: 0.5s all;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
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
`

export const ImageContainer3 = styled.div`
  width: 50%;
  float: left;
  margin: -345px 0 0 60px;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`

export const ImageContainer4 = styled.div`
  width: 35%;
  float: right;
  margin: 25px 76px 25px 0;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`

export const ImageContainer5 = styled.div`
  margin: 31px -52px 23px 0px;
  float: right;
  transition: 0.5s all;
  width: 44%;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`

export const ImageContainer6 = styled.div`
  margin: -80px 0px 0px 71px;
  width: 60%;
  float: right;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`

export const Background1 = styled.div`
  height: 1500px;
  z-index: -99;
  background: rgb(255,228,226);
  background: linear-gradient(to bottom, rgba(255,228,226,1) 0%, rgba(255, 189, 160, 1) 50%, rgba(220, 20, 60, 1.0) 80%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe4e2', endColorstr='${pink}',GradientType=0 ); /* IE6-9 */
`

export const Background2 = styled.div`
  height: 2000px;
  background: linear-gradient(to bottom, rgba(220, 20, 60, 1.0) 0%, rgba(255, 189, 160, 1) 30%, rgba(255,228,226,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='crimson', endColorstr='#ffe4e2',GradientType=0 ); /* IE6-9 */
  z-index: -99;
`
