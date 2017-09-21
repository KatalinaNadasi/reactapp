import styled from 'styled-components';
import {CircleTitle} from './Header.style';
import {blue, creme, pink, grey} from '../variables.js';

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 15px;
`
export const BackgroundImage = styled.div`
  height: 100vh;
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

export const ScrollDown = styled.div`
  width: 80px;
  height: 80px;
  background-color: #20B2AA;
  transform: rotate(45deg);
  position: relative;
  margin-bottom: -52px;
  margin: 0 auto;
`

export const ScrollPosition = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 10;
  margin-top: -41px;
`

export const SectionBgd = styled.div`
  background-color: #20B2AA;
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

export const SectionHeader = SectionBgd.extend `
  background-color: white;
  color: #FF5B51;
  width: 100%;
  height: 200px;
  margin-top: -8px;
  font-size: 2rem;
  text-align: center;
  padding: 55px 70px;
  font-weight: bold;
  letter-spacing: 1px;
`

export const TextSide = styled.div`
  background-color: #F3F3ED;
  color: black;
  width: 65%;
  float: left;
  font-size: 2rem;
  height: 250px;
  border: 5px solid #E7E6D8;
`

export const TitleSide = styled.div`
  background-color: crimson;
  border: 5px solid #E7E6D8;
  border-left: none;
  width: 35%;
  color: white;
  float: right;
  font-size: 2rem;
  height: 250px;
`

export const Projects = styled.div`
  padding : 0 70px;
  background-color: white;
`
