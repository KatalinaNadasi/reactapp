import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {Background, Title, Opacity, AbsoluteText, Container, TextLeft, TextRight, Left, Right, Img, ImgChop, ImgAda, ImgLBP, ImgSneakr, ImgKat, TextWrap, Vignet, VignetLarge, Brand, Detail} from './Projects.style';
import { Carousel } from 'react-responsive-carousel';
import '../style/carousel.css';
import ReactDOM from 'react-dom';


const style = {
  transition: 'all 1s ease'
};

export default class Projects extends Component {
  constructor(){
    super();

    this.state = {
      onShow: false,
      opacity: 0,
      height: 0
    }
  }

  onShow(){
    this.setState({
      onShow: !this.state.onShow,
      opacity: this.state.opacity === 0 ? 1:0,
      height: '100vh'
    });
  }

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
        <AbsoluteText>
          <Left>
            <TextLeft>
              <div style={{...style}} onClick={this.onShow.bind(this)}>
                <h2>Eavest</h2><p>Front-end developer</p>
                  <Container id="eavest" style={{opacity: this.state.opacity, height: this.state.height}}>
                    <a href="http://eavest.com/" target="_blank">
                      <Img eavest style={{height: this.state.height}}/>
                    </a>
                    <TextWrap style={{height: this.state.height}}>
                      <Brand>Eavest</Brand><h1>Recast of all the previous website made on Wordpress.</h1>
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
        </AbsoluteText>



        <Container id="chopard" style={{opacity: this.state.opacity, height: this.state.height}}>
          <ImgChop style={{height: this.state.height}}/>
          <TextWrap style={{height: this.state.height}}>
            <Brand>Chopard</Brand><h1>Mini-website for the 'Happy Diamons' collection launch in the UK</h1>
            <VignetLarge>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </VignetLarge>
            <VignetLarge>
              <h2>Angular 1.5</h2>
              <h2>Git / Github</h2>
              <h2>Paris</h2>
            </VignetLarge>
            <div className="clear"></div>
            <Detail>
              Integration and development of a 3 pages website from a model given by the client. Environment of production in Angular 1.5. Lean environment.
            </Detail>
          </TextWrap>
        </Container>
        <Container id="adaweek" style={{opacity: this.state.opacity, height: this.state.height}}>
          <a href="http://adaweek.fr/" target="_blank">
            <ImgAda style={{height: this.state.height}}/>
          </a>
          <TextWrap style={{height: this.state.height}}>
            <Brand>Adaweek</Brand><h1>Design and development of all the website for the event in 2016.</h1>
            <Vignet>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </Vignet>
            <Vignet>
              <h2>Jquery</h2>
              <h2>Photoshop</h2>
              <h2>SVG</h2>
            </Vignet>
            <Vignet>
              <h2>Animations</h2>
              <h2>Freelance</h2>
              <h2>Paris</h2>
            </Vignet>
            <div className="clear"></div>
            <Detail>Website built in 3 days from scratch for the tech event in 2016. First experience as Designer.
            </Detail>
          </TextWrap>
        </Container>
        <Container id="banque-postale" style={{opacity: this.state.opacity, height: this.state.height}}>
            <ImgLBP style={{height: this.state.height}}/>
          <TextWrap style={{height: this.state.height}}>
            <Brand>La Banque Postale</Brand><h1>Development of a 6 pages play mini-website for La Banque Postale.</h1>
            <VignetLarge>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </VignetLarge>
            <VignetLarge>
              <h2>Angular</h2>
              <h2>Git / Github</h2>
              <h2>Paris</h2>
            </VignetLarge>
            <div className="clear"></div>
            <Detail>Integration and development of a 3 pages website from a model given by the client. Environment of production in Angular 1.5. Lean environment.
            </Detail>
          </TextWrap>
        </Container>
        <Container id="sneakr" style={{opacity: this.state.opacity, height: this.state.height}}>
            <ImgSneakr style={{height: this.state.height}} />
          <TextWrap style={{height: this.state.height}}>
            <Brand>Sneakr</Brand><h1>Development of a Beta version of a website with a search engine.</h1>
            <VignetLarge>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </VignetLarge>
            <VignetLarge>
              <h2>Ruby / Ruby on Rails</h2>
              <h2>Git / Github</h2>
              <h2>Scraping / Parsing</h2>
            </VignetLarge>
            <div className="clear"></div>
            <Detail>Development of a App with a search engine that helps you to find vintage sneakers at the best price from Ebay and Le Bon Coin.
              Website built in Ruby on Rails as a final project of the training at Le Wagon / Paris.
            </Detail>
          </TextWrap>
        </Container>
        <Container id="katalina" style={{opacity: this.state.opacity, height: this.state.height}}>
          <ImgKat style={{height: this.state.height}}/>
          <TextWrap style={{height: this.state.height}}>
            <Brand>Personal website</Brand><h1>Design and development of a website from scratch.</h1>
            <Vignet>
              <h2>HTML / CSS</h2>
              <h2>Javascript</h2>
              <h2>Bootstrap</h2>
            </Vignet>
            <Vignet>
              <h2>Jquery</h2>
              <h2>SVG</h2>
              <h2>Animate.css</h2>
            </Vignet>
            <Vignet>
              <h2>FontAwesome</h2>
              <h2>Git / Github</h2>
              <h2>Paris</h2>
            </Vignet>
            <div className="clear"></div>
            <Detail>I hesitated to put my first personal website here but I told to myself that I was kind of proud of it. It was the first time that I designed an developped an entire website from scratch alone, that meant a lot to me.
              One page multilanguage website.
            </Detail>
          </TextWrap>
        </Container>
      </Wrapper>
    );
  }
}
