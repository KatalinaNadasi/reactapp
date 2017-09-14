
import styled from 'styled-components';
import {pink} from '../variables.js';

export const Background1 = styled.div`
  height: 100vh;
  background-image: url('${require('../img/logo-transp.svg')}');
  background-repeat: no-repeat;
  background-size: 86%;
  margin: -540px 0 15px 150px;
  z-index: -99;
`

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

export const Background2 = styled.div`
  height: 800px;
  z-index: -99;
  background: rgb(255,228,226);
  background: linear-gradient(to bottom, rgba(255,228,226,1) 0%,rgba(254,67,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe4e2', endColorstr='${pink}',GradientType=0 ); /* IE6-9 */
`

export const Background3 = styled.div`
  height: 1000px;
  background: linear-gradient(to bottom, rgba(254,67,101,1) 0%, rgba(255,228,226,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe4365', endColorstr='#ffe4e2',GradientType=0 ); /* IE6-9 */
  z-index: -99;
`
