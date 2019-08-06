import React from 'react';
import { List, Avatar, ListItem, FlatButton } from 'material-ui';
import Settings from 'material-ui/svg-icons/action/settings';
import { deepOrange50 } from 'material-ui/styles/colors';

import theme from '../../../../styles';

export function TeamsList({ teams, teamId, onClick }) {
  return (
    <List>
      {teams.map(team => (
        <div key={team.id} style={team.id === teamId ? { background: deepOrange50 } : null}>
          <ListItem
            key={team.id}
            hoverColor={deepOrange50}
            leftAvatar={
              <Avatar alt={`Avatar ${team.name}`} style={theme.avatar} src={`/public/images/avatar/${team.name}.jpg`} />
            }
            onClick={() => onClick(team.id)}
            initiallyOpen={false}
            rightIconButton={<FlatButton label='edit' primary icon={<Settings />} />}
            primaryText={team.name}
            secondaryText={team.description}
          />
        </div>
      ))}
    </List>
  );
}
