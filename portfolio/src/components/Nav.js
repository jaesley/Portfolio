import React, { Component } from 'react';

import NavItem from './NavItem.js';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <NavItem text='Home' onNavClick={this.props.onNavClick} />
        <NavItem text='Resume' onNavClick={this.props.onNavClick} />
        <NavItem text='Portfolio' onNavClick={this.props.onNavClick} />
        <NavItem text='Contact' onNavClick={this.props.onNavClick} />
      </div>
    );
  };
};

export default Nav;
