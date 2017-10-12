import React, { Component } from 'react';

import Contact from './Contact.js';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home'
    };
  };

  render() {
    if ( this.state.currentPage == 'home' ) {
      return (
        <Home />
      );
    };

    if ( this.state.currentPage == 'resume' ) {
      return (
        <Resume />
      );
    };

    if ( this.state.currentPage == 'portfolio' ) {
      return (
        <Portfolio />
      );
    };

    if ( this.state.currentPage == 'contact' ) {
      return (
        <Contact />
      );
    };
  };
};

export default Content;
