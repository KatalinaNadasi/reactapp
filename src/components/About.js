import React, {Component} from 'react';
import {Container, BackgroundImage, AboutTitle, ScrollPosition, ScrollDown, SectionBgd, SectionTitle, SectionHeader, TextSide, TitleSide, Projects} from './About.style';
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
          <SectionBgd>
            <SectionTitle>Side projects</SectionTitle>
          </SectionBgd>
          <SectionHeader>
            <h1>I work for causes where I can share my passion. sdsdsd sdsdsd</h1>
          </SectionHeader>
            <Projects>
              <TextSide>mon texte</TextSide>
              <TitleSide>mon titre</TitleSide>
              <div className="clear"></div>
            </Projects>
        </Container>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


      </div>
    );
  }

}
