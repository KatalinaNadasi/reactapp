import React, { Component } from 'react';
// import { render } from 'react-dom';
// import logo from './img/logo.jpg';
// CSS
import './App.css';
// import TransitionGroup from 'react-addons-transition-group';
// import './src/fonts/fonts.css';
import Menu from './components/Menu';
import Header from './components/Header';
// import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
      </div>
    );
  }
}

export default App;
