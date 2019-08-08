import React from 'react';
import { Typography, AppBar } from '@material-ui/core';

import { Tools } from './styles';

export function Header({ title }) {
  return (
    <AppBar color='primary' position='static'>
      <Tools>
        <Typography variant='h5'>WORKSPACE</Typography>
        <Typography variant='h6'>{title}</Typography>
        <div />
      </Tools>
    </AppBar>
  );
}
