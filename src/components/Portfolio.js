import React from 'react';
import ParallaxImage from 'react-image-parallax2';
import '../index.css';
import {Container, Relative, IconTitle, Wrapper, BackgroundTitle, FadeDiv, ImgDiv, ImageContainer1, Mask, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5, ImageContainer6, Background1, Background2} from './Portfolio.style';
import WhenInView from './WhenInView';
import {withRouter} from 'react-router-dom';

const Btn = withRouter(({history}) => (
  <button type='button' className="btn-style"
    onClick={() => { history.push('/projects') }}>Know more</button>
))

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
                        <div><Btn/></div>
                    </Mask>
                </ImageContainer1>
              </ImgDiv>
              <ImageContainer2>
                <ImgDiv>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={2/3}
                      src={require('../img/portfolio/adaweek.jpg')}/>
                    <Mask>
                      <h2>Title</h2>
                      <p>text</p>
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
                      <h2>Title</h2>
                      <p>text</p>
                      <div><Btn/></div>
                    </Mask>
                  </Relative>
                </ImgDiv>
              </ImageContainer3>
              <ImageContainer4>
                <ImgDiv>
                  <ParallaxImage
                    reduceHeight={0.2/3}
                    src={require('../img/portfolio/labanque.png')}/>
                  <Mask>
                    <h2>Title</h2>
                    <p>text</p>
                    <div><Btn/></div>
                  </Mask>
                </ImgDiv>
              </ImageContainer4>
              <div className="clear"></div>
          </Wrapper>
        </Background1>
        <Background2>
          <Wrapper>
              <ImageContainer5>
                <ImgDiv>
                  <Relative>
                    <ParallaxImage
                      reduceHeight={2/3}
                      src={require('../img/portfolio/sneakr.jpg')}/>
                    <Mask>
                      <h2>Title</h2>
                      <p>text</p>
                      <div><Btn/></div>
                    </Mask>
                  </Relative>
                </ImgDiv>
              </ImageContainer5>
              <ImageContainer6>
                <ImgDiv>
                  <ParallaxImage
                    reduceHeight={2/3}
                    src={require('../img/portfolio/eavest.jpg')}/>
                  <Mask>
                    <h2>Title</h2>
                    <p>text</p>
                    <div><Btn/></div>
                  </Mask>
                </ImgDiv>
              </ImageContainer6>
            <div className="clear"></div>
          </Wrapper>
        </Background2>
    </Container>

    )
  }
}

export default Portfolio;
