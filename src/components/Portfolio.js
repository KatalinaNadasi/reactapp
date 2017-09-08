import React from 'react';
import styled from 'styled-components';
import ParallaxImage from 'react-image-parallax2';
// import logo from '../img/logo.jpg';
// import { injectGlobal } from 'styled-components';

const Background = styled.div`
  height: 200vh;
  width: 111vw;
  background-image: url('${require('../img/logo-transp.svg')}');
  background-repeat: no-repeat;
  background-size: 80%;
  margin-top: -540px;
  z-index: -99;
`

const SpaceBeetween = styled.div`
  padding-top: 150px;
`

const ImageContainer1 = styled.div`
  width: 25%;
  height: 165vh;
  margin: 119px 0px 11px 220px;
  float: left;
`
const ImageContainer2 = styled.div`
  width: 25%;
  height: 165vh;
  float: left;
  margin: 250px;
`


class Portfolio extends React.Component {
  render () {
    return(
      <Background>
        <SpaceBeetween>
          <ImageContainer1>
            <ParallaxImage
              src={require('../img/portfolio/chopard/chopard.jpg')}/>
          </ImageContainer1>
          <ImageContainer2>
            <ParallaxImage
              reduceHeight={2/3}
              src={require('../img/portfolio/adaweek/adaweekAll.jpg')}/>
          </ImageContainer2>
        </SpaceBeetween>
      </Background>


    )
  }
}

export default Portfolio  ;
