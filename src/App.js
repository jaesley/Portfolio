import React, { Component } from 'react';
import './App.css';

import Content from './components/Content.js';
import Footer from './components/Footer.js';
import NavItem from './components/NavItem.js';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Jae Easley
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <Content currentPage={this.state.currentPage} />

        <Footer />

      </div>
    );
  };
};

export default App;
