import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../theme/globalStyle';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Navbar, BarsContainer, Bars } from './components/Menu.style';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { browserHistory } from 'react-router';


ReactDOM.render(
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} >
    <Navbar className="menu-projects">
      <ul>
        <li className="submenu">
          <BarsContainer>
            <Bars id="bars"/>
          </BarsContainer>
          <ul>
            <li><NavLink to="/" exact activeClassName="activeNav" className="sublink">Home</NavLink></li>
            <li><NavLink to="/projects" activeClassName="activeNav" className="sublink">Projects</NavLink></li>
            <li><NavLink to="/about" activeClassName="activeNav" className="sublink">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="activeNav" className="sublink">Contact</NavLink></li>
          </ul>
        </li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Navbar>

  </Router>,
  document.getElementById('root')
);
