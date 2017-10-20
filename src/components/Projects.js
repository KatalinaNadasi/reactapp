import React, {Component} from 'react';
import Wrapper from './Wrapper';
import { Close, Background, ScrollContainer, ScrollDownContainer, Title, BrandContainer, BrandText, ImgEav, ImgChop, ImgAda, ImgLBP, ImgSneakr, ImgKat, TextWrap, TextWrapChop, TextWrapAda, TextWrapLBP, TextWrapSneakr, Vignet, VignetLarge, Brand, Detail } from './Projects.style';
import { SvgContainer, ArrowAnimation, BottomArrow } from './About.style';
import { Carousel } from 'react-responsive-carousel';
import ReactModal from 'react-modal';
import '../index.css';
import Footer from './Footer';

ReactModal.defaultStyles.overlay.zIndex = '1000';
ReactModal.defaultStyles.overlay.position = 'fixed';
ReactModal.defaultStyles.overlay.border = '5px solid #E3DAC9';
ReactModal.defaultStyles.overlay.backgroundColor = '#000059';


const style = {
  transition: 'all 1s ease'
}

export default class Projects extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleOpenModal6 = this.handleOpenModal6.bind(this);

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  handleOpenModal2 () {
  this.setState({ showModal2: true });
  }
  handleOpenModal3 () {
  this.setState({ showModal3: true });
  }
  handleOpenModal4 () {
  this.setState({ showModal4: true });
  }
  handleOpenModal5 () {
  this.setState({ showModal5: true });
  }
  handleOpenModal6 () {
  this.setState({ showModal6: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }
  handleCloseModal2 () {
  this.setState({ showModal2: false });
  }
  handleCloseModal3 () {
  this.setState({ showModal3: false });
  }
  handleCloseModal4 () {
  this.setState({ showModal4: false });
  }
  handleCloseModal5 () {
  this.setState({ showModal5: false });
  }
  handleCloseModal6 () {
  this.setState({ showModal6: false });
  }

  componentWillMount() {
      ReactModal.setAppElement('body');
   }

   componentDidMount () {
     window.scrollTo(0, 0)
   }

  render(){

    return(
      <div>
      <Wrapper>
        <Background>
          <Title>Projects</Title>
        </Background>
        <ScrollContainer>
          <ScrollDownContainer>
            <SvgContainer>
              <ArrowAnimation>
                <BottomArrow />
              </ArrowAnimation>
            </SvgContainer>
          </ScrollDownContainer>
          </ScrollContainer>
            <Carousel autoPlay interval={3000} transitionTime={1000} showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight>
              <div>
                <img src={require('../img/projects/chopard-banner.jpg')} alt="Chopard"/>
              </div>
              <div>
                <img src={require('../img/projects/eavest-banner.jpg')} alt="Eavest" />
              </div>
              <div>
                <img src={require('../img/projects/banque-banner.jpg')} alt="La Banque Postale" />
              </div>
              <div>
                <img src={require('../img/projects/sneakr-banner.jpg')} alt="Sneakr" />
              </div>
              <div>
                <img src={require('../img/projects/adaweek-banner.jpg')} alt="Adaweek" />
              </div>
              <div>
                <img src={require('../img/projects/katalina-banner.jpg')} alt="Katalina Nadasi" />
              </div>
              <div>
                <img src={require('../img/projects/chopard-banner.jpg')} alt="Chopard"/>
              </div>
            </Carousel>
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
            <div
              onClick={this.handleOpenModal3}
              style={{...style}}>
              <h2>Adaweek</h2><p>Front-end developer / Design</p>
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
              <Brand>Eavest
                <p>Recast of all the previous website made on Wordpress.</p>
              </Brand>
                <ImgEav eavest/>
                <TextWrap>
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
                      <Detail>In charge of all the Front of the project. All Front development in a lean environment.
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
                <Brand>Chopard<p>Mini-website for the 'Happy Diamons' collection launched in the UK</p></Brand>
                  <ImgChop/>
                  <TextWrapChop>
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
                <ReactModal
                  isOpen={this.state.showModal3}
                  contentLabel="Adaweek detail work"
                  onRequestClose={this.handleCloseModal3}>
                  <button
                    onClick={this.handleCloseModal3}
                    style={{'float': 'right', 'border': 'none', 'backgroundColor': 'transparent'}}>
                    <Close/>
                  </button>
                  <Brand>Adaweek<p>Design and development of all the website for the event in 2016.</p></Brand>
                    <a href="http://adaweek.fr/" target="_blank">
                      <ImgAda style={{height: this.state.height}}/>
                    </a>
                    <TextWrapAda>
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
                      </TextWrapAda>
                  </ReactModal>
          </BrandText>
          <BrandText>
            <div
              onClick={this.handleOpenModal4}
              style={{...style}}>
              <h2>La Banque Postale</h2><p>Front-end developer</p>
            </div>
            <div
              onClick={this.handleOpenModal5}
              style={{...style}}>
              <h2>Sneakr</h2><p>Front-end developer</p>
            </div>
            <div
              onClick={this.handleOpenModal6}
              style={{...style}}>
              <h2>Personal Website</h2><p>Front-end developer</p>
            </div>
            <ReactModal
              isOpen={this.state.showModal4}
              contentLabel="La Banque Postale detail work"
              onRequestClose={this.handleCloseModal4}>
              <button
                onClick={this.handleCloseModal4}
                style={{'float': 'right', 'border': 'none', 'backgroundColor': 'transparent'}}>
                <Close/>
              </button>
              <Brand>La Banque Postale
                <p>Development of a 6 pages play mini-website for <br/> La Banque Postale</p>
              </Brand>
                <ImgLBP/>
                <TextWrapLBP>
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
                      <Detail>Integration and development of a 3 pages website from a model given by the client. Environment of production in Angular 1.5. Lean environment.
                      </Detail>
                  </TextWrapLBP>
              </ReactModal>
              <ReactModal
                isOpen={this.state.showModal5}
                contentLabel="Sneakr detail work"
                onRequestClose={this.handleCloseModal5}>
                <button
                  onClick={this.handleCloseModal5}
                  style={{'float': 'right', 'border': 'none', 'backgroundColor': 'transparent'}}>
                  <Close/>
                </button>
                <Brand>Sneakr
                  <p>Development of a Beta version of a website with a search engine</p>
                </Brand>
                  <ImgSneakr/>
                  <TextWrapSneakr>
                      <VignetLarge>
                        <h2>HTML / CSS</h2>
                        <h2>Javascript</h2>
                        <h2>Bootstrap</h2>
                      </VignetLarge>
                      <VignetLarge>
                        <h2>Ruby / Ruby on Rails</h2>
                        <h2>Scraping / Parsing</h2>
                        <h2>Git / Github</h2>
                      </VignetLarge>
                      <div className="clear"></div>
                        <Detail>Development of a App with a search engine that helps you to find vintage sneakers at the best price from Ebay and Le Bon Coin.
                          Website built in Ruby on Rails as a final project of the training at Le Wagon / Paris.
                        </Detail>
                    </TextWrapSneakr>
                </ReactModal>
                <ReactModal
                  isOpen={this.state.showModal6}
                  contentLabel="Personal detail work"
                  onRequestClose={this.handleCloseModal6}>
                  <button
                    onClick={this.handleCloseModal6}
                    style={{'float': 'right', 'border': 'none', 'backgroundColor': 'transparent'}}>
                    <Close/>
                  </button>
                  <Brand>Personal website
                    <p>Design and development of a website from scratch</p>
                  </Brand>
                    <ImgKat/>
                    <TextWrapLBP>
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
                          <h2>Font Awesome</h2>
                          <h2>Git / Github</h2>
                          <h2>Paris</h2>
                        </Vignet>
                        <div className="clear"></div>
                          <Detail>I hesitated to put my first personal website here but I told to myself that I was kind of proud of it. It was the first time that I designed an developped an entire website from scratch alone, that meant a lot to me.
                            One page multilanguage website.
                          </Detail>
                      </TextWrapLBP>
                  </ReactModal>
          </BrandText>
        </BrandContainer>
      </Wrapper>
      <div className="relative clear">
        <Footer />
      </div>
      </div>
    );
  }
}
