
import styled from 'styled-components';
import {pink, creme} from '../variables.js';

export const BackgroundTitle = styled.div`
  height: 95vh;
  background-image: url('${require('../img/logo-transp.svg')}');
  background-repeat: no-repeat;
  background-size: 86%;
  margin: -540px 0 15px 150px;
  z-index: -99;
`

export const Title1 = styled.h1`
  font-size: 4rem;
  background-color: ${creme};
  padding-left: 58px;
  transform: rotate(-44deg);
  padding-top: 90px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Title2 = styled.h1`
  font-size: 4rem;
  padding-left: 190px;
  padding-top: 105px;
  transform: rotate(-50deg);
  background: linear-gradient(to right, rgba(1,175,192,1) 0%,rgba(173,173,173,1) 40%,rgba(173,173,173,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#01afc0', endColorstr='#adadad',GradientType=1 ); /* IE6-9 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const ImageContainer1 = styled.div`
  width: 35%;
  float: left;
  margin: 0 0 0 125px;
`

export const ImageContainer2 = styled.div`
  margin: 175px 0 0 125px;
  width: 35%;
  float: left;
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
