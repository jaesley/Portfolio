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

export default Content;
