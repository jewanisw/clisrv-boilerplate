import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bowser from 'bowser';

import Snackbar from 'material-ui/Snackbar';

import Header from './components/Header';
import Drawer from './components/Drawer';

import {routeChanged} from './AppActions';

import './App.css';

const isMobile = () => {
  const {clientWidth, clientHeight} = document.body;
  return bowser.mobile || clientWidth < clientHeight;
};
const isTablet = () => bowser.tablet;
const isTouchDevice = () => bowser.mobile || bowser.tablet;

class App extends Component {
  static childContextTypes = {
    history: PropTypes.object.isRequired,
    isMobile: PropTypes.func.isRequired,
    isTablet: PropTypes.func.isRequired,
    isTouchDevice: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: !isMobile(),
      snackbarOpen: false,
    };
  }
  getChildContext() {
    return {
      history: this.props.history,
      isMobile,
      isTablet,
      isTouchDevice,
    };
  }
  componentWillMount() {
    if (isMobile()) {
      this.setState({drawerOpen: false});
    }
    this.onRouteChange(this.props.location.pathname);
  }
  componentWillReceiveProps(props) {
    if (props.message && props.messageid !== this.props.messageid) {
      this.setState({snackbarOpen: true});
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChange(this.props.location.pathname);
    }
  }
  onRouteChange(path) {
    this.props.dispatch(routeChanged(path));
  }
  render() {
    const mainClass = this.state.drawerOpen && !isMobile() ? 'app-main drawer-open' : 'app-main';
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>App</title>
          <meta name="description" content="App" />
        </Helmet>
        <Header
          menuToggle={() => this.setState({drawerOpen: !this.state.drawerOpen})}
        />
        <Drawer
          open={this.state.drawerOpen}
          location={this.props.location}
          onRequestChange={() => this.setState({drawerOpen: !this.state.drawerOpen})}
        />
        <div className={mainClass}>
          {this.props.children}
        </div>
        <Snackbar
          open={this.state.snackbarOpen}
          message={this.props.message || ''}
          className="fix-mui-align"
          autoHideDuration={this.props.messageDuration}
          onRequestClose={() => this.setState({snackbarOpen: false})}
          onActionClick={() => this.setState({snackbarOpen: false})}
          action={this.props.messageAction || ''}
        />
      </div>
    );
  }
}

const mapStateToProps = (/* state */) => ({

});

export default withRouter(connect(mapStateToProps)(App));
