import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { Button } from './components/Button';
import { Typography } from './styles';

export function Header({ title }) {
  return (
    <AppBar color='primary' position='static'>
      <Toolbar>
        <Button label='Workspace' href='/' />
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
