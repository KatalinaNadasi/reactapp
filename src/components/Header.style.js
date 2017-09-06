import styled, {keyframes} from 'styled-components';


export const slide = keyframes`
	from { transform: translateY(0px);}
	to { transform: translateY(-285px);}
`;
export const Circle = styled.div`
  margin-bottom: 250px;
  animation: ${slide} 5s forwards;
`;
export const CircleTop = styled.div`
  margin-top: 460px;
  min-height: 590px;
  background-color: #FE4365;
  border-radius: 999px 999px 0 0;
  width: auto;
 `
 export const CircleTitle = styled.h1`
   font-family: 'Abril Fatface', cursive;
   font-size: 10rem;
   padding: 100px 197px 0 263px;
   color: mistyrose;
    height: 150px;
 `
 /* The typing effect */
 export const typing = keyframes`
   from { width: 0;}
   to { width: 33%;}
 `;
 /* The typewriter cursor effect */
 export const blinkCaret = keyframes`
   from, to { border-color: transparent;}
   50% { border-color: orange;}
 `
 export const CircleSub = styled.p`
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
 export const CircleBottom = styled.div`
   height: 590px;
   width: auto;
   background: rgba(165, 26, 65, 0.1);
   border-radius: 0 0 999px 999px;
 `
 /* Bubble jump */
 export const jump = keyframes`
  0% { margin-top: 60px;}
  10% { margin-top: -5%;}
 `

 export const BubbleP = styled.p`
  position: absolute;
  left: 22%;
  top: 42%;
  color: white;
  font-size: 1.7rem;
 `

 export const BubblePmin = styled.p `
  position: absolute;
  left: 18%;
  top: 42%;
  color: white;
  font-size: 1.2rem;
 `

 export const Bubble1 = styled.div`
  position: absolute;
  left: 69%;
  top: 62%;
  animation: ${jump} 25s infinite linear;
  animation-iteration-count: 2;
 `
 export const Bubble2 = styled.div`
  position: absolute;
  left: 24%;
  top: 69%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble3 = styled.div`
   position: absolute;
   left: 36%;
   top: 82%;
   animation: ${jump} 25s linear;
   animation-iteration-count: 2;
 `

 export const Bubble4 = styled.div`
  position: absolute;
  left: 53%;
  top: 78%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble5 = styled.div`
  position: absolute;
  left: 85%;
  top: 57%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `
 export const Bubble6 = styled.div`
  position: absolute;
  left: 39%;
  top: 62%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble7 = styled.div`
  position: absolute;
  left: 35%;
  top: 55%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble8 = styled.div`
  position: absolute;
  left: 51%;
  top: 94%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble9 = styled.div`
  position: absolute;
  left: 67%;
  top: 69%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble10 = styled.div`
  position: absolute;
  left: 10%;
  top: 62%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble11 = styled.div`
  position: absolute;
  left: 50%;
  top: 56%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble12 = styled.div`
  position: absolute;
  left: 92%;
  top: 64%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble13 = styled.div`
  position: absolute;
  left: 75%;
  top: 86%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble14 = styled.div`
  position: absolute;
  left: 69%;
  top: 53%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `

 export const Bubble15 = styled.div`
  position: absolute;
  left: 24%;
  top: 83%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `
 export const Bubble16 = styled.div`
  position: absolute;
  left: 13%;
  top: 75%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `
 export const Bubble17 = styled.div`
  position: absolute;
  left: 20%;
  top: 57%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `
 export const Bubble18 = styled.div`
  position: absolute;
  left: 45%;
  top: 78%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `
 export const Bubble19 = styled.div`
  position: absolute;
  left: 14%;
  top: 55%;
  animation: ${jump} 25s linear;
  animation-iteration-count: 2;
 `
 export const Bubble20 = styled.div`
   position: absolute;
   left: 12%;
   top: 60%;
   animation: ${jump} 25s linear;
   animation-iteration-count: 2;
 `
