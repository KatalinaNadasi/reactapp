import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, IconTitle, Wrapper, BackgroundTitle, FadeDiv, ImageContainer1, Hover, Btn, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5, ImageContainer6, Background1, Background2, Mountains} from './Portfolio.style';
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
            <FadeDiv>
              <WhenInView>
                {({isInView}) =>
                <ImageContainer1 hide={!isInView}>
                  <ParallaxImage
                    reduceHeight={0.2/3}
                    src={require('../img/portfolio/chopard.jpg')}/>
                  <Hover>
                    <Btn>Voir plus</Btn>
                  </Hover>
                </ImageContainer1>
                }
              </WhenInView>
            </FadeDiv>
            <FadeDiv>
              <WhenInView>
                {({isInView}) =>
                <ImageContainer2 hide={!isInView}>
                  <ParallaxImage
                    reduceHeight={2/3}
                    src={require('../img/portfolio/adaweek.jpg')}/>
                </ImageContainer2>
                }
              </WhenInView>
            </FadeDiv>
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
        <Mountains>

        </Mountains>
    </Container>

    )
  }
}

export default Portfolio  ;
