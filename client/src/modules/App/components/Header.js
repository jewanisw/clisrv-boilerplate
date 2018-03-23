import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <AppBar
        iconElementLeft={<IconButton className="header-icons" onClick={() => this.props.menuToggle()}><MenuIcon /></IconButton>}
        title={(
          <NavLink to="/" >
            <span className="header-title">
              <span>App</span>
            </span>
          </NavLink>
        )}
        iconStyleLeft={{cursor: 'pointer'}}
        className="app-header"
      />
    );
  }
}

Header.contextTypes = {
  isMobile: PropTypes.func.isRequired,
};

export default Header;
