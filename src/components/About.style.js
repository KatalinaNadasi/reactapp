import styled from 'styled-components';
import {CircleTitle} from './Header.style';
import {blue, creme, pink, grey, orange} from '../variables.js';

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
  background-color: ${blue};
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

export const SectionHeader = BlueBgd.extend `
  background-color: white;
  color: ${orange};
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
  font-size: 2rem;
  height: 250px;
  border: 5px solid #E7E6D8;
  background-color: ${creme};
  color: ${orange};
  float: left;
  width: 65%;
  padding: 15px;
`

export const TitleSide = styled.div`
  font-size: 2rem;
  height: 250px;
  border: 5px solid #E7E6D8;
  padding: 15px;
  background-color: ${orange};
  border-left: none;
  width: 35%;
  color: white;
  float: right;
`

export const ProjectsContainer = styled.div`
  padding : 0 70px;
  background-color: white;
`

export const BlueLetters = styled.p`
  color: ${blue};
  font-size: 1.3rem;
  font-family: 'Nixie One',cursive;
  line-height: 2;
`

export const ImgSide = styled.div `
  height: 307px;
  border: 5px solid #E7E6D8;
  width: 100%;
  float: left;
  background-image: url('${require('../img/projects/konexio.jpg')}');
  background-repeat: no-repeat;
  background-size: contain;
`

export const TextSide2 = TextSide.extend`
  float: right;
`

export const TitleSide2 = TitleSide.extend`
  float: left;
`
