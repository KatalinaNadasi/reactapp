import React, {Component} from 'react';
import {Container, BackgroundImage, AboutTitle, ScrollPosition, ScrollDown, ProjectBgd, ProjectTitle} from './About.style';
import '../index.css';


export default class About extends Component {
  render(){
    return(
      <div>
        <Container>
          <BackgroundImage></BackgroundImage>
          <AboutTitle>About me</AboutTitle>
          <ScrollPosition>
            <ScrollDown></ScrollDown>
          </ScrollPosition>
        </Container>
        <Container>
          <ProjectBgd>
            <ProjectTitle>Side projects</ProjectTitle>
          </ProjectBgd>
        </Container>



      </div>
    );
  }

}
