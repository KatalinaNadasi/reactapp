import styled from 'styled-components';
import {CircleTitle} from './Header.style';
import {blue, creme} from '../variables.js';

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

export const ProjectBgd = styled.div`
  background-color: ${blue};
  width: 100%;
  height: 200px;
  margin-top: -8px;
`

export const ProjectTitle = styled.h1`
  color: ${creme};
  text-align: center;
  font-size: 4rem;
  line-height: 3;
`
