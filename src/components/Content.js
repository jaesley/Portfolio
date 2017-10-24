import React, { Component } from 'react';

import Contact from './Contact.js';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';

class Content extends Component {
  render() {
    if ( this.props.currentPage === 'Home' ) {
      return (
        <Home />
      );
    };

    if ( this.props.currentPage === 'Resume' ) {
      return (
        <Resume />
      );
    };

    if ( this.props.currentPage === 'Portfolio' ) {
      return (
        <Portfolio />
      );
    };

    if ( this.props.currentPage === 'Contact' ) {
      return (
        <Contact />
      );
    };
  };
};

export default Content;
