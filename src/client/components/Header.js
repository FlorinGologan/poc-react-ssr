import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderMenu () {
    return this.props.menu.map((item, index) => {
      return (
        <li className="nav-item" key={ index }>
          <Link className="nav-link" to={ item.url }>{ item.title }</Link>
        </li>
      );
    });
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <ul className="navbar-nav mr-auto">
          { this.renderMenu() }
        </ul>
      </nav>
    );
  }
}

function mapStateToProps ({menu}) {
  return {menu};
}

export default connect(mapStateToProps)(Header);
