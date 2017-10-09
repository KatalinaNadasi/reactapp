import styled from 'styled-components';
import {darkcreme} from  '../variables';


export const BackgroundBlue = styled.div `
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

export const BackgroundImg = styled.div `
  height: 79vh;
  background-image: url('${require('../img/projects/adaweek.png')}');
  background-repeat: no-repeat;
  z-index: -99;
  background-size: 100%;
  width: 100%;
  padding: -20px;
  position: relative;
  background-size: contain;
  border: 3px #9CAAB6 solid;
  background-color: white;
}






`
