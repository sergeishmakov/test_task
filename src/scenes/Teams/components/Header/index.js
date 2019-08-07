import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Tools, TeamsAppBar } from './styles';

export function Header({ title }) {
  return (
    <TeamsAppBar position='static'>
      <Tools>
        <Typography variant='h5'>Workspace</Typography>
        <Typography variant='h6'>{title}</Typography>
        <Button color='inherit'>
          <Add />
          Add team
        </Button>
      </Tools>
    </TeamsAppBar>
  );
}
