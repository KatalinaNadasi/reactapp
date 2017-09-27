import React, {Component} from 'react';
import styled from 'styled-components';
import {blue, darkcreme} from '../variables.js';

export const Wrapper = styled.div `
  width: 100%;
  height: 150px;
  background-color: ${blue};
  color: ${darkcreme};
  border: 8px solid ${darkcreme};
  padding: 25px 290px;
`

export const Contact = styled.div `
  width: 900px;
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
`

export const RightCol = LeftCol.extend `
  float: right;
  width: 300px;
`

export const Border = styled.li `
  padding: 5px;
  border-bottom: 2px solid ${darkcreme};

  &:first-child{
    border-top: 2px solid ${darkcreme};
  }
`

export function IconSocials(props){
  return(
    <svg version="1.1" id="socials" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="300px" height="72px" viewBox="21.316 180.445 248.824 70" enableBackground="new 17.316 177.445 248.824 70"
      xmlSpace="preserve" {...props}>
    <title  id="simpleicons-linkedin-icon">LinkedIn icon</title>
    <g id="contact">
      <ellipse id="contact" fill="#F3F3ED" stroke="#FF3D68" strokeMiterlimit="10" strokeWidth="3.04" cx="232.14" cy="213.445" rx="30" ry="30"/>
        <text transform="matrix(1 0 0 1 210.9895 210.3413)">
          <tspan x="-6" y="18" fontSize="41">C</tspan>
          <tspan x="5" y="4" fontFamily="'OCRAStd'" fontSize="10">ontact</tspan>
          <tspan x="17.132" y="11" fontFamily="'OCRAStd'" fontSize="10">me</tspan>
        </text>
    </g>
    <g id="github">
      <ellipse fill="#F3F3ED" stroke="#FF3D68" strokeMiterlimit="10" strokeWidth="3.04" cx="51.316" cy="213.445" rx="29" ry="28"/>
        <title id="simpleicons-github-icon">GitHub icon</title>
        <path id="github" d="M51.315,186.175c-15.509,0-28.07,12.062-28.07,26.938c0,11.903,8.042,21.999,19.192,25.557
        c1.404,0.254,1.919-0.579,1.919-1.295c0-0.64-0.023-2.335-0.035-4.579c-7.809,1.625-9.455-3.614-9.455-3.614
        c-1.276-3.108-3.123-3.938-3.123-3.938c-2.543-1.67,0.196-1.638,0.196-1.638c2.819,0.188,4.3,2.774,4.3,2.774
        c2.503,4.119,6.57,2.93,8.175,2.24c0.253-1.741,0.977-2.93,1.778-3.604c-6.234-0.674-12.786-2.989-12.786-13.312
        c0-2.94,1.088-5.344,2.89-7.229c-0.315-0.68-1.264-3.418,0.245-7.129c0,0,2.352-0.723,7.72,2.761
        c2.246-0.599,4.632-0.896,7.018-0.908c2.386,0.014,4.772,0.311,7.019,0.908c5.333-3.482,7.685-2.761,7.685-2.761
        c1.509,3.711,0.561,6.449,0.28,7.129c1.79,1.886,2.877,4.288,2.877,7.229c0,10.349-6.562,12.627-12.808,13.289
        c0.982,0.809,1.896,2.46,1.896,4.982c0,3.605-0.035,6.501-0.035,7.376c0,0.707,0.491,1.549,1.93,1.28
        c11.23-3.533,19.267-13.635,19.267-25.521C79.385,198.235,66.816,186.175,51.315,186.175"/>
    </g>
    <g id="linked">
      <ellipse fill="#F3F3ED" stroke="#FF3D68" strokeMiterlimit="10" strokeWidth="3.04" cx="141.679" cy="213.445" rx="30" ry="30"/>
      <path d="M156.84,227.239h-6.378v-9.746c0-2.325-0.049-5.316-3.324-5.316c-3.327,0-3.834,2.529-3.834,5.145v9.918h-6.38v-20.043
        h6.128v2.731h0.082c0.856-1.575,2.938-3.238,6.05-3.238c6.463,0,7.658,4.147,7.658,9.548v11.002H156.84z M129.72,204.453
        c-2.053,0-3.703-1.62-3.703-3.615c0-1.991,1.65-3.609,3.703-3.609c2.045,0,3.704,1.618,3.704,3.609
        C133.424,202.833,131.764,204.453,129.72,204.453z M132.918,227.239h-6.397v-20.043h6.397V227.239z"/>
    </g>
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
            <IconSocials></IconSocials>
          </RightCol>
        </Contact>

      </Wrapper>
    );
  }

}
