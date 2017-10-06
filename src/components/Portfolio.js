import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, Relative, Wrapper, ImgDiv, ImageContainer1, Mask, MaskSmallImg, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5, ImageContainer6, Background1} from './Portfolio.style';
import {withRouter} from 'react-router-dom';

const Btn = withRouter(({history}) => (
  <button type='button' className="btn-style"
    onClick={() => { history.push('/projects') }}>Know more</button>
))

class Portfolio extends React.Component {

  render () {
    return(
    <Container>
        <Background1>
          <Wrapper>
              <ImgDiv>
                <ImageContainer1>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={0.2/3}
                      src={require('../img/portfolio/chopard.jpg')}/>
                    <Mask>
                      <h2>Chopard</h2>
                      <p>Front-End development of a mini-website for the opening of a shop in the UK. <br/>
                        3 pages of integration from a model given by the client. </p>
                      <p>HTML5 / CSS3, Bootstrap, Javascript, Angular 1.5 for the environment, lean environment.</p>
                      <div><Btn/></div>
                    </Mask>
                  </Relative>
                </ImageContainer1>
              </ImgDiv>
              <ImageContainer2>
                <ImgDiv>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={2/3}
                      src={require('../img/portfolio/adaweek.jpg')}/>
                    <Mask>
                      <h2>Adaweek</h2>
                      <p>Design, code of a one-page website for the Adaweek festival 2016.</p>
                      <p>HTML5/ CSS3, Bootstrap, Javascript, Photoshop, SVG.</p>
                      <div><Btn/></div>
                    </Mask>
                  </Relative>
                </ImgDiv>
                </ImageContainer2>
                <div className="clear"></div>
                <ImageContainer3>
                  <ImgDiv>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={2/3}
                      src={require('../img/portfolio/katalina.jpg')}/>
                    <Mask>
                      <h2>Personal website</h2>
                      <p>Design and code of a one-page website. </p>
                      <p>HTML5 / CSS3, Bootstrap, Javascript, animate.css.</p>
                      <div><Btn/></div>
                    </Mask>
                  </Relative>
                </ImgDiv>
              </ImageContainer3>
              <ImageContainer4>
                <ImgDiv>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={0.2/3}
                      src={require('../img/portfolio/labanque.png')}/>
                    <MaskSmallImg>
                      <h2>La Banque Postale</h2>
                      <p>Front-End development of a mini-game website.<br/>
                      3 pages of integration from a model given by the client.</p>
                      <p>HTML5 / CSS3, Bootstrap, Javascript, Angular 1.5 for the environment and lean environment.</p>
                      <div><Btn/></div>
                    </MaskSmallImg>
                  </Relative>
                </ImgDiv>
              </ImageContainer4>
              <ImageContainer5>
                <ImgDiv>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={2/3}
                      src={require('../img/portfolio/sneakr.jpg')}/>
                    <MaskSmallImg>
                      <h2>Sneakr</h2>
                      <p>Design and Development of a website with a search engine of vintage sneakr from Ebay and Le Bon Coin.</p>
                      <p>HTML5 / CSS3, Bootstrap, Javascript, Ruby on Rails for the environment.</p>
                      <div><Btn/></div>
                    </MaskSmallImg>
                  </Relative>
                </ImgDiv>
              </ImageContainer5>
              <ImageContainer6>
                <ImgDiv>
                  <Relative>
                  <ParallaxImage
                    reduceHeight={2/3}
                    src={require('../img/portfolio/eavest.jpg')}/>
                    <Mask>
                      <h2>Eavest</h2>
                      <p>Lead Front-End in the recast of all the existing website previous made on Wordpress. Launch planned in 2018.</p>
                      <p>HTML5 / CSS3, Bootstrap, Javascript, Jquery, ChartJs, lean environment.</p>
                      <div><Btn/></div>
                    </Mask>
                  </Relative>
                </ImgDiv>
              </ImageContainer6>
            <div className="clear"></div>
          </Wrapper>
        </Background1>
    </Container>

    )
  }
}

export default Portfolio;
