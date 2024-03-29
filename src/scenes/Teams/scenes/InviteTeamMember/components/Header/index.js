import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { Typography } from './styles';

export function Header({ title }) {
  return (
    <AppBar color='primary' position='static'>
      <Toolbar>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
