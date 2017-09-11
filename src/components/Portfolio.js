import React from 'react';
import styled from 'styled-components';
import ParallaxImage from 'react-image-parallax2';
import {pink} from '../variables.js';

const BackgroundTitle = styled.div`
  height: 82vh;
  background-image: url('${require('../img/logo-transp.svg')}');
  background-repeat: no-repeat;
  background-size: 86%;
  margin: -540px 0 15px 150px;
  z-index: -99;
`

const Work = styled.h1`
  font-size: 4rem;
  color: black;
  padding-left: 58px;
  transform: rotate(-44deg);
  padding-top: 90px;
`

const Realisations = styled.h1`
  font-size: 4rem;
  color: #01AFC0;
  padding-left: 190px;
  padding-top: 105px;
  transform: rotate(-50deg);
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`

const ImageContainer1 = styled.div`
  width: 35%;
  float: left;
  margin: 0 70px 0px 85px;
`

const ImageContainer2 = styled(ImageContainer1)`
  margin-top: 175px;
`

const Background2 = styled.div`
  height: 800px;
  z-index: -99;
  background: rgb(255,228,226);
  background: linear-gradient(to bottom, rgba(255,228,226,1) 0%,rgba(254,67,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffe4e2', endColorstr='${pink}',GradientType=0 ); /* IE6-9 */
`

const Background3 = styled.div`
  height: 1000px;
  background: linear-gradient(to bottom, rgba(254,67,101,1) 0%, rgba(255,228,226,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fe4365', endColorstr='#ffe4e2',GradientType=0 ); /* IE6-9 */
  z-index: -99;
`

class Portfolio extends React.Component {
  render () {
    return(
    <div>
      <BackgroundTitle>
        <Work>Work</Work>
        <Realisations>Réalisations</Realisations>
      </BackgroundTitle>
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
          <div className="clear"></div>
            <ImageContainer1>
              <ParallaxImage
                reduceHeight={2/3}
                src={require('../img/portfolio/katalina.jpg')}/>
            </ImageContainer1>
            <ImageContainer2>
              <ParallaxImage
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
