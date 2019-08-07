import React from 'react';
import { Typography, Button, AppBar } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Tools } from './styles';

export function Header({ title, label }) {
  return (
    <AppBar color='primary' position='static'>
      <Tools>
        <Typography variant='h5'>Workspace</Typography>
        <Typography variant='h6'>{title}</Typography>
        <Button color='inherit'>
          <Add />
          {label}
        </Button>
      </Tools>
    </AppBar>
  );
}
