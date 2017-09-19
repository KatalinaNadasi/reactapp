import React from 'react';
import '../index.css';
import Wrapper from './Wrapper';
import {
  Circle, CircleTop, CircleTitle, Black, CircleSub, CircleBottom, Ellipse, BubbleP, BubblePmin, Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, Bubble6, Bubble7, Bubble8, Bubble9, Bubble10, Bubble11, Bubble12, Bubble13, Bubble14, Bubble15, Bubble16, Bubble17, Bubble18, Bubble19, Bubble20
} from './Header.style';
import WhenInView from './WhenInView';


export default class Header extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     onShow : false,
  //     opacity: 0,
  //   }
  // }
  //
  //
  // onShow(){
  //       this.setState({
  //         opacity: this.state.opacity === 0 ? 1 : 0
  //       })
  //
  //   }


  render(){

    return(
      <Wrapper>
        <Circle>
          <CircleTop>
            <CircleTitle>Katal<Black>i</Black>na</CircleTitle>
            <CircleTitle>Na<Black>d</Black>asi</CircleTitle>
            <CircleSub>Front-End Developer</CircleSub>
          </CircleTop>
          <CircleBottom>
          <div className="bubbles">
            <WhenInView>
              {({isInView}) =>
                <Bubble1 hide={!isInView}>
                  <svg height="200" width="200">
                    <Ellipse pink cx="100" cy="100" rx="90" ry="90" />
                  </svg>
                  <BubbleP>Animations</BubbleP>
                </Bubble1>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble2 hide={!isInView}>
                  <svg height="160" width="160">
                    <Ellipse black cx="80" cy="80" rx="70" ry="70" />
                  </svg>
                  <BubbleP>HTML5 / CSS3</BubbleP>
                </Bubble2>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble3 hide={!isInView}>
                  <svg height="160" width="160">
                    <Ellipse pink cx="80" cy="80" rx="70" ry="70" />
                  </svg>
                  <BubblePmin>Responsive</BubblePmin>
                </Bubble3>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble4 hide={!isInView}>
                  <svg height="200" width="200">
                    <Ellipse black cx="100" cy="100" rx="100" ry="100" />
                  </svg>
                  <BubbleP>React</BubbleP>
                </Bubble4>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble5 hide={!isInView}>
                  <svg height="100" width="100">
                    <Ellipse black cx="50" cy="50" rx="50" ry="50" />
                  </svg>
                  <BubbleP>SVG</BubbleP>
                </Bubble5>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble6 hide={!isInView}>
                  <svg height="100" width="100">
                    <Ellipse pink cx="50" cy="50" rx="50" ry="50" />
                  </svg>
                  <BubblePmin>Github</BubblePmin>
                </Bubble6>
              }
            </WhenInView>
            <Bubble7 >
              <svg height="40" width="40">
                <Ellipse black cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble7>
            <Bubble8>
              <svg height="40" width="40">
                <Ellipse black cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble8>
            <Bubble9>
              <svg height="40" width="40">
                <Ellipse pink cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble9>
            <Bubble10>
              <svg height="40" width="40">
                <Ellipse pink cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble10>
            <WhenInView>
              {({isInView}) =>
                <Bubble11 hide={!isInView}>
                  <svg height="200" width="200">
                    <Ellipse black cx="100" cy="100" rx="100" ry="100" />
                  </svg>
                  <BubbleP>Javascript / JQUERY</BubbleP>
                </Bubble11>
              }
            </WhenInView>
            <Bubble12>
              <svg height="20" width="20">
                <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble12>
            <Bubble13>
              <svg height="20" width="20">
                <Ellipse black cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble13>
            <Bubble14>
              <svg height="20" width="20">
                <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble14>
            <WhenInView>
              {({isInView}) =>
                <Bubble15 hide={!isInView}>
                  <svg height="100" width="100">
                    <Ellipse black cx="50" cy="50" rx="50" ry="50" />
                  </svg>
                  <BubblePmin>npm, Webpack</BubblePmin>
                </Bubble15>
              }
            </WhenInView>
            <Bubble16>
              <svg height="20" width="20">
                <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble16>
            <Bubble17>
              <svg height="20" width="20">
                <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble17>
            <Bubble18>
              <svg height="20" width="20">
                <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </Bubble18>
            <Bubble19>
              <svg height="40" width="40">
                <Ellipse black cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </Bubble19>
            <WhenInView>
              {({isInView}) =>
                <Bubble20 hide={!isInView}>
                  <svg height="160" width="160">
                    <Ellipse pink cx="80" cy="80" rx="70" ry="70" />
                  </svg>
                  <BubblePmin>Bootstrap</BubblePmin>
                </Bubble20>
              }
            </WhenInView>
          </div>
          </CircleBottom>
        </Circle>
      </Wrapper>
    )
  }
}
