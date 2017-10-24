import React, { Component } from 'react';
import './App.css';

import Content from './components/Content.js';
import Footer from './components/Footer.js';
import NavItem from './components/NavItem.js';

class App extends Component {
  constructor() {
    super();
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onAboutClick = this.onAboutClick.bind(this);
    this.onResumeClick = this.onResumeClick.bind(this);
    this.onPortfolioClick = this.onPortfolioClick.bind(this);

    this.state = {
      currentPage: 'Home'
    };
  };

  onHomeClick() {
    this.setState({
      currentPage: 'Home'
    });
  };

  onResumeClick() {
    this.setState({
      currentPage: 'Resume'
    });
  };

  onAboutClick() {
    this.setState({
      currentPage: 'About'
    });
  };

  onPortfolioClick() {
    this.setState({
      currentPage: 'Portfolio'
    });
  };
  render() {
    return (
      <div className='App'>
        <div>
          <h1><NavItem text='Jae Easley' onNavClick={this.onHomeClick} /></h1>
          <section class='navlinks'>
            <NavItem text='about' onNavClick={this.onAboutClick} /> | 
            <NavItem text='portfolio' onNavClick={this.onPortfolioClick} /> | 
            <NavItem text='resume' onNavClick={this.onResumeClick} />
          </section>
        </div>

        <Content currentPage={this.state.currentPage} />

        <Footer />

      </div>
    );
  };
};

export default App;
