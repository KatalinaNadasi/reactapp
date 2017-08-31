import React from 'react';
import '../index.css';

export default class Header extends React.Component {
  render(){
    return(
      <div className="wrapper">
        <div className="circle">
          <div className="circle-top">
            <h1>Katal<span>i</span>na</h1>
            <h1>Na<span>d</span>asi</h1>
          </div>
          <div className="circle-bottom">
            <div id="bubble-wrap1">
              <svg height="200" width="200">
                <ellipse className="bubble-pink" cx="100" cy="100" rx="90" ry="90" />
              </svg>
              <p>Javascript</p>
            </div>
            <div id="bubble-wrap2">
              <svg height="160" width="160">
                <ellipse className="bubble-black" cx="80" cy="80" rx="70" ry="70" />
              </svg>
              <p>HTML5</p>
            </div>
            <div id="bubble-wrap3">
              <svg height="140" width="140">
                <ellipse className="bubble-pink" cx="70" cy="70" rx="60" ry="60" />
              </svg>
              <p>CSS3</p>
            </div>
            <div id="bubble-wrap4">
              <svg height="200" width="200">
                <ellipse className="bubble-black" cx="100" cy="100" rx="100" ry="100" />
              </svg>
              <p>SVG</p>
            </div>
            <div id="bubble-wrap5">
              <svg height="80" width="80">
                <ellipse className="bubble-black" cx="40" cy="40" rx="40" ry="40" />
              </svg>
            </div>
            <div id="bubble-wrap6">
              <svg height="100" width="100">
                <ellipse className="bubble-pink" cx="50" cy="50" rx="50" ry="50" />
              </svg>
              <p>Github</p>
            </div>
            <div id="bubble-wrap7">
              <svg height="40" width="40">
                <ellipse className="bubble-black" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </div>
            <div id="bubble-wrap8">
              <svg height="40" width="40">
                <ellipse className="bubble-black" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </div>
            <div id="bubble-wrap9">
              <svg height="40" width="40">
                <ellipse className="bubble-pink" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </div>
            <div id="bubble-wrap10">
              <svg height="40" width="40">
                <ellipse className="bubble-pink" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </div>
            <div id="bubble-wrap11">
              <svg height="200" width="200">
                <ellipse className="bubble-black" cx="100" cy="100" rx="100" ry="100" />
              </svg>
              <p>Webpack</p>
            </div>
            <div id="bubble-wrap12">
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </div>
            <div id="bubble-wrap13">
              <svg height="20" width="20">
                <ellipse className="bubble-black" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </div>
            <div id="bubble-wrap14">
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </div>
            <div id="bubble-wrap15">
              <svg height="120" width="120">
                <ellipse className="bubble-black" cx="60" cy="60" rx="60" ry="60" />
              </svg>
              <p>blabla</p>
            </div>
            <div id="bubble-wrap16">
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </div>
            <div id="bubble-wrap17">
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </div>
            <div id="bubble-wrap18">
              <svg height="20" width="20">
                <ellipse className="bubble-pink" cx="10" cy="10" rx="10" ry="10" />
              </svg>
            </div>
            <div id="bubble-wrap19">
              <svg height="40" width="40">
                <ellipse className="bubble-black" cx="20" cy="20" rx="20" ry="20" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const b1 = document.getElementById('bubble1');
// const arr = [b1, b2, b3, b4];
//  Bubbles = arr.map(bubble) =>
//   arr[bubble].style.display = "block"
