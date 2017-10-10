import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {Background, Title} from './Projects.style';
import { Carousel } from 'react-responsive-carousel';
import '../style/carousel.css';

export default class Projects extends Component {
  render(){
    return(
      <Wrapper>
        <Background>
          <Title>Projects</Title>
        </Background>
        <Carousel autoPlay interval={3000} transitionTime={1000} showThumbs={false} showStatus={false} showIndicators={false}>
          <div>
            <img height="650" src={require('../img/projects/chopard.jpg')} alt="chopard"/>
          </div>
          <div>
            <img height="650" src={require('../img/projects/eavest.jpg')} alt="eavest" />
          </div>
          <div>
            <img height="650" src={require('../img/projects/labanque.jpg')} alt="la banque postale" />
          </div>
          <div>
            <img height="650" src={require('../img/projects/sneakr.jpg')} alt="sneakr" />
          </div>
          <div>
            <img height="650" src={require('../img/projects/adaweek.jpg')} alt="adaweek" />
          </div>
        </Carousel>
        <div style={{height : 150}}></div>
      </Wrapper>
    );
  }
}
