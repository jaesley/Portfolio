import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home'
    };
  };


  render() {
    if ( this.state.currentPage == 'home' ) {
      return (
        <div>
          <Home />
        </div>
      );
    }
    else {
      return (
        'no'
      );
    };
  };
};

export default App;
