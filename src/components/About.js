import React, {Component} from 'react';
import {HeaderContainer, Container, BackgroundImage, ArrowAnimation, AboutTitle, ScrollPosition, BottomArrow, SvgContainer , ScrollDown, Line, BlueBgd, SectionTitle, SectionSpace, ProjectsContainer, Letters, Wrapper, LongCol, Img, ShortCol, Padding} from './About.style';
import '../index.css';
import {Retro} from '../variables.js';
import Footer from './Footer';


export default class About extends Component {
  render(){
    return(
      <div>
        <HeaderContainer>
          <BackgroundImage />
          <AboutTitle>About me</AboutTitle>
        </HeaderContainer>
        <Container>
          <ScrollPosition>
            <ScrollDown>
              <SvgContainer>
                <ArrowAnimation>
                  <BottomArrow />
                </ArrowAnimation>
              </SvgContainer>
            </ScrollDown>
            </ScrollPosition>
          <BlueBgd>
            <SectionTitle>Side projects</SectionTitle>
          </BlueBgd>
        </Container>
        <Container>
          <SectionSpace>
            <h1>When I don't code I do that</h1>
          </SectionSpace>
            <ProjectsContainer>
              <Wrapper>
                <Line>
                  <LongCol left>
                    <Retro><a href="http://konexio.eu/index-french.html">Konexio</a></Retro>
                    <Letters blue>Since 2017 I work with Konexio as code teacher as Salaried.<br/>The purpose of the Association is to welcome refugees into the community through tech and innovation. <br/>The year 2017 is gonna be a great year for us. The school is not yet reviewed but still reference <a href="https://www.switchup.org/bootcamps/konexio" target="_blank">here</a>.</Letters>
                  </LongCol>
                  <ShortCol right pink tall padding>
                    <Letters creme>The story behind</Letters>
                    <Padding>I've met Jean Guo in a hackaton about refugees in le Wagon. With my team we developped the'Linkedin for refugees'. Wait...hey! Grazia talk about us <a href="https://www.grazia.fr/news-et-societe/news/textfugees-refugenius-la-technologie-au-service-des-migrants-809301" target="_blank">there</a>.</Padding>
                  </ShortCol>
                  <Img>
                    <img src={require('../img/about/konexio.jpg')} alt="team"/>
                  </Img>
                </Line>
                <Line>
                <ShortCol left blue small nopadding>
                  <iframe width="414" height="220" src="//www.ytcropper.com/embed/Oh59c944c800dfc/loop/noautoplay/" frameBorder="0" allowFullScreen></iframe>
                </ShortCol>
                  <LongCol right>
                    <Retro>Pitch of sneakr.fr at The Family</Retro>
                    <Letters blue>At the end of my training at <a href="https://www.switchup.org/locations/paris-coding-bootcamp" target="_blank">the best coding bootcamp in Europe</a> (Le Wagon, off course) we pitched our project developped in 2 weeks in front of professionals poeple.</Letters>
                  </LongCol>
                  <LongCol left>
                    <Retro><a href="https://www.lereacteur.io/" target="_blank">Le Reacteur</a></Retro>
                    <Letters blue>I did their one week intensive training in React and then helped them a little for the launch communication of their bootcamp. <br/>I found the project very smart because I'm convinced that React will have a special slice in the coding cake next years.</Letters>
                  </LongCol>
                  <ShortCol right small>
                    <Letters creme>The story behind</Letters>
                    <div style={{ paddingLeft: 30, paddingRight: 30 }}>We share with Xavier the same passion for vintage and retro.</div>
                  </ShortCol>
                </Line>
              </Wrapper>
              <div className="clear"></div>
            </ProjectsContainer>
            <SectionSpace />
        </Container>
        <Footer />
      </div>
    );
  }
}
