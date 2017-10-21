import React, {Component} from 'react';
import ReactForm from './Form';
import { Wrapper, CircleTopBlue, CircleBottomBlue, Title, Intro, ContactP, Mountains } from './Contact.style';
import Footer from './Footer';

export default class Contact extends Component {
  render(){
    return(
      <Wrapper>
        <Intro>Need a Front-End developer in React ?</Intro>
          <CircleTopBlue>
            <Title>Contact me</Title>
            <ContactP>The form has been desactivated because of spams. <br/>
            Feel free to send me a message to katalinanadasi@gmail.com
            and I would be enjoyed to answer you asap. <br/>
            That would be more than appreciated if you could specify the type of mission, skills needed, the date your required somebody and where. <br/>
            Thank you !
            </ContactP>
          </CircleTopBlue>
          <CircleBottomBlue>
            <ReactForm />
          </CircleBottomBlue>
          <Mountains>
            <img src={require('../img/mountains.svg')} alt="Mountains" />
          </Mountains>
        <Footer />
      </Wrapper>
    );
  }

}
