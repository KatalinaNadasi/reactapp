import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../theme/globalStyle';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import {
  Navbar, Bars, jump
} from './components/Menu.style';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


ReactDOM.render(
  <Router>
    <Navbar>
      <ul>
        <li className="submenu">
          <Bars src={require('./img/bars.png')} alt="menu"/>
          <ul>
            <li className="active"><NavLink to="/" className="sublink">Home</NavLink></li>
            <li><NavLink to="/projects" className="sublink">Projects</NavLink></li>
            <li><NavLink to="/about" className="sublink">About me</NavLink></li>
            <li><NavLink to="/contact" className="sublink">Contact</NavLink></li>
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
