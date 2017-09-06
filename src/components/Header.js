import React from 'react';
import '../index.css';
import styled, {keyframes} from 'styled-components';
import Wrapper from '../components/Wrapper';
// import TransitionGroup from 'react-addons-transition-group';

const slide = keyframes`
	from { transform: translateY(0px);}
	to { transform: translateY(-285px);}
`;
const Circle = styled.div`
  margin-bottom: 250px;
  animation: ${slide} 5s forwards;
`;
const CircleTop = styled.div`
  margin-top: 460px;
  min-height: 590px;
  background-color: #FE4365;
  border-radius: 999px 999px 0 0;
  width: auto;
 `
 const CircleTitle = styled.h1`
   font-family: 'Abril Fatface', cursive;
   font-size: 10rem;
   padding: 100px 197px 0 263px;
   color: mistyrose;
    height: 150px;
 `
 /* The typing effect */
 const typing = keyframes`
   from { width: 0;}
   to { width: 33%;}
 `;
 /* The typewriter cursor effect */
 const blinkCaret = keyframes`
   from, to { border-color: transparent;}
   50% { border-color: orange;}
 `
 const CircleSub = styled.p`
   font-family: 'Nixie One', cursive;
   padding-top: 20px;
   height: 54px;
   margin: 120px 30px 0 0;
   font-size: 2rem;
   color: black;
   float: right;
   overflow: hidden;
   border-right: .10em solid orange;
   white-space: nowrap;
   letter-spacing: 0em;
   animation:
   ${typing} 3.5s steps(30, end),
   ${blinkCaret} 5.5s step-end infinite;
 `
 const CircleBottom = styled.div`
   height: 590px;
   width: auto;
   background: rgba(165, 26, 65, 0.1);
   border-radius: 0 0 999px 999px;
 `
 /* Bubble jump */
 const jump = keyframes`
 0% { margin-top: 60px;}
 10% { margin-top: -10%;}
 `
 const Bubble1 = styled.div`
  position: absolute;
  left: 69%;
  top: 62%;
  animation: ${jump} 25s linear;
 `
 const BubbleP = styled.p`
  position: absolute;
  left: 23%;
  top: 42%;
  color: white;
  font-size: 1.7rem;
 `

 const Bubble2 = styled.div`
  position: absolute;
  left: 20%;
  top: 69%;
  animation: ${jump} 25s linear;
 `

 const Bubble3 = styled.div`
   position: absolute;
   left: 40%;
   top: 93%;
   animation: ${jump} 25s linear;
 `

 const Bubble4 = styled.div`
  position: absolute;
  left: 60%;
  top: 87%;
  animation: ${jump} 25s linear;
 `

 const Bubble5 = styled.div`
  position: absolute;
  left: 85%;
  top: 57%;
  animation: ${jump} 25s linear;
 `
 const Bubble6 = styled.div`
  position: absolute;
  left: 40%;
  top: 74%;
  animation: ${jump} 25s linear;
 `

 const Bubble7 = styled.div`
  position: absolute;
  left: 35%;
  top: 55%;
  animation: ${jump} 25s linear;
 `

 const Bubble8 = styled.div`
  position: absolute;
  left: 51%;
  top: 94%;
  animation: ${jump} 25s linear;
 `

 const Bubble9 = styled.div`
  position: absolute;
  left: 67%;
  top: 69%;
  animation: ${jump} 25s linear;
 `

 const Bubble10 = styled.div`
  position: absolute;
  left: 10%;
  top: 62%;
  animation: ${jump} 25s linear;
 `

 const Bubble11 = styled.div`
  position: absolute;
  left: 50%;
  top: 65%;
  animation: ${jump} 25s linear;
 `

 const Bubble12 = styled.div`
  position: absolute;
  left: 92%;
  top: 64%;
  animation: ${jump} 25s linear;
 `

 const Bubble13 = styled.div`
  position: absolute;
  left: 75%;
  top: 86%;
  animation: ${jump} 25s linear;
 `

 const Bubble14 = styled.div`
  position: absolute;
  left: 69%;
  top: 53%;
  animation: ${jump} 25s linear;
 `

 const Bubble15 = styled.div`
  position: absolute;
  left: 24%;
  top: 85%;
  animation: ${jump} 25s linear;
 `
 const Bubble16 = styled.div`
  position: absolute;
  left: 13%;
  top: 75%;
  animation: ${jump} 25s linear;
 `
 const Bubble17 = styled.div`
  position: absolute;
  left: 20%;
  top: 57%;
  animation: ${jump} 25s linear;
 `
 const Bubble18 = styled.div`
  position: absolute;
  left: 45%;
  top: 78%;
  animation: ${jump} 25s linear;
 `
 const Bubble19 = styled.div`
  position: absolute;
  left: 14%;
  top: 55%;
  animation: ${jump} 25s linear;
 `

