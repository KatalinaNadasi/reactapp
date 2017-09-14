import React from 'react';
import '../index.css';
import Wrapper from '../components/Wrapper';
import {
  Circle, CircleTop, CircleTitle, Black, CircleSub, CircleBottom, Ellipse, BubbleP, BubblePmin, Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, Bubble6, Bubble7, Bubble8, Bubble9, Bubble10, Bubble11, Bubble12, Bubble13, Bubble14, Bubble15, Bubble16, Bubble17, Bubble18, Bubble19, Bubble20
} from '../components/Header.style';
import WhenInView from '../js/WhenInView';


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
            <WhenInView>
              {({isInView}) =>
                <Bubble7 hide={!isInView}>
                  <svg height="40" width="40">
                    <Ellipse black cx="20" cy="20" rx="20" ry="20" />
                  </svg>
                </Bubble7>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble8 hide={!isInView}>
                  <svg height="40" width="40">
                    <Ellipse black cx="20" cy="20" rx="20" ry="20" />
                  </svg>
                </Bubble8>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble9 hide={!isInView}>
                  <svg height="40" width="40">
                    <Ellipse pink cx="20" cy="20" rx="20" ry="20" />
                  </svg>
                </Bubble9>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble10 hide={!isInView}>
                  <svg height="40" width="40">
                    <Ellipse pink cx="20" cy="20" rx="20" ry="20" />
                  </svg>
                </Bubble10>
              }
            </WhenInView>
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
            <WhenInView>
              {({isInView}) =>
                <Bubble12 hide={!isInView}>
                  <svg height="20" width="20">
                    <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
                  </svg>
                </Bubble12>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble13 hide={!isInView}>
                  <svg height="20" width="20">
                    <ellipse className="bubble-black" cx="10" cy="10" rx="10" ry="10" />
                  </svg>
                </Bubble13>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble14 hide={!isInView}>
                  <svg height="20" width="20">
                    <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
                  </svg>
                </Bubble14>
              }
            </WhenInView>
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
            <WhenInView>
              {({isInView}) =>
                <Bubble16 hide={!isInView}>
                  <svg height="20" width="20">
                    <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
                  </svg>
                </Bubble16>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble17 hide={!isInView}>
                  <svg height="20" width="20">
                    <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
                  </svg>
                </Bubble17>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble18 hide={!isInView}>
                  <svg height="20" width="20">
                    <Ellipse pink cx="10" cy="10" rx="10" ry="10" />
                  </svg>
                </Bubble18>
              }
            </WhenInView>
            <WhenInView>
              {({isInView}) =>
                <Bubble19 hide={!isInView}>
                  <svg height="40" width="40">
                    <Ellipse black cx="20" cy="20" rx="20" ry="20" />
                  </svg>
                </Bubble19>
              }
            </WhenInView>
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
