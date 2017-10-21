import styled from 'styled-components';
import { darkcreme, Retro, blue } from '../variables.js';
import { CircleTop, CircleBottom } from './Header.style';


export const Wrapper = styled.div `
	margin: 0;
	width: 100%;
	text-align: center;
	position: relative;
	margin-top: 80px;

	@media(max-width: 768px){
		margin-top: 0px;
	}
`

export const CircleTopBlue = CircleTop.extend `
  background-color: ${blue};
  text-align: center;
  margin-top: 90px;

	@media(max-width: 768px){
		margin-top: 80px;
	}
`
export const CircleBottomBlue = CircleBottom.extend `
  background-color: rgba(0, 159, 160, 0.2);
	margin-bottom: 0px;
`

export const Intro = styled.p `
	font-family: 'Nixie One', cursive;
	font-size: 2rem;

	@media(max-width: 451px){
		font-size: 1.3rem;
		margin-top: 100px;
	}
	@media (min-width: 452px) and (max-width: 768px){
		margin-top: 150px;
		font-size: 1.7rem;
	}
`

export const Title = Retro.extend `
	color: ${darkcreme};
	font-size: 7rem;
	text-align: center;
	padding-top: 200px;

	@media(max-width: 451px){
		font-size:3rem;
		padding-top: 50px;
	}
	@media (min-width: 452px) and (max-width: 768px){
		font-size: 5rem;
		padding-top: 85px;
	}
`

export const ContactP = styled.p `
	font-family: 'Lato';
	color: #e96e66;
	font-size: 1.3rem;
	width: 81%;
	margin: 26px 160px;
	text-align: justify;
	line-height: 24px;
	padding: 10px 80px;


	@media (max-width: 600px){
		margin: 10px auto;
		line-height: 11px;
		width: 100%;
		font-size: 0.7rem;
	}
	@media (min-width: 600px) and (max-width: 768px){
		margin: 8px 20px;
		width: 95%;
		font-size: 1rem;
		line-height: 22px;
	}
	@media (min-width: 768px) and (max-width: 1120px){
		margin: 26px 80px;
	}
	@media (min-width: 1120px) and (max-width: 1200){
		padding: 10px 140px;
	}
	@media (min-width: 1200px){
		padding: 10px 255px;
	}
`

export const Mountains = styled.div `
	img {
		height: 66vh;
		transform: translate(1px, 29px);
		opacity: 0.4;

		@media (max-width: 451px){
			height: 24vh;
		}
		@media (min-width: 452px ) and (max-width: 768px){
			height: 50vh;
		}
	}
`;
