import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../theme/globalStyle';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import {
  Navbar, Bars
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
            <li><NavLink to="/" exact activeClassName="activeNav" className="sublink">Home</NavLink></li>
            <li><NavLink to="/projects" activeClassName="activeNav" className="sublink">Projects</NavLink></li>
            <li><NavLink to="/about" activeClassName="activeNav" className="sublink">About me</NavLink></li>
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
