import React from 'react';
import { List } from '@material-ui/core';

import { TeamsListItem } from './components/TeamsListItem';

export function TeamsList({ teams }) {
  return (
    <List>
      {teams.map((team, index) => (
        <TeamsListItem key={index} {...team} />
      ))}
    </List>
  );
}
