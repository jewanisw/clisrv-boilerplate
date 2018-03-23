import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './modules/App/pages/Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
      </Switch>
    );
  }
}

export default Routes;
