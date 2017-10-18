import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashistory } from 'react-router';

hashistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
