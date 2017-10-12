import React, { Component } from 'react';
import './App.css';

import Content from './components/Content.js';
import Nav from './components/Nav.js';

class App extends Component {



  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>

        <div>
          <Content />
        </div>
      </div>
    );
  };
};

export default App;
