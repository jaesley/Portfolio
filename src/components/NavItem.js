import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <div className='NavItem' onClick={this.props.onNavClick} >
        {this.props.text}
      </div>
    );
  };
};

export default NavItem;
