import React, {Component} from 'react';
import {HeaderContainer, Container, BackgroundImage, AboutTitle, ScrollPosition, ScrollDown, Line, BlueBgd, SectionTitle, SectionSpace, ProjectsContainer, BlueLetters, CremeLetters, ImgSide, Wrapper, LongColLeft, LongColRight, LongColLeftImg, ShortColRight, ShortColLeft, ShortColRightSmall, Padding} from './About.style';
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
          <SectionSpace>
            <h1>Various projects around the code</h1>
          </SectionSpace>
            <ProjectsContainer>
              <Wrapper>
                <Line>
                  <LongColLeft>
                    <Retro pink><a href="http://konexio.eu/index-french.html">Konexio</a></Retro>
                    <BlueLetters>Code teacher freelance<br/>Welcoming refugees into the community through tech and innovation</BlueLetters>
                  </LongColLeft>
                  <ShortColRight>
                    <CremeLetters>The story behind</CremeLetters>
                    <Padding>I've met Jean Guo in a hackaton about refugees in le Wagon. With my team we developped the <a href="https://www.grazia.fr/news-et-societe/news/textfugees-refugenius-la-technologie-au-service-des-migrants-809301" target="_blank">'Linkedin for refugees'</a></Padding>
                  </ShortColRight>
                  <LongColLeftImg></LongColLeftImg>
                </Line>
                <Line>
                  <ShortColLeft>
                    the presentation of our project at 1'99 + video
                  </ShortColLeft>
                  <LongColRight>
                    <Retro pink>Pitch project at The Family</Retro>
                    <BlueLetters>Project developped at Le Wagon Bootcamp + logo Wagon</BlueLetters>
                  </LongColRight>
                  <LongColLeft>
                    <Retro pink>Le Reacteur</Retro>
                    <BlueLetters>Help for the launch communication of the school</BlueLetters>
                    <BlueLetters>One week React bootcamp as student</BlueLetters>
                  </LongColLeft>
                  <ShortColRightSmall>
                    logo du reacteur
                  </ShortColRightSmall>
                </Line>
              </Wrapper>
              <div className="clear"></div>
            </ProjectsContainer>
            <SectionSpace></SectionSpace>
        </Container>


      </div>
    );
  }

}
