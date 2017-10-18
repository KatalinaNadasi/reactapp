import React, {Component} from 'react';
import { CircleTop, CircleBottom } from './Header.style';
import {blue} from  '../variables';
import Wrapper from './Wrapper';


export const CircleTopBlue = CircleTop.extend `
  background-color: ${blue};
  text-align: center;
  line-height: 400px;
  margin-top: 175px;

  @media(max-width: 768px){
    margin-top: 175px;
  }
`

export const CircleBottomBlue = CircleBottom.extend `
  background-color: rgba(0, 159, 160, 0.2);
`


export default class Contact extends Component {
  render(){
    return(
      <Wrapper>
        <CircleTopBlue>Send me a message</CircleTopBlue>
        <CircleBottomBlue></CircleBottomBlue>
      </Wrapper>
    );
  }

}
