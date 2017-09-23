import React, {Component} from 'react';
import styled from 'styled-components';
import {blue, darkcreme} from '../variables.js';

const Wrapper = styled.div `
  width: 100%;
  height: 150px;
  background-color: ${blue};
  color: ${darkcreme};
  border: 8px solid ${darkcreme};
  padding: 25px 290px;
`

const Contact = styled.div `
  width: 510px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin: 0 -6px;
`

const LeftCol = styled.ul `
  float: left;
  width: 50%;
  padding: 0 6px;
  list-style: none;
  margin: 0;
`

const RightCol = LeftCol.extend `
  float: right;
`

const Border = styled.li `
  padding: 5px;
  border-bottom: 2px solid ${darkcreme};

  &:first-child{
    border-top: 2px solid ${darkcreme};
  }
`

export default class Footer extends Component {
  render(){
    return(
      <Wrapper>
        <Contact>
          <LeftCol>
            <Border>katalina.nadasi@gmail.com</Border>
            <Border>Work together</Border>
          </LeftCol>
          <RightCol>
            <Border>&copy; Katalina Nadasi 2017</Border>
            <Border>Design and Development</Border>
          </RightCol>
        </Contact>

      </Wrapper>
    );
  }

}
