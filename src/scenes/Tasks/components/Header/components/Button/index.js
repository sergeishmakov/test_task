import React from 'react';
import { Typography } from '@material-ui/core';

import { StyledButton } from './styles';

export function Button({ label, href }) {
  return (
    <StyledButton color='inherit' href={href}>
      <Typography variant='h5'>{label}</Typography>
    </StyledButton>
  );
}
