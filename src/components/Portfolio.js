import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import {Background1, Wrapper, ImageContainer1, ImageContainer2, Background2, Background3} from '../components/Portfolio.style';

class Portfolio extends React.Component {
  render () {
    return(
    <div>
      <Background1>
      </Background1>
      <Background2>
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
        </Background2>
        <Background3>
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
        </Background3>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>

    )
  }
}

export default Portfolio  ;
