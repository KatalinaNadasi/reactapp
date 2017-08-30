import React, { Component } from 'react';
// import { render } from 'react-dom';
// import logo from './logo.svg';
import './App.css';
// import './assets/css/fonts.css';
import Menu from './components/Menu';
import Header from './components/Header';

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
