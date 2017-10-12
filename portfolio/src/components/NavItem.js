import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <div className='NavItem'>
        {this.props.text}
      </div>
    );
  };
};

export default NavItem;
