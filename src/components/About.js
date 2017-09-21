import React, {Component} from 'react';
import {Container, BackgroundImage, AboutTitle, ScrollPosition, ScrollDown, BlueBgd, SectionTitle, SectionHeader, TextSide, TitleSide, ProjectsContainer, BlueLetters, ImgSide, TextSide2, TitleSide2} from './About.style';
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
          <BlueBgd>
            <SectionTitle>Side projects</SectionTitle>
          </BlueBgd>
          <SectionHeader>
            <h1>I work for causes where I can share my passion. sdsdsd sdsdsd</h1>
          </SectionHeader>
            <ProjectsContainer>
              <TextSide>
                <Retro pink>Konexio</Retro>
                <BlueLetters>Professeur de code / conférencière</BlueLetters>
              </TextSide>
              <TitleSide>Public de réfugiés</TitleSide>
              <ImgSide></ImgSide>
                <TextSide2>
                  <Retro pink>Le Reacteur</Retro>
                  <BlueLetters>Aide à la communication</BlueLetters>
                </TextSide2>
                <TitleSide2>blabla</TitleSide2>
                  <TextSide>
                    <Retro pink>Adaweek</Retro>
                    <BlueLetters>Developpement site internet 2016</BlueLetters>
                  </TextSide>
                  <TitleSide>mon titre</TitleSide>

              <div className="clear"></div>
            </ProjectsContainer>
        </Container>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


      </div>
    );
  }

}
