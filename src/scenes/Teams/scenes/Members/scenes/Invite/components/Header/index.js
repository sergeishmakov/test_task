import React from 'react';
import { Typography, Button, AppBar } from '@material-ui/core';

import { Tools } from '../../../../components/MembersHeader/styles';

export function Header({ title }) {
  return (
    <AppBar color='primary' position='static'>
      <Tools>
        <Button color='inherit' href='/'>
          <Typography variant='h5'>Workspace</Typography>
        </Button>
        <Typography variant='h6'>{title}</Typography>
        <div />
      </Tools>
    </AppBar>
  );
}
