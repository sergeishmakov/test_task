import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import Teams from './components/Teams';
import { Tasks } from './components/Tasks';
import { Help } from './components/Help';
import { NotFound } from './components/NotFound';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Redirect exact from='/' to='/teams' />
          <Route path='/teams' component={Teams} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/help' component={Help} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
