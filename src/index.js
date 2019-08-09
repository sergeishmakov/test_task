import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Teams from './scenes/Teams';
import Tasks from './scenes/Tasks';
import { NotFound } from './scenes/NotFound';
import theme from './styles';

ReactDOM.render(
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <Switch>
            <Redirect exact from='/' to='/teams' />
            <Route path='/teams' component={Teams} />
            <Route path='/tasks' component={Tasks} />
            <Route component={NotFound} />
          </Switch>
        </>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
