import React from 'react';
import styled from 'styled-components';
import ParallaxImage from 'react-image-parallax2';
import {pink} from '../variables.js';
// import logo from '../img/logo.jpg';
// import { injectGlobal } from 'styled-components';

const Background1 = styled.div`
  height: 100vh;
  background-image: url('${require('../img/logo-transp.svg')}');
  background-repeat: no-repeat;
  background-size: 80%;
  margin: -540px 0 0 82px;
  z-index: -99;
  opacity: 0.7;
`

const Wrapper = styled.div`
  margin-left: 180px;
`

const ImageContainer1 = styled.div`
  width: 35%;
  float: left;
  margin: 55px;
`

const ImageContainer2 = styled(ImageContainer1)`
  margin-top: 175px;
`

const Background2 = styled.div`
  height: 600px;
  z-index: -99;
  background: rgb(255,228,226);
  background: linear-gradient(to bottom, rgba(255,228,226,1) 0%,rgba(254,67,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe4e2', endColorstr='#fe4365',GradientType=0 ); /* IE6-9 */
`

const Background3 = styled.div`
  height: 600px;
  background: linear-gradient(to bottom, rgba(254,67,101,1) 0%, rgba(255,228,226,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe4365', endColorstr='#ffe4e2',GradientType=0 ); /* IE6-9 */
  z-index: -99;
`

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
              src={require('../img/portfolio/chopard.jpg')}/>
          </ImageContainer1>
          <ImageContainer2>
            <ParallaxImage
              reduceHeight={2/3}
              src={require('../img/portfolio/adaweek.jpg')}/>
          </ImageContainer2>
          <ImageContainer1>
            <ParallaxImage
              reduceHeight={2/3}
              src={require('../img/portfolio/katalina.jpg')}/>
          </ImageContainer1>
          <ImageContainer1>
            <ParallaxImage
              src={require('../img/portfolio/labanque.png')}/>
          </ImageContainer1>
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
          </Wrapper>
        </Background3>
    </div>

    )
  }
}

export default Portfolio  ;
