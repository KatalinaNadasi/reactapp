import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, IconTitle, Wrapper, BackgroundTitle, FadeDiv, ImgDiv, ImageContainer1, Mask, Btn, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5, ImageContainer6, Background1, Background2, Mountains} from './Portfolio.style';
import WhenInView from './WhenInView';


class Portfolio extends React.Component {


  render () {
    return(
    <Container>
      <WhenInView>
        {({isInView}) =>
            <div className="wrapper-title">
              <BackgroundTitle hide={!isInView}>
                <FadeDiv>
                  <IconTitle />
                </FadeDiv>
              </BackgroundTitle>
            </div>
        }
        </WhenInView>
        <Background1>
          <Wrapper>
              <ImgDiv>
                <ImageContainer1>
                  <ParallaxImage
                    reduceHeight={0.2/3}
                    src={require('../img/portfolio/chopard.jpg')}/>
                  <Mask>
                    <h2>Title</h2>
                      <p>text</p>
                      <div><Btn><a href="#">Know more</a></Btn></div>
                  </Mask>
                </ImageContainer1>
              </ImgDiv>
              <ImageContainer2>
                <ParallaxImage
                  reduceHeight={2/3}
                  src={require('../img/portfolio/adaweek.jpg')}/>
                  <Mask>
                    <h2>Title</h2>
                      <p>text</p>
                      <div><Btn><a href="#">Know more</a></Btn></div>
                  </Mask>
              </ImageContainer2>
              <ImageContainer3>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/katalina.jpg')}/>
                <Mask>
                  <h2>Title</h2>
                    <p>text</p>
                    <div><Btn><a href="#">Know more</a></Btn></div>
                </Mask>
              </ImageContainer3>
              <ImageContainer4>
                <ParallaxImage
                  reduceHeight={0.2/3}
                  src={require('../img/portfolio/labanque.png')}/>
                  <Mask>
                    <h2>Title</h2>
                      <p>text</p>
                      <div><Btn><a href="#">Know more</a></Btn></div>
                  </Mask>
              </ImageContainer4>
          </Wrapper>
        </Background1>
        <Background2>
          <Wrapper>
            <ImageContainer5>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/sneakr.jpg')}/>
                <Mask>
                  <h2>Title</h2>
                    <p>text</p>
                    <div><Btn><a href="#">Know more</a></Btn></div>
                </Mask>
            </ImageContainer5>
            <ImageContainer6>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/eavest.jpg')}/>
                <Mask>
                  <h2>Title</h2>
                    <p>text</p>
                    <div><Btn><a href="#">Know more</a></Btn></div>
                </Mask>
            </ImageContainer6>
          </Wrapper>
        </Background2>
    </Container>

    )
  }
}

export default Portfolio  ;
