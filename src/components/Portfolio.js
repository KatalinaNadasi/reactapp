import React from 'react';
import styled from 'styled-components';
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
  opacity: 0.6;
`

class Portfolio extends React.Component {
  render () {
    return(
      <Background>
      </Background>


    )
  }
}

export default Portfolio  ;
