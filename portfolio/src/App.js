import React, { Component } from 'react';
import './App.css';

import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';

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
    };

    if ( this.state.currentPage == 'resume' ) {
      return (
        <div>
          <Resume />
        </div>
      );
    };

    if ( this.state.currentPage == 'portfolio' ) {
      return (
        <div>
          <Portfolio />
        </div>
      );
    };

    if ( this.state.currentPage == 'contact' ) {
      return (
        <div>
          <Contact />
        </div>
      );
    };
  };
};

export default App;
