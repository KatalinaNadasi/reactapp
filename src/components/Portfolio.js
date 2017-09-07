import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.jpg';

const MountainsSection = styled.div`
  height: 150vh;
  background-image: url('${require('../img/logo.jpg')}');
  background-repeat: no-repeat;
  margin-top: -679px;;
`
const MontainsImage = styled.img`
  width: 100px;
`

class Portfolio extends React.Component {
  render () {
    return(
      <MountainsSection>
        <MontainsImage>
        </MontainsImage>
      </MountainsSection>


    )
  }
}

export default Portfolio  ;
