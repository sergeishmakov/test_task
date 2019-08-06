import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export function TeamsListItem({ name, description }) {
  return (
    <ListItem button>
      <ListItemText primary={name} secondary={description} />
    </ListItem>
  );
}
