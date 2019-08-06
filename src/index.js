import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Teams from './scenes/Teams';
import { NotFound } from './scenes/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Redirect exact from='/' to='/teams' />
      <Route path='/teams' component={Teams} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
