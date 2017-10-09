import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {BackgroundBlue, Title, BackgroundImg} from './Projects.style';
import { Carousel } from 'react-responsive-carousel';
import '../style/carousel.css';

export default class Projects extends Component {
  render(){
    return(
      <Wrapper>
        <BackgroundBlue>
          <Title>Projects</Title>
        </BackgroundBlue>
        <Carousel>
            <div>
                <img src={require('../img/projects/chopard.jpg')} alt="chopard"/>
            </div>
            <div>
                <img src={require('../img/projects/adaweek.png')} alt="adaweek" />
            </div>
        </Carousel>
      </Wrapper>
    );
  }
}
