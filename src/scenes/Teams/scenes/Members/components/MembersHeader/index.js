import React from 'react';
import { Typography, Button, AppBar } from '@material-ui/core';
import { Add, KeyboardArrowLeft } from '@material-ui/icons';

import { Tools } from './styles';

export function MembersHeader({ title, label }) {
  return (
    <AppBar color='primary' position='static'>
      <Tools>
        <Button color='inherit' href='/teams'>
          <KeyboardArrowLeft />
          Go Back
        </Button>
        <Typography variant='h6'>{title}</Typography>
        <Button color='inherit'>
          <Add />
          {label}
        </Button>
      </Tools>
    </AppBar>
  );
}
