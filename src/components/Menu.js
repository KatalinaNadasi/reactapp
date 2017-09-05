import React from 'react';
import '../index.css';

class Menu extends React.Component {
  render() {

    return (
      <nav>
        <div className="navbar">
          <ul className="list-group">
            <li className="submenu">
              <img src={require('../img/bars.png')} className="bars" alt="menu" />
              <ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Availabilities</a></li>
                <li><a href="#">Contact me</a></li>
                <li><a href="#">Previous website</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
