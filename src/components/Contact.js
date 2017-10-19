import React, {Component} from 'react';
import ReactForm from './Form';
import { Wrapper, CircleTopBlue, CircleBottomBlue, Title, Intro, Mountains } from './Form.style';
import Footer from './Footer';

export default class Contact extends Component {
  render(){
    return(
      <Wrapper>
        <Intro>Need a Front-End developer in React ?</Intro>
          <CircleTopBlue>
            <Title>Contact me</Title>
          </CircleTopBlue>
          <CircleBottomBlue>
            <ReactForm />
          </CircleBottomBlue>
          <Mountains>
            <img src={require('../img/logo-transp.svg')} alt="Mountains" />
          </Mountains>
        <Footer />
      </Wrapper>
    );
  }

}
