import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, IconTitle, Wrapper, BackgroundTitle, ImageContainer1, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5, ImageContainer6, Background1, Background2} from './Portfolio.style';

class Portfolio extends React.Component {
  render () {
    return(
    <Container>
      <div className="wrapper-title">
        <BackgroundTitle></BackgroundTitle>
        <IconTitle></IconTitle>
      </div>
      <Background1>
        <Wrapper>
          <ImageContainer1>
            <ParallaxImage
              reduceHeight={0.2/3}
              src={require('../img/portfolio/chopard.jpg')}/>
          </ImageContainer1>
          <ImageContainer2>
            <ParallaxImage
              reduceHeight={2/3}
              src={require('../img/portfolio/adaweek.jpg')}/>
          </ImageContainer2>
          <div className="clear"></div>
            <ImageContainer3>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/katalina.jpg')}/>
            </ImageContainer3>
            <ImageContainer4>
              <ParallaxImage
                reduceHeight={0.2/3}
                src={require('../img/portfolio/labanque.png')}/>
            </ImageContainer4>
          <div className="clear"></div>
          </Wrapper>
        </Background1>
        <Background2>
          <Wrapper>
            <ImageContainer5>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/sneakr.jpg')}/>
            </ImageContainer5>
            <ImageContainer6>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/eavest.jpg')}/>
            </ImageContainer6>
            <div className="clear"></div>
          </Wrapper>
        </Background2>
    </Container>

    )
  }
}

export default Portfolio  ;
