import React, { Component } from 'react';

import NavItem from './NavItem.js';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <NavItem text='Home' />
        <NavItem text='Resume' />
        <NavItem text='Portfolio' />
        <NavItem text='Contact' />
      </div>
    );
  };
};

export default Nav;
