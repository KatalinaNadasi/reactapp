import React, {Component} from 'react';
import {HeaderContainer, Container, BackgroundImage, AboutTitle, ScrollPosition, ScrollDown, BlueBgd, SectionTitle, SectionHeader, TextSide, TitleSide, ProjectsContainer, BlueLetters, ImgSide, TextSide2, TitleSide2, TitleSide3} from './About.style';
import '../index.css';
import {Retro} from '../variables.js';


export default class About extends Component {
  render(){
    return(
      <div>
        <HeaderContainer>
          <BackgroundImage></BackgroundImage>
          <AboutTitle>About me</AboutTitle>
        </HeaderContainer>
        <Container>
          <ScrollPosition>
            <ScrollDown></ScrollDown>
            </ScrollPosition>
          <BlueBgd>
            <SectionTitle>Side projects</SectionTitle>
          </BlueBgd>
        </Container>
        <Container>
          <SectionHeader>
            <h1>I work with people interested in coding but doesn’t know where to start.</h1>
          </SectionHeader>
            <ProjectsContainer>
              <TextSide>
                <Retro pink>Konexio</Retro>
                <BlueLetters>Professeur de code / conférencière <br/>Refugees</BlueLetters>
              </TextSide>
              <TitleSide>I've met Jean Guo in a hackaton about refugees in le Wagon. With my team we developped the <a href="https://www.grazia.fr/news-et-societe/news/textfugees-refugenius-la-technologie-au-service-des-migrants-809301" target="_blank">'Linkedin for refugees'</a></TitleSide>
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
                  <TitleSide3>mon titre</TitleSide3>

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
