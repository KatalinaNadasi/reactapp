import styled, {keyframes, css} from 'styled-components';
import {pink} from '../variables.js';

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
	height: 590px;
	width: auto;
	background: ${pink};
	border-radius: 999px 999px 0 0;
`

 export const CircleTitle = styled.h1`
   font-family: 'Abril Fatface', cursive;
   font-size: 10rem;
   padding: 100px 197px 0 263px;
   color: mistyrose;
   height: 150px;
 `

 export const Black = styled.span`
 	color: black;
 `

 /* The typing effect */
 export const typing = keyframes`
   from { width: 0;}
   to { width: 30%;}
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

 export const Ellipse = styled.ellipse`
   fill: ${props => props.pink ? '#FE4365' : '#000'};
 `

 /* Bubble jump */
 export const jump = keyframes`
  0% { margin-top: 40px;}
  3% { margin-top: -2%;}
 `

 export const sideWays = keyframes`
  0% { margin-left:0px;}
  100% { margin-left:3px;}
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
	left: 14%;
	top: 32%;
  color: white;
  font-size: 1.2rem;
 `

 export const Bubble1 = styled.div`
  position: absolute;
  left: 69%;
  top: 62%;
	animation: ${jump} 25s linear backwards, ${sideWays} 25s ease-in-out backwards;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 185px;
	 left: 10px;
	 position: absolute;
	 width: 180px;
	 top: 9px;
	 }

	${({hide}) => hide && css`
		display: none;
	`}
 `
 export const Bubble2 = styled.div`
  position: absolute;
  left: 24%;
  top: 69%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 0.2s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	 content: "";
	 height: 135px;
	 left: 10px;
	 position: absolute;
 	 width: 139px;
	 top: 10px;
	 }

	${({hide}) => hide && css`
		display: none;
	`}
 `;

 export const Bubble3 = styled.div`
   position: absolute;
   left: 36%;
   top: 82%;
	 animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	 animation-delay: 0.4s;
	 display: block;

	 &:after {
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
		border-radius: 50%;
    box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
    content: "";
    height: 134px;
    left: 10px;
    position: absolute;
    width: 139px;
    top: 9px;
		}

		${({hide}) => hide && css`
			display: none;
		`}
 `

 export const Bubble4 = styled.div`
  position: absolute;
  left: 53%;
  top: 78%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 0.6s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 185px;
	 left: 10px;
	 position: absolute;
	 width: 180px;
	 top: 9px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble5 = styled.div`
  position: absolute;
  left: 85%;
  top: 57%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 0.8s;
	display: block;

	&:after {
	background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
  box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
  content: "";
  height: 100px;
  left: 0px;
  position: absolute;
  width: 100px;
  top: -0px;
	}

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `
 export const Bubble6 = styled.div`
  position: absolute;
  left: 39%;
  top: 62%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 1s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	 content: "";
	 height: 100px;
	 left: 0px;
	 position: absolute;
	 width: 100px;
	 top: 0px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble7 = styled.div`
  position: absolute;
  left: 35%;
  top: 55%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 1.2s;
	display: block;

	&:after {
	background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
	box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	content: "";
	height: 39px;
  left: 0px;
  width: 40px;
  top: 0px;
  position: absolute;
	}

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble8 = styled.div`
  position: absolute;
  left: 51%;
  top: 94%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 1.4s;
	display: block;

	&:after {
	background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
	box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	content: "";
	height: 39px;
  left: 0px;
  width: 40px;
  top: 0px;
  position: absolute;
	}

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble9 = styled.div`
  position: absolute;
  left: 67%;
  top: 69%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 1.6s;
	display: block;

	&:after {
	background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
	box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	content: "";
	height: 39px;
  left: 0px;
  width: 40px;
  top: 0px;
  position: absolute;
	}

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble10 = styled.div`
  position: absolute;
  left: 10%;
  top: 62%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 1.8s;
	display: block;

	&:after {
	background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
	box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	content: "";
	height: 39px;
  left: 0px;
  width: 40px;
  top: 0px;
  position: absolute;
	}

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble11 = styled.div`
  position: absolute;
  left: 50%;
  top: 56%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 2s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 185px;
	 left: 10px;
	 position: absolute;
	 width: 180px;
	 top: 9px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble12 = styled.div`
  position: absolute;
  left: 92%;
  top: 64%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 2.2s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 51px;
	 left: -15px;
	 position: absolute;
	 width: 50px;
	 top: -18px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble13 = styled.div`
  position: absolute;
  left: 75%;
  top: 86%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 2.4s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 51px;
	 left: -15px;
	 position: absolute;
	 width: 50px;
	 top: -18px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble14 = styled.div`
  position: absolute;
  left: 69%;
  top: 53%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 2.6s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 51px;
	 left: -15px;
	 position: absolute;
	 width: 50px;
	 top: -18px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `

 export const Bubble15 = styled.div`
  position: absolute;
  left: 24%;
  top: 83%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 2.8s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	 content: "";
	 height: 100px;
	 left: 0px;
	 position: absolute;
	 width: 100px;
	 top: 0px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `
 export const Bubble16 = styled.div`
  position: absolute;
  left: 13%;
  top: 75%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 3s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 51px;
	 left: -15px;
	 position: absolute;
	 width: 50px;
	 top: -18px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `
 export const Bubble17 = styled.div`
  position: absolute;
  left: 20%;
  top: 57%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 3.2s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 51px;
	 left: -15px;
	 position: absolute;
	 width: 50px;
	 top: -18px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `
 export const Bubble18 = styled.div`
  position: absolute;
  left: 45%;
  top: 78%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 3.4s;
	display: block;

	&:after {
	 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	 border-radius: 50%;
	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
	 content: "";
	 height: 51px;
	 left: -15px;
	 position: absolute;
	 width: 50px;
	 top: -18px;
	 }

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `
 export const Bubble19 = styled.div`
  position: absolute;
  left: 14%;
  top: 55%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 3.6s;
	display: block;

	&:after {
	background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	border-radius: 50%;
	box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
	content: "";
	height: 39px;
  left: 0px;
  width: 40px;
  top: 0px;
  position: absolute;
	}

	 ${({hide}) => hide && css`
		 display: none;
	 `}
 `
 export const Bubble20 = styled.div`
   position: absolute;
   left: 12%;
   top: 60%;
	 animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	 animation-delay: 3.8s;
	 display: block;

	 &:after {
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
		border-radius: 50%;
    box-shadow: inset 0 20px 30px rgba(255,255,255,0.3);
    content: "";
    height: 134px;
    left: 10px;
    position: absolute;
    width: 139px;
    top: 9px;
		}

		${({hide}) => hide && css`
			display: none;
		`}
 `
