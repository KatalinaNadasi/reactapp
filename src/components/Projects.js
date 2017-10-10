import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {Background, Title, Opacity, TextLeft, TextRight, Left, Right} from './Projects.style';
import { Carousel } from 'react-responsive-carousel';
import '../style/carousel.css';

export default class Projects extends Component {
  render(){
    return(
      <Wrapper>
        <Background>
          <Title>Projects</Title>
        </Background>
        <Opacity>
          <Carousel autoPlay interval={3000} transitionTime={1000} showThumbs={false} showStatus={false} showIndicators={false}>
            <div>
              <img height="650" src={require('../img/projects/chopard.jpg')} alt="Chopard"/>
            </div>
            <div>
              <img height="650" src={require('../img/projects/eavest.jpg')} alt="Eavest" />
            </div>
            <div>
              <img height="650" src={require('../img/projects/labanque.jpg')} alt="La Banque Postale" />
            </div>
            <div>
              <img height="650" src={require('../img/projects/sneakr.jpg')} alt="Sneakr" />
            </div>
            <div>
              <img height="650" src={require('../img/projects/adaweek.jpg')} alt="Adaweek" />
            </div>
            <div>
              <img height="650" src={require('../img/projects/katalina.jpg')} alt="Katalina Nadasi" />
            </div>
            <div>
              <img height="650" src={require('../img/projects/chopard.jpg')} alt="Chopard"/>
            </div>
          </Carousel>
        </Opacity>
        <Left>
          <TextLeft>
            <div>
              <h2>Eavest</h2><p>Front-end developer</p>
            </div>
            <div>
              <h2>Adaweek</h2><p>Front-end developer / Design</p>
            </div>
            <div>
              <h2>Chopard</h2><p>Front-end developer</p>
            </div>
          </TextLeft>
        </Left>
        <Right>
          <TextRight>
            <div>
              <h2>La Banque Postale</h2><p>Front-end developer</p>
            </div>
            <div>
              <h2>Sneakr</h2><p>Front-end developer</p>
            </div>
            <div>
              <h2>Personal Website</h2><p>Front-end developer</p>
            </div>
          </TextRight>
        </Right>
        <div style={{height : 150}}></div>
      </Wrapper>
    );
  }
}
