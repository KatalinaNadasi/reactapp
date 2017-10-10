import styled from 'styled-components';
import {darkcreme} from  '../variables';


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
