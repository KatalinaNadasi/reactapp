import React, {Component} from 'react';
import Wrapper from './Wrapper';
import {Close, Background, Title, Opacity, BrandContainer, BrandText, Img, ImgChop, ImgAda, TextWrap, TextWrapChop, Vignet, VignetLarge, Brand, Detail} from './Projects.style';
import { Carousel } from 'react-responsive-carousel';
import '../style/carousel.css';
import ReactModal from 'react-modal';
import '../index.css';


ReactModal.defaultStyles.overlay.zIndex = '1000';
ReactModal.defaultStyles.overlay.position = 'fixed';
ReactModal.defaultStyles.overlay.border = '5px solid #E3DAC9';
ReactModal.defaultStyles.overlay.backgroundColor = '#007070';


const style = {
  transition: 'all 1s ease'
}

export default class Projects extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  handleOpenModal2 () {
  this.setState({ showModal2: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }
  handleCloseModal2 () {
  this.setState({ showModal2: false });
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
            <div
              onClick={this.handleOpenModal2}
              style={{...style}}>
              <h2>Chopard</h2><p>Front-end developer</p>
            </div>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Eavest detail work"
              onRequestClose={this.handleCloseModal}>
              <button
                onClick={this.handleCloseModal}
                style={{'float': 'right', 'border': 'none', 'backgroundColor': 'transparent'}}>
                <Close/>
              </button>
                <Img eavest/>
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
              <ReactModal
                isOpen={this.state.showModal2}
                contentLabel="Chopard detail work"
                onRequestClose={this.handleCloseModal2}>
                <button
                  onClick={this.handleCloseModal2}
                  style={{'float': 'right', 'border': 'none', 'backgroundColor': 'transparent'}}>
                  <Close/>
                </button>
                  <ImgChop/>
                  <TextWrapChop>
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
                    </TextWrapChop>
                </ReactModal>
            <div>
              <h2>Adaweek</h2><p>Front-end developer / Design</p>
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
