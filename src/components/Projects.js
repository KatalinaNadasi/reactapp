import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {Background, Title, Opacity, BrandTitle, BrandTitleAda, BrandTitleChopard, BrandContainer, AbsoluteText, Container, BrandText, Img, ImgChop, ImgAda, TextWrap, Vignet, VignetLarge, Brand, Detail} from './Projects.style';
import { Carousel } from 'react-responsive-carousel';
import '../style/carousel.css';
import ReactModal from 'react-modal';
import '../index.css';

ReactModal.defaultStyles.overlay.zIndex = '1000';
ReactModal.defaultStyles.overlay.position = 'fixed';

const style = {
  transition: 'all 1s ease'
}

export default class Projects extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentWillMount() {
      ReactModal.setAppElement('body');
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
        <BrandContainer>
          <BrandText>
            <div
              onClick={this.handleOpenModal}
              style={{...style}}>
              <h2>Eavest</h2><p>Front-end developer</p>
            </div>
            <ReactModal isOpen={this.state.showModal}>
              <button onClick={this.handleCloseModal}>Close Modal</button>

                  <TextWrap>
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
                        <Detail>I charge of all the Front of the project. All Front development in a lean environment.
                          Working directly with the person in charge of the back-end part (Java). Source of proposal for animations and tools choices. Launch of the website planned in 2018.
                        </Detail>
                      </TextWrap>
                  
              </ReactModal>
            <div>
              <h2>Adaweek</h2><p>Front-end developer / Design</p>
            </div>
            <div>
              <h2>Chopard</h2><p>Front-end developer</p>
            </div>
          </BrandText>
          <BrandText>
            <div>
              <h2>La Banque Postale</h2><p>Front-end developer</p>
            </div>
            <div>
              <h2>Sneakr</h2><p>Front-end developer</p>
            </div>
            <div>
              <h2>Personal Website</h2><p>Front-end developer</p>
            </div>
          </BrandText>
        </BrandContainer>







      </Wrapper>
    );
  }
}
