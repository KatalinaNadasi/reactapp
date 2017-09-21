import React, {Component} from 'react';
import {Container, BackgroundImage, AboutTitle, ScrollPosition, ScrollDown, SectionBgd, SectionTitle, SectionHeader, TextSide, TitleSide, Projects, BlueLetters} from './About.style';
import '../index.css';
import {Retro} from '../variables.js';


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
              <TextSide>
                <Retro pink>Konexio</Retro>
                <BlueLetters>Professeur de code / Public de réfugiés</BlueLetters>
              </TextSide>
              <TitleSide>mon titre</TitleSide>
              <TitleSide>mon titre</TitleSide>
                <TextSide>
                  <Retro pink>Konexio</Retro>
                  <BlueLetters>Professeur de code / Public de réfugiés</BlueLetters>
                </TextSide>
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
