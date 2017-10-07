import styled, {keyframes, css} from 'styled-components';
import {pink, creme} from '../variables.js';


export const slide = keyframes`
	from { transform: translateY(0px);}
	to { transform: translateY(-285px);}
`;
export const Circle = styled.div`
  animation: ${slide} 5s forwards;
`;

export const CircleTop = styled.div`
	margin-top: 460px;
	height: 630px;
	width: auto;
	background: ${pink};
	border-radius: 999px 999px 0 0;

	@media (max-width: 376px) {
		margin-top: 365px;
	}
	@media (max-width: 450px) {
		border-radius: 300px 300px 0 0;
    height: 250px;
		margin-top: 365px;
	}
	@media (min-width: 450px) and (max-width: 768px) {
		border-radius: 500px 500px 0 0;
    height: 370px;
	}
	@media (min-width: 768px) and (max-width: 992px) {
		border-radius: 650px 650px 0 0;
		height: 450px;
	}
	@media (min-width: 992px) and (max-width: 1150px) {
		border-radius: 930px 930px 0 0;
		height: 520px;
	}
`;

 export const CircleTitle = styled.h1`
   font-family: 'Abril Fatface', cursive;
   font-size: 9rem;
   padding: 100px 209px 0 263px;
   color: ${creme};
   height: 150px;

	 @media (max-width: 450px) {
		 font-size: 3rem;
     padding: 60px 0 0 0;
	 }
	 @media (min-width: 450px) and (max-width: 768px) {
		 font-size: 6rem;
	   padding: 100px 4px 0 20px;
	 }
	 @media (min-width: 768px) and (max-width: 992px) {
		 font-size: 7rem;
	   padding: 100px 88px 0 122px;
	 }
	 @media (min-width: 992px) and (max-width: 1150px) {
		 font-size: 8rem;
	   padding: 100px 220px 0 240px;
	 }
 `;

 export const CircleTitle2 = CircleTitle.extend `
 @media (max-width: 450px) {
	 font-size: 3rem;
	 transform: translateY(-92px);
 }
 @media (min-width: 450px) and (max-width: 768px) {
	 padding-top: 40px;
 }
 @media (min-width: 768px) and (max-width: 992px) {
	padding-top: 70px;
 }
 `

 export const Black = styled.span`
 	color: black;
 `

 /* The typing effect */
 export const typing = keyframes`
   from { width: 0;}
   to { width: 30%;}
 `
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

	 @media (max-width: 450px) {
		 margin: -130px 13px 0 0;
     font-size: 1rem;
     height: 38px;
	 }
	 @media (min-width: 450px) and (max-width: 768px){
		 margin: 0px 30px 0 0;
		 font-size: 1.3rem;
		 height: 43px;
	 }
	 @media (min-width: 768px) and (max-width: 992px){
		 margin: 50px 30px 0 0;
		 font-size: 1.7rem;
		 height: 48px;
	 }
 `
 export const CircleBottom = styled.div`
   height: 630px;
   width: auto;
   background: rgba(165, 26, 65, 0.1);
   border-radius: 0 0 999px 999px;

	 @media (max-width: 450px) {
			height: 250px;
			border-radius: 0 0 300px 300px;
	 }
	 @media (min-width: 450px) and (max-width: 768px) {
		 border-radius: 0 0 500px 500px;
		 height: 370px;
	 }
	 @media (min-width: 768px) and (max-width: 992px) {
		 border-radius: 0 0 650px 650px;
		 height: 450px;
	 }
	 @media (min-width: 992px) and (max-width: 1150px) {
		 border-radius: 0 0 930px 930px;
		 height: 520px;
	 }
 `

 export const Ellipse = styled.ellipse`
   fill: ${props => props.pink ? 'crimson' : '#000'};
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
	left: 20%;
	top: 39%;
  color: white;
  font-size: 1.3rem;

	@media (max-width: 450px){
		font-size: 0.7em;
		top: 30%;
		left: 8%;
	}
	@media (min-width: 450px) and (max-width: 768px) {
		font-size: 1rem;
		left: 4%;
		top: 22%;
	}
	@media (min-width: 768px) and (max-width: 992px) {
		font-size: 1.2rem;
	}
 `

 export const BubblePmin = styled.p `
  position: absolute;
	left: 23%;
	top: 32%;
  color: white;
  font-size: 1.2rem;

	@media(max-width: 450px){
		left: 9%;
    top: 41%;
		font-size: 0.7rem;
	}
	@media(min-width: 450px) and (max-width: 768px){
		left: 6%;
    top: 22%;
	}
	@media (min-width: 768px) and (max-width: 992px) {
		font-size: 1rem;
	}
 `

 export const BubblePxSmall = styled.p `
	position: absolute;
 	left: 10%;
 	top: 32%;
	color: white;
	font-size: 1rem;

	@media(max-width: 768px){
		left: 6%;
    top: 33%;
	}
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
	 	left: -13px;
	 	position: absolute;
	 	width: 180px;
	 	top: -14px;

		@media(max-width: 450px){
			height: 83px;
			width: 92px;
		}
	 }
	${({hide}) => hide && css`
		animation: none;
	`}
	@media(max-width: 450px){
		left: 61%;
		top: 67%;
	}
 `
 export const Bubble2 = styled.div`
  position: absolute;
	left: 26%;
	top: 59%;
	animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	animation-delay: 0.2s;
	display: block;

	&:after {
		background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
  	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  	border-radius: 50%;
  	box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
  	content: "";
  	height: 185px;
  	left: -13px;
  	position: absolute;
  	width: 180px;
  	top: -14px;
		@media(max-width: 450px){
			height: 83px;
			width: 92px;
		}
	 }

	${({hide}) => hide && css`
	 animation: none;
	`}
	@media(max-width: 450px){
		left: 17%;
		top: 57%;
	}
 `;

 export const Bubble3 = styled.div`
   position: absolute;
	 left: 34%;
	 top: 76%;
	 animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	 animation-delay: 0.4s;
	 display: block;

	 &:after {
		 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
		 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
		 border-radius: 50%;
		 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
		 content: "";
		 height: 185px;
		 left: -13px;
		 position: absolute;
		 width: 180px;
		 top: -14px;

		 @media(max-width: 450px){
			 height: 83px;
			 width: 92px;
		 }
 	 }

		${({hide}) => hide && css`
			animation: none;
		`}
		@media(max-width: 450px){
			 top: 82%;
		}
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
 	 left: -13px;
 	 position: absolute;
 	 width: 180px;
 	 top: -14px;

	 	@media(max-width: 450px){
			height: 83px;
		 	width: 92px;
	 	}
	 }

	 ${({hide}) => hide && css`
		 animation: none;
	 `}
	 @media(max-width: 450px){
		 left: 68%;
	 }
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
		animation: none;
	 `}

	 @media(max-width: 450px){
		 left: 72%;
     top: 51%;
	 }
	 @media(min-width: 450px) and (max-width: 768px){
		 left: 78%;
     top: 51%;
	 }
 `
 export const Bubble6 = styled.div`
  position: absolute;
	left: 40%;
	top: 52%;
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
		 animation: none;
	 `}
 `

 export const Bubble7 = styled.div`
  position: absolute;
  left: 35%;
  top: 55%;

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

	@media(max-width: 450px){
		display: none;
	}
 `

 export const Bubble8 = styled.div`
  position: absolute;
  left: 51%;
  top: 94%;

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

	@media(max-width: 450px){
		display: none;
	}
 `

 export const Bubble9 = styled.div`
  position: absolute;
  left: 67%;
  top: 69%;

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

	@media(max-width: 450px){
		display: none;
	}
 `

 export const Bubble10 = styled.div`
  position: absolute;
	left: 52%;
  top: 72%;

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
	@media(max-width: 450px){
		display: none;
	}
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
 	 left: -13px;
 	 position: absolute;
 	 width: 180px;
 	 top: -14px;

	 	@media(max-width: 450px){
		 	height: 83px;
			width: 92px;
	 	}
	 }

	 ${({hide}) => hide && css`
		 animation: none;
	 `}

	 @media(max-width: 450px){
		 top: 75%;
		 left: 49%;
	 }
 `

 export const Bubble12 = styled.div`
  position: absolute;
  left: 92%;
  top: 64%;

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

	 @media(max-width: 450px){
		 display: none;
	 }
 `

 export const Bubble13 = styled.div`
  position: absolute;
  left: 75%;
  top: 86%;

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

	 @media(max-width: 500px){
		 display: none;
	 }
 `

 export const Bubble14 = styled.div`
  position: absolute;
  left: 69%;
  top: 53%;

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

	 @media(max-width: 450px){
		 display: none;
	 }
 `

 export const Bubble15 = styled.div`
  position: absolute;
	left: 24%;
	top: 75%;
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
		 animation: none;
	 `}

	@media(max-width: 450px){
		left: 14%;
		top: 68%;
	}
	 @media(min-width: 450px) and (max-width: 768px){
		 left: 17%;
		 top: 69%;
	 }
 `
 export const Bubble16 = styled.div`
  position: absolute;
  left: 13%;
  top: 75%;

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

	 @media(max-width: 450px){
		 display: none;
	 }
 `
 export const Bubble17 = styled.div`
  position: absolute;
	left: 6%;
  top: 53%;

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

	 @media(max-width: 450px){
		 display: none;
	 }
 `
 export const Bubble18 = styled.div`
  position: absolute;
	left: 50%;
	top: 72%;

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

	 @media(max-width: 450px){
		 display: none;
	 }
 `
 export const Bubble19 = styled.div`
  position: absolute;
	left: 26%;
	top: 87%;

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
	@media(max-width: 500px){
		display: none;
	}
 `
 export const Bubble20 = styled.div`
   position: absolute;
	 left: 6%;
	 top: 55%;
	 animation: ${jump} 25s linear, ${sideWays} 2s ease-in-out backwards;
	 animation-delay: 3.8s;
	 display: block;

	 &:after {
		 background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 40%);
   	 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
   	 border-radius: 50%;
   	 box-shadow: inset 0 20px 30px rgba (255,255,255,0.3);
   	 content: "";
   	 height: 185px;
   	 left: -13px;
   	 position: absolute;
   	 width: 180px;
   	 top: -14px;

		 @media(max-width: 450px){
			 height: 83px;
		    width: 92px;
		 }
 	 }

		${({hide}) => hide && css`
			animation: none;
		`}

		@media(max-width: 450px){
			left: 1%;
    	top: 52%;
		}
 `
