import React from 'react';
import { List, Avatar, ListItem } from 'material-ui';
import { deepOrange50 } from 'material-ui/styles/colors';

import theme from '../../../../styles';

export function MembersList({ members }) {
  return (
    <List>
      {members ? (
        members.map(member => (
          <ListItem
            key={member.name}
            hoverColor={deepOrange50}
            leftAvatar={
              <Avatar
                alt={`Avatar ${member.name}`}
                style={theme.avatar}
                src={`/public/images/avatar/${member.name}.jpg`}
              />
            }
            primaryText={member.nickname}
            secondaryText={`${member.name} - ${member.description}`}
          />
        ))
      ) : (
        <p>No one is in this team</p>
      )}
    </List>
  );
}
