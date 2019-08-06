import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import { Tools } from './styles';

export function Header({ title }) {
  return (
    <AppBar position='static'>
      <Tools>
        <Typography variant='h5'>Workspace</Typography>
        <Typography variant='h6'>{title}</Typography>
      </Tools>
    </AppBar>
  );
}
