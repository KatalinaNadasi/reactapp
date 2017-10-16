import React, {Component} from 'react';
import styled from 'styled-components';
import {blue, darkcreme} from '../variables.js';
import {withRouter} from 'react-router-dom';
import '../index.css';

export const Wrapper = styled.div `
  width: 100%;
  height: auto;
  background-color: ${blue};
  color: ${darkcreme};
  border: 8px solid ${darkcreme};
  text-align: center;
  padding: 25px 0;
  display: block;
`

export const Contact = styled.div `
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin: 0 -6px;
`

const LeftCol = styled.ul `
  float: left;
  width: 300px;
  padding: 0 6px;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 250px;
  }
`

export const RightCol = LeftCol.extend `
  float: right;
  width: 300px;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 250px;
  }
`

export const Border = styled.li `
  padding: 5px;
  border-bottom: 2px solid ${darkcreme};

  &:first-child{
    border-top: 2px solid ${darkcreme};
  }
  @media screen and (max-width: 768px){
    border: none;
    &:first-child{
      border: none;
    }
  }

`
const ContactBtn = withRouter(({history}) => (
  <button type='button' className="contact-btn"
    onClick={() => { history.push('/contact') }}>
    <svg version="1.1" id="contact-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="68px" height="70px" viewBox="25.245 174.233 63 75" enableBackground="new 23.245 177.233 68 70" xmlSpace="preserve">
        <g id="contact">
          <ellipse id="contact" fill="#F3F3ED" stroke="#FF3D68" strokeMiterlimit="10" strokeWidth="3.04" cx="58.245" cy="212.233" rx="34" ry="35"/>
          <text transform="matrix(1 0 0 1 35.9895 207.3413)">
            <tspan x="-6" y="18" fontSize="41">C</tspan>
            <tspan x="5" y="4" fontFamily="'OCRAStd'" fontSize="10">ontact</tspan>
            <tspan x="17.132" y="11" fontFamily="'OCRAStd'" fontSize="10">me</tspan>
          </text>
        </g>
    </svg>
  </button>
))



function GithubIcon(props){
  return(
      <svg version="1.1" id="github-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="68px" height="70px" viewBox="25.245 174.233 63 75" enableBackground="new 23.245 177.233 68 70" xmlSpace="preserve" {...props}>
        <a href="https://github.com/KatalinaNadasi" target="_blank">
          <g id="github">
            <ellipse id="github-circle" fill="#F3F3ED" stroke="#FF3D68" strokeMiterlimit="10" strokeWidth="3.04" cx="57.245" cy="212.233" rx="34" ry="35"/>
            <title id="simpleicons-github-icon">GitHub icon</title>
              <path d="M57.244,184.445c-15.509,0-28.07,12.424-28.07,27.746c0,12.26,8.042,22.659,19.192,26.324
		            c1.404,0.262,1.919-0.597,1.919-1.335c0-0.657-0.022-2.404-0.035-4.716c-7.809,1.674-9.455-3.722-9.455-3.722
		            c-1.275-3.202-3.123-4.057-3.123-4.057c-2.543-1.72,0.196-1.687,0.196-1.687c2.819,0.194,4.3,2.858,4.3,2.858
		            c2.503,4.244,6.57,3.018,8.175,2.308c0.254-1.794,0.978-3.018,1.778-3.711c-6.233-0.693-12.786-3.079-12.786-13.71
		            c0-3.03,1.088-5.505,2.891-7.447c-0.315-0.7-1.265-3.521,0.245-7.343c0,0,2.352-0.745,7.72,2.843
		            c2.246-0.617,4.632-0.922,7.018-0.935c2.387,0.014,4.772,0.319,7.02,0.935c5.333-3.587,7.685-2.843,7.685-2.843
		            c1.509,3.822,0.562,6.643,0.28,7.343c1.79,1.942,2.877,4.417,2.877,7.447c0,10.659-6.562,13.005-12.808,13.687
		            c0.981,0.833,1.896,2.534,1.896,5.132c0,3.714-0.035,6.696-0.035,7.598c0,0.728,0.491,1.596,1.93,1.318
		            c11.23-3.639,19.268-14.043,19.268-26.287C85.314,196.869,72.745,184.445,57.244,184.445"/>
        </g>
      </a>
    </svg>
  )
}

function LinkedinIcon(props){
  return(
    <svg version="1.1" id="linkedin-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	   width="68px" height="69px" viewBox="109.679 179.445 68 70" enableBackground="new 107.679 177.445 68 70" xmlSpace="preserve" {...props}>
    <title  id="simpleicons-linkedin-icon">LinkedIn icon</title>
    <a href="https://www.linkedin.com/in/katalina-nadasi-5679b528/" target="_blank">
      <g id="linked">
        <ellipse fill="#F3F3ED" stroke="#FF3D68" strokeMiterlimit="10" strokeWidth="3.04" cx="143.21" cy="214.723" rx="31.469" ry="32.723"/>
          <path d="M159.62,227.45h-6.378v-9.746c0-2.325-0.049-5.316-3.323-5.316c-3.327,0-3.834,2.529-3.834,5.146v9.918h-6.381v-20.043
        	h6.128v2.73h0.082c0.856-1.575,2.938-3.238,6.051-3.238c6.463,0,7.657,4.147,7.657,9.548v11.002L159.62,227.45L159.62,227.45z
        	 M132.501,204.664c-2.054,0-3.703-1.62-3.703-3.615c0-1.991,1.649-3.609,3.703-3.609c2.045,0,3.703,1.618,3.703,3.609
        	C136.204,203.043,134.545,204.664,132.501,204.664z M135.698,227.45h-6.396v-20.043h6.396V227.45z"/>
      </g>
    </a>
  </svg>
  )
}




export default class Footer extends Component {
  render(){
    return(
      <Wrapper>
        <Contact>
          <LeftCol>
            <Border>katalina.nadasi@gmail.com</Border>
            <Border>katalinanadasi.com</Border>
          </LeftCol>
          <RightCol>
            <Border>&copy; Katalina Nadasi 2017</Border>
            <Border>Design and Development</Border>
          </RightCol>
          <RightCol>
            <LinkedinIcon/>
            <GithubIcon/>
            <ContactBtn/>
          </RightCol>
        </Contact>

      </Wrapper>
    );
  }

}
