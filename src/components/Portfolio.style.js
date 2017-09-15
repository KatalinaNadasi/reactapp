import React from 'react';
import styled from 'styled-components';
import {pink} from '../variables.js';

// export const Background1 = styled.div`
//   height: 100vh;
//   background-image: url('${require('../img/logo-transp.svg')}');
//   background-repeat: no-repeat;
//   background-size: 86%;
//   margin: -540px 0 15px 150px;
//   z-index: -99;
// `

export const Container = styled.div`
  transform: translateY(-400px);
`

export const IconTitle = React.createClass({
 render() {
   return (
     <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     	 width="500px" height="500px" viewBox="4 175.711 259.175 164.726" enableBackground="new 4 175.711 259.175 164.726"
     	 xmlSpace="preserve">
       <text transform="matrix(0.9256 0 0 1 4 238.6028)" fontFamily="'NewsGothicMT-Bold'" fontSize="72">PRO</text>
       <text transform="matrix(0.9256 0 0 1 4 325.0032)" fontFamily="'NewsGothicMT-Bold'" fontSize="72">JECTS </text>
      <ellipse fill="##FE4365" stroke="#FE4365" strokeMiterlimit="10" cx="239.675" cy="304.391" rx="23" ry="22.588"/>
     </svg>
   )
 }
});

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const ImageContainer1 = styled.div`
  width: 35%;
  float: left;
  margin: 0 0 0 125px;
  transition: 0.5s all;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`

export const ImageContainer2 = styled.div`
  margin: 175px 0 0 125px;
  width: 35%;
  float: left;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s all;
  }
`

export const Background1 = styled.div`
  height: 800px;
  z-index: -99;
  background: rgb(255,228,226);
  background: linear-gradient(to bottom, rgba(255,228,226,1) 0%,rgba(255,67,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe4e2', endColorstr='${pink}',GradientType=0 ); /* IE6-9 */
`

export const Background2 = styled.div`
  height: 1000px;
  background: linear-gradient(to bottom, rgba(254,67,101,1) 0%, rgba(255,228,226,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe4365', endColorstr='#ffe4e2',GradientType=0 ); /* IE6-9 */
  z-index: -99;
`
