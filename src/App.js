import React, { Component } from 'react';
import './App.css';

import Content from './components/Content.js';
import Footer from './components/Footer.js';
import { Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Button   } from 'react-bootstrap';

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
  <Grid>
    <Row>
      <Col xs={12}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Jae Easley
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>About</NavItem>
            <NavItem eventKey={2} href="#">Portfolio</NavItem>
            <NavItem eventKey={2} href="#">Resume</NavItem>
          </Nav>
        </Navbar>

        <Jumbotron>
          <h1><small>When I ran bookstores, I always imagined living in a book.</small></h1>
          <p>I just didn't realize that book would be <i>Cracking the Coding Interview</i>. My life as a web developer started with mastering Excel and Mediawiki for enhancing all my tabletop games; now I spend my time building apps to find me more books and lobbying Spotify to bring back artist location info in their API. I still love pivot tables.</p>
          <p>When I'm not coding, you can find me touring Seattle's dog parks or concert venues. I'll be the one on the front row.</p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>

        <Content currentPage={this.state.currentPage} />

        <Footer />

      </div>
    );
  };
};

export default App;
