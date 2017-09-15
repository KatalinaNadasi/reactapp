import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, IconTitle, Wrapper, ImageContainer1, ImageContainer2, Background1, Background2} from '../components/Portfolio.style';

class Portfolio extends React.Component {
  render () {
    return(
    <Container>
      <IconTitle></IconTitle>
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
            <ImageContainer1>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/katalina.jpg')}/>
            </ImageContainer1>
            <ImageContainer2>
              <ParallaxImage
                reduceHeight={0.2/3}
                src={require('../img/portfolio/labanque.png')}/>
            </ImageContainer2>
          <div className="clear"></div>
          </Wrapper>
        </Background1>
        <Background2>
          <Wrapper>
            <ImageContainer1>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/sneakr.jpg')}/>
            </ImageContainer1>
            <ImageContainer2>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/eavest.jpg')}/>
            </ImageContainer2>
            <div className="clear"></div>
          </Wrapper>
        </Background2>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>

    )
  }
}

export default Portfolio  ;
