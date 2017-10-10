import styled from 'styled-components';
import {darkcreme, orange} from  '../variables';


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
  opacity : 0.6;
`

export const TextLeft = styled.div `
  font-size: 3rem;
  padding: 15px;
  position: absolute;
  bottom: 176px;
  right: 550px;
  color: black;
  width: 30%;
  float: left;

  div {
    padding: 35px;

    &:hover {
      background-color: #FF3E5F;
      color: white;
      transition: all 0.5s ease-in;
    }
  }
  h2 {
    text-align: left;
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
    text-align: left;
  }

  }
`

export const TextRight = TextLeft.extend `
  right: 148px;
`

export const Left = styled.div `
  float: left;
`

export const Right = Left.extend `
  float: right;
`

export const Img = styled.div `
  width: 30%;
  float: left;
  height: 81vh;
  background-image: url('${require('../img/projects/eavest-detail.png')}');
  background-repeat: no-repeat;
  margin: 25px 0 0 50px;
  border: 5px solid ivory;
`

export const TextWrap = styled.div `
  width: 60%;
  float: right;
  height: 100vh;
  margin-right: 50px;

  h1 {
    font-size: 2.5rem;
    margin: 50px 20px 0 0;
    float: left;
  }
`

export const Vignet = styled.div `
  width: 26%;
  float: left;
  margin: 30px;

  h2 {
    border-top: 2px solid ${orange};
    color: black;
    font-size: 2rem;
    text-align: left;
    padding: 5px;

    &:last-child {
      border-bottom: 2px solid ${orange};
    }
  }
`

export const Detail = styled.p `
  font-size: 1.5rem;
  text-align: -webkit-left;
  margin-top: 35px;
  line-height: 25px;
`
