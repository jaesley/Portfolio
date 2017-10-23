import React, { Component } from 'react';
import './App.css';

import Content from './components/Content.js';
import Nav from './components/Nav.js';

class App extends Component {
  constructor() {
    super();
    this.onNavClick = this.onNavClick.bind(this);

    this.state = {
      currentPage: 'Home'
    };
  };

  onNavClick() {
    this.setState({
      currentPage: 'Resume'
    });
  };

  render() {
    return (
      <div className='App'>
        <Nav onNavClick={this.onNavClick} />
      
        <div className='name'>
          Jae Easley
        </div>

        <div className='title'>
          web developer
        </div>


        <Content currentPage={this.state.currentPage} />
      </div>
    );
  };
};

export default App;
