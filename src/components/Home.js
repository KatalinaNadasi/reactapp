import React, {Component} from 'react';
import Header from './Header';
import Portfolio from './Portfolio';

export default class Home extends Component {
  render(){
    return(
      <div>
        <Header />
        <Portfolio />
      </div>
    );
  }

}
