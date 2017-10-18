import styled, {keyframes, css} from 'styled-components';
import {pink, darkcreme, Retro, blue} from '../variables.js';
import { CircleTop, CircleBottom } from './Header.style';
import { CircleSub } from './Header.style';


export const Wrapper = styled.div `
	margin: 0;
	width: 100%;
	text-align: center;
	position: relative;
	margin-top: 200px;
`

export const CircleTopBlue = CircleTop.extend `
  background-color: ${blue};
  text-align: center;
  margin-top: 90px;
`
export const CircleBottomBlue = CircleBottom.extend `
  background-color: rgba(0, 159, 160, 0.2);
	margin-bottom: 100px;
`

export const Intro = styled.p `
	font-family: 'Nixie One', cursive;
	font-size: 2rem;
`

export const Title = Retro.extend `
	color: ${darkcreme};
	font-size: 7rem;
	text-align: center;
	padding-top: 200px;
`
