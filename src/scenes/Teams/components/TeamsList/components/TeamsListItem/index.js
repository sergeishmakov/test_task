import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export function TeamsListItem({ team }) {
  return (
    <ListItem button>
      <ListItemText primary={team.name} secondary={team.description} />
    </ListItem>
  );
}
