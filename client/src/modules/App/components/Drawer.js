import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import MDrawer from 'material-ui/Drawer';
import ListItem from 'material-ui/MenuItem';

import HomeIcon from 'material-ui/svg-icons/action/home';

import './Drawer.css';

function getIcon(pathname) {
  const icons = {
    home: <HomeIcon />,
  };
  const splitPathname = pathname.split(/\//);
  const section = splitPathname[1];
  // const id = splitPathname[2]; // TODO use with profile images later...
  return icons[section] || <HomeIcon />;
}

class Drawer extends Component {
  render() {
    const common = {
      activeClassName: 'nav-active',
      className: 'nav',
      onClick: this.context.isMobile() ? this.props.onRequestChange : () => {},
    };
    return (
      <MDrawer
        open={this.props.open}
        className="drawer"
        docked={!this.context.isMobile()}
        zDepth={1}
        onRequestChange={this.props.onRequestChange}
        containerClassName="drawer-content"
      >
        <NavLink
          {...common}
          to="/home"
          isActive={(match, location) => {
            return location.pathname === '/' || match;
          }}
        >
          <ListItem
            className="fix-mui-align drawer-list-item"
            primaryText="Home"
            leftIcon={getIcon('/home')}
          />
        </NavLink>
      </MDrawer>
    );
  }
}

Drawer.contextTypes = {
  isMobile: PropTypes.func.isRequired,
};

const mapStateToProps = (/* state */) => ({});

export default connect(mapStateToProps)(Drawer);
