import React, {Component} from 'react';
import ReactForm from './Form';
import { Wrapper, CircleTopBlue, CircleBottomBlue, Title, Intro, ContactP,Terms, Mountains } from './Contact.style';
import Footer from './Footer';

export default class Contact extends Component {
  render(){
    return(
      <Wrapper>
        <Intro>Need a Front-End developer in React ?</Intro>
          <CircleTopBlue>
            <Title>Contact me</Title>
            <ContactP>The form has been desactivated because of spams. <br/>
            Feel free to send me a message to <a href="mailto:katalinanadasi@gmail.com">katalinanadasi@gmail.com </a>
            and I would be enjoyed to answer you asap. <br/>
            </ContactP>
            <Terms><a href="https://termsfeed.com/privacy-policy/34eaae2aae6cbdae06bbfa11bdb8da45" target="_blank">Privacy Policy</a></Terms>
            <Terms><a href="https://termsfeed.com/terms-use/286016599cf209349fe6366d7c5755b5" target="_blank">Terms of Use</a></Terms>

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
