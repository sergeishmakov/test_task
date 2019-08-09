import React from 'react';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';

function TeamsListItemBase({ team, match: { path } }) {
  return (
    <ListItem button component='a' href={`${path}/${team.id}`}>
      <KeyboardArrowRight />
      <ListItemText primary={team.name} secondary={team.description} />
    </ListItem>
  );
}

export const TeamsListItem = withRouter(TeamsListItemBase);
