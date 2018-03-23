import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';

import store from './store';
import AppModule from './modules/App/App';

import Routes from './Routes';
import {Theme} from './theme';

class App extends Component {
  componentWillMount() {

  }
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={Theme}>
          <BrowserRouter>
            <AppModule>
              <Routes />
            </AppModule>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
