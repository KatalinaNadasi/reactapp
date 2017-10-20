import React from 'react';
import ReactDOM from 'react-dom';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, Relative, Wrapper, ImgDiv, ImageContainer1, Mask, MaskSmallImg, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5, ImageContainer6, Background1} from './Portfolio.style';
import {withRouter} from 'react-router-dom';

const Btn = withRouter(({history}) => (
  <button type='button' className="btn-style"
    onClick={() => { history.push('/projects') }}>Know more</button>
))


class Portfolio extends React.Component {

  componentDidUpdate() {
  ReactDOM.findDOMNode(this).scrollTop = 0
}

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
                      src={require('../img/home/chopard.jpg')}/>
                    <Mask>
                      <h2>Chopard</h2>
                      <p>Front-End development of a mini-website. </p>
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
                      src={require('../img/home/adaweek.jpg')}/>
                    <Mask>
                      <h2>Adaweek</h2>
                      <p>Webdesign, templating and code of a one-page website for the Adaweek festival 2016.</p>
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
                      src={require('../img/home/katalina.jpg')}/>
                    <Mask>
                      <h2>Personal website</h2>
                      <p>Design and code of a one-page website. </p>
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
                      src={require('../img/home/labanque.png')}/>
                    <MaskSmallImg>
                      <h2>La Banque Postale</h2>
                      <p>Front-End development of a mini-game website.</p>
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
                      src={require('../img/home/sneakr.jpg')}/>
                    <MaskSmallImg>
                      <h2>Sneakr</h2>
                      <p>Design and Development of a website with a search engine of vintage sneakr.</p>
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
                    src={require('../img/home/eavest.jpg')}/>
                  <Mask eavest>
                      <h2>Eavest</h2>
                      <p>Lead Front in the recast of the website.</p>
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
