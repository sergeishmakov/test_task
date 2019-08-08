import React, { Fragment } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

export function MembersListItem({ member }) {
  return (
    <ListItem button>
      <ListItemText
        primary={member.nickname}
        secondary={
          <Fragment>
            <b>{member.name}</b> - {member.description}
          </Fragment>
        }
      />
    </ListItem>
  );
}