export default class Header extends React.Component {

  render(){

    return(
      <Wrapper>
        <Circle>
          <CircleTop>
            <CircleTitle>Katal<span className="black">i</span>na</CircleTitle>
            <CircleTitle>Na<span className="black">d</span>asi</CircleTitle>
            <CircleSub>Développeur Front-End</CircleSub>
          </CircleTop>
          <CircleBottom>
            <Bubble1>
              <svg height="200" width="200">
                <ellipse className="bubble-pink" cx="100" cy="100" rx="90" ry="90" />
              </svg>
              <BubbleP>Animations</BubbleP>
            </Bubble1>
            <Bubble2>
              <svg height="160" width="160">
                <ellipse className="bubble-black" cx="80" cy="80" rx="70" ry="70" />
              </svg>
              <BubbleP>HTML5 / CSS3</BubbleP>
            </Bubble2>
            <Bubble3>
              <svg height="140" width="140">
                <ellipse className="bubble-pink" cx="70" cy="70" rx="60" ry="60" />
              </svg>
              <BubbleP>Responsive</BubbleP>
            </Bubble3>
            <Bubble4>
              <svg height="200" width="200">
                <ellipse className="bubble-black" cx="100" cy="100" rx="100" ry="100" />
              </svg>
              <BubbleP>React</BubbleP>
            </Bubble4>
            <Bubble5>
              <svg height="80" width="80">
                <ellipse className="bubble-black" cx="40" cy="40" rx="40" ry="40" />
              </svg>
              <BubbleP>SVG animations</BubbleP>
            </Bubble5>
            <Bubble6>
              <svg height="100" width="100">
                <ellipse className="bubble-pink" cx="50" cy="50" rx="50" ry="50" />
              </svg>
              <BubbleP>Github</BubbleP>
            </Bubble6>
            <Bubble7>
              <svg height="40" width="40">
                <ellipse className="bubble-black" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble7>
            <Bubble8>
              <svg height="40" width="40">
                <ellipse className="bubble-black" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble8>
            <Bubble9>
              <svg height="40" width="40">
                <ellipse className="bubble-pink" cx="20" cy="20" rx="20" ry="20" />
              </svg>
              <BubbleP>Bootstrap</BubbleP>
            </Bubble9>
            <Bubble10>
              <svg height="40" width="40">
                <ellipse className="bubble-pink" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble10>
            <Bubble11>
              <svg height="200" width="200">
                <ellipse className="bubble-black" cx="100" cy="100" rx="100" ry="100" />
              </svg>
              <BubbleP>Javascript / JQUERY</BubbleP>
            </Bubble11>
            <Bubble12>
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble12>
            <Bubble13>
              <svg height="20" width="20">
                <ellipse className="bubble-black" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble13>
            <Bubble14>
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble14>
            <Bubble15>
              <svg height="120" width="120">
                <ellipse className="bubble-black" cx="60" cy="60" rx="60" ry="60" />
              </svg>
              <BubbleP>Webpack</BubbleP>
            </Bubble15>
            <Bubble16>
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble16>
            <Bubble17>
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble17>
            <Bubble18>
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble18>
            <Bubble19>
              <svg height="40" width="40">
                <ellipse className="bubble-black" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble19>
          </CircleBottom>
        </Circle>
      </Wrapper>
    )
  }
}
