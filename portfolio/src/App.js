import React, { Component } from 'react';
import './App.css';

import Content from './components/Content.js';
import Nav from './components/Nav.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'Home'
    }
  }

  render() {
    return (
      <div>
        <Nav />

        <Content currentPage='Home'/>
      </div>
    );
  };
};

export default App;
