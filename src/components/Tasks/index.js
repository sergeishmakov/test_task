import React, { Fragment } from 'react';
import { Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '../../styles';
import { Header } from '../Header';

export function Tasks() {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <Fragment>
        <Header title='Teams' />
        <Paper style={theme.rowPaper}></Paper>
      </Fragment>
    </MuiThemeProvider>
  );
}
