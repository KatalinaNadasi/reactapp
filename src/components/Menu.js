import React from 'react';
import '../index.css';
import {
  Navbar, Bars
} from './Menu.style';
import {
  Route,
  NavLink
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Menu extends React.Component {
  constructor(props) {
      super(props);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.state = {
        menuActive: false
      };
    }

    toggleMenu() {
      let menuState = !this.state.menuActive;
      this.setState({
        menuActive: menuState
      });
    }


  render(){
    let menu;
     if(this.state.menuActive) {
       menu = <Navbar>
               <ul>
                 <li className="submenu">
                   <Bars
                     src={require('../img/bars.png')}
                     alt="menu"
                    />
                  <ul>
                   <li><NavLink to="/" exact activeClassName="activeNav" className="sublink">Home</NavLink></li>
                   <li><NavLink to="/projects" activeClassName="activeNav" className="sublink">Projects</NavLink></li>
                   <li><NavLink to="/about" activeClassName="activeNav" className="sublink">About me</NavLink></li>
                   <li><NavLink to="/contact" activeClassName="activeNav" className="sublink">Contact</NavLink></li>
                   </ul>
                 </li>
                </ul>
               </Navbar>
   } else {
     menu = "";
   }

    return(
      <Navbar>
        <i className = "fa fa-plus" onClick = { this.toggleMenu }/>
      <ReactCSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {menu}
      </ReactCSSTransitionGroup>
    </Navbar>
    )
  }
}
