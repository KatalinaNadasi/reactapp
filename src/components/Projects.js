import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {Background, Title, Opacity, Container, TextLeft, TextRight, Left, Right, Img, ImgChop, TextWrap, Vignet, VignetChop, Detail} from './Projects.style';
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
        <Container id="eavest">
          <a href="http://eavest.com/" target="_blank"><Img eavest></Img></a>
          <TextWrap>
            <h1>Recast of all the previous website made on Wordpress.</h1>
            <Vignet>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </Vignet>
            <Vignet>
              <h2>Jquery</h2>
              <h2>ChartJS</h2>
              <h2>Git / Github</h2>
            </Vignet>
            <Vignet>
              <h2>Emails</h2>
              <h2>Freelance</h2>
              <h2>Paris</h2>
            </Vignet>
            <div className="clear"></div>
            <Detail>The only Front-end developer in the project, I made all the Front development in a lean environment.
              Working directly with the person in charge of the back-end part (Java). Source of proposal for animations and tools choices. Launch of the website planned in 2018.
            </Detail>
          </TextWrap>
        </Container>
        <Container id="chopard">
          <ImgChop></ImgChop>
          <TextWrap>
            <h1>Mini-website for the 'Happy Diamons' collection launch in the UK</h1>
            <VignetChop>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </VignetChop>
            <VignetChop>
              <h2>Angular 1.5</h2>
              <h2>Git / Github</h2>
              <h2>Paris</h2>
            </VignetChop>
            <div className="clear"></div>
            <Detail>
              Integration and development of a 3 pages website from a model given by the client. Environment of production in Angular 1.5. Lean environment.
            </Detail>
          </TextWrap>
        </Container>
      </Wrapper>
    );
  }
}
